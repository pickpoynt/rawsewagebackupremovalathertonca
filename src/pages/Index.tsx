import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import HydroJettingInfo from "@/components/landing/HydroJettingInfo";
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
        <title>Hydro jetting services Tacoma WA | Tacoma Hydro Jetting Experts: Heavy-Duty Sewer & Drain Specialists</title>
        <meta name="description" content="Expert hydro jetting services Tacoma WA. Professional high-pressure sewer line cleaning, main line scouring, and root removal. Licensed Tacoma plumbers serving Pierce County. Call (877) 792-1410 today!" />
        <meta name="keywords" content="Hydro jetting services Tacoma WA, sewer jetting Tacoma, drain cleaning Tacoma WA, high pressure pipe cleaning Pierce County, main line scouring Tacoma" />
        <link rel="canonical" href="https://tacoma-hydro-jetting.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tacoma Hydro Jetting Experts",
            "image": "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tacoma",
              "addressRegion": "WA",
              "postalCode": "98402",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.2529",
              "longitude": "-122.4443"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Tacoma, Washington"
            },
            "priceRange": "$$$",
            "description": "Professional hydro jetting and high-pressure sewer cleaning services in Tacoma, WA. We specialize in clearing tough blockages and maintaining healthy drain systems."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hydro Jetting Sewer Cleaning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Tacoma Hydro Jetting Experts",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Tacoma, Washington"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sewer & Drain Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Sewer Line Hydro Jetting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Root Intrusion Removal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Grease Trap Jetting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Sewer Inspection"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Hydro jetting services Tacoma WA | Tacoma Hydro Jetting Experts" />
        <meta property="og:description" content="Expert high-pressure sewer cleaning in Tacoma, WA. Professional drain scouring and root removal. Call (877) 792-1410 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tacoma-hydro-jetting.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013919164-94427b3fa437?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Hydro jetting services Tacoma WA
              <span className="block text-blue-400 mt-2">Tacoma's Heavy-Duty Sewer & Drain Specialists</span>
            </>
          }
          subtitle="Don't let stubborn clogs slow down your Tacoma home or business. Our industrial-strength hydro jetting technology blasts through roots, grease, and years of buildup, restoring your pipes to like-new flow in minutes. Fast, clean, and 100% effective."
          image="https://images.unsplash.com/photo-1621905252507-b354bc2addcc?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <HydroJettingInfo />
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

