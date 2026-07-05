import { Mail, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#123C73] text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p className="font-medium">
            Welcome to the EDU Family ~
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 transition-opacity duration-300 hover:opacity-90"
          >
            <Image
              src="/edu-logo.png"
              alt="EDU Family Logo"
              width={60}
              height={60}
              className="rounded-full"
              priority
            />

            <div>
              <h1 className="font-serif text-3xl font-bold text-[#123C73]">
                EDU Family
              </h1>

              <p className="text-sm text-gray-600">
                Private High School
              </p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden items-center gap-8 lg:flex">
           {navItems.map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className="group relative text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-[#123C73]"
  >
    {item.label}

   <span className="absolute -bottom-2 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#123C73] transition-all duration-300 group-hover:w-full"></span>
  </Link>
))}

            {/* CTA Button */}
            <Link
              href="/admissions"
              className="rounded-xl bg-[#123C73] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}