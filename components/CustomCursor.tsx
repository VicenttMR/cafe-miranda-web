"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { damping: 28, stiffness: 600 });
  const y = useSpring(my, { damping: 28, stiffness: 600 });

  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!t.closest('a, button, [role="button"], input, select, label'));
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [mx, my, visible]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[200] pointer-events-none hidden lg:block rounded-full mix-blend-difference bg-white"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovered ? 44 : 10,
        height: hovered ? 44 : 10,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    />
  );
}
