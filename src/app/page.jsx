import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeFeatures from "../components/HomeFeatures";
import { HomeTestimonial } from "../components/HomeTestimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeFeatures />
      <HomeAbout />

      <HomeTestimonial />
      <Contact />
    </main>
  );
}
