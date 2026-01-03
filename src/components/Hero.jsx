"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-20">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Natural spring water"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Spring Premium <br /> Drinking Water
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/90 sm:text-lg">
              Natural water with no additives or processing, created by nature
              for your body.
            </p>

            <button
              className="mt-8 rounded-full
  bg-gradient-to-r from-[#00B4D8] to-[#0077B6]
  px-8 py-4
  text-white font-medium
  transition-all duration-300
  hover:scale-105
  hover:shadow-lg hover:bg-red-700"
            >
              Order Today
            </button>
          </motion.div>

          {/* Right Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative  lg:flex justify-center"
          >
            <Image
              src="/images/springtopbottle.png"
              alt="Premium Mineral Water Bottle"
              width={620}
              height={300}
              className="object-contain"
            />

            {/* Decorative Leaves */}
            {/* <Image
              src="/images/leaf01.png"
              alt="Leaf"
              width={100}
              height={100}
              className="absolute left-35 top-32"
            />

            <Image
              src="/images/leaf02.png"
              alt="Leaf"
              width={100}
              height={100}
              className="absolute right-35 bottom-40"
            /> */}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 28.1"
          preserveAspectRatio="none"
          className="w-full h-[90px] rotate-180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="
        M500.2,0
        v23.5
        c-13.2,0.4-26.4,0-39.2-1.5
        c-22.7-2.7-43.3-8.6-65.1-12.6
        c-21.8-4-47.3-6.1-68.2-1.1
        c-12.5,2.9-21.8,8-32.5,12.3
        s-23.9,8-37.6,7.1
        c-18.3-1.1-31.1-9.7-49.1-11.3
        c-19.2-1.6-37.3,5.1-56.8,6.1
        c-19.8,1-38.4-4-56.6-7.8
        C65.2,8.4,32.7,5.1,0,4.9
        V0
        h500
        Z
      "
          />
        </svg>
      </div>
    </section>
  );
}
