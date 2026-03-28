import Image from "next/image";

const features = [
  {
    id: "01",
    title: "Balanced Taste & Purity",
    description:
      "Nature's perfect formula — untouched minerals and crisp clarity in every sip, straight from the source.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14"
      >
        <circle cx="32" cy="10" r="3" fill="#0ea5e9" />
        <line
          x1="32"
          y1="13"
          x2="32"
          y2="20"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="20"
          x2="54"
          y2="20"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M10 20 Q10 34 20 34 Q30 34 30 20"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          fill="#e0f2fe"
          strokeLinecap="round"
        />
        <path
          d="M34 20 Q34 34 44 34 Q54 34 54 20"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          fill="#e0f2fe"
          strokeLinecap="round"
        />
        <path
          d="M20 24 Q20 30 24 30 Q28 30 28 24 Q26 20 20 24Z"
          fill="#0ea5e9"
          opacity="0.5"
        />
        <path
          d="M44 24 Q48 20 50 26 Q48 32 44 30 Q40 28 44 24Z"
          fill="#0ea5e9"
          opacity="0.5"
        />
        <line
          x1="32"
          y1="20"
          x2="32"
          y2="50"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="50"
          x2="40"
          y2="50"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Fresh Source Of Energy",
    description:
      "Start every morning recharged. Pure spring water replenishes your body and sharpens your focus all day long.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1={32 + 16 * Math.cos((angle * Math.PI) / 180)}
            y1={22 + 16 * Math.sin((angle * Math.PI) / 180)}
            x2={32 + 22 * Math.cos((angle * Math.PI) / 180)}
            y2={22 + 22 * Math.sin((angle * Math.PI) / 180)}
            stroke="#0ea5e9"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
        <circle
          cx="32"
          cy="22"
          r="10"
          fill="#e0f2fe"
          stroke="#0ea5e9"
          strokeWidth="2.5"
        />
        <circle cx="32" cy="22" r="6" fill="#0ea5e9" opacity="0.4" />
        <path
          d="M32 36 Q26 44 26 48 Q26 54 32 54 Q38 54 38 48 Q38 44 32 36Z"
          fill="#0ea5e9"
          opacity="0.7"
        />
        <ellipse
          cx="30"
          cy="47"
          rx="2"
          ry="3"
          fill="white"
          opacity="0.4"
          transform="rotate(-20 30 47)"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Drink easily. Drink naturally.",
    description:
      "No additives, no processing — just water the way nature intended. Simple, clean, and honest to the last drop.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14"
      >
        <path
          d="M24 14 Q24 10 28 10 L36 10 Q40 10 40 14 L42 22 L42 52 Q42 56 38 56 L26 56 Q22 56 22 52 L22 22 Z"
          fill="#e0f2fe"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <clipPath id="bottleClip">
          <path d="M24 14 Q24 10 28 10 L36 10 Q40 10 40 14 L42 22 L42 52 Q42 56 38 56 L26 56 Q22 56 22 52 L22 22 Z" />
        </clipPath>
        <rect
          x="22"
          y="34"
          width="20"
          height="22"
          fill="#0ea5e9"
          opacity="0.25"
          clipPath="url(#bottleClip)"
        />
        <path
          d="M22 34 Q27 30 32 34 Q37 38 42 34"
          stroke="#0ea5e9"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M28 44 Q32 38 36 44 Q32 50 28 44Z"
          fill="#0ea5e9"
          opacity="0.5"
        />
        <rect x="27" y="6" width="10" height="5" rx="2" fill="#0ea5e9" />
      </svg>
    ),
  },
];
const Page = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{
          background:
            "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        }}
      >
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
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-black text-neutral-900 leading-tight mb-6">
            <span className="text-sky-500">About </span>Us
          </h1>
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

      {/* ── ABOUT TEXT ── */}
      <section className="py-10 md:py-15">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 text-center">
          <p className="text-neutral-600 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            At Spring Premium Water, we believe pure water is a basic right.
            Sourced from protected natural springs and bottled with
            eco-conscious care, every drop preserves what nature intended — no
            additives, no compromise. We combine modern technology with a deep
            respect for nature to deliver freshness, purity, and taste in every
            sip.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="pb-10 lg:pb-15">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div
              className="relative rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center min-h-[360px] hover:shadow-[0_8px_40px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all duration-300"
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
                  backgroundSize: "28px 28px",
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
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Image
                    src="/images/about-mission.png"
                    width={48}
                    height={48}
                    alt="Mission Icon"
                    className="opacity-90"
                  />
                </div>
                <h2 className="text-xl sm:text-3xl font-black mb-4 tracking-widest uppercase">
                  <span className="text-white/70">Our </span>
                  <span className="text-white">Mission</span>
                </h2>
                <p className="text-sky-100 text-left text-sm md:text-base leading-relaxed max-w-sm">
                  To make pure, natural spring water accessible to everyone —
                  using safe materials and modern technology to preserve
                  freshness from the source to the last sip.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="relative rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center min-h-[360px] hover:shadow-[0_8px_40px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(to bottom, #7dd3fc 0%, #0ea5e9 50%, #0369a1 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
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
                    d="M0 20 Q100 40 200 20 Q300 0 400 20 L400 40 L0 40 Z"
                    fill="rgba(255,255,255,0.06)"
                  />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Image
                    src="/images/about-vision.png"
                    width={48}
                    height={48}
                    alt="Vision Icon"
                    className="opacity-90"
                  />
                </div>
                <h2 className="text-xl sm:text-3xl font-black mb-4 tracking-widest uppercase">
                  <span className="text-white/70">Our </span>
                  <span className="text-white">Vision</span>
                </h2>
                <p className="text-sky-100 text-sm md:text-base text-left leading-relaxed max-w-sm">
                  To become the most trusted name in natural water — where every
                  bottle represents our commitment to purity, sustainability,
                  and the belief that clean water belongs to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="relative overflow-hidden py-15 px-6">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <span className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-4 py-1.5 rounded-full text-sky-500 bg-sky-100">
          Features
        </span> */}
          <h2 className="mt-2 mb-2 text-4xl font-bold text-neutral-900 leading-tight">
            Why Spring?
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-neutral-500">
            Natural water with no additives or processing, created by nature. We
            use only safe materials and modern technologies to preserve the
            freshness of water until the last sip.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="relative bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-sky-100 shadow-xl hover:shadow-sky-200 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200">
                {f.icon}
              </div>

              <h3 className="text-xl font-bold text-neutral-700 mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-sm text-neutral-500 mb-7 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
