import WhyArun from "@/components/WhyArun";
import Hero from "../components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Mentoring from "@/components/Mentoring";
import Resources from "@/components/Resources";
import Achievements from "@/components/Achievements";
import ClosingCTA from "@/components/ClosingCTA";
import Insurers from "@/components/Insurers";
import Testimonials from "@/components/Testimonials";
import LicSpotlight from "@/components/LicSpotlight";


export const metadata = {
  title: "LIC Agent in Ghatkopar, Mumbai | Arun Pradhan – 11x MDRT",
  description:
    "Arun Pradhan, 11x MDRT LIC advisor in Ghatkopar with 25+ years of experience. Trusted by 6000+ families for life, health and retirement planning.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Arun Pradhan – LIC Advisor",
  url: "https://arunpradhanlicofindia.com/",
  image: "https://arunpradhanlicofindia.com//arun-hero.webp",
  description:
    "11x MDRT LIC and Care Health Insurance advisor in Ghatkopar, Mumbai with 25+ years of experience.",
  telephone: "+91-9819488447",
  address: {
    "@type": "PostalAddress",
    streetAddress: "LIC Br. 928, Metropol Building, 1st Floor, Next to Jhunjhunwala College, Ghatkopar (West), Mumbai – 400 086.",
    addressLocality: "Ghatkopar West",
    addressRegion: "Maharashtra",
    postalCode: "400086",
    addressCountry: "IN",
  },
  areaServed: "Mumbai",
  founder: {
    "@type": "Person",
    name: "Arun Pradhan",
    jobTitle: "LIC Advisor",
  },
};


export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <ServicesPreview/>
      <Insurers/>
      <LicSpotlight/>
      <WhyArun/>
      <Mentoring/>
      <Resources/>
      <Achievements/>
      <ClosingCTA/>
    </main>
  );
}
