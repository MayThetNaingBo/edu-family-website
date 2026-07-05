import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function AdmissionsOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Admissions Overview
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#123C73]">
            Welcoming Students from KG to Grade 12
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            EDU Family Private High School currently supports admissions through
            a manual process. Parents can contact the school, visit the campus,
            collect the application form, and submit the required documents
            directly to the admissions office.
          </p>
        </div>

        <div className="rounded-3xl bg-[#F8FAFC] p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#123C73]">
            Contact Admissions
          </h3>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <Phone className="text-[#D4AF37]" />
              <p className="text-gray-700">+95 9 788 777163</p>
            </div>

            <div className="flex gap-4">
              <MessageCircle className="text-[#D4AF37]" />
              <p className="text-gray-700">Message us on Facebook</p>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-[#D4AF37]" />
              <p className="text-gray-700">
                Insein, Yangon, Myanmar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}