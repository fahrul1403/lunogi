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
        paragraph: "In-ear headphones have become a staple in modern audio technology, offering a unique blend of portability and high-quality sound. This article explores the defining characteristics of these devices, their benefits, and the reasons behind their widespread popularity.h",
        content:
        [
            {
                title: "Overview of In-Ear Headphones",
                description: "In-ear headphones, also known as earbuds, are compact audio devices designed to fit snugly inside the ear canal. They are highly valued for their convenience and portability, as well as their ability to deliver a high-quality listening experience despite their small size.",
                sections:
                [
                    {
                        type: "list",
                        title: "Definitions and Benefits",
                        headers: [],
                        items:
                        [
                            "In-ear headphones are characterized by their small, ergonomic design, which allows them to sit directly in the ear canal. This design offers several notable benefits. Firstly, their compact size enhances portability, making them easy to carry and ideal for on-the-go listening. Additionally, their snug fit provides effective noise isolation, enabling users to enjoy their music without external distractions. Many models come with customizable ear tips, which ensure a comfortable and secure fit for extended listening sessions. Despite their small size, in-ear headphones can deliver impressive sound quality, often incorporating advanced technologies to enhance audio performance."
                        ],
                    },
                    {
                        type: "list",
                        title: "Why In-Ear Headphones are Popular",
                        headers: [],
                        items:
                        [
                            "The popularity of in-ear headphones can be attributed to several key factors. Their convenience is a major draw, as their small size and lightweight nature make them an attractive choice for commuters and travelers. Furthermore, they are versatile and suitable for a range of activities, including exercise, casual listening, and professional use. Recent technological advancements have also played a significant role in their popularity, with improvements in sound quality and features such as noise cancellation and wireless connectivity. Additionally, in-ear headphones are available at a wide range of price points, making them accessible to a broad audience. Understanding these aspects highlights why in-ear headphones continue to be a favored option for many users seeking a practical and high-performance audio solution."
                        ],
                    },
                ]
            },
        ]
    },
    {
        header: "Best In-Ear Headphones 0f 2024",
        paragraph: "",
        content:
        [
        ]
    },



    {
        header: "How to Choose the Best In-Ear Headphones",
        paragraph: "Selecting the best in-ear headphones involves evaluating several key factors to ensure you find the perfect match for your needs. Understanding these factors can help you make an informed decision.",
        content:
        [
            {
                title: "Factors to Consider",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "Sound Quality",
                        headers: [],
                        items:
                        [
                            "When it comes to sound quality, the Soundcore P20i In-Ear Wireless Headphone excels with its 10mm dynamic drivers, which deliver deep bass, crisp audio, and clear highs, providing a rich and immersive listening experience. Similarly, the JBL Tune 130NC TWS True Wireless Earbuds offer powerful bass and clear audio thanks to their 10mm drivers, enhancing the clarity of every beat and note. The TOZO A1 Mini Wireless Earbuds also stand out with robust sound quality, featuring dynamic treble and deep bass that make for an engaging audio experience. The Soundcore P30i In-Ear Wireless Headphone provides an impressive audio experience with its 10mm drivers and BassUp technology, delivering deep, punchy bass and rich sound. Additionally, the Wireless Earbuds Bluetooth 5.3 feature Bluetooth 5.3 technology and an ENC microphone that contribute to clear audio and enhanced call quality."
                        ],
                    },
                    {
                        type: "list",
                        title: "Battery Life",
                        headers: [],
                        items:
                        [
                            "Battery life is an essential aspect of in-ear headphones. The Soundcore P20i offers up to 30 hours of playback time with the charging case and 10 hours on a single charge, with a quick 10-minute charge providing an additional 2 hours of use. The JBL Tune 130NC TWS impresses with its long battery life, providing up to 40 hours of playtime, including 8 hours on a single charge and an extra 24 hours from the charging case. The TOZO A1 Mini Wireless Earbuds provide up to 6.5 hours of playtime on a single charge and extend to 30 hours with the charging case. The Soundcore P30i offers up to 10 hours of listening with Active Noise Cancellation (ANC) off and up to 45 hours with the charging case; with ANC activated, it provides 7 hours of playtime, extending to 30 hours with the case. The Wireless Earbuds Bluetooth 5.3 offer 6-8 hours of playtime on a single charge, with an additional 30 hours provided by the charging case, complemented by an LED display to monitor battery levels."
                        ],
                    },
                    {
                        type: "list",
                        title: "Comfort and Fit",
                        headers: [],
                        items:
                        [
                            "Comfort and fit are critical for extended use. The Soundcore P20i features customizable ear tips and a lightweight design to ensure a secure and comfortable fit during long listening sessions. The JBL Tune 130NC TWS is designed with comfort in mind, providing a secure fit that is also sweat-proof and water-resistant, making it suitable for various activities. The TOZO A1 Mini Wireless Earbuds are ultra-lightweight and ergonomically designed, ensuring comfort even during prolonged use. The Soundcore P30i prioritizes comfort with its ergonomic design and multiple ear tip sizes, which provide a secure fit for extended wear. The Wireless Earbuds Bluetooth 5.3 are designed for comfort with their ergonomic fit and are IP7 rated for waterproofing, making them suitable for active use."
                        ],
                    },
                    {
                        type: "list",
                        title: "Noise Cancellation",
                        headers: [],
                        items:
                        [
                            "The ability to block out external noise is another important feature. The Soundcore P20i does not have active noise cancellation but offers effective sound isolation. The JBL Tune 130NC TWS includes Active Noise Canceling technology along with Smart Ambient, which balances reducing ambient noise while allowing awareness of surroundings. The TOZO A1 Mini Wireless Earbuds lack active noise cancellation but provide passive noise isolation through their secure fit. The Soundcore P30i features advanced noise cancellation with adaptive technology that reduces external noise by up to 42dB and includes a Transparency Mode for situational awareness. The Wireless Earbuds Bluetooth 5.3 are equipped with Environmental Noise Cancellation (ENC) technology to enhance call clarity by reducing background noise."
                        ],
                    },
                    {
                        type: "list",
                        title: "Price and Budget",
                        headers: [],
                        items:
                        [
                            "Price is an important consideration when choosing in-ear headphones. The Soundcore P20i is affordably priced at $24.99, offering excellent value for its features. The JBL Tune 130NC TWS, priced at $99.99, reflects its advanced features and performance. The TOZO A1 Mini Wireless Earbuds, at $19.99, provide exceptional value with modern features and long battery life. The Soundcore P30i is priced at $29.99, offering a balance of advanced features and affordability. The Wireless Earbuds Bluetooth 5.3 are also priced at $29.99, combining advanced connectivity and noise-canceling features with affordability."
                        ],
                    },
                ]
            },
            {
                title: "Personal Preferences",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "Best For",
                        headers: [],
                        items:
                        [
                            "Different models cater to different needs. The Soundcore P20i is ideal for those who prioritize high-quality sound, comfort, and convenience for everyday use. The JBL Tune 130NC TWS is best suited for individuals who require immersive sound, effective noise cancellation, and long battery life. The TOZO A1 Mini Wireless Earbuds are perfect for users who value comfort, portability, and ease of use at an affordable price. The Soundcore P30i is ideal for those who need noise cancellation, rich bass, and customizable audio settings. The Wireless Earbuds Bluetooth 5.3 are suitable for individuals seeking a reliable wireless audio solution with advanced connectivity and noise-canceling features."
                        ],
                    },
                    {
                        type: "list",
                        title: "Ideal Use Cases",
                        headers: [],
                        items:
                        [
                            "Each model is suited for various scenarios. The Soundcore P20i performs well during commuting, workouts, and daily use. The JBL Tune 130NC TWS is effective for sports, commutes, and travel due to its sweat-proof design and noise-canceling capabilities. The TOZO A1 Mini Wireless Earbuds are versatile for activities such as commuting, exercising, and casual listening. The Soundcore P30i is suitable for music listening, movie watching, phone calls, and workouts, with its IP54 splash-proof and dust-proof design making it reliable for daily commutes and travel. The Wireless Earbuds Bluetooth 5.3 are perfect for exercise, daily commutes, and travel, thanks to their waterproof design and long battery life."
                        ],
                    },
                ]
            },
        ]
    },












    {
        header: "1.  Soundcore P20i In-Ear Wireless Headphone",
        paragraph: "",
        price: "$300", // Added price for the product
        imageSrc: "/blog-best-inear-headphone-soundcore-p20i.png", // Add this line
        productLink: "https://amzn.to/3SFvs7J",
        content:
        [
            {
                title: "Overview",
                description: "The Soundcore P20i In-Ear Wireless Headphone is the perfect blend of performance, style, and convenience. Designed for those who demand high-quality sound on the go, these headphones offer an immersive audio experience in a sleek, lightweight package. The Soundcore P20i is available in 5 colors : Black, Blue, Light Blue, Pink and White, allowing you to choose a style that best suits your preference.",
                sections:
                [
                    {
                        type: "list",
                        title: "Key Features",
                        headers: [],
                        items:
                        [
                            "The Soundcore P20i includes Bluetooth 5.0 for a stable connection and seamless streaming. It features powerful 10mm drivers that deliver deep bass and enhanced sound quality, ensuring an enjoyable listening experience. Its IPX5 water resistance protects against sweat and light rain, making it ideal for workouts and outdoor activities. With fast charging, a 10-minute charge provides up to 1 hour of playtime, while the case extends battery life to 30 hours. A quick 10-minute charge gives an additional 2 hours of use. The multi-point connection allows pairing with two devices simultaneously for easy switching. The compact design, including a charging case with a lanyard, adds to its portability. Customizable controls and 22 EQ presets are accessible through the Soundcore app, and the 'Find My Earbuds' feature assists in locating misplaced earbuds. AI-enhanced clear calls, supported by 2 built-in mics, ensure your voice is heard clearly. "
                        ],
                    },
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "Equipped with 10mm dynamic drivers, the Soundcore P20i provides rich, immersive audio with deep bass, crisp mids, and detailed highs. Whether listening to music or podcasts, every note is delivered with clarity and precision." },
                            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "The Soundcore P20i In-Ear Wireless Headphone is the perfect blend of performance, style, and convenience. Designed for those who demand high-quality sound on the go, these headphones offer an immersive audio experience in a sleek, lightweight package. The Soundcore P20i is available in 5 colors : Black, Blue, Light Blue, Pink and White, allowing you to choose a style that best suits your preference." },
                            { Feature: "<span class='font-semibold italic'>Comfort</span>", Specification:  "Comfort is a key feature of the Soundcore P20i. Customizable ear tips ensure a secure and personalized fit, while the lightweight design guarantees comfort for extended periods, whether during exercise, commuting, or relaxation." },
                        ],
                    },
                    {
                        type: "list",
                        title: "Pros",
                        headers: [],
                        items:
                        [
                            "The Soundcore P20i excels with superior sound quality, including deep bass and clear highs, long battery life, a comfortable fit with customizable ear tips, and a durable IPX5 water-resistant design. Additional benefits include powerful sound, app-based customization, and AI-enhanced call clarity.."
                        ],
                    },
                    {
                        type: "list",
                        title: "Cons",
                        headers: [],
                        items:
                        [
                            "Although the Soundcore P20i lacks active noise cancellation, its in-ear design provides effective sound isolation in most environments. The color options are limited but stylish and versatile."
                        ],
                    },
                    {
                        type: "list",
                        title: "Best For",
                        headers: [],
                        items:
                        [
                            "The Soundcore P20i is perfect for those who prioritize high-quality sound, comfort, and convenience. It's especially suitable for music lovers, podcast enthusiasts, and individuals seeking reliable headphones for everyday use."
                        ],
                    },
                    {
                        type: "list",
                        title: "Ideal Use Cases",
                        headers: [],
                        items:
                        [
                            "The Soundcore P20i performs well in various scenarios, making it ideal for commuting due to its long battery life and secure fit. It is also well-suited for workouts thanks to its IPX5 water resistance and comfortable design. The multi-point connection facilitates easy switching between devices, making it a solid choice for work-from-home setups."
                        ],
                    }, 
                    {
                        type: "list",
                        title: "Price",
                        headers: [],
                        items:
                        [
                            "Offering exceptional value at $24.99, the Soundcore P20i combines premium features with affordability. It's a smart choice for enhancing your listening experience without breaking the bank. Purchase the Soundcore P20i here."
                        ],
                    }, 
                ]
            },
        ]
    },
    {
        header: "2.  JBL Tune 130 Bluetooth Headphone In-Ear Headphones",
        paragraph: "",
        price: "$99.99", // Added price for the product
        imageSrc: "/blog-best-inear-headphone-jbl-tune130.png", // Add this line
        productLink: "https://amzn.to/3M0z6p5",
        content:
        [
            {
                title: "",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "Overview",
                        headers: [],
                        items:
                        [
                            "The JBL Tune 130NC TWS True Wireless Earbuds deliver JBL's signature Pure Bass Sound in a sleek and durable design. Ideal for sports, exercise, and daily activities, these earbuds are available in Black, White, and Blue, combining both style and performance to fit seamlessly into your lifestyle."
                        ],
                    },
                    {
                        type: "list",
                        title: "Key Features",
                        headers: [],
                        items:
                        [
                            "The JBL Tune 130NC TWS boasts several standout features. The 10mm drivers are engineered to provide JBL's Pure Bass Sound, ensuring that you experience every beat with clarity. The earbuds also come with Active Noise Cancelling technology complemented by Smart Ambient, which allows you to reduce background noise while remaining aware of your surroundings when necessary. Additionally, the six microphones integrated into the earbuds facilitate crystal-clear, hands-free calls. The earbuds are designed to last with up to 40 hours of battery life, featuring 8 hours of playtime on a single charge and an extra 24 hours available from the charging case. A quick 10-minute charge provides 2 additional hours of playtime, adding convenience to your busy schedule. Furthermore, the earbuds are IPX4-rated for water resistance, making them suitable for intense workouts and varying weather conditions."
                        ],
                    },
                    {
                        type: "table",
                        title: "",
                        headers: [],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "The JBL Tune 130NC TWS excels in delivering a rich audio experience thanks to its 10mm drivers, which produce a deep, resonant bass. This sound quality ensures that every beat and note is clear and impactful, enhancing your listening experience whether you are working out or simply enjoying music during your commute." },
                            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "The earbuds offer impressive battery performance, with up to 40 hours of playtime. This includes 8 hours on a single charge and an additional 24 hours provided by the charging case. The quick charge feature is particularly useful, allowing you to get 2 hours of playtime from just a 10-minute charge, ensuring that you stay connected even on the go." },
                            { Feature: "<span class='font-semibold italic'>Connectivity</span>", Specification: "Equipped with Bluetooth 5.2, the JBL Tune 130NC TWS ensures a stable and reliable connection with a wireless range of up to 10 meters. This technology enhances the ease of pairing with a variety of Bluetooth devices, making these earbuds versatile for different uses." },
                        ],
                    },
                    {
                        type: "list",
                        title: "Pros",
                        headers: [],
                        items:
                        [
                            "The JBL Tune 130NC TWS stands out for its exceptional sound quality, delivering powerful bass and clear audio that enhances any listening experience. Its long battery life is a significant advantage, providing up to 40 hours of use with the added benefit of quick charging. The effective Active Noise Canceling technology allows you to focus by reducing ambient noise, while the six microphones ensure that your calls are always clear and hands-free. Additionally, the earbuds are comfortable and secure, thanks to their sweat proof and water-resistant design, making them perfect for active use."
                        ],
                    },
                    {
                        type: "list",
                        title: "Cons",
                        headers: [],
                        items:
                        [
                            "While the JBL Tune 130NC TWS offers numerous benefits, the design may feel slightly bulky for some users, which could impact comfort during prolonged use. Additionally, achieving optimal sound quality and noise cancellation depends on finding the right fit with the included earbud tips, which might require some adjustment."
                        ],
                    },
                    {
                        type: "list",
                        title: "Best For",
                        headers: [],
                        items:
                        [
                            "The JBL Tune 130NC TWS is best suited for individuals who need high-quality audio for both daily and demanding environments. Its noise-canceling feature and long battery life make it ideal for those who want immersive sound and effective noise reduction during workouts, commutes, or travel."
                        ],
                    },
                    {
                        type: "list",
                        title: "Ideal Use Cases",
                        headers: [],
                        items:
                        [
                            "These earbuds are particularly effective for sports and exercise due to their sweat proof design and secure fit. They are also excellent for commutes and travel, providing long-lasting battery life and effective noise cancellation to enhance your journey. Additionally, they are versatile enough for everyday listening, offering convenience and high-quality audio for any situation."
                        ],
                    },
                    {
                        type: "list",
                        title: "Price",
                        headers: [],
                        items:
                        [
                            "The JBL Tune 130NC TWS offers excellent value with its array of features, priced at $99.99. For the latest pricing information, please refer to Purchase Now."
                        ],
                    },
                ]
            },
        ]
    },
    {
        header: "3.  Tozo Earbuds With Wireless Charging Case A1 In-Ear Wireless, Bluetooth 5.3 Headphones",
        paragraph: "",
        price: "$19.99", // Added price for the product
        imageSrc: "/blog-best-inear-tozo-a1.png", // Add this line
        productLink: "https://amzn.to/4dh4QT6",
        content:
        [
            {
                title: "Overview",
                description:  "The TOZO A1 Mini Wireless Earbuds are a sleek and modern pair of in-ear headphones designed for users who seek high-quality sound, convenience, and comfort. Featuring Bluetooth 5.3 technology and a lightweight design, these earbuds are ideal for on-the-go listening. The TOZO A1 is available in various colors, including Black, Blue, Green, Khaki, Rose Gold, and White, allowing users to choose the style that best suits their taste.",
                sections:
                [
                    {
                        type: "list",
                        title: "Key Features",
                        headers: [],
                        items:
                        [
                            "The TOZO A1 earbuds boast several impressive features, including an ergonomic design for a secure and comfortable fit, stereo sound quality with powerful bass, and intuitive touch controls for easy operation. These earbuds are also IPX5 waterproof, making them suitable for use during workouts or in light rain. The advanced Bluetooth 5.3 technology ensures a stable connection, while the earbuds' ultra-lightweight build enhances portability and comfort"
                        ],
                    },
                    {
                        type: "table",
                        title: "",
                        headers: [],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Bluetooth Version</span>", Specification: "Equipped with the latest Bluetooth 5.3 technology, the TOZO A1 earbuds offer a strong and reliable connection with minimal latency. This version of Bluetooth improves transmission speed, ensuring that audio remains in sync and that the earbuds maintain a stable connection within a range of up to 12 meters. This makes the TOZO A1 ideal for seamless music listening and phone calls, whether you're at home, in the office, or on the move." },
                            { Feature: "<span class='font-semibold italic'>Charging Case</span>", Specification: "The TOZO A1 comes with a compact and portable charging case that not only stores the earbuds securely but also extends their battery life. The case has a 400mAh capacity, providing up to 30 hours of additional playtime. The earbuds themselves can last up to 6.5 hours on a single charge, and with the charging case, users can enjoy an extended listening experience without frequent recharging." },
                            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Battery life is one of the standout features of the TOZO A1 earbuds. With a single charge, the earbuds can deliver up to 6.5 hours of continuous playtime. When combined with the charging case, the total battery life extends to 30 hours, making these earbuds a reliable choice for long trips, workouts, and daily commutes. The charging case itself recharges quickly, ensuring that your earbuds are always ready to use." },
                        ],
                    },
                    {
                        type: "list",
                        title: "Pros",
                        headers: [],
                        items:
                        [
                            "The TOZO A1 Mini Wireless Earbuds offer numerous advantages. Their ultra-lightweight design ensures comfort even during extended use, and the ergonomic fit makes them suitable for various activities, including sports. The sound quality is robust, with dynamic treble and deep bass, providing an immersive audio experience. Additionally, the touch controls are intuitive and easy to use, allowing for seamless operation. The IPX5 waterproof rating adds to their durability, making them resistant to sweat and light rain."
                        ],
                    },
                    {
                        type: "list",
                        title: "Cons",
                        headers: [],
                        items:
                        [
                            "While the TOZO A1 earbuds have many strengths, there are a few areas where they might not meet everyone's expectations. The touch controls, while convenient, can sometimes be overly sensitive, leading to accidental commands. Additionally, although the earbuds provide good sound quality, audiophiles might find the bass slightly less punchy compared to higher-end models. However, these drawbacks do not significantly detract from the overall quality and performance of the earbuds."
                        ],
                    },
                    {
                        type: "list",
                        title: "Best For",
                        headers: [],
                        items:
                        [
                            "The TOZO A1 Mini Wireless Earbuds are best suited for users who prioritize comfort, portability, and ease of use. They are ideal for individuals who need a reliable pair of earbuds for daily activities, including commuting, working out, or simply enjoying music on the go. Their lightweight design and long battery life make them especially appealing to those with an active lifestyle."
                        ],
                    },
                    {
                        type: "list",
                        title: "Ideal Use Cases",
                        headers: [],
                        items:
                        [
                            "These earbuds are perfect for a variety of scenarios. Whether you're working out at the gym, running outdoors, traveling, or working from home, the TOZO A1 earbuds provide the flexibility and convenience you need. Their waterproof design makes them a great choice for outdoor activities, while the long battery life ensures that they can keep up with your busy schedule"
                        ],
                    },
                    {
                        type: "list",
                        title: "Price",
                        headers: [],
                        items:
                        [
                            "The TOZO A1 Mini Wireless Earbuds are competitively priced at $19.99, offering excellent value for their features. With advanced Bluetooth technology, long battery life, and ergonomic design, they present a budget-friendly choice for users seeking high-quality wireless earbuds at an affordable price"
                        ],
                    },
                ]
            },
        ]
    },
    {
        header: "4.  Soundcore P30i In-Ear Wireless Headphone",
        paragraph: "",
        price: "$29.99", // Added price for the product
        imageSrc: "/blog-best-inear-headphone-soundcore-p30i.png", // Add this line
        productLink: "https://amzn.to/46K3g9V",
        content:
        [
            {
                title: "Overview",
                description: "The Soundcore P30i In-Ear Wireless Headphones are designed to offer a seamless blend of advanced technology and everyday practicality. With features like strong noise cancellation, ergonomic design, and impressive battery life, these headphones cater to both casual listeners and audiophiles alike. Available in five stylish colors—Black, Blue, Green, Pink, and White—these headphones are versatile enough to match any personal style.",
                sections:
                [
                    {
                        type: "list",
                        title: "Key Features",
                        headers: [],
                        items:
                        [
                            "The Soundcore P30i stands out with its 2-in-1 charging case, which also functions as a phone stand, making it convenient for hands-free media consumption. These headphones are equipped with adaptive noise cancellation technology that reduces external noise by up to 42dB, automatically adjusting to your environment. Additionally, the Transparency Mode allows users to switch between focusing on their audio and hearing the world around them when necessary. With 10mm drivers and BassUp technology, the Soundcore P30i delivers powerful, immersive sound that enhances your listening experience."
                        ],
                    },
                    {
                        type: "table",
                        title: "",
                        headers: [],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Sound Quality</span>", Specification: "The Soundcore P30i excels in delivering a rich and dynamic audio experience. The 10mm drivers, combined with Soundcore's exclusive BassUp technology, provide deep, punchy bass that brings your music to life. Users can access the Soundcore app to activate the 3D surround sound effect, which adds an extra dimension to the audio, making it feel more immersive. The app also allows for personalized sound profiles with 22 custom EQs, enabling users to tailor the sound to their preferences." },
                            { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "The Soundcore P30i offers impressive battery life, making it a reliable choice for long listening sessions. With Active Noise Cancellation (ANC) off, you can enjoy up to 10 hours of listening on a single charge, and the charging case extends this to 45 hours. When ANC is activated, the headphones still provide 7 hours of playtime, with the charging case extending it to 30 hours. If you're short on time, a quick 10-minute charge will give you 2 hours of playtime, ensuring that your music is always within reach." },
                            { Feature: "<span class='font-semibold italic'>Comfort and Fit</span>", Specification: "Comfort is a priority with the Soundcore P30i, which features an ergonomic design that ensures a secure and comfortable fit even during extended use. The headphones come with multiple ear tip sizes (S/M/L), allowing users to find the perfect fit for their ears. The lightweight construction further enhances comfort, making these headphones ideal for all-day wear, whether you're commuting, working, or exercising." },
                        ],
                    },
                    {
                        type: "list",
                        title: "Pros",
                        headers: [],
                        items:
                        [
                            "The Soundcore P30i offers several advantages, including advanced noise cancellation that adjusts automatically to your environment, ensuring a quieter listening experience. The long battery life, which extends up to 45 hours with the charging case, is another significant benefit, allowing you to listen to your favorite tracks for extended periods without needing to recharge. Additionally, the customizable sound profiles via the Soundcore app allow users to fine-tune their audio experience to their liking."
                        ],
                    },
                    {
                        type: "list",
                        title: "Cons",
                        headers: [],
                        items:
                        [
                            "While the Soundcore P30i has many strengths, there are a few considerations to keep in mind. Although the headphones are available in five colors, some users might wish for a broader range of color options to match their personal style. Additionally, activating ANC reduces the overall battery life, which could be a concern for those who frequently use this feature during long trips or commutes."
                        ],
                    },
                    {
                        type: "list",
                        title: "Best For",
                        headers: [],
                        items:
                        [
                            "The Soundcore P30i is best suited for users who prioritize noise cancellation, rich bass, and customizable audio settings in their headphones. It is ideal for those who need a versatile pair of wireless headphones that can transition from commuting to workouts and beyond, all while maintaining high sound quality and comfort."
                        ],
                    },
                    {
                        type: "list",
                        title: "Ideal Use Cases",
                        headers: [],
                        items:
                        [
                            "These headphones are perfect for a wide range of activities, including listening to music, watching movies, making phone calls, and working out. The IP54 splash-proof and dust-proof design ensures that the Soundcore P30i can withstand the demands of outdoor use, making it a reliable choice for both daily commutes and travel."
                        ],
                    },
                    {
                        type: "list",
                        title: "Price",
                        headers: [],
                        items:
                        [
                            "The Soundcore P30i is competitively priced at $29.99, offering a fantastic value for its feature set and performance."
                        ],
                    },
                ]
            },
        ]
    },
    {
        header: "5.  Wireless Earbuds Bluetooth 5.3 Headphones, Bass Stereo Ear Buds with Noise Cancelling Mic, 36H LED Display In Earphones IP7 Waterproof",
        paragraph: "",
        price: "$29.99", // Added price for the product
        imageSrc: "/blog-best-inear-headphone-wireless-bluetooth.png", // Add this line
        productLink: "https://amzn.to/3WKcu12",
        content:
        [
            {
                title: "Overview",
                description: "These wireless earbuds are equipped with Bluetooth 5.3 technology, offering an enhanced and stable connection for uninterrupted audio experiences. They are designed with an IP7 waterproof rating, making them resistant to water and dust. With a variety of color options—Black, Dark Green, Pink, Purple, Sky Blue, and White—these earbuds cater to different style preferences.",
                sections:
                [
                    {
                        type: "list",
                        title: "Key Features",
                        headers: [],
                        items:
                        [
                            "The earbuds utilize the latest Bluetooth 5.3 technology for a fast and reliable connection, minimizing latency and maintaining a stable link within a range of up to 15 meters. The Environmental Noise Cancellation (ENC) technology ensures clear and crisp call quality by reducing background noise. Additionally, the LED display on the charging case provides a convenient way to monitor battery levels for both the case and the earbuds. With a combination of powerful bass and fast charging capabilities, these earbuds offer a robust audio experience."
                        ],
                    },
                    {
                        type: "table",
                        title: "",
                        headers: [],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Bluetooth version</span>", Specification: "Featuring Bluetooth 5.3, these earbuds deliver improved signal transmission and stability. This version supports a range of up to 15 meters, allowing users to enjoy seamless audio streaming and connectivity without frequent disconnections." },
                            { Feature: "<span class='font-semibold italic'>Noise Cancelling Mic</span>", Specification: "The earbuds are equipped with an advanced ENC microphone that enhances call clarity by filtering out ambient noise. This technology ensures that your voice is transmitted clearly during phone calls, providing a better communication experience." },
                            { Feature: "<span class='font-semibold italic'>Battery Life and LED Display</span>", Specification: "With up to 6-8 hours of playtime on a single charge, these earbuds offer extended usage when paired with the charging case, which provides an additional 30 hours of battery life. The LED display on the charging case shows the remaining battery levels for both the earbuds and the case, enabling users to manage their charging needs effectively." },
                            { Feature: "<span class='font-semibold italic'>Waterproof Rating</span>", Specification: "The IP7 waterproof rating of these earbuds means they are protected against water immersion up to 1 meter deep. This feature, combined with dust resistance, ensures the earbuds can withstand various environmental conditions, including sweat and light rain." },
                        ],
                    },
                    {
                        type: "list",
                        title: "Pros",
                        headers: [],
                        items:
                        [
                            "These earbuds offer several benefits, including long battery life, rapid charging via a USB-C port, effective noise cancellation for clear calls, and an ergonomic design that fits comfortably in the ear. The waterproof and dustproof features add durability, making them suitable for a range of activities."
                        ],
                    },
                    {
                        type: "list",
                        title: "Cons",
                        headers: [],
                        items:
                        [
                            "Despite their many strengths, the bass performance may not be as powerful as some higher-end models. Additionally, while the waterproof design is robust, it may not be suitable for activities involving submersion in water."
                        ],
                    },
                    {
                        type: "list",
                        title: "Best For",
                        headers: [],
                        items:
                        [
                            "These earbuds are ideal for users seeking a reliable wireless audio solution with advanced connectivity and noise-cancelling features. They are particularly well-suited for individuals who engage in active lifestyles, travel frequently, or need dependable earbuds for both music and phone calls."
                        ],
                    },
                    {
                        type: "list",
                        title: "Ideal Use Cases",
                        headers: [],
                        items:
                        [
                            "Perfect for exercise, daily commutes, and travel, these earbuds are versatile for a variety of scenarios. Their waterproof design and long battery life make them suitable for extended use in different environments."
                        ],
                    },
                    {
                        type: "list",
                        title: "Price",
                        headers: [],
                        items:
                        [
                            "Priced at $29.99, these earbuds offer excellent value, combining advanced features with affordability."
                        ],
                    },
                ]
            },
        ]
    },


    
    {
        header: "Summary",
        paragraph: "Choosing the best in-ear headphones involves understanding various factors that align with your needs and preferences. The following summary highlights the top picks based on their key features, benefits, and ideal use cases.",
        content:
        [
            {
                title: "Summary of Top Picks",
                description: "",
                sections:
                [
                    {
                        type: "list",
                        title: "Recommendations Based on Use Case",
                        headers: [],
                        items:
                        [
                            "When selecting the ideal in-ear headphones, consider your primary use case.",
                            "For those seeking high-quality sound and comfort for everyday use, the Soundcore P20i In-Ear Wireless Headphone stands out with its deep bass, crisp audio, and customizable fit. It is particularly suitable for daily commutes and casual listening, thanks to its affordable price and extended battery life.",
                            "If noise cancellation and immersive sound are your priorities, the JBL Tune 130NC TWS True Wireless Earbuds are an excellent choice. With advanced Active Noise Cancelling technology and a robust 40-hour battery life, these earbuds are ideal for travel, sports, and demanding environments where clarity and noise reduction are essential.",
                            "The TOZO A1 Mini Wireless Earbuds offer comfort, portability, and affordability. Their lightweight design and long battery life make them perfect for active users who need reliable earbuds for workouts, commuting, or casual listening.",
                            "For those needing advanced noise cancellation and rich sound with customizable settings, the Soundcore P30i In-Ear Wireless Headphones provide a blend of these features. Their ergonomic design and extensive battery life make them suitable for extended use in various settings, including work, travel, and exercise.",
                            "Finally, the Wireless Earbuds Bluetooth 5.3 are ideal for users who want a balance of advanced features like noise cancellation and waterproofing at an affordable price. They cater to those who engage in active lifestyles or need dependable earbuds for both music and phone calls."
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
    <h3 className="text-2xl font-semibold mb-3 text-center">{item.title}</h3>


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
                src="/blog-best-inear-headphones-cover.jpeg"
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
                <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">5 Best in Ears Headphones<br></br>to Buy For all Budget</h1>
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
                    <h2 className="text-4xl font-medium text-neutral-700">{section.header}</h2>
                    {section.price && section.imageSrc && section.productLink && (
                      <ToggleButton price={section.price} imageSrc={section.imageSrc} productLink={section.productLink} />
                    )}
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