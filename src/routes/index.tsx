import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Credibility } from "@/components/site/Credibility";
import { Approach } from "@/components/site/Approach";
import { Pillars } from "@/components/site/Pillars";
import { FeaturedProject } from "@/components/site/FeaturedProject";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const title = "Dr. Mettu — PharmD, Fitness Mentor & Photographer";
const description =
  "Personal portfolio of Dr. Mettu, PharmD: clinical pharmaceutical care, fitness and bodybuilding coaching, diet planning, and creative photography.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <Approach />
        <Pillars />
        <FeaturedProject />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
