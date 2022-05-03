import { useRouter } from "next/router";
import React from "react";

const ProductDetail = () => {
  // hook returns the router object
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
};

export default ProductDetail;
