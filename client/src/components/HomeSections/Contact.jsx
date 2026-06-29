import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Download, CheckCircle2, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email required';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full bg-gray-900/60 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-colors text-sm ${
      errors[field]
        ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/30'
        : 'border-gray-700 focus:border-cyan-500 focus:ring-cyan-500/20'
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">08 — Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-5/12 space-y-8"
          >
            <div>
              <h2 className="text-4xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Let's build something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">great together.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I'm open to full-time opportunities, freelance projects, and collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { href: "mailto:bhupendrad1724@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email", value: "bhupendrad1724@gmail.com" },
                { href: "https://github.com/Bhupendra-17", icon: <Github className="w-5 h-5" />, label: "GitHub", value: "Bhupendra-17" },
                { href: "https://www.linkedin.com/in/bhupendra-dewangan-172-rahul", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Bhupendra Dewangan" },
                { href: null, icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Raipur, Chhattisgarh, India" },
              ].map((contact, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 transition-all duration-300 ${contact.href ? 'hover:border-cyan-500/40 hover:bg-gray-800/50 cursor-pointer' : ''}`}
                  {...(contact.href ? { as: 'a', onClick: () => window.open(contact.href, '_blank') } : {})}
                >
                  <div className="w-11 h-11 bg-gray-900/70 rounded-full flex items-center justify-center text-cyan-400 border border-gray-700 shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-0.5">{contact.label}</p>
                    <p className="text-white font-medium text-sm">{contact.value}</p>
                  </div>
                  {contact.href && <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />}
                </div>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1ro_ckWcbjgFtqmPOeu1OswoDpjbUy7Eg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/30 border border-gray-700/40 rounded-2xl p-7 md:p-9 backdrop-blur-sm space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-2 block">Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass('name')} />
                  {errors.name && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-2 block">Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClass('email')} />
                  {errors.email && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-2 block">Subject</label>
                <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Collaboration opportunity" className={inputClass('subject')} />
                {errors.subject && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.subject}</p>}
              </div>

              <div>
                <label className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-2 block">Message</label>
                <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." className={`${inputClass('message')} resize-none`} />
                {errors.message && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-600 cursor-default'
                    : 'bg-cyan-600 hover:bg-cyan-500 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed'
                }`}
              >
                {status === 'idle' && (<><Send className="w-4 h-4" /> Send Message</>)}
                {status === 'submitting' && (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {status === 'success' && (<><CheckCircle2 className="w-5 h-5" /> Sent Successfully!</>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
