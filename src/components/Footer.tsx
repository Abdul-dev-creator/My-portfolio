import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiGithub, FiTwitter, FiMail } from 'react-icons/fi';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/30 relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side: Copyright */}
          <div className="text-sm text-muted font-body text-center md:text-left">
            <p>© {currentYear} Abdul. All rights reserved.</p>
          </div>

          {/* Right Side: Socials */}
          <div className="flex items-center space-x-6">
            <a
              href="mailto:abdul@example.com"
              className="text-muted hover:text-text transition-colors duration-350"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors duration-350"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors duration-350"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
      </Container>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-card border border-border/80 text-muted hover:text-text hover:border-cyan-400/55 hover:bg-surface transition-all duration-300 shadow-premium cursor-pointer"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
