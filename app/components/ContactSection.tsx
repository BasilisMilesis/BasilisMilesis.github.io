import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import FeatureItem from './FeatureItem';

interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
}

interface Feature {
  icon: string;
  text: string;
  bgColor: string;
}

interface SocialLink {
  href: string;
  label: string;
  type: 'github' | 'linkedin' | 'resume';
  isButton?: boolean;
}

interface ContactSectionProps {
  contactMessage: string;
  connectMessage: string;
  contactInfoItems: ContactInfoItem[];
  features: Feature[];
  responseTime: string;
  socialLinks: SocialLink[];
}

export default function ContactSection({ contactMessage, connectMessage, contactInfoItems, features, responseTime, socialLinks }: ContactSectionProps) {
  return (
    <section id="contact" className="min-h-[60vh] px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto w-full text-slate-300">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h3>
        <div className="max-w-4xl mx-auto">
          <p className="mb-8 sm:mb-12 text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto px-4">
            {contactMessage}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6">Contact Information</h4>
              <div className="space-y-4">
                {contactInfoItems.map((item) => (
                  <ContactInfo key={item.label} {...item} />
                ))}
              </div>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700/50">
                <p className="text-xs sm:text-sm text-slate-400">Response time: {responseTime}</p>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6">Let&apos;s Connect</h4>
              <p className="mb-4 sm:mb-6 text-slate-300 leading-relaxed text-sm sm:text-base">
                {connectMessage}
              </p>
              <div className="space-y-4">
                {features.map((feature) => (
                  <FeatureItem key={feature.text} {...feature} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <SocialLinks className="flex flex-wrap justify-center gap-3 sm:gap-4" links={socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
