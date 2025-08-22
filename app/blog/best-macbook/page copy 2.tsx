"use client"
import Image from "next/image";
import Link from "next/link";
import { TbArrowDownCircle, TbArrowLeft, TbClock, TbHourglass, TbPlus, TbMinus } from "react-icons/tb";
import { motion, Variants, useScroll } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useState } from 'react';


// Define variants for animations
const parentVariant: Variants = {
initial: { opacity: 0 },
animate: {
    opacity: 1,
    transition: { staggerChildren: 1 }
}
};

const childrenVariant: Variants = {
initial: { opacity: 0, x: 50 },
animate: { opacity: 1, x: 0 }
};

// Define content types
type ContentItem = {
title: string;
description: string;
showProductFeature?: boolean;
h2image?: string;
sections: Array<{
    type: 'table' | 'list' | 'flex';
    title?: string;
    headers?: string[];
    items: Array<{ Feature: string; Specification: string; h4image?: string;}> | Array<string> | Array<{ title: string; list: string[];  h4image?: string}>;
    content?: string;
    showProductFeature?: boolean;
    h3image?: string;
}>;
};

// Update the Section type
type Section = {
  header: string;
  paragraph: string;
  h5image?:string;
  price?: string;
  imageSrc?: string;
  productLink?: string;
  content: ContentItem[];
};

// Define content
const skinCareContent: Section[] =

