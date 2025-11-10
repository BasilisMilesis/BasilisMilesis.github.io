"use client"

import Navbar from './components/Navbar';
import BackgroundDecoration from './components/BackgroundDecoration';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { 
  personalInfo, 
  socialLinks, 
  skillsData, 
  projectsData, 
  sections,
  footerText,
  features,
  contactInfo
} from './data/siteData';

export default function Page() {

  return (
    <main className="relative min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-x-hidden">
      <BackgroundDecoration />
      <Navbar sections={sections} />
      <HeroSection 
        name={personalInfo.name}
        title={personalInfo.title}
        bioIntro={personalInfo.bio.intro}
        bioFocus={personalInfo.bio.focus}
      />
      <SkillsSection skills={skillsData} />
      <ProjectsSection projects={projectsData} />
      <ContactSection 
        contactMessage={personalInfo.contactMessage}
        connectMessage={personalInfo.connectMessage}
        contactInfoItems={contactInfo}
        features={features}
        responseTime={personalInfo.responseTime}
        socialLinks={socialLinks}
      />
      <Footer text={footerText} />
    </main>
  );
}