import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="min-h-screen flex items-center justify-center ">
        <h1 className="bg-gray-100">testing</h1>
      </section>
    </main>
  );
}
