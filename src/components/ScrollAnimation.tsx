'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

export default function ScrollAnimation({ children }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
      }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
}
