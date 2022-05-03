import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const { productId, reviewId } = useRouter().query;
  return (
    <div>
      <h1>
        review id {reviewId} forv product id{productId}
      </h1>
    </div>
  );
};

export default Review;
