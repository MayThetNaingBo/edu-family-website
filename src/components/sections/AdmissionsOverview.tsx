"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AdmissionsOverview() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            {t.admissionsOverview.label}
          </p>

          <h2
            className={`mt-4 font-bold ${
              language === "en"
                ? "font-serif text-3xl leading-tight md:text-5xl"
                : "font-sans text-[1.9rem] leading-[1.55] md:text-[2.5rem]"
            }`}
          >
            {language === "en" ? (
              <>
                <span className="text-[#123C73]">
                  {t.admissionsOverview.heading1}
                </span>

                <span className="text-[#D4AF37]">
                  {" "}
                  {t.admissionsOverview.heading2}
                </span>
              </>
            ) : (
              <>
                <span className="block text-[#123C73]">
                  {t.admissionsOverview.heading1}
                </span>

                <span className="mt-2 block text-[#D4AF37]">
                  {t.admissionsOverview.heading2}
                </span>

                <span className="mt-2 block text-[#123C73]">
                  {t.admissionsOverview.heading3}
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            {t.admissionsOverview.description}
          </p>
        </div>

        {/* Right */}
        <div className="rounded-3xl bg-[#F8FAFC] p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#123C73]">
            {t.admissionsOverview.contactTitle}
          </h3>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <Phone className="text-[#D4AF37]" />

              <div className="flex flex-col gap-2">
                <a
                  href="tel:+959788777163"
                  className="text-gray-700 hover:underline"
                >
                  +95 9 788 777163
                </a>

                <a
                  href="tel:+959250308081"
                  className="text-gray-700 hover:underline"
                >
                  +95 9 250 308081
                </a>

                <a
                  href="tel:+959401540564"
                  className="text-gray-700 hover:underline"
                >
                  +95 9 401 540564
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MessageCircle className="text-[#D4AF37]" />

              <a
                href="https://www.facebook.com/edufamily"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                {t.admissionsOverview.facebook}
              </a>
            </div>

            <div className="flex gap-4">
              <MapPin size={30} className="shrink-0 text-[#D4AF37]" />

              <a
                href="https://maps.app.goo.gl/skekFJVBwe48aN2p9"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-pre-line text-gray-700 transition-colors hover:text-[#123C73] hover:underline"
              >
                {t.admissionsOverview.address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}