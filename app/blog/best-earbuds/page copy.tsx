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
    header: "",
    paragraph: "Audio technology is constantly evolving, finding the perfect pair of earbuds can significantly improve your audio listening experience. This article looks at the best earbuds of 2024, focusing on the top choices that excel in quality and comfort. This article will discuss the important features to consider when choosing earbuds, such as sound quality, comfort, battery life, noise cancellation, connectivity, and durability. Understanding these aspects will help you to make informed choices that will meet your needs. Overall, this article was created to help you choose the latest earbuds and choose a model that provides good audio performance and comfort, thereby making your listening experience truly enjoyable.",
    content: []
},
{
    header: "Important Factors in Choosing Top Earbuds",
    paragraph: "Choosing the right pair of earbuds can make a significant difference in your listening experience. With so many options available, it's crucial to consider several important factors to ensure you find earbuds that suit your needs perfectly. Here's a comprehensive guide to the key elements to look for when selecting top earbuds.",
    content: [
    {
        title: "1. Sound Quality",
        description: "Sound quality is arguably the most critical factor when choosing earbuds. It encompasses clarity, bass response, and overall audio performance. Good sound quality ensures that you can enjoy your music, podcasts, or calls with full fidelity and minimal distortion.",
        sections: [
            {
                type: "list",
                title: "What to Look For:",
                items: [
                "Driver Size and Type: Larger drivers and advanced technologies like balanced armature or dynamic drivers typically offer better sound quality.",
                "Frequency Response: A wider frequency range generally provides more detailed sound, from deep bass to high treble.",
                "Sound Signature: Consider whether you prefer a balanced sound, heavy bass, or enhanced treble.",
                ]
            },
        ]
        },
        {
        title: "2. Comfort and Fit",
        description: "Comfort and fit are crucial for extended listening sessions. Ill-fitting earbuds can cause discomfort or even pain, and they may not provide a proper seal, affecting sound quality",
        sections: [
            {
                type: "list",
                title: "What to Look For:",
                items: [
                "Comfort and fit are crucial for extended listening sessions. Ill-fitting earbuds can cause discomfort or even pain, and they may not provide a proper seal, affecting sound quality",
                "Ear Tip Sizes and Materials: Look for earbuds that come with multiple sizes and materials (silicone, foam) to ensure a snug and comfortable fit.",
                "Design and Ergonomics: Consider the shape of the earbuds and how they fit in your ears. Ergonomically designed earbuds often provide a better, more comfortable fit.",
                "Weight and Size: Lightweight and compact earbuds are usually more comfortable for long-term use.",
                ]
            }
            ]
        },
        {
        title: "3. Battery Life",
        description: "Battery life is essential for wireless earbuds, impacting how long you can use them between charges. Longer battery life means less frequent charging and more convenience.",
        sections: [
            {
                type: "list",
                title: "What to Look For:",
                items: [
                "Battery life is essential for wireless earbuds, impacting how long you can use them between charges. Longer battery life means less frequent charging and more convenience.",
                "Playback Time: Check the battery life for continuous playback. Many modern wireless earbuds offer 6-12 hours on a single charge.",
                "Charging Case: A charging case that extends battery life is a useful feature. Look for cases that can provide multiple additional charges.",
                "Fast Charging: Some earbuds offer fast charging features, allowing you to get a few hours of use from a short charge.",
                ]
            }
            ]
        },
        {
        title: "4. Noise Cancellation",
        description: "Noise cancellation can significantly enhance your listening experience by reducing external noise, making it easier to focus on your audio content.",
        sections: [
            {
                type: "list",
                title: "What to Look For:",
                items: [
                "Noise cancellation can significantly enhance your listening experience by reducing external noise, making it easier to focus on your audio content.",
                "Active Noise Cancellation (ANC): ANC technology uses microphones and electronic circuitry to cancel out external noise. Look for earbuds with effective ANC if you often find yourself in noisy environments.",
                "Passive Noise Isolation: Good passive noise isolation comes from the design and fit of the earbuds, which physically block outside sounds.",
                ]
            }
            ]
        },
        {
            title: "5. Connectivity",
            description: "Reliable connectivity ensures seamless pairing and stable connections between your earbuds and devices. This is especially important for wireless earbuds.",
            sections: [
                {
                    type: "list",
                    title: "What to Look For:",
                    items: [
                    "Reliable connectivity ensures seamless pairing and stable connections between your earbuds and devices. This is especially important for wireless earbuds.",
                    "Bluetooth Version: Newer Bluetooth versions (e.g., Bluetooth 5.0 and above) offer better range, stability, and energy efficiency.",
                    "Pairing Process: Easy and quick pairing processes improve the user experience. Look for earbuds with fast pairing features and compatibility with multiple devices.",
                    "Range and Stability: Consider the wireless range and stability to ensure uninterrupted audio playback.",
                    ]
                }
                ]
        },
        {
            title: "6. Durability and Build Quality",
            description: "Durability affects how well your earbuds withstand daily wear and tear, including exposure to water, sweat, and physical impacts.",
            sections: [
                {
                    type: "list",
                    title: "What to Look For:",
                    items: [
                    "Water and Sweat Resistance: Look for an IPX rating (e.g., IPX4, IPX7) that indicates resistance to water and sweat, especially if you use earbuds during workouts.",
                    "Build Materials: Quality materials like reinforced cables and robust housings contribute to overall durability.",
                    "Warranty and Support: Check the warranty and customer support options provided by the manufacturer for added peace of mind.",
                    ]
                }
                ]
        },
        {
            title: "7. Additional Features",
            description: "Additional features can enhance the functionality and convenience of your earbuds, making them more versatile and user-friendly.",
            sections: [
                {
                    type: "list",
                    title: "What to Look For:",
                    items: [
                    "Touch Controls: Touch-sensitive controls allow for easy management of playback, calls, and volume without needing to reach for your device.",
                    "Voice Assistant Integration: Integration with voice assistants (e.g., Siri, Google Assistant) adds convenience for hands-free control.",
                    "Customizable Sound: Some earbuds offer customizable sound profiles or equalizers to tailor the audio experience to your preferences.",
                    "By carefullly considering these factors, you can make an informed decision and choose earbuds that deliver exceptiona sound quality, comfort, and functionality. Whether you're looking for earbuds for everyday use, workouts, or travel, focusing on these important aspects will help you find the perfect pair to suit your needs."
                    ]
                }
                ]
        }
        ]
    },




    {
        header: "Top Earbuds of 2024",
        paragraph: "As technology continues to advance, 2024 brings an array of high-quality earbuds that offer exceptional sound, comfort, and innovative features. Here are the top recommendations for the best earbuds of 2024, catering to different preferences and budgets.As technology continues to advance, 2024 brings an array of high-quality earbuds that offer exceptional sound, comfort, and innovative features. Here are the top recommendations for the best earbuds of 2024, catering to different preferences and budgets.",
        content: [
        {
            title: "1. Sony WF-1000XM5",
            imageSrc:"/blog-best-earbuds2024-sony-wf1000xm5.png",
            price: "$200",
            productLink:"https://amzn.to/3M4ne5F",
            description: "The Sony WF-1000XM5 earbuds are renowned for their superior noise-cancelling capabilities, offering a truly immersive audio experience. With dynamic drivers and advanced noise-cancelling algorithms, they deliver crisp sound with deep bass and clear highs. Their ergonomic design ensures a comfortable fit for extended use.",
            sections: [
            {
                type: "table",
                title: "Key Features",
                headers: ["Key Features"],
                items: [
                { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Exceptional audio performance with dynamic drivers." },
                { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Industry-leading active noise cancellation (ANC)." },
                { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Up to 8 hours of playback on a single charge, with an additional 16 hours provided by the charging case" },
                { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Ergonomic design with multiple ear tip sizes." },
                { Feature: "<span class='font-semibold italic'>Price Range</span>", Specification: "$280 - $320." },
                ],
            },
            {
                type: "list",
                title: "Pros",
                items: [
                "Excellent sound quality",
                ],
            },
            {
                type: "list",
                title: "Cons",
                items: [
                "premium price",
                ],
            },
            ]
        },
        {
            title: "2. Apple AirPods Pro (2nd Generation)",
            description: "Apple's AirPods Pro (2nd Generation) are a perfect blend of quality and convenience, featuring improved ANC and a transparency mode for better situational awareness. The H2 chip enhances sound quality and connectivity, while the customizable fit ensures comfort for long listening sessions.",
            price: "$150",
            productLink:"https://amzn.to/3M4ne5F",
            imageSrc:"/blog-best-earbuds2024-apple-airpods-pro2.png",
            sections: [
            {
                type: "table",
                title: "Key Features",
                headers: ["Key Features"],
                items: [
                { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Enhanced audio with adaptive EQ and spatial audio." },
                { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Improved ANC with transparency mode." },
                { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Up to 6 hours of continuous use, with an additional 24 hours from the MagSafe charging case." },
                { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Customizable fit with multiple ear tips." },
                { Feature: "<span class='font-semibold italic'>Price Range</span>", Specification: "$250 - $280." },
                ],
            },
            {
                type: "list",
                title: "Pros",
                items: [
                "Seamless integration with Apple devices, excellent ANC, comfortable fit.",
                ],
            },
            {
                type: "list",
                title: "Cons",
                items: [
                "Limited compatibility with devices outside Apple's ecosystem.",
                ],
            },
            ]
        },
        {
            title: "3. Bose QuietComfort Earbuds II",
            description: "Bose QuietComfort Earbuds II are designed for audiophiles seeking top-tier noise cancellation and sound quality. These earbuds provide a balanced audio profile with deep bass and clear highs, making them ideal for various music genres. Their comfortable fit ensures they stay secure during any activity.",
            price: "$168",
            productLink:"https://amzn.to/3M4glRV",
            imageSrc:"/blog-best-earbuds2024-bose-quietcomfort2.png",
            sections: [
            {
                type: "table",
                title: "Key Features",
                headers: ["Key Features"],
                items: [
                { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Balanced audio with rich bass." },
                { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Advanced ANC with adjustable levels." },
                { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "6 hours per charge, with an additional 18 hours from the case." },
                { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Secure and comfortable fit with StayHear Max tips." },
                { Feature: "<span class='font-semibold italic'>Price Range</span>", Specification: "$280 - $320." },
                ],
            },
            {
                type: "list",
                title: "Pros",
                items: [
                "Superior sound quality, excellent ANC, comfortable for extended wear.",
                ],
            },
            {
                type: "list",
                title: "Cons",
                items: [
                "Bulky charging case.",
                ],
            },
            ]
        },
        {
            title: "4. Samsung Galaxy Buds Pro 2",
            description: "The Samsung Galaxy Buds Pro 2 offer a premium audio experience with 2-way speakers and AKG tuning. Their ANC and ambient sound features provide versatile listening options, while the sleek design ensures a comfortable fit. They are also IPX7-rated for water resistance, making them suitable for workouts.",
            price: "$103",
            productLink:"https://amzn.to/3YQNGr7",
            imageSrc:"/blog-best-earbuds2024-galaxybuds-pro2.png",
            sections: [
            {
                type: "table",
                title: "Key Features",
                headers: ["Key Features"],
                items: [
                { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "High-resolution audio with AKG tuning." },
                { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Effective ANC with ambient sound mode." },
                { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "8 hours of playback, with an additional 20 hours from the charging case." },
                { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Ergonomic design with secure fit." },
                { Feature: "<span class='font-semibold italic'>Price Range</span>", Specification: "$200 - $240." },
                ],
            },
            {
                type: "list",
                title: "Pros",
                items: [
                "High-quality sound, water-resistant, comfortable fit.",
                ],
            },
            {
                type: "list",
                title: "Cons",
                items: [
                "ANC not as strong as some competitors.",
                ],
            },
            ]
        },
        {
            title: "5. Jabra Elite 85t",
            description: "The Jabra Elite 85t earbuds are known for their customizable sound and durable build. With advanced ANC and HearThrough technology, they provide a balanced listening experience. Their compact design and long battery life make them an excellent choice for everyday use.",
            price: "unavailable",
            productLink:"https://amzn.to/46KaMBz",
            imageSrc:"/blog-best-earbuds2024-jabra-elite85t.png",
            sections: [
            {
                type: "table",
                title: "Key Features",
                headers: ["Key Features"],
                items: [
                { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Customizable sound with Jabra Sound+ app" },
                { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Advanced ANC with adjustable levels." },
                { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: " 7 hours of use per charge, with an additional 21 hours from the case." },
                { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Compact and comfortable with multiple ear tips." },
                { Feature: "<span class='font-semibold italic'>Price Range</span>", Specification: "$180 - $220." },
                ],
            },
            {
                type: "list",
                title: "Pros",
                items: [
                "Customizable sound, durable, comfortable.",
                ],
            },
            {
                type: "list",
                title: "Cons",
                items: [
                "Slightly larger than other earbuds.",
                ],
            },
            ]
        },
        ]
    },
    
    {
        header: "Conclusion",
        paragraph: "The best earbuds of 2024 offer a combination of exceptional sound quality, advanced noise cancellation, and superior comfort to suit a variety of preferences and needs. From the premium Sony WF-1000XM5 with industry-leading noise-canceling capabilities to the budget-friendly Jabra Elite 85t with customizable sound options, there's a perfect pair for everyone. Whether you're an audiophile looking for top-tier audio performance or a casual listener looking for reliable and comfortable earbuds. By carefully considering key things like sound quality, battery life, comfort, and additional features, you can choose the earbuds that best suit your lifestyle and enhance your listening experience. As technology continues to evolve, these top picks ensure you stay at the forefront of audio innovation in 2024.",
        content: []
    }
    ];

// Component to render content item
const ContentSection = ({ item }: { item: ContentItem }) => (
    <div>
    {/* Title */}
    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

    {/* Title Image (if available) */}
    {item.titleImage && (
    <div className="my-5">
        <Image
        src={item.titleImage}
        alt={item.title}
        width={800}
        height={400}
        className="w-1/2 object-cover rounded-lg"
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
            {section.title === "Pros" || section.title === "Cons" ? (
                <ul className="list-none mb-5">
                {(section.items as Array<string>).map((listItem, index) => (
                    <li className="my-5 flex items-start" key={index}>
                    <span className="mr-2 mt-1">
                        {section.title === "Pros" ? (
                        <TbPlus className="text-green-500" />
                        ) : section.title === "Cons" ? (
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
        <Image 
        src={imageSrc} 
        alt="Product" 
        width={300} 
        height={300} 
        className="rounded-xl border-2 border-white p-5"
        />
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
            src="/earbuds.webp"
            fill
            className="object-cover"
            alt="Camera Blog Hero Image"
            loading="eager"
        />

        <div className="relative z-10 flex flex-col space-y-6 items-start w-full px-7 lg:px-[156px] lg:py-[160px]">
            <Link href={'/blog'} className="flex flex-row space-x-2">s
            <TbArrowLeft className="size-5 text-white" />
            <p className="font-light text-base">Back to article list</p>
            </Link>
            <div className="flex flex-row justify-between w-full">
            <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Best Earbuds 2024:<br></br>Top Picks for Quality and Comfort</h1>
            <div className="flex flex-col space-y-5 w-[360px]">
                <p className="text-base font-light">
                Discover the best earbuds of 2024 with your top picks. Get quality earbuds and extraordinary sound comfort in this article!
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
                {/* Add ToggleButton here */}
                {section.price && section.imageSrc && section.productLink && (
                    <ToggleButton 
                    price={section.price} 
                    imageSrc={section.imageSrc} 
                    productLink={section.productLink} 
                    />
                )}
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
    );
}