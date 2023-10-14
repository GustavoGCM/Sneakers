"use client";

import { productsContext } from "@/providers/ProductsContext.tsx/productsContext";
import { Flowbite, Modal } from "flowbite-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useContext } from "react";

interface ImagesModalProps {
  selectedImg: string[];
  setSelectedImg: Dispatch<SetStateAction<string[]>>;
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
  thumbs: string[][];
}

const ImagesModal = ({
  selectedImg,
  setSelectedImg,
  openModal,
  setOpenModal,
  thumbs,
}: ImagesModalProps) => {
  const { rollBtn } = useContext(productsContext);

  return (
    <Flowbite
      theme={{
        theme: {
          modal: {
            content: {
              base: "relative h-full w-fit p-4 md:h-auto outline-none mt-[60px]",
              inner:
                "relative rounded-lg flex flex-col max-h-[90vh] bg-transparent border-none outline-none",
            },
          },
        },
      }}
    >
      <Modal
        dismissible
        show={openModal === "open"}
        onClose={() => setOpenModal(undefined)}
      >
        <button
          className="absolute right-0 top-[-5%] outline-none"
          onClick={() => setOpenModal(undefined)}
        >
          <Image
            src="/assets/icon-close.svg"
            alt="close"
            width={15}
            height={15}
          ></Image>
        </button>
        <div className="max-w-[440px] w-full 2xl:max-w-[800px] flex flex-col gap-6 ">
          <div className="w-full relative">
            <figure className="w-full">
              <Image
                src={selectedImg[0]}
                alt="Imagem do produto"
                width={700}
                height={800}
                className="w-full rounded-lg cursor-pointer"
              ></Image>
              <div className="absolute inset-y-0 right-0 md:right-[-24px] flex items-center">
                <button
                  className="cicle-button"
                  onClick={() => rollBtn("next")}
                >
                  <Image
                    src="/assets/icon-next.svg"
                    alt="Imagem do produto"
                    width={13}
                    height={18}
                    className="absolute ml-1"
                  ></Image>
                </button>
              </div>
              <div className="absolute inset-y-0 md:left-[-24px] flex items-center">
                <button
                  className="cicle-button"
                  onClick={() => rollBtn("previous")}
                >
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
          </div>
          <div className="grid col-auto grid-flow-col gap-4">
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
                    className={`${styleState} absolute w-full h-full hover:bg-white/60 top-0 rounded-lg cursor-pointer hover:border-2 hover:border-orange-500 duration-200`}
                  ></div>
                </figure>
              );
            })}
          </div>
        </div>
      </Modal>
    </Flowbite>
  );
};

export default ImagesModal;
