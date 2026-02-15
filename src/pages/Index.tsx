import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import NorthOlmstedPlumbingInfo from "@/components/landing/NorthOlmstedPlumbingInfo";
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
        <title>plumber north olmsted ohio North Olmsted OH</title>
        <meta name="description" content="plumber north olmsted ohio North Olmsted OH - Precision plumbing repair, leak detection & infrastructure maintenance. Reliable residential and commercial services for North Olmsted, Ohio. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber north olmsted ohio, North Olmsted plumber, plumbing repair North Olmsted, emergency plumber North Olmsted, Cuyahoga County plumbing, North Olmsted leak detection" />
        <link rel="canonical" href="https://north-olmsted-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "North Olmsted Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Olmsted",
              "addressRegion": "OH",
              "postalCode": "44070",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.4156",
              "longitude": "-81.9235"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "North Olmsted, OH"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in North Olmsted, Ohio. We specialize in technical diagnostics, infrastructure restoration, and master-licensed care for Cuyahoga County property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Residential Plumbing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "North Olmsted Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "North Olmsted, Ohio"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "North Olmsted Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Acoustic Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Line Infrastructure Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Moisture Tracking Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber north olmsted ohio North Olmsted OH - North Olmsted Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in North Olmsted, Ohio. Technical restoration and infrastructure maintenance for Cuyahoga County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://north-olmsted-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber north olmsted ohio North Olmsted OH
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">North Olmsted Plumbing Pros</span>
            </>
          }
          subtitle="North Olmsted's trusted authority for resilient home infrastructure. We provide precision diagnostics, technical restoration, and master-licensed support for Northeast Ohio property owners. Cuyahoga Engineering Pride."
          image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1625904838708-5400269f96ff?auto=format&fit=crop&q=80&w=2000"
          badge="NORTH OLMSTED MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <NorthOlmstedPlumbingInfo />
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
