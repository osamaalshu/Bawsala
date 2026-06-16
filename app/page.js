import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBawsala from "@/components/WhyBawsala";
import Journey from "@/components/Journey";
import Program from "@/components/Program";
import Stats from "@/components/Stats";
import Mentors from "@/components/Mentors";
import Partners from "@/components/Partners";
import Eligibility from "@/components/Eligibility";
import Vision from "@/components/Vision";
import Apply from "@/components/Apply";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyBawsala />
        <Journey />
        <Program />
        <Stats />
        <Mentors />
        <Partners />
        <Eligibility />
        <Vision />
        <Apply />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
