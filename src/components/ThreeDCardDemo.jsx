"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: "01",
    name: "1 Ltr",
    img: "/images/product1.png",
  },
  {
    id: "02",
    name: "400ml",
    img: "/images/product1.png",
  },
  {
    id: "03",
    name: "250ml",
    img: "/images/product1.png",
  },
];

export function ThreeDCardDemo() {
  return (
    <div>
      {/* Product Cards */}
      <div className="max-w-2xl flex flex-col gap-3 lg:gap-6">
        {products.map((p) => (
          <Link href="/contact" key={p.id}>
            <div className="bg-white rounded-2xl px-7 py-4 lg:py-14 flex items-center justify-between border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 cursor-pointer">
              {/* Left Content */}
              <div className="flex items-center gap-4">
                {/* Image */}
                <div className="w-12 h-12 lg:w-20 lg:h-20 relative bg-gray-200 rounded-xl shadow-md">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain  p-1 lg:p-2"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  {/* <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
                    Product {p.id}
                  </span> */}
                  <h3 className="text-xl font-bold text-neutral-800">
                    {p.name}
                  </h3>
                </div>
              </div>

              {/* Arrow */}
              <div className="ml-6 shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-sky-50">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
