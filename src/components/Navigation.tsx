import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  key?: React.Key;
}

const NavLink = ({ to, children, onClick, active }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`font-sans font-medium hover:text-accent-green transition-colors text-sm uppercase tracking-wider ${active ? 'text-accent-green' : 'text-text-dark dark:text-cream'}`}
  >
    {children}
  </Link>
);

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Programmes", path: "/programmes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "py-4 glass border-b border-cream/20 dark:border-white/10" : "py-8 bg-transparent"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://veniteuniversity.edu.ng/wp-content/uploads/2024/04/venite-logo-1-1-1.png"
              alt="Venite University Logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                active={location.pathname === link.path}
              >
                {link.name}
              </NavLink>
            ))}
            <ThemeToggle />
            <a href="https://ecampus.veniteuniversity.edu.ng/admissions" target="_blank" rel="noopener noreferrer" className="shimmer-btn px-8 py-3 bg-primary-green text-cream rounded-full font-sans font-medium text-sm border-gold/30 border hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all uppercase tracking-widest">
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button className="text-text-dark dark:text-cream" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-cream dark:bg-dark-bg shadow-xl p-8 flex flex-col gap-6 lg:hidden border-t border-cream/20 dark:border-white/10"
            >
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  active={location.pathname === link.path}
                >
                  {link.name}
                </NavLink>
              ))}
              <a href="https://ecampus.veniteuniversity.edu.ng/admissions" target="_blank" rel="noopener noreferrer" className="w-full mt-4 py-4 text-center bg-primary-green text-cream rounded-full font-sans font-bold text-sm uppercase tracking-widest block">
                Apply Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
