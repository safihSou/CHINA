import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  chineseTitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  chineseTitle,
  centered = true,
  className,
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {chineseTitle && (
        <span className="block font-chinese text-4xl text-primary/20 mb-2">
          {chineseTitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-6" />
    </motion.div>
  );
};
