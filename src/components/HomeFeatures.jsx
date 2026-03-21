const features = [
  {
    id: "01",
    title: "Balance of taste and natural purity",
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
    title: "Your daily source of energy and freshness",
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

export default function SpringFeatures() {
  return (
    <section className="relative overflow-hidden py-15 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-4 py-1.5 rounded-full text-sky-500 bg-sky-100">
          Features
        </span>
        <h2 className="mt-2 mb-2 text-4xl font-bold text-neutral-900 leading-tight">
          Spring Premium Water
        </h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-neutral-500">
          Natural water with no additives or processing, created by nature. We
          use only safe materials and modern technologies to preserve the
          freshness of water until the last sip.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.id}
            className="relative bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-sky-100 shadow-xl hover:shadow-sky-200 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
          >
            {/* Number badge */}
            <span className="absolute top-5 right-6 text-[0.7rem] font-bold tracking-widest text-sky-200">
              {f.id}
            </span>

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
  );
}
