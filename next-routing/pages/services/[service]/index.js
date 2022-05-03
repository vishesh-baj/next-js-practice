import { useRouter } from "next/router";
import React from "react";

const Service = () => {
  const router = useRouter();
  const { service } = router.query;
  return <div>Service {service}</div>;
};

export default Service;
