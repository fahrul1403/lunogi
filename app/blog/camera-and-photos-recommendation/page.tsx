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
const skinCareContent: Section[] =

[
    {
        header: "",
        paragraph: "Choosing a camera can feel like standing in a candy store, surrounded by endless options, each one seemingly better than the last. But don't worry—I'm here to help you sort through the choices and find the perfect camera that suits your style, needs, and vision. Whether you're just getting started or have been capturing moments for years, understanding the key categories—DSLR, mirrorless, compact, and medium format—will make the decision-making process a lot smoother. Let's take a leisurely stroll through the camera world and see which one feels just right for you.",
        content:
        []
    },
    {
        header: "1. DSLR Cameras",
        paragraph: "Let’s start with the classics: DSLRs. These are the reliable workhorses of the camera world. If you’re caught between the Canon EOS 5D Mark IV and the Nikon D850, you’re in good company—many photographers have faced the same dilemma.",
        content:
        [
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Canon EOS 5D Mark IV</span>", 
                            Specification: "The Canon EOS 5D Mark IV is like that trusty Swiss Army knife: versatile and ready for anything. It’s a go-to for wedding photographers and videographers who need a camera that can perform well in various situations, especially in low light.",
                            h4image: "/blog-ultimate-camera-guide-canon-eos5d.png",
                            price: "$2,499",
                            purchaseLink: "https://amzn.to/3Z7MbVB"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Nikon D850</span>", 
                            Specification: "On the other hand, the Nikon D850 is the camera you turn to when you need every single pixel to count. It’s perfect for landscape and studio photography, where detail is king, and its rugged build makes it a great companion for outdoor shoots.",
                            h4image: "/blog-ultimate-camera-guide-Nikon-d850.jpeg",
                            price: "$1,999",
                            purchaseLink: "https://amzn.to/4cQhF5y"
                            },
                        ],
                    },
                ]
            },
            {
                title: "Key Differences",
                description: "",
                sections:
                [
                    {
                        type: "comparison-table",
                        headers: ["Canon EOS 5D Mark IV","Nikon D850"],
                        items: [
                        { category: "Megapixels", values: ["30.4 MP", "45.7 MP"] },
                        { category: "ISO Range", values: ["100-32000 (expandable to 50-102,400)", "64-25600 (expandable to 32-102,400)"] },
                        { category: "Autofocus Points", values: ["61 (41 cross-type)", "153 (99 cross-type)"] },
                        { category: "Continuous Shooting", values: ["7 fps ", "7 fps (9 fps with battery grip)"] },
                        { category: "Video Resolution", values: ["4K DCI (4096 x 2160)", "4K UHD (3840 x 2160)"] },
                        { category: "LCD Screen", values: ["Fixed, touch-enabled", "Tilting, touch-enabled"] },
                        { category: "Battery Life", values: ["900 shots", "1,840 shots"] },
                        { category: "Build Quality", values: ["Weather-sealed, sturdy", "Weather-sealed, rugged"] },
                        { category: "Special Features", values: ["Dual Pixel CMOS AF, built-in GPS", "Backlit buttons, focus shift, 8K time-lapse"] },
                        ],
                    },
                ]
            },
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "In a nutshell",
                        h3middleimage: true,
                        items: [
                            "if your photography leans toward capturing stunning landscapes or intricate studio work, the <b>Nikon D850</b> with its high resolution and longer battery life might just become your new best friend. But if you’re looking for a camera that’s versatile, especially for video, the <b>Canon EOS 5D Mark IV</b> could be your match. Both are exceptional, so think about what you value most in your photography journey."
                        ],
                    },
                ]
            },
        ]
    },





    {
        header: "2. Mirrorless Cameras",
        paragraph: "Next, let’s move into the future with mirrorless cameras. These sleek machines are like the tech-forward cousins of DSLRs, packing advanced features in a more compact body. If you’re considering the Sony A7R V, Canon EOS R6 Mark II, or Nikon Z9, you’re in for a treat.",
        content:
        [
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Sony A7R V</span>", 
                            Specification: "The Sony A7R V is a dream for detail-oriented photographers. Its high resolution and AI-driven features make it a top choice for landscape or studio work.",
                            h4image: "/blog-ultimate-camera-guide-sony-a7rv.jpeg",
                            price: "$2,499",
                            purchaseLink: "https://amzn.to/3XaLCrb "
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Canon EOS R6 Mark II</span>", 
                            Specification: "Meanwhile, the Canon EOS R6 Mark II is all about balance—speed, versatility, and excellent performance across different scenarios, especially in action or wildlife photography.",
                            h4image: "/blog-ultimate-camera-guide-canon-eosr6.jpeg",
                            price: "$1,999",
                            purchaseLink: "https://amzn.to/4e78dMh"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Nikon Z9</span>", 
                            Specification: "And then there’s the Nikon Z9, the powerhouse of the group, designed for professionals who need speed, durability, and top-tier video capabilities.",
                            h4image: "/blog-ultimate-camera-guide-nikon-z9.png",
                            price: "$1,999",
                            purchaseLink: "https://amzn.to/3XaLKqF"
                            },
                        ],
                    },
                ]
            },
            {
                title: "Key Differences",
                description: "",
                sections:
                [
                    {
                        type: "comparison-table",
                        headers: ["Sony A7R V", "Canon EOS R6 Mark II", "Nikon Z9"],
                        items: [
                        { category: "Megapixels", values: ["61 MP", "24.2 MP", "45.7 MP"] },
                        { category: "ISO Range", values: ["100-32,000 (expandable to 50-102,400)", "100-102,400 (expandable to 204,800)", "64-25,600 (expandable to 32-102,400)"] },
                        { category: "Continuous Shooting", values: ["10 fps", "12 fps (40 fps with electronic shutter)", "20-30 fps (120 fps at 11 MP)"]  },
                        { category: "Video Resolution", values: ["8K at 24p/25p, 4K at 60p", "4K at 60p", "8K at 30p, 4K at 120p"]  },
                        { category: "Image Stabilization", values: ["Digital", "5-Axis Sensor-Shift", "Dual (Sensor-Shift and Optical)"] },
                        { category: "Battery Life", values: ["530 shots", "580 shots", "1,840 shots"]  },
                        { category: "Special Features", values: ["AI-driven autofocus, high-res EVF", "Dual Pixel CMOS AF II, excellent low-light AF", "Subject detection for various objects"]  },
                        { category: "Weight", values: ["723g", "680g", "1.34 kg"]  },
                        { category: "Build Quality", values: ["Weather-sealed, compact", "Weather-sealed, robust", "Rugged, professional-grade build"]  },
                        ],
                    },
                ]
            },
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "Your choice here will depend on your style",
                        h3middleimage: true,
                        items: [
                            "If capturing those breathtaking details is your thing, go for the <b>Sony A7R V</b>. If you’re all about speed and versatility, especially with fast-moving subjects, the <b>Canon EOS R6 Mark II</b> will serve you well. And if you’re looking for professional-level performance with unmatched power, the <b>Nikon Z9</b> is your go-to."
                        ],
                    },
                ]
            },

        ]
    },


    {
        header: "3. Compact Cameras",
        paragraph: "Now, let’s get portable with compact cameras. These little powerhouses are perfect for photographers who want something easy to carry without sacrificing too much on quality. The Sony RX100 VII and Canon PowerShot G7 X Mark III are both fantastic options, but they each have their own strengths.",
        content:
        [
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Sony RX100 VII</span>", 
                            Specification: "The Sony RX100 VII is a traveler’s dream with its longer zoom range and fast shooting speeds. Plus, it comes with an electronic viewfinder, which is a big bonus if you like having that extra bit of control. ",
                            h4image: "/blog-ultimate-camera-guide-sony-rx100.png",
                            price: "$2,499",
                            purchaseLink: "https://amzn.to/4e932v9"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Canon PowerShot G7 X Mark III</span>", 
                            Specification: "On the flip side, the Canon PowerShot G7 X Mark III shines in low-light situations thanks to its brighter lens. It’s also slightly more affordable, making it a great option if you’re looking for quality on a budget.",
                            h4image: "/blog-ultimate-camera-guide-canon-powershot-g7.jpeg",
                            price: "$1,999",
                            purchaseLink: "https://amzn.to/3AQgWnN"
                            },
                        ],
                    },
                ]
            },
            {
                title: "Key Differences",
                description: "",
                sections:
                [
                    {
                        type: "comparison-table",
                        headers: ["Sony RX100 VII", "Canon PowerShot G7 X Mark III"],
                        items: [
                        { category: "Megapixels", values: ["20 MP", "20 MP"] },
                        { category: "Lens", values: ["24-200mm f/2.8-4.5", "24-100mm f/1.8-2.8"] },
                        { category: "ISO Range", values: ["80-25,600", "125-25,600"]  },
                        { category: "Continuous Shooting Speed", values: ["90 fps", "30 fps"]  },
                        { category: "Viewfinder", values: ["Yes (Electronic, 2359k dots)", "No (LCD framing only)"]  },
                        { category: "LCD Screen Resolution", values: ["921k dots", "1040k dots"] },
                        { category: "Battery Life", values: ["260 shots per charge", "235 shots per charge"]  },
                        { category: "Video Resolution", values: ["4K/30p, 1080p/120p", "4K/30p, 1080p/60p"]  },
                        { category: "USB Port", values: ["USB 2.0", "USB 3.1"]  },
                        { category: "Size & Weight", values: ["102 x 58 x 43 mm, 302g", "105 x 61 x 41 mm, 304g"]  },
                        ],
                    },
                ]
            },
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "So, what’s your pick?",
                        h3middleimage: true,
                        items: [
                            "If you need a longer zoom and fast shooting in a small package, <b>the Sony RX100</b> VII is your best bet. But if you’re after brighter low-light shots and a slightly higher resolution screen, <b>the Canon PowerShot G7 X Mark III</b> might just be the one for you."
                        ],
                    },
                ]
            },
        ]
    },

    {
        header: "4. Medium Format Cameras",
        paragraph: "Finally, let’s talk about the big guns—medium format cameras. These are for those who crave the ultimate in image quality, where every detail matters. <b>The Fujifilm GFX 100S</b> and <b>Hasselblad X2D 100C</b> are two standout options.<br></br>So, what makes medium format cameras so special? It’s all about the sensor size. These cameras have larger sensors than standard full-frame cameras, which means they can capture more detail, richer color, and better dynamic range. If you’re looking to create images that can be blown up to massive sizes without losing quality, medium format is where it’s at.",
        content:
        [
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Fujifilm GFX 100S</span>", 
                            Specification: "The Fujifilm GFX 100S is the versatile all-rounder, ideal if you need a camera that can handle both photography and videography. It’s packed with advanced autofocus and stabilization features, making it a practical choice for many professionals.",
                            h4image: "/blog-ultimate-camera-guide-fujifilm-gfx100s.jpeg",
                            price: "$2,499",
                            purchaseLink: "https://amzn.to/47aJO6g "
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Hasselblad X2D II</span>", 
                            Specification: "On the other hand, the Hasselblad X2D 100C is all about the experience. If you’re drawn to the art of image-making and love Hasselblad’s legendary color science, this camera could be the one that steals your heart",
                            h4image: "/blog-ultimate-camera-guide-hasselblad-x2d100c.png",
                            price: "$1,999",
                            purchaseLink: "https://amzn.to/47bXWw6 "
                            },
                        ],
                    },
                ]
            },
            {
                title: "Key Differences",
                description: "",
                sections:
                [
                    {
                        type: "comparison-table",
                        headers: ["Fujifilm GFX 100S", "Hasselblad X2D 100C"],
                        items: [
                        { category: "Sensor", values: ["102MP Medium Format CMOS", "102MP Medium Format CMOS"] },
                        { category: "ISO Range", values: ["100 - 12,800 (expandable to 50 - 102,400)", "64 - 25,600"] },
                        { category: "Image Stabilization", values: ["5-Axis IBIS, 8 stops", "5-Axis IBIS, 7 stops"]  },
                        { category: "Autofocus", values: ["Hybrid AF, AI subject detection", "Phase Detect AF"]  },
                        { category: "Continuous Shooting", values: ["7 fps", "3.3 fps"]  },
                        { category: "Video Capability", values: ["4K/30p", "No Video"] },
                        { category: "Viewfinder", values: ["5.76M-dot EVF", "5.76M-dot EVF"]  },
                        { category: "LCD Screen", values: ["3.2-inch, 2.36M dots, fully flexible", "3.6-inch, 2.36M dots, tilting"]  },
                        { category: "Battery Life", values: ["530 shots per charge", "420 shots per charge"]  },
                        { category: "Weight", values: ["883g", "895g"]  },
                        ],
                    },
                ]
            },
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "In the end",
                        h3middleimage: true,
                        items: [
                            "It comes down to what you value more. If you need versatility and cutting-edge features, <b>the Fujifilm GFX 100S</b> is the way to go. But if you’re after a refined, artistic photography experience, the <b>Hasselblad X2D 100C</b> might just be the perfect fit."
                        ],
                    },
                ]
            },
        ]
    },
    
    {
        header: "Final Thoughts",
        paragraph: "Choosing the perfect camera can be overwhelming, but it doesn’t have to be. By focusing on what you need and understanding the different categories—DSLR, mirrorless, compact, and medium format—you can confidently pick the right one. Whether you’re after versatility, cutting-edge technology, portability, or the highest image quality possible, there’s a camera out there that’s just right for you. Hopefully, this guide has helped make your decision a little easier, so you can start capturing stunning images with the gear that’s perfect for your journey.",
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
                    <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Ultimate Camera Guide 2024: Pick Your Perfect Match<br></br>– DSLR, Mirrorless, Compact, and Medium Format.
                    </h1>
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