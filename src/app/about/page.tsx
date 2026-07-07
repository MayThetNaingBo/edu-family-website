"use client";
import AboutStory from "@/src/components/sections/AboutStory";
import PrincipalMessage from "@/src/components/sections/PrincipalMessage";
import PageBanner from "@/src/components/common/PageBanner";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Hom() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.aboutPage.bannerTitle}
        subtitle={t.aboutPage.bannerSubtitle}
        imageUrl="/about-teachers1.jpg"
      />

      <AboutStory />
      <PrincipalMessage />
    </>
  );
}