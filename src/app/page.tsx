import AboutUs from "@/components/AboutUs/Index";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Inquiry from "@/components/enquiry/Index";
import Process from "@/components/process/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <AboutUs />
      <Inquiry />
    </>
  );
}
