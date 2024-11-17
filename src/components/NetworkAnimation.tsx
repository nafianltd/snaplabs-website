'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

export default function NetworkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yOffset = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    { stiffness: 50, damping: 20 }
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Node class
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseY: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
      }

      update(scrollOffset: number, width: number, height: number) {
        this.x += this.vx;
        this.y = this.baseY - scrollOffset; // Subtract to move up when scrolling down
        this.y += this.vy;

        // Boundary checking
        if (this.x < 0 || this.x > width) this.vx *= -1;
        
        // Keep vertical movement within bounds
        const maxOffset = height * 0.2;
        if (Math.abs(this.y - (this.baseY - scrollOffset)) > maxOffset) {
          this.vy *= -1;
        }
      }
    }

    // Create nodes
    const nodes = Array.from({ length: 80 }, () => new Node(window.innerWidth, window.innerHeight));
    let currentScrollOffset = 0;

    // Animation
    const animate = () => {
      if (!canvas.parentElement) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      currentScrollOffset = yOffset.get();
      
      // Update and draw nodes
      nodes.forEach(node => node.update(currentScrollOffset, canvas.width, canvas.height));

      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(74, 144, 226, 0.3)';
      ctx.lineWidth = 0.5;
      
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach(nodeB => {
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
          }
        });
      });
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [yOffset]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
}
