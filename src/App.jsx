
import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import BulkOrders from "./components/BulkOrders";
import Cart from "./components/Cart";

function App() {
  // Load previously selected products
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("agrova-cart")) || [];
    } catch {
      return [];
    }
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("agrova-cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  // Increase or decrease product quantity
  const updateQuantity = (productId, change) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove a product completely
  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId)
    );
  };

  // Calculate total items
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main>
        <Hero />
        <Categories />

        <FeaturedProducts
          addToCart={addToCart}
          cartCount={cartCount}
        />

        <About />
        <WhyChooseUs />
        <BulkOrders />

        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}

export default App;
