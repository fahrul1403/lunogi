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
const skinCareContent: Section[] =

[
{
    header: "",
    loneheader:true,
    imageSrc: "/blog-best-family-friendly-game-console-nintendoswitch1.png",
    paragraph: "This article will enhance your understanding of why the Nintendo Switch is the best family-friendly game console. You will find a detailed guide covering the top features and functionalities that make it perfect for all ages. Additionally, this article offers tips to optimize your gaming experience and avoid common pitfalls to help you get the most out of your Nintendo Switch. Whether you're new to gaming or looking to improve your family's gaming routine, this article will provide you with the knowledge to make the most of your console.",
    content:
    []
},

{
    header: "A. Brief History of the Nintendo Switch",
    loneheader:true,
    paragraph: "The Nintendo Switch, one of the most innovative and popular gaming consoles today, has a fascinating and dynamic history. Here is a concise narrative of the Nintendo Switch's journey from concept to becoming a global phenomenon.",
    content:
    [
        {
            title: "Pre-Launch and Development",
            description: "2014-2015: Nintendo began developing a project initially known by the code name \"NX.\" The primary goal of this project was to create a console that could function both as a home console and a portable device. After several years of intensive development, in 2016, Nintendo officially confirmed the project and announced that the new console would be launched in 2017.",
            sections: []
        },
        {
            title: "Launch",
            description: "March 3, 2017: The Nintendo Switch was officially launched worldwide. The console surprised the industry with its innovative design, which combined the features of a home console and a portable device. The launch was accompanied by several strong exclusive titles, including \"The Legend of Zelda: Breath of the Wild,\" \"1-2-Switch,\" and \"Snipperclips.\" The unique design and high-quality games immediately captured the attention of both fans and critics.",
            sections: []
        },
        {
            title: "Reception and Success",
            description: "The Nintendo Switch received overwhelming praise from both critics and consumers. In its first year, the console sold over 14.83 million units, making it one of Nintendo's best-selling consoles. The Switch ecosystem continued to grow with the release of popular exclusive titles such as \"<b><a href=''>Super Mario Odyssey</a></b>,\" \"<b><a href=''>Super Smash Bros. Ultimate</a></b>,\" and \"<b><a href=''>Animal Crossing: New Horizons</a></b>.\" This success not only impacted console sales but also strengthened Nintendo's position in the gaming market.",
            sections: []
        },
        {
            title: "Enhancements and Variations",
            description: "To cater to diverse demands, Nintendo released a more affordable and portable version, the Nintendo Switch Lite, in 2019. The Switch Lite was designed specifically for users who prefer portable gaming. In 2021, Nintendo announced and released the <b><a href=''>Nintendo Switch OLED Model</a></b>, which offered a larger and better OLED screen, as well as enhanced audio features. These variations demonstrated Nintendo's commitment to continuously develop and update its products to meet consumer needs.",
            sections: []
        },
        {
            title: "Future Prospects",
            description: "Nintendo remains committed to developing and updating the Nintendo Switch. The company promises to release more exclusive games and exciting new features. With ongoing innovation and strong marketing strategies, the Nintendo Switch is expected to continue being a top choice for families and gaming enthusiasts worldwide.",
            sections: []
        },
        {
            title: "Sales and Impact",
            description: "",
            sections:
            [
                {
                    type: "list",
                    title: "Lifetime Units Shipped",
                    headers: [],
                    items:
                    [
                        "As of the latest reports, the Nintendo Switch has shipped over 100 million units worldwide, solidifying its place as one of the best-selling consoles in history.",
                    ],
                },
                {
                    type: "list",
                    title: "Financial Impact",
                    headers: [],
                    items:
                    [
                        "The success of the Nintendo Switch has had a significant positive impact on Nintendo's financial performance, contributing to record-breaking sales and profits.",
                    ],
                },
            ]
        },
    ]
},

{
    header: "B. 12 Lesser-known Facts about The Nintendo Switch and its Games",
    loneheader:true,
    imageSrc: "/blog-best-family-friendly-game-console-nintendoswitch2.png",
    paragraph: "",
    content:
    [
        {
            title: "Hidden Developer Mode",
            description: "The Nintendo Switch has a hidden developer mode that is not widely known to the general public. This mode is primarily used by developers to test and debug their games. To access this mode, you need to perform a specific sequence of button presses on the Joy-Con controllers while the console is booting up. However, this mode is not officially supported by Nintendo and is not intended for regular users.",
            sections: []
        },
        {
            title: "Secret Easter Eggs in \"The Legend of Zelda: Breath of the Wild\"",
            description: "In \"<b><a href=''>The Legend of Zelda: Breath of the Wild</a></b>,\" there are several hidden easter eggs and references to other Nintendo games. For example, you can find a hidden shrine that plays the original \"Zelda\" theme song, and there are subtle references to \"Super Mario\" and \"Metroid\" throughout the game.",
            sections: []
        },
        {
            title: "Joy-Con Color Combinations",
            description: "The <b><a href=''>Joy-Con controllers</a></b> can be combined in various color combinations. For instance, you can use a red Joy-Con on one side and a blue Joy-Con on the other. This flexibility allows for a wide range of customization options, even though the standard colors are gray.",
            sections: []
        },
        {
            title: "HD Rumble in \"1-2-Switch\"",
            description: "The game \"<b><a href=''>1-2-Switch</a></b>\" showcases the HD Rumble feature of the Joy-Con controllers in a unique way. In one mini-game, you can feel the sensation of pouring water, which is a result of the advanced haptic feedback system.",
            sections: []
        },
        {
            title: "Secret Game in \"Super Mario Odyssey\"",
            description: "In \"Super Mario Odyssey,\" if you collect all 880 Power Moons and complete the game, you can unlock a secret game called \"Jump Force.\" This mini-game is a throwback to the original \"Super Mario\" games and offers a challenging and nostalgic experience.",
            sections: []
        },
        {
            title: "Customizable Controller Layout",
            description: "The <b><a href=''>Joy-Con controllers</a></b> can be remapped to suit your preferences. You can change the button layout and even swap the left and right Joy-Con to make the controller more comfortable for left-handed players.",
            sections: []
        },
        {
            title: "Hidden Developer Messages",
            description: "In some Nintendo Switch games, you can find hidden messages from the developers. For example, in \"The Legend of Zelda: Breath of the Wild,\" if you look closely at certain areas in the game, you might find secret messages or developer names hidden in the environment.",
            sections: []
        },
        {
            title: "Battery Life of Joy-Con",
            description: "The Joy-Con controllers have their own battery life, which can be checked in the system settings. Each Joy-Con can last for about 20 hours on a single charge, depending on usage.",
            sections: []
        },
        {
            title: "Secret Game in \"Super Smash Bros. Ultimate\"",
            description: "In \"<b><a href=''>Super Smash Bros. Ultimate</a></b>,\" if you input a specific code during the character selection screen, you can unlock a secret game called \"Classic Mode.\" This mode offers a different set of challenges and rewards compared to the standard game.",
            sections: []
        },
        {
            title: "Customizable Home Screen",
            description: "The home screen of the Nintendo Switch can be customized to a certain extent. You can rearrange the game icons, change the background, and even set specific games to always appear on the home screen for quick access.",
            sections: []
        },
        {
            title: "Animal Crossing: New Horizons",
            description: "\"<b><a href=''>Animal Crossing: New Horizons</a></b>\" became a cultural phenomenon during the COVID-19 pandemic. The game's relaxing and social aspects made it a popular choice for players looking for a calming and engaging experience.",
            sections: []
        },
        {
            title: "Exclusive Games",
            description: "The Nintendo Switch boasts a lineup of exclusive games that have received critical acclaim. \"<b><a href=''>The Legend of Zelda: Breath of the Wild</a></b>\" won multiple Game of the Year awards in 2017, and \"<b><a href=''>Super Mario Odyssey</a></b>\" and \"<b><a href=''>Super Smash Bros. Ultimate</a></b>\" have also been highly praised for their innovation and gameplay.",
            sections: []
        },
    ]
},



{
    header: "C. Why The Nintendo Switch Is The Best Family-Friendly Game Console",
    loneheader:true,
    paragraph: "In the ever-evolving world of gaming, finding a console that caters to the entire family can be a daunting task. The Nintendo Switch, however, stands out as a beacon of innovation and inclusivity, making it the ultimate choice for families looking to enjoy quality gaming experiences together. Launched in 2017, the Nintendo Switch revolutionized the gaming industry with its unique hybrid design, combining the convenience of a portable device with the power of a home console. This versatility allows families to seamlessly transition from playing on the go to enjoying a big-screen experience at home, making it a perfect fit for various lifestyles and preferences.<br></br>One of the most significant strengths of the Nintendo Switch is its vast library of family-friendly games. From the iconic \"<b><a href=''>Super Mario Odyssey</a></b>\" to the serene and engaging \"<b><a href=''>Animal Crossing: New Horizons</a></b>,\" the Switch offers a diverse selection of titles that appeal to players of all ages. These games are not only entertaining but also promote positive values such as teamwork, creativity, and problem-solving. The absence of mature-rated content and the focus on family-friendly experiences make the Switch a safe and enjoyable choice for households with young children. Additionally, the console's robust parental control features allow parents to set time limits, restrict access to certain games, and monitor their children's online activities, providing peace of mind and a controlled gaming environment.<br></br>The Nintendo Switch also excels in fostering social and cooperative play, making it an ideal platform for family game nights. The Joy-Con controllers, which can be detached and used in various configurations, enable multiple players to join in at any time, whether for competitive races in \"<b><a href=''>Mario Kart 8 Deluxe</a></b>\" or cooperative adventures in \"<b><a href=''>Super Smash Bros. Ultimate</a></b>.\" This flexibility encourages interaction and collaboration, strengthening family bonds and creating lasting memories. Furthermore, the Switch's online features, such as the Nintendo Switch Online service, offer a safe and positive community for players to connect and enjoy classic games, online multiplayer, and regular updates, ensuring that the console remains a dynamic and engaging platform for the whole family.",
    imageSrc: "/blog-best-family-friendly-game-console-nintendoswitch3.jpg",
    content:
    [
        {
            title: "Here’s a detailed look at why it is highly regarded for families:",
            description: "",
            sections:
            [
                {
                    type: "list",
                    title: "Family-Friendly Games",
                    headers: [],
                    items:
                    [
                        "'Wide Selection of All-Age Games: Nintendo is known for its commitment to creating family-friendly games. The Switch offers a vast library of games suitable for all ages, from young children to adults. Popular titles like \"Super Mario Odyssey,\" \"The Legend of Zelda: Breath of the Wild,\" and \"Animal Crossing: New Horizons\" are designed to be enjoyable and appropriate for everyone.",
                        "'No First-Person Shooters: Unlike other consoles, the Nintendo Switch does not feature many first-person shooter or mature-rated games, making it a safer choice for families with young children.",
                    ]
                },
                {
                    type: "list",
                    title: "Parental Controls",
                    headers: [],
                    items:
                    [
                        "'Robust Parental Controls: The Switch includes comprehensive parental control features that allow parents to set time limits, restrict access to certain games, and monitor their children's online activities. These controls are easy to set up and provide peace of mind for parents.",
                        "'Child Accounts: You can create separate child accounts with specific restrictions, ensuring that each family member has a tailored gaming experience.",
                    ]
                },
                {
                    type: "list",
                    title: "Multiplayer and Cooperative Play",
                    headers: [],
                    items:
                    [
                        "'Local Multiplayer: The Switch is designed for local multiplayer, making it perfect for family game nights. Games like \"Mario Kart 8 Deluxe\" and \"Super Smash Bros. Ultimate\" support multiple players, allowing the whole family to play together.",
                        "'Cooperative Modes: Many Switch games offer cooperative modes, where family members can work together to complete levels or challenges. This fosters teamwork and bonding.",
                    ]
                },
                {
                    type: "list",
                    title: "Portability and Flexibility",
                    headers: [],
                    items:
                    [
                        "'Hybrid Design: The Switch's hybrid design allows it to be used both as a home console and a portable device. You can play on the go or dock it to your TV for a big-screen experience, making it versatile for different family activities.",
                        "'Joy-Con Controllers: The Joy-Con controllers can be detached and used in various configurations, making it easy for multiple players to join in at any time.",
                    ]
                },
                {
                    type: "list",
                    title: "Educational Value",
                    headers: [],
                    items:
                    [
                        "'Educational Games: The Switch offers a variety of educational games and apps that can help children learn while they play. Games like \"Brain Age 2: More Training in Minutes a Day\" and \"Yoshi's Crafted World\" combine fun with educational content.",
                        "'Creative Play: Games like \"Labo\" encourage creative and hands-on play, where players build cardboard accessories and use them with the Switch to create unique gaming experiences.",
                    ]
                },
                {
                    type: "list",
                    title: "Community and Online Features",
                    headers: [],
                    items:
                    [
                        "'Nintendo Switch Online: The Nintendo Switch Online service provides access to a library of classic Nintendo games, online multiplayer, and cloud saves. This service is family-friendly and offers a safe online environment.",
                        "'Family Grouping: You can create a family group in the Nintendo Switch Online app, allowing you to manage multiple accounts and monitor your children's online activities.",
                    ]
                },
                {
                    type: "list",
                    title: "Positive Gaming Environment",
                    headers: [],
                    items:
                    [
                        "'Community Standards: Nintendo has strict community standards and guidelines to ensure a positive and safe online environment. This includes monitoring and moderating online interactions to prevent inappropriate behavior.",
                        "'Positive Content: The games on the Switch often promote positive values such as teamwork, creativity, and problem-solving.",
                    ]
                },
                {
                    type: "list",
                    title: "Affordable and Accessible",
                    headers: [],
                    items:
                    [
                        "'Variety of Models: The Switch comes in different models, including the Switch Lite and the Switch OLED, offering options to fit different budgets and preferences.",
                        "'Affordable Games: Many family-friendly games on the Switch are reasonably priced, making it an accessible option for families.",
                    ]
                },
                {
                    type: "list",
                    title: "Regular Updates and New Content",
                    headers: [],
                    items:
                    [
                        "'Frequent Updates: Nintendo regularly updates the Switch with new features and content, ensuring that the console remains fresh and engaging. This includes new games, updates to existing games, and system improvements.",
                        "'DLC and Expansions: Many Switch games offer downloadable content (DLC) and expansions, providing ongoing value and new experiences for players.",
                    ]
                },
                {
                    type: "list",
                    title: "Longevity and Support",
                    headers: [],
                    items:
                    [
                        "'Strong Community: The Switch has a large and active community of players, which means there are always new games, updates, and content to enjoy.",
                        "'Ongoing Support: Nintendo has a strong track record of supporting its consoles with new games and features for years after launch, ensuring that the Switch remains a relevant and enjoyable platform for families.",
                    ]
                },
            ]
            
        },
    ]
},
{
    header: "Conclusion",
    loneheader:true,
    paragraph: "The Nintendo Switch is the best family-friendly game console because it offers a wide range of family-friendly games, robust parental controls, versatile multiplayer options, and a positive gaming environment. Its hybrid design, educational value, and regular updates make it a comprehensive and engaging choice for families looking to enjoy gaming together.",
    content:
    []
},
];

// Component to render content item

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
                src="/blog-best-family-friendly-game-console-header.jpeg"
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
                <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]"> Nintendo Switch:<br></br>The Best Family-Friendly Game Console </h1>
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
    );
    }