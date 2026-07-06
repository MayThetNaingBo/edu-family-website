import { Brain, MessageCircle, PenTool, Target } from "lucide-react";
import SectionHeading from "@/src/components/common/SectionHeading";

const methods = [
  {
    icon: Brain,
    title: "Think",
    description:
      "Students are encouraged to ask questions, explore ideas, and understand concepts clearly.",
  },
  {
    icon: MessageCircle,
    title: "Discuss",
    description:
      "Class discussions help students develop communication, teamwork, and confidence.",
  },
  {
    icon: PenTool,
    title: "Practice",
    description:
      "Students apply what they learn through exercises, projects, and classroom activities.",
  },
  {
    icon: Target,
    title: "Achieve",
    description:
      "Regular feedback and assessments help students improve and reach their academic goals.",
  },
];

export default function TeachingMethodology() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Teaching Methodology"
          subtitle="How We Help Students Learn Better"
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-[#F8FAFC] shadow-lg">
          {methods.map((method, index) => {
            const Icon = method.icon;

            return (
              <div
                key={method.title}
                className="grid gap-6 border-b border-gray-200 bg-white p-8 last:border-b-0 md:grid-cols-[120px_1fr]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#123C73] text-white">
                    <Icon size={26} />
                  </div>

                  <span className="text-2xl font-bold text-[#D4AF37]">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#123C73]">
                    {method.title}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-8 text-gray-600">
                    {method.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}