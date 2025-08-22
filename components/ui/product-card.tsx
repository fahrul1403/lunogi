import React from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, ShoppingBasketIcon, StarIcon } from "lucide-react";
import Link from 'next/link';

interface ProductInfo {
    productImage: string;
    productName: string;
    productDescription: string;
    rating: number;
    amountSold: string;
    price: string;
    link: string;
}

const ProductCard = ({ link, productImage, productName, productDescription, rating, amountSold, price }: ProductInfo) => {
    
  return (
    
    <Link href={link} className="flex flex-col rounded-2xl items-center bg-white hover:scale-105 transition duration-100 relative h-full">
      <Image src={productImage} width={250} height={100} className="w-full rounded-2xl py-5 max-h-[170px] object-contain" alt={productName} />
      <div className="flex flex-col bg-white lg:px-5 py-3 rounded-2xl px-5 w-full h-full">
        <div className="flex flex-col flex-grow mb-10">
          <h4 className="font-semibold text-base text-slate-800 line-clamp-3 mb-3">{productName}</h4>
          <p className="text-sm">{productDescription}</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-3 items-start lg:items-center justify-between w-full mt-auto">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row space-x-3 items-center">
              <div className="flex flex-row space-x-2 items-center">
                <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <p className="text-sm">{rating}</p>
              </div>
              <p> | </p>
              <div className="bg-slate-200 rounded-md px-3 py-1">
                <p className="text-xs">{amountSold} Sold</p>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="font-semibold text-xl text-primarytext2">{price}</p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-full p-3 cursor-pointer shadow-lg text-white lg:block hidden absolute bottom-3 right-3">
            <ShoppingBasketIcon className="size-5 text-white" />
          </div>
          <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-full p-3 mt-3 cursor-pointer shadow-lg text-white w-full flex lg:hidden flex-row items-center space-x-5">
            <ShoppingBasketIcon className="size-5 text-white" />
            <p className='text-sm'>Buy Now</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;