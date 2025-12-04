import { useState } from 'react';
import { Send, CheckCircle, Mail, MessageSquare, User } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center space-x-2 bg-accent-3/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-accent-1 uppercase tracking-wide">
                Let's Talk
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6">
              Start with a free scoping call
            </h2>

            <p className="text-lg text-muted mb-8">
              No sales pitch. Just a 15-minute technical conversation about your goals, timeline,
              and budget. We'll tell you honestly if we're the right fit.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-3/20 rounded-lg flex items-center justify-center">
                  <User size={24} className="text-accent-1" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Quick response</h3>
                  <p className="text-muted text-sm">We reply within 24 hours on business days</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-3/20 rounded-lg flex items-center justify-center">
                  <MessageSquare size={24} className="text-accent-1" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">No commitment</h3>
                  <p className="text-muted text-sm">
                    Zero pressure — we only work together if it makes sense
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-3/20 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-accent-1" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Direct contact</h3>
                  <p className="text-muted text-sm">
                    Email us directly at{' '}
                    <a href="mailto:hello@6ixminds.com" className="text-accent-1 font-semibold">
                      hello@6ixminds.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ui-muted-bg rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-text-primary mb-2">Thank you!</h3>
                <p className="text-muted">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-accent-1 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-accent-1 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-accent-1 focus:outline-none transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-accent-1 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project goals, timeline, and budget..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-1 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-2 transition-all hover:shadow-xl hover:shadow-accent-3/50 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Request free scoping</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted text-center">
                  By submitting, you agree to our privacy policy. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
