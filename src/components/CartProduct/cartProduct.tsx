import { productsContext } from "@/providers/ProductsContext.tsx/productsContext";
import { TCartProduct } from "@/services/interfaces";
import Image from "next/image";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa"

interface CartProductProps {
  product: TCartProduct;
}

const CartProduct = ({ product }: CartProductProps) => {
  const { removeItem } = useContext(productsContext);

  const value =
    (product.value * (product.discount ? product.discount : 100)) / 100;

  return (
    <div className="flex gap-4 items-center justify-between w-full">
      <Image
        src={product.thumb_images[0]}
        alt="Imagem do produto"
        width={70}
        height={70}
        className="rounded"
      ></Image>
      <div className="flex flex-col gap-3 text-gray-600 text-sm shrink ml-[-5%]">
        <h2>{product.name}</h2>
        <p className="text-start flex gap-3">
          ${value},00 x {product.quantity}{" "}
          <p className="font-bold">${value * product.quantity},00</p>
        </p>
      </div>
    
      <FaTrash className="cursor-pointer fill-gray-400 hover:fill-orange-500 duration-200"  onClick={() => removeItem(product)} />
    </div>
  );
};

export default CartProduct;
