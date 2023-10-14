"use client"

import { Product, TCartProduct } from "@/services/interfaces";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import mockProduct from "@/services/utils";
import { mock } from "node:test";

interface IProductsContext {
    setCartProduct: Dispatch<SetStateAction<TCartProduct[] | null | undefined>>
  cartProduct: TCartProduct[] | null | undefined
  removeItem: (product: TCartProduct) => void
  rollBtn: (action: "next" | "previous") => void
  remove: () => void
  openModal: string | undefined
  setOpenModal: Dispatch<SetStateAction<string | undefined>>
  selectedImg: string[]
  setSelectedImg: Dispatch<SetStateAction<string[]>>
  thumbs: string[][]
  counter: number
  setCounter: Dispatch<SetStateAction<number>>
}

interface ProductsContextChildren {
    children: ReactNode
}

const productsContext = createContext<IProductsContext>({} as IProductsContext)

const ProductsProvider = ({children}: ProductsContextChildren) => {
    const [cartProduct, setCartProduct] = useState<TCartProduct[] | null | undefined>([])
    const [openModal, setOpenModal] = useState<string | undefined>();
  const [selectedImg, setSelectedImg] = useState([
    mockProduct.main_images[0],
    mockProduct.thumb_images[0],
  ]);
  const [counter, setCounter] = useState(0);

  const thumbs = [
    [mockProduct.main_images[0], mockProduct.thumb_images[0]],
    [mockProduct.main_images[1], mockProduct.thumb_images[1]],
    [mockProduct.main_images[2], mockProduct.thumb_images[2]],
    [mockProduct.main_images[3], mockProduct.thumb_images[3]],
  ];

    const removeItem = (product: TCartProduct) => {
        const removeProduct = cartProduct?.filter((productInCart) => product !== productInCart)
        console.log(removeProduct);
        
        setCartProduct(removeProduct)
    
      }

      const rollBtn = (action: "next" | "previous") => {
    
        const imgIndex = thumbs.findIndex((thumb) => thumb[0] === selectedImg[0]);
    
        
        if ("next") {
          if (imgIndex == 3) {
            setSelectedImg(thumbs[0]);
          } else {
            setSelectedImg(thumbs[imgIndex + 1]);
          }
        }
    
        if (imgIndex == 0) {
          setSelectedImg(thumbs[3]);
        } else {
          setSelectedImg(thumbs[imgIndex - 1]);
        }
      };

      const remove = () => {
        if (counter === 0) {
          setCounter(0);
        } else {
          setCounter(counter - 1);
        }
      };

      

    return(
        <productsContext.Provider value={{
            cartProduct,
            setCartProduct,
            removeItem,
            rollBtn,
            remove,
            openModal,
            selectedImg,
            setOpenModal,
            setSelectedImg,
            thumbs,
            counter,
            setCounter
        }}>
            {children}
        </productsContext.Provider>
    )
}

export {ProductsProvider, productsContext}