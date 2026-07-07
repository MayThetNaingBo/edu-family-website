"use client";

import { Mail, Phone, MapIcon, Menu, X, EarthIcon } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "academics", href: "/academics" },
  { key: "admissions", href: "/admissions" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "my" : "en");
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#123C73] border-b-3 border-[#D4AF37] text-sm text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 md:justify-between md:px-6">
          <p className="text-xs font-medium md:text-sm">
            ⭐ EDU FAMILY ~ <em>{t.school.since}</em>
          </p>

          <div className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-2">
              <Phone size={15} className="text-[#D4AF37]" />
              +95 9 788 777163
            </span>

            <span className="flex items-center gap-2">
              <Mail size={15} className="text-[#D4AF37]" />
              edufamily2023@gmail.com
            </span>

            <Link
              href="https://www.facebook.com/profile.php?id=100088709141303"
              target="_blank"
              className="transition-transform duration-300 hover:scale-110 hover:text-[#D4AF37]"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/edu-logo.png"
              alt="EDU Family Logo"
              width={54}
              height={54}
              className="rounded-full md:h-[60px] md:w-[60px]"
              priority
            />

            <div>
              <h1 className="font-serif text-2xl font-bold text-[#123C73] md:text-3xl">
                {t.school.name}
              </h1>

              <div className="mt-1 flex flex-wrap items-center gap-1 text-xs text-gray-700 md:gap-2 md:text-sm">
                <span>{t.school.type}</span>
                <span className="text-gray-400">|</span>
                <MapIcon size={16} className="text-[#D4AF37]" />
                <span>{t.school.location}</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-[#D4AF37]"
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-2 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#123C73] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-[#123C73] transition hover:border-[#D4AF37] hover:bg-[#F8FAFC]"
            >
              <EarthIcon size={17} />
              {language === "en" ? "မြန်မာ" : "EN"}
            </button>

            <Link
              href="/admissions"
              className="rounded-xl bg-[#123C73] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
            >
              {t.nav.apply}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123C73] text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-5 shadow-lg lg:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-[#123C73]"
              >
                <EarthIcon size={17} />
                {language === "en" ? "မြန်မာဘာသာသို့ ပြောင်းရန်" : "Switch to English"}
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-[#F8FAFC] hover:text-[#123C73]"
                >
                  {t.nav[item.key]}
                </Link>
              ))}

              <Link
  href="/admissions"
  onClick={() => setIsOpen(false)}
  className={`w-full rounded-xl bg-[#123C73] px-4 py-3 text-center font-semibold leading-6 text-white transition hover:bg-[#D4AF37] hover:text-[#123C73] ${
    language === "en" ? "text-sm" : "text-[15px]"
  }`}
>
  {t.nav.apply}
</Link>

              <div className="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone size={15} className="text-[#D4AF37]" />
                  +95 9 788 777163
                </p>

                <p className="mt-3 flex items-center gap-2">
                  <Mail size={15} className="text-[#D4AF37]" />
                  edufamily2023@gmail.com
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}