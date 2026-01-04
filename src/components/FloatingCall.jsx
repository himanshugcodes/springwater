"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500); // show after 800px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-[3%] left-[2%] z-50
        flex flex-col gap-6
        transition-all duration-500
        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      {/* Call */}
      <a
        href="tel:9935470545"
        target="_blank"
        title="Call Us"
        className=" 
          ripple relative
          flex items-center justify-center
          h-12 w-12
          rounded-full
          bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white
          text-lg
          overflow-visible
        "
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=919935470545&text=Hello,"
        target="_blank"
        title="WhatsApp"
        className="
          ripple relative
          flex items-center justify-center
          h-12 w-12
          rounded-full
          bg-[#25D366] text-white
          text-2xl
          overflow-visible
        "
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
