const pressItems = [
  {
    id: "01",
    category: "Press Release",
    date: "March 2026",
    title: "Spring Premium Water Launches Across 5 New Cities in UP",
    excerpt:
      "Spring Premium Water announces its largest expansion to date, bringing pure natural spring water to 50 new cities with eco-conscious packaging.",
    source: "Business Standard",
  },
  {
    id: "02",
    category: "Feature",
    date: "February 2026",
    title: "How Spring Water is Redefining the Packaged Water Industry",
    excerpt:
      "An in-depth look at how Spring Premium Water's no-additives promise is winning over health-conscious consumers across urban India.",
    source: "Economic Times",
  },
  {
    id: "03",
    category: "Award",
    date: "January 2026",
    title: "Spring Premium Water Wins Best Natural Water Brand 2026",
    excerpt:
      "Recognised at the National FMCG Excellence Awards for outstanding quality, sustainability initiatives, and consumer trust.",
    source: "FMCG Excellence Awards",
  },
];

const stats = [
  { value: "50+", label: "Cities Served" },
  { value: "2M+", label: "Bottles Sold" },
  { value: "100%", label: "Natural Source" },
  { value: "15+", label: "Media Features" },
];

// const logos = [
//   "Business Standard",
//   "Economic Times",
//   "Times of India",
//   "Hindustan Times",
//   "NDTV",
//   "Forbes India",
// ];

export default function MediaSection() {
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
            <span className="text-sky-500"> Media & </span>Press
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
        {/* Blobs */}
        {/* <div
          className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
          }}
        /> */}

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full text-sky-500 bg-sky-100">
              Media & Press
            </span>
            <h2 className="mt-2 mb-2 text-4xl font-bold text-neutral-900 leading-tight">
              Spring in the Spotlight
            </h2>
            <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              From national newspapers to industry awards — here's what the
              world is saying about Spring Premium Water.
            </p>
          </div>

          {/* Stats bar */}
          {/* <div className="bg-white rounded-2xl border border-sky-100 shadow-sm px-6 py-8 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center"
              >
                <span className="text-3xl md:text-4xl font-black text-sky-500 leading-none mb-1">
                  {s.value}
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div> */}

          {/* Press Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pressItems.map((item, i) => (
              <div
                key={item.id}
                className={`relative rounded-3xl overflow-hidden flex flex-col ${
                  i === 0 ? "md:col-span-1" : ""
                }`}
              >
                {i === 0 ? (
                  /* Featured card — dark gradient */
                  <div
                    className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between min-h-[320px] hover:shadow-[0_8px_40px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(to bottom, #38bdf8 0%, #0369a1 60%, #0c4a6e 100%)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                      <svg
                        viewBox="0 0 400 40"
                        fill="none"
                        className="w-full"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 20 Q100 0 200 20 Q300 40 400 20 L400 40 L0 40 Z"
                          fill="rgba(255,255,255,0.06)"
                        />
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white tracking-widest uppercase">
                          {item.category}
                        </span>
                        <span className="text-xs text-sky-200">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white leading-snug mb-4">
                        {item.title}
                      </h3>
                      <p className="text-sky-100 text-sm leading-relaxed mb-6">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                        <span className="text-xs font-semibold text-sky-200">
                          {item.source}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Regular white card */
                  <div className="bg-white rounded-3xl p-7 border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-sky-500 tracking-widest uppercase">
                        {item.category}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800 leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span className="text-xs font-semibold text-sky-500">
                        {item.source}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Press contact */}
          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-400 mb-3">
              Media enquiries? We'd love to connect.
            </p>
            <a
              href="mailto:info@springwater.in"
              className="inline-block text-sm font-bold text-sky-500 border border-sky-200 px-6 py-2.5 rounded-full hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-200"
            >
              Contact Press Team →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
