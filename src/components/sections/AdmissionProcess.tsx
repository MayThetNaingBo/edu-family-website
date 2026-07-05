import {
  ClipboardList,
  FileText,
  MapPin,
  MessageCircle,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/src/components/common/SectionHeading";

const steps = [
  {
    icon: MessageCircle,
    title: "Contact School",
    description: "Call or message the school to ask about available classes.",
  },
  {
    icon: MapPin,
    title: "Visit Campus",
    description: "Parents are encouraged to visit the campus in person.",
  },
  {
    icon: ClipboardList,
    title: "Collect Form",
    description: "Get the admission form from the school office.",
  },
  {
    icon: FileText,
    title: "Submit Documents",
    description: "Submit the completed form and required documents.",
  },
  {
    icon: UserCheck,
    title: "Assessment",
    description: "Students may be invited for an interview or assessment.",
  },
  {
    icon: CheckCircle,
    title: "Confirmation",
    description: "The school confirms admission after review.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Admission Process"
          subtitle="Simple Manual Enrolment Steps"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="absolute right-8 top-8 text-5xl font-extrabold text-[#D4AF37]/30">
                  0{index + 1}
                </span>

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#123C73] text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-[#123C73]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}