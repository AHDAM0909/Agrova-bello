import React from 'react'

import {
  ShieldCheck,
  Truck,
  Handshake,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
const reasons = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description:
      "We focus on providing carefully selected agricultural products that meet our customers' needs.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Reliable Supply",
    description:
      "We help households and businesses source agricultural products in the quantities they need.",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Customer First",
    description:
      "We make it easy for customers to ask questions, confirm availability, and request products.",
  },
  {
    id: 4,
    icon: Sprout,
    title: "Agriculture for Growth",
    description:
      "We believe in supporting agricultural growth and making farm products more accessible.",
  },
];

const WhyChooseUs = () => {
  return (
        <section className="bg-[#173F2A] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A441]">
            The AGROVA Difference
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Why Choose AGROVA?
          </h2>

          <p className="mt-4 leading-7 text-white/70">
            We are committed to making agricultural sourcing
            simpler through quality products, reliable service,
            and customer-focused solutions.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9A441]/15">
                  <Icon size={27} className="text-[#D9A441]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {reason.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-[#D9A441]">
                  AGROVA
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>

  )
}

export default WhyChooseUs