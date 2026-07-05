import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-6 pb-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            <span className="h-[2px] w-10 bg-[#D4AF37]" />
            Welcome to the EDU Family
          </span>

          <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.05] tracking-[-0.01em] text-[#123C73] sm:text-6xl lg:text-[4.5rem]">
            Empowering
            <br />
            Future
            <br />
            <span className="text-[#D4AF37]">Leaders</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Providing quality education, strong values and character development
            to prepare every student for a brighter future.
          </p>

          <div className="mt-9 flex flex-wrap gap-5">
            <Link
              href="/admissions"
              className="rounded-xl bg-[#123C73] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
            >
              Apply Now
            </Link>

            <Link
              href="/about"
              className="rounded-xl border-2 border-[#123C73] px-8 py-4 font-semibold text-[#123C73] transition-all duration-300 hover:bg-[#123C73] hover:text-white"
            >
              Explore Our School
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -left-6 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border-[10px] border-[#D4AF37]/90" />

          <div className="relative h-[360px] w-full max-w-[650px] overflow-hidden rounded-[44px] shadow-2xl">
            <Image
              src="/hero-school.jpg"
              alt="EDU Family"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute -left-2 top-5 grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-[#D4AF37]"
              />
            ))}
          </div>

          <div className="absolute -bottom-7 left-10 rounded-full bg-[#123C73] px-7 py-6 text-center text-white shadow-2xl">
            <p className="text-xs font-bold text-[#D4AF37]">Building Today</p>
            <p className="mt-1 text-base font-bold leading-5">
              Leaders of
              <br />
              Tomorrow
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-6 w-full bg-[#123C73]" />
    </section>
  );
}