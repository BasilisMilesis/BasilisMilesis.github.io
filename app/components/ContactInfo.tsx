import { Icon } from './Icons';

interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
}

export default function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mt-1 shrink-0 ${
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
}
