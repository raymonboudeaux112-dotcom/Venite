import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { GraduationCap, BookOpen, Users, Trophy, Building2, Palette, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const AnimatedNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const target = parseInt(value.replace(/\D/g, ''));
  const isPlus = value.includes('+');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{isPlus && '+'}</span>;
};

const StatItem = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex flex-col items-center justify-center p-6 text-center">
    <div className="text-accent-green mb-3">
      <Icon size={28} />
    </div>
    <div className="text-3xl font-serif font-bold text-primary-green dark:text-accent-green mb-1 transition-colors">
      <AnimatedNumber value={value} />
    </div>
    <div className="text-xs font-mono uppercase tracking-widest text-text-dark/60 dark:text-cream/60 transition-colors">
      {label}
    </div>
  </div>
);

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const newsItems = [
    "2025/2026 Admission Now Open — Apply Early",
    "Download 2024/2025 School Fees Schedule",
    "Venite University: Fostering Excellence in Ekiti State"
  ];

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/IMG_6152.jpg')`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(30,60,40,0.85) 0%, rgba(46,107,62,0.6) 100%)' }}
          />

          {/* Bokeh Particles */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float rounded-full bg-cream/20 blur-2xl"
                style={{
                  width: Math.random() * 200 + 100,
                  height: Math.random() * 200 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${Math.random() * 5 + 5}s`
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif font-bold text-cream leading-[1.1] mb-8"
            >
              Unlock Your Potential, <br />
              <span className="text-gold italic">Transform Your Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-cream/80 font-sans max-w-2xl mb-12 leading-relaxed"
            >
              A community of over 800+ dreamers, innovators, and change-makers — Iloro Ekiti, Ekiti State, Nigeria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a href="https://ecampus.veniteuniversity.edu.ng/admissions" className="shimmer-btn w-full sm:w-auto px-10 py-5 bg-accent-green text-cream rounded-full font-sans font-bold uppercase tracking-widest hover:scale-105 transition-transform text-center">
                Apply Now
              </a>
              <Link to="/programmes" className="w-full sm:w-auto px-10 py-5 glass border-cream/30 text-cream rounded-full font-sans font-bold uppercase tracking-widest hover:bg-cream/10 transition-colors text-center">
                Explore Programmes
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-cream/50 uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* --- Stats Strip --- */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="glass grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10 dark:divide-white/5 rounded-[30px] overflow-hidden">
          <StatItem icon={GraduationCap} value="3" label="Colleges" />
          <StatItem icon={BookOpen} value="20+" label="Programmes" />
          <StatItem icon={Users} value="800+" label="Students" />
          <StatItem icon={Trophy} value="2019" label="Est. Since" />
        </div>
      </section>

      {/* --- Welcome Section --- */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800"
              alt="Venite Campus Life"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-accent-green"></div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold">About Venite</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-dark dark:text-cream mb-8 leading-tight transition-colors">
              Welcome to <br />Venite University
            </h2>
            <div className="space-y-6 text-text-dark/80 dark:text-cream/80 text-lg leading-relaxed mb-10 transition-colors">
              <p>
                Where we strive to foster innovation, excellence, and growth. At Venite, we believe in the power of education to transform lives.
              </p>
              <p>
                Our diverse programmes and cutting-edge research provide fertile ground for discovery and intellectual engagement. We are committed to building character and imparting knowledge that lasts a lifetime.
              </p>
            </div>
            <Link to="/about" className="group flex items-center gap-3 text-primary-green dark:text-accent-green font-bold uppercase tracking-widest text-sm w-fit transition-colors">
              Learn More About Us
              <div className="relative">
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-green group-hover:w-full transition-all"></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Why Choose Venite Section --- */}
      <section className="py-24 bg-primary-green dark:bg-[#112417] relative overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">The Venite Advantage</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream">Why Choose Venite?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Faculty",
                desc: "Learn from top-tier academics and industry veterans committed to your success."
              },
              {
                icon: Building2,
                title: "Modern Facilities",
                desc: "Access smart classrooms, digital libraries, and advanced research laboratories."
              },
              {
                icon: Palette,
                title: "Vibrant Student Life",
                desc: "Engage in diverse clubs, competitive sports, and rich cultural experiences."
              },
              {
                icon: Trophy,
                title: "Career Excellence",
                desc: "Our industry-aligned curriculum prepares you for global leadership roles."
              }
            ].map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-green p-10 rounded-[30px] border border-cream/10 group hover:bg-cream/10 transition-colors"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                  <usp.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-cream mb-4">{usp.title}</h3>
                <p className="text-cream/60 leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Admissions CTA --- */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-primary-green dark:bg-[#152e1c] transition-colors"></div>
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <div className="absolute top-0 -left-1/4 w-[100%] h-[100%] bg-accent-green blur-[120px] rounded-full animate-float"></div>
          <div className="absolute bottom-0 -right-1/4 w-[100%] h-[100%] bg-gold blur-[120px] rounded-full opacity-30 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-cream mb-8 mb-12">Begin Your Journey Today</h2>
          <p className="text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            Admissions are now open for the 2025/2026 academic session. Join a forward-looking university committed to excellence, innovation, and values-driven education.
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
            <div className="glass-green p-8 rounded-3xl border-cream/10">
              <p className="text-gold font-mono text-xs uppercase tracking-widest mb-4">Requirements</p>
              <h4 className="text-2xl text-cream font-serif font-bold">UTME Cut-off</h4>
              <p className="text-cream/60 mt-2">150–200 (varies by course)</p>
            </div>
            <div className="glass-green p-8 rounded-3xl border-cream/10">
              <p className="text-gold font-mono text-xs uppercase tracking-widest mb-4">How to Apply</p>
              <h4 className="text-2xl text-cream font-serif font-bold">Online Portal</h4>
              <p className="text-cream/60 mt-2">ecampus.veniteuniversity.edu.ng</p>
            </div>
            <div className="glass-green p-8 rounded-3xl border-cream/10">
              <p className="text-gold font-mono text-xs uppercase tracking-widest mb-4">Academic</p>
              <h4 className="text-2xl text-cream font-serif font-bold">5 O'Level Credits</h4>
              <p className="text-cream/60 mt-2">Including English & Maths</p>
            </div>
          </div>

          <a
            href="https://ecampus.veniteuniversity.edu.ng/admissions"
            className="shimmer-btn inline-flex items-center gap-4 px-12 py-6 bg-gold text-text-dark rounded-full font-sans font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Apply Now
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* --- News Ticker --- */}
      <section className="bg-cream dark:bg-[#0d140f] py-10 overflow-hidden border-y border-primary-green/10 dark:border-white/10 transition-colors">
        <div className="flex whitespace-nowrap gap-16 animate-[shimmer_20s_infinite_linear]">
          {[...newsItems, ...newsItems].map((news, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="px-3 py-1 glass-green text-accent-green text-[10px] font-mono rounded-full uppercase">Update</div>
              <span className="text-text-dark dark:text-cream font-serif text-lg md:text-xl font-bold transition-colors">{news}</span>
              <span className="text-gold">•</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
