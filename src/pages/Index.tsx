import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BasementMoldTestingInfo from "@/components/landing/BasementMoldTestingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Basement mold testing Ambler | Ambler Basement Mold Lab</title>
        <meta name="description" content="Basement mold testing Ambler. Professional air quality testing, spore counting, and hidden moisture mapping for Ambler basements. Certified lab results. Call (380) 266-0944!" />
        <meta name="keywords" content="Basement mold testing Ambler, mold inspector Ambler PA, basement air quality testing Ambler, Montgomery County mold testing" />
        <link rel="canonical" href="https://ambler-mold-testing.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ambler Basement Mold Lab",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ambler",
              "addressRegion": "PA",
              "postalCode": "19002",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.1545",
              "longitude": "-75.2216"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "description": "Certified basement mold testing and indoor air quality analysis in Ambler, PA. Specialized in moisture mapping and laboratory spore identification."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Basement Mold Testing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ambler Basement Mold Lab",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mold Testing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basement Air Spore Sampling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infrared Moisture Mapping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hidden Mold Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Independent Laboratory Analysis"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Basement mold testing Ambler | Ambler Basement Mold Lab" />
        <meta property="og:description" content="Scientific basement mold testing in Ambler, PA. Certified inspectors and lab results for hidden moisture and spore counts. Call (380) 266-0944." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ambler-mold-testing.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Basement mold testing Ambler
              <span className="block text-blue-500 mt-2 text-2xl md:text-4xl">Ambler Basement Mold Lab: Precision Diagnostics</span>
            </>
          }
          subtitle="Is your basement hiding toxic spores? Our independent certified inspectors use medical-grade air sampling and infrared mapping to reveal hidden mold colonies in your Ambler home with absolute scientific certainty."
          image="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <BasementMoldTestingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
