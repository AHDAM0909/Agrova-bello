import React from 'react'
import { ArrowUpRight, MessageCircle,ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
// import { ArrowUpRight, ShoppingBag } from "lucide-react";
const products = [
  {
    id: 1,
    name: "Premium Maize",
    category: "Grains",
    description: "Quality maize suitable for food processing and animal feed.",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    availability: "In Stock",
    available: true,
  },
  {
    id: 2,
    name: "Quality Rice",
    category: "Grains",
    description: "Carefully sourced rice for homes, retailers, and businesses.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    availability: "In Stock",
    available: true,
  },
  {
    id: 3,
    name: "Fresh Cassava",
    category: "Root Crops",
    description: "Fresh cassava suitable for local processing and consumption.",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    availability: "Limited Stock",
    available: true,
  },
  {
    id: 4,
    name: "Fresh Vegetables",
    category: "Vegetables",
    description: "Fresh produce for households, restaurants, and retailers.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    availability: "Out of Stock",
    available: false,
  },
];

const FeaturedProducts = ({addToCart,cartCount}) => {
   const requestProduct = (product) => {
    const phoneNumber = "2348084115102";

    const message = `Hello AGROVA, I would like to request ${product.name}. Please share the price and available quantities.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="featured-products"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5B8C51]">
              From Our Farm
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#173F2A] sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
              Explore our selected farm products and contact us
              to confirm prices, quantities, and availability.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173F2A] transition-colors hover:text-[#5B8C51]"
          >
            Make a Bulk Enquiry
            <ArrowUpRight size={18} />
          </a>
          <a href="#cart" className="inline-flex items-center gap-2 rounded-xl bg-[#E8EFE3] px-4 py-3 text-sm font-bold text-[#173F2A] hover:bg-[#D9E6D2]">
            View Cart ({cartCount})
            </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
  <motion.article key={product.id}
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: 0.6,
      delay: index * 0.12,
      ease: "easeOut",
    }}
    className="group overflow-hidden rounded-2xl border border-gray-100 bg-[#F7F5EC]/40 transition-shadow duration-300 hover:shadow-xl"
  >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                    product.availability === "In Stock"
                      ? "bg-green-100 text-green-800"
                      : product.availability === "Limited Stock"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.availability}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#5B8C51]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-extrabold text-[#173F2A]">
                  {product.name}
                </h3>

                <p className="mt-2 min-h-[60px] text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>

                <button
                  type="button"
                  onClick={() => requestProduct(product)}
                  disabled={!product.available}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                    product.available
                      ? "bg-[#173F2A] text-white hover:bg-[#5B8C51]"
                      : "cursor-not-allowed bg-gray-200 text-gray-500"
                  }`}
                >
                  <MessageCircle size={17} />
                  {product.available
                    ? "Request This Product"
                    : "Currently Unavailable"}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts