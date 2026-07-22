import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Clock, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const colleges = [
  {
    name: "College of Medicine and Health Sciences",
    shortName: "MEDICINE & HEALTH",
    programs: [
      { name: "Medicine and Surgery", degree: "M.B.B.S.", duration: "6 Years", description: "Comprehensive medical training to diagnose, treat, and prevent diseases, preparing you for a rewarding career in healthcare.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" },
      { name: "Nursing Science", degree: "B.NSc.", duration: "5 Years", description: "Develop clinical skills and compassionate care practices to excel in modern healthcare environments.", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop" },
      { name: "Anatomy", degree: "B.Sc.", duration: "4 Years", description: "Explore the intricate structures of the human body to build a strong foundation for medical and biological sciences.", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop" },
      { name: "Medical Biochemistry", degree: "B.Sc.", duration: "4 Years", description: "Understand the chemical processes within living organisms, focusing on human health and disease mechanisms.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" },
      { name: "Physiology", degree: "B.Sc.", duration: "4 Years", description: "Study the vital functions and mechanisms of the human body, bridging the gap between basic science and clinical medicine.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=600&auto=format&fit=crop" },
      { name: "Medical Laboratory Science", degree: "B.MLS.", duration: "5 Years", description: "Master diagnostic laboratory procedures and technologies essential for accurate patient care and medical research.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
      { name: "Physiotherapy", degree: "B.PT.", duration: "5 Years", description: "Learn therapeutic techniques to restore movement, alleviate pain, and improve the quality of life for patients.", image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=600&auto=format&fit=crop" },
      { name: "Medical Radiography", degree: "B.Sc.", duration: "5 Years", description: "Operate advanced imaging equipment to produce accurate diagnostic images for effective medical treatments.", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=600&auto=format&fit=crop" },
      { name: "Public Health", degree: "B.Sc.", duration: "4 Years", description: "Promote health and prevent diseases at the community and global levels through education and policy-making.", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop" },
      { name: "Human Nutrition and Dietetics", degree: "B.Sc.", duration: "4 Years", description: "Understand the science of food and nutrition to improve health outcomes and manage dietary needs.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop" },
      { name: "Food Science and Technology", degree: "B.Sc.", duration: "5 Years", description: "Apply scientific principles to food processing, preservation, and quality control for a safe food supply.", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop" },
      { name: "Community Health Sciences", degree: "B.Sc.", duration: "4 Years", description: "Focus on assessing and addressing health needs within specific communities to foster overall well-being.", image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=600&auto=format&fit=crop" },
      { name: "Dental Technology", degree: "B.Tech.", duration: "5 Years", description: "Design and fabricate dental prostheses and appliances using advanced materials and techniques.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" },
      { name: "Dental Therapy", degree: "B.Sc.", duration: "4 Years", description: "Provide preventive dental care and promote oral health education within diverse patient populations.", image: "/dental_therapy.jpg" },
      { name: "Environmental Health Science", degree: "B.Sc.", duration: "4 Years", description: "Study the impact of environmental factors on human health and develop strategies for sustainable living.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop" },
      { name: "Health Care Administration", degree: "B.Sc.", duration: "4 Years", description: "Develop leadership and management skills to efficiently run hospitals and healthcare organizations.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop" },
      { name: "Health Information Management", degree: "B.Sc.", duration: "4 Years", description: "Manage vital patient data and health care information systems to support clinical decision-making.", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    name: "College of Agriculture, Computing, Engineering & Sciences",
    shortName: "COMPUTING & SCIENCES",
    programs: [
      { name: "Computer Science", degree: "B.Sc.", duration: "4 Years", description: "Learn advanced programming, artificial intelligence, and software engineering to build the future of tech.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" },
      { name: "Cyber Security", degree: "B.Sc.", duration: "4 Years", description: "Protect digital assets and networks from cyber threats through advanced security protocols and ethical hacking.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" },
      { name: "Software Engineering", degree: "B.Sc.", duration: "4 Years", description: "Design, develop, and maintain robust software systems using modern engineering principles and practices.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" },
      { name: "Information Technology", degree: "B.Sc.", duration: "4 Years", description: "Manage complex IT infrastructures and develop technological solutions for diverse business needs.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" },
      { name: "Data Science", degree: "B.Sc.", duration: "4 Years", description: "Extract valuable insights from complex data sets using statistical analysis and machine learning techniques.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
      { name: "Artificial Intelligence", degree: "B.Sc.", duration: "4 Years", description: "Create intelligent systems capable of learning, reasoning, and solving complex real-world problems.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" },
      { name: "Physics", degree: "B.Sc.", duration: "4 Years", description: "Explore the fundamental laws of nature and their applications in modern technology and research.", image: "/physics.jpg" },
      { name: "Statistics", degree: "B.Sc.", duration: "4 Years", description: "Master the art of data collection, analysis, and interpretation to drive informed decision-making.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
      { name: "Mathematics", degree: "B.Sc.", duration: "4 Years", description: "Develop strong analytical and problem-solving skills applicable to various scientific and industrial fields.", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop" },
      { name: "Agricultural Economics", degree: "B.Agric.", duration: "5 Years", description: "Apply economic principles to optimize agricultural production, distribution, and consumption.", image: "/agric_econ.jpg" },
      { name: "Microbiology", degree: "B.Sc.", duration: "4 Years", description: "Study microorganisms and their roles in health, disease, and environmental ecosystems.", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=600&auto=format&fit=crop" },
      { name: "Agribusiness", degree: "B.Agric.", duration: "5 Years", description: "Integrate business management with agricultural science to run successful farming enterprises.", image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=600&auto=format&fit=crop" },
      { name: "Soil & Land Resources Management", degree: "B.Agric.", duration: "5 Years", description: "Learn sustainable practices for managing soil health and optimizing land use for agriculture.", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=600&auto=format&fit=crop" },
      { name: "Electrical & Electronics Engineering", degree: "B.Eng.", duration: "5 Years", description: "Design, develop, and test electrical systems and electronic devices for various industries.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" },
      { name: "Mechanical Engineering", degree: "B.Eng.", duration: "5 Years", description: "Design, analyze, and manufacture complex mechanical systems with state-of-the-art facilities.", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=600&auto=format&fit=crop" },
      { name: "Mechatronics Engineering", degree: "B.Eng.", duration: "5 Years", description: "Combine mechanical, electrical, and computer engineering to create intelligent automated systems.", image: "/mechatronics.jpg" },
    ]
  },
  {
    name: "College of Arts, Social and Management Sciences",
    shortName: "ARTS & MANAGEMENT",
    programs: [
      { name: "Accounting", degree: "B.Sc.", duration: "4 Years", description: "Master financial reporting, auditing, and strategic financial management for global businesses.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" },
      { name: "Taxation", degree: "B.Sc.", duration: "4 Years", description: "Understand complex tax laws and corporate taxation strategies in a dynamic economic environment.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" },
      { name: "Business Administration", degree: "B.Sc.", duration: "4 Years", description: "Develop comprehensive leadership, management, and entrepreneurial skills for the corporate world.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" },
      { name: "Public Administration", degree: "B.Sc.", duration: "4 Years", description: "Learn to navigate and lead public sector organizations with a focus on policy analysis and governance.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
      { name: "Economics", degree: "B.Sc.", duration: "4 Years", description: "Understand global markets, macroeconomic theory, and financial analysis to drive economic growth.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop" },
      { name: "Entrepreneurship Studies", degree: "B.Sc.", duration: "4 Years", description: "Equip yourself with the innovative mindset and practical skills needed to start and scale new ventures.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" },
      { name: "Criminology and Security Studies", degree: "B.Sc.", duration: "4 Years", description: "Analyze crime patterns and develop effective security strategies for a safer society.", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop" },
      { name: "Peace and Conflict Resolution", degree: "B.Sc.", duration: "4 Years", description: "Study the causes of conflict and master the art of negotiation and peacebuilding on a global scale.", image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600&auto=format&fit=crop" },
      { name: "Sociology", degree: "B.Sc.", duration: "4 Years", description: "Investigate human behavior, social structures, and cultural dynamics in contemporary societies.", image: "/sociology.jpg" },
      { name: "Social Work", degree: "B.Sc.", duration: "4 Years", description: "Prepare to advocate for and support vulnerable populations through empathetic and professional care.", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop" },
      { name: "Mass Communication", degree: "B.Sc.", duration: "4 Years", description: "Master the art of storytelling and media production in journalism, broadcasting, and digital media.", image: "/mass_comm.jpg" },
      { name: "Performing Arts and Film Studies", degree: "B.A.", duration: "4 Years", description: "Explore creative expression through theater, film production, and performance arts.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop" },
      { name: "Tourism and Hospitality", degree: "B.Sc.", duration: "4 Years", description: "Develop management skills for the thriving global travel, tourism, and hospitality industries.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop" },
      { name: "English and Linguistics", degree: "B.A.", duration: "4 Years", description: "Study the structure, evolution, and power of the English language and its literary traditions.", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" },
      { name: "History and International Studies", degree: "B.A.", duration: "4 Years", description: "Analyze historical events and their impact on modern international relations and diplomacy.", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop" },
    ]
  }
];

const CollegeSection: React.FC<{ college: typeof colleges[0] }> = ({ college }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        
        if (isEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by roughly one card width
          scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col"
    >
      <div className="flex items-center gap-4 mb-8 px-2 md:px-0">
        <div className="h-[2px] w-12 bg-accent-green"></div>
        <h2 className="text-xl md:text-3xl font-serif font-bold text-text-dark dark:text-cream tracking-wide">
          {college.name}
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 md:px-0 w-full"
      >
        {college.programs.map((program, pIdx) => (
          <div 
            key={pIdx}
            className="flex flex-col shrink-0 w-[320px] sm:w-[350px] md:w-[380px] rounded-[24px] overflow-hidden snap-center group shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-black/20 border border-gray-100 dark:border-white/10"
          >
            {/* Top Image Section */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <img 
                src={program.image} 
                alt={program.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-4 left-4 bg-primary-green text-cream px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-md">
                UNDERGRADUATE
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 flex flex-col grow">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs font-medium text-text-dark/60 dark:text-cream/60 mb-4">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-primary-green" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Building2 size={14} className="text-primary-green shrink-0" />
                  <span className="truncate">{college.shortName}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-text-dark dark:text-cream mb-3 leading-tight group-hover:text-primary-green transition-colors">
                {program.degree} {program.name}
              </h3>
              <p className="text-sm text-text-dark/70 dark:text-cream/70 leading-relaxed mb-8 grow line-clamp-3">
                {program.description}
              </p>

              {/* Apply Button */}
              <Link 
                to="/admissions"
                className="block w-full text-center py-3.5 border-2 border-gray-200 dark:border-white/10 rounded-xl text-text-dark dark:text-cream font-bold text-sm tracking-wide group-hover:border-primary-green group-hover:text-primary-green transition-all"
              >
                Apply Now <ArrowRight size={16} className="inline ml-1 -mt-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Scroll Indicators */}
      <div className="flex justify-center md:justify-start gap-2 mt-2 px-2 md:px-0">
        <div className="w-8 h-1.5 rounded-full bg-primary-green"></div>
        <div className="w-2 h-1.5 rounded-full bg-primary-green/30"></div>
        <div className="w-2 h-1.5 rounded-full bg-primary-green/30"></div>
      </div>
    </motion.div>
  );
};


export const Programmes = () => {
  return (
    <div className="pt-32 pb-24 bg-cream dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center md:text-left mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green font-bold mb-6 block">Academic Excellence</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark dark:text-cream tracking-tight transition-colors">
            Our Programmes
          </h1>
          <p className="text-lg md:text-xl text-text-dark/70 dark:text-cream/70 font-sans leading-relaxed transition-colors max-w-2xl mt-6">
            Explore our state-of-the-art colleges and discover a world-class curriculum designed for the innovators of tomorrow.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {colleges.map((college, idx) => (
            <CollegeSection key={idx} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
};

