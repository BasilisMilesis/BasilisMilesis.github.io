import SkillCard from './SkillCard';

interface Skill {
  title: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  iconPath: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="min-h-[60vh] px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative">
      <div className="max-w-5xl mx-auto w-full text-slate-300">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
