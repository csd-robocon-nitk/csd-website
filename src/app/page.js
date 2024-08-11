import AboutSection from "@/components/home/about";
import CoverSection from "@/components/home/cover";
import UpdatesSection from "@/components/home/updates";
import Intro from "@/components/home/intro";
import FocusArea from "@/components/home/focusArea";

export default async function HomePage() {
  return (
    <div className="w-full">
      <CoverSection />
      {/* <AboutSection /> */}
      {/* <UpdatesSection /> */}
      <Intro />
      <FocusArea />
    </div>
  );
}
