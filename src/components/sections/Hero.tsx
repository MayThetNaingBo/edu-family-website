"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:min-h-[620px] lg:grid-cols-2 lg:pt-6">
        {/* Left */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] sm:text-sm">
            <span className="h-[2px] w-8 bg-[#D4AF37] sm:w-10" />
            {t.hero.welcome}
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.15] tracking-[-0.01em] text-[#123C73] md:text-5xl lg:text-[3.8rem]">
            {language === "en" ? (
              <>
                {t.hero.title1}
                <br />
                {t.hero.title2}
                <br />
                <span className="text-[#D4AF37]">{t.hero.title3}</span>
              </>
            ) : (
              <span className="block max-w-2xl text-[2rem] leading-[1.65] md:text-[2.5rem] lg:text-[2.8rem]">
  {t.hero.title1}
  <span className="text-[#D4AF37]">{t.hero.title2}</span>
  {t.hero.title3}
</span>
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/admissions"
              className="rounded-xl bg-[#123C73] px-8 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
            >
              {t.hero.apply}
            </Link>

            <Link
              href="/about"
              className="rounded-xl bg-[#D4AF37] px-8 py-4 text-center font-semibold text-[#123C73] transition-all duration-300 hover:bg-[#123C73] hover:text-white"
            >
              {t.hero.explore}
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[8px] border-[#D4AF37]/90 sm:h-[380px] sm:w-[380px] lg:left-[-1.5rem] lg:h-[440px] lg:w-[440px] lg:translate-x-0" />

          <div className="relative h-[280px] w-full max-w-[650px] overflow-hidden rounded-[32px] shadow-2xl sm:h-[340px] lg:h-[360px] lg:rounded-[44px]">
            <Image
              src="/hero-school.jpg"
              alt="EDU Family"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute -left-1 top-4 hidden grid-cols-4 gap-2 sm:grid">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-[#D4AF37]"
              />
            ))}
          </div>

          <div className="absolute -bottom-6 left-4 rounded-full bg-[#123C73] px-5 py-4 text-center text-white shadow-2xl sm:left-10 sm:px-7 sm:py-6">
            <p className="text-[10px] font-bold text-[#D4AF37] sm:text-xs">
              {t.hero.badgeTop}
            </p>

            <p className="mt-1 text-sm font-bold leading-5 sm:text-base">
              {t.hero.badgeBottom1}
              <br />
              {t.hero.badgeBottom2}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-5 w-full bg-[#123C73] sm:h-6" />
    </section>
  );
}