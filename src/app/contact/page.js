import PageHeader from "../../components/PageHeader";
import ContactSection from "../../components/contact/ContactSection";
import { content } from "../../data/content";

// What Google shows for this page
export const metadata = {
  title: "Contact Arun Pradhan | LIC & Health Insurance Coordinator[Advisor], Mumbai",
    description:
    "Call, WhatsApp or visit Arun Pradhan in Ghatkopar, Mumbai to ask about LIC life insurance or Care Health Insurance.",
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
