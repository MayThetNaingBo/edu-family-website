"use client";

import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AboutStory() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative">
          <Image
            src="/about-school.jpg"
            alt="EDU Family Campus"
            width={700}
            height={700}
            className="rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />

          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[#123C73] px-8 py-6 text-white shadow-xl">
            <h3 className="text-3xl font-bold text-[#D4AF37]">5+</h3>

            <p className="mt-1 text-sm">
              {t.aboutStory.experience1}
              <br />
              {t.aboutStory.experience2}
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            {t.aboutStory.sectionTitle}
          </p>

          <h2
            className={`mt-4 font-bold ${
              language === "en"
                ? "font-serif text-3xl leading-tight md:text-5xl"
                : "font-sans text-3xl leading-[1.5] md:text-4xl"
            }`}
          >
            {language === "en" ? (
              <>
                <span className="text-[#123C73]">
                  {t.aboutStory.heading1}
                </span>

                <span className="text-[#D4AF37]">
                  {" "}
                  {t.aboutStory.heading2}
                </span>
              </>
            ) : (
              <>
                <span className="block text-[#123C73]">
                  {t.aboutStory.heading1}
                </span>

                <span className="mt-2 block text-[#D4AF37]">
                  {t.aboutStory.heading2}
                </span>

                <span className="mt-2 block text-[#123C73]">
                  {t.aboutStory.heading3}
                </span>
              </>
            )}
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            {t.aboutStory.description}
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#123C73]">
                {t.aboutStory.missionTitle}
              </h3>

              <p className="leading-7 text-gray-600">
                {t.aboutStory.missionDescription}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#123C73]">
                {t.aboutStory.visionTitle}
              </h3>

              <p className="leading-7 text-gray-600">
                {t.aboutStory.visionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}