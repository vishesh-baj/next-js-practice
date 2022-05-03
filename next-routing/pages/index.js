import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placed the order");
    router.push("/products");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/docs">
        <a>Go to docs</a>
      </Link>
      <Link href="/products">Go to Products</Link>

      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
