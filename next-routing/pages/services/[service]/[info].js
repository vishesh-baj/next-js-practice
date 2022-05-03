import { useRouter } from "next/router";
import React from "react";
const Info = () => {
  const router = useRouter();
  const { info } = router.query;
  return <div>Info {info}</div>;
};

export default Info;
