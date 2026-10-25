import React from 'react'
import { motion } from "motion/react";
import {
  ArrowUpRight, ArrowRight, Leaf, Truck, ShieldCheck, } from "lucide-react";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[650px] lg:min-h-[720px] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85')",
        }}
      />
       {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#102C1D]/95 via-[#173F2A]/75 to-[#173F2A]/20" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Small heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-7"
          >
            <Leaf size={16} className="text-[#D9A441]" />
            <span className="text-white text-xs sm:text-sm font-medium">
              Fresh Produce • Quality Livestock • Trusted Supply
            </span>
          </motion.div>
           {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
          >
            Fresh From Our Farm.
            <span className="block text-[#D9A441]">
              Ready for Your Business.
            </span>
          </motion.h1>
            {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl"
          >
            Agrova connects you directly with quality crops and
            livestock. We help individuals, retailers, restaurants,
            and businesses source fresh agricultural products.
          </motion.p>
              {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 bg-[#D9A441] text-[#173F2A] px-7 py-4 rounded-full font-bold hover:bg-[#E8BA60] transition-colors"
            >
              Explore Our Products
              <ArrowUpRight size={20} />
            </a>

            <a
              href="#bulk-orders"
              className="inline-flex items-center justify-center gap-3 border border-white/50 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Partner With Our Farm
              <ArrowRight size={19} />
            </a>
          </motion.div>
           {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-5"
          >
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <ShieldCheck size={20} className="text-[#D9A441]" />
              Quality Focused
            </div>

            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Truck size={20} className="text-[#D9A441]" />
              Bulk Supply Enquiries
            </div>

            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Leaf size={20} className="text-[#D9A441]" />
              Direct Farm Contact
            </div>
          </motion.div>
        </div>
      </div>
        {/* Decorative floating card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden xl:flex absolute bottom-12 right-12 z-20 items-center gap-3 bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-xl"
      >
        <div className="bg-[#E6F1E7] p-3 rounded-full">
          <Leaf className="text-[#173F2A]" size={28} />
        </div>

        <div>
          <p className="text-[#173F2A] font-bold">
            Farm Direct
          </p>
          <p className="text-sm text-gray-600">
            Crops & Livestock Supply
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero