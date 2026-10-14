export const dynamic = "force-static";

const baseUrl = "https://arunpradhanlicofindia.com";

export default function sitemap() {
  const pages = ["", "/services", "/about", "/resources", "/contact"];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}