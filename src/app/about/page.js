import PageHeader from "../../components/PageHeader";
import AboutStory from "../../components/about/AboutStory";
import AboutMentoring from "../../components/about/AboutMentoring";
import ClosingCTA from "../../components/ClosingCTA";
import { content } from "../../data/content";
import AboutGallery from "@/components/about/AboutGallery";

// What Google shows for this page
export const metadata = {
    title: "About Arun Pradhan | LIC and Care Health Advisor, Mumbai",
  description:
    "Meet Arun Pradhan, a Mumbai insurance Advisor associated with LIC and Care Health Insurance, and learn how he began his career.",
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
