"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-2 border-[#D4AF37] bg-[#FCFCFC] py-4">
      <div className="px-6 text-center text-sm">
        <p className="text-[#123C73]/75">
          {t.footer.copyright.replace(
            "YEAR",
            String(new Date().getFullYear())
          )}
        </p>

        <p className="mt-1 text-[#123C73]/75">
          Designed & Developed by{" "}
          <a
            href="https://maythetnaingbo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#123C73] transition-colors hover:text-[#D4AF37]"
          >
            May
          </a>
          .
        </p>
      </div>
    </footer>
  );
}