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
import Script from "next/script";


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
sections: Array<{
    type: 'table' | 'list';
    title?: string;
    headers?: string[];
    items: Array<{ [key: string]: string }> | Array<string>;
    content?: string;
}>;
price?: string;
imageSrc?: string;
productLink?: string;
titleImage?: string; // Add this line
};

// Update the Section type
type Section = {
  header: string;
  paragraph: string;
  price?: string;
  imageSrc?: string;
  productLink?: string;
  content: ContentItem[];
};

// Define content
const skinCareContent: Section[] = [
    {
        header: "Introduction",
        paragraph: "In today's fast-paced world, having a reliable ice maker at your fingertips can make a significant difference in both convenience and comfort. Whether you're hosting a party, enjoying a refreshing drink on a hot day, or simply need ice for daily use, a countertop ice maker offers a practical solution. However, with so many options available, finding one that is both efficient and easy to use can be a challenge. In this article, we'll explore the top three countertop ice makers that stand out for their user-friendly design and reliable performance. We'll evaluate each model based on key criteria such as ease of use, ice production speed, and overall performance to help you make an informed decision. Whether you're looking for a compact unit for your kitchen or a powerful ice maker for your office, these top picks are sure to meet your needs and make ice production effortless.",
        imageSrc: "/ice-2.png",
        content: []
    },


    {
        header: "Product Reviews",
        paragraph: "",
        content: [
        {
            title: "1. Igloo Automatic Self-Cleaning Portable Electric Countertop Ice Maker Machine.",
            description: "The Igloo Automatic Self-Cleaning Portable Electric Countertop Ice Maker Machine is a reliable and user-friendly choice for those looking for a convenient ice-making solution. Its self-cleaning feature, efficient ice production, and compact design make it a standout option for both home and office use. While it has some minor drawbacks, such as the need for frequent water refills and limited ice shapes, its overall performance and ease of use make it a valuable addition to any countertop.",
            price: "$129.99",
            imageSrc: "/blog-best-icemaker-countertop-igloo.png",
            productLink: "https://amzn.to/3M4Bc7t",
            sections: [
            ]
        },
        {
            title: "2. The GE Profile Opal 2.0 Really Does Make 'The Good Ice'",
            description: "Users generally praise the GE Profile Opal 2.0 for its excellent nugget ice quality and convenient long-range connectivity. The ability to produce large quantities of nugget ice quickly is often cited as a significant advantage. However, some users mention the higher price and the need for regular maintenance as minor drawbacks. Overall, Opal 2.0 received positive reviews for its performance, design, and advanced features.",
            price: "$579.00",
            imageSrc: "/blog-best-icemaker-countertop-ge-opal.png",
            productLink: "https://amzn.to/3WCK1tW",
            sections: [
            ]
        },
        {
            title: "3. Frigidaire Compact Countertop Ice Maker",
            description: "Users generally appreciate the Frigidaire Compact Countertop Ice Maker for its efficiency and compact size. The ability to produce a large amount of ice quickly is often highlighted as a significant advantage. However, some users have noted that the ice bin needs to be emptied frequently and that the unit can be noisy during operation. Overall, the Frigidaire ice maker receives positive feedback for its performance and affordability.",
            price: "$109.99",
            imageSrc: "/blog-best-icemaker-countertop-frigidaire-compact.png",
            productLink: "https://amzn.to/3ysZwNj",
            sections: [
            ]
        }
        ]
    },



    {
        header: "Criteria For Selection",
        paragraph: "",
        content: [
        {
            title: "Ease of use",
            description: "An ice maker should have a straightforward control panel with clearly labeled buttons and indicators. This simplicity ensures users can operate the machine without confusion, whether they are starting a new ice cycle or adjusting settings.",
            sections: [
            ]
        },
        {
            title: "Performance and Reliability",
            description: "Evaluate the ice maker's production capacity, which is typically measured in pounds of ice per day. A reliable ice maker should produce a sufficient amount of ice to meet your needs without long wait times. Faster production cycles are also beneficial for ensuring a steady supply of ice.",
            sections: [
            ]
        },
        {
            title: "Additional Features",
            description: "Features that simplify cleaning and maintenance, such as a self-cleaning function or easy-to-remove parts, can greatly enhance the ease of use. Regular maintenance should be minimal to ensure the ice maker remains in good working condition.",
            sections: [
            ]
        }
        ]
    },


    {
        header: "Conclusion",
        paragraph: "The best countertop ice makers are those that balance ease of use with reliable performance. Each of the models highlighted in this article offers unique advantages, from compact designs to advanced features, ensuring that you can find an ice maker that meets your specific needs and preferences. By focusing on the criteria of ease of use, performance, and additional features, you can make an informed decision and choose a countertop ice maker that enhances your daily routine. Whether you prioritize quick ice production, self-cleaning functions, or compact design, these top picks provide a range of options to suit your needs. Find the Best Countertop Ice Makers That Offer Exceptional Performance and Ultimate Convenience, Perfect for Enhancing Your Home or Office with Efficient, High-Quality Ice Production Without the Hassle of Complicated Operation or Maintenance. (arahkan ke link lunogi)",
        content: []
    }
    ];

