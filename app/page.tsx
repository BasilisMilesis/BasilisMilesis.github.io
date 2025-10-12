"use client"

import Navbar from './components/Navbar';

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 98 96" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 382 382" aria-hidden="true">
    <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
  </svg>
);

const ResumeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Icon = ({ path, className = "w-5 h-5" }: { path: string; className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);

const socialLinks = [
  { href: "https://github.com/BasilisMilesis", label: "GitHub", icon: <GitHubIcon /> },
  { href: "https://www.linkedin.com/in/vasilis-milesis-7434b2308/", label: "LinkedIn", icon: <LinkedInIcon /> },
  { href: "/resume.pdf", label: "Resume", icon: <ResumeIcon />, isButton: true }
];

const SocialLinks = ({ className }: { className?: string }) => (
  <div className={className}>
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 active:scale-95 ${
          link.isButton 
            ? 'gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r bg-gray-800/80 hover:bg-gray-700/90 text-white rounded-full shadow-lg hover:shadow-xl font-medium text-sm sm:text-base'
            : 'w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/80 text-gray-300 hover:bg-gray-700/90 rounded-full border border-gray-700/50'
        }`}
        aria-label={link.label}
      >
        <span className={link.isButton ? 'w-5 h-5 sm:w-6 sm:h-6' : ''}>
          {link.icon}
        </span>
        {link.isButton && <span className="whitespace-nowrap">{link.label}</span>}
      </a>
    ))}
  </div>
);

const SkillCard = ({ title, skills, gradientFrom, gradientTo, iconPath }: {
  title: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  iconPath: string;
}) => (
  <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
    <div className="flex items-center mb-4 sm:mb-6">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}>
        <Icon path={iconPath} className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <h4 className={`text-lg sm:text-xl md:text-2xl font-semibold ${title === 'Frontend' ? 'text-blue-300' : title === 'Backend' ? 'text-green-300' : 'text-purple-300'}`}>
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
            'bg-purple-500/20 text-purple-200 border-purple-500/30'
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, status, description, techs, github }: {
  title: string;
  status: { text: string; color: string };
  description: string;
  techs: string[];
  github: string;
}) => (
  <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm overflow-hidden">
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
      {title === 'Portfolio Website' &&
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
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 -rotate-12 origin-bottom-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const ContactInfo = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-start gap-4">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center mt-1 flex-shrink-0 ${
      label === 'Email' ? 'bg-blue-500/20' : label === 'Location' ? 'bg-green-500/20' : 'bg-purple-500/20'
    }`}>
      <Icon path={icon} />
    </div>
    <div>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const FeatureItem = ({ icon, text, bgColor }: { icon: string; text: string; bgColor: string }) => (
  <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
    <div className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center`}>
      <Icon path={icon} className="w-4 h-4" />
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

export default function Page() {
  const sections = ['about', 'skills', 'projects', 'contact'];

  const skillsData = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      title: 'Backend',
      skills: ['Java', 'SpringBoot', 'Python', 'MySQL', 'REST APIs'],
      gradientFrom: 'from-green-500',
      gradientTo: 'to-teal-500',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Linux', 'VS Code', 'JWT'],
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
      iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    }
  ];

  const projectsData = [
    {
      title: 'Bidding Platform',
      status: { text: 'Completed', color: 'bg-green-500/20 text-green-200' },
      description: 'Full-stack bidding application with user authentication, bidding system, payment integration, and admin dashboard. Built with React, SpringBoot, and MySQL with REST APIs for secure transactions.',
      techs: ['React', 'Tailwind CSS', 'SpringBoot', 'MySQL', 'REST API'],
      github: ''
    },
    {
      title: 'Portfolio Website',
      status: { text: 'Completed', color: 'bg-green-500/20 text-green-200' },
      description: 'This responsive portfolio website built with modern web technologies, optimized for performance and accessibility. Features smooth animations, dark/light mode, and mobile-first design principles.',
      techs: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
      github: 'https://github.com/BasilisMilesis/BasilisMilesis.github.io'
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <Navbar sections={sections} />

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-20 pb-10 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent glow-effect mb-3 sm:mb-4 leading-tight">
                Vasilis Milesis
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 font-medium mb-6 sm:mb-8">
                Software Developer
              </p>
              <SocialLinks className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4" />
            </div>
            
            <div className="flex-1 w-full">
              <div className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
                <p className="mb-4 sm:mb-6">
                  I am an undergraduate student at the NKUOA, pursuing my degree in Computer Science. I have a strong passion for software
                  development and cybersecurity. My goal is to create efficient, scalable solutions and continuously learn new technologies to
                  solve challenging problems.
                </p>
                <p>
                  Currently focusing on full-stack web development, cybersecurity and machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-[60vh] px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto w-full text-slate-300">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {skillsData.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-[70vh] px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto w-full text-slate-300">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[60vh] px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto w-full text-slate-300">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 sm:mb-12 text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto px-4">
              Right now I&apos;m searching for an internship in software development or cybersecurity. If you are interested in working with me, please reach out!
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <ContactInfo 
                    icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    label="Email"
                    value="basilismilesis1@gmail.com"
                  />
                  <ContactInfo 
                    icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    label="Location"
                    value="Athens, Greece"
                  />
                  <ContactInfo 
                    icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    label="Timezone"
                    value="EET (UTC+2)"
                  />
                </div>
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700/50">
                  <p className="text-xs sm:text-sm text-slate-400">Response time: Usually within 24 hours</p>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6">Let&apos;s Connect</h4>
                <p className="mb-4 sm:mb-6 text-slate-300 leading-relaxed text-sm sm:text-base">
                  My passion lies in building innovative solutions and exploring the frontiers of technology. 
                  If you&apos;re creating something amazing and need a dedicated full-time developer for your team, either on-site or remote, please reach out.
                </p>
                <div className="space-y-4">
                  <FeatureItem 
                    icon="M13 10V3L4 14h7v7l9-11h-7z"
                    text="Always learning new technologies"
                    bgColor="bg-cyan-500/20"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <SocialLinks className="flex flex-wrap justify-center gap-3 sm:gap-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center text-slate-500 text-xs sm:text-sm border-t border-gray-800/50 px-4">
        <p>© 2025 Vasilis Milesis. All rights reserved.</p>
      </footer>
    </main>
  );
}