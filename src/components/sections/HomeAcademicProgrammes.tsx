import { BookOpen, GraduationCap, School, UsersRound } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/src/components/common/SectionHeading";

const programmes = [
  {
    icon: School,
    title: "Primary",
    description: "Strong foundations in language, mathematics, science, and character development.",
  },
  {
    icon: BookOpen,
    title: "Middle School",
    description: "Building confidence, discipline, communication skills, and independent learning.",
  },
  {
    icon: GraduationCap,
    title: "High School",
    description: "Preparing students for examinations, higher education, and future opportunities.",
  },
  {
    icon: UsersRound,
    title: "Activities",
    description: "Supporting student growth through competitions, teamwork, sports, and events.",
  },
];

export default function HomeAcademicProgrammes() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Academic Programmes"
          subtitle="Learning Pathways for Every Student"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programmes.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#123C73] text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-[#123C73]">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/academics"
            className="inline-flex rounded-xl bg-[#123C73] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
          >
            Explore Academics
          </Link>
        </div>
      </div>
    </section>
  );
}