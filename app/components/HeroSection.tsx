import SocialLinks from './SocialLinks';
import { socialLinks } from '../data/siteData';

interface HeroSectionProps {
  name: string;
  title: string;
  bioIntro: string;
  bioFocus: string;
}

export default function HeroSection({ name, title, bioIntro, bioFocus }: HeroSectionProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-20 pb-10 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent glow-effect mb-3 sm:mb-4 leading-tight">
              {name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 font-medium mb-6 sm:mb-8">
              {title}
            </p>
            <SocialLinks className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4" links={socialLinks} />
          </div>
          
          <div className="flex-1 w-full">
            <div className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
              <p className="mb-4 sm:mb-6">
                {bioIntro}
              </p>
              <p>
                {bioFocus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
