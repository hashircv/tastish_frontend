import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import { OfferRibbon } from "./components/banners/OfferRibbon";
import { FloatingActionButton } from "./components/ui/FloatingActionButton";
import { Footer } from "./components/layout/Footer";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home/Home";
import { homeSeo, structuredData } from "./utils/seo";

export function App() {
  return (
    <>
      <Helmet>
        <title>{homeSeo.title}</title>
        <meta name="description" content={homeSeo.description} />
        <meta name="keywords" content={homeSeo.keywords} />
        <meta property="og:title" content={homeSeo.title} />
        <meta property="og:description" content={homeSeo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <OfferRibbon />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingActionButton />
      <MobileBottomBar />
    </>
  );
}
