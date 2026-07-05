import PageBanner from "@/src/components/common/PageBanner";
import AcademicProgrammes from "@/src/components/sections/AcademicProgrammes";
import SubjectsOffered from "@/src/components/sections/SubjectsOffered";
import TeachingMethodology from "@/src/components/sections/TeachingMethodology";
import StudentLife from "@/src/components/sections/StudentLife";

export default function AcademicsPage() {
  return (
    <>
      <PageBanner
        title="Academics"
        subtitle="Inspiring Excellence Through Quality Education"
      />

      <AcademicProgrammes />
      <SubjectsOffered />
      <TeachingMethodology />
      <StudentLife />   
    </>
  );
}