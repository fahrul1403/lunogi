"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import ProductCard from "@/components/ui/product-card";
import CategoryItem from "@/components/ui/category-item";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Bak() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const categories = [
    { 
      image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
      title: 'Electronics', 
      description: 'Latest and greatest in tech gadgets and devices.'
    },
    // { 
    //   image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
    //   title: 'Software', 
    //   description: 'Cutting-edge software solutions for all your needs.'
    // },
    // { 
    //   image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
    //   title: 'Books', 
    //   description: 'Explore a vast collection of books across genres.'
    // },
    { 
      image: <Image src={'/arts.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
      title: 'Arts', 
      description: 'Discover beautiful art pieces and supplies.'
    },
    { 
      image: <Image src={'/watch.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
      title: 'Watch', 
      description: 'Stylish watches to complement any look.'
    },
    // { 
    //   image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
    //   title: 'Sports', 
    //   description: 'Gear up with the best sports equipment and apparel.'
    // },
    // { 
    //   image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
    //   title: 'Hobbies', 
    //   description: 'Find everything for your favorite hobbies and crafts.'
    // },
    // { 
    //   image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
    //   title: 'Games', 
    //   description: 'Top-rated video games and gaming accessories.'
    // },
    // { 
    //   image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
    //   title: 'Sports', 
    //   description: 'Get active with premium sports gear and outfits.'
    // },
    { 
      image: <Image src={'/jewelries.jpg'} width={1000} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
      title: 'Jewelry', 
      description: 'Elegant and stylish jewelry for every occasion.'
    },
    { 
      image: <Image src={'/furniture.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
      title: 'Furniture', 
      description: 'Comfortable and modern furniture for your home.'
    },
  ];

  const products = [
    { key: '1', productImage: "/product-1.jpg", productName: "Apple 2023 MacBook Pro Laptop M3 Pro chip with 11‑core CPU", productDescription: "Macbook", rating: 4.7, amountSold: '2K', price: '$1,781.01' },
  ];

  return (
    <>
      <Link href={'/'} className="cursor-pointer">
        <nav className="px-5 lg:px-12 pt-2 pb-3 lg:pb-4 bg-white shadow-md sticky top-0 z-50 flex flex-row">
          <Image src={'/logo-lit.png'} width={126} height={36} alt="Lubkita Logo" className="block lg:hidden" />
          <Image src={'/logo-lit.png'} width={156} height={36} alt="Lubkita Logo" className="hidden lg:block" />
        </nav>
      </Link>
      <div className="flex bg-white flex-col mt-10 items-start gap-6 lg:gap-6 max-w-8xl mx-auto py-6 lg:py-8 px-4 lg:px-8 rounded-3xl">
        {/* <Carousel className="rounded-2xl shadow-lg w-full overflow-hidden bg-white max-h-96"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                alt="Product Image 1"
                className="w-full object-contain"
                height={20}
                src="/banner-4.webp"
                width={1250}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Product Image 2"
                className="w-full object-contain"
                height={400}
                src="/banner-2.webp"
                width={1250}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Product Image 3"
                className="w-full object-contain"
                height={400}
                src="/banner-1.webp"
                width={1250}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Product Image 4"
                className="w-full object-contain"
                height={400}
                src="/banner-3.webp"
                width={1250}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel> */}
        {/* <div className="bg-primarytext items-center shadow-lg rounded-2xl px-4 lg:px-8 py-5 flex flex-col lg:space-y-0 space-y-5 lg:flex-row justify-between w-full">
          <div className="flex flex-col ">
            <h1 className="text-white text-base lg:text-xl font-semibold">Scale your Earnings through Affiliate Marketing and Partnerships with Brands</h1>
            <p className="text-white text-sm lg:text-base font-light">Monetise your channels and expand your affiliate marketing activities by helping Brands achieve their business goals.</p>
          </div>
          <Button className="bg-secondarytext rounded-2xl">Register Now</Button>
        </div> */}
        <div className="flex flex-col space-y-3 p-8 rounded-3xl bg-slate-100">
          <div className="flex flex-row justify-between w-full lg:pb-4 pb-2">
            <h3 className="text-xl lg:text-2xl text-slate-700 font-semibold">Our Top Categories</h3>
            {/* <p className="text-primarytext text-base">See all</p>s */}
          </div>
          <BentoGrid className="w-full">
          { categories.map((category, index) => (
              <BentoGridItem
              key={index}
              title={category.title}
              description={category.description}
              header={category.image}
              className={index === 3 || index === 6 ? "md:col-span-2" : ""}
            />
          ))}
          </BentoGrid>
        </div>
        {/* <div className="flex flex-row justify-between w-full pt-12 pb-2">
          <h3 className="text-xl lg:text-2xl text-slate-700 font-semibold">Popular Products</h3>
          <p className="text-primarytext text-base">See all</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 w-full">
          { products.map(product => (
            <ProductCard
              key={product.key}
              productImage={product.productImage}
              productName={product.productName}
              productDescription={product.productDescription}
              rating={product.rating}
              amountSold={product.amountSold}
              price={product.price}
            />
          )) }
        </div> */}
      </div>
      <footer className="px-6 py-5 mt-24 bg-secondarytext">
        <div className="max-w-7xl mx-auto">
          <p className="text-white">&copy; 2024 All Rights Reserved | LUNOGI </p>
        </div>
      </footer>
    </>
  );
}
