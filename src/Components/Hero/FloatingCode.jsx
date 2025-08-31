import { codeSnippets } from "../../constants";
// Floating Code Blocks Animation
const FloatingCodeBlocks = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((code, i) => (
        <div
          key={i}
          className="absolute text-xs font-mono text-green-400/30 whitespace-nowrap"
          style={{
            left: Math.random() * 80 + "%",
            top: Math.random() * 80 + "%",
            animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: Math.random() * 4 + "s",
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        >
          {code}
        </div>
      ))}
    </div>
  );
};

export default FloatingCodeBlocks;
