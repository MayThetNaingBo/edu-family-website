import {
  GraduationCap,
  School,
  BookOpen,
  UsersRound,
} from "lucide-react";
import FeatureCard from "@/src/components/common/FeatureCard";
import SectionHeading from "@/src/components/common/SectionHeading";

const programmes = [
  {
    icon: School,
    title: "Primary Education",
    description:
      "Building strong foundations in literacy, numeracy, science, and character development.",
  },
  {
    icon: BookOpen,
    title: "Middle School",
    description:
      "Encouraging independent thinking, teamwork, and deeper subject understanding.",
  },
  {
    icon: GraduationCap,
    title: "High School",
    description:
      "Preparing students for national examinations and higher education opportunities.",
  },
  {
    icon: UsersRound,
    title: "Holistic Development",
    description:
      "Developing leadership, communication, creativity, and lifelong learning skills.",
  },
];

export default function AcademicProgrammes() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Academic Programmes"
          subtitle="Learning Pathways for Every Student"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {programmes.map((programme) => (
                    <FeatureCard
                      key={programme.title}
                      icon={programme.icon}
                      title={programme.title}
                      description={programme.description}
                    />
                  ))}
                </div>
      </div>
    </section>
  );
}