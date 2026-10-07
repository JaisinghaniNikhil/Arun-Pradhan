import PageHeader from "../../components/PageHeader";
import ResourcesLibrary from "../../components/ResourcesLibrary";
import ClosingCTA from "../../components/ClosingCTA";

export const metadata = {
  title: "Insurance Guides & FAQs | Arun Pradhan",
  description:
    "Explore clear guides to life insurance, family health cover and retirement planning, plus answers to common policy questions.",
};

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        label="Resources"
        heading="A few things to check"
        accent="before you decide"
        text="These guides explain common policy terms and questions. Use them as a starting point, then check the latest insurer documents for full details."
        image="/images/resources-hero.webp"
        imageAlt="An elderly couple having tea together on a balcony"
      />
      <ResourcesLibrary />
      <ClosingCTA />
    </main>
  );
}
