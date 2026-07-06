
import AboutStory from "@/src/components/sections/AboutStory";
import PrincipalMessage from "@/src/components/sections/PrincipalMessage";
import PageBanner from "@/src/components/common/PageBanner";

export default function Hom() {
  return (
    <>

      <PageBanner
        title="About Us"
        subtitle="Our Story and Our commitment to every sturdent's success"
        imageUrl="/about-us.jpg"
      />

      <AboutStory />
      <PrincipalMessage />
    </>
  );
}