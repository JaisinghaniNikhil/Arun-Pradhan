import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsappbutton";

// Loads the Jost font and stores it in a CSS variable called --font-jost
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
});

// This is what Google shows for your site (SEO)
export const metadata = {
  title: "Arun Pradhan | LIC & Health Insurance Advisor, Mumbai",
  description:
    "25+ years of honest guidance on LIC and health insurance. 6000+ families served.",
};

// This wraps EVERY page on the site
export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={jost.variable} suppressHydrationWarning>
      <body>
        <Navbar />
          {children}
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
