import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import StickyIcons from "@/components/StickyIcons";

export default function Home() {
  return (
    <div style={{ direction: "rtl" }}>
      <HeroSection />
      <AboutMe />
      <Services />
      <Footer />
      <StickyIcons />
    </div>
  );
}
