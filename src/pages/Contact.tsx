import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 relative min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark dark:text-cream mb-8 leading-tight transition-colors">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-text-dark/70 dark:text-cream/70 font-sans leading-relaxed transition-colors">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass p-6 md:p-10 rounded-[30px] space-y-8 h-full">
              <h2 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-8 transition-colors">Contact Information</h2>
              
              <div className="flex flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <MapPin size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-2">Address</p>
                  <p className="text-text-dark dark:text-cream font-sans font-bold text-base sm:text-lg transition-colors break-words">KM 2, Ayetoro Road, <br className="hidden sm:block" />Iloro Ekiti, Ekiti State, Nigeria</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <Phone size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-2">Phone</p>
                  <a href="tel:+2348139675417" className="text-text-dark dark:text-cream font-sans font-bold text-base sm:text-lg hover:text-accent-green transition-colors block truncate">+234 (0) 813 967 5417</a>
                </div>
              </div>

              <div className="flex flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <Mail size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-2">Email</p>
                  <a href="mailto:info@veniteuniversity.edu.ng" className="text-text-dark dark:text-cream font-sans font-bold text-base sm:text-lg hover:text-accent-green transition-colors block truncate">info@veniteuniversity.edu.ng</a>
                </div>
              </div>

              <div className="flex flex-row gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <Clock size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-2">Office Hours</p>
                  <p className="text-text-dark dark:text-cream font-sans font-bold text-base sm:text-lg transition-colors truncate">Mon–Fri: 8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form className="glass p-6 md:p-10 rounded-[30px] space-y-6">
              <h2 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-8 transition-colors">Send a Message</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text-dark/70 dark:text-cream/70 mb-2 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-cream/50 dark:bg-black/20 border border-text-dark/10 dark:border-cream/10 rounded-xl px-4 py-3 text-text-dark dark:text-cream focus:outline-none focus:ring-2 focus:ring-accent-green transition-all" 
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-dark/70 dark:text-cream/70 mb-2 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-cream/50 dark:bg-black/20 border border-text-dark/10 dark:border-cream/10 rounded-xl px-4 py-3 text-text-dark dark:text-cream focus:outline-none focus:ring-2 focus:ring-accent-green transition-all" 
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-text-dark/70 dark:text-cream/70 mb-2 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-cream/50 dark:bg-black/20 border border-text-dark/10 dark:border-cream/10 rounded-xl px-4 py-3 text-text-dark dark:text-cream focus:outline-none focus:ring-2 focus:ring-accent-green transition-all" 
                  placeholder="Admission Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text-dark/70 dark:text-cream/70 mb-2 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-cream/50 dark:bg-black/20 border border-text-dark/10 dark:border-cream/10 rounded-xl px-4 py-3 text-text-dark dark:text-cream focus:outline-none focus:ring-2 focus:ring-accent-green transition-all resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="button" className="w-full shimmer-btn flex items-center justify-center gap-3 py-4 bg-primary-green text-cream rounded-xl font-sans font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
