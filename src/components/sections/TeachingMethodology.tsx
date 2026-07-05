import { Brain, MessageCircle, PenTool, Target } from "lucide-react";
import SectionHeading from "@/src/components/common/SectionHeading";

const methods = [
  {
    icon: Brain,
    title: "Think",
    description: "Students learn to ask questions and understand concepts clearly.",
  },
  {
    icon: MessageCircle,
    title: "Discuss",
    description: "Group discussions help students build communication and confidence.",
  },
  {
    icon: PenTool,
    title: "Practice",
    description: "Students apply knowledge through classwork, projects, and activities.",
  },
  {
    icon: Target,
    title: "Achieve",
    description: "Regular feedback and assessments help students improve step by step.",
  },
];

export default function TeachingMethodology() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Teaching Methodology"
          subtitle="How We Help Students Learn Better"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, index) => {
            const Icon = method.icon;

            return (
              <div key={method.title} className="relative rounded-3xl bg-[#F8FAFC] p-8 shadow-md">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#123C73] text-white">
                  <Icon size={30} />
                </div>

                <span className="absolute right-8 top-8 text-5xl font-extrabold text-[#D4AF37]/30">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-bold text-[#123C73]">
                  {method.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}