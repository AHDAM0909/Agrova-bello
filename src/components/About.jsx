import React from 'react'
import { ArrowUpRight, CheckCircle2, Leaf, Truck, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
const benefits = [
  {
    id: 1,
    title: "Quality Products",
    description: "Carefully selected agricultural products you can rely on.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Reliable Supply",
    description: "Dependable supply for households, retailers, and businesses.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Trusted Service",
    description: "Friendly support to help you request the products you need.",
    icon: CheckCircle2,
  },
];
const About = () => {
  return (
     <section
      id="about"
      className="overflow-hidden bg-[#F7F5EC] py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Farm image */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
              alt="Green agricultural farmland"
              loading="lazy"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 shadow-lg sm:bottom-8 sm:left-8 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EFE3]">
                <Leaf className="text-[#173F2A]" size={23} />
              </div>
              <div>
                <p className="font-extrabold text-[#173F2A]">
                  AGROVA
                </p>
                <p className="text-sm text-gray-500">
                  Growing Quality. Delivering Trust.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About content */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5B8C51]">
            About AGROVA
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#173F2A] sm:text-4xl lg:text-5xl">
            Growing Better Agriculture, Together.
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            At AGROVA, we connect customers and businesses with
            agricultural products they can depend on. From quality
            crops to livestock and poultry products, our goal is to
            make sourcing farm produce simpler and more reliable.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Whether you are buying for your home, shop, restaurant,
            or business, we are here to help you find the products
            you need and discuss the right quantities for your order.
          </p>

          <div className="mt-8 space-y-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.id} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EFE3]">
                    <Icon size={23} className="text-[#173F2A]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#173F2A]">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#173F2A] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#5B8C51]"
          >
            Learn More About Us
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About