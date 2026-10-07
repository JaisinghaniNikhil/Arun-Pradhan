import PageHeader from "../../components/PageHeader";
import ServicesList from "../../components/ServicesList";
import ClosingCTA from "../../components/ClosingCTA";
import { content } from "../../data/content";

// What Google shows for this page
export const metadata = {
  title: "LIC & Health Insurance Plans | Arun Pradhan",
    description:
    "Explore LIC life insurance and Care Health Insurance options, with links to official product details and brochures.",
};

export default function ServicesPage() {
  const s = content.servicesPage;

  return (
    <main>
      <PageHeader
        label={s.label}
        heading={s.heading}
        accent={s.accent}
        text={s.text}
        image={s.image}
        imageAlt={s.imageAlt}
      />
      <ServicesList />
      <ClosingCTA />
    </main>
  );
}
