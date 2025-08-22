import { motion } from "framer-motion";

interface MotionGridItemProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionGridItem({ children, className }: MotionGridItemProps) {
  return (
    <motion.div 
      style={{ justifyContent: "flex-start" }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8}}
      className={className}
    >
      {children}
    </motion.div>
  );
}