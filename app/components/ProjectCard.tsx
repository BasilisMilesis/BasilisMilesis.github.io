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
    <div className="group p-6 sm:p-8 rounded-2xl bg-linear-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm overflow-hidden">
      <div className="mb-4 sm:mb-6 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8">
        <img 
          src={image} 
          alt={title} 
          className="w-full object-top h-48 sm:h-56 object-cover"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">{title}</h4>
        <span className={`px-3 py-1 ${status.color} rounded-full text-xs font-medium self-start sm:self-auto`}>{status.text}</span>
      </div>
      <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {techs.map((tech) => (
          <span key={tech} className="px-2.5 sm:px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs sm:text-sm border border-blue-500/30">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {isCurrentSite &&
          <a href="" className="text-blue-300 hover:text-blue-200 text-xs sm:text-sm font-medium transition-colors">
            You&apos;re here! →
          </a>
        }
        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 text-xs sm:text-sm font-medium transition-colors">
            GitHub →
          </a>
        ) : (
          <span className="text-slate-500 text-xs sm:text-sm font-medium">
            GitHub (coming soon)
          </span>
        )}
      </div>
    </div>
  );
}
