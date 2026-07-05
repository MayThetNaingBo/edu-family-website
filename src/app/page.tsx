import Hero from "@/src/components/sections/Hero";
import Stats from "@/src/components/sections/Stats";
import HomeWhyChoose from "@/src/components/sections/HomeWhyChoose";
import StudentAchievements from "@/src/components/sections/StudentAchievements";
import HomeAcademicProgrammes from "@/src/components/sections/HomeAcademicProgrammes";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HomeWhyChoose />
      <StudentAchievements />
      <HomeAcademicProgrammes />
    </>
  );
}