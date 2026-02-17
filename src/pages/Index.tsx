import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ConcreteFloorRepairInfo from "@/components/landing/ConcreteFloorRepairInfo";
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
        <title>Concrete floor water leak repair The Village OK</title>
        <meta name="description" content="Concrete floor water leak repair The Village OK - Expert repair for slab and foundation water leaks through concrete floors in The Village, OK. Structural-grade solutions. Call (877) 792-1410." />
        <meta name="keywords" content="Concrete floor water leak repair The Village OK, The Village Oklahoma slab repair, concrete foundation leak The Village, basement floor leak repair OKC" />
        <link rel="canonical" href="https://concrete-floor-water-leak-repair-the-village.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Concrete Floor Leak Repair The Village Pros",
            "image": "https://images.unsplash.com/photo-1590060411636-f78a73a9856f?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2304 W Britton Rd",
              "addressLocality": "The Village",
              "addressRegion": "OK",
              "postalCode": "73120",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.5709",
              "longitude": "-97.5559"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "The Village, OK"
            },
            "priceRange": "$$$",
            "description": "Specialized concrete floor water leak repair and foundation plumbing services in The Village, Oklahoma. Utilizing high-pressure injection and structural sealing."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Concrete Floor Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Concrete Floor Leak Repair The Village Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "The Village, Oklahoma"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "The Village Concrete Repair Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Concrete Floor Sealing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Slab Leak Hydraulic Injection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Foundation Water Management"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Concrete floor water leak repair The Village OK - Concrete Floor Leak Repair The Village Pros" />
        <meta property="og:description" content="Expert concrete floor and foundation water leak repair in The Village, OK. Rapid structural solutions to protect your home's integrity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://concrete-floor-water-leak-repair-the-village.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1590060411636-f78a73a9856f?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Concrete floor water leak repair The Village OK
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Concrete Floor Leak Repair The Village Pros</span>
            </>
          }
          subtitle="The Village's specialist in concrete foundation and floor water leak repair. We stop intrusion at the source with structural-grade injections and industrial sealants. Protecting Village homes for years."
          image="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          badge="THE VILLAGE CONCRETE REPAIR PROS"
        />
        <Services />
        <WhyUs />
        <ConcreteFloorRepairInfo />
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
