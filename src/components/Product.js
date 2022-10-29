import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);

  return (
    <div>
      <p>{category}</p>

      <Image src={image} width={200} height={200} objectFit="contain" />

      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
    </div>
  );
};

export default Product;
