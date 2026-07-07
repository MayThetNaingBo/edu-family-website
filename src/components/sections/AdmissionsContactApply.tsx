"use client";

import { Download, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AdmissionsContactApply() {
  const { language, t } = useLanguage();

  const titleClass =
    language === "en"
      ? "font-serif text-3xl leading-tight md:text-5xl"
      : "font-sans text-[1.9rem] leading-[1.55] md:text-[2.5rem]";

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <h2 className={`font-bold text-[#123C73] ${titleClass}`}>
            {t.admissionsContactApply.visitTitle}
          </h2>

          <div className="mt-5 flex items-center gap-4 text-[#D4AF37]">
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
            <span className="text-2xl">★</span>
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {t.admissionsContactApply.visitDescription}
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <MapPin size={46} className="mt-1 shrink-0 text-[#D4AF37]" />

              <div>
                <h3 className="text-xl font-bold text-[#123C73]">
                  {t.admissionsContactApply.addressTitle}
                </h3>

                <p className="mt-2 whitespace-pre-line leading-8 text-gray-600">
                  {t.admissionsContactApply.address}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-[#D4AF37]" size={28} />

              <div>
                <h3 className="text-xl font-bold text-[#123C73]">
                  {t.admissionsContactApply.officeHoursTitle}
                </h3>

                <p className="mt-2 whitespace-pre-line leading-8 text-gray-600">
                  {t.admissionsContactApply.officeHours}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-[#123C73] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
          >
            {t.admissionsContactApply.contactButton}
          </Link>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <h2 className={`font-bold text-[#123C73] ${titleClass}`}>
            {t.admissionsContactApply.applyTitle}
          </h2>

          <div className="mt-5 flex items-center gap-4 text-[#D4AF37]">
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
            <span className="text-2xl">★</span>
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-800">
            {t.admissionsContactApply.applyDesc1}
          </p>

          <p className="mt-6 leading-8 text-gray-800">
            {t.admissionsContactApply.applyDesc2}
          </p>

          <div className="mt-10 rounded-2xl bg-[#F8FAFC] p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#123C73]">
              {t.admissionsContactApply.manualTitle}
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">
              {t.admissionsContactApply.steps.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>

          <a
            href="/Brochure.pdf"
            download="EDU-Family-Brochure.pdf"
            className="mt-10 flex items-center justify-center gap-3 rounded-xl bg-[#123C73] px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
          >
            <Download size={22} />
            {t.admissionsContactApply.brochure}
          </a>
        </div>
      </div>
    </section>
  );
}