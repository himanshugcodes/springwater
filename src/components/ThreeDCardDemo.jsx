"use client";

import Link from "next/link";
import React from "react";

const products = [
  {
    id: "01",
    name: "Spring Premium Water 1 Ltr",
    description: "Pure natural mineral water from protected springs.",
  },
  {
    id: "02",
    name: "Spring Premium Water 400ml",
    description: "Pure natural mineral water from protected springs.",
  },
  {
    id: "03",
    name: "Spring Premium Water 250ml",
    description: "Pure natural mineral water from protected springs.",
  },
];

export function ThreeDCardDemo() {
  return (
    <div>
      {/* Header */}
      <div className="">
        <span
          className="inline-block text-xs font-bold tracking-[0.1em] uppercase mb-1 px-4 py-1.5 rounded-full"
          style={{
            color: "#0ea5e9",
            background: "rgba(14,165,233,0.1)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Our Products
        </span>
        <h2 className="mt-2 mb-6 text-4xl font-bold text-neutral-900 leading-tight">
          Choose your water
        </h2>
      </div>

      {/* Product Cards */}
      <div className="max-w-2xl flex flex-col gap-6">
        {products.map((p) => (
          <Link href="/contact">
            <div
              key={p.id}
              className="bg-white rounded-2xl px-7 py-6 flex items-center justify-between border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
                  {p.id}
                </span>
                <h3 className="text-xl font-bold text-neutral-800">{p.name}</h3>
                <p className="text-sm text-neutral-400">{p.description}</p>
              </div>

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
    // <div className="py-1">
    //   <div className="mx-auto max-w-7xl px-6 text-left">
    //     <span
    //       className="inline-block text-xs font-bold tracking-[0.1em] uppercase mb-2 px-4 py-1.5 rounded-full"
    //       style={{
    //         color: "#0ea5e9",
    //         background: "rgba(14,165,233,0.1)",
    //         fontFamily: "'DM Sans', sans-serif",
    //       }}
    //     >
    //       Our Products
    //     </span>
    //     {/* <p className="text-sm font-semibold text-sky-500">Our Products</p> */}
    //     <h2 className="mt-2 mb-6 text-4xl font-bold text-black-900">
    //       Choose your water
    //     </h2>
    //     {/* Grid for 2 cards */}
    //     <div className="grid grid-cols-1 lg:grid-cols-1 w-full gap-4 md:grid-cols-2">
    //       {products.map((product, index) => (
    //         <CardContainer key={index} className="inter-var w-full">
    //           <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 px-6 py-10 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
    //             {/* Image */}

    //             {/* Title */}
    //             <CardItem
    //               translateZ="50"
    //               className="mt-0 text-xl flex align-center font-bold text-neutral-700 dark:text-white"
    //             >
    //               {product.title}
    //             </CardItem>

    //             {/* Description */}
    //             <CardItem
    //               as="p"
    //               translateZ="60"
    //               className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
    //             >
    //               {product.description}
    //             </CardItem>
    //           </CardBody>
    //         </CardContainer>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
