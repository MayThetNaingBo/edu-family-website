"use client";
import PageBanner from "@/src/components/common/PageBanner";
import AcademicProgrammes from "@/src/components/sections/AcademicProgrammes";
import SubjectsOffered from "@/src/components/sections/SubjectsOffered";
import TeachingMethodology from "@/src/components/sections/TeachingMethodology";
import StudentLife from "@/src/components/sections/StudentLife";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AcademicsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageBanner
        title={t.aboutAcademic.bannerTitle}
        subtitle={t.aboutAcademic.bannerSubtitle}
        imageUrl="/academic-banner.jpg"
      />
      {/* <SubjectsOffered /> */}
      <AcademicProgrammes />
      <TeachingMethodology />
      <StudentLife />   
    </>
  );
}