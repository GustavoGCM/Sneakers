"use client";

import { productsContext } from "@/providers/ProductsContext.tsx/productsContext";
import { Product } from "@/services/interfaces";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useContext, useState } from "react";

interface DescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: DescriptionProps) => {
  const { cartProduct, setCartProduct, remove, setCounter, counter } =
    useContext(productsContext);

  const discount = product.discount ? product.discount : 100;

  return (
    <section className="grid grid-flow-row max-w-lg w-fit gap-6 h-fit self-center">
      <h3 className="company-title">SNEAKER COMPANY</h3>
      <h1 className="announce-title">{product.name}</h1>
      <p className="annouce-description">{product.description}</p>

      <div className="grid gap-4 grid-flow-col md:grid-rows-2 md:max-w-[220px]">
        <div className="flex gap-4">
          <h2 className="annouce-price">
            ${(product.value * discount) / 100}.00
          </h2>
          <span className="discount-tag">
            {discount == 1 ? "0" : discount}%
          </span>
        </div>
        <span className="announce-oldprice text-end md:text-start">
          ${product.value}.00
        </span>
      </div>

      <footer className="flex flex-col md:flex-row gap-4 max-h-16">
        <div className="grid grid-cols-3 w-full md:w-fit items-center">
          <button className="counter-btn rounded-l-lg" onClick={() => remove()}>
            <Image
              src={"/assets/icon-minus.svg"}
              className="w-7"
              alt="menos"
              width={30}
              height={30}
            ></Image>
          </button>
          <p className="counter">{counter}</p>
          <button
            className="counter-btn rounded-r-lg"
            onClick={() => setCounter(counter + 1)}
          >
            <Image
              className="w-7"
              src={"/assets/icon-plus.svg"}
              alt="mais"
              width={30}
              height={30}
            ></Image>
          </button>
        </div>
        <Button
          theme={{
            color: {
              yellow: "yellow-to-orange",
            },
          }}
          color="yellow"
          className="button-orange"
          onClick={() =>
            setCartProduct([
              ...(cartProduct ?? []),
              {
                ...product,
                quantity: counter,
              },
            ])
          }
        >
          <Image
            src="/assets/icon-cart-btn.svg"
            className="mr-4"
            alt="cart"
            width={22}
            height={20}
          ></Image>
          Add To Cart
        </Button>
      </footer>
    </section>
  );
};

export default ProductDescription;
