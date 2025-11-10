import { Icon } from './Icons';

interface FeatureItemProps {
  icon: string;
  text: string;
  bgColor: string;
}

export default function FeatureItem({ icon, text, bgColor }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
      <div className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center`}>
        <Icon path={icon} className="w-4 h-4" />
      </div>
      <span className="text-sm">{text}</span>
    </div>
  );
}
