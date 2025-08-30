import { heroPhrases } from "../constants";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Components/Hero/HackerRoom.jsx";
import CanvasLoader from "../Components/Hero/CanvasLoader.jsx";
import { Suspense, useMemo, useState, useEffect } from "react";
import HeroCamera from "../Components/Hero/HeroCamera.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import TypingAnimation from "../Components/Hero/TypingSection.jsx";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet]
  );

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "50px", // Start loading slightly before coming into view
      }
    );

    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <section className="flex flex-col w-full h-screen overflow-hidden relative">
      <div className="w-full mx-auto flex flex-col sm:mt-26 mt-20 c-space gap-3  ">
        <p className="sm:text-3xl text-2xl text-white text-center font-bold font-generalsans">
          Hi I am Danish
        </p>

        {/* Typing Animation Container */}
        <div className="text-center h-16 flex items-center justify-center  ">
          <p className="sm:text-2xl text-lg font-generalsans min-h-[1.5em] font-semibold ">
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

      <div className="w-full h-full inset-0 absolute">
        {isVisible && (
          <Canvas
            className="w-full h-full"
            gl={{
              antialias: false, // Better performance
              alpha: true,
              powerPreference: "high-performance",
            }}
            dpr={[1, Math.min(window.devicePixelRatio, 2)]} // Limit pixel ratio
            frameloop={isVisible ? "always" : "never"} // Stop rendering when not visible
          >
            <Suspense fallback={<CanvasLoader />}>
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
