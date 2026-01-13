import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeProducts from "../components/HomeProducts";
import { HomeTestimonial } from "../components/HomeTestimonial";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-white px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto flex items-center justify-center bg-red-100 rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
            />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Link Expired</h1>
        <p className="text-gray-500 mb-6">
          This link is no longer valid or has already been used. Please request
          a new one to continue.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <a
            href="/"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </main>
    // <main>
    //   <Hero />
    //   <HomeAbout />
    //   <ThreeDCardDemo />
    //   <HomeTestimonial />
    //   <Contact />
    // </main>
  );
}
