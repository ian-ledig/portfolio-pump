"use client";

import React, { useEffect, useState } from "react";

const words = [
  "website for your business?",
  "custom software?",
  "mobile application for IOS and Android?",
];

const RandomTextComponent: React.FC = () => {
  const [part, setPart] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [forwards, setForwards] = useState<boolean>(true);
  const [skipCount, setSkipCount] = useState<number>(0);

  useEffect(() => {
    const speed = 70;
    const skipDelay = 15;

    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[index].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset((prev) => prev + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setIndex((prev) => (prev + 1) % words.length);
        } else {
          setOffset((prev) => prev - 1);
        }
      }
      setPart(words[index].substring(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, index, skipCount]);

  return <div>Need a {part}_</div>;
};

export default RandomTextComponent;
