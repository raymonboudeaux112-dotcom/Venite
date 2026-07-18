import { motion } from "motion/react";
import { Microscope, Monitor, ShieldCheck, Cpu, Building2, Wheat, HeartPulse, GraduationCap, Gavel } from "lucide-react";

interface ProgrammeCardProps {
  icon: any;
  name: string;
  description: string;
}

const ProgrammeCard = ({ icon: Icon, name, description }: ProgrammeCardProps) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="glass p-8 rounded-[20px] transition-all hover:shadow-[0_8px_32px_rgba(46,107,62,0.18)] group"
  >
    <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center text-primary-green dark:text-accent-green mb-6 group-hover:bg-primary-green group-hover:text-cream transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-serif font-bold text-text-dark dark:text-cream mb-3 transition-colors">{name}</h4>
    <p className="text-sm text-text-dark/70 dark:text-cream/70 leading-relaxed transition-colors">{description}</p>
  </motion.div>
);

export const Programmes = () => {
  return (
    <div className="pt-32 pb-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold mb-6 block">Academic Excellence</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark dark:text-cream mb-8 leading-tight transition-colors">
              Our Programmes
            </h1>
            <p className="text-lg md:text-xl text-text-dark/70 dark:text-cream/70 font-sans leading-relaxed transition-colors">
              Discover a wide range of undergraduate programmes designed to equip you with the knowledge and skills needed for a successful career.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProgrammeCard icon={Microscope} name="Microbiology" description="Explore the invisible world and its impact on human health and the environment." />
          <ProgrammeCard icon={Monitor} name="Computer Science" description="Master the language of the future with our comprehensive computing curriculum." />
          <ProgrammeCard icon={ShieldCheck} name="Forensic Science" description="Combine science and justice to solve complex investigations with precision." />
          <ProgrammeCard icon={Cpu} name="Software Engineering" description="Build the digital world with hands-on experience in cutting-edge tech architectures." />
          <ProgrammeCard icon={Building2} name="Public Administration" description="Shape society through effective governance and strategic leadership training." />
          <ProgrammeCard icon={Wheat} name="Agriculture" description="Innovate for a sustainable future through modern agronomy and agribusiness." />
          <ProgrammeCard icon={HeartPulse} name="Nursing Science" description="Prepare for a rewarding career in healthcare with rigorous clinical training and compassionate care." />
          <ProgrammeCard icon={GraduationCap} name="Educational Management" description="Develop leadership skills to manage and improve educational institutions effectively." />
          <ProgrammeCard icon={Gavel} name="Criminology & Security Studies" description="Analyze criminal behavior and develop strategic security solutions for a safer society." />
        </motion.div>

        {/* Colleges Breakdown */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark dark:text-cream transition-colors">Colleges & Faculties</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CAHMS",
                full: "College of Allied Health & Medical Sciences",
                desc: "Preparing the next generation of healthcare professionals with state-of-the-art laboratories and clinical exposure."
              },
              {
                title: "CASIT",
                full: "College of Agriculture, Science & Info Tech",
                desc: "Fostering digital innovation and sustainable agricultural practices for a rapidly evolving global economy."
              },
              {
                title: "CASMS",
                full: "College of Arts, Social & Management Sciences",
                desc: "Cultivating critical thinkers, administrators, and policy makers capable of driving societal transformation."
              }
            ].map((college, i) => (
              <div key={i} className="glass p-10 rounded-[30px] flex flex-col h-full border-t-[4px] border-t-primary-green">
                <h3 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-2 transition-colors">{college.title}</h3>
                <h4 className="text-sm font-sans font-bold text-accent-green mb-6">{college.full}</h4>
                <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed mb-8 flex-grow transition-colors">{college.desc}</p>
                <a href="https://ecampus.veniteuniversity.edu.ng" className="mt-auto px-6 py-3 border border-primary-green/30 dark:border-cream/30 text-primary-green dark:text-cream font-sans font-medium text-sm rounded-full hover:bg-primary-green hover:text-cream transition-all text-center uppercase tracking-wider">
                  Apply to College
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
