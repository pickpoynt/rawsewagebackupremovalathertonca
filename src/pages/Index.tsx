import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import EugeneDrainCleaningInfo from "@/components/landing/EugeneDrainCleaningInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>drain cleaning eugene - Eugene Drain Cleaning Pros</title>
        <meta name="description" content="drain cleaning eugene - High-tech professional drain cleaning eugene. Expert plumbers clearing blockages in Eugene, OR. Call 877-792-1410 for 24/7 service." />
        <meta name="keywords" content="drain cleaning eugene, Eugene plumber, drain clearing Lane County, sewer service OR, root removal Eugene" />
        <link rel="canonical" href="https://eugene-draincleaning-pros.com/" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Eugene Drain Cleaning Pros",
            "image": "/1.jpeg",
            "@id": "https://eugene-draincleaning-pros.com/",
            "url": "https://eugene-draincleaning-pros.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1010 Willamette St",
              "addressLocality": "Eugene",
              "addressRegion": "OR",
              "postalCode": "97401",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "44.0521",
              "longitude": "-123.0868"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": []
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Drain Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Eugene Drain Cleaning Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Eugene, OR"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Drain Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Line Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kitchen Sink Unclogging"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Root Removal Service"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="drain cleaning eugene - Eugene Drain Cleaning Pros" />
        <meta property="og:description" content="drain cleaning eugene - Expert professional drain cleaning eugene. High-tech solutions for local homeowners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eugene-draincleaning-pros.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              drain cleaning <br />
              <span className="text-white drop-shadow-sm">eugene</span>
            </>
          }
          subtitle="Eugene's elite technical drainage specialists. We deploy precision high-torque cleaning technology to restore drain flow and eliminate root intrusion throughout Lane County's unique landscapes."
          image="/1.jpeg"
          overlayImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80"
          badge="LANE COUNTY DRAINAGE SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <EugeneDrainCleaningInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
