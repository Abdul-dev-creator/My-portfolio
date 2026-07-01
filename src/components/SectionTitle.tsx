import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text">
        {title}
      </h2>
      <div className={`h-1 w-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
