"use client";

import React, { useEffect, useRef, useCallback } from 'react';

interface FullScreenScrollProps {
  children: React.ReactNode;
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

const FullScreenScroll: React.FC<FullScreenScrollProps> = ({
  children,
  currentSection,
  setCurrentSection,
}) => {
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const sectionsLength = React.Children.count(children);

  const handleScroll = useCallback((deltaY: number) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (deltaY > 0) {
      setCurrentSection(Math.min(currentSection + 1, sectionsLength - 1));
    } else {
      setCurrentSection(Math.max(currentSection - 1, 0));
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000); // Debounce time
  }, [currentSection, setCurrentSection, sectionsLength]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      handleScroll(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const deltaY = touchStartY.current - event.touches[0].clientY;
      if (Math.abs(deltaY) > 5) { // Threshold
        handleScroll(deltaY);
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleScroll]);

  return (
    <div className="h-screen w-screen overflow-hidden fixed top-0 left-0 z-10">
      <div
        className="h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default FullScreenScroll;
