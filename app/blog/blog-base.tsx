"use client"
import Image from "next/image";
import Link from "next/link";
import { TbArrowDownCircle, TbArrowLeft, TbClock, TbHourglass } from "react-icons/tb";
import { motion, Variants, useScroll } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


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
};

type Section = {
header: string;
paragraph: string;
content: ContentItem[];
};
// Define content
const skinCareContent: Section[] =

[
    {
        header: "this is a h2 title",
        paragraph: "this is a h2 paragraph",
        content:
        [
            {
                title: "this is a h3 title",
                description: "this is a h3 paragraph",
                sections:
                [
                    {
                        type: "list",
                        title: "this is an h4 title",
                        headers: [],
                        items:
                        [
                            "this is an h4 paragraph"
                        ],
                    },
                ]
            },
        ]
    },
];

// Component to render content item
const ContentSection = ({ item }: { item: ContentItem }) => (
<div>
    {/* Title */}
    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>


    {/* Description (if available) */}
    {item.description && <p className="bg-blue-100 p-5 rounded-xl">{item.description}</p>}
    
    {item.sections.map((section, sectionIndex) => (
    <div key={sectionIndex} className="">
        {section.type === 'table' ? (

        // Table content type
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
            <thead>
                <tr>
                {section.headers && section.headers.length > 0 ? (
                    section.headers.map((header, index) => (
                    <th key={index} className="border border-blue-200 p-5" colSpan={section.headers!.length === 1 ? 2 : 1}>
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
            {section.title && <h4 className="mb-3 text-xl font-medium">{section.title}</h4>}
            {section.items.length === 1 ? (
            // Single item list
            <p>{typeof section.items[0] === 'string' ? section.items[0] : JSON.stringify(section.items[0])}</p>
            ) : (


            // Multiple items list
            <ul className="list-inside list-disc mb-5">
                {(section.items as Array<string>).map((listItem, index) => (
                <li key={index}>{listItem}</li>
                ))}
            </ul>
            )}
        </>
        ) : null}
    </div>
    ))}
</div>
);

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
                src="/macbook-1.webp"
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
            <div className="py-10 flex flex-col items-center px-[156px]">
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
                    <ContentSection key={itemIndex} item={item} />
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