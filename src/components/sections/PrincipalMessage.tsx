"use client";

import Image from "next/image";
import PrimaryButton from "@/src/components/common/PrimaryButton";
import SectionHeading from "@/src/components/common/SectionHeading";
import { useLanguage } from "@/src/context/LanguageContext";

export default function PrincipalMessage() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t.principal.sectionTitle}
          subtitle={t.principal.sectionSubtitle}
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/about-story.jpg"
              alt="EDU Family school community"
              width={600}
              height={700}
              className="rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-5 left-8 rounded-xl bg-[#123C73] px-6 py-4 text-white shadow-xl">
              <p className="font-bold">
                {t.principal.badgeTitle}
              </p>

              <p className="text-sm text-gray-200">
                {t.principal.badgeSubtitle}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#123C73]">
              {t.principal.title}
            </h3>

            <p className="mt-8 leading-8 text-gray-600">
              {t.principal.paragraph1}
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              {t.principal.paragraph2}
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              {t.principal.paragraph3}
            </p>

            <div className="mt-10">
              <PrimaryButton href="/admissions">
                {t.principal.button}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}