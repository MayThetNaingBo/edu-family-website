import Image from "next/image";
import PrimaryButton from "@/src/components/common/PrimaryButton";
import SectionHeading from "@/src/components/common/SectionHeading";

export default function PrincipalMessage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Our Commitment"
          subtitle="Dedicated to Every Student's Growth"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/school-team.jpg"
              alt="EDU Family school community"
              width={600}
              height={700}
              className="rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-5 left-8 rounded-xl bg-[#123C73] px-6 py-4 text-white shadow-xl">
              <p className="font-bold">EDU Family</p>
              <p className="text-sm text-gray-200">Leadership Team</p>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#123C73]">
              Our Commitment to Every Student
            </h3>

            <p className="mt-8 leading-8 text-gray-600">
              At EDU Family Private High School, we believe that every student
              deserves an inspiring, safe, and supportive learning environment
              where they can discover their strengths and achieve their full
              potential.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Our dedicated team of educators and staff work together to provide
              quality education, encourage creativity, build confidence, and
              develop strong character.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Together with our students, parents, and community, we strive to
              create a school where learning is meaningful, values are respected,
              and every learner is empowered to succeed.
            </p>

            <div className="mt-10">
              <PrimaryButton href="/admissions">Apply Now</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}