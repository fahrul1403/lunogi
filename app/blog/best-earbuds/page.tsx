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
    type: 'table' | 'list' | 'flex';
    title?: string;
    headers?: string[];
    items: Array<{ Feature: string; Specification: string; h4image?: string;}> | Array<string> | Array<{ title: string; list: string[];  h4image?: string}>;
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
// Define content
const skinCareContent: Section[] =

[
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
    paragraph: "As technology continues to advance, 2024 brings an array of high-quality earbuds that offer exceptional sound, comfort, and innovative features. Here are the top recommendations for the best earbuds of 2024, catering to different preferences and budgets.",
    content: []
},
{
    header: "1. Sony WF-1000XM5",
    paragraph: "",
    price: "$280 - $320",
    imageSrc: "/blog-best-earbuds2024-sony-wf1000xm5.png",
    productLink: "https://amzn.to/3M4ne5F",
    content: [
    {
        title: "Overview",
        description: "The Sony WF-1000XM5 earbuds are renowned for their superior noise-cancelling capabilities, offering a truly immersive audio experience. With dynamic drivers and advanced noise-cancelling algorithms, they deliver crisp sound with deep bass and clear highs. Their ergonomic design ensures a comfortable fit for extended use.",
        showProductFeature: true,
        sections: []
    },
    {
        title: "Key Features",
        description: "",
        sections: [
        {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Exceptional audio performance with dynamic drivers." },
            { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Industry-leading active noise cancellation (ANC)." },
            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Up to 8 hours of playback on a single charge, with an additional 16 hours provided by the charging case" },
            { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Ergonomic design with multiple ear tip sizes." },
            ],
        },
        ]
    },
    {
        title: "",
        description: "",
        sections: [
        {
            type: "flex",
            items: [
            {
                title: "Cons",
                list: [
                "Premium price",
                ]
            },
            {
                title: "Pros",
                list: [
                "Excellent sound quality",
                "Industry-leading noise cancellation",
                "Comfortable fit for extended use",
                "Long battery life with charging case",
                ]
            }
            ]
        }
        ]
    },
    ]
},
{
    header: "2. Apple AirPods Pro (2nd Generation)",
    paragraph: "",
    price:  "$250 - $280",
    imageSrc: "/blog-best-earbuds2024-apple-airpods-pro2.png",
    productLink: "https://amzn.to/3M4ne5F",
    content: [
    {
        title: "Overview",
        description: "Apple's AirPods Pro (2nd Generation) are a perfect blend of quality and convenience, featuring improved ANC and a transparency mode for better situational awareness. The H2 chip enhances sound quality and connectivity, while the customizable fit ensures comfort for long listening sessions.",
        showProductFeature: true,
        sections: []
    },
    {
        title: "Key Features",
        description: "",
        sections: [
        {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Enhanced audio with adaptive EQ and spatial audio." },
            { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Improved ANC with transparency mode." },
            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Up to 6 hours of continuous use, with an additional 24 hours from the MagSafe charging case." },
            { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Customizable fit with multiple ear tips." },
            ],
        },
        ]
    },
    {
        title: "",
        description: "",
        sections: [
        {
            type: "flex",
            items: [
            {
                title: "Cons",
                list: [
                "Limited compatibility with devices outside Apple's ecosystem.",
                ]
            },
            {
                title: "Pros",
                list: [
                "Seamless integration with Apple devices",
                "Excellent ANC",
                "Comfortable fit",
                "Long battery life with charging case",
                ]
            }
            ]
        }
        ]
    },
    ]
},
{
    header: "3. Bose QuietComfort Earbuds II",
    paragraph: "",
    price: "$280 - $320",
    imageSrc: "/blog-best-earbuds2024-bose-quietcomfort2.png",
    productLink: "https://amzn.to/3M4glRV",
    content: [
    {
        title: "Overview",
        description: "Bose QuietComfort Earbuds II are designed for audiophiles seeking top-tier noise cancellation and sound quality. These earbuds provide a balanced audio profile with deep bass and clear highs, making them ideal for various music genres. Their comfortable fit ensures they stay secure during any activity.",
        showProductFeature: true,
        sections: []
    },
    {
        title: "Key Features",
        description: "",
        sections: [
        {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Balanced audio with rich bass." },
            { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Advanced ANC with adjustable levels." },
            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "6 hours per charge, with an additional 18 hours from the case." },
            { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Secure and comfortable fit with StayHear Max tips." },
            ],
        },
        ]
    },
    {
        title: "",
        description: "",
        sections: [
        {
            type: "flex",
            items: [
            {
                title: "Cons",
                list: [
                "Bulky charging case.",
                ]
            },
            {
                title: "Pros",
                list: [
                "Superior sound quality",
                "Excellent ANC",
                "Comfortable for extended wear",
                "Long battery life with charging case",
                ]
            }
            ]
        }
        ]
    },
    ]
},
{
    header: "4. Samsung Galaxy Buds Pro 2",
    paragraph: "",
    price:  "$200 - $240",
    imageSrc: "/blog-best-earbuds2024-galaxybuds-pro2.png",
    productLink: "https://amzn.to/3YQNGr7",
    content: [
    {
        title: "Overview",
        description: "The Samsung Galaxy Buds Pro 2 offer a premium audio experience with 2-way speakers and AKG tuning. Their ANC and ambient sound features provide versatile listening options, while the sleek design ensures a comfortable fit. They are also IPX7-rated for water resistance, making them suitable for workouts.",
        showProductFeature: true,
        sections: []
    },
    {
        title: "Key Features",
        description: "",
        sections: [
        {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "High-resolution audio with AKG tuning." },
            { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Effective ANC with ambient sound mode." },
            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "8 hours of playback, with an additional 20 hours from the charging case." },
            { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Ergonomic design with secure fit." },
            ],
        },
        ]
    },
    {
        title: "",
        description: "",
        sections: [
        {
            type: "flex",
            items: [
            {
                title: "Cons",
                list: [
                "ANC not as strong as some competitors.",
                ]
            },
            {
                title: "Pros",
                list: [
                "High-quality sound",
                "Water-resistant",
                "Comfortable fit",
                "Long battery life with charging case",
                ]
            }
            ]
        }
        ]
    },
    ]
},
{
    header: "5. Jabra Elite 85t",
    paragraph: "",
    price: "$180 - $220",
    imageSrc: "/blog-best-earbuds2024-jabra-elite85t.png",
    productLink: "https://amzn.to/46KaMBz",
    content: [
    {
        title: "Overview",
        description: "The Jabra Elite 85t earbuds are known for their customizable sound and durable build. With advanced ANC and HearThrough technology, they provide a balanced listening experience. Their compact design and long battery life make them an excellent choice for everyday use.",
        showProductFeature: true,
        sections: []
    },
    {
        title: "Key Features",
        description: "",
        sections: [
        {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Customizable sound with Jabra Sound+ app" },
            { Feature: "<span class='font-semibold italic'>Noise Cancellation</span>", Specification: "Advanced ANC with adjustable levels." },
            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: " 7 hours of use per charge, with an additional 21 hours from the case." },
            { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification: "Compact and comfortable with multiple ear tips." },
            ],
        },
        ]
    },
    {
        title: "",
        description: "",
        sections: [
        {
            type: "flex",
            items: [
            {
                title: "Cons",
                list: [
                "Slightly larger than other earbuds.",
                ]
            },
            {
                title: "Pros",
                list: [
                "Customizable sound",
                "Durable",
                "Comfortable",
                "Long battery life with charging case",
                ]
            }
            ]
        }
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

  
  export default function Detail() {
    
    const pageTitle = 'Best Earbuds 2024: Top Picks for Quality and Comfort | Lunogi';
    const pageDescription = 'Discover the best earbuds of 2024 with your top picks. Get quality earbuds and extraordinary sound comfort in this article!';
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
                  src="/blog-best-earbuds2024-cover.jpeg"
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
                  <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Discover the best earbuds of 2024 with your top picks.<br></br>Get quality earbuds and extraordinary sound comfort in this article!</h1>
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