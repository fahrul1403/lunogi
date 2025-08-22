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
const skinCareContent: Section[] = [
{
  header: "",
  paragraph: "In this article, we'll explore the key factors to consider when choosing a gaming console, review the top consoles on the market, and provide recommendations for different types of gamers. From the cutting-edge performance of the PlayStation 5 to the versatile gameplay of the Nintendo Switch, discover the best video game consoles that promise an amazing gaming experience. The purpose of this article is to guide you through the maze of gaming consoles available today, helping you find the perfect match for your gaming preferences and needs. Whether you're a casual player, a hardcore gamer, or someone looking for family-friendly options, this guide will provide you with the essential information to make an informed decision.",
  content: []
},


{
  header: "Key Factors to Consider When Choosing a Gaming Console",
  paragraph: "When choosing a gaming console, it's important to consider a variety of factors to ensure you get the best gaming experience tailored to your needs. The following are key factors that need to be considered:",
  imageSrc: "/blog-best-gaming-console-intro.jpeg",
  content: [
    {
      title: "1. Performance",
      description: "Performance is a crucial factor in choosing a gaming console. It determines how well the console can handle complex game mechanics, graphics, and multitasking.",
      h2image: "/placeholder-icon.jpg",
      h2middleimage:true,
      sections: [
        {
          type: "list",
          title: "",
          items: [
            "CPU (Central Processing Unit): A powerful CPU ensures the console can handle complex game mechanics and multitasking.",
            "GPU (Graphics Processing Unit): The GPU affects the quality of graphics, frame rates, and overall visual experience.",
            "RAM (Random Access Memory): Adequate RAM ensures the console can run games efficiently without lag.",
            "Storage: Consider the type (HDD vs. SSD) and capacity of the storage. SSDs are faster and improve load times."
          ]
        },
      ]
    },
    {
      title: "2. Game Library",
      description: "The variety and availability of games can significantly influence your choice of console. Consider:",
      sections: [
        {
          type: "list",
          title: "",
          items: [
            "Exclusive Titles: Some consoles offer exclusive games that are not available on other platforms",
            "Backward Compatibility: The ability to play games from previous console generations can be a significant advantage.",
            "Third-Party Support: Ensure the console has strong support from third-party developers for a broader range of games.",
          ]
        }
      ]
    },
    {
      title: "3. Price",
      description: "Budget is always a key consideration.",
      sections: [
        {
          type: "list",
          title: "",
          items: [
            "Initial Cost: Compare the prices of different consoles and what they offer for the price.",
            "Value for Money: Assess if the console provides good value considering its performance, features, and game library.",
            "Long-Term Costs: Consider additional costs such as subscription services, online gaming fees, and accessories.",
          ]
        }
      ]
    },
    {
      title: "4. Backwards Compatibility",
      description: "Backward compatibility allows you to play older games on your new console, providing more value for your investment. It also ensures you can enjoy your favorite titles from previous generations without needing to keep old consoles.",
      sections: [
        {
          type: "list",
          items: [
          ]
        }
      ]
    },
    {
      title: "5. User Interface and Experience",
      description: "The user interface (UI) and overall user experience (UX) can affect your enjoyment of the console. Consider:",
      sections: [
        {
          type: "list",
          items: [
            "Ease of Use: The UI should be intuitive and easy to navigate.",
            "Accessibility: Features that make gaming accessible to everyone, including those with disabilities.",
            "Customization: The ability to customize settings and preferences to suit your gaming style"
          ]
        }
      ]
    },
    {
      title: "6. Media Capabilities",
      description: "Many consoles offer more than just gaming. Look for:",
      sections: [
        {
          type: "list",
          items: [
            "Streaming Services: Support for popular streaming services like Netflix, Hulu, and Disney+",
            "Blu-ray/DVD Playback: If you want your console to double as a media player, check if it supports physical media playback.",
          ]
        }
      ]
    },
    {
      title: "7. Controller Design",
      description: "The design and comfort of the console's controllers can impact your gaming experience. Consider:.",
      sections: [
        {
          type: "list",
          items: [
            "Ergonomics: Controllers should be comfortable to hold during long gaming sessions.",
            "Battery Life: For wireless controllers, battery life is an important factor.",
            "Additional Features: Features like haptic feedback, adaptive triggers, and customizable buttons can enhance gameplay."
          ]
        }
      ]
    }
  ]
},


{
  header: "1. PlayStation 5",
  paragraph: "",
  price: "$499",
  imageSrc: "/blog-best-gaming-console-playstation5res.jpeg",
  productLink: "https://amzn.to/3X3n5ph",
  content: [
    {
      title: "Overview",
      description: "The PlayStation 5 (PS5), developed by Sony, represents a significant leap forward in gaming technology and design. Released in November 2020, the PS5 quickly became one of the most sought-after gaming consoles due to its powerful hardware, innovative features, and impressive game library. With its cutting-edge performance and immersive gaming experience, the PS5 stands at the forefront of next-generation gaming.",
      showProductFeature: true,
      imageAbove:true,
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
            { Feature: "<span class='font-semibold italic'>CPU</span>", Specification: "Custom AMD Zen 2-based CPU with 8 cores at 3.5GHz (variable frequency)", h4image:"/blog-best-gaming-console-playstation5-cpu.jpeg" },
            { Feature: "<span class='font-semibold italic'>GPU</span>", Specification: "Custom RDNA 2 GPU with 10.28 TFLOPs and 36 CUs at 2.23GHz (variable frequency)", h4image:"/blog-best-gaming-console-gpu.jpeg"},
            { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "16GB GDDR6 with a 256-bit wide bus", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "Custom 825GB SSD with 5.5GB/s raw read bandwidth", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Performance</span>", Specification: "Supports 4K gaming at up to 120 FPS, 8K output, and ray tracing", h4image:"/blog-best-gaming-console-performance.webp" },
            
          ],
        }
      ]
    },
    {
        title: "Highlights",
        description: "",
        sections: [
          {
            type: "table",
            title: "",
            headers: [],
            items: [
              { Feature: "<class='font-semibold italic'>God of War: Ragnarok</span>", Specification: "", h4image:"/blog-best-gaming-console-godofwar-ragnarok.webp" },
              { Feature: "<span class='font-semibold italic'>Horizon: Forbidden West</span>", Specification: "", h4image:"/blog-best-gaming-console-horizon-forbiddenwest.webp"  },
              { Feature: "<span class='font-semibold italic'>Marvel's Spider-Man 2</span>", Specification: "", h4image:"/blog-best-gaming-console-spiderman2.webp" },
          ],
      }
    ]
    },
    {
        title: "The DualSense Controller",
        description: "",
        h2image: "/blog-best-gaming-console-dualsense.webp",
        sections: []
    },
    {
        title: "",
        description: "",
        sections: [
        {
            type: "flex",
            items: [
            {
                title: "Pros",
                list: [
                "Exceptional performance and graphics",
                "Fast load times due to custom SSD",
                "Strong lineup of exclusive games",
                "Innovative DualSense controller features",
                "Backwards compatibility with most PS4 games",
                ]
            },
            {
                title: "Cons",
                list: [
                "High price point",
                "Limited storage capacity (expandable, but at an additional cost)",
                "Larger size may be challenging to fit in some setups",
                "Limited availability due to high demand",
                ]
            }
            ]
        }
        ]
    },
  ]
},
{
  header: "2. Xbox Series X",
  paragraph: "",
  price: "$499",
  imageSrc: "/blog-best-gaming-console-xbox-seriesx.jpeg",
  productLink: "https://amzn.to/3AoTqOF",
  content: [
    {
      title: "Overview",
      description: "The Xbox Series X, developed by Microsoft, is a powerhouse console designed for gamers seeking high performance and a broad gaming library. As Microsoft's flagship gaming device, it offers impressive hardware capabilities, a vast game selection including backward compatibility with many older Xbox titles, and a robust online ecosystem through Xbox Live and Game Pass.",
      showProductFeature: true,
      imageAbove:true,
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
            { Feature: "<span class='font-semibold italic'>CPU</span>", Specification: "Custom AMD Zen 2-based CPU with 8 cores at 3.8GHz (3.6GHz with SMT)", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>GPU</span>", Specification: "Custom RDNA 2 GPU with 12 TFLOPs and 52 CUs at 1.825GHz", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "16GB GDDR6", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "1TB Custom NVMe SSD", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Performance</span>", Specification: "Supports 4K gaming at up to 120 FPS, 8K HDR, and ray tracing", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Backwards Compatibility</span>", Specification: "Plays games from all previous Xbox generations", h4image:"/placeholder-icon.jpg" },
        ],
    }
  ]
},
{
    title: "Highlights",
    description: "",
    sections: [
      {
        type: "table",
        title: "",
        headers: [],
        items: [
              { Feature: "<span class='font-semibold italic'>Halo: Infinite</span>", Specification: "", h4image:"/blog-best-gaming-console-haloinfinite.webp" },
              { Feature: "<span class='font-semibold italic'>Starfield</span>", Specification: "", h4image:"/blog-best-gaming-console-starfield.webp"  },
              { Feature: "<span class='font-semibold italic'>Hi-Fi Rush </span>", Specification: "", h4image:"/blog-best-gaming-console-hifirush.webp" },
      ],
  }
]
},
{
    title: "The Xbox Series X Controller",
    description: "",
    h2image: "/blog-best-gaming-console-seriesx-controller.png",
    sections: []
},
{
    title: "",
    description: "",
    sections: [
    {
          type: "flex",
          items: [
            {
              title: "Pros",
              list: [
                "Powerful performance for 4K gaming",
                "Extensive backwards compatibility",
                "Quick Resume feature for switching between games",
                "Xbox Game Pass offers a vast library of games",
                "Quiet operation and efficient cooling",
              ]
            },
            {
              title: "Cons",
              list: [
                "Limited exclusive titles compared to competitors",
                "Large, boxy design may not fit all setups",
                "Controller lacks advanced features of some competitors",
                "User interface can be cluttered",
              ]
            }
          ]
        }
      ]
    },
  ]
},
{
  header: "3. Nintendo Switch",
  paragraph: "",
  price: "$294",
  imageSrc: "/blog-best-gaming-console-nintendo-switch.jpeg",
  productLink: "https://amzn.to/3WPBeoG",
  content: [
    {
      title: "Overview",
      description: "The Nintendo Switch is a unique hybrid console that offers both home console and portable gaming experiences. Released in 2017, it has since become one of the most popular gaming platforms due to its versatility, innovative design, and strong lineup of exclusive titles. The Switch's ability to seamlessly transition between docked (TV) and handheld modes sets it apart in the gaming market.",
      showProductFeature: true,
      imageAbove:true,
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
            { Feature: "<span class='font-semibold italic'>CPU/GPU</span>", Specification: "NVIDIA Custom Tegra X1 processor", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "4GB LPDDR4", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "32GB (expandable via microSD)", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Display</span>", Specification: "6.2-inch capacitive multi-touch LCD, 1280x720 resolution", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Approximately 4.5 - 9 hours", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Modes</span>", Specification: "TV Mode, Tabletop Mode, Handheld Mode", h4image:"/placeholder-icon.jpg" },
        ],
    }
  ]
},
{
    title: "Highlights",
    description: "",
    sections: [
      {
        type: "table",
        title: "",
        headers: [],
        items: [
          { Feature: "<span class='font-semibold italic'>The Legend of Zelda: Tears of The Kingdom</span>", Specification: "", h4image:"/blog-best-gaming-console-zelda-tearsofthekingdom.webp" },
          { Feature: "<span class='font-semibold italic'>Super Mario Bros. Wonder</span>", Specification: "", h4image:"/blog-best-gaming-console-supermario-wonder.webp"  },
          { Feature: "<span class='font-semibold italic'>Animal Crossing: New Horizons</span>", Specification: "", h4image:"/blog-best-gaming-console-animalcrossing-newhorizons.webp" },
      ],
  }
]
},
{
    title: "The Nintendo Switch Joycons",
    description: "",
    h2image: "/blog-best-gaming-console-switch-joycons.png",
    sections: []
},
{
    title: "",
    description: "",
    sections: [
    {
          type: "flex",
          items: [
            {
              title: "Pros",
              list: [
                "Unique hybrid design for both home and portable gaming",
                "Strong lineup of exclusive Nintendo titles",
                "Local multiplayer with Joy-Con controllers",
                "Family-friendly content and parental controls",
                "Continual hardware iterations and improvements",
              ]
            },
            {
              title: "Cons",
              list: [
                "Less powerful hardware compared to other current-gen consoles",
                "Online services less robust than competitors",
                "Limited internal storage",
                "Some third-party games may have performance issues",
              ]
            }
          ]
        }
      ]
    },
  ]
},
{
  header: "4. Xbox Series S",
  paragraph: "",
  price: "$299",
  imageSrc: "/blog-best-gaming-console-xbox-seriesSres.jpeg",
  productLink: "https://amzn.to/3X4L0oi",
  content: [
    {
      title: "Overview",
      description: "The Xbox Series S is Microsoft's compact, all-digital next-generation gaming console. Designed as a more affordable alternative to the Xbox Series X, it offers impressive performance in a smaller package. The Series S is perfect for gamers who want to experience next-gen gaming without breaking the bank, especially those who prefer digital game libraries and don't require 4K resolution.",
      showProductFeature: true,
      imageAbove:true,
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
            { Feature: "<span class='font-semibold italic'>CPU</span>", Specification: "Custom AMD Zen 2-based CPU with 8 cores at 3.6GHz (3.4GHz with SMT)", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>GPU</span>", Specification: "Custom RDNA 2 GPU with 4 TFLOPs and 20 CUs at 1.565GHz", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "10GB GDDR6", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "512GB Custom NVMe SSD", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Performance</span>", Specification: "Targets 1440p gaming at up to 120 FPS, supports 4K upscaling", h4image:"/placeholder-icon.jpg" },
            { Feature: "<span class='font-semibold italic'>Design</span>", Specification: "Compact, all-digital console (no disc drive)", h4image:"/placeholder-icon.jpg" },
        ],
    }
  ]
},
{
    title: "Highlights",
    description: "",
    sections: [
      {
        type: "table",
        title: "",
        headers: [],
        items: [
          { Feature: "<span class='font-semibold italic'>Halo: Infinite</span>", Specification: "", h4image:"/placeholder-icon.jpg" },
          { Feature: "<span class='font-semibold italic'>Starfield</span>", Specification: "", h4image:"/placeholder-icon.jpg"  },
          { Feature: "<span class='font-semibold italic'>Redfall</span>", Specification: "", h4image:"/placeholder-icon.jpg" },
      ],
  }
]
},
{
  title: "Highlights",
  description: "",
  sections: [
  {
      type: "list",
      title: "Best For",
      h3middleimage: true,
      h3image: "/placeholder-icon.jpg",
      items: [
          "These gaming consoles are ideal for users seeking high-performance gaming experiences with stunning graphics and immersive gameplay. They are particularly well-suited for both casual and hardcore gamers who enjoy a wide variety of game genres and multiplayer experiences.",
      ],
  },
  {
    type: "list",
    title: "Best For",
    h3middleimage: true,
    h3images: ["/placeholder-icon.jpg", "/placeholder-icon.jpg", "/placeholder-icon.jpg", "/placeholder-icon.jpg"],
    items: [
        "These gaming consoles are ideal for users seeking high-performance gaming experiences with stunning graphics and immersive gameplay. They are particularly well-suited for both casual and hardcore gamers who enjoy a wide variety of game genres and multiplayer experiences.",
    ],
  },
  {
    type: "list",
    title: "Best For",
    h3middleimage: false,
    h3image: "/placeholder-icon.jpg",
    items: [
        "These gaming consoles are ideal for users seeking high-performance gaming experiences with stunning graphics and immersive gameplay. They are particularly well-suited for both casual and hardcore gamers who enjoy a wide variety of game genres and multiplayer experiences.",
    ],
  },
]
},
{
    title: "The Xbox Series S Controller",
    description: "",
    h2image: "/placeholder-icon.jpg",
    sections: []
},
{
    title: "",
    description: "",
    sections: [
    {
          type: "flex",
          items: [
            {
              title: "Pros",
              list: [
                "More affordable entry into next-gen gaming",
                "Compact design fits easily in any setup",
                "Quick resume and fast loading times",
                "Access to Xbox Game Pass library",
                "Backwards compatibility with older Xbox games",
              ]
            },
            {
              title: "Cons",
              list: [
                "No disc drive for physical games or 4K Blu-ray playback",
                "Lower resolution output compared to Series X",
                "Smaller storage capacity",
                "Less powerful than its bigger sibling, the Series X",
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
  paragraph: "Choosing the right gaming console can significantly enhance your gaming experience, providing hours of entertainment and immersion.When selecting a console, consider factors such as performance, game library, price, and additional features like online services and media capabilities. Each console has its own set of advantages, so it's important to choose one that aligns with your gaming style and preferences. By taking the time to evaluate your needs and preferences, you can find the perfect gaming console that will provide you with an amazing gaming experience for years to come. Whether you're diving into epic adventures, competing in fast-paced multiplayer games, or enjoying casual family fun, there's a console out there that will ",
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
    <div className={`${item.imageAbove ? 'flex flex-col items-center' : ''}`}>
      {renderProductFeature && price && imageSrc && productLink && (
        <div className={`flex ${item.imageAbove ? 'flex-col items-center' : 'flex-col md:flex-row'} p-3 rounded-2xl mb-4`}>
          {item.imageAbove && (
            <div className="mb-4">
              <Image src={imageSrc} alt="Product" width={700} height={700} className="rounded-full" />
            </div>
          )}
          <div className={`${item.imageAbove ? 'text-center' : 'basis-full md:basis-2/5'} space-y-4`}>
            {!item.imageAbove && (
              <div className="flex items-center justify-center h-full">
                <Image src={imageSrc} alt="Product" width={700} height={700} className="rounded-xl" />
              </div>
            )}
          </div>
          <div className={`${item.imageAbove ? 'text-center' : 'basis-full md:basis-3/5 mt-4 md:mt-0 md:ml-4'} flex flex-col justify-center`}>
            <div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              {item.description && (
                <p className="bg-blue-100 text-xl p-5 rounded-xl w-full">{item.description}</p>
              )}
            </div>
            <div className={`mt-4 ${item.imageAbove ? '' : 'self-start'}`}>
              <ToggleButton price={price} imageSrc={imageSrc} productLink={productLink} />
            </div>
          </div>
        </div>
      )}
      {!renderProductFeature && item.title && (
        <h3 className={`text-center text-2xl font-semibold my-5 ${
          item.sections.some(section => section.type === 'table') ? 'text-center' : ''
        }`}>
          {item.title}
        </h3>
      )}
      <div className="flex flex-col items-center">
        {item.h2image && item.h2middleimage && (
          <div className="w-full flex justify-center mb-4">
            <div className="w-full md:w-1/2 h-64 relative">
              <Image 
                src={item.h2image} 
                alt="Section image" 
                fill
                className="rounded-xl object-contain" 
              />
            </div>
          </div>
        )}
        
        {item.description && !renderProductFeature && (
          <div className={`flex flex-col md:flex-row bg-blue-100 text-xl p-5 rounded-xl mb-4 ${item.h2middleimage ? 'w-full' : ''}`}>
            {item.h2image && !item.h2middleimage && (
              <div className={`w-full md:w-1/2 mb-4 md:mb-0 ${item.imagePosition === 'right' ? 'order-2' : ''}`}>
                <div className="w-full h-full relative aspect-square">
                  <Image 
                    src={item.h2image} 
                    alt="Section image" 
                    fill
                    className="rounded-xl object-cover" 
                  />
                </div>
              </div>
            )}
            
            <p className={`w-full flex items-center ${item.h2image && !item.h2middleimage ? 'md:w-1/2 md:px-4' : ''} ${
              item.imagePosition === 'right' ? 'order-1 text-right' : ''
            }`}>
              {item.description}
            </p>
          </div>
        )}

        {!item.description && item.h2image && !item.h2middleimage && (
          <div className="w-full flex justify-center mb-4">
            <div className="w-full md:w-1/2 h-64 relative">
              <Image 
                src={item.h2image} 
                alt="Section image" 
                fill
                className="rounded-xl object-contain" 
              />
            </div>
          </div>
        )}
      </div>
      {item.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="">
          {section.type === 'table' ? (
            <div className="flex flex-col space-y-4">
              {Array.from({ length: Math.ceil(section.items.length / 2) }).map((_, rowIndex) => (
                <div key={rowIndex} className={`grid gap-2 ${
                  section.items.length === 4
                    ? 'grid-cols-1 md:grid-cols-2'
                    : section.items.length - rowIndex * 3 >= 3
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : section.items.length - rowIndex * 3 === 1
                    ? 'grid-cols-1 mx-8 md:mx-16 lg:mx-32'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-auto md:max-w-2xl'
                }`}>
                  {(section.items as Array<{ Feature: string; Specification: string; h4image?: string }>)
                    .slice(rowIndex * (section.items.length === 4 ? 2 : 3), rowIndex * (section.items.length === 4 ? 2 : 3) + (section.items.length === 4 ? 2 : 3))
                    .map((item, index) => (
                      <div key={index} className="flex flex-col bg-gray-100 p-4 rounded-lg">
                        {item.h4image && (
                          <div className="text-base w-full aspect-square relative mb-5">
                            <Image 
                              src={item.h4image} 
                              alt="Product" 
                              fill
                              className="rounded-xl border-2 border-white object-cover"
                            />
                          </div>
                        )}
                        <div 
                          className="font-semibold mb-2 mx-auto text-center" 
                          dangerouslySetInnerHTML={{ __html: item.Feature }}
                        />
                        <div className="text-sm text-center">{item.Specification}</div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ) : section.type === 'list' ? (
            <div className="flex flex-col md:flex-row items-center gap-4 my-10 md:text-left text-center">
              {section.h3image && !section.h3middleimage && (
                <div className="md:flex-shrink-0 flex-col mb-4 md:mb-0 md:w-1/5">
                  {section.title && (
                    <h4 className="mb-2 text-xl font-medium md:hidden block">{section.title}</h4>
                  )}
                  <Image 
                    src={section.h3image} 
                    alt="Section image" 
                    width={240} 
                    height={240} 
                    className="rounded-xl border-2 border-black p-10" 
                  />
                </div>
              )}
              <div className={`flex-1 flex flex-col justify-center md:w-4/5 md:pl-4 ${section.h3middleimage ? 'items-center' : ''}`}>
                {section.title && (
                  <h4 className={`mb-2 text-xl font-medium ${section.h3middleimage ? 'text-center' : 'md:block hidden'}`}>
                    {section.title}
                  </h4>
                )}
                {section.h3middleimage && (
                  section.h3images && section.h3images.length > 1 ? (
                    <div className="flex flex-wrap justify-center gap-4 mb-4">
                      {section.h3images.map((image, index) => (
                        <Image 
                          key={index}
                          src={image} 
                          alt={`Section image ${index + 1}`} 
                          width={240} 
                          height={240} 
                          className="rounded-xl border-2 border-black p-10" 
                        />
                      ))}
                    </div>
                  ) : section.h3image ? (
                    <div className="mb-4">
                      <Image 
                        src={section.h3image} 
                        alt="Section image" 
                        width={240} 
                        height={240} 
                        className="rounded-xl border-2 border-black p-10 mx-auto" 
                      />
                    </div>
                  ) : null
                )}
                {(section.items as Array<string>).length === 1 ? (
                  <p className={`mb-3 ${section.h3middleimage ? 'text-center' : ''}`}>{(section.items as Array<string>)[0]}</p>
                ) : (
                  <ul className={`list-disc pl-5 mb-3 ${section.h3middleimage ? 'text-center list-none pl-0' : ''}`}>
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
                          {item.title === "Pros" || item.title === "Advantages" ? (
                            <TbPlus className="text-green-500" />
                          ) : item.title === "Cons" || item.title === "Disadvantages" ? (
                            <TbMinus className="text-red-500" />
                          ) : null}
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
                  src="/console.jpg"
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
                  <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Dicover the Best Video Game Consoles<br></br>for an Amazing Gaming Experience</h1>
                  <div className="flex flex-col space-y-5 w-[360px]">
                      <p className="text-base font-light">
                        Looking for the best video game console? Read our article to find the best choice for your gaming needs.
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
                    <h2 className={`${section.loneheader ? 'md:text-5xl text-4xl font-bold text-center' : 'text-4xl font-medium'} text-neutral-700`}>
                      {section.header}
                    </h2>
                    {section.imageSrc && !section.price && !section.productLink && (
                      <div className="w-full flex justify-center">
                        <Image
                          src={section.imageSrc}
                          alt={section.header}
                          width={1000}
                          height={600}
                          className="rounded-xl"
                        />
                      </div>
                    )}
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