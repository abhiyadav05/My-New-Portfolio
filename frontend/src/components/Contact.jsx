import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, label: 'GitHub', color: 'hover:text-slate-300', link:'https://github.com/abhiyadav05' },
  { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400', link: 'https://www.linkedin.com/in/abhishek-yadav-637136257/' },
  { icon: Twitter, label: 'Twitter', color: 'hover:text-sky-400', link: 'https://x.com/AbhishekYa05?t=ZtrJzqM_1wYN3IuXDqTVvw&s=08' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Form */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-slate-300 font-medium mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                    placeholder={field === 'email' ? 'Enter Your Email' : field === 'name' ? 'Enter Your Name' : 'Project Discussion'}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

             
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 animate-slide-up">
                  <CheckCircle className="w-5 h-5" />
                  <p>Message sent successfully! (Demo only)</p>
                </div>
              )}
            </form>
          </div>

          {/* Right Info Section */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>

            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 mb-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm always excited to discuss new projects, creative ideas, or opportunities to contribute to innovative solutions.
                Whether you need a full-stack developer or want to collaborate on something amazing, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="font-medium">abhshekyadav95065@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="font-medium">Lucknow, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <h4 className="text-xl font-bold text-white mb-4">Social Media</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                  <a
                key={social.label}
                href={`${social.link}`}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <button
                 
                  className="group relative p-5 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                   

             
                  </div>
                  <social.icon className={`w-7 h-7 text-slate-400 ${social.color} transition-colors duration-300 relative z-10`}
                  
                  />
                 
                </button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            Directed By <span className="text-emerald-400">Abhishek Yadav</span>, <span className="text-blue-400">MERN</span>
          </p>
        </div>
      </div>
    </section>
  );
}
