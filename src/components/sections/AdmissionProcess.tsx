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
    title: "Contact the School",
    description: "Call or message our admissions office to ask about available classes and enrolment requirements.",
  },
  {
    icon: MapPin,
    title: "Visit the Campus",
    description: "Parents are encouraged to visit the campus, meet our team, and learn more about the school environment.",
  },
  {
    icon: ClipboardList,
    title: "Complete the Application Form",
    description: "Collect and complete the admission form from the school office.",
  },
  {
    icon: FileText,
    title: "Submit Required Documents",
    description: "Submit the completed form together with the required student documents.",
  },
  {
    icon: UserCheck,
    title: "Student Assessment",
    description: "Students may be invited for an interview or assessment depending on the grade level.",
  },
  {
    icon: CheckCircle,
    title: "Admission Confirmation",
    description: "The school reviews the application and confirms admission after approval.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Admission Process"
          subtitle="Simple Manual Enrolment Steps"
        />

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.title}
                className="relative grid gap-6 border-b border-gray-200 p-8 last:border-b-0 md:grid-cols-[110px_1fr]"
              >
                <div className="relative flex md:justify-center">
                  {!isLast && (
                    <div className="absolute left-7 top-16 hidden h-full w-px bg-[#D4AF37]/50 md:block" />
                  )}

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#123C73] text-white">
                    <Icon size={24} />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[3px] text-[#D4AF37]">
                    Step {index + 1}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#123C73]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-8 text-gray-600">
                    {step.description}
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