// Component to render content item
const ContentSection = ({ item }: { item: ContentItem }) => (
    <div>
    {/* Title */}
    <h3 className="text-2xl font-semibold mb-3 text-center">{item.title}</h3>
  
    {/* Title Image (if available) */}
    {item.titleImage && (
      <div className="my-5">
        <Image
          src={item.titleImage}
          alt={item.title}
          width={800}
          height={400}
          className="w-full object-cover rounded-lg"
        />
      </div>
    )}
  
    {/* ToggleButton */}
    {item.price && item.imageSrc && item.productLink && (
        <div className="my-5">
        <ToggleButton price={item.price} imageSrc={item.imageSrc} productLink={item.productLink} />
        </div>
    )}
  
  
    {/* Description (if available) */}
    {item.description && <p className="bg-blue-100 p-5 rounded-xl">{item.description}</p>}
  
  
    {item.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="">
        {section.type === 'table' ? (
            // Table content type
            <div className="overflow-x-auto mt-10">
            <table className="table-auto w-full">
                <thead>
                <tr>
                    {section.headers && section.headers.length > 0 ? (
                    section.headers.map((header, index) => (
                        <th key={index} className="border border-blue-200" colSpan={section.headers!.length === 1 ? 2 : 1}>
                        {header}
                        </th>
                    ))
                    ) : null}
                </tr>
                </thead>
                <tbody>
                {(section.items as Array<{ [key: string]: string }>).map((row, index) => (
                    <tr key={index}>
                    {Object.entries(row).map(([key, value], cellIndex) => (
                        <td 
                        key={cellIndex} 
                        className={`border border-blue-200 p-5 ${key === 'Feature' ? 'w-1/4' : 'w-3/4'}`}
                        dangerouslySetInnerHTML={{ __html: value }}
                        ></td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        ) : section.type === 'list' ? (
            // List content type
            <>
            {/* List title (if available) */}
            {section.title && <h4 className="mb-3 mt-10 text-xl font-medium">{section.title}</h4>}
            {section.title === "Pros" || section.title === "Cons" || section.title === "Disadvantages" || section.title === "Advantages" ? (
                <ul className="list-none mb-5">
                {(section.items as Array<string>).map((listItem, index) => (
                    <li className="my-5 flex items-start" key={index}>
                    <span className="mr-2 mt-1">
                        {section.title === "Pros" || section.title === "Advantages" ? (
                        <TbPlus className="text-green-500" />
                        ) : section.title === "Cons" || section.title === "Disadvantages"? (
                        <TbMinus className="text-red-500" />
                        ) : null}
                    </span>
                    <span>{listItem}</span>
                    </li>
                ))}
                </ul>
            ) : (
                <ul className="list-disc pl-5 mb-5">
                {(section.items as Array<string>).map((listItem, index) => (
                    <li className="my-5" key={index}>
                    {listItem}
                    </li>
                ))}
                </ul>
            )}
            </>
        ) : null}
        </div>
    ))}
    </div>
  );
  
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
    <div className="relative flex flex-col items-center space-y-4">
        <Image src={imageSrc} alt="Product" width={400} height={400} className="rounded-xlborder-2 border-white p-10" />
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
    
    
    const pageTitle = '3 Best Countertop Ice Maker that is easy to use | Lunogi';
    const pageDescription = 'Discover the 3 best countertop ice makers that are easy to use. Get quick and reliable ice production with these top-rated, user-friendly ice makers.';
    
    return (
        <>
            <Script id="page-meta-tags" strategy="afterInteractive">
                {`
                document.title = "${pageTitle}";
                document.querySelector('meta[name="description"]').setAttribute("content", "${pageDescription}");
                `}
            </Script>
            <motion.div initial="initial" animate="animate" variants={parentVariant}>
                <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
                style={{ scaleX: useScroll().scrollYProgress }}
                />
            {/* Banner section */}
            <motion.div className="child" variants={childrenVariant}>
                <div className="relative bg-cover bg-center h-[200px] lg:h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/banner-ice.png"
                    width={1440}
                    height={400}
                    className="absolute inset-0 h-full object-contain"
                    alt="Lunogi Smart School Hero Image"
                    loading="eager"
                />

                <div className="relative z-10 flex flex-col space-y-6 items-start w-full px-7 lg:px-[156px] lg:py-[160px]">
                    <Link href={'/blog'} className="flex flex-row space-x-2">
                    <TbArrowLeft className="size-5 text-white" />
                    <p className="font-light text-base">Back to article list</p>
                    </Link>
                    <div className="flex flex-row justify-between w-full">
                    <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">3 Best Countertop Ice Maker<br></br>that is easy to use</h1>
                    <div className="flex flex-col space-y-5 w-[360px]">
                        <p className="text-base font-light">
                            {pageDescription}
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
                        <h1 className="text-4xl font-medium text-neutral-700">{section.header}</h1>
                        <p className="font-light text-lg text-neutral-700">{section.paragraph}</p>
                    </div>
                    {section.content.map((item, itemIndex) => (
                        <ContentSection key={itemIndex} item={item} />
                    ))}
                    </div>
                ))}
                    <div className="flex flex-col mt-20 w-full">
                        <h1 className="text-4xl my-5 font-bold text-center">FAQ</h1>
                        <Accordion type="single" className="w-full text-xl lg:text-2xl" collapsible>
                            <AccordionItem value="item-1" className="">
                            <AccordionTrigger>Quesrion 1</AccordionTrigger>
                            <AccordionContent>
                                Answer 1
                            </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                            <AccordionTrigger>Quesrion 2</AccordionTrigger>
                            <AccordionContent>
                                Answer 2
                            </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                            <AccordionTrigger>Quesrion 3</AccordionTrigger>
                            <AccordionContent>
                                Answer 3
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </motion.div>
            </motion.div>
        </>
    );
}