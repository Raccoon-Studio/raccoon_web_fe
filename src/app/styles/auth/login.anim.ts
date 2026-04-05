/* Framer Motion variant definitions for the Login page. */
import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const orbFloat: Variants = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const orbPulse: Variants = {
  animate: {
    scale: [1, 1.06, 1],
    opacity: [0.5, 0.85, 0.5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const ringRotate: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 24,
      repeat: Infinity,
      ease: "linear",
    },
  },
};