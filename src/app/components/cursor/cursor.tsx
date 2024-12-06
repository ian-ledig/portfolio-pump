"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./cursor.css";

const CursorComponent = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    for (let i = 0; i < 200; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      cursor?.appendChild(circle);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const x = e.clientX + scrollX;
      const y = e.clientY + scrollY;

      gsap.to('.circle', {
        x,
        y,
        stagger: -0.0025,
        scale: (i: number) => 1 + i * (2 / 200),
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
};

export default CursorComponent;
