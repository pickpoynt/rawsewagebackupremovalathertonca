import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import AthertonSewerBackupInfo from "@/components/landing/AthertonSewerBackupInfo";
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
        <title>basement sewer backup cleaning Atherton CA - Atherton Sewer Backup Cleaning Pros</title>
        <meta name="description" content="basement sewer backup cleaning Atherton CA - Professional basement sewer backup cleaning Atherton CA. Expert decontamination and restoration in San Mateo County. Call 877-792-1410 for 24/7 elite service." />
        <meta name="keywords" content="basement sewer backup cleaning Atherton CA, Atherton sewer cleanup, sewage extraction San Mateo County, basement flood remediation CA" />
        <link rel="canonical" href="https://atherton-sewer-backup-cleaning.com/" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Atherton Sewer Backup Cleaning Pros",
            "image": "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&q=80",
            "@id": "https://atherton-sewer-backup-cleaning.com/",
            "url": "https://atherton-sewer-backup-cleaning.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "91 Ashfield Rd",
              "addressLocality": "Atherton",
              "addressRegion": "CA",
              "postalCode": "94027",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.4613",
              "longitude": "-122.1977"
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
            "serviceType": "Sewer Backup Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Atherton Sewer Backup Cleaning Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Atherton, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sewer Backup Cleanup Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewage Extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basement Decontamination"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Biohazard Remediation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="basement sewer backup cleaning Atherton CA - Atherton Sewer Backup Cleaning Pros" />
        <meta property="og:description" content="basement sewer backup cleaning Atherton CA - Premium sewage backup cleanup and restoration in Atherton. Discreet and clinical-grade emergency response." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atherton-sewer-backup-cleaning.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              basement sewer <br />
              <span className="text-white drop-shadow-sm uppercase">backup cleaning Atherton CA</span>
            </>
          }
          subtitle="Atherton's premier biohazard restoration firm. We deploy hospital-grade sanitization and forensic-level moisture control to restore your luxury basement after a sewer catastrophe."
          image="https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80"
          badge="ATHERTON ELITE RESTORATION"
        />
        <Services />
        <WhyUs />
        <AthertonSewerBackupInfo />
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
