import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiLoader, FiCheckCircle, FiTwitter } from 'react-icons/fi';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<{ [key in keyof FormData]?: boolean }>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
    } else if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address';
    } else if (name === 'message') {
      if (!value.trim()) error = 'Message is required';
      else if (value.trim().length < 10) error = 'Message must be at least 10 characters';
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      validateField(name as keyof FormData, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name as keyof FormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    setTouched({ name: true, email: true, message: true });

    if (nameError || emailError || messageError) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTouched({});
    
    // Reset success banner after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5 text-cyan-400" />,
      label: 'Email',
      value: 'abdulqudusopeyemi2020@gmail.com',
      href: 'Abdul:abdulqudusopeyemi2020@gmail.com',
    },
   
    {
      icon: <FiGithub className="w-5 h-5 text-cyan-400" />,
      label: 'GitHub',
      value: 'github.com/Abdul-dev-creator',
      href: 'https://github.com/Abdul-dev-creator',
    },
    {
      icon: <FiMapPin className="w-5 h-5 text-cyan-400" />,
      label: 'Location',
      value: 'Kwara State, Nigeria',
      href: '#',
    },
    {
      icon: <FiTwitter className="w-5 h-5 text-cyan-400" />,
      label: 'Twitter',
      value: 'The Dev Guy | Frontend dev',
      href: 'https://x.com/home',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background border-t border-border/35 relative overflow-hidden">
      <Container>
        <SectionTitle
          title="Let's Build Something Great Together"
          subtitle="Get In Touch"
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-text mb-6">
              Have a project in mind or want to chat?
            </h3>
            <p className="text-muted leading-relaxed mb-8 font-body">
              Feel free to reach out using the form, or connect with me via email or social media. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-[16px] bg-card/40 border border-border/40 hover:border-cyan-400/40 hover:bg-card/70 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-surface border border-border/85 group-hover:border-cyan-400/30 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium">{info.label}</p>
                    <p className="text-sm font-semibold text-text group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border/80 rounded-card p-6 sm:p-8 relative overflow-hidden shadow-premium">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <FiCheckCircle className="text-green-400 w-16 h-16 mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold text-text mb-2 font-heading">Message Sent Successfully!</h4>
                    <p className="text-sm text-muted max-w-sm font-body">
                      Thank you for reaching out! I will review your message and get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                    noValidate
                  >
                    {/* Name Input */}
                    <div className="relative">
                      <label htmlFor="name" className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-background border rounded-[12px] px-4 py-3 text-sm text-text placeholder-muted/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-all ${
                          touched.name && errors.name
                            ? 'border-red-500/80 focus:ring-red-500/20'
                            : 'border-border/85 focus:border-cyan-400/80'
                        }`}
                        placeholder="Abdulqudus"
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label htmlFor="email" className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-background border rounded-[12px] px-4 py-3 text-sm text-text placeholder-muted/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-all ${
                          touched.email && errors.email
                            ? 'border-red-500/80 focus:ring-red-500/20'
                            : 'border-border/85 focus:border-cyan-400/80'
                        }`}
                        placeholder="abdulqudusopeyemi2020@gmail.com"
                      />
                      {touched.email && errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                      <label htmlFor="message" className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        className={`w-full bg-background border rounded-[12px] px-4 py-3 text-sm text-text placeholder-muted/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-all resize-none ${
                          touched.message && errors.message
                            ? 'border-red-500/80 focus:ring-red-500/20'
                            : 'border-border/85 focus:border-cyan-400/80'
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {touched.message && errors.message && (
                        <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full relative py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <FiLoader className="animate-spin mr-2" size={18} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiSend className="ml-2" size={16} />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
