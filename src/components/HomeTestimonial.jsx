"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function HomeTestimonial() {
  return (
    <>
      <div className="text-center py-16">
        <p className="text-sm font-semibold text-sky-500">Our Testimonials</p>
        <h2 className="mt-2 text-4xl font-bold text-blck-900">
          What Our Client Says
        </h2>

        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
}
const testimonials = [
  {
    quote:
      "The taste of this spring water is noticeably pure and refreshing. It feels light, clean, and keeps me hydrated throughout long working hours without any heaviness.",
    name: "Rohit Verma",
    title: "Senior Marketing Manager, Hardoi",
  },
  {
    quote:
      "As a fitness enthusiast, hydration is extremely important for me. This spring premium water has become my daily choice because of its natural taste and consistent quality.",
    name: "Ananya Sharma",
    title: "Fitness Trainer & Wellness Coach, Shahjahanpur",
  },
  {
    quote:
      "We started using this spring water for our cafe, and our customers immediately noticed the difference. The quality and clarity perfectly match a premium dining experience.",
    name: "Frisky Panda",
    title: "Cafe Owner, Lucknow",
  },
  {
    quote:
      "I appreciate that this water comes from a natural spring source. It tastes fresh, has no aftertaste, and is ideal for my family’s everyday consumption.",
    name: "Neha Gupta",
    title: "Homemaker, Noida",
  },
  {
    quote:
      "During long cycling sessions and outdoor activities, this spring water keeps me energized and well-hydrated. It’s clean, crisp, and truly premium.",
    name: "Vikram Singh",
    title: "CEO, Delhi",
  },
];
