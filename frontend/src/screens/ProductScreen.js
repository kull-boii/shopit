import React from "react";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { slug } = useParams(); // to get the slug

  return (
    <div>
      <p>{slug}</p>
    </div>
  );
};

export default ProductScreen;
