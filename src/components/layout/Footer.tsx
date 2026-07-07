"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#FCFCFC] border-t-2 border-[#D4AF37] py-5">
      <p className="text-center text-sm #123C73 text-gray-500">
        {t.footer.copyright.replace(
          "YEAR",
          String(new Date().getFullYear())
        )}
      </p>
      
    </footer>
  );
}