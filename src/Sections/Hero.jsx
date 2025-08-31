import TerminalWindow from "../Components/Hero/Terminal";
import { terminalPhrases } from "../constants";
import FloatingCodeBlocks from "../Components/Hero/FloatingCode";

// Main Hero Component
const Hero = () => {
  return (
    
     

      <section 
        className="min-h-screen w-full flex flex-col relative overflow-hidden px-4 sm:px-6"
        id="home"
      >
        {/* Floating Code Blocks */}
        <FloatingCodeBlocks />

        {/* Main Content */}
        <div className="hero-container flex-1 flex flex-col justify-center items-center relative z-10">
          <div className="text-center max-w-7xl mx-auto space-y-6 sm:space-y-8 w-full">
            {/* Main Title with Better Responsive Sizing */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white glow-text leading-tight px-2">
                Hi, I'm{" "}
                <span className="text-gradient block sm:inline">Danish</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 px-4">
                Software Developer & AI/ML Enthusiast
              </p>
            </div>

            {/* Terminal Window with Your Phrases */}
            <TerminalWindow phrases={terminalPhrases} />

            {/* Action Buttons - Better Responsive Layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a href="#projects" className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden text-sm sm:text-base">
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a href="#contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg relative group overflow-hidden text-sm sm:text-base">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 floating-element">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>

        {/* Responsive Decorative Elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl floating-element"></div>
        <div
          className="absolute bottom-32 sm:bottom-40 right-4 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-lg floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-8 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-md floating-element"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
    
  );
};

export default Hero;
