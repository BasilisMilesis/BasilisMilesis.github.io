import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  status: { text: string; color: string };
  description: string;
  techs: string[];
  github: string;
  isCurrentSite?: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="min-h-[70vh] px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto w-full text-slate-300">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
