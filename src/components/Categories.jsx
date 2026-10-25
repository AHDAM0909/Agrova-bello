import React from 'react'
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Maize",
    description: "Quality grains",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Rice",
    description: "Locally sourced grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  },
  {
  id: 3,
  name: "Cassava",
  description: "Fresh root crops",
  image:
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
},
  {
    id: 4,
    name: "Vegetables",
    description: "Fresh farm produce",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Poultry",
    description: "Poultry products",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Eggs",
    description: "Fresh farm eggs",
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80",
  },
];
const Categories = () => {
  return (
     <section
      id="products"
      className="bg-[#F7F5EC] py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5B8C51]">
              Explore Our Farm
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#173F2A]">
              Our Product Categories
            </h2>

            <p className="mt-3 max-w-xl text-gray-600 leading-relaxed">
              Discover our range of agricultural products,
              from quality crops to poultry supplies.
            </p>
          </div>
          <a
            href="#featured-products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173F2A] hover:text-[#5B8C51] transition-colors"
          >
            View All Products
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#featured-products"
              className="group bg-white rounded-2xl overflow-hidden border border-green-900/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
            {/* Category image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Category details */}
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="font-bold text-[#173F2A]">
                    {category.name}
                  </h3>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-[#5B8C51] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>

                <p className="mt-1 text-xs sm:text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Categories