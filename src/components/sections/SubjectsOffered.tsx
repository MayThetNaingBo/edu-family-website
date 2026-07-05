import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Languages,
  Monitor,
  Palette,
  Dumbbell,
} from "lucide-react";
import SectionHeading from "@/src/components/common/SectionHeading";

const subjects = [
  { icon: BookOpen, name: "English" },
  { icon: Languages, name: "Myanmar" },
  { icon: Calculator, name: "Mathematics" },
  { icon: FlaskConical, name: "Science" },
  { icon: Monitor, name: "ICT" },
  { icon: Globe, name: "Social Studies" },
  { icon: Palette, name: "Arts" },
  { icon: Dumbbell, name: "Physical Education" },
];

export default function SubjectsOffered() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Subjects Offered"
          subtitle="A Balanced Curriculum for Every Learner"
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.name}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#123C73] text-white">
                  <Icon size={26} />
                </div>

                <h3 className="font-bold text-[#123C73]">
                  {subject.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}