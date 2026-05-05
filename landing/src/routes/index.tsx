import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PremiumHero } from "@/components/PremiumHero";
import { EditorialExperience } from "@/components/EditorialExperience";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { ImmersiveProcess } from "@/components/ImmersiveProcess";
import { ProductPreview } from "@/components/ProductPreview";
import { TrustMetrics } from "@/components/TrustMetrics";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doggie Chic Studio — Estética canina premium en Monterrey" },
      {
        name: "description",
        content:
          "Estética canina premium en Plaza 2048 Paseo de los Leones, Monterrey. Baño, corte, spa y productos especializados para consentir a tu mascota.",
      },
      { property: "og:title", content: "Doggie Chic Studio — Estética canina premium" },
      {
        property: "og:description",
        content: "Cuidado premium para perros con estilo, higiene y bienestar en Monterrey.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <SiteHeader />
      <main>
        <PremiumHero />
        <EditorialExperience />
        <ServiceShowcase />
        <ImmersiveProcess />
        <ProductPreview />
        <TrustMetrics />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
