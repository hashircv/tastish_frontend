import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "./useReducedMotion";

export function useCounter(end: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(end);
      return;
    }
    const started = performance.now();
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - started) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, end, inView, reduced]);

  return { ref, value };
}
