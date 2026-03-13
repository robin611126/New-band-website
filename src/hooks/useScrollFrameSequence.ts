import { useTransform, MotionValue } from "framer-motion";

export const useScrollFrameSequence = (
  scrollYProgress: MotionValue<number>,
  frameCount: number
) => {
  return useTransform(scrollYProgress, [0, 1], [0, frameCount - 1], { clamp: true });
};
