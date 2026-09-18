import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import StickyIcons from "@/components/StickyIcons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export default function Home() {
  return (
    <div id="top" style={{ direction: "rtl" }}>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <Footer />
      <StickyIcons />
      <AccessibilityWidget />
    </div>
  );
}
