"use client";

import Image from "next/image";
import ImagesModal from "../ImagesModal/imagesModal";
import { useContext } from "react";
import { productsContext } from "@/providers/ProductsContext.tsx/productsContext";

const ProductImages = () => {
  const {
    selectedImg,
    rollBtn,
    setSelectedImg,
    setOpenModal,
    thumbs,
  } = useContext(productsContext);

  return (
    <section className="md:max-w-[400px] flex flex-col gap-4">
      <ImagesModal />
      <figure className="relative w-screen ml-[-1rem] md:w-full md:ml-0 mt-[-24px]">
        <Image
          src={selectedImg[0]}
          alt="Imagem do produto"
          onClick={() => setOpenModal("open")}
          width={400}
          height={400}
          className="w-full md:rounded-lg cursor-pointer"
        ></Image>
        <div className="absolute inset-y-0 right-3 flex items-center md:hidden">
          <button className="cicle-button" onClick={() => rollBtn("next")}>
            <Image
              src="/assets/icon-next.svg"
              alt="Imagem do produto"
              width={13}
              height={18}
              className="absolute ml-1"
            ></Image>
          </button>
        </div>
        <div className="absolute inset-y-0 left-3 flex items-center md:hidden">
          <button className="cicle-button" onClick={() => rollBtn("previous")}>
            <Image
              src="/assets/icon-previous.svg"
              alt="Imagem do produto"
              width={12}
              height={18}
              className="absolute mr-1"
            ></Image>
          </button>
        </div>
      </figure>
      <div className="md:grid col-auto grid-flow-col gap-4 hidden">
        {thumbs.map((thumb, i) => {
          let styleState = "off";
          if (selectedImg[1] == thumb[1]) {
            styleState = "on";
          }
          return (
            <figure key={i + 1} className="relative">
              <Image
                src={thumb[1]}
                alt="Imagem do produto"
                width={60}
                height={70}
                className="rounded-lg w-full"
              ></Image>
              <div
                onClick={() => setSelectedImg(thumb)}
                className={`${styleState} absolute w-full h-full hover:bg-white/60 top-0 rounded-lg cursor-pointer border-2 hover:border-orange-500 duration-200`}
              ></div>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
