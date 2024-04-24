// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Slider from "@/app/slider";


export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Slider />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <PopularClients />
      <ContactForm />
      <Footer />
    </>
  );
}
