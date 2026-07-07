"use client";

import {
  GraduationCap,
  BookOpen,
  Users,
  ShieldCheck,
} from "lucide-react";
import FeatureCard from "@/src/components/common/FeatureCard";
import SectionHeading from "@/src/components/common/SectionHeading";
import { useLanguage } from "@/src/context/LanguageContext";

export default function WhyChoose() {
  const { t } = useLanguage();

  const features = [
    {
      icon: GraduationCap,
      title: t.whyChoose.qualityTitle,
      description: t.whyChoose.qualityDesc,
    },
    {
      icon: BookOpen,
      title: t.whyChoose.modernTitle,
      description: t.whyChoose.modernDesc,
    },
    {
      icon: Users,
      title: t.whyChoose.caringTitle,
      description: t.whyChoose.caringDesc,
    },
    {
      icon: ShieldCheck,
      title: t.whyChoose.safeTitle,
      description: t.whyChoose.safeDesc,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] pt-12 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t.whyChoose.title}
          subtitle={t.whyChoose.subtitle}
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