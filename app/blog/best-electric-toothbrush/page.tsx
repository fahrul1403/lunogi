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
const skinCareContent: Section[] = [
    {
        header: "Introduction",
        paragraph: "Ever had your toothbrush quit on you mid-brush? So annoying, right? We’ve all been there, stuck with a half-clean mouth. If you’re fed up with that, you’re in the right place. Imagine a toothbrush that gives you that fresh-from-the-dentist feel and hardly ever needs recharging. Sounds awesome, right? It’s totally doable. In this guide, we’ll check out electric toothbrushes with outstanding battery life that fit seamlessly into your routine. But before we jump in, let’s quickly chat about what powers these brushes. Most run on lithium-ion batteries; they last longer and charge faster than the old ones. How often you brush and use features like pressure sensors can also impact battery life. Plus, smart charging habits like fully charging it before first use and not overcharging can keep your brush running smoothly.",
        content:
        [
        ]
    },
    {
        header: "Top Picks for Long-Lasting Rechargeable Toothbrushes",
        paragraph: "",
        content:
        [
        ]
    },
    {
        header: "1. Philips Sonicare DiamondClean Smart 9700",
        paragraph: "",
        price: "$319.99--339.96", // Added price for the product
        imageSrc: "/blog-best-electric-toothbrush-philips-sonicare.jpeg", // Add this line
        productLink: "https://amzn.to/3X84Yi3",
        content: [
            {
                title: "",
                description: "",
                showProductFeature: true, // Product feature will be shown here
                imageAbove:true,
                sections: []
            },
            {
                title: "Battery Life and Performance",
                description: "This toothbrush is a total champ when it comes to battery life, lasting up to three weeks on a single charge. It’s perfect for anyone who’s always on the go because you won’t need to worry about recharging all the time. Plus, it comes with a sleek charging glass and a USB travel case, so you’re all set wherever you are.",
                h2image:"/blog-best-electric-toothbrush-philips-sonicare2.jpeg",
                sections:
                [
                ]
            },
            {
                title: "Cool Features",
                description: "The Philips Sonicare DiamondClean Smart 9700 isn’t just about battery life. It also offers five different cleaning modes and three intensity settings, so you can tailor your brushing experience. Smart sensors give you real-time feedback to ensure you’re brushing just right. And with automatic brush head pairing, it’s super easy to use—no guessing involved.",
                h2image:"/blog-best-electric-toothbrush-philips-sonicare3.jpeg",
                imagePosition:"right",
                sections:
                [
                ]
            },
        ]
    },
    {
        header: "2. Oral-B Genius X 10000",
        paragraph: "",
        price: "$199.99",
        imageSrc: "/blog-best-electric-toothbrush-oralb-geniusx.jpeg",
        productLink: "https://amzn.to/3AzG4iE",
        content:
        [
            {
                title: "",
                description: "",
                showProductFeature: true, // Product feature will be shown here
                imageAbove:true,
                sections: []
            },
            {
                title: "Battery Life and Performance",
                description: "TThe Oral-B Genius X 10000 gives you up to 14 days of battery life on a single charge. One of the coolest things is the USB charging travel case, which not only powers up your toothbrush but can also charge your phone. Pretty handy, right?",
                sections: []
            },
            {
                title: "Cool Features",
                description: "This toothbrush comes with AI technology that acts like a personal brushing coach. It learns your brushing habits and gives you tips on how to improve. Plus, with six different brushing modes, you can switch things up depending on what your teeth and gums need. It’s packed with smart tech like Bluetooth connectivity and motion sensors, making it really interactive.",
                h2image:"/blog-best-electric-toothbrush-oralb-geniusx2.jpeg",
                h2middleimage:true,
                sections: []
            },
        ]
    },
    {
        header: "3. Waterpik Sonic-Fusion Professional",
        paragraph: "",
        price: "$179.99",
        imageSrc: "/blog-best-electric-toothbrush-waterpik-sonic-fusion.jpeg",
        productLink: "https://amzn.to/46Rx3NS",
        content:
        [
            {
                title: "",
                description: "",
                showProductFeature: true, // Product feature will be shown here
                imageAbove:true,
                sections: []
            },
            {
                title: "Battery Life and Performance",
                description: "The Waterpik Sonic-Fusion Professional is a bit different because it’s a corded device, so it’s always ready to go. But don’t worry—it comes with a detachable toothbrush that uses a lithium-ion battery, so you can still take it with you when you travel.",
                sections: []
            },
            {
                title: "Cool Features",
                description: "The standout feature here is that it’s a 2-in-1 device, meaning you can brush and floss at the same time! It has three cleaning modes and 10 water pressure settings, so you can customize your routine. Plus, it’s ADA-accepted, so you know it’s safe and effective.",
                h2image:"/blog-best-electric-toothbrush-waterpik-sonic-fusion2.jpeg",
                h2middleimage:true,
                sections: []
            },
        ]
    },

    {
        header: "What Do Dentists Say?",
        paragraph: "Dentists often have their favorites depending on your specific needs. Here’s a quick comparison of the top features that dentists consider when recommending these toothbrushes",
        content:
        [
            {
                title: "Battery Life",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Battery Life",
                        headers: ["Battery Life"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "Long-lasting, charging glass, USB travel case" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "14 days on a single charge, USB charging travel case" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "Corded electric, always ready, detachable toothbrush with lithium-ion battery" },
                        ],
                    },
                ],
            },
            {
                title: "Power Source",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Power Source",
                        headers: ["Power Source"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "Corded Electric" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "Li-ion Battery" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "Corded Electric" },
                        ],
                    },
                ],
            },
            {
                title: "Special Feature",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Special Feature",
                        headers: ["Special Feature"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "Pressure Sensor, Brushing Timer, Rechargeable, Lightweight, Ergonomic" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "Artificial Intelligence, Gum Protection Technology, Position Detection" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "2-in-1 device (brushes and flosses)" },
                        ],
                    },
                ],
            },
            {
                title: "Product Benefits",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Product Benefits",
                        headers: ["Product Benefits"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "Removes up to 10x more plaque, improves gum health up to 7x in 2 weeks, removes up to 100% more stains in 3 days" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "Covers all areas evenly, applies the right pressure, improves gum health" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "Prevents cavities, removes plaque, ADA accepted for safety and effectiveness, improves gum health" },
                        ],
                    },
                ],
            },
            {
                title: "Brushing modes",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Brushing modes",
                        headers: ["Brushing modes"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "5 modes: Clean, White-plus, Deep Clean-plus, Gum Health, TongueCare" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "6 modes: Gum Care, Whitening, Deep Clean, Sensitive, Tongue Clean, Daily Clean" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "3 modes: Brush, Floss, Brush + Floss" },
                        ],
                    },
                ],
            },
            {
                title: "Smart Technology",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Smart Technology",
                        headers: ["Smart Technology"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "Smart sensors, real-time feedback, automatic brush head pairing" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "AI brushing coach, motion sensors, Bluetooth connectivity, 360° SmartRing, pressure sensor" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "Advanced water pressure control with 10 settings, LED mode indicator" },
                        ],
                    },
                ],
            },
            {
                title: "Included Accessories",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Included Accessories",
                        headers: ["Included Accessories"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "8 brush heads, charging glass, premium travel case, wall plug" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "7 brush heads, charger, USB charging travel case" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "2 flossing brush heads, 16 oz water reservoir, toothbrush travel case, magnetic brush head storage post" },
                        ],
                    },
                ],
            },
            {
                title: "Dentist Recommendation",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "Dentist Recommendation",
                        headers: ["Dentist Recommendation"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Philips Sonicare DiamondClean Smart 9700</span>", Specification: "ADA-accepted, recommended by dentists" },
                            { Feature: "<span class='font-semibold italic'>Oral-B Genius X 10000</span>", Specification: "ADA-accepted, recommended by dentists" },
                            { Feature: "<span class='font-semibold italic'>Waterpik Sonic-Fusion Professional</span>", Specification:  "ADA-accepted, recommended by dentists" },
                        ],
                    },
                ],
            },
            {
                title: "",
                description: "Each of these toothbrushes brings something special to the table. Whether you prioritize battery life, advanced features, or a multitasking tool that combines brushing and flossing, there’s a toothbrush here that can fit your needs.",
                sections:
                [
                ]
            },
        ]
    },
    {
        header: "Other Things to Consider ",
        paragraph: "When choosing your toothbrush, keep these in mind:",
        content: [
            {
                title: "1. Cost vs. Longevity",
                description: "The Philips Sonicare DiamondClean Smart 9700 is on the pricier side at $339.96, but with all its features and long battery life, it could be worth the splurge. On the other hand, the Oral-B Genius X 10000 and Waterpik Sonic-Fusion Professional, both priced at $179.99, offer great value with their unique features.",
                sections: []
            },
            {
                title: "2. Ease of Use and Maintenance",
                description: "All three toothbrushes are designed to be user-friendly, but each has its quirks. For example, the apps for the Philips and Oral-B models can sometimes have connectivity issues, while the Waterpik Sonic-Fusion might take a bit of practice to master without making a mess.",
                sections: []
            },
            {
                title: "3. Warranty and Customer Support",
                description: "It’s always good to know what kind of warranty and customer support you’re getting. The Waterpik Sonic-Fusion Professional comes with a generous 3-year warranty, which is a big plus if you’re investing in a device that does so much.",
                sections: []
            }
        ]
    },
    {
        header: "Wrapping it Up",
        paragraph: "So, there you have it—the Philips Sonicare DiamondClean Smart 9700, Oral-B Genius X 10000, and Waterpik Sonic-Fusion Professional are all fantastic choices if you’re looking for a long-lasting rechargeable toothbrush. If you want the best bang for your buck, go with the Oral-B Genius X 10000. It offers all the smart features you need at a reasonable price. But if you’re ready to splurge on some cutting-edge tech, the Philips Sonicare DiamondClean Smart 9700 won’t disappoint. And if you love a good multitasking tool, the Waterpik Sonic-Fusion Professional is definitely worth a look. Ready to up your brushing game? Pick the toothbrush that fits your lifestyle and get ready for a brighter, healthier smile!",
        content: [
            {
                title: "",
                description: "",
                sections: []
            }
        ]
    }
];
// Component to render content item
export default function Detail() {
    

    const pageTitle = 'the best electric toothbrush recommend by dentists | Lunogi';
    const pageDescription = "the best electric toothbrush recommend by dentists"
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
                src="/blog-best-electric-toothbrush-cover.jpeg"
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
                <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">What is the best electric toothbrush<br></br>dentist recommend and best clean?</h1>
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