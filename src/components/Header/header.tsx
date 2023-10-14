"use client";

import { Navbar, Dropdown, Flowbite, Button } from "flowbite-react";
import Image from "next/image";
import { useContext, useState } from "react";
import CartProduct from "../CartProduct/cartProduct";
import { productsContext } from "@/providers/ProductsContext.tsx/productsContext";

interface HeaderProps {
  items?: number;
}

const Header = ({ items }: HeaderProps) => {
  const { cartProduct, setCartProduct } = useContext(productsContext);

  return (
    <Flowbite
      theme={{
        theme: {
          dropdown: {
            floating: {
              animation: "transition-opacity ease-in-out duration-300",
              base: "z-10 rounded-lg drop-shadow-2xl focus:outline-none md:w-full max-w-sm ",
              item: {
                base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white ",
              },
            },
          },
          navbar: {
            link: {
              base: "flex md:p-0 h-full md:h-[102px] py-auto items-center md:mt-1 hover:border-orange-500",
              active: {
                off: "md:hover:border-b-4 duration-150 delay-150 ease-in-out  text-gray-700 dark:border-gray-700 dark:text-gray-400 ",
              },
            },
            root: {
              base: "bg-white px-2 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
            },
            collapse: {
              base: "w-full md:block md:w-auto",
              list: "flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium  md:items-center gap-4 md:gap-0",
            },
          },
          button: {
            color: {
              yellow: "yellow-to-orange",
            },
          },
        },
      }}
    >
      <Navbar
        fluid={false}
        className="border-b-2 fixed inset-x-auto top-0 w-full z-20 "
      >
        <Navbar.Toggle className="my-5" />
        <Navbar.Brand as={"a"} href="#" className="my-5">
          <Image
            alt="Logo Sneakers"
            src={"/assets/logo.svg"}
            width={138}
            height={28}
          ></Image>
        </Navbar.Brand>
        <div className="flex items-center gap-8 md:gap-16 my-5 order-last">
          <Dropdown
            placement="bottom"
            inline
            label
            dismissOnClick={false}
            renderTrigger={() => (
              <div className="relative ">
                <Image
                  alt="Cart"
                  src={"/assets/icon-cart.svg"}
                  width={22}
                  height={22}
                  className="max-h-[22px] h-fit cursor-pointer relative "
                ></Image>
                <span className="cursor-pointer animate-pulse absolute w-8 h-8 text-sm flex items-center justify-center bg-orange-500 rounded-full top-[-25px] right-[-25px] text-white font-bold">
                  {cartProduct ? cartProduct.length : 0}
                </span>
              </div>
            )}
          >
            <Dropdown.Header className="min-w-[300px] font-bold">
              Cart
            </Dropdown.Header>
            {cartProduct?.length! > 0  ? (
              <>
                {cartProduct!.map((product) => (
                  <Dropdown.Item
                    as="li"
                    className="cursor-default"
                    key={product.name}
                  >
                    <CartProduct product={product} />
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item as="li" className="cursor-default">
                  <Button
                    color="yellow"
                    className="w-full text-lg duration-200 cursor-pointer"
                  >
                    Checkout
                  </Button>
                </Dropdown.Item>
              </>
            ) : (
              <Dropdown.Item className="min-h-[150px] flex items-center justify-center cursor-default">
                Your cart is empty
              </Dropdown.Item>
            )}
          </Dropdown>
          <Navbar.Brand className="">
            <Image
              alt="Avatar"
              src={"/assets/image-avatar.png"}
              width={60}
              height={32}
              className="border-2 hover:border-orange-500 rounded-full duration-200 cursor-pointer"
            ></Image>
          </Navbar.Brand>
        </div>
        <Navbar.Collapse className="grow ml-11 md:h-[102px] pb-5 md:pb-0">
          <Navbar.Link href="#" className="h-full">
            <p>Collections</p>
          </Navbar.Link>
          <Navbar.Link href="#">Men</Navbar.Link>
          <Navbar.Link href="#">Women</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export default Header;
