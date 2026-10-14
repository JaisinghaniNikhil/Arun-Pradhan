import PageHeader from "../../components/PageHeader";
import ResourcesLibrary from "../../components/ResourcesLibrary";
import ClosingCTA from "../../components/ClosingCTA";

export const metadata = {
  title: "LIC Plans Guide: How to Choose the Right Policy",
  description:
    "Simple guides to help you understand LIC plans, compare term and endowment policies and choose the right cover for your family.",
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
