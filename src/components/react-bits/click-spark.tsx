"use client";

// Adapted from React Bits ClickSpark (MIT + Commons Clause).
import { useCallback, useEffect, useRef } from "react";

type Spark = { x: number; y: number; angle: number; start: number };

export function ClickSpark({ children, color = "#D7FF3F" }: { children: React.ReactNode; color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparks = useRef<Spark[]>([]);
  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width + 80; canvas.height = rect.height + 80;
  }, []);
  useEffect(() => {
    resize();
    const observer = new ResizeObserver(resize);
    if (canvasRef.current?.parentElement) observer.observe(canvasRef.current.parentElement);
    let frame = 0;
    const draw = (time: number) => {
      const canvas = canvasRef.current; const context = canvas?.getContext("2d");
      if (canvas && context) {
        context.clearRect(0,0,canvas.width,canvas.height);
        sparks.current = sparks.current.filter((spark) => {
          const progress = (time - spark.start) / 520;
          if (progress >= 1) return false;
          const eased = progress * (2 - progress); const distance = eased * 32; const length = 13 * (1 - eased);
          context.strokeStyle = color; context.lineWidth = 2; context.beginPath();
          context.moveTo(spark.x + distance * Math.cos(spark.angle), spark.y + distance * Math.sin(spark.angle));
          context.lineTo(spark.x + (distance + length) * Math.cos(spark.angle), spark.y + (distance + length) * Math.sin(spark.angle)); context.stroke();
          return true;
        });
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [color, resize]);
  return <div className="click-spark" onClick={(event) => { const rect = event.currentTarget.getBoundingClientRect(); const now = performance.now(); sparks.current.push(...Array.from({length:10},(_,index)=>({x:event.clientX-rect.left+40,y:event.clientY-rect.top+40,angle:(Math.PI*2*index)/10,start:now}))); }}><canvas ref={canvasRef} aria-hidden="true" />{children}</div>;
}
