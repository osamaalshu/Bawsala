import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Objectives from "@/components/Objectives";
import Journey from "@/components/Journey";
import Program from "@/components/Program";
import Stats from "@/components/Stats";
import GraduationVideo from "@/components/GraduationVideo";
import Mentors from "@/components/Mentors";
import Partners from "@/components/Partners";
import Eligibility from "@/components/Eligibility";
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
        <Vision />
        <Objectives />
        <Journey />
        <Program />
        <Stats />
        <GraduationVideo />
        <Mentors />
        <Partners />
        <Eligibility />
        <Apply />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
