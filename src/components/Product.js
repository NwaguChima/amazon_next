import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

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

      <p>{description}</p>

      <div>
        <Currency quantity={price} currency="NGN" />
      </div>

      {hasPrime && (
        <div>
          <img src="https://links.papareact.com/fdw" alt="" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
