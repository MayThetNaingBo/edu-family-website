"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/src/components/common/SectionHeading";
import { useLanguage } from "@/src/context/LanguageContext";

export default function HomeAcademicProgrammes() {
  const { t } = useLanguage();

  const programmes = [
    {
      title: t.homeProgrammes.primaryTitle,
      image: "/primary-lvl.jpg",
      description: t.homeProgrammes.primaryDesc,
    },
    {
      title: t.homeProgrammes.middleTitle,
      image: "/middle.jpg",
      description: t.homeProgrammes.middleDesc,
    },
    {
      title: t.homeProgrammes.highTitle,
      image: "/high.jpg",
      description: t.homeProgrammes.highDesc,
    },
    {
      title: t.homeProgrammes.activitiesTitle,
      image: "/activities.jpg",
      description: t.homeProgrammes.activitiesDesc,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t.homeProgrammes.title}
          subtitle={t.homeProgrammes.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programmes.map((programme) => (
            <div
              key={programme.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={programme.image}
                  alt={programme.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#123C73]">
                  {programme.title}
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-[#D4AF37]" />

                <p className="mt-5 leading-8 text-gray-600">
                  {programme.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/academics"
            className="inline-flex rounded-xl bg-[#123C73] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
          >
            {t.homeProgrammes.button}
          </Link>
        </div>
      </div>
    </section>
  );
}