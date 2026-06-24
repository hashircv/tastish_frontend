import { BRAND } from "./constants";

export const homeSeo = {
  title: "Tastish | Fresh Kerala Chapathi, Appam, Pathiri, Idiyappam & Porotta",
  description:
    "Freshly cooked traditional Kerala foods from Tastish: chapathi, appam, nice pathiri, noolputtu, coin porotta, atta porotta, maida porotta, kuboos, and Kerala catering for events.",
  keywords:
    "Chapathi, Appam, Nice Pathiri, Idiyappam, Noolputtu, Porotta, Kerala Food, Fresh Chapathi, Kerala Catering",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BRAND.name,
  description: "Freshly prepared traditional Kerala food products and bulk event orders.",
  servesCuisine: "Kerala",
  telephone: BRAND.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  priceRange: "Rs",
  openingHours: "Mo-Su 06:00-21:00",
  acceptsReservations: true,
};
