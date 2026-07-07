"use client";

import Image from "next/image";
import { Send } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function ContactSection() {
  const { language, t } = useLanguage();

  const titleClass =
    language === "en"
      ? "font-serif text-3xl leading-tight md:text-5xl"
      : "font-sans text-[1.9rem] leading-[1.55] md:text-[2.5rem]";

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-full min-h-[620px]">
            <Image
              src="/contact-sch.jpg"
              alt="EDU Family Private High School"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123C73]/80 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 right-10 text-white">
              <h2 className={`font-bold ${titleClass}`}>
                {t.contactSection.imageTitle}
              </h2>

              <p className="mt-4 leading-8 text-gray-100">
                {t.contactSection.imageDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <h2 className={`font-bold text-[#123C73] ${titleClass}`}>
            {t.contactSection.formTitle}
          </h2>

          <div className="mt-5 flex items-center gap-4 text-[#D4AF37]">
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
            <span className="text-2xl">★</span>
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
          </div>

          <form className="mt-10 space-y-6">
            <input
              type="text"
              placeholder={t.contactSection.fullName}
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-base text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-[#123C73] focus:ring-2 focus:ring-[#123C73]/20"
            />

            <input
              type="email"
              placeholder={t.contactSection.email}
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-base text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-[#123C73] focus:ring-2 focus:ring-[#123C73]/20"
            />

            <input
              type="tel"
              placeholder={t.contactSection.phone}
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-base text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-[#123C73] focus:ring-2 focus:ring-[#123C73]/20"
            />

            <input
              type="text"
              placeholder={t.contactSection.subject}
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-base text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-[#123C73] focus:ring-2 focus:ring-[#123C73]/20"
            />

            <textarea
              rows={6}
              placeholder={t.contactSection.message}
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-base text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-[#123C73] focus:ring-2 focus:ring-[#123C73]/20"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#123C73] py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-[#123C73]"
            >
              <Send size={22} />
              {t.contactSection.button}
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.7872830382994!2d96.0942085733036!3d16.88641401704749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1950007fc1e55%3A0x96fd97b66ece81c9!2sEDU%20Family%20Private%20High%20School!5e0!3m2!1sen!2ssg!4v1783276557173!5m2!1sen!2ssg"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}