[
  {
    header: "Introduction",
    paragraph: "Choosing the right MacBook can be a very difficult decision, especially with so many models available on the market. In 2024, Apple continues to innovate by releasing several increasingly good MacBook models, each equipped with the latest technology and improved features. In this article, we'll cover the various MacBook models released in 2024. Whether you're looking for a high-performance MacBook for video editing or a lightweight, portable model for everyday use. This article will give you all the information you need to choose the best MacBook in 2024.",
    content:
    []
  },


  {
    header: "Criteria for Choosing the Best MacBook",
    paragraph: "",
    content: [
      {
        title: "1. Performance (CPU, GPU, RAM).",
        description: "",
        sections: [
            {
                type: "list",
                title: "",
                items:
                  [
                    "CPU (Central Processing Unit): The CPU is the brain of your MacBook. The more powerful the CPU, the faster and more efficient the MacBook will be at handling complex tasks. For heavy tasks like video editing or programming, a faster processor like the M1 Pro or M1 Max will provide better performance.",
                    "GPU (Graphics Processing Unit): GPU are essential for graphics-intensive tasks such as graphic design, video editing, and gaming. A MacBook with a more powerful GPU will provide better and smoother graphics performance.",
                    "RAM (Random Access Memory): RAM affects a MacBook's ability to run multiple applications at once. The more RAM, the smoother the MacBook will run heavy applications and multitask. For most users, 8GB RAM is sufficient, but for heavy tasks, 16GB or more is recommended.",
                  ]
              },
            ]
        },
        {
        title: "2. Storage (SSD capacity and speed).",
        description: "",
        sections: [
            {
                type: "list",
                title: "",
                items:
                  [
                    "SSD Storage capacity determines how much data and applications you can store on your MacBook. The latest MacBook models typically offer options ranging from 256GB to 2TB or more. Choose the capacity that suits your needs.",
                    "SSD SSD speed affects how quickly your MacBook can access and store data. A faster SSD will speed up boot times, application launches, and file transfers.",
                  ]
            }
            ]
        },
        {
            title: "3. Battery Life.",
            description: "Battery life is very important, especially if you often work outdoors or on the go. The latest MacBooks typically offer impressive battery life, with some models lasting up to 18-20 hours of normal use. Make sure to choose a MacBook with battery life that suits your lifestyle.",
            sections: [
            ]
        },
        {
            title: "4. Screen (size, resolution, screen technology).",
            description: "",
            sections: [
            {
                type: "table",
                title: "Key Features",
                headers: ["Key Features"],
                items: [
                  { Feature: "<span class='font-semibold italic'>Size</span>", Specification: "MacBooks are available in various screen sizes, from 13 inches to 16 inches. Choose a screen size that suits your preferences and the type of work you do. Larger screens are suitable for video editing or graphic design, while smaller screens are more portable." },
                  { Feature: "<span class='font-semibold italic'>Resolution</span>", Specification: "Higher resolution produces sharper and more detailed images. The latest MacBooks are usually equipped with high-resolution Retina displays, ensuring stunning visuals" },
                  { Feature: "<span class='font-semibold italic'>Technology</span>", Specification: "Display technologies like Liquid Retina, True Tone, and ProMotion can enhance your viewing and working experience. This technology provides more accurate colors, higher brightness, and a faster refresh rate." },
                ],
            },
            ]
        },
        {
            title: "5. Portability (weight, size)",
            description: "Portability is an important factor if you travel frequently or take your MacBook to various places. The MacBook Air is a highly portable option with a thin and light design, while the MacBook Pro may be slightly heavier but offers more powerful performance. Consider the weight and size of the MacBook when making your decision.",
            sections: [
            ]
        },
        {
            title: "6. Price",
            description: "Price is an inevitable factor in choosing a MacBook. More sophisticated models with high specifications will of course be more expensive. Set your budget and look for a MacBook that offers the best value for your needs and budget. Don't forget to consider additional costs such as accessories and warranties.",
            sections: [
            ]
        },
      ]
    },




    {
        header: "In-Depth Review of Top MacBook Models",
        paragraph: "",
        content:[]
    },
    
    
    


{
    header: "1. MacBook Air M3 (2024)",
    paragraph: "",
    price: "$999",
    imageSrc: "/blog-best-macbook-macbook-air2024.png",
    productLink: "https://amzn.to/4czQcoU",
    content:
    [
      {
        title: "Overview",
        description: "The MacBook Air 2024 is a highly portable and lightweight laptop that offers impressive performance and battery life. With its M2 chip, it delivers fast and efficient performance for everyday tasks, making it an ideal choice for students, office professionals, and general users. Its sleek design and long battery life make it a versatile and convenient device for use in various environments.",
        showProductFeature: true,
        sections: []
      },
      {
        title: "",
        description: "",
        sections: [
          {
            type: "list",
            title: "Recommendation for users",
            items:
              [
                "Students: With its lightweight design, long battery life, and reliable performance, the MacBook Air is perfect for students who need a portable device for studying and daily tasks",
                "Office Professional: The MacBook Air is ideal for office professionals who need a reliable laptop for administrative tasks, data processing, and communications.",
                "Everyday User: Suitable for general users who need a laptop for web browsing, watching videos, and daily application use.",
              ]
          },
          {
            type: "flex",
            items: [
              {
                title: "Advantages",
                list: [
                    "Lightweight and Portable: Weighs less than 3 pounds, making it highly portable.",
                    "Long Battery Life: Lasts up to 18 hours of normal use, providing ample power for a full day of work or study.",
                    "Fast and Efficient Performance: Powered by the M2 chip, it delivers fast and efficient performance for everyday tasks.",
                    "Sleek Design: Features a thin and light design with a full-size keyboard and a large trackpad.",
                    "Good Connectivity: Equipped with two Thunderbolt/USB-C ports, allowing for fast data transfer and connection to external devices.",
                    "Retina Display: Offers a sharp and vibrant display with True Tone technology for accurate color reproduction.",
                ]
              },
              {
                title: "Disadvanages",
                list: [
                    "Limited Ports: Only has two Thunderbolt/USB-C ports, which may limit the number of devices that can be connected simultaneously.",
                    "Limited Upgrade Options: RAM and storage cannot be upgraded after purchase, so users need to choose the right configuration from the start.",
                    "Less Powerful than Pro Models: While it offers good performance, it's not as powerful as the MacBook Pro models.",
                ]
              },
            ]
          },
        ]
      },
    ]
},






{
    header: "2. MacBook Pro 13-inch (2024)",
    paragraph: "",
    price: "$1,399",
    imageSrc: "/blog-best-macbook-macbook-pro13.webp",
    productLink: "https://amzn.to/4dKkgiw",
    content: [
      {
        title: "Overview",
        description: "The MacBook Pro 13-inch (2024) offers a perfect balance of power and portability. With its M-series chip, it delivers high performance for demanding tasks while maintaining a compact form factor. This model is ideal for professionals who need more power than the MacBook Air but prefer a smaller screen size than the 16-inch Pro.",
        showProductFeature: true,
        sections: []
      },
      {
        title: "",
        description: "",
        sections: [
          {
            type: "list",
            title: "Recommendation for users",
            items: [
              "Creative Professional: Ideal for graphic designers, photographers, and video editors who need a high-quality display and powerful graphic performance.",
              "Developers and Programmers: Suitable for software developers who require high CPU performance and efficient multitasking capabilities.",
              "Business Professionals: With good battery life and strong performance, the 13-inch MacBook Pro is perfect for business professionals who need a reliable device for presentations, data analysis, and other heavy-duty work.",
              "Users Who Need High Performance in a Compact Form Factor: Users who need Pro-level performance but in a smaller, more portable form factor than the 16-inch model will find the 13-inch MacBook Pro to be the ideal solution.",
            ]
          },
          {
            type: "flex",
            items: [
              {
                title: "Advantages",
                list: [
                  "High Performance with M-Series Chip: Powered by the M2 Pro or M2 Max chip, offering much stronger performance than the MacBook Air.",
                  "Retina Display with True Tone and P3 Wide Color: Ensures sharp, clear and accurate color reproduction, ideal for creative work.",
                  "Good Battery Life: Lasts up to 17 hours of normal use.",
                  "More Ports: Includes USB-C/Thunderbolt ports, HDMI port, and an SD card slot.",
                  "Touch Bar and Touch ID: Provides quick access to functions and ensures security.",
                ]
              },
              {
                title: "Disadvantages",
                list: [
                  "Heavy and Thick: Slightly heavier and thicker than the MacBook Air, which may reduce portability for some users.",
                  "Higher Price: Priced higher than the MacBook Air, which may not suit all budgets.",
                  "Limited Upgrade Options: RAM and storage cannot be upgraded after purchase.",
                ]
              },
            ]
          },
        ]
      },
    ]
},






{
    header: "3. MacBook Pro 16-inch (2024)",
    paragraph: "",
    price: "$2,399",
    imageSrc: "/blog-best-macbook-macbook-pro16.png",
    productLink: "https://amzn.to/3WKRPtU",
    content: [
      {
        title: "Overview",
        description: "The MacBook Pro 16-inch (2024) is Apple's flagship laptop, offering unparalleled performance and a stunning large display. Equipped with the latest M-series chip, it's designed for professionals who need the absolute best in mobile computing power. Its spacious screen and superior audio make it an excellent choice for creative professionals and power users.",
        showProductFeature: true,
        sections: []
      },
      {
        title: "",
        description: "",
        sections: [
          {
            type: "list",
            title: "Recommendation for users",
            items: [
              "Creative Professionals: Ideal for graphic designers, photographers, video editors, and other creative professionals who need a large screen and powerful graphics performance.",
              "Developers and Programmers: Suitable for software developers who need ample screen space and efficient multitasking capabilities.",
              "Heavy Duty Professionals: Users who perform complex data analysis, 3D rendering, or other demanding tasks will find the 16-inch MacBook Pro to be a very reliable tool.",
              "Users Who Need a Superior Multimedia Experience: A high-quality audio system and large display make it ideal for multimedia content consumption, presentations, and entertainment.",
            ]
          },
          {
            type: "flex",
            items: [
              {
                title: "Advantages",
                list: [
                  "Superior Performance: Equipped with the M2 Pro or M2 Max chip, offering incredibly powerful performance.",
                  "Spacious, High-Quality 16-inch Retina Display: Large display with True Tone technology and P3 Wide Color support.",
                  "Improved Cooling System: Allows for peak performance for longer periods without overheating.",
                  "Good Battery Life: Lasts up to 14-16 hours of normal use.",
                  "High-Quality Audio: Six-speaker system with Dolby Atmos technology.",
                  "More Ports: Multiple USB-C/Thunderbolt ports, HDMI, SD card slot, and headphone jack.",
                ]
              },
              {
                title: "Disadvantages",
                list: [
                  "Heavy and Bulky: Less portable than smaller models, which could be a drawback for frequent travelers.",
                  "High Price: As a flagship model, it's priced quite high, which may not suit all budgets.",
                  "Limited Upgrade Options: RAM and storage cannot be upgraded after purchase.",
                ]
              },
            ]
          },
        ]
      },
    ]
},




{
    header: "Conclusion",
    paragraph: "This article has provided information to help you find the best MacBook in 2024. choosing the right MacBook will not only increase your productivity but also provide a more satisfying experience. Choose wisely, and enjoy the technological advantages offered by the latest MacBook from Apple. (arahkan ke link lunogi)",
    content: []
}
];

