interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="py-6 sm:py-8 text-center text-slate-500 text-xs sm:text-sm border-t border-gray-800/50 px-4">
      <p>{text}</p>
    </footer>
  );
}
