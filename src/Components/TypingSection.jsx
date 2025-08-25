import { useState,useEffect } from "react";
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

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      // Typing phase
      if (charIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next phrase
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [
    charIndex,
    isTyping,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className={`animate-pulse ${cursorClassName}`}>|</span>
    </span>
  );
};

export default TypingAnimation;
