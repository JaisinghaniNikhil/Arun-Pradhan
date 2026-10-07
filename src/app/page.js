import WhyArun from "@/components/WhyArun";
import Hero from "../components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Mentoring from "@/components/Mentoring";
import Resources from "@/components/Resources";
import Achievements from "@/components/Achievements";
import ClosingCTA from "@/components/ClosingCTA";
import Insurers from "@/components/Insurers";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview/>
      <Insurers/>
      <WhyArun/>
      <Mentoring/>
      <Resources/>
      <Achievements/>
      <ClosingCTA/>
    </main>
  );
}
