import { Download, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function AdmissionsContactApply() {
  return (
    <section className="bg-[#F8FAFC] py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        {/* Visit Campus */}

        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#123C73]">
            Visit Our Campus
          </h2>

          <div className="mt-5 flex items-center gap-4 text-[#D4AF37]">
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
            <span className="text-2xl">★</span>
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We warmly welcome parents and students to visit our campus,
            explore our learning environment, and meet our teachers before
            making an admission decision.
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <MapPin size={60} className="mt-1 text-[#D4AF37]" />

              <div>
                <h3 className="text-xl font-bold text-[#123C73]">
                  School Address
                </h3>

                <p className="mt-2 text-gray-600">
                  EDU Family Private High School
No. 219, Kwet Thit (2) West Street
Near Shwe Sein Aye Pagoda
Insein Township
Yangon 11011, Myanmar
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 text-[#D4AF37]" size={28} />

              <div>
                <h3 className="text-xl font-bold text-[#123C73]">
                  Office Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Monday – Sunday
                  <br />
                  8:00 AM –6:00 PM
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-[#123C73] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
          >
            Contact Us
          </Link>
        </div>

        {/* Apply Now */}

        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#123C73]">
            Apply Now
          </h2>

          <div className="mt-5 flex items-center gap-4 text-[#D4AF37]">
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
            <span className="text-2xl">★</span>
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-800">
            EDU Family currently accepts applications through a manual
            admission process.
          </p>

          <p className="mt-6 leading-8 text-gray-800">
            Parents are encouraged to visit the school campus or contact
            our admissions office to begin the enrolment process.
          </p>

          <div className="mt-10 rounded-2xl bg-[#F8FAFC] p-8">
            <h3 className="text-2xl font-bold text-[#123C73]">
              Manual Admission Process
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>• Visit the school campus</li>
              <li>• Meet our admissions staff</li>
              <li>• Collect the application form</li>
              <li>• Submit the required information</li>
              <li>• Complete the admission process</li>
            </ul>
          </div>

          <a
            href="/Brochure.pdf"
            className="mt-10 flex items-center justify-center gap-3 rounded-xl bg-[#123C73] px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#123C73]"
          >
            <Download size={22} />
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}