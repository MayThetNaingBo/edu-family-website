import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/src/components/common/SectionHeading";

const galleryImages = [
  "/achievement-small-1.jpg",
  "/achievement-small-2.jpg",
  "/achievement-small-3.jpg",
];

export default function FeaturedAchievement() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Student Achievements"
          subtitle="Celebrating Excellence Beyond the Classroom"
        />

        <div className="grid overflow-hidden rounded-[32px] bg-[#123C73] shadow-2xl lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/achievement-main.jpg"
              alt="Featured student achievement"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-10 text-white lg:p-14">
            <span className="mb-5 w-fit rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-bold text-[#123C73]">
              Featured Achievement
            </span>

            <h3 className="text-4xl font-bold leading-tight">
              Outstanding Student Achievement
            </h3>

            <p className="mt-6 leading-8 text-gray-200">
              EDU Family proudly celebrates one of our students&apos;
              outstanding achievements, reflecting dedication, discipline, and
              academic excellence.
            </p>

            <Link
              href="/achievements"
              className="mt-8 inline-flex w-fit rounded-xl bg-white px-7 py-4 font-semibold text-[#123C73] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37]"
            >
              Read Full Story
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="relative h-64 overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt={`Achievement photo ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}