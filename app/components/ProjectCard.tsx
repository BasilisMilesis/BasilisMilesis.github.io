import { GitHubIcon } from './Icons';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  status: { text: string; color: string };
  description: string;
  techs: string[];
  github: string;
  isCurrentSite?: boolean;
  image: string;
}

export default function ProjectCard({ title, status, description, techs, github, isCurrentSite, image }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-linear-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 hover:border-blue-600/25 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
      
      {/* Image container with overlay effect */}
      <div className="relative mb-3 sm:mb-4 mx-0 mt-0 overflow-hidden h-40 sm:h-44">
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-4 sm:p-5 -mt-2 sm:-mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h4>
          <span className={`px-2.5 py-1 ${status.color} rounded-full text-xs font-semibold self-start sm:self-auto shadow-lg backdrop-blur-sm`}>{status.text}</span>
        </div>
        
        <p className="text-slate-300 mb-3 sm:mb-4 leading-relaxed text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
          {techs.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-xs border border-blue-400/30 hover:border-blue-400/60 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 border-t border-gray-700/50">
          {isCurrentSite && (
            <a 
              href="" 
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-2xl border border-blue-500/30 hover:border-blue-500/50"
            >
              You&apos;re here!
            </a>
          )}
          {github ? (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/30 hover:bg-gray-700/50 text-gray-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 rounded-2xl border border-gray-600/50 hover:border-gray-500/70"
            >
              <GitHubIcon />
              <span>View on GitHub</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 text-slate-500 text-xs sm:text-sm font-semibold rounded-lg border border-gray-700/30 cursor-not-allowed">
              <GitHubIcon />
              <span>GitHub (coming soon)</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
