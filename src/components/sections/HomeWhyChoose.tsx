import { BookOpen, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";
import FeatureCard from "@/src/components/common/FeatureCard";
import SectionHeading from "@/src/components/common/SectionHeading";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "We provide strong academic foundations with care, discipline, and student-focused teaching.",
  },
  {
    icon: BookOpen,
    title: "Modern Learning",
    description:
      "Students learn through active lessons, discussion, practical activities, and guided support.",
  },
  {
    icon: HeartHandshake,
    title: "Family Community",
    description:
      "We work closely with parents and students to create a caring school environment.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description:
      "Our school promotes respect, responsibility, and a positive learning atmosphere.",
  },
];

export default function HomeWhyChoose() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Why Choose EDU Family"
          subtitle="Nurturing Minds, Building Futures"
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