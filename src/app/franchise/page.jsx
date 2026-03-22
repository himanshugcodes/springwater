const benefits = [
  {
    id: "01",
    title: "Established Brand",
    description:
      "Leverage the trust and recognition of Spring Premium Water — a name customers already know and love.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M24 4L28.5 16.5H42L31.5 24.5L35.5 37L24 29.5L12.5 37L16.5 24.5L6 16.5H19.5L24 4Z"
          fill="#0ea5e9"
          opacity="0.2"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Low Investment",
    description:
      "Start your franchise with a low upfront cost and see returns quickly with our proven distribution model.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="#0ea5e9"
          strokeWidth="2"
          fill="#0ea5e9"
          opacity="0.1"
        />
        <path
          d="M24 14v4M24 30v4M18 20h9a3 3 0 010 6h-6a3 3 0 000 6h9"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Full Support",
    description:
      "From training to marketing, our team stands behind you every step of the way to ensure your success.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M24 6C16 6 10 12 10 18c0 8 14 26 14 26s14-18 14-26c0-6-6-12-14-12Z"
          fill="#0ea5e9"
          opacity="0.15"
          stroke="#0ea5e9"
          strokeWidth="2"
        />
        <circle cx="24" cy="18" r="4" fill="#0ea5e9" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Exclusive Territory",
    description:
      "Get dedicated distribution rights in your area — no competition from other Spring franchise partners.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="6"
          fill="#0ea5e9"
          opacity="0.1"
          stroke="#0ea5e9"
          strokeWidth="2"
        />
        <path
          d="M16 24h16M24 16v16"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", label: "Apply Online" },
  { step: "02", label: "Meet Our Team" },
  { step: "03", label: "Sign Agreement" },
  { step: "04", label: "Launch & Grow" },
];

export default function FranchiseSection() {
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
            <span className="text-sky-500"> Franchise </span>
            Opportunity
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
      <section className="relative overflow-hidden py-20 px-6">
        {/* Decorative blobs */}
        {/* <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
          }}
        /> */}

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full text-sky-500 bg-sky-100">
              Franchise Opportunity
            </span>
            <h2 className="mt-2 mb-2 text-4xl font-bold text-neutral-900 leading-tight">
              Grow with Spring Water
            </h2>
            <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Join our growing network of franchise partners across the country.
              Bring pure, natural water to your community — and build a business
              you're proud of.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center mb-16">
            {/* Left: Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-bold text-neutral-800 mb-1">
                    {b.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: CTA card */}
            <div
              className="relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-[420px]"
              style={{
                background:
                  "linear-gradient(to bottom, #38bdf8 0%, #0369a1 60%, #0c4a6e 100%)",
              }}
            >
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Wave */}
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                  viewBox="0 0 400 50"
                  fill="none"
                  className="w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 25 Q100 5 200 25 Q300 45 400 25 L400 50 L0 50 Z"
                    fill="rgba(255,255,255,0.06)"
                  />
                </svg>
              </div>

              <div className="relative z-10 text-center  items-center md:pt-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1 rounded-full bg-white/15 text-white">
                  Limited Spots Available
                </span>
                <h3 className="text-4xl font-black text-white leading-snug mb-4">
                  Ready to own your Spring franchise?
                </h3>
                <p className="text-sky-100 text-sm leading-relaxed mb-8 ">
                  We're expanding across India. Be part of a movement that
                  delivers clean, <br />
                  natural water to every doorstep — while building a thriving
                  business.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-sky-600 font-bold text-sm px-7 py-3 rounded-full hover:bg-sky-50 transition-colors duration-200"
                >
                  Apply for Franchise →
                </a>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white rounded-3xl border border-sky-100 shadow-sm px-8 py-10">
            <p className="text-center text-xs font-bold tracking-widest uppercase text-sky-400 mb-8">
              How It Works
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div
                  key={s.step}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[60%] w-full h-px bg-sky-100" />
                  )}
                  <div className="w-10 h-10 rounded-full bg-sky-500 text-white text-sm font-black flex items-center justify-center mb-3 z-10">
                    {s.step}
                  </div>
                  <p className="text-sm font-semibold text-neutral-700">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
