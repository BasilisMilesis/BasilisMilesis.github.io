// Site Data - All text and configuration that you might want to change

export const personalInfo = {
  name: "Vasilis Milesis",
  title: "Software Developer",
  email: "basilismilesis1@gmail.com",
  location: "Athens, Greece",
  timezone: "EET (UTC+2)",
  responseTime: "Usually within 24 hours",
  
  bio: {
    intro: "I am an undergraduate student at the NKUOA, pursuing my degree in Computer Science. I have a strong passion for software development and cybersecurity. My goal is to create efficient, scalable solutions and continuously learn new technologies to solve challenging problems.",
    focus: "Currently focusing on full-stack web development, cybersecurity and machine learning."
  },
  
  contactMessage: "Right now I'm searching for an internship in software development or cybersecurity. If you are interested in working with me, please reach out!",
  
  connectMessage: "My passion lies in building innovative solutions and exploring the frontiers of technology. If you're creating something amazing and need a dedicated full-time developer for your team, either on-site or remote, please reach out."
};

export const socialLinks = [
  { 
    href: "https://github.com/BasilisMilesis", 
    label: "GitHub", 
    type: "github" as const
  },
  { 
    href: "https://www.linkedin.com/in/vasilis-milesis", 
    label: "LinkedIn", 
    type: "linkedin" as const
  },
  { 
    href: "/resume.pdf", 
    label: "Resume", 
    type: "resume" as const,
    isButton: true 
  }
];

export const skillsData = [
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
    title: 'Programming Languages',
    skills: ['Java', 'C++', 'Python', 'C', 'TypeScript', 'Bash', 'SQL'],
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-400',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Linux', 'VS Code', 'Github', 'JWT'],
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
    iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  }
];

export const projectsData = [
  {
    title: 'Bidding Platform',
    status: { text: 'Completed', color: 'bg-green-500/20 text-green-200' },
    description: 'Full-stack bidding application with user authentication, bidding system, payment integration, and admin dashboard. Built with React, SpringBoot, and MySQL with REST APIs for secure transactions.',
    techs: ['React', 'Tailwind CSS', 'SpringBoot', 'MySQL', 'REST API'],
    github: 'https://github.com/BasilisMilesis/MegaBid',
    isCurrentSite: false,
    image: '/megabid.png'
  },
  {
    title: 'Portfolio Website',
    status: { text: 'Completed', color: 'bg-green-500/20 text-green-200' },
    description: 'This responsive portfolio website built with modern web technologies, optimized for performance and accessibility. Features smooth animations, dark/light mode, and mobile-first design principles.',
    techs: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
    github: 'https://github.com/BasilisMilesis/BasilisMilesis.github.io',
    isCurrentSite: true,
    image: '/portfolio.png'
  }
];

export const sections = ['about', 'skills', 'projects', 'contact'];

export const footerText = "© 2025 Vasilis Milesis. All rights reserved.";

export const features = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    text: "Always learning new technologies",
    bgColor: "bg-cyan-500/20"
  }
];

export const contactInfo = [
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: personalInfo.email
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Location",
    value: personalInfo.location
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Timezone",
    value: personalInfo.timezone
  }
];
