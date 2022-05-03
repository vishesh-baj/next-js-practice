import Link from "next/link";
import React from "react";
const index = () => {
  return (
    <div>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h2>

      <Link href="/">
        <a>Go Back to Home</a>
      </Link>
    </div>
  );
};

export default index;
