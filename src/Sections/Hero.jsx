import { heroPhrases } from "../constants";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Components/Hero/HackerRoom.jsx";
import CanvasLoader from "../Components/Hero/CanvasLoader.jsx";
import { Suspense, useMemo, useState, useEffect, useRef, useCallback } from "react";
import HeroCamera from "../Components/Hero/HeroCamera.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import TypingAnimation from "../Components/Hero/TypingSection.jsx";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet]
  );

  // Optimized scroll detection
  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      setIsScrolling(true);
    }
    
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 100); // Resume 3D rendering 100ms after scroll stops
  }, [isScrolling]);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  // Add scroll listener for performance optimization
  useEffect(() => {
    const scrollOptions = { passive: true, capture: false };
    
    window.addEventListener('scroll', handleScroll, scrollOptions);
    window.addEventListener('touchmove', handleScroll, scrollOptions);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  // Enhanced canvas configuration for better performance
  const canvasProps = useMemo(() => ({
    className: "w-full h-full",
    gl: { 
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false, // Disable stencil buffer
      depth: true,
      logarithmicDepthBuffer: true, // Better depth precision
      preserveDrawingBuffer: false, // Better memory usage
    },
    dpr: [1, Math.min(window.devicePixelRatio, 2)],
    // Reduce framerate during scroll to prioritize scroll smoothness
    frameloop: isVisible ? (isScrolling ? 'never' : 'always') : 'never',
    performance: {
      min: 0.2,
      max: 1,
      debounce: 200,
    },
    shadows: false, // Disable shadows for performance
  }), [isVisible, isScrolling]);

  return (
    <section 
      id="hero-section"
      className="flex flex-col w-full h-screen overflow-hidden relative"
      style={{
        // Optimize for scroll performance
        contain: 'layout style paint',
        transform: 'translateZ(0)',
      }}
    >
      <div className="w-full mx-auto flex flex-col sm:mt-26 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl text-white text-center font-bold font-generalsans">
          Hi I am Danish
        </p>

        {/* Typing Animation Container */}
        <div className="text-center h-16 flex items-center justify-center">
          <p className="sm:text-2xl text-lg font-generalsans min-h-[1.5em] font-semibold">
            <TypingAnimation
              phrases={heroPhrases}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2000}
              className="text-gray_gradient"
              cursorClassName="text-gray_gradient"
            />
          </p>
        </div>
      </div>
      
      <div 
        className="w-full h-full inset-0 absolute"
        style={{
          // Isolate 3D rendering to its own layer
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {isVisible && (
          <Canvas {...canvasProps}>
            <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <HeroCamera isMobile={isMobile} isVisible={isVisible}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </HeroCamera>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        )}
      </div>
    </section>
  );
};

export default Hero;