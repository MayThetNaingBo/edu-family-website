"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/src/components/common/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const galleryImages = [
  "/achievement-small-8.jpg",
  "/achievement-small-2.jpg",
  "/achievement-small-3.jpg",
  "/achievement-small-4.jpg",
  "/achievement-small-5.jpg",
  "/achievement-small-7.jpg",
];

export default function FeaturedAchievement() {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);

  const visibleImages = galleryImages.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 3 >= galleryImages.length ? 0 : prev + 3
    );
  };

  const handlePrevious = () => {
    setStartIndex((prev) =>
      prev - 3 < 0 ? Math.max(galleryImages.length - 3, 0) : prev - 3
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t.featuredAchievement.sectionTitle}
          subtitle={t.featuredAchievement.sectionSubtitle}
        />

        <div className="grid overflow-hidden rounded-[32px] bg-[#123C73] shadow-2xl lg:grid-cols-2">
          <div className="relative flex items-center justify-center p-8">
            <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#D4AF37]/20 blur-3xl" />
            <div className="absolute -bottom-10 right-6 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute left-12 top-12 z-20 rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#123C73] shadow-lg">
              {t.featuredAchievement.studentName}
            </div>

            <div className="group relative h-[430px] w-full max-w-md overflow-hidden rounded-3xl border-4 border-[#D4AF37] bg-white p-2 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="/achievement-main.jpg"
                alt="Featured student achievement"
                fill
                className="rounded-[20px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <h4 className="mt-1 text-2xl font-bold text-[#D4AF37]">
                  {t.featuredAchievement.distinction}
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-10 text-white lg:p-14">
           

            <h3 className="text-4xl font-bold leading-tight">
              {t.featuredAchievement.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-200">
              {t.featuredAchievement.description}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#123C73]">
              {t.featuredAchievement.moreTitle}
            </h3>

            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#123C73] text-[#123C73] transition-all duration-300 hover:bg-[#123C73] hover:text-white"
                aria-label="Previous achievements"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123C73] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#123C73]"
                aria-label="Next achievements"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {visibleImages.map((image, index) => (
              <div
                key={image}
                className="group relative h-64 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={image}
                  alt={`Achievement photo ${startIndex + index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}