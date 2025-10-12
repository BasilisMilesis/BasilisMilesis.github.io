"use client"

import { useState, useEffect } from 'react';

interface NavbarProps {
  sections: string[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <div className="inline-flex h-10 sm:h-12 items-center justify-center rounded-full bg-gray-900/20 backdrop-blur-md p-1 border border-gray-700/30 shadow-xl">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 capitalize ${
                  activeSection === section 
                    ? 'bg-gray-600/30 text-white shadow-lg backdrop-blur-sm' 
                    : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-200'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
