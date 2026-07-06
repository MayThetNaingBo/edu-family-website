import SectionHeading from "@/src/components/common/SectionHeading";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Monitor,
  Palette,
  Dumbbell,
} from "lucide-react";

const subjects = [
  {
    name: "English",
    detail: "Communication & Literacy",
    icon: BookOpen,
    position: "left-1/2 top-4 -translate-x-1/2",
  },
  {
    name: "Science",
    detail: "Curiosity & Discovery",
    icon: FlaskConical,
    position: "right-10 top-36",
  },
  {
    name: "Arts",
    detail: "Creativity & Expression",
    icon: Palette,
    position: "right-20 bottom-24",
  },
  {
    name: "ICT",
    detail: "Technology & Digital Skills",
    icon: Monitor,
    position: "left-1/2 bottom-4 -translate-x-1/2",
  },
  {
    name: "Physical Education",
    detail: "Health & Well-being",
    icon: Dumbbell,
    position: "left-20 bottom-24",
  },
  {
    name: "Mathematics",
    detail: "Logic & Problem Solving",
    icon: Calculator,
    position: "left-10 top-36",
  },
];

export default function SubjectsOffered() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Subjects Offered"
          subtitle="A Balanced Curriculum for Every Learner"
        />

        <div className="relative mx-auto mt-12 hidden h-[760px] max-w-5xl items-center justify-center overflow-hidden rounded-[48px] bg-white shadow-2xl lg:flex">
          <div className="absolute h-[720px] w-[720px] rounded-full border-[28px] border-[#E5E7EB]" />
          <div className="absolute h-[650px] w-[650px] rounded-full border border-[#D4AF37]/70" />
          <div className="absolute h-[540px] w-[540px] rounded-full bg-[#F8FAFC]" />
          <div className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-[#123C73]/25" />

          <div className="absolute z-20 flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-white bg-[#D4AF37] text-[#123C73] shadow-2xl">
            <Globe size={58} />
          </div>

          <div className="absolute top-[405px] z-20 text-center">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-[#123C73]">
              Global Perspective
            </h3>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#D4AF37]" />
            <p className="mt-4 max-w-[220px] text-base leading-7 text-gray-600">
              Preparing students for the future
            </p>
          </div>

          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.name}
                className={`absolute ${subject.position} z-10 flex flex-col items-center text-center`}
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-[8px] border-white bg-[#123C73] text-white shadow-xl">
                  <Icon size={46} />
                </div>

                <h4 className="mt-5 text-xl font-bold uppercase text-[#123C73]">
                  {subject.name}
                </h4>

                <div className="mt-2 h-1 w-10 rounded-full bg-[#D4AF37]" />

                <p className="mt-3 max-w-[170px] text-sm leading-6 text-gray-600">
                  {subject.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:hidden">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.name}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#123C73] text-white">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#123C73]">
                      {subject.name}
                    </h4>
                    <p className="text-sm text-gray-600">{subject.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}