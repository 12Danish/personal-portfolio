import { useState, useEffect, useRef, useCallback } from "react";

const TypingAnimation = ({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = "",
  cursorClassName = "",
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  
  // Use refs to avoid recreating timeouts and improve performance
  const timeoutRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastUpdateTime = useRef(0);

  // Memoize current phrase to avoid recalculation
  const currentPhrase = phrases?.[currentPhraseIndex] || "";

  // Optimized animation function using requestAnimationFrame for better performance
  const animate = useCallback((timestamp) => {
    const elapsed = timestamp - lastUpdateTime.current;
    const currentSpeed = isTyping ? typingSpeed : deletingSpeed;

    if (elapsed >= currentSpeed) {
      lastUpdateTime.current = timestamp;

      if (isTyping) {
        // Typing phase
        if (charIndex < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          // Finished typing, pause before deleting
          setIsTyping(false);
          lastUpdateTime.current = timestamp + pauseDuration; // Add pause delay
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setCurrentText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          // Finished deleting, move to next phrase
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
          setIsTyping(true);
        }
      }
    }

    // Continue animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [charIndex, isTyping, currentPhrase, typingSpeed, deletingSpeed, pauseDuration, phrases.length]);

  // Start animation loop
  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    // Initialize animation
    lastUpdateTime.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      // Cleanup animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [animate]);

  // Reset when phrases change
  useEffect(() => {
    setCurrentPhraseIndex(0);
    setCurrentText("");
    setIsTyping(true);
    setCharIndex(0);
  }, [phrases]);

  // Memoized cursor to prevent unnecessary re-renders
  const cursor = (
    <span 
      className={`animate-pulse ${cursorClassName}`}
      style={{
        // Optimize cursor animation
        animationDuration: '1s',
        animationTimingFunction: 'ease-in-out',
      }}
    >
      |
    </span>
  );

  return (
    <span className={className}>
      {currentText}
      {cursor}
    </span>
  );
};

export default TypingAnimation;