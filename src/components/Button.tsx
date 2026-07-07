import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  download,
  target,
  rel,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-accent text-black hover:bg-accent/90 shadow-[0_4px_20px_rgba(255,183,77,0.25)] hover:shadow-[0_0_30px_rgba(255,183,77,0.35)] transition-all duration-300',
    secondary: 'bg-accent text-black hover:bg-accent/90 shadow-[0_4px_20px_rgba(255,183,77,0.25)] hover:shadow-[0_0_30px_rgba(255,183,77,0.35)] transition-all duration-300',
    outline: 'border border-border text-text hover:bg-accent/10 hover:text-accent hover:border-accent/50 transition-all duration-300',
    ghost: 'text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-6 py-2.5 text-sm sm:text-base',
    lg: 'px-8 py-3.5 text-base sm:text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={combinedStyles}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};
