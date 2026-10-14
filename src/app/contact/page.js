import PageHeader from "../../components/PageHeader";
import ContactSection from "../../components/contact/ContactSection";
import { content } from "../../data/content";

export const metadata = {
  title: "Contact Arun Pradhan – LIC Agent in Ghatkopar",
  description:
    "Talk to Arun Pradhan, LIC and Care Health advisor in Ghatkopar, Mumbai. Call, WhatsApp or send an enquiry for free policy guidance.",
};

export default function ContactPage() {
  const h = content.contact.header;

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
      <ContactSection />
    </main>
  );
}
