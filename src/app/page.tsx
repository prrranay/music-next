import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.96]">
      <Hero/>
      <Feature/>
      <WhyUs/>
      <Testimonials/>
    </main>
  );
}
