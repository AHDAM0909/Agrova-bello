import React from 'react'
import { ArrowUpRight, PackageCheck, Truck, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const BulkOrders = () => {
    const whatsappNumber = "2348084115102";

  const message =
    "Hello AGROVA, I am interested in placing a bulk order. Please share your available products, prices, and minimum order quantities.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
        <section
      id="bulk-orders"
      className="bg-[#F7F5EC] px-5 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#173F2A] px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
        >
          {/* Decorative background */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5B8C51]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#D9A441]/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Text content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                For Businesses & Wholesalers
              </p>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Need Agricultural Products in Bulk?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/75">
                Whether you run a restaurant, retail store,
                food processing company, or distribution
                business, AGROVA can help you source the
                agricultural products you need.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#D9A441] px-6 py-4 font-bold text-[#202820] transition-all hover:-translate-y-1 hover:bg-[#e8b957]"
              >
                Request a Bulk Quote
                <ArrowUpRight size={19} />
              </a>
            </div>

            {/* Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <PackageCheck
                  size={30}
                  className="text-[#D9A441]"
                />
                <h3 className="mt-5 font-bold text-white">
                  Flexible Quantities
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Discuss quantities that suit your business needs.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Truck
                  size={30}
                  className="text-[#D9A441]"
                />
                <h3 className="mt-5 font-bold text-white">
                  Supply Support
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Discuss product sourcing and delivery arrangements.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
                <MessageCircle
                  size={30}
                  className="text-[#D9A441]"
                />
                <h3 className="mt-5 font-bold text-white">
                  Easy Enquiries
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Contact our team directly to discuss your order,
                  pricing, and availability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  )
}

export default BulkOrders