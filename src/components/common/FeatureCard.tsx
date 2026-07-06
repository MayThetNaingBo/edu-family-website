import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <div className="absolute left-0 top-0 h-1 w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#123C73] text-white transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#123C73]">
        <Icon size={26} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#123C73] transition-colors duration-300 group-hover:text-[#0E2E5D]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-gray-700">{description}</p>

      
    </div>
  );
}