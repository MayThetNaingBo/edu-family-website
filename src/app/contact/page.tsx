import PageBanner from "@/src/components/common/PageBanner";
import ContactSection from "@/src/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We're Here to Help You"
      />

      <ContactSection />
    </>
  );
}