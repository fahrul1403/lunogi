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
    paragraph: "In the ever-evolving world of photography, choosing the right camera is key to capturing stunning images. 2024 brings a number of technological innovations and improvements that promise better photo quality, higher performance, and advanced features to meet a variety of photography needs. With so many options available, for both amateur and professional photographers, finding the most suitable camera can be a challenge. This article will discuss the best cameras in 2024 that can help you take photos. Whether you are an experienced photographer looking for a professional camera or a beginner looking to start your photography journey. This article will support the decisions you need to make choosing the right camera. Check out the following article to explore the best camera options that can take your photography skills to the next level and help you capture precious moments of unmatched beauty.",
    content: []
  },


    {
        header: "Best Photography Cameras in 2024",
        paragraph: "",
        content: [
        {
            title: "1. Fujifilm Instax Mini 11",
            description: "",
            price: "$69.95",
            imageSrc: "/blog-camera-recommendations-fujifilm-mini11.png",
            productLink: "https://amzn.to/3ArrLMX",
            sections: [
            {
                type: "list",
                title: "Advantages",
                items: [
                "Ease of Use: The Fujifilm Instax Mini 11 is designed for ease of use with a simple shutter button and auto selfie mode, making it ideal for beginners and users looking for an easy-to-use instant camera.",
                "Auto Selfie Lens: This camera is equipped with a selfie mode which makes it easy to take good quality self-portraits without the need for additional accessories.",
                "Compact and Stylish Design: With a sleek design and a variety of bright color options, the Instax Mini 11 is highly portable and visually appealing, perfect for taking anywhere.",
                "Auto Exposure: This camera has an auto exposure system that adjusts exposure settings automatically, producing better photos in a variety of lighting conditions.",
                "Instant Photo Results: Like other instant cameras, the Instax Mini 11 prints photos directly after shooting, providing instant gratification and the fun of sharing physical photos.",
                ],
            },
            {
                type: "list",
                title: "Disadvantages",
                items: [
                "Limited Image Quality: While instant photos have their appeal, the image quality of the Instax Mini 11 isn't as high as that of professional digital or film cameras. The resulting photo may be less sharp and have colors that are not completely accurate.",
                "Film Cost: Using instant film can be expensive when compared to digital photo storage. Instax Mini film must be purchased separately and the price can increase over time.",
                "No Manual Controls: The Instax Mini 11 has no manual control options or advanced settings, so it's not suitable for photographers who want more control over the final image.",
                "No Video Mode: This camera can only be used for photos and has no video recording feature, which may limit some users looking for a multifunctional camera.",
                ],
            },
            {
                type: "list",
                title: "Recommendations for users",
                items: [
                "Beginners and Amateur Users: The Instax Mini 11 is an excellent choice for beginners or users new to instant photography due to its ease of use and satisfactory results in automatic settings.",
                "Social Events and Parties: This camera is perfect for social events, parties and celebrations, where you can quickly print photos to keepsake and share with friends and family.",
                "Collectors and Instant Photography Enthusiasts: For collectors or instant photography enthusiasts, the Instax Mini 11 offers a fun and enjoyable experience with instant prints, ideal for adding to a physical photo collection.",
                "Side Camera for Travel: If you're looking for a portable camera to complement your main camera during travel, the Instax Mini 11 can provide an added element of fun with instant photos shared instantly.",

                ],
            },
            {
                type: "list",
                title: "",
                items: [
                "Overall, the Fujifilm Instax Mini 11 is an instant camera that combines ease of use, stylish design, and enjoyable photo results. While it has some limitations in terms of image quality and features, it remains a solid choice for anyone looking for a fun and satisfying instant photography experience.",
                ],
            },
            ]
        },
        {
            title: "2. Mafiti Kids Waterproof Digital Camera",
            description: "",
            price: "$39.99",
            imageSrc: "/blog-camera-mafti-kids.png",
            productLink: "https://amzn.to/4fJ3q5k",
            sections: [
            {
                type: "list",
                title: "Advantages",
                items: [
                "Waterproof and Shockproof: Mafiti Kids Waterproof Digital Camera is designed to be waterproof, making it ideal for outdoor use and wet activities such as swimming or playing at the beach. Additionally, the camera is also shock-resistant, perfect for children who may not always treat equipment with care",
                "Child-Friendly Design: This camera has an ergonomic design and is easy for children to hold. With large buttons and a simple interface, kids can easily operate this camera without any confusion.",
                "Creative Features and Effects: Provides a variety of fun creative features and effects, such as photo mode, video mode, and filters that can be used to make photos and videos more interesting.",
                "Sufficient Resolution: Although not as high as professional cameras, the photo and video resolution on this camera is sufficient for satisfactory results on small screen sizes or small prints.",
                "Affordable Price: This camera is relatively affordable compared to other digital cameras, making it a good choice for gifts for kids without breaking the bank.",

                ],
            },
            {
                type: "list",
                title: "Disadvantages",
                items: [
                "Limited Image Quality: Since this is a children's camera, the image and video quality may not be as high as that of an adult digital camera. The photos can be less sharp and detailed than with more expensive cameras.",
                "Limited Battery: Some users report that this camera's battery life can be limited, requiring more frequent recharging compared to more advanced cameras.",
                "Limited Features: These cameras have relatively basic features and may not offer the manual controls or more advanced settings found on adult cameras or more expensive models.",
                "Construction Quality: Although it is waterproof and shockproof, some users may feel that the construction quality is not as strong or durable as more premium digital cameras.",

                ],
            },
            {
                type: "list",
                title: "Recommendations for Users",
                items: [
                "Kids Ages 5-12: This camera is ideal for kids in this age range who want to start exploring photography and videography. The kid-friendly design and features make it a good choice to introduce them to the world of photography.",
                "Outdoor Activities: Due to its water and shock resistance, this camera is perfect for use during outdoor activities such as swimming, hiking, and playing on the beach.",
                "Gifts for Kids: If you are looking for a fun and educational gift for kids, the Mafiti Kids Waterproof Digital Camera is a good choice, giving them a tool to explore their creativity.",
                "Early Photography Experience: These cameras are also great for giving kids initial experience in photography and video recording, teaching them basic skills before they move on to more advanced equipment.",
                ],
            },
            {
                type: "list",
                title: "",
                items: [
                "Overall, the Mafiti Kids Waterproof Digital Camera offers a fun and practical solution for kids who want to start their photography adventure in a safe and durable way. Although it has some limitations in terms of image quality and features, this camera provides good value with its child-friendly design and good environmental resistance.",
                ],
            },
            ]
        },
        {
            title: "3. Panasonic LUMIX G100 4k Mirrorless Camera for Photo and Video",
            description: "",
            price: "$597.99",
            imageSrc: "/blog-camera-recommendations-lumix-g100.png",
            productLink: "https://amzn.to/4dl2eUj",
            sections: [
            {
                type: "list",
                title: "Advantages",
                items: [
                "4K Video Quality: The Panasonic LUMIX G100 offers sharp, high-quality 4K video recording, ideal for vloggers and content creators who need professional video quality.",
                "Compact and Lightweight Design: With a slim and lightweight design, this camera is easy to carry anywhere and comfortable to use, even when traveling or in active situations.",
                "OZO Audio Built-in Microphone: Equipped with Nokia's OZO audio system, which automatically optimizes sound quality by reducing background noise, resulting in clear, crisp audio in videos.",
                "Useful Vlogging Features: This camera is equipped with useful vlogging features such as a rotatable LCD screen, a dedicated 'Vlog' mode, and easy-to-access controls, making it an ideal choice for vloggers and content creators.",
                "Fast and Accurate Autofocus: The autofocus system on the LUMIX G100 is fast and accurate, helping you capture clear images and videos without much effort.",
                "Wi-Fi and Bluetooth connectivity: Enables fast transfer of photos and videos to other devices as well as remote control via mobile app, increasing flexibility and ease of content sharing.",
                ],
            },
            {
                type: "list",
                title: "Disadvantages",
                items: [
                "Photo Quality in Low Light Conditions: While it performs well in normal lighting conditions, the LUMIX G100 may be less than optimal in low light conditions, with the potential for higher noise and less sharp details.",
                "Battery Doesn't Last Long: Battery life can be a limitation, especially when shooting video for long periods of time. Users may need to carry spare batteries for longer recording sessions.",
                "Limitations in Manual Control: Although it provides some manual settings, the LUMIX G100 may lack in-depth manual control features compared to higher-end mirrorless cameras, which could limit creativity for more experienced photographers.",
                "Relatively High Price: With its many advanced features, the price of the LUMIX G100 may be higher compared to some other entry-level mirrorless cameras, which could be a consideration for users on a limited budget.",
                ],
            },
            {
                type: "list",
                title: "Recommendations for Users",
                items: [
                "Vloggers and Content Creators: The LUMIX G100 is an excellent choice for vloggers and content creators who need 4K video quality, clear audio, and convenient vlogging features.",
                "Amateur and Intermediate Photographers: This camera is also suitable for amateur and intermediate photographers who are looking for a mirrorless camera with high video quality and portability, without requiring too advanced manual control features.",
                "Frequent Users: With a compact and lightweight design, this camera is ideal for those who travel frequently and need a camera that is easy to carry without sacrificing image and video quality.",
                "Social Media Content Creator: Users who are active on social media and want to produce high-quality content quickly and easily will find the LUMIX G100 a very useful tool.",

                ],
            },
            {
                type: "list",
                title: "",
                items: [
                "Overall, the Panasonic LUMIX G100 4K Mirrorless Camera offers a powerful combination of features for video recording and photography with a portable and user-friendly design. Despite some drawbacks, especially low-light conditions and battery life, this camera remains a solid choice for vloggers, content creators, and photographers who want high performance in a compact package.",
                ],
            },
            ]
        },
        ]
    },
    {
        header: "Conclusion",
        paragraph: "By considering criteria such as image quality, features, portability, and price, you can choose the camera that best suits your photography style and specific needs. Each camera discussed in this article has advantages and disadvantages that make it stand out in its respective category, providing ideal options for different types of users, from beginners to professionals. Try the camera that suits your needs and start exploring the world of photography with the right tools to produce stunning images and unforgettable experiences.",
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
        <Image src={imageSrc} alt="Product" width={240} height={240} className="rounded-xl border-2 border-white p-10" />
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
            src="/cameras.webp"
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
            <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Top Cameras for<br></br>Stunning Photography in 2024</h1>
            <div className="flex flex-col space-y-5 w-[360px]">
                <p className="text-base font-light">
                    Find the best cameras for amazing photography in 2024. Get a photography camera to produce amazing photos in the following article!
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
                <h1 className="text-4xl font-medium text-neutral-700">{section.header}</h1>
                <p className="font-light text-lg text-neutral-700">{section.paragraph}</p>
            </div>
            {section.content.map((item, itemIndex) => (
                <ContentSection key={itemIndex} item={item} />
            ))}
            </div>
        ))}
        </div>
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
    </motion.div>
    </motion.div>
);
}