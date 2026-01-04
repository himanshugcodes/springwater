"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-16 min-h-[75vh] lg:min-h-[90vh]">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Natural spring water"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex items-center min-h-[75vh] lg:min-h-[90vh] max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Spring Premium <br className="hidden sm:block" />
              Drinking Water
            </h1>

            <p className="mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg text-white/90">
              Natural water with no additives or processing, created by nature
              for your body.
            </p>

            <button
              className="mt-6 sm:mt-8 w-full sm:w-auto rounded-full
              bg-gradient-to-r from-[#00B4D8] to-[#0077B6]
              px-8 py-4 text-white font-medium
              transition-all duration-300
              hover:scale-105 hover:shadow-lg"
            >
              Order Today
            </button>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/images/springtopbottle.webp"
              alt="Premium Mineral Water Bottle"
              width={420}
              height={300}
              className="object-contain sm:w-[480px] lg:w-[620px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 28.1"
          preserveAspectRatio="none"
          className="w-full h-[70px] sm:h-[90px] rotate-180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M500.2,0v23.5c-13.2,0.4-26.4,0-39.2-1.5c-22.7-2.7-43.3-8.6-65.1-12.6c-21.8-4-47.3-6.1-68.2-1.1c-12.5,2.9-21.8,8-32.5,12.3s-23.9,8-37.6,7.1c-18.3-1.1-31.1-9.7-49.1-11.3c-19.2-1.6-37.3,5.1-56.8,6.1c-19.8,1-38.4-4-56.6-7.8C65.2,8.4,32.7,5.1,0,4.9V0h500Z"
          />
        </svg>
      </div>
    </section>
  );
}
