import { React, useState } from "react";
import Cart from "../components/Cart";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Hero />
      <Cart />
    </div>
  );
}
