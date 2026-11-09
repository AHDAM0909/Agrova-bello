import React from 'react'
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
} from "lucide-react";
const Cart = ({cart , updateQuantity,removeFromCart}) => {
  const totalItems = cart.reduce((total, product) => total + product.quantity,0)
    const sendOrderToWhatsApp = () => {
    const phoneNumber = "2348084115102";

    const orderDetails = cart
      .map(
        (product) =>
          `${product.name} - Quantity: ${product.quantity}`
      )
      .join("\n");
        const message = `Hello AGROVA, I would like to request a quotation for these products:\n\n${orderDetails}\n\nPlease confirm the prices and availability.`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };
  return (
     <section id="cart" className="bg-[#F7F5EC] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5B8C51]">
            Your Selection
          </p>
           <h2 className="mt-3 text-3xl font-extrabold text-[#173F2A] sm:text-4xl">
            Shopping Cart
          </h2>

          <p className="mt-2 text-gray-600">
            Review your selected products before requesting a quote.
          </p>
        </div>
         {cart.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center">
            <ShoppingBag
              size={42}
              className="mx-auto text-[#5B8C51]"
            />

            <h3 className="mt-4 text-xl font-bold text-[#173F2A]">
              Your cart is empty
            </h3>
             <p className="mt-2 text-sm text-gray-500">
              Browse our products and add items you are interested in.
            </p>

            <a
              href="#featured-products"
              className="mt-6 inline-block rounded-xl bg-[#173F2A] px-6 py-3 font-bold text-white hover:bg-[#5B8C51]"
            >
              Explore Products
            </a>
          </div>
          ) : (
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-bold text-[#173F2A]">
                Selected Products
              </h3>

              <span className="rounded-full bg-[#E8EFE3] px-3 py-1 text-sm font-bold text-[#173F2A]">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            </div>
            <div className="space-y-5">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-full rounded-xl object-cover sm:w-28"
                  />
                   <div className="flex-1">
                    <h4 className="font-bold text-[#173F2A]">
                      {product.name}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                     <p className="mt-2 text-xs font-semibold text-[#5B8C51]">
                      Price confirmed after enquiry
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:justify-start">
                    <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, -1)
                        }
                        aria-label={`Decrease ${product.name} quantity`}
                        className="text-[#173F2A]"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="min-w-5 text-center font-bold">
                        {product.quantity}
                      </span>
                       <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, 1)
                        }
                        aria-label={`Increase ${product.name} quantity`}
                        className="text-[#173F2A]"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                     <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Remove ${product.name} from cart`}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={19} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-xl bg-[#F7F5EC] p-5">
              <div className="flex justify-between gap-4">
                <span className="font-bold text-[#173F2A]">
                  Total quantity
                </span>

                <span className="font-extrabold text-[#173F2A]">
                  {totalItems} items
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Product prices and delivery costs will be confirmed
                by AGROVA after your enquiry.
              </p>

              <button
                type="button"
                onClick={sendOrderToWhatsApp}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#173F2A] px-5 py-4 font-bold text-white transition-colors hover:bg-[#5B8C51]"
              >
                <MessageCircle size={19} />
                Request Quote on WhatsApp
              </button>
            </div>
          </div>
  )
}
</div>
</section>
  )
}
export default Cart