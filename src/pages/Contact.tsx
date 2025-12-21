import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { GlassCard } from '../components';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: 'perezokp@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>

          <p className="text-white/70 text-lg mb-12">
            Have a project in mind? I'd love to hear about it. Let's create something amazing
            together.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Mail size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-white/70 text-sm">perezokp@gmail.com</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-white/70 text-sm">+(234) 8144199410</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-white/70 text-sm">Lagos, NIGERIA</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </GlassCard>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Response Time</h3>
              <p className="text-white/70">
                I typically respond to inquiries within 24-48 hours during business days. For
                urgent matters, please mention it in your message.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Looking For</h3>
              <p className="text-white/70">
                I'm open to exciting projects, consulting opportunities, and speaking
                engagements. Let's discuss how I can help bring your vision to life.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
