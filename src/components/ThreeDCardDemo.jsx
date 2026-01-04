"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const products = [
  {
    title: "Spring Premium Water 1 Ltr",
    description: "Pure natural mineral water from protected springs.",
    image: "/images/product1.png",
  },
  {
    title: "Spring Premium Water 400ml",
    description: "Pure natural mineral water from protected springs.",
    image: "/images/product1.png",
  },
];

export function ThreeDCardDemo() {
  return (
    <div className="bg-[#edf1f1] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold text-sky-500">Our Products</p>
        <h2 className="mt-2 text-4xl font-bold text-black-900">
          Choose your water
        </h2>
        {/* Grid for 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 md:grid-cols-2">
          {products.map((product, index) => (
            <CardContainer key={index} className="inter-var w-full">
              <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                {/* Image */}
                <CardItem translateZ="100" className="w-full">
                  <img
                    src={product.image}
                    height="400"
                    width="400"
                    className="h-90 w-full rounded-xl object-contain bg-sky-200/90 group-hover/card:shadow-xl"
                    alt={product.title}
                  />
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="mt-6 text-xl flex align-center font-bold text-neutral-700 dark:text-white"
                >
                  {product.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {product.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
