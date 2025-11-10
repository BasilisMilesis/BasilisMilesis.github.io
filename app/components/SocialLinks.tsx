import { GitHubIcon, LinkedInIcon, ResumeIcon } from './Icons';

interface SocialLink {
  href: string;
  label: string;
  type: 'github' | 'linkedin' | 'resume';
  isButton?: boolean;
}

interface SocialLinksProps {
  className?: string;
  links: SocialLink[];
}

const getIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <GitHubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'resume':
      return <ResumeIcon />;
    default:
      return null;
  }
};

export default function SocialLinks({ className, links }: SocialLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 active:scale-95 ${
            link.isButton 
              ? 'gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-linear-to-r bg-gray-800/80 hover:bg-gray-700/90 text-white rounded-full shadow-lg hover:shadow-xl font-medium text-sm sm:text-base'
              : 'w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/80 text-gray-300 hover:bg-gray-700/90 rounded-full border border-gray-700/50'
          }`}
          aria-label={link.label}
        >
          <span className={link.isButton ? 'w-5 h-5 sm:w-6 sm:h-6' : ''}>
            {getIcon(link.type)}
          </span>
          {link.isButton && <span className="whitespace-nowrap">{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
