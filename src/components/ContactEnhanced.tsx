import { useState } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CTAButton } from './motion/CTAButton';
import Lottie from 'lottie-react';
import successTick from '../../public/lottie/success-tick.json';

export function ContactEnhanced() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-2.5 rounded-full mb-6 border border-purple-100">
              <span className="text-sm font-semibold text-[#8A3FFC] uppercase tracking-wide">
                Let's Talk
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary mb-6">
              Start with a{' '}
              <span
                className="bg-gradient-to-r from-[#8A3FFC] to-[#FF5CA3] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                free
              </span>{' '}
              scoping call
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              No sales pitch. Just a 15-minute technical conversation about your
              goals, timeline, and budget. We'll tell you honestly if we're the
              right fit.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center border border-purple-200">
                  <User size={24} className="text-[#8A3FFC]" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1 text-lg">
                    Quick response
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We reply within 24 hours on business days
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center border border-purple-200">
                  <MessageSquare size={24} className="text-[#8A3FFC]" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1 text-lg">
                    No commitment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Zero pressure — we only work together if it makes sense
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center border border-purple-200">
                  <Mail size={24} className="text-[#8A3FFC]" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1 text-lg">
                    Direct contact
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Email us directly at{' '}
                    <a
                      href="mailto:6ixmindslabs@gmail.com"
                      className="text-[#8A3FFC] font-semibold hover:text-[#FF5CA3] transition-colors"
                    >
                      6ixmindslabs@gmail.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-32 h-32 mb-6">
                  <Lottie animationData={successTick} loop={false} autoplay />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you within 24 hours.
                </p>

                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#FF5CA3] rounded-full"
                        initial={{
                          x: '50%',
                          y: '50%',
                          scale: 0,
                        }}
                        animate={{
                          x: `${50 + Math.cos((i * Math.PI) / 6) * 40}%`,
                          y: `${50 + Math.sin((i * Math.PI) / 6) * 40}%`,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                          delay: i * 0.05,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#8A3FFC] focus:outline-none transition-all"
                    placeholder="John Doe"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : focusedField === 'name'
                        ? {
                            y: -2,
                            scale: 1.01,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                        : { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' }
                    }
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#8A3FFC] focus:outline-none transition-all"
                    placeholder="john@company.com"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : focusedField === 'email'
                        ? {
                            y: -2,
                            scale: 1.01,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                        : { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' }
                    }
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Company
                  </label>
                  <motion.input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#8A3FFC] focus:outline-none transition-all"
                    placeholder="Acme Inc."
                    animate={
                      shouldReduceMotion
                        ? {}
                        : focusedField === 'company'
                        ? {
                            y: -2,
                            scale: 1.01,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                        : { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' }
                    }
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Project details *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#8A3FFC] focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project goals, timeline, and budget..."
                    animate={
                      shouldReduceMotion
                        ? {}
                        : focusedField === 'message'
                        ? {
                            y: -2,
                            scale: 1.01,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                        : { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' }
                    }
                    transition={{ duration: 0.2 }}
                  ></motion.textarea>
                </div>

                <CTAButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full flex items-center justify-center space-x-2 uppercase tracking-wide text-sm shadow-lg shadow-purple-500/20"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Request free scoping</span>
                      <Send size={18} />
                    </>
                  )}
                </CTAButton>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy. We never share
                  your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
