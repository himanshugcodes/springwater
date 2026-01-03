const features = [
  {
    count: "01.",
    description: "Balance of taste and natural purity",
  },
  {
    count: "02.",
    description: "Your daily source of energy and freshness",
  },
  {
    count: "03.",
    description: "Drink easily. Drink naturally",
  },
];

export default function HomeAbout() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-sky-500">
                Spring Premium Water
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black-500 sm:text-5xl">
                Natural water with no additives or processing, created by nature
              </p>
              <p className="mt-6 text-lg/8 text-black-300">
                We use only safe materials and modern technologies to preserve
                the freshness of water until the last sip. Clean drinking water
                should be available to everyone. We work to make it possible.
              </p>
              <ul className="mt-10 space-y-4 divide-y-1">
                {features.map((feature) => (
                  <li key={feature.count} className="flex gap-x-4  space-y-4">
                    <span className="text-black-300 text-lg font-bold text-sky-500">
                      {feature.count}
                    </span>
                    <span className="text-black-300 text-md font-bold">
                      {feature.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/images/about-bg.jpg"
            width={400}
            height={400}
            className="w-3xl rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
