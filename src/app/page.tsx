import AboutUs from "@/components/AboutUs/Index";
import Hero from "@/components/Hero";
import Inquiry from "@/components/enquiry/Index";
import Services from "@/components/ourServices";
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
