import { useState } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CTAButton } from '../motion/CTAButton';
import Lottie from 'lottie-react';
import successTick from '../../../public/lottie/success-tick.json';
import { Section } from '../layout/Section';

export function ContactFinal() {
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

  return (
    <Section id="contact" background="gradient" containerSize="default">
      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-6 border border-purple-100">
              <span className="text-xs sm:text-sm font-semibold text-brand-purple uppercase tracking-wide">
                Let's Talk
              </span>
            </div>

            <h2 className="text-heading-2 font-extrabold text-text-primary mb-4 sm:mb-6">
              Start with a{' '}
              <span
                className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent inline-block"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                free
              </span>{' '}
              scoping call
            </h2>

            <p className="text-body-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              No sales pitch. Just a 15-minute technical conversation about your
              goals, timeline, and budget. We'll tell you honestly if we're the
              right fit.
            </p>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {[
                {
                  icon: User,
                  title: 'Quick response',
                  desc: 'We reply within 24 hours on business days',
                },
                {
                  icon: MessageSquare,
                  title: 'No commitment',
                  desc: 'Zero pressure — we only work together if it makes sense',
                },
                {
                  icon: Mail,
                  title: 'Direct contact',
                  desc: (
                    <>
                      Email us at{' '}
                      <a
                        href="mailto:6ixmindslabs@gmail.com"
                        className="text-brand-purple font-semibold hover:text-brand-pink transition-colors"
                      >
                        6ixmindslabs@gmail.com
                      </a>
                    </>
                  ),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <div className="flex-shrink-0 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center border border-purple-200">
                    <item.icon size={20} className="sm:w-6 sm:h-6 text-brand-purple" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-body-lg font-bold text-text-primary mb-0.5 sm:mb-1">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-gray-600 break-words">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border-2 border-gray-100"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                <h3 className="text-heading-4 font-bold text-gray-900 mb-2">
                  Thank you!
                </h3>
                <p className="text-body-md text-gray-600">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-body-sm font-semibold text-text-primary mb-1.5 sm:mb-2"
                  >
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-gray-200 rounded-lg focus:border-brand-purple focus:outline-none transition-all text-body-md min-h-tap"
                    placeholder="John Doe"
                    animate={
                      shouldReduceMotion || focusedField !== 'name'
                        ? {}
                        : {
                            y: -2,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                    }
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-body-sm font-semibold text-text-primary mb-1.5 sm:mb-2"
                  >
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-gray-200 rounded-lg focus:border-brand-purple focus:outline-none transition-all text-body-md min-h-tap"
                    placeholder="john@company.com"
                    animate={
                      shouldReduceMotion || focusedField !== 'email'
                        ? {}
                        : {
                            y: -2,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                    }
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-body-sm font-semibold text-text-primary mb-1.5 sm:mb-2"
                  >
                    Company
                  </label>
                  <motion.input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-gray-200 rounded-lg focus:border-brand-purple focus:outline-none transition-all text-body-md min-h-tap"
                    placeholder="Acme Inc."
                    animate={
                      shouldReduceMotion || focusedField !== 'company'
                        ? {}
                        : {
                            y: -2,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                    }
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-body-sm font-semibold text-text-primary mb-2"
                  >
                    Project details *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 md:py-4 bg-white border-2 border-gray-200 rounded-lg focus:border-brand-purple focus:outline-none transition-all resize-none text-body-md"
                    placeholder="Tell us about your project goals, timeline, and budget..."
                    animate={
                      shouldReduceMotion || focusedField !== 'message'
                        ? {}
                        : {
                            y: -2,
                            boxShadow: '0 8px 20px rgba(138, 63, 252, 0.15)',
                          }
                    }
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <CTAButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2 uppercase tracking-wide text-sm md:text-base shadow-lg shadow-purple-500/20 min-h-tap"
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

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By submitting, you agree to our privacy policy. We never share
                  your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
