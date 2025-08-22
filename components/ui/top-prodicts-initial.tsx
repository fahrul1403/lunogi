import { BentoGridItem } from "./bento-grid-product";
import Image from "next/image";
import { BentoGridProduct } from "./bento-grid-product";
import ProductCard from "./product-card";
import { link } from "fs";

export default function TopProducts(){

    const categories = [
        { 
          image: <Image src={'/electronics.jpg'} width={500} height={100} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Apple 2023 MacBook Pro Laptop M3 Pro chip with 11‑core CPU, 14‑core GPU', 
          description: 'Latest and greatest in tech gadgets and devices.'
        },
    ];

    const products = [
        {   key: '1',
            productImage: "/product-1.jpg",
            productName: "Apple 2023 MacBook Pro Laptop M3 Pro chip with 11‑core CPU",
            productDescription: "Macbook",
            rating: 4.7,
            amountSold: '2K',
            price: '$1,781.01',
            link:'detail/Apple-MacBook-Laptop-11‑core-14‑core' },
        {
            key: '2',
            productImage: "/product-13.jpg",
            productName: "Ice Maker Countertop, Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker",
            productDescription: "Brand: Electactic",
            rating: 4.4,
            amountSold: '2K',
            price: '$64.33',
            link:'detail/Electactic-Countertop-Efficient-Machine-Self-Cleaning'
        },
        {
            key: '3',
            productImage: "/product-14.jpg",
            productName: "BLACK+DECKER 6 Bottle Wine Fridge, Wine Cooler with Mirrored Front",
            productDescription: "BLACK+DECKER Store",
            rating: 4.6,
            amountSold: '2K',
            price: '$148.79',
            link:'detail/BLACK-DECKER-Bottle-Thermoelectric-Display'
        },
        {
            key: '4',
            productImage: "/product-15.jpg",
            productName: "Coleman Sundome Camping Tent, 2/3/4/6 Person Dome Tent with Snag-Free Poles ",
            productDescription: "Coleman Store",
            rating: 4.7,
            amountSold: '2K',
            price: '$69.55',
            link:'detail/Coleman-4-Person-Camping-Sundome-Setup'
        },
        {
            key: '5',
            productImage: "/product-16.jpg",
            productName: "JBL Charge 4 - Waterproof Portable Bluetooth Speaker - Black",
            productDescription: "JBL Store",
            rating: 4.7,
            amountSold: '2K',
            price: '$109.95',
            link:'detail/JBL-Portable-Waterproof-Wireless-Bluetooth'
        },
        {
            key: '6',
            productImage: "/product-25.jpg",
            productName: "Sports Research Daily Probiotics with Prebiotics, 60 Billion CFU - Vegan Capsules for Gut Health & Digestive Support",
            productDescription: "Sports",
            rating: 4.6,
            amountSold: '5K',
            price: '$24.95',
            link:'detail/Sports-research-daily-probiotics-with-probiotics'
        },
        {
            key: '7',
            productImage: "/product-27.jpg",
            productName: "HiLIFE Steamer for Clothes, Portable Handheld Design, 240ml Big Capacity, 700W, Strong Penetrating Steam",
            productDescription: "HILIFE Store",
            rating: 4.3,
            amountSold: '10K',
            price: '$26.99',
            link:'detail/HILIFE-steamer-for-clothes-portable-handheld-design'
        },
        {
            key: '8',
            productImage: "/product-28.jpg",
            productName: "64” Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder, Portable Tripod for iPhone",
            productDescription: "Liphisy",
            rating: 4.6,
            amountSold: '10K',
            price: '$23.99',
            link:'detail/64-tripod-for-cell-phone-camera-phone-tripod-with-remote-and-phone-holder'
        },
        {
            key: '9',
            productImage: "/product-29.jpg",
            productName: "Adidas Women's Duramo Sl 2.0 Running Shoe",
            productDescription: "Adidas",
            rating: 4.3,
            amountSold: '10K',
            price: '$55.00',
            link:'detail/adidas-womens-duramo-sl-20-running-shoe'
        },
        {
            key: '10',
            productImage: "/product-30.jpg",
            productName: "Organic Lip Scrub Vanilla - USA Made Exfoliating Lip Scrub with Natural & Organic Ingredients, Moisturizing",
            productDescription: "Beauty by Earth",
            rating: 4.3,
            amountSold: '500',
            price: '$14.99',
            link:'detail/organic-lip-scrub-vanilla-usa-made-exfoliating-lip-scrub-with-natural-organic'
        },
    ];

    return (
        <>
            <div className="flex flex-col space-y-3 p-8 rounded-3xl bg-slate-100 w-full">
                <div className="flex flex-row justify-between w-full lg:pb-4 pb-2">
                    <h3 className="text-xl lg:text-2xl text-slate-700 font-semibold">Our Top Products</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-6 w-full">
                { products.map(product => (
                    <ProductCard
                    key={product.key}
                    productImage={product.productImage}
                    productName={product.productName}
                    productDescription={product.productDescription}
                    rating={product.rating}
                    amountSold={product.amountSold}
                    price={product.price}
                    link={product.link}
                    />
                )) }
                </div>
            </div>
            
        </>
    )
}