import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-5xl font-bold text-[#123C73]">
            Contact Information
          </h2>

          <div className="mt-5 flex items-center gap-4 text-[#D4AF37]">
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
            <span className="text-2xl">★</span>
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Feel free to contact us using any of the
            methods below.
          </p>

          <div className="mt-10 space-y-7">
            <ContactItem
              icon={<Phone size={24} />}
              title="Phone"
              value="+95 9 788 777163"
            />

            <ContactItem
              icon={<Mail size={24} />}
              title="Email"
              value="edufamily2023@gmail.com"
            />

            <ContactItem
              icon={<MapPin size={24} />}
              title="Address"
              value="Insein, Yangon, Myanmar"
            />

            <ContactItem
              icon={<Clock size={24} />}
              title="Office Hours"
              value="Monday - Saturday | 8:00 AM - 4:00 PM"
            />

            <ContactItem
  icon={<FaFacebookF size={22} />}
  title="Facebook"
  value="EDU Family Private High School"
/>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-5xl font-bold text-[#123C73]">
            Send Us a Message
          </h2>

          <div className="mt-5 flex items-center gap-4 text-[#D4AF37]">
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
            <span className="text-2xl">★</span>
            <span className="h-[3px] w-20 bg-[#D4AF37]" />
          </div>

          <form className="mt-10 space-y-6">
            <input
              placeholder="Full Name"
              className="w-full rounded-xl border p-4 outline-none transition focus:border-[#123C73]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-4 outline-none transition focus:border-[#123C73]"
            />

            <input
              placeholder="Phone Number"
              className="w-full rounded-xl border p-4 outline-none transition focus:border-[#123C73]"
            />

            <input
              placeholder="Subject"
              className="w-full rounded-xl border p-4 outline-none transition focus:border-[#123C73]"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border p-4 outline-none transition focus:border-[#123C73]"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#123C73] py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-[#123C73]"
            >
              <Send size={22} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.7872830382994!2d96.0942085733036!3d16.88641401704749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1950007fc1e55%3A0x96fd97b66ece81c9!2sEDU%20Family%20Private%20High%20School!5e0!3m2!1sen!2ssg!4v1783276557173!5m2!1sen!2ssg"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5 border-b border-gray-200 pb-6 last:border-b-0">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#123C73] text-[#D4AF37]">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#123C73]">
          {title}
        </h3>

        <p className="mt-1 text-gray-600">
          {value}
        </p>
      </div>
    </div>
  );
}