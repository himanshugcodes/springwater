import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeProducts from "../components/HomeProducts";
import { HomeTestimonial } from "../components/HomeTestimonial";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      {/* <HomeProducts /> */}
      <ThreeDCardDemo />
      <HomeTestimonial />
      <Contact />
      {/* <section className="min-h-screen flex items-center justify-center bg-gray-400 ">
        <h1 className="bg-gray-100">testing</h1>
      </section> */}
    </main>
  );
}
