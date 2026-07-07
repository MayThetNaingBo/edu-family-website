"use client";

import {
  ClipboardList,
  FileText,
  MapPin,
  MessageCircle,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/src/components/common/SectionHeading";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AdmissionProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      title: t.admissionProcess.contactTitle,
      description: t.admissionProcess.contactDesc,
    },
    {
      icon: MapPin,
      title: t.admissionProcess.visitTitle,
      description: t.admissionProcess.visitDesc,
    },
    {
      icon: ClipboardList,
      title: t.admissionProcess.applicationTitle,
      description: t.admissionProcess.applicationDesc,
    },
    {
      icon: FileText,
      title: t.admissionProcess.documentTitle,
      description: t.admissionProcess.documentDesc,
    },
    {
      icon: UserCheck,
      title: t.admissionProcess.assessmentTitle,
      description: t.admissionProcess.assessmentDesc,
    },
    {
      icon: CheckCircle,
      title: t.admissionProcess.confirmationTitle,
      description: t.admissionProcess.confirmationDesc,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title={t.admissionProcess.title}
          subtitle={t.admissionProcess.subtitle}
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
                    {t.admissionProcess.step} {index + 1}
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