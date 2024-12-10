"use client";

import React, { useEffect } from "react";
import "./ink-image.css";

interface InkImageComponentProps {
  src: string;
  alt: string;
}

const InkImageComponent: React.FC<InkImageComponentProps> = ({ src, alt }) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollmagic").then((ScrollMagicModule) => {
        const ScrollMagic = ScrollMagicModule.default;

        if (ScrollMagic) {

          const controller = new ScrollMagic.Controller();

          const inkTriggers = document.querySelectorAll<HTMLDivElement>(".js-ink-trigger");
          inkTriggers.forEach((ink) => {
            new ScrollMagic.Scene({
              triggerElement: ink,
              triggerHook: "onEnter",
            })
              .setClassToggle(ink, "is-active")
              .reverse(false)
              .addTo(controller);
          });

          return () => {
            controller.destroy(true);
          };
        }
      });
    }
  }, []);

  return (
    <div className="ink-image js-ink-trigger">
      <img
        className="ink-image-img"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default InkImageComponent;
