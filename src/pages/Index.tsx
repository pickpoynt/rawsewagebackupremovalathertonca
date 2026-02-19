import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import LakewoodHydroJettingInfo from "@/components/landing/LakewoodHydroJettingInfo";
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
        <title>professional hydro jetting lakewood wa | Lakewood Hydro Jetting Pros</title>
        <meta name="description" content="professional hydro jetting lakewood wa - Master-grade sewer and drain cleaning in Lakewood, WA. High-pressure jetting for stubborn blockages. Call (877) 792-1410." />
        <meta name="keywords" content="professional hydro jetting lakewood wa, Lakewood drain cleaning, sewer line scouring Pierce County, root removal WA" />
        <link rel="canonical" href="https://lakewood-hydrojetting.com/" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Lakewood Hydro Jetting Pros",
            "image": "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80",
            "@id": "https://lakewood-hydrojetting.com/",
            "url": "https://lakewood-hydrojetting.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lakewood Dr SW",
              "addressLocality": "Lakewood",
              "addressRegion": "WA",
              "postalCode": "98499",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.1718",
              "longitude": "-122.5185"
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
            "serviceType": "Hydro Jetting Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Lakewood Hydro Jetting Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lakewood, WA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hydro Jetting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewer Line Hydro Jetting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Line Scouring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Root Intrusion Removal"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="professional hydro jetting lakewood wa | Lakewood Hydro Jetting Pros" />
        <meta property="og:description" content="professional hydro jetting lakewood wa - Master-grade sewer and drain cleaning in Lakewood, WA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lakewood-hydrojetting.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              professional hydro jetting <br />
              <span className="text-white drop-shadow-sm">lakewood wa</span>
            </>
          }
          subtitle="Lakewood's elite high-pressure drainage specialists. We deploy master-grade 4000 PSI hydro jetting technology to restore sewer flow and eliminate root intrusion throughout Pierce County."
          image="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80"
          badge="PIERCE COUNTY JETTING SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <LakewoodHydroJettingInfo />
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
