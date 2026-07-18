import { motion } from "motion/react";
import { CheckCircle2, FileText, CreditCard, UserPlus, Send, GraduationCap } from "lucide-react";

export const Admissions = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold mb-6 block">Apply To Venite University</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark dark:text-cream mb-8 leading-tight transition-colors">
              Admissions
            </h1>
            <p className="text-lg md:text-xl text-text-dark/70 dark:text-cream/70 font-sans leading-relaxed transition-colors">
              Your journey to excellence starts here. We are excited to welcome you to Venite University. Review our academic requirements and application process below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[30px]"
          >
            <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green mb-8">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-6 transition-colors">UTME Applicants</h3>
            <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-lg transition-colors mb-4">
              To be eligible for admission to Venite University, all applicants are required to participate in the UTME. The UTME is a standardized entrance examination conducted by the Joint Admissions and Matriculation Board (JAMB) in Nigeria.
            </p>
            <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-lg transition-colors">
              It serves as a common assessment for candidates seeking admission into tertiary institutions in the country. Therefore, prospective students need to register for and take the UTME to be considered for admission.
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
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-text-dark dark:text-cream mb-6 transition-colors">Academic Requirements</h3>
            <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-lg transition-colors mb-4">
              Applicants are required to have at least five (5) credits in the Senior Secondary Certificate Examination (SSCE), General Certificate of Education (GCE), National Examination Council (NECO), National Business and Technical Examinations Board (NABTEB), or any other approved equivalent.
            </p>
            <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed text-lg transition-colors">
              These credits must be obtained in not more than two sittings, and must include English Language and Mathematics, plus three other relevant subjects for your chosen programme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold mb-4 block">The Application Process</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark dark:text-cream transition-colors">How To Apply</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                icon: <FileText size={24} />,
                title: "1. Getting Started & Collate Documents",
                desc: "Research available programmes and gather necessary documents: transcripts, UTME score, birth certificate, local government ID, and passport photographs."
              },
              {
                icon: <CreditCard size={24} />,
                title: "2. Pay Application Fee",
                desc: "An application fee of ₦10,000 is required for undergraduate applications. Payment can be made online through our application portal."
              },
              {
                icon: <UserPlus size={24} />,
                title: "3. Create An Account & Apply",
                desc: "Visit the application portal, create an account, and fill out the online application form accurately."
              },
              {
                icon: <Send size={24} />,
                title: "4. Confirmation & Decision",
                desc: "Receive a confirmation email. The admissions committee will review your application and notify you of the outcome."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-[30px] flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green shrink-0 mt-1">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-text-dark dark:text-cream mb-2 transition-colors">{step.title}</h4>
                  <p className="text-text-dark/70 dark:text-cream/70 leading-relaxed transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="https://ecampus.veniteuniversity.edu.ng/admissions" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-primary-green text-cream rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-primary-green/30 transition-all">
              Start Your Journey — Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
