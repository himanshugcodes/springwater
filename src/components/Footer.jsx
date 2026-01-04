import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaYoutube,
} from "react-icons/fa";
import FloatingCall from "./FloatingCall";
import TwakTo from "./TwakTo";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-grey-400 to-sky-700 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="images/spring-logo.png" // replace with your logo
            alt="Spring Premium Water"
            className="h-12"
          />
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-md text-white font-bold">
          We use only safe materials and modern technologies to preserve the
          freshness of water until the last sip. Clean drinking water should be
          available to everyone. We work to make it possible.
        </p>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-4">
          {[<FaTwitter />, <FaFacebookF />, <FaInstagram />, <FaYoutube />].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-500 transition hover:scale-110 hover:bg-stone-900"
              >
                {Icon}
              </a>
            )
          )}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-sky-500  text-bold py-4 text-center text-sm text-white-200">
        All Rights Reserved - 2026. Designed By{" "}
        <a href="#" className="text-black-300 hover:underline">
          Web by Himanshu
        </a>
      </div>
      {/* Scroll To Top */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-blue-900 shadow-lg transition hover:bg-cyan-300"
      >
        <FaArrowUp />
      </button> */}
      <FloatingCall />
      <TwakTo />
    </footer>
  );
}
