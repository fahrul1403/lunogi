// app/page.tsx
"use client";
import * as React from "react";
import Hero from "@/components/ui/hero";
import { TopCategories, ListCategories } from "@/components/ui/top-categories";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import  { TopProducts, ListProducts, FeaturedProducts } from "@/components/ui/top-products";
import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BlogPost from "@/components/ui/blog-post";
import ScrollableValues from "@/components/ui/ScrollableValues";

export default function Home() {

  const products = [
    {
      key: '1',
      productImage: "/product-1.jpg",
      productName: "Apple 2023 MacBook Pro Laptop M3 Pro chip with 11‑core CPU",
      productDescription: "Macbook",
      rating: 4.7,
      amountSold: '2K',
      price: '$1,781.01',
    },
    {
      key: '2',
      productImage: "/product-1.jpg",
      productName: "Ice Maker Countertop, Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker with Ice Scoop & Basket",
      productDescription: "Macbook",
      rating: 4.7,
      amountSold: '2K',
      price: '$1,781.01',
    },
  ];

  const offers = [
    {
      title: "Comprehensive Product Catalog",
      description:
        "We offer a wide range of products across various categories, from electronics, fashion, and household items to everyday necessities. Every product displayed on our site is carefully selected to ensure quality and authenticity.",
      image: "/comprehensive.png",
      link: "#",
    },
    {
      title: "Detailed Product Descriptions",
      description:
        "We provide complete information about each product, including specifications, prices, and user reviews. This helps you make better decisions before purchasing.",
      image: "/detailed.png",
      link: "#",
    },
    {
      title: "Secure Affiliate Links",
      description:
        "When you click the Buy Now button, you will be directed to Amazon through our affiliate link. With every purchase you make through that link, we earn a commission at no additional cost to you. This helps us to continue developing and improving our services.",
      image: "/secure.png",
      link: "#",
    },
  ];

  const projects = [
    {
      title: "Credibility and Trust",
      description:
        "We partner with Amazon, one of the largest and most trusted e-commerce platforms in the world. All products featured on our site are genuine and sold by trusted sellers on Amazon.",
      image: "/credibility-1.png",
      link: "#",
    },
    {
      title: "Easy Navigation",
      description:
        "Our intuitive and responsive site design makes it easy for you to find the products you're looking for, whether through direct search or through the available categories.",
      image: "/easy-nav.png",
      link: "#",
    },
    {
      title: "Responsive Customer Support",
      description:
        "We are always ready to assist you with any questions or issues you may have. Feel free to contact us through our contact page.",
      image: "/responsive.png",
      link: "#",
    },
  ];

  const [gradientPercentage, setGradientPercentage] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      setGradientPercentage(window.innerWidth >= 768 ? 7: 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      id="main-container"
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) ${gradientPercentage}%), url('/lunogi-wallpaper1.jpeg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style jsx>{`
        #main-container {
          background-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 4%), url('/lunogi-wallpaper1.jpeg');
          background-position: center top -200px;
        }
      `}</style>
      <div className="flex items-center flex-col gap-6 lg:gap-6 max-w-8xl mx-auto py-6 lg:py-8 px-4 lg:px-8">
        {/* <p className="text-black lg:text-red-300">TESTT</p> */}
        <div className="md:mt-30 mt-20"><Hero /></div>
        <TopProducts />
        <ListCategories />
        <FeaturedProducts />
        {/* <div className="flex flex-row w-full space-x-20 items-center rounded-3xl ">
          <div className="flex flex-col rounded-3xl items-center py-10 bg-slate-100">
              <h3 className="text-2xl lg:text-3xl text-slate-700 font-semibold">
                What We Offer
              </h3>
              <HoverEffect items={offers} className="px-10 grid-cols-3" />
            </div>
        </div> */}
        <div 
          className="flex flex-col lg:flex-row w-full lg:space-x-20 items-center rounded-3xl px-10"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)), url('/lunogi-wallpaper-waves.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex flex-col lg:w-1/2 rounded-3xl justify-start items-start py-10 space-y-3">
            <h3 className="text-base lg:text-xl text-slate-500 font-normal">
              Why Choose Us
            </h3>
            <h4 className="text-slate-700 font-semibold text-3xl lg:text-[64px] leading-[40px] lg:leading-[64px]">
              We’ve been <span className="text-blue-500">helping customers</span> globally.
            </h4>
            {/* <HoverEffect items={projects} className="px-10 grid-cols-1 lg:grid-cols-2" /> */}
          </div>
          <Accordion type="single" className="w-full text-xl lg:text-2xl" collapsible>
            <AccordionItem value="item-1" className="">
              <AccordionTrigger>Credibility and Trust</AccordionTrigger>
              <AccordionContent>
                We partner with Amazon, one of the largest and most trusted e-commerce platforms in the world. All products featured on our site are genuine and sold by trusted sellers on Amazon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Easy Navigation</AccordionTrigger>
              <AccordionContent>
                Our intuitive and responsive site design makes it easy for you to find the products you are looking for, whether through direct search or through the available categories.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Responsive Customer Support</AccordionTrigger>
              <AccordionContent>
                We are always ready to assist you with any questions or issues you may have. Feel free to contact us through our contact page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* <div className="flex flex-col w-full items-center rounded-3xl px-10">
          <h3 className="text-base lg:text-base text-slate-500 font-normal">
            Read Our Blog
          </h3>
          <h4 className="text-slate-700 font-semibold text-3xl lg:text-[32px] leading-[40px] lg:leading-[64px]">
            Read Our <span className="text-blue-500">Blog</span> Post
          </h4>
          <BlogPost/>
        </div> */}
      </div>
    </div>
  );
}
