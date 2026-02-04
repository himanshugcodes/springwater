import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
// import HomeProducts from "../components/HomeProducts";
import { HomeTestimonial } from "../components/HomeTestimonial";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <ThreeDCardDemo />
      <HomeTestimonial />
      <Contact />
    </main>
  );
}
