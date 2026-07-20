import { motion } from "motion/react";
import { Compass, ShieldCheck, Award, Star, Code2, Layout, Zap, Smartphone } from "lucide-react";

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark dark:text-cream mb-8 leading-tight transition-colors">
              Empowering Minds, <br />Shaping the Future
            </h1>
            <p className="text-lg md:text-xl text-text-dark/70 dark:text-cream/70 font-sans leading-relaxed transition-colors">
              Venite University is dedicated to fostering intellectual growth, creativity, and innovation in a rapidly changing world. Located in the heart of Ekiti State, we provide a serene and technologically advanced environment for holistic education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Image Banner */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden h-[300px] sm:h-[450px] md:h-[600px] shadow-2xl group"
        >
          <img
            src="/about_image.png"
            alt="Venite University About"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-green/60 via-transparent to-transparent"></div>
        </motion.div>
      </section>

      {/* Leadership Profile: Vice-Chancellor */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[40px] overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5 shrink-0">
              <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl">
                <img 
                  src="/vc_venite.png" 
                  alt="Professor Charity O. Aremu" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green dark:text-accent-green px-4 py-2 rounded-full mb-6">
                <Award size={16} />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">University Leadership</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark dark:text-cream mb-2 transition-colors">
                Professor Charity O. Aremu
              </h2>
              <h3 className="text-xl text-primary-green dark:text-accent-green font-medium mb-8">
                Vice-Chancellor, Venite University (Inaugurated 2026/2027 Session)
              </h3>
              
              <div className="space-y-6 text-text-dark/80 dark:text-cream/80 text-lg leading-relaxed mb-10 transition-colors">
                <p>
                  A renowned scholar and accomplished university administrator, Professor Aremu is dedicated to advancing academic excellence, groundbreaking research, innovation, and global partnerships. 
                </p>
                <p>
                  Under her transformative leadership, Venite University is committed to producing creative, ethical, and industry-ready graduates equipped to make meaningful contributions to society.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-accent-green">
                <p className="text-xl md:text-2xl font-serif italic text-text-dark dark:text-cream transition-colors">
                  "Leadership rooted in excellence, innovation, integrity, and a commitment to shaping future leaders for global impact."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[30px]"
          >
            <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green mb-8">
              <Compass size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-6 transition-colors">Our Vision</h3>
            <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-lg transition-colors">
              To be a world-class university committed to academic excellence, moral integrity, and technological innovation, producing global leaders equipped to solve complex societal challenges.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-12 rounded-[30px]"
          >
            <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green mb-8">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-6 transition-colors">Our Mission</h3>
            <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-lg transition-colors">
              To provide functional and qualitative education through cutting-edge research, community service, and entrepreneurship, fostering an environment where every student can achieve their maximum potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[30px] border-l-[4px] border-l-accent-green"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-8 bg-accent-green"></div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold">Behind The Scenes</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-dark dark:text-cream mb-8 transition-colors">Methodology: The Architecture</h3>
          <p className="text-lg text-text-dark/70 dark:text-cream/70 leading-relaxed max-w-3xl mb-12">
            Built as a second-semester examination project for an Entrepreneurship (ENT) course, this digital experience bridges the gap between healthcare studies and digital innovation. It was crafted using modern web development methodologies, prioritizing both performance and aesthetic elegance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 dark:bg-black/20 p-8 rounded-[20px] border border-black/5 dark:border-white/10 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary-green/10 dark:bg-accent-green/10 rounded-2xl flex items-center justify-center text-primary-green dark:text-accent-green mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={28} />
              </div>
              <h4 className="text-xl font-bold text-text-dark dark:text-cream mb-3">React & TypeScript</h4>
              <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-base">
                The foundation is built upon React for dynamic, component-based architecture and robust state management. TypeScript ensures type safety, reducing runtime errors and improving overall code quality and maintainability.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-8 rounded-[20px] border border-black/5 dark:border-white/10 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary-green/10 dark:bg-accent-green/10 rounded-2xl flex items-center justify-center text-primary-green dark:text-accent-green mb-6 group-hover:scale-110 transition-transform">
                <Layout size={28} />
              </div>
              <h4 className="text-xl font-bold text-text-dark dark:text-cream mb-3">Tailwind CSS</h4>
              <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-base">
                For our visual identity, we utilized Tailwind CSS, allowing for rapid, utility-first styling. The application features a custom theming engine supporting both light and immersive dark modes, seamlessly adapting to user preferences.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-8 rounded-[20px] border border-black/5 dark:border-white/10 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary-green/10 dark:bg-accent-green/10 rounded-2xl flex items-center justify-center text-primary-green dark:text-accent-green mb-6 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-text-dark dark:text-cream mb-3">Framer Motion</h4>
              <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-base">
                Fluid animations and micro-interactions—which give the interface its premium feel—are powered by Motion. This enables sophisticated scroll-based reveals, parallax effects, and smooth layout transitions without compromising performance.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-black/20 p-8 rounded-[20px] border border-black/5 dark:border-white/10 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary-green/10 dark:bg-accent-green/10 rounded-2xl flex items-center justify-center text-primary-green dark:text-accent-green mb-6 group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <h4 className="text-xl font-bold text-text-dark dark:text-cream mb-3">Responsive SPA</h4>
              <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-base">
                The project is structured as a Single Page Application (SPA) using React Router, ensuring instantaneous navigation between sections. It is fully responsive, providing a native-like user experience across all device form factors.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-primary-green py-24 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Our DNA</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream">Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", desc: "Striving for the highest standards in teaching and learning." },
              { title: "Integrity", desc: "Upholding strong moral and ethical principles." },
              { title: "Innovation", desc: "Embracing new ideas and technological advancements." },
              { title: "Service", desc: "Commitment to community development and social responsibility." }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 glass-green rounded-[30px] border border-cream/10">
                <h4 className="text-2xl font-serif font-bold text-cream mb-4">{value.title}</h4>
                <p className="text-cream/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

