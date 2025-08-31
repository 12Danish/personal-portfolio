import { useState, useEffect, useRef } from "react";

const TerminalTyping = ({ phrases, className = "" }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const timeoutRef = useRef(null);
  const currentPhrase = phrases?.[currentPhraseIndex] || "";

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const animate = () => {
      if (isTyping) {
        if (charIndex < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          timeoutRef.current = setTimeout(animate, 10); // Extremely fast typing
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsTyping(false);
            timeoutRef.current = setTimeout(animate, 100); // Very short pause
          }, 5); // Minimal pause after typing
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          timeoutRef.current = setTimeout(animate, 50); // Very fast deleting
        } else {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
          timeoutRef.current = setTimeout(animate, 100); // Short pause before next phrase
        }
      }
    };

    timeoutRef.current = setTimeout(animate, 100); // Reduced initial delay

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, isTyping, currentPhrase, phrases]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-green-400">|</span>
    </span>
  );
};

// Interactive Terminal Window with Custom Phrases
const TerminalWindow = ({ phrases }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-6 sm:mt-8">
      <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2 text-xs sm:text-sm">
            terminal
          </span>
        </div>
        <div className="p-4 font-mono text-xs sm:text-sm min-h-[60px] sm:min-h-[80px]">
          <div className="text-green-400">
            <TerminalTyping phrases={phrases} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default TerminalWindow