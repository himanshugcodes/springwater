import { ThreeDCardDemo } from "./ThreeDCardDemo";
const products = [
  {
    title: "Water Set",
    image: "/images/product1.png",
    description: "Duis et aliquam orci. Vivamus augue quam, ...",
    price: "$9.00 – $19.99",
  },
  {
    title: "Lemon + Mineral",
    image: "/images/product-2.png",
    description: "Duis et aliquam orci. Vivamus augue quam, ...",
    oldPrice: "$7.89",
    price: "$6.99",
    sale: true,
  },
];

export default function HomeProducts() {
  return (
    <section className="bg-[#edf1f1] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Heading */}
        <p className="text-sm font-semibold text-sky-500">Our Products</p>
        <h2 className="mt-2 text-4xl font-bold text-blue-900">
          Choose your water
        </h2>

        {/* Products Grid (ONLY 2 columns) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <ThreeDCardDemo />
            // <div
            //   key={index}
            //   className="relative rounded-3xl bg-white px-8 py-10 shadow-lg"
            // >

            //   {/* Sale badge */}
            //   {product.sale && (
            //     <span className="absolute right-6 top-6 rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-white">
            //       SALE!
            //     </span>
            //   )}

            //   {/* Image */}
            //   <img
            //     src={product.image}
            //     alt={product.title}
            //     className="mx-auto h-90 object-contain"
            //   />

            //   {/* Title */}
            //   <h3 className="mt-8 text-xl font-semibold text-blue-900">
            //     {product.title}
            //   </h3>
            // </div>
          ))}
        </div>

        {/* All products button */}
        <div className="mt-16">
          <button className="rounded-full bg-blue-900 px-10 py-3 text-sm font-semibold text-white hover:bg-blue-800">
            all products
          </button>
        </div>
      </div>
    </section>
  );
}
