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
        paragraph: "Choosing the right MacBook can be a very difficult decision, especially with so many models available on the market. In 2024, Apple continues to innovate by releasing several increasingly good MacBook models, each equipped with the latest technology and improved features. In this article, we'll cover the various MacBook models released in 2024. Whether you're looking for a high-performance MacBook for video editing or a lightweight, portable model for everyday use. This article will give you all the information you need to choose the best MacBook in 2024.",
        content: []
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
                items: [
                "CPU (Central Processing Unit): The CPU is the brain of your MacBook. The more powerful the CPU, the faster and more efficient the MacBook will be at handling complex tasks. For heavy tasks like video editing or programming, a faster processor like the M1 Pro or M1 Max will provide better performance.",
                "GPU (Graphics Processing Unit): GPU are essential for graphics-intensive tasks such as graphic design, video editing, and gaming. A MacBook with a more powerful GPU will provide better and smoother graphics performance.",
                "RAM (Random Access Memory): RAM affects a MacBook's ability to run multiple applications at once. The more RAM, the smoother the MacBook will run heavy applications and multitask. For most users, 8GB RAM is sufficient, but for heavy tasks, 16GB or more is recommended.",
                ],
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
                items: [
                "SSD Storage capacity determines how much data and applications you can store on your MacBook. The latest MacBook models typically offer options ranging from 256GB to 2TB or more. Choose the capacity that suits your needs.",
                "SSD SSD speed affects how quickly your MacBook can access and store data. A faster SSD will speed up boot times, application launches, and file transfers.",
                ],
            },
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
        content: [
        {
            title: "1. MacBook Air 2024",
            description: "",
            price: "$999",
            imageSrc: "/blog-best-macbook-macbook-air2024.png",
            productLink: "https://amzn.to/4czQcoU",
            sections: [
            {
                type: "list",
                title: "Advantages",
                items: [
                "Thin and Light Design: The MacBook Air 2024 maintains its thin and light design, making it highly portable and easy to take anywhere.",
                "High Performance with M-Series Chip: Powered by Apple's latest M2 chip, MacBook Air offers fast and efficient performance, ideal for everyday tasks like web browsing, document editing, and media streaming.",
                "Great Battery Life: The 2024 MacBook Air offers impressive battery life, lasting up to 18 hours of normal use, making it suitable for all-day use without frequent charging.",
                "Stunning Retina Display: Retina display with True Tone technology offers sharp, clear visuals and accurate color reproduction, making for a better viewing and working experience.",
                "Magic Keyboard and Touch ID: Equipped with a Magic keyboard that is comfortable to use and Touch ID for security and easy access.",
                ],
            },
            {
                type: "list",
                title: "Disadvantages",
                items: [
                "Limited Port Selection: The MacBook Air only comes with a few USB-C/Thunderbolt ports, which may require additional adapters to connect other devices.",
                "Limited Graphics Capabilities: While it has a good GPU for everyday tasks, the MacBook Air may be less than optimal for graphics-heavy tasks like 4K video editing or intensive gaming.",
                "Limited Base Storage Capacity: Base models may have limited storage capacity (for example, 256GB), which may not be enough for users with large storage needs.",
                ],
            },
            {
                type: "list",
                title: "Recommendations for Useers",
                items: [
                "Students: With its lightweight design, long battery life, and reliable performance, the MacBook Air is perfect for students who need a portable device for studying and daily tasks",
                "Office Professional: The MacBook Air is ideal for office professionals who need a reliable laptop for administrative tasks, data processing, and communications.",
                "Everyday User: Suitable for general users who need a laptop for web browsing, watching videos, and daily application use.",
                ],
            },
            ]
        },
        {
            title: "2. MacBook Pro 13-inch (2024).",
            description: "",
            price: "$1,399",
            imageSrc: "/blog-best-macbook-macbook-pro13.webp",
            productLink: "https://amzn.to/4dKkgiw",
            sections: [
            {
                type: "list",
                title: "Advantages",
                items: [
                "High Performance with M-Series Chip: Powered by the M2 Pro or M2 Max chip, the 2024 MacBook Pro 13-inch offers much stronger performance than the MacBook Air, capable of handling demanding tasks like video editing and programming with high efficiency.",
                "Retina Display with True Tone and P3 Wide Color: The stunning Retina display with True Tone technology and P3 Wide Color color support ensures visual displays that are sharp, clear and accurate in color reproduction, ideal for creative work.",
                "Good Battery Life: Despite being more powerful, the 13-inch MacBook Pro still offers good battery life, lasting up to 17 hours of normal use.",
                "More Ports: In addition to the USB-C/Thunderbolt port, the 13-inch MacBook Pro also has an HDMI port and an SD card slot, providing more flexibility in connecting external devices.",
                "Touch Bar and Touch ID: The interactive Touch Bar provides quick access to functions, while Touch ID ensures security and ease of access."
                ],
            },
            {
                type: "list",
                title: "Disadvantages",
                items: [
                "Heavy and Thick: Slightly heavier and thicker than the MacBook Air, which may reduce portability for some users.",
                "Higher Price: With advanced features and high performance, the 13-inch MacBook Pro is priced at a higher price, which may not suit the budget of all users.",
                "Limited Upgrade Options: RAM and storage cannot be upgraded after purchase, so users need to choose the right configuration from the start.",
                ],
            },
            {
                type: "list",
                title: "Recommendations for Useers",
                items: [
                "Creative Professional: Ideal for graphic designers, photographers, and video editors who need a high-quality display and powerful graphic performance.",
                "Developers and Programmers: Suitable for software developers who require high CPU performance and efficient multitasking capabilities.",
                "Business Professionals: With good battery life and strong performance, the 13-inch MacBook Pro is perfect for business professionals who need a reliable device for presentations, data analysis, and other heavy-duty work.",
                "Users Who Need High Performance in a Compact Form Factor: Users who need Pro-level performance but in a smaller, more portable form factor than the 16-inch model will find the 13-inch MacBook Pro to be the ideal solution.",
                ],
            },
            ]
        },
        {
            title: "3. MacBook Air Pro 16-inch (2024).",
            description: "",
            price: "$2,399",
            imageSrc: "/blog-best-macbook-macbook-pro16.png",
            productLink: "https://amzn.to/3WKRPtU",
            sections: [
            {
                type: "list",
                title: "Advantages",
                items: [
                "Superior Performance with M-Series Chip: The 2024 MacBook Pro 16-inch is equipped with the M2 Pro or M2 Max chip, offering incredibly powerful performance, ideal for demanding tasks like video rendering, complex programming, and graphics-intensive work.",
                "Spacious, High-Quality 16-inch Retina Display: The large display with True Tone technology, high resolution, and P3 Wide Color support produces incredibly sharp and accurate visuals, perfect for creative work.",
                "Improved Cooling System: Improved thermal design allows the 16-inch MacBook Pro to operate at peak performance for longer without overheating.",
                "Good Battery Life: Despite its high performance and large screen, the 16-inch MacBook Pro still offers excellent battery life, able to last up to 14-16 hours of normal use.",
                "High-Quality Audio: A six-speaker speaker system with Dolby Atmos technology provides an immersive, high-quality audio experience.",
                "More Ports: Equipped with multiple USB-C/Thunderbolt ports, HDMI, SD card slot, and headphone jack, providing flexibility in connecting various external devices.",
                "Keyboard and Touch Bar: Comfortable Magic Keyboard as well as Touch Bar and Touch ID for security and quick access."
                ],
            },
            {
                type: "list",
                title: "Disadvantages",
                items: [
                "Heavy and Bulky: With a 16-inch screen and larger body, the 16-inch MacBook Pro is heavier and less portable than smaller models, which could be a drawback for users who travel frequently.",
                "High Price: As a flagship model, the 16-inch MacBook Pro is priced quite high, which may not suit all users' budgets.",
                "Limited Upgrade Options: As with other MacBook models, RAM and storage cannot be upgraded after purchase, so users need to choose the right configuration from the start.",
                ],
            },
            {
                type: "list",
                title: "Recommendations for Useers",
                items: [

                "Creative Professionals: The 16-inch MacBook Pro is ideal for graphic designers, photographers, video editors, and other creative professionals who need a large screen and powerful graphics performance.",
                "Developers and Programmers: With its large screen and superior CPU performance, the 16-inch MacBook Pro is suitable for software developers who need ample screen space and efficient multitasking capabilities",
                "Heavy Duty Professionals: Users who perform complex data analysis, 3D rendering, or other demanding tasks will find the 16-inch MacBook Pro to be a very reliable tool.",
                "Users Who Need a Superior Multimedia Experience: A high-quality audio system and large display make the 16-inch MacBook Pro ideal for multimedia content consumption, presentations, and entertainment.",
                ],
            },
            ]
        }
        ]
    },







    {
        header: "Conclusion",
        paragraph: "This article has provided information to help you find the best MacBook in 2024. choosing the right MacBook will not only increase your productivity but also provide a more satisfying experience. Choose wisely, and enjoy the technological advantages offered by the latest MacBook from Apple. (arahkan ke link lunogi)",
        content: []
    }
    ];

// Component to render content item
const ContentSection = ({ item }: { item: ContentItem }) => (
    <div>
    {/* Title */}
    <h3 className="text-2xl font-semibold mb-3 text-center">{item.title}</h3>

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
        <Image src={imageSrc} alt="Product" width={600} height={600} className="rounded-full border-2 border-white p-10" />
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
    

    const pageTitle = 'The best MacBook in 2024 that you should buy | Lunogi';
    const pageDescription = 'Choosing the right MacBook can be a very difficult decision, especially with so many models available on the market.';
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
                <div className="relative w-full h-[300px] lg:h-[500px] flex items-center justify-center text-white">
                <Image
                    src="/macbook-1.webp"
                    fill
                    className="object-cover"
                    alt="MacBook Blog Hero Image"
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