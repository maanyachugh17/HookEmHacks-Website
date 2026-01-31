import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BillboardPanel({ 
  children, 
  className, 
  delay = 0, 
  animate = true,
  variant = "default",
  glow = false,
  ...props 
}) {
  const variants = {
    default: "billboard-panel",
    accent: "billboard-panel border-primary/30",
    muted: "billboard-panel bg-muted/80",
  };

  const content = (
    <div 
      className={cn(
        variants[variant],
        glow && "glow-effect",
        "transition-all duration-300",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {content}
    </motion.div>
  );
}

export function FloatingBillboard({ 
  children, 
  className,
  floatDelay = 0,
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn("relative", className)}
      {...props}
    >
      <div 
        className="billboard-panel p-6 md:p-8 float-animation"
        style={{ animationDelay: `${floatDelay}s` }}
      >
        {children}
      </div>
      {/* Shadow underneath */}
      <div 
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full bg-foreground/5 blur-xl"
      />
    </motion.div>
  );
}
