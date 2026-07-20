import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-deep-cream/30 dark:bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-4xl font-serif font-bold text-text-dark dark:text-cream mb-10">Contact Us</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-1">Address</p>
                  <p className="text-text-dark dark:text-cream font-sans font-bold">KM 2, Ayetoro Road, Iloro Ekiti, Ekiti State</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-1">Call Us</p>
                  <a href="tel:+2348139675417" className="text-text-dark dark:text-cream font-sans font-bold">+234 (0) 813 967 5417</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-1">Email Us</p>
                  <a href="mailto:info@veniteuniversity.edu.ng" className="text-text-dark dark:text-cream font-sans font-bold">info@veniteuniversity.edu.ng</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-text-dark/50 dark:text-cream/50 mb-1">Office Hours</p>
                  <p className="text-text-dark dark:text-cream font-sans font-bold">Mon–Fri: 8am–5pm WAT</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Social, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-dark dark:text-cream hover:bg-primary-green hover:text-cream transition-all">
                  <Social size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="h-[400px] md:h-full min-h-[400px] rounded-[40px] overflow-hidden shadow-2xl glass">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.643242485521!2d5.09761935!3d7.6658428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478df8831e6e9d%3A0xe54ef9081e7d825!2sIloro%2C%20Ekiti!5e0!3m2!1sen!2sng!4v1715764000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pt-16 border-t border-primary-green/10 dark:border-white/10 mb-16">
          <div className="col-span-2">
            <img src="https://veniteuniversity.edu.ng/wp-content/uploads/2024/04/venite-logo-1-1-1.png" alt="Logo" className="h-10 mb-8 opacity-70" />
            <p className="text-sm text-text-dark/50 dark:text-cream/50 leading-relaxed max-w-sm">
              Venite University is a forward-thinking institution committed to academic excellence, innovation, and moral values.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-sm uppercase tracking-widest text-text-dark dark:text-cream">Explore</h5>
            <Link to="/about" className="font-sans font-medium text-text-dark/70 dark:text-cream/70 hover:text-accent-green dark:hover:text-accent-green transition-colors text-sm uppercase tracking-wider">About</Link>
            <Link to="/programmes" className="font-sans font-medium text-text-dark/70 dark:text-cream/70 hover:text-accent-green dark:hover:text-accent-green transition-colors text-sm uppercase tracking-wider">Colleges</Link>
            <Link to="/" className="font-sans font-medium text-text-dark/70 dark:text-cream/70 hover:text-accent-green dark:hover:text-accent-green transition-colors text-sm uppercase tracking-wider">Home</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-sm uppercase tracking-widest text-text-dark dark:text-cream">Academics</h5>
            <Link to="/admissions" className="font-sans font-medium text-text-dark/70 dark:text-cream/70 hover:text-accent-green dark:hover:text-accent-green transition-colors text-sm uppercase tracking-wider">Admissions</Link>
            <a href="https://ecampus.veniteuniversity.edu.ng/portal/" target="_blank" rel="noopener noreferrer" className="font-sans font-medium text-text-dark/70 dark:text-cream/70 hover:text-accent-green dark:hover:text-accent-green transition-colors text-sm uppercase tracking-wider">Student Portal</a>
            <Link to="/contact" className="font-sans font-medium text-text-dark/70 dark:text-cream/70 hover:text-accent-green dark:hover:text-accent-green transition-colors text-sm uppercase tracking-wider">LMS</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-sm uppercase tracking-widest text-text-dark dark:text-cream">Institutional</h5>
            <a href="https://careers.veniteuniversity.edu.ng/" target="_blank" rel="noopener noreferrer" className="font-sans font-medium text-text-dark/70 dark:text-cream/70 hover:text-accent-green dark:hover:text-accent-green transition-colors text-sm uppercase tracking-wider">Careers</a>
          </div>
        </div>

        <div className="text-center text-xs font-mono text-text-dark/40 dark:text-cream/40 border-t border-primary-green/10 dark:border-white/10 pt-12">
          <p>© 2025 Venite University. All rights reserved. | Iloro Ekiti, Ekiti State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
};
