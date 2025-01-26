import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
