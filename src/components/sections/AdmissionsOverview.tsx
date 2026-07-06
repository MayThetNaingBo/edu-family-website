import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function AdmissionsOverview() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Admissions Overview
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#123C73]">
            Welcoming Students from KG to Grade 12
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
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

  <div className="flex flex-col gap-2">
    <a
      href="tel:+959788777163"
      className="text-gray-700 hover:underline"
    >
      +95 9 788 777163
    </a>

    <a
      href="tel:+959250308081"
      className="text-gray-700 hover:underline"
    >
      +95 9 250 308081
    </a>

    <a
      href="tel:+959401540564"
      className="text-gray-700 hover:underline"
    >
      +95 9 401 540564
    </a>
  </div>
</div>
            <div className="flex gap-4">
              <MessageCircle className="text-[#D4AF37]" />
              <a href="https://www.facebook.com/edufamily" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                Message us on Facebook
              </a>
            </div>

            <div className="flex gap-4">
  <MapPin size={60} className="text-[#D4AF37]" />

  <a
    href="https://maps.app.goo.gl/skekFJVBwe48aN2p9"
    rel="noopener noreferrer"
    className="text-gray-700 transition-colors hover:text-[#123C73] hover:underline"
  >
    EDU Family Private High School
No. 219, Kwet Thit (2) West Street
Near Shwe Sein Aye Pagoda
Insein Township
Yangon 11011, Myanmar
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}