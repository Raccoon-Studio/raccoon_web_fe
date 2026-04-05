/* Framer Motion variant definitions for the SignUp module. */
import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const stepSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const orbFloat: Variants = {
  animate: {
    y: [0, -14, 0],
    rotate: [0, 3, -3, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export const orbPulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.45, 0.8, 0.45],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export const ringRotate: Variants = {
  animate: {
    rotate: [0, 360],
    transition: { duration: 24, repeat: Infinity, ease: "linear" },
  },
};