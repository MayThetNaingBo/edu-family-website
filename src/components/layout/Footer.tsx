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

       
      </div>
    </footer>
  );
}