import { motion } from "motion/react";
import { BookOpen, Users, Compass, ShieldCheck } from "lucide-react";

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
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
          <h3 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-6 transition-colors">Methodology: How We Built This</h3>
          <div className="space-y-4 text-text-dark/70 dark:text-cream/70 leading-relaxed text-lg transition-colors">
            <p>
              This digital experience was crafted using modern web development methodologies, prioritizing both performance and aesthetic elegance. The foundation is built upon <strong>React</strong> for dynamic, component-based architecture and robust state management.
            </p>
            <p>
              For our visual identity and responsive design, we utilized <strong>Tailwind CSS</strong>, allowing for rapid, utility-first styling that adapts seamlessly across all devices. The application features a custom theming engine supporting both light and immersive dark modes, driven by CSS variables and Tailwind's variant system.
            </p>
            <p>
              Fluid animations and micro-interactions—which give the interface its premium feel—are powered by <strong>Motion (framer-motion)</strong>. This enables sophisticated scroll-based reveals, parallax effects, and smooth layout transitions without compromising performance.
            </p>
            <p>
              Finally, the project is structured as a Single Page Application (SPA) using <strong>React Router</strong>, ensuring instantaneous navigation between sections while maintaining context and state, avoiding jarring page reloads for a native-like user experience.
            </p>
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
