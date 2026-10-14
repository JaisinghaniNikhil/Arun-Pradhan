import PageHeader from "../../components/PageHeader";
import ServicesList from "../../components/ServicesList";
import ClosingCTA from "../../components/ClosingCTA";
import { content } from "../../data/content";

export const metadata = {
  title: "LIC Plans in Ghatkopar | Term, Child, Pension & Health",
  description:
    "Explore every LIC plan, from term and child plans to pension and whole life, plus Care Health Insurance, with personal guidance from Arun Pradhan.",
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
