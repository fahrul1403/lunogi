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
import ContentSection from "@/components/ui/ContentSection";
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
showProductFeature?: boolean;
imageAbove?: boolean; // New property to determine image placement
h2image?: string;
h2middleimage?: boolean; // New boolean option
imagePosition?: 'left' | 'right'; // New property
verticalLayout?: boolean; // New boolean option for vertical layout
sections: Array<{
    type: 'table' | 'list' | 'flex' | 'comparison-table'; // Added 'comparison-table'
    title?: string;
    headers?: string[]; // Ensure headers is defined for all section types
    items: Array<
      | { Feature: string; Specification: string; h4image?: string; price?: string; purchaseLink?: string }
      | string
      | { title: string; list: string[]; h4image?: string }
      | { category: string; values: string[] } // Add this line
    >;
    content?: string;
    showProductFeature?: boolean;
    h3image?: string;
    h3middleimage?: boolean; // New boolean option for h3image placement
    h3images?: string[];
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
  loneheader?: boolean;
};
// Define content
const skinCareContent: Section[] =

[
    {
        header: "Introduction",
        paragraph: "Choosing the right MacBook can be a very difficult decision, especially with so many models available on the market. In 2024, Apple continues to innovate by releasing several increasingly good MacBook models, each equipped with the latest technology and improved features. In this article, we'll cover the various MacBook models released in 2024. Whether you're looking for a high-performance MacBook for video editing or a lightweight, portable model for everyday use. This article will give you all the information you need to choose the best MacBook in 2024.",
        content:
        [
            {
                title: "Criteria for Choosing the Best MacBook",
                description: "",
                sections: [
                    {
                        type: "list",
                        title: "1. Performance (CPU, GPU, RAM).",
                        items: [
                            "CPU (Central Processing Unit): The CPU is the brain of your MacBook. The more powerful the CPU, the faster and more efficient the MacBook will be at handling complex tasks. For heavy tasks like video editing or programming, a faster processor like the M1 Pro or M1 Max will provide better performance.",
                            "GPU (Graphics Processing Unit): GPU are essential for graphics-intensive tasks such as graphic design, video editing, and gaming. A MacBook with a more powerful GPU will provide better and smoother graphics performance.",
                            "RAM (Random Access Memory): RAM affects a MacBook's ability to run multiple applications at once. The more RAM, the smoother the MacBook will run heavy applications and multitask. For most users, 8GB RAM is sufficient, but for heavy tasks, 16GB or more is recommended.",                            
                        ]
                    },
                    {
                        type: "list",
                        title: "2. Storage (SSD capacity and speed).",
                        items: [
                            "SSD Storage capacity determines how much data and applications you can store on your MacBook. The latest MacBook models typically offer options ranging from 256GB to 2TB or more. Choose the capacity that suits your needs.",
                            "SSD SSD speed affects how quickly your MacBook can access and store data. A faster SSD will speed up boot times, application launches, and file transfers.",
                        ]
                    },
                    {
                        type: "list",
                        title: "3. Battery Life.",
                        items: [
                            "Battery life is very important, especially if you often work outdoors or on the go. The latest MacBooks typically offer impressive battery life, with some models lasting up to 18-20 hours of normal use. Make sure to choose a MacBook with battery life that suits your lifestyle."
                        ]
                    },
                    {
                        type: "table",
                        title: "4. Screen (size, resolution, screen technology).",
                        items: [
                            { Feature: "<span class='font-semibold italic'>Size</span>", Specification: "MacBooks are available in various screen sizes, from 13 inches to 16 inches. Choose a screen size that suits your preferences and the type of work you do. Larger screens are suitable for video editing or graphic design, while smaller screens are more portable." },
                            { Feature: "<span class='font-semibold italic'>Resolution</span>", Specification: "Higher resolution produces sharper and more detailed images. The latest MacBooks are usually equipped with high-resolution Retina displays, ensuring stunning visuals" },
                            { Feature: "<span class='font-semibold italic'>Technology</span>", Specification: "Display technologies like Liquid Retina, True Tone, and ProMotion can enhance your viewing and working experience. This technology provides more accurate colors, higher brightness, and a faster refresh rate." },
                        ]
                    },
                    {
                        type: "list",
                        title: "5. Portability (weight, size)",
                        items: [
                            "Portability is an important factor if you travel frequently or take your MacBook to various places. The MacBook Air is a highly portable option with a thin and light design, while the MacBook Pro may be slightly heavier but offers more powerful performance. Consider the weight and size of the MacBook when making your decision."
                        ]
                    },
                    {
                        type: "list",
                        title: "6. Price",
                        items: [
                            "Price is an inevitable factor in choosing a MacBook. More sophisticated models with high specifications will of course be more expensive. Set your budget and look for a MacBook that offers the best value for your needs and budget. Don't forget to consider additional costs such as accessories and warranties."
                        ]
                    },
                ]
            }
        ]
    },







    {
        header: "In-Depth Review of Top MacBook Models",
        loneheader: true,  
        paragraph: "",
        content:[]
    },



    {
        header: "1. MacBook Air 2024",
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
                verticalLayout: true, // Add this line to enable the vertical layout
                sections:
                []
            },
            /*
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Features",
                        headers: ["Feature", "Specification"],
                        items: [
                            { Feature: "Liquid Retina Display", Specification: "Offers stunning visuals with high resolution and accurate color reproduction." },
                            { Feature: "All-Day Battery Life", Specification: "Provides up to 18 hours of battery life, ensuring you can work or play all day without needing to recharge." },
                            { Feature: "M3 Chip", Specification: "Delivers fast and efficient performance for a wide range of tasks, from everyday use to more demanding applications." },
                            { Feature: "Lightweight and Portable", Specification: "Weighs less than 3 pounds, making it easy to carry around wherever you go." },
                            { Feature: "Thunderbolt/USB-C Ports", Specification: "Equipped with two Thunderbolt/USB-C ports for fast data transfer and connection to external devices." },
                            { Feature: "Magic Keyboard", Specification: "Features a comfortable and responsive keyboard with a scissor mechanism for a better typing experience." },
                            { Feature: "Touch ID", Specification: "Allows for secure and convenient authentication with just a touch of your finger." },
                            
                        ]
                    },
                ]
            },
            */
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Recommendation for users",
                        headers: ["User Type", "Recommendation"],
                        items: [
                            { Feature: "Students", Specification: "With its lightweight design, long battery life, and reliable performance, the MacBook Air is perfect for students who need a portable device for studying and daily tasks.", h4image: "/blog-best-macbook-macbook-air2024-usecase1.jpeg" },
                            { Feature: "Office Professional", Specification: "With good battery life and strong performance, the MacBook Air is ideal for office professionals who need a reliable device for presentations, data analysis, and other heavy-duty work.", h4image: "/blog-best-macbook-macbook-air2024-usecase2.jpeg" },
                            { Feature: "Everyday User", Specification: "Suitable for general users who need a laptop for web browsing, watching videos, and daily application use.", h4image: "/blog-best-macbook-macbook-air2024-usecase3.webp" },
                        ]
                    },
                ]
            },
            {
                title: "",
                description: "",
                sections:
                [
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
                            title: "Disadvantages",
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
        content:
        [
            {
                title: "Overview",
                description: "The MacBook Pro 13-inch (2024) offers a perfect balance of power and portability. With its M-series chip, it delivers high performance for demanding tasks while maintaining a compact form factor. This model is ideal for professionals who need more power than the MacBook Air but prefer a smaller screen size than the 16-inch Pro.",
                showProductFeature: true,
                verticalLayout: true, // Add this line to enable the vertical layout
                sections:
                []
            },
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Recommendation for users",
                        headers: ["User Type", "Recommendation"],
                        items: [
                            { Feature: "Creative Professional", Specification: "Ideal for graphic designers, photographers, and video editors who need a high-quality display and powerful graphic performance.", h4image: "/blog-best-macbook-macbook-pro2024-usecase1.jpeg" },
                            { Feature: "Developers and Programmers", Specification: "Suitable for software developers who require high CPU performance and efficient multitasking capabilities.", h4image: "/blog-best-macbook-macbook-pro2024-usecase2.jpeg" },
                            { Feature: "Business Professionals", Specification: "With good battery life and strong performance, the 13-inch MacBook Pro is perfect for business professionals who need a reliable device for presentations, data analysis, and other heavy-duty work.", h4image: "/blog-best-macbook-macbook-pro2024-usecase4.jpeg",},
                            { Feature: "Users Who Need High Performance in a Compact Form Factor", Specification: "Users who need Pro-level performance but in a smaller, more portable form factor than the 16-inch model will find the 13-inch MacBook Pro to be the ideal solution.", h4image: "/blog-best-macbook-macbook-pro2024-usecase3.webp" },
                        ]
                    },
                ]
            },
            {
                title: "",
                description: "",
                sections:
                [
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
        content:
        [
            {
                title: "Overview",
                description: "The MacBook Pro 16-inch (2024) is Apple's flagship laptop, offering unparalleled performance and a stunning large display. Equipped with the latest M-series chip, it's designed for professionals who need the absolute best in mobile computing power. Its spacious screen and superior audio make it an excellent choice for creative professionals and power users.",
                showProductFeature: true,
                verticalLayout: true, // Add this line to enable the vertical layout
                sections:
                []
            },
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Recommendation for users",
                        headers: ["User Type", "Recommendation"],
                        items: [
                            { Feature: "Creative Professional", Specification: "Ideal for graphic designers, photographers, and video editors who need a high-quality display and powerful graphic performance.", h4image: "/blog-best-macbook-macbook-pro16-usecase1.jpeg" },
                            { Feature: "Developers and Programmers", Specification: "Suitable for software developers who require high CPU performance and efficient multitasking capabilities.", h4image: "/blog-best-macbook-macbook-pro16-usecase2.png" },
                            { Feature: "Business Professionals", Specification: "With good battery life and strong performance, the 13-inch MacBook Pro is perfect for business professionals who need a reliable device for presentations, data analysis, and other heavy-duty work.", h4image: "/blog-best-macbook-macbook-pro16-usecase3.jpeg" },
                            { Feature: "Users Who Need High Performance in a Compact Form Factor", Specification: "Users who need Pro-level performance but in a smaller, more portable form factor than the 16-inch model will find the 13-inch MacBook Pro to be the ideal solution.", h4image: "/blog-best-macbook-macbook-pro16-usecase4.webp" },
                        ]
                    },
                ]
            },
            {
                title: "",
                description: "",
                sections:
                [
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
        header: "Final Thoughts",
        paragraph: "Choosing the perfect camera can be overwhelming, but it doesn't have to be. By focusing on what you need and understanding the different categories—DSLR, mirrorless, compact, and medium format—you can confidently pick the right one. Whether you're after versatility, cutting-edge technology, portability, or the highest image quality possible, there's a camera out there that's just right for you. Hopefully, this guide has helped make your decision a little easier, so you can start capturing stunning images with the gear that's perfect for your journey.",
        content:
        []
    },
];


// Component to render content item
  
  export default function Detail() {
   
    const pageTitle = 'Top Cameras for Stunning Photography in 2024 | Lunogi';
    const pageDescription = 'Find the best cameras for amazing photography in 2024. Get a photography camera to produce amazing photos in the following article!';

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
                <div className="relative w-full h-[200px] lg:h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/blog-best-macbook-title.jpeg"
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
                    <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">The best MacBook in 2024<br></br>that you should buy</h1>
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

        
                <ContentSection skinCareContent={skinCareContent} />
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
        </>
    );
}