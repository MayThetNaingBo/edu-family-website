import {
  GraduationCap,
  BookOpen,
  Users,
  ShieldCheck,
} from "lucide-react";
import FeatureCard from "@/src/components/common/FeatureCard";
import SectionHeading from "@/src/components/common/SectionHeading";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "We provide a comprehensive academic programme that prepares students for future success.",
  },
  {
    icon: BookOpen,
    title: "Modern Learning",
    description:
      "Interactive classrooms and innovative teaching methods inspire curiosity and lifelong learning.",
  },
  {
    icon: Users,
    title: "Caring Community",
    description:
      "Students grow in a supportive environment where teachers, parents, and staff work together.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description:
      "A secure campus that promotes respect, discipline, and student well-being every day.",
  },
];

export default function WhyChoose() {
  return (
   <section className="bg-[#F8FAFC] pt-12 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Why Choose EDU Family"
          subtitle="Providing the Best Learning Experience"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}