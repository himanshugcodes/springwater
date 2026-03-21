import { ThreeDCardDemo } from "./ThreeDCardDemo";

export default function HomeAbout() {
  return (
    <div
      className="overflow-hidden py-15 sm:py-20"
      style={{
        background:
          "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #bae6fd 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 lg:grid-cols-2 items-center">
          <img
            alt="Product screenshot"
            src="/images/about-product.webp"
            width={400}
            height={400}
            className="w-3xl rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
          <ThreeDCardDemo />
        </div>
      </div>
    </div>
  );
}
