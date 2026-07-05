import PageBanner from "@/src/components/common/PageBanner";
import AdmissionsOverview from "@/src/components/sections/AdmissionsOverview";
import AdmissionProcess from "@/src/components/sections/AdmissionProcess";
import AdmissionsContactApply from "@/src/components/sections/AdmissionsContactApply";

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner
        title="Admissions"
        subtitle="Join the EDU Family for the 2026–2027 Academic Year"
      />

      <AdmissionsOverview />
      <AdmissionProcess />
      <AdmissionsContactApply />
    </>
  );
}