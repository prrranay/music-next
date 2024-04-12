import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import UpComing from "@/components/UpComing";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <Hero/>
      <Feature/>
      <WhyUs/>
      <Testimonials/>
      <UpComing/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
