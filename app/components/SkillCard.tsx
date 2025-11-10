import { Icon } from './Icons';

interface SkillCardProps {
  title: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  iconPath: string;
}

export default function SkillCard({ title, skills, gradientFrom, gradientTo, iconPath }: SkillCardProps) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mr-3 sm:mr-4 shrink-0`}>
          <Icon path={iconPath} className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <h4 className={`text-lg sm:text-xl md:text-2xl font-semibold ${
          title === 'Frontend' ? 'text-blue-300' : 
          title === 'Backend' ? 'text-green-300' : 
          title === 'Programming Languages' ? 'text-pink-300' : 
          'text-purple-300'
        }`}>
          {title}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border ${
              title === 'Frontend' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30' :
              title === 'Backend' ? 'bg-green-500/20 text-green-200 border-green-500/30' :
              title === 'Programming Languages' ? 'bg-pink-500/20 text-pink-200 border-pink-500/30' :
              'bg-purple-500/20 text-purple-200 border-purple-500/30'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
