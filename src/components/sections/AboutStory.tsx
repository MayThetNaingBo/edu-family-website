import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative">
          <Image
            src="/about-school.jpg"
            alt="EDU Family Campus"
            width={700}
            height={700}
            className="rounded-3xl shadow-2xl object-cover"
          />

          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[#123C73] px-8 py-6 text-white shadow-xl">
            <h3 className="text-3xl font-bold text-[#D4AF37]">5+</h3>
            <p className="mt-1 text-sm">Years of <p>Teaching Experience</p> </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            OUR STORY
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#123C73]">
            Building Future Leaders Through
            <span className="text-[#D4AF37]"> Quality Education</span>
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            EDU Family Private High School is dedicated to providing students
            with an excellent education in a supportive and inspiring learning
            environment. We believe every student has unique potential and
            deserves the opportunity to grow academically, socially, and
            personally.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#123C73]">
                Our Mission
              </h3>

              <p className="leading-7 text-gray-600">
                To provide high-quality education that nurtures confident,
                responsible and lifelong learners.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#123C73]">
                Our Vision
              </h3>

              <p className="leading-7 text-gray-600">
                To become one of Myanmar's leading private schools recognised
                for academic excellence and character development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}