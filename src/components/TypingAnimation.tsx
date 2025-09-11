// portfolio/components/TypingAnimation.tsx
'use client';

import { useState, useEffect } from 'react';

type TypingAnimationProps = {
  text: string;
  speed?: number;
  delay?: number;
};

const TypingAnimation = ({ text, speed = 100, delay = 0 }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Este useEffect maneja el retraso inicial (delay)
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true); // Comienza a escribir después del delay
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  // Este useEffect maneja la escritura caracter por caracter
  useEffect(() => {
    if (!isTyping || displayedText.length === text.length) {
      return; // No hagas nada si no es tiempo de escribir o si ya terminó
    }

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => text.substring(0, prev.length + 1));
    }, speed);

    return () => clearInterval(typingInterval);
  }, [isTyping, displayedText, text, speed]);

  return <span className="typing-animation-text">{displayedText}</span>;
};

export default TypingAnimation;