"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionDivProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionDiv({
  children,
  className,
  delay = 0,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
