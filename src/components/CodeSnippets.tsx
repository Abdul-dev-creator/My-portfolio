import { useState } from 'react';
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '../ThemeContext';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
}

const codeSnippets: CodeSnippet[] = [
  {
    id: 'react-hook',
    title: 'Custom Theme Hook',
    language: 'typescript',
    description: 'A custom React hook for managing dark/light theme with localStorage persistence',
    code: `export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be within ThemeProvider');
  }
  return context;
};

const toggleTheme = () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  updateDOM(newTheme);
};`,
  },
  {
    id: 'framer-animation',
    title: 'Framer Motion Animation',
    language: 'typescript',
    description: 'Smooth entrance animation for components using Framer Motion',
    code: `const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};`,
  },
  {
    id: 'tailwind-responsive',
    title: 'Responsive Tailwind Design',
    language: 'tsx',
    description: 'Mobile-first responsive grid using Tailwind CSS utilities',
    code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {projects.map((project) => (
    <motion.div
      key={project.id}
      variants={itemVariants}
      className="group relative overflow-hidden rounded-xl
                 bg-surface border border-border/60
                 hover:border-accent/40 transition-all
                 duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
    >
      {/* Card content */}
    </motion.div>
  ))}
</div>`,
  },
  {
    id: 'typescript-types',
    title: 'TypeScript Types Definition',
    language: 'typescript',
    description: 'Strong typing for project data structure',
    code: `interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    figma?: string;
  };
  featured: boolean;
  yearBuilt: number;
}

type Theme = 'dark' | 'light';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};`,
  },
];

export const CodeSnippets = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { theme } = useTheme();
  const [selectedSnippet, setSelectedSnippet] = useState(0);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentSnippet = codeSnippets[selectedSnippet];
  const syntaxTheme = theme === 'dark' ? atomOneDark : atomOneLight;

  return (
    <section className="relative py-16 md:py-24 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accentDark/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-accentDark/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <SectionTitle
              title="Code Snippets"
              subtitle="Interesting code patterns and implementations from my projects"
            />
          </motion.div>

          {/* Snippet Navigation and Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Snippet List */}
              <div className="lg:col-span-1 space-y-2">
                {codeSnippets.map((snippet, index) => (
                  <motion.button
                    key={snippet.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSnippet(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      selectedSnippet === index
                        ? 'bg-accent/20 border border-accent/50 text-accent'
                        : 'bg-surface border border-border/60 text-text hover:border-accent/30 hover:text-accent'
                    }`}
                  >
                    <div className="font-medium text-sm">{snippet.title}</div>
                    <div className="text-xs mt-1 opacity-60">{snippet.language}</div>
                  </motion.button>
                ))}
              </div>

              {/* Code Display */}
              <div className="lg:col-span-3">
                <motion.div
                  key={currentSnippet.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-surface border border-border/60 rounded-xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-surface/50 border-b border-border/40">
                    <div>
                      <h3 className="font-semibold text-accent text-sm">
                        {currentSnippet.title}
                      </h3>
                      <p className="text-xs text-muted mt-1">
                        {currentSnippet.description}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy(currentSnippet.code, currentSnippet.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 
                                 hover:bg-accent/20 text-accent transition-all duration-300
                                 text-xs font-medium border border-accent/20 hover:border-accent/40"
                    >
                      {copiedId === currentSnippet.id ? (
                        <>
                          <FiCheck size={16} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <FiCopy size={16} />
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Code */}
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      language={currentSnippet.language}
                      style={syntaxTheme}
                      customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        backgroundColor: 'transparent',
                        fontSize: '0.875rem',
                        lineHeight: '1.6',
                      }}
                      wrapLines={true}
                      wrapLongLines={true}
                    >
                      {currentSnippet.code}
                    </SyntaxHighlighter>
                  </div>
                </motion.div>

                {/* Language Badge */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs text-muted">Language:</span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30
                                  text-accent text-xs font-medium">
                    {currentSnippet.language.charAt(0).toUpperCase() +
                      currentSnippet.language.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12 p-6 rounded-xl bg-surface border border-border/60"
          >
            <h4 className="text-accent font-semibold mb-2">Tech Stack Used</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30
                            text-accent text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
