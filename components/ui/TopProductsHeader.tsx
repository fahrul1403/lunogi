    import React from 'react';
    import Image from 'next/image';
    import { StarIcon } from "lucide-react";
    import Link from 'next/link';
import StarRating from './StarRating';
import StarRatingHeader from './StarRating-header';

    interface TopProductsHeaderProps {
    title: string;
    additionalText: string;
    productImage: string;
    productName: string;
    rating: number;
    amountSold: string;
    price: string;
    link: string;
    }

    export function TopProductsHeader({ title, additionalText, productImage, productName, rating, amountSold, price, link }: TopProductsHeaderProps) {
    return (
        <div className="w-full mb-6">
            <div className="flex flex-row justify-end w-full lg:pb-4 pb-2">
                <h2 className="font-bold text-2xl lg:text-4xl w-fit p-5 text-neutral-600 md:mb-0 mb-7 text-right">{title}</h2>
            </div>
            <Link href={link} className="flex flex-col space-x-4 rounded-2xl items-center hover:scale-105 transition duration-100 p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/lunogi-wallpaper8.jpeg')] bg-cover bg-center">
                    <div className='p-2 pl-5 bg-slate-800 text-xl text-white font-semibold'>Featured product</div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-50% to-white"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center w-full justify-between mt-10">
                    <div className="flex flex-col space-y-2 w-full md:w-1/2 mb-4 md:mb-0 md:order-1">
                        <h4 className="font-bold text-2xl md:text-4xl text-slate-800 text-center md:text-right rounded-xl mb-3 md:mb-5">{productName}</h4>

                        <div className="flex flex-row justify-center md:justify-end space-x-3 h-12 md:h-14 order-3 md:order-2">
                            <div className="flex flex-row justify-center items-center h-full px-2 md:px-3 bg-white rounded-full text-lg md:text-2xl border-2 border-gray-300">
                                <p className="font-bold p-1 md:p-2">{rating}</p>
                                <div className="h-8 md:h-10 w-px bg-gray-300 mx-1"></div>
                                <div className="p-1 md:p-2 h-full flex items-center">
                                    <StarRatingHeader rating={rating} />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center bg-blue-400 h-full px-3 md:px-5 font-semibold text-xl md:text-3xl text-white rounded-full border-2 border-gray-300">
                                {price}
                            </div>
                        </div>

                    </div>
                    <div className="relative w-full md:w-5/12 order-2 md:order-3">
                        <Image 
                            src="/apple-macbook-pro-2023-topproducts.jpeg" 
                            width={1000} 
                            height={400} 
                            className="w-full rounded-2xl py-3 md:py-5 max-h-[680px] object-contain" 
                            alt={productName} 
                        />
                        <div className="absolute inset-0 pointer-events-none" style={{
                            background: 'linear-gradient(90deg, white, transparent 50%, transparent 100%, white)'
                        }}></div>
                    </div>
                </div>
            </Link>
        </div>
    );
    }