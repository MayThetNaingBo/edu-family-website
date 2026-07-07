"use client";
import PageBanner from "@/src/components/common/PageBanner";
import AdmissionsOverview from "@/src/components/sections/AdmissionsOverview";
import AdmissionProcess from "@/src/components/sections/AdmissionProcess";
import AdmissionsContactApply from "@/src/components/sections/AdmissionsContactApply";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AdmissionsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageBanner
        title={t.admissionsPage.bannerTitle}
        subtitle={t.admissionsPage.bannerSubtitle}
        imageUrl="/admissions-banner.jpg"
      />

      <AdmissionsOverview />
      <AdmissionProcess />
      <AdmissionsContactApply />
    </>
  );
}