// Component to render content item
const ContentSection = ({ 
    item, 
    price, 
    imageSrc, 
    productLink, 
  }: { 
    item: ContentItem; 
    price?: string; 
    imageSrc?: string; 
    productLink?: string; 
  }) => {
    const renderProductFeature = item.showProductFeature || item.sections.some(section => section.showProductFeature);
  
    return (
      <div>
        {!renderProductFeature && item.title && (
          <h3 className={`text-center text-2xl font-semibold my-5 ${
            item.sections.some(section => section.type === 'table') ? 'text-center' : ''
          }`}>
            {item.title}
          </h3>
        )}
        {renderProductFeature && price && imageSrc && productLink ? (
          <div className="flex flex-col md:flex-row p-3 rounded-2xl mb-4">
            <div className="flex flex-col basis-full md:basis-2/5 space-y-4">
              <div className="flex items-center justify-center h-full">
                <Image src={imageSrc} alt="Product" width={350} height={350} className="rounded-xl" />
              </div>
            </div>
            <div className="basis-full md:basis-3/5 mt-4 md:mt-0 md:ml-4 flex flex-col justify-center items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                {item.description && (
                  <p className="bg-blue-100 text-xl p-5 rounded-xl w-full">{item.description}</p>
                )}
              </div>
              <div className="mt-4">
                <ToggleButton price={price} imageSrc={imageSrc} productLink={productLink} />
              </div>
            </div>
          </div>
        ) : (
          // Render description outside of product feature section
          item.description && (
            <div className="flex">
              {item.h2image && <div className="basis-1/2"><Image src={item.h2image} alt="Product" width={1000} height={1000} className="rounded-xl" /></div>}
              <p className={`${item.h2image ? 'basis-1/2' : 'w-full'} bg-blue-100 text-xl p-5 rounded-xl mb-4`}>{item.description}</p>
            </div>
          )
        )}
        {item.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="">
            {section.type === 'table' ? (
              <div className="flex flex-col space-y-4">
                {Array.from({ length: Math.ceil(section.items.length / 3) }).map((_, rowIndex) => (
                  <div key={rowIndex} className={`grid gap-2 ${
                    rowIndex === 0 || section.items.length - rowIndex * 3 >= 3
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                      : section.items.length - rowIndex * 3 === 1
                      ? 'grid-cols-1 mx-8 md:mx-16 lg:mx-32'
                      : 'grid-cols-1 md:grid-cols-2'
                  }`}>
                    {(section.items as Array<{ Feature: string; Specification: string; h4image?: string }>)
                      .slice(rowIndex * 3, rowIndex * 3 + 3)
                      .map((item, index) => (
                        <div key={index} className="flex flex-col bg-gray-100 p-4 rounded-lg">
                          {item.h4image && (
                            <div className="text-base">
                              <Image 
                                src={item.h4image} 
                                alt="Product" 
                                width={240} 
                                height={240} 
                                className="rounded-xl border-2 border-white p-10 mx-auto" 
                              />
                            </div>
                          )}
                          <div 
                            className="font-semibold mb-2 mx-auto" 
                            dangerouslySetInnerHTML={{ __html: item.Feature }}
                          />
                          <div className="text-sm">{item.Specification}</div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ) : section.type === 'list' ? (
              <div className="flex flex-col md:flex-row items-center gap-4 my-10 md:text-left text-center">
                {section.h3image && (
                  <div className="md:flex-shrink-0 flex-col mb-4 md:mb-0 md:w-1/5">
                  {section.title && (
                    <h4 className="mb-2 text-xl font-medium md:hidden block">{section.title}</h4>
                  )}
                    <Image 
                      src={section.h3image} 
                      alt="Product" 
                      width={240} 
                      height={240} 
                      className="rounded-xl border-2 border-black p-10" 
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-center md:w-4/5 md:pl-4">
                  {section.title && (
                    <h4 className="mb-2 text-xl font-medium md:block hidden">{section.title}</h4>
                  )}
                  {(section.items as Array<string>).length === 1 ? (
                    <p className="mb-3">{(section.items as Array<string>)[0]}</p>
                  ) : (
                    <ul className="list-disc pl-5 mb-3">
                      {(section.items as Array<string>).map((listItem, index) => (
                        <li className="my-3" key={index}>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ) : section.type === 'flex' ? (
              <div className="flex flex-col md:flex-row gap-8">
                {(section.items as Array<{ title: string; list: string[] }>).map((item, index) => (
                  <div key={index} className="flex-1">
                    <h4 className="mb-3 text-xl font-medium">{item.title}</h4>
                    <ul className="list-none mb-5">
                      {item.list.map((listItem, itemIndex) => (
                        <li className="my-5 flex items-start" key={itemIndex}>
                          <span className="mr-2 mt-1">
                            {item.title === "Pros" ? (
                              <TbPlus className="text-green-500" />
                            ) : (
                              <TbMinus className="text-red-500" />
                            )}
                          </span>
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  };
  
  const ToggleButton = ({ price, imageSrc, productLink }: { price: string; imageSrc: string; productLink: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const priceLength = price.length;
    const onText = "Go to Product";
    const offText = "Purchase Now?";
    const longestTextLength = Math.max(onText.length, offText.length);
    
    const circleWidth = Math.max(40, priceLength * 16);
    const textWidth = longestTextLength * 10
    const buttonWidth = Math.max(80, circleWidth + textWidth + 180);
  
    return (
      <div className="relative flex flex-col items-center">
        <Link href={productLink} passHref>
          <button
            className={`relative h-16 rounded-full p-2 transition-colors duration-300 ease-in-out focus:outline-none ${
              isHovered ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            style={{ width: `${buttonWidth}px` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`absolute top-2 left-2 h-12 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center text-2xl font-bold text-gray-700`}
              style={{ 
                width: `${circleWidth}px`,
                transform: isHovered ? `translateX(${buttonWidth - circleWidth - 16}px)` : 'translateX(0)'
              }}
            >
              {price}
            </span>
            <span className={`absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition-all duration-300 ease-in-out ${
              isHovered ? 'text-left pr-48' : 'text-right pl-48'
            }`}>
              {isHovered ? onText : offText}
            </span>
          </button>
        </Link>
      </div>
    );
  };
  
  export default function Detail() {
      return (
          <motion.div initial="initial" animate="animate" variants={parentVariant}>
              <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
              style={{ scaleX: useScroll().scrollYProgress }}
              />
          {/* Banner section */}
          <motion.div className="child" variants={childrenVariant}>
              <div className="relative w-full h-[200px] lg:h-[400px] flex items-center justify-center text-white">
              <Image
                  src="/blog-best-tracker-cover.jpeg"
                  fill
                  className="object-cover"
                  alt="Camera Blog Hero Image"
                  loading="eager"
              />
      
              <div className="relative z-10 flex flex-col space-y-6 items-start w-full px-7 lg:px-[156px] lg:py-[160px]">
                  <Link href={'/blog'} className="flex flex-row space-x-2">
                  <TbArrowLeft className="size-5 text-white" />
                  <p className="font-light text-base">Back to article list</p>
                  </Link>
                  <div className="flex flex-row justify-between w-full">
                  <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">5 Best Bluetooth Trackers <br></br>To Help Find Your Equipment</h1>
                  <div className="flex flex-col space-y-5 w-[360px]">
                      <p className="text-base font-light">
                          Put meta description here!
                      </p>
      
                      <a href="#blog-details">
                      <div className="flex flex-row space-x-3 items-center justify-center bg-white py-3 rounded-full">
                          <p className="text-base font-medium text-neutral-700">Read Now</p>
                          <TbArrowDownCircle className="size-5 text-neutral-700"/>
                      </div>
                      </a>
      
                  </div>
                  </div>
              </div>
              </div>  
          </motion.div>
      
          {/* Content section */}
          <motion.div className="child" variants={childrenVariant}>
              <div className="py-10 flex flex-col items-center md:px-[156px] px-10">
              <div className="flex flex-row space-x-5 lg:space-x-9 items-center">
                  <div id="blog-details" className="flex flex-row space-x-3 items-center">
                  <TbClock className="size-5 text-neutral-600"/>
                  <p className="text-base text-neutral-600 font-normal">18 hour ago</p>
                  </div>
                  <div className="flex flex-row space-x-3 items-center">
                  <TbHourglass className="size-5 text-neutral-600"/>
                  <p className="text-base text-neutral-600 font-normal">5 Minutes for reading</p>
                  </div>
              </div>
  
      
              {skinCareContent.map((section, index) => (
                  <div key={index} className="flex flex-col space-y-10 pb-10 pt-20 px-0 md:px-[20px] lg:px-[40px]">
                  <div className="flex flex-col space-y-6">
                      <h2 className="text-4xl font-medium text-neutral-700">{section.header}</h2>
                      <p className="font-light text-lg text-neutral-700">{section.paragraph}</p>
                  </div>
                  {section.content.map((item, itemIndex) => (
                      <ContentSection 
                        key={itemIndex} 
                        item={item} 
                        price={section.price}
                        imageSrc={section.imageSrc}
                        productLink={section.productLink}
                      />
                  ))}
                  </div>
              ))}
                  <div className="flex flex-col mt-20 w-full">
                      <h1 className="text-4xl my-5 font-bold text-center">FAQ</h1>
                      <Accordion type="single" className="w-full text-xl lg:text-2xl" collapsible>
                          <AccordionItem value="item-1" className="">
                          <AccordionTrigger>Question 1</AccordionTrigger>
                          <AccordionContent>
                              Answer 1
                          </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                          <AccordionTrigger>Question 2</AccordionTrigger>
                          <AccordionContent>
                              Answer 2
                          </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                          <AccordionTrigger>Question 3</AccordionTrigger>
                          <AccordionContent>
                              Answer 3
                          </AccordionContent>
                          </AccordionItem>
                      </Accordion>
                  </div>
              </div>
          </motion.div>
          </motion.div>
      );
      }