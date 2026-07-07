"use client";

import {
  GraduationCap,
  School,
  BookOpen,
  UsersRound,
} from "lucide-react";
import FeatureCard from "@/src/components/common/FeatureCard";
import SectionHeading from "@/src/components/common/SectionHeading";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AcademicProgrammes() {
  const { t } = useLanguage();

  const programmes = [
    {
      icon: School,
      title: t.academicProgrammes.primaryTitle,
      description: t.academicProgrammes.primaryDesc,
    },
    {
      icon: BookOpen,
      title: t.academicProgrammes.middleTitle,
      description: t.academicProgrammes.middleDesc,
    },
    {
      icon: GraduationCap,
      title: t.academicProgrammes.highTitle,
      description: t.academicProgrammes.highDesc,
    },
    {
      icon: UsersRound,
      title: t.academicProgrammes.holisticTitle,
      description: t.academicProgrammes.holisticDesc,
    },
  ];

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t.academicProgrammes.title}
          subtitle={t.academicProgrammes.subtitle}
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