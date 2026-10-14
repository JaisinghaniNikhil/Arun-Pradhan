import PageHeader from "../../components/PageHeader";
import AboutStory from "../../components/about/AboutStory";
import AboutMentoring from "../../components/about/AboutMentoring";
import ClosingCTA from "../../components/ClosingCTA";
import { content } from "../../data/content";
import AboutGallery from "@/components/about/AboutGallery";

export const metadata = {
  title: "Arun Pradhan – 11x MDRT LIC Advisor in Mumbai",
  description:
    "Meet Arun Pradhan, an 11-time MDRT qualifier with 25+ years in LIC. See his journey, achievements and how he guides families and new advisors.",
};

export default function AboutPage() {
  const h = content.about.header;

  return (
    <main>
      <PageHeader 
        label={h.label} 
        heading={h.heading} 
        accent={h.accent} 
        text={h.text}
        image={h.image}
        imageAlt={h.imageAlt}
      />
      <AboutStory />
      <AboutGallery/>
      <AboutMentoring />
      <ClosingCTA />
    </main>
  );
}
