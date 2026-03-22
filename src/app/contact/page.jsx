import React from "react";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <>
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{
          background:
            "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        }}
      >
        {/* Decorative water drop blobs */}
        <div
          className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-16 w-64 h-64 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
          }}
        />

        {/* Decorative wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z"
              fill="white"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-black text-neutral-900 leading-tight mb-6">
            <span className="text-sky-500"> Contact </span>Us
          </h1>

          {/* Divider with drop icon */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-sky-200" />
            <svg
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-6"
            >
              <path
                d="M12 2 Q4 12 4 18 Q4 26 12 26 Q20 26 20 18 Q20 12 12 2Z"
                fill="#0ea5e9"
                opacity="0.7"
              />
              <ellipse
                cx="9"
                cy="17"
                rx="2"
                ry="3"
                fill="white"
                opacity="0.4"
                transform="rotate(-20 9 17)"
              />
            </svg>
            <div className="h-px w-16 bg-sky-200" />
          </div>
        </div>
      </section>

      <Contact />
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112855.03924784278!2d79.76467412180301!3d27.879871040729924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fbcd7421e411d%3A0x52d38f42aa04eb79!2sShahjahanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1767520705752!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </>
  );
};

export default page;
