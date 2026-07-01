import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { Container } from './Container';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Premium cubic-bezier transition
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const floatingSecondaryVariants: Variants = {
    animate: {
      y: [0, 15, 0],
      x: [0, 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-cyan-400/10 blur-[120px] glow-primary"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-400/10 blur-[120px] glow-secondary"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Intro Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-border bg-card/40 backdrop-blur-sm mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-muted">
                Available for freelance & full-time roles
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-bold tracking-tight text-text leading-[1.1] mb-6 font-heading"
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Abdul</span>.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-muted font-light leading-relaxed mb-8 max-w-2xl font-body"
            >
              Frontend Developer creating fast, accessible, and visually engaging web experiences with a focus on modern frameworks and clean code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" href="#projects" className="group">
                View Projects
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-250" />
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                <FiMail className="mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration / Graphic */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {/* Premium Decorative Glass Card */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="w-full max-w-[420px] aspect-square rounded-[32px] border border-border bg-card/35 backdrop-blur-md shadow-premium p-8 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Inner Grid Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              {/* Header Dots */}
              <div className="flex items-center justify-between z-10 border-b border-border/40 pb-4">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted/60 font-mono select-none">portfolio.tsx</span>
              </div>

              {/* Mockup Content - High Quality Code Visualization */}
              <div className="flex-1 flex flex-col justify-center font-mono text-xs sm:text-sm text-muted py-6 space-y-3.5 z-10 select-none">
                <div>
                  <span className="text-purple-450 text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">name</span>:{' '}
                  <span className="text-emerald-400">'Abdul'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">role</span>:{' '}
                  <span className="text-emerald-400">'Frontend Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">tech</span>: {'['}
                  <span className="text-cyan-400">'React'</span>,{' '}
                  <span className="text-cyan-400">'TypeScript'</span>,{' '}
                  <span className="text-cyan-400">'Tailwind'</span>
                  {']'},
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">loves</span>:{' '}
                  <span className="text-emerald-400">'Premium UI/UX'</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Accent Gradient Border Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/20 rounded-[32px] transition-colors duration-500" />
            </motion.div>

            {/* Additional Floating Gradient Elements */}
            <motion.div
              variants={floatingSecondaryVariants}
              animate="animate"
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-pink-500 opacity-20 blur-xl pointer-events-none"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-500 opacity-20 blur-2xl pointer-events-none"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
