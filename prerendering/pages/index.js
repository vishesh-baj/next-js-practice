import Link from "next/link";
import React from "react";
const index = () => {
  return (
    <div>
      <Link href="/users">
        <a>Go to users page</a>
      </Link>
      <Link href="/posts">
        <a>Go to posts page</a>
      </Link>
    </div>
  );
};

export default index;
