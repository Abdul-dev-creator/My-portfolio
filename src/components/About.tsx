import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiActivity, FiEdit2, FiCheck } from 'react-icons/fi';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  const [yearsOfLearning, setYearsOfLearning] = useState('3+');
  const [isEditingYears, setIsEditingYears] = useState(false);
  const [tempYears, setTempYears] = useState('3+');

  const handleSaveYears = () => {
    if (tempYears.trim()) {
      setYearsOfLearning(tempYears);
    }
    setIsEditingYears(false);
  };

  const stats = [
    {
      id: 'projects',
      label: 'Projects Completed',
      value: '5+',
      icon: <FiLayers className="text-cyan-400 w-5 h-5" />,
    },
    {
      id: 'tech',
      label: 'Technologies',
      value: '3+',
      icon: <FiCode className="text-cyan-400 w-5 h-5" />,
    },
    {
      id: 'learning',
      label: 'Currently Learning',
      value: 'Next.js, Python',
      icon: <FiActivity className="text-emerald-400 w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <Container>
        <SectionTitle title="About Me" subtitle="My Journey" alignment="center" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-[24px] overflow-hidden group"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-cyan-400 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Profile Image */}
              <div className="absolute inset-[1px] bg-card rounded-[23px] overflow-hidden">
                <img
                  src="/IMG-20250815-WA0008.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 text-center z-10">
                  <p className="text-sm font-medium text-white drop-shadow-lg">Creative Tech Enthusiast</p>
                  <p className="text-xs text-white/80 mt-1 drop-shadow-lg">Based in Kwara State, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: About Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-6">
              Crafting Digital Experiences with Code and Design
            </h3>
            
            <p className="text-muted leading-relaxed mb-6 font-body text-base sm:text-lg">
              I am a passionate frontend developer dedicated to building responsive, accessible, and performant web applications. My development philosophy is centered around creating seamless user interfaces that don't just look great, but also deliver exceptional speed and intuitive interactions.
            </p>

            <p className="text-muted leading-relaxed mb-8 font-body text-base sm:text-lg">
              With deep expertise in <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">TypeScript</span>, and <span className="text-cyan-400 font-semibold">Tailwind CSS</span>, I leverage modern frontend tooling to turn complex requirements into clean, maintainable codebases. I prioritize web standards, semantic HTML, and proper keyboard navigation in every project.
            </p>

            {/* Bento Grid Stats */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="p-5 rounded-[20px] bg-card border border-border/60 hover:border-border transition-colors duration-300 flex flex-col justify-between aspect-[1.3/1]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-muted">{stat.label}</span>
                    {stat.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-text font-heading">
                    {stat.value}
                  </span>
                </div>
              ))}

              {/* Editable Years of Learning Stat Card */}
              <div
                className="p-5 rounded-[20px] bg-card border border-border/60 hover:border-border transition-colors duration-300 flex flex-col justify-between aspect-[1.3/1] relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted">Years of Learning</span>
                  <div className="flex items-center space-x-1">
                    {isEditingYears ? (
                      <button
                        onClick={handleSaveYears}
                        className="p-1 hover:text-green-400 text-muted transition-colors cursor-pointer"
                        aria-label="Save"
                      >
                        <FiCheck size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsEditingYears(true)}
                        className="p-1 opacity-0 group-hover:opacity-100 hover:text-cyan-400 text-muted transition-opacity duration-300 cursor-pointer"
                        aria-label="Edit years"
                      >
                        <FiEdit2 size={12} />
                      </button>
                    )}
                  </div>
                </div>
                
                {isEditingYears ? (
                  <input
                    type="text"
                    value={tempYears}
                    onChange={(e) => setTempYears(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveYears()}
                    className="bg-background border border-border rounded px-2 py-1 text-text text-xl font-bold font-heading w-full focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    autoFocus
                  />
                ) : (
                  <span className="text-2xl sm:text-3xl font-bold text-text font-heading">
                    {yearsOfLearning}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
