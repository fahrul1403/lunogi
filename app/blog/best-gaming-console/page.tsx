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
        title: "Performance",
        description: "Performance is a crucial factor in choosing a gaming console. It determines how well the console can handle complex game mechanics, graphics, and multitasking.",
        h2image: "/blog-best-gaming-console-performace.webp",
        h2middleimage: true,
        sections: [
            {
                type: "table",
                items: [
                    { Feature: "<span class='font-semibold italic'>CPU (Central Processing Unit)</span>", Specification: "A powerful CPU ensures the console can handle complex game mechanics and multitasking."},
                    { Feature: "<span class='font-semibold italic'>GPU (Graphics Processing Unit)</span>", Specification: "The GPU affects the quality of graphics, frame rates, and overall visual experience."},
                    { Feature: "<span class='font-semibold italic'>RAM (Random Access Memory)</span>", Specification: "Adequate RAM ensures the console can run games efficiently without lag."},
                    { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "Consider the type (HDD vs. SSD) and capacity of the storage. SSDs are faster and improve load times."},
                ],
            }
        ]
        },
        {
        title: "Game Library",
        h2image: "/blog-best-gaming-console-gamelibrary2.avif",
        h2middleimage: true,
        description: "The variety and availability of games can significantly influence your choice of console. Consider:",
        sections: [
            {
                type: "table",
                items: [
                    { Feature: "<span class='font-semibold italic'>Exclusive Titles</span>", Specification: "Some consoles offer exclusive games that are not available on other platforms"},
                    { Feature: "<span class='font-semibold italic'>Backward Compatibility</span>", Specification: "The ability to play games from previous console generations can be a significant advantage."},
                    { Feature: "<span class='font-semibold italic'>Third-Party Support</span>", Specification: "Ensure the console has strong support from third-party developers for a broader range of games."},
                ],
            }
        ]
        },
        {
        title: "Price",
        description: "Budget is always a key consideration.",
        sections: [
            {
                type: "table",
                items: [
                    { Feature: "<span class='font-semibold italic'>Initial Cost</span>", Specification: "Compare the prices of different consoles and what they offer for the price."},
                    { Feature: "<span class='font-semibold italic'>Value for Money</span>", Specification: "Assess if the console provides good value considering its performance, features, and game library."},
                    { Feature: "<span class='font-semibold italic'>Long-Term Costs</span>", Specification: "Consider additional costs such as subscription services, online gaming fees, and accessories."},
                ],
            }
        ]
        },
        {
        title: "Backwards Compatibility",
        description: "Backward compatibility allows you to play older games on your new console, providing more value for your investment. It also ensures you can enjoy your favorite titles from previous generations without needing to keep old consoles.",
        h2image: "/blog-best-gaming-console-backwardscompatibility.jpeg",
        h2middleimage: true,
        sections: [
            {
            type: "table",
            items: [
                { Feature: "<span class='font-semibold italic'>Game Library Access</span>", Specification: "Access to a wider range of games, including classics from previous generations."},
                { Feature: "<span class='font-semibold italic'>Cost Savings</span>", Specification: "Ability to play older, often cheaper games on your new console."},
                { Feature: "<span class='font-semibold italic'>Nostalgia Factor</span>", Specification: "Replay favorite games from the past on modern hardware."},
            ],
            }
        ]
        },
        {
        title: "User Interface and Experience",
        description: "The user interface (UI) and overall user experience (UX) can affect your enjoyment of the console. Consider:",
        h2image: "/blog-best-gaming-console-ui.jpeg",
        h2middleimage: true,
        sections: [
            {
            type: "table",
            items: [
                { Feature: "<span class='font-semibold italic'>Ease of Use</span>", Specification: "The UI should be intuitive and easy to navigate."},
                { Feature: "<span class='font-semibold italic'>Accessibility</span>", Specification: "Features that make gaming accessible to everyone, including those with disabilities."},
                { Feature: "<span class='font-semibold italic'>Customization</span>", Specification: "The ability to customize settings and preferences to suit your gaming style"},
            ],
            }
        ]
        },
        {
        title: "Media Capabilities",
        description: "Many consoles offer more than just gaming. Look for:",
        h2image: "/blog-best-gaming-console-media.jpeg",
        h2middleimage: true,
        sections: [
            {
                type: "table",
                items: [
                    { Feature: "<span class='font-semibold italic'>Streaming Services</span>", Specification: "Support for popular streaming services like Netflix, Hulu, and Disney+"},
                    { Feature: "<span class='font-semibold italic'>Blu-ray/DVD Playback</span>", Specification: "If you want your console to double as a media player, check if it supports physical media playback."},
                ],
            }
        ]
        },
        {
        title: "Controller Design",
        description: "The design and comfort of the console's controllers can impact your gaming experience. Consider:",
        h2image: "/blog-best-gaming-console-controllers.jpeg",
        h2middleimage: true,
        sections: [
            {
                type: "table",
                items: [
                    { Feature: "<span class='font-semibold italic'>Ergonomics</span>", Specification: "Controllers should be comfortable to hold during long gaming sessions."},
                    { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "For wireless controllers, battery life is an important factor."},
                    { Feature: "<span class='font-semibold italic'>Additional Features</span>", Specification: "Features like haptic feedback, adaptive triggers, and customizable buttons can enhance gameplay."},
                ],
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
        description: "<b>The PlayStation 5 (PS5)</b>, developed by Sony, represents a significant leap forward in gaming technology and design. Released in November 2020, the PS5 quickly became one of the most sought-after gaming consoles due to its powerful hardware, innovative features, and impressive game library. With its cutting-edge performance and immersive gaming experience, the PS5 stands at the forefront of next-generation gaming.",
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
                items: [
                    { Feature: "<span class='font-semibold italic'>CPU</span>", Specification: "Custom AMD Zen 2-based CPU with 8 cores at 3.5GHz (variable frequency)"},
                    { Feature: "<span class='font-semibold italic'>GPU</span>", Specification: "Custom RDNA 2 GPU with 10.28 TFLOPs and 36 CUs at 2.23GHz (variable frequency)"},
                    { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "16GB GDDR6 with a 256-bit wide bus"},
                    { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "Custom 825GB SSD with 5.5GB/s raw read bandwidth"},
                    { Feature: "<span class='font-semibold italic'>Performance</span>", Specification: "Supports 4K gaming at up to 120 FPS, 8K output, and ray tracing"},
                    
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
        description: "<b>The Xbox Series X</b>, developed by Microsoft, is a powerhouse console designed for gamers seeking high performance and a broad gaming library. As Microsoft's flagship gaming device, it offers impressive hardware capabilities, a vast game selection including backward compatibility with many older Xbox titles, and a robust online ecosystem through Xbox Live and Game Pass.",
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
            items: [
                { Feature: "<span class='font-semibold italic'>CPU</span>", Specification: "Custom AMD Zen 2-based CPU with 8 cores at 3.8GHz (3.6GHz with SMT)"},
                { Feature: "<span class='font-semibold italic'>GPU</span>", Specification: "Custom RDNA 2 GPU with 12 TFLOPs and 52 CUs at 1.825GHz"},
                { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "16GB GDDR6"},
                { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "1TB Custom NVMe SSD"},
                { Feature: "<span class='font-semibold italic'>Performance</span>", Specification: "Supports 4K gaming at up to 120 FPS, 8K HDR, and ray tracing"},
                { Feature: "<span class='font-semibold italic'>Backwards Compatibility</span>", Specification: "Plays games from all previous Xbox generations"},
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
        description: "<b>The Nintendo Switch</b> is a unique hybrid console that offers both home console and portable gaming experiences. Released in 2017, it has since become one of the most popular gaming platforms due to its versatility, innovative design, and strong lineup of exclusive titles. The Switch's ability to seamlessly transition between docked (TV) and handheld modes sets it apart in the gaming market.",
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
            headers: [],
            items: [
                { Feature: "<span class='font-semibold italic'>CPU/GPU</span>", Specification: "NVIDIA Custom Tegra X1 processor"},
                { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "4GB LPDDR4"},
                { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "32GB (expandable via microSD)"},
                { Feature: "<span class='font-semibold italic'>Display</span>", Specification: "6.2-inch capacitive multi-touch LCD, 1280x720 resolution"},
                { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Approximately 4.5 - 9 hours"},
                { Feature: "<span class='font-semibold italic'>Modes</span>", Specification: "TV Mode, Tabletop Mode, Handheld Mode"},
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
        description: "<b>The Xbox Series S</b> is Microsoft's compact, all-digital next-generation gaming console. Designed as a more affordable alternative to the Xbox Series X, it offers impressive performance in a smaller package. The Series S is perfect for gamers who want to experience next-gen gaming without breaking the bank, especially those who prefer digital game libraries and don't require 4K resolution.",
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
            headers: [],
            items: [
                { Feature: "<span class='font-semibold italic'>CPU</span>", Specification: "Custom AMD Zen 2-based CPU with 8 cores at 3.6GHz (3.4GHz with SMT)" },
                { Feature: "<span class='font-semibold italic'>GPU</span>", Specification: "Custom RDNA 2 GPU with 4 TFLOPs and 20 CUs at 1.565GHz" },
                { Feature: "<span class='font-semibold italic'>RAM</span>", Specification: "10GB GDDR6" },
                { Feature: "<span class='font-semibold italic'>Storage</span>", Specification: "512GB Custom NVMe SSD" },
                { Feature: "<span class='font-semibold italic'>Performance</span>", Specification: "Targets 1440p gaming at up to 120 FPS, supports 4K upscaling" },
                { Feature: "<span class='font-semibold italic'>Design</span>", Specification: "Compact, all-digital console (no disc drive)" },
            ],
        }
    ]
    },
    {
    title: "The Xbox Series S Controller",
    description: "",
    h2image: "/blog-best-gaming-console-seriess-controller.png",
    sections: []
    },
    {
        title: "Highlights",
        description: "",
        sections: [
        {
            type: "table",
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
    /*
    {
        header: "5. Xbox Series X/S",
        paragraph: "",
        price: "$299",
        imageSrc: "/blog-best-gaming-console-xbox-seriesSres.jpeg",
        productLink: "https://amzn.to/3X4L0oi",
        content: [
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
                            Feature: "<span class='font-semibold italic'>Xbox Series X</span>", 
                            Specification: "The Xbox Series X, developed by Microsoft, is a powerhouse console designed for gamers seeking high performance and a broad gaming library. As Microsoft's flagship gaming device, it offers impressive hardware capabilities, a vast game selection including backward compatibility with many older Xbox titles, and a robust online ecosystem through Xbox Live and Game Pass.",
                            h4image: "/blog-best-gaming-console-xbox-seriesx.jpeg",
                            price: "$499",
                            purchaseLink: "https://amzn.to/3Z7MbVB"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Xbox Series S</span>", 
                            Specification: "The Xbox Series S is Microsoft's compact, all-digital next-generation gaming console. Designed as a more affordable alternative to the Xbox Series X, it offers impressive performance in a smaller package. The Series S is perfect for gamers who want to experience next-gen gaming without breaking the bank, especially those who prefer digital game libraries and don't require 4K resolution.",
                            h4image: "/blog-best-gaming-console-xbox-seriesSres.jpeg",
                            price: "$299",
                            purchaseLink: "https://amzn.to/4cQhF5y"
                            },
                        ],
                    },
                ]
            },
        {
        title: "The Xbox Series X/S Controller",
        description: "",
        h2image: "/blog-best-gaming-console-seriess-controller.png",
        sections: []
        },
        {
            title: "Highlights",
            description: "",
            sections: [
            {
                type: "table",
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
            title: "X",
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
                },
            ]
        },
        {
            title: "Key differences",
            description: "",
            sections: [
                {
                    type: "comparison-table",
                    headers: ["Xbox Series X", "Xbox Series S"],
                    items: [
                        { category: "CPU", values: ["Custom AMD Zen 2-based CPU with 8 cores at 3.8GHz (3.6GHz with SMT)", "Custom AMD Zen 2-based CPU with 8 cores at 3.6GHz (3.4GHz with SMT)"] },
                        { category: "GPU", values: ["Custom RDNA 2 GPU with 12 TFLOPs and 52 CUs at 1.825GHz", "Custom RDNA 2 GPU with 4 TFLOPs and 20 CUs at 1.565GHz"] },
                        { category: "RAM", values: ["16GB GDDR6", "10GB GDDR6"] },
                        { category: "Storage", values: ["1TB Custom NVMe SSD", "512GB Custom NVMe SSD"] },
                        { category: "Performance", values: ["Supports 4K gaming at up to 120 FPS, 8K HDR, and ray tracing", "Targets 1440p gaming at up to 120 FPS, supports 4K upscaling"] },
                        { category: "Design", values: ["Larger form factor", "Compact, all-digital console (no disc drive)"] },
                        { category: "Backwards Compatibility", values: ["Plays games from all previous Xbox generations", "Plays games from all previous Xbox generations"] },
                    ],
                }
            ]
        },
        ]
        },
    */
    {
    header: "Conclusion",
    paragraph: "Choosing the right gaming console can significantly enhance your gaming experience, providing hours of entertainment and immersion.When selecting a console, consider factors such as performance, game library, price, and additional features like online services and media capabilities. Each console has its own set of advantages, so it's important to choose one that aligns with your gaming style and preferences. By taking the time to evaluate your needs and preferences, you can find the perfect gaming console that will provide you with an amazing gaming experience for years to come. Whether you're diving into epic adventures, competing in fast-paced multiplayer games, or enjoying casual family fun, there's a console out there that will ",
    content: []
    }
    ];

    export default function Detail() {
    const pageTitle = 'Discover the Best Video Game Consoles for an Amazing Gaming Experience | Lunogi';
    const pageDescription = 'Looking for the best video game console? Read our article to find the best choice for your gaming needs.';

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
    };