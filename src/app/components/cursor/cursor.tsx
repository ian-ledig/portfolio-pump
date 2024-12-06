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
      if (cursor) {
        cursor.appendChild(circle);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to('.circle', {
        x: clientX,
        y: clientY,
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