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
    header: "Definition and Purpose of Bluetooth Trackers",
    loneheader:true,
    paragraph: "",
    content:
    [
      {
        title: "What is a Bluetooth Trackers?",
        h2image: "/blog-best-bluetooth-tracker-image1.webp",
        description: "Bluetooth Trackers are compact devices that attach to items like keys, wallets or bags and connect to your phone via Bluetooth. These best bluetooth trackers help find lost or misplaced belongings by triggering a ring when needed. Perfect for anyone who frequently misplaced belongings by triggering a ring when needed. Perfect for anyone who frequently misplaces important items, Bluetooth trackers offer a quick and easy way to keep track of equipment and other essentials.",
        sections:
        [
        ]
      },
      {
        title: "How Bluetooth Trackers work",
        h2image: "/blog-best-bluetooth-tracker-image2.jpeg",
        imagePosition:"right",
        description: "Bluetooth trackers are designed to help frequently misplaced items, such as keys, wallets or bags. These devices connect to your smartphone through an app, staying linked as long as they remain within Bluetooth range, typically around 60 meters (200 Feet). If an item is lost, the app can make the tracker emit a loud sound, making it easier to find. If the trackers go out of range, the app shows the last known location on a map, helping you retrace your steps. The connection works both ways, allowing you to use the tracker to find your phone, even if it's on silent. Bluetooth trackers are especially useful for keeping track of personal belongings within a short range, making them a practical tool for everyday use.",
        sections:
        [
        ]
      },
    ]
  },


    {
      header: "Best Trackers",
      paragraph: "",
      content:[],
      loneheader:true,
    },


  {
    header: "1. Tile Pro (2024)",
    paragraph: "",
    price: "$500-$700",
    imageSrc: "/blog-best-tracker-tile-pro.png",
    productLink: "https://amzn.to/4dF676d",
    content:
    [
      {
        title: "Overview",
        description: "The Tile Pro (2024) stands out as a leading choice for tracking essential belongings with its robust design and versatile features. Compatible with both Android and iPhone devices, this tracker offers reliable and efficient item location capabilities. Its advanced features and strong performance make it a dependable option for users seeking a high-quality tracking solution.",
        showProductFeature: true, // Product feature will be shown here
        imageAbove: false, // Set this to true to place the image above the overview
        sections: []
      },
      {
        title: "Key Features",
        description: "",
        sections:
        [
          {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
              { Feature: "<span class='font-semibold italic'>Range</span>", Specification: "The Tile Pro excels with a substantial range of up to 400 feet, which enables users to monitor their belongings from a considerable distance. In practical use, it operates reliably up to approximately 290 feet, which is superior to the range of most other trackers available."},
              { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "Equipped with a replaceable battery that lasts about one year, the Tile Pro provides enhanced longevity by allowing users to change the battery as needed. This feature ensures that the tracker remains functional without requiring frequent replacements."},
              { Feature: "<span class='font-semibold italic'>Additional Features</span>", Specification: "Designed with practicality in mind, the Tile Pro is water-resistant up to 3 feet, safeguarding it against splashes and brief submersions. It also includes a phone finder function, enabling users to locate their phone with the press of a button. The Tile network further supports item location, with alerts typically arriving within 5 to 10 minutes, ensuring efficient recovery of lost items."},
            ],
            // Alternatively, you could place showProductFeature here if you want it in a specific section
            // showProductFeature: true
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
                title: "Pros",
                list: [
                  "Exceptional performance with both Android and iPhone devices",
                  "Particularly strong performance on Android platforms",
                  "Loud alert system enhances effectiveness during searches",
                  "Extensive Tile community amplifies ability to locate lost belongings",
                ]
              },
              {
                title: "Cons",
                list: [
                  "Advanced features require a Tile Premium subscription ($3/month or $30/year)",
                  "Larger size compared to some alternatives",
                  "Higher price point (around $60)",
                ]
              },
            ]
          }
        ]
      },
      {
        title: "Best For",
        description: "",
        sections:
        [
          {
            type: "list",
            title: "Ideal use Cases",
            h3middleimage:true,
            h3images: ["/blog-best-bluetooth-trackers-tile-pro1.webp", "/blog-best-bluetooth-trackers-tile-pro2.jpeg", "/blog-best-bluetooth-trackers-tile-pro3.jpeg"],
            items:
            [
            "This best bluetooth trackers is ideal for users seeking a reliable tracking solution for both home and outdoor use. Its replaceable battery and loud alert system make it a practical choice for those who prioritize durability and ease of use. The Tile Pro is also well-suited for individuals willing to invest in premium features, including item reimbursement, to enhance their tracking experience. Tile Pro is perfect for: Keys, Electronics, Luggage. Colors: Black and White. Battery: Up to 1 year Replaceable. Range: Up to 400 ft/120m. Volume: Loudest. Water Rating: Water-Resistant (IP67). Dimensions (mm): 58 x 32 x 7.5."
            ],
          },
        ]
      },
    ]
  },






  {
    header: "2. Apple AirTag",
    paragraph: "",
    price: "$29",
    imageSrc: "/blog-best-tracker-airtag.png",
    productLink: "https://amzn.to/3Ai2DrU",
    content:
    [
      {
        title: "Overview",
        description: "The Apple AirTag is a sleek and compact tracking device designed to help you keep track of your belongings. With its seamless integration into the Apple ecosystem, the AirTag offers a user-friendly experience that ensures you never lose sight of your important items. The device is small and lightweight, making it easy to attach to various items such as keys, bags, or even a pet's collar.",
        showProductFeature: true,
        sections:
        [
        ]
      },
      {
        title: "Key Features.",
        description: "",
        sections:
        [
          {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
              { Feature: "<span class='font-semibold italic'>Integration with Apple Ecosystem</span>", Specification: "One of the standout features of the Apple AirTag is its effortless integration with the Apple ecosystem. With a simple one-tap setup, the AirTag instantly connects to your iPhone or iPad, allowing you to track your items via the Find My app. This integration extends beyond just tracking, as the AirTag also works seamlessly with Siri, enabling you to use voice commands to locate your belongings.", },
              { Feature: "<span class='font-semibold italic'>Tracking Accuracy</span>", Specification: "The Apple AirTag excels in tracking accuracy thanks to its Ultra Wideband technology. Precision Finding is a key feature that leads you directly to your nearby AirTag, making it easy to locate lost items in close proximity. For items that are farther away, the AirTag leverages the vast network of Apple devices in the Find My network, ensuring that you can find your items no matter where they are.", },
              { Feature: "<span class='font-semibold italic'>Additional Features</span>", Specification: "The AirTag is packed with additional features that enhance its functionality. It includes a built-in speaker that plays a sound to help you locate your items, and it can be put into Lost Mode, which automatically notifies you when the AirTag is detected in the Find My network. Privacy is also a top priority, with all communication encrypted and anonymous, and location data never stored on the AirTag itself. The AirTag is also IP67 water and dust resistant, making it durable enough to withstand various environments.", },
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
                  "Most effective within the Apple ecosystem, limiting functionality for Android users",
                  "Tracking accuracy can vary depending on the density of Apple devices in the area",
                ]
              },
              {
                title: "Pros",
                list: [
                  "Seamless integration with the Apple ecosystem",
                  "Precise tracking capabilities with Ultra Wideband technology",
                  "Vast Find My network for locating items",
                  "Built-in speaker for easy locating",
                  "Lost Mode for automatic notifications",
                  "Strong privacy protections",
                  "IP67 water and dust resistant",
                  "User-replaceable battery lasting over a year",
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Best For",
        description: "",
        sections:
        [
          {
            type: "list",
            title: "Ideal use Cases",
            h3middleimage:true,
            h3images: ["/blog-best-bluetooth-trackers-airtag1.jpg", "/blog-best-bluetooth-trackers-airtag2.jpg","/blog-best-bluetooth-trackers-airtag3.jpg"],
            items:
            [
            "The Apple AirTag is ideal for anyone deeply integrated into the Apple ecosystem who wants a reliable way to track their belongings. It is particularly useful for individuals who frequently lose items like keys, wallets, or bags, as well as those who want to ensure their pet's safety by attaching an AirTag to their collar. The device's small size and ease of use make it versatile for a wide range of tracking needs."
            ],
          },
        ]
      },
    ]
  },





  {
    header: "3. Tile Mate (2024)",
    paragraph: "",
    price: "$29",
    imageSrc: "/blog-best-tracker-tile-mate.png",
    productLink: "https://amzn.to/4doS3On",
    content:
    [
      {
        title: "Overview",
        description: "The Tile Mate (2024) is a versatile and reliable tracking device designed to help you keep track of your everyday items. With its compact design and advanced tracking features, the Tile Mate can easily be attached to keys, backpacks, or purses, making it an essential tool for those who frequently misplace their belongings. Available in Matte Black and White, this device seamlessly integrates with your lifestyle, providing peace of mind that your items are always within reach.",
        showProductFeature: true,
        sections:
        [
        ]
      },
      {
        title: "Key Features.",
        description: "",
        sections:
        [
          {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
              { Feature: "<span class='font-semibold italic'>Range</span>", Specification: "The Tile Mate (2024) offers an impressive Bluetooth range of up to 250 feet (76 meters), allowing you to locate your items even from a considerable distance. Whether your keys are buried under a couch cushion or left in another room, the Tile app can help you find them within this range by ringing your Tile. For items that are beyond Bluetooth range, the Tile app lets you view the last known location on a map, ensuring you can retrace your steps to find your belongings.", },
              { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "This device is equipped with a non-replaceable battery that lasts up to three years, eliminating the hassle of frequent battery changes. The long battery life ensures that the Tile Mate is always ready to help you find your lost items without the need for constant maintenance.", },
              { Feature: "<span class='font-semibold italic'>Main Features</span>", Specification: "The Tile Mate (2024) is packed with features that make it an indispensable tool for tracking your items. You can use the Tile app to ring your Tile when it's nearby or double-press the button on the Tile to make your phone ring, even if it's on silent. The device is also water-resistant with an IP67 rating, ensuring durability in various conditions. Additionally, the Tile Mate works seamlessly with smart home devices like Amazon Alexa, Google Assistant, and Siri, allowing you to find your items with simple voice commands. For enhanced security, the Tile Mate can be linked to the Tile Network, which allows other Tile users to help you find your lost item anonymously.", },
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
                  "Non-replaceable battery means device needs replacement after three years",
                  "Tracking accuracy may decrease beyond Bluetooth range",
                  "Relies on last known location instead of real-time tracking when out of range",
                ]
              },
              {
                title: "Pros",
                list: [
                  "Long battery life of up to three years",
                  "Extensive Bluetooth range of up to 250 feet",
                  "Integration with smart home devices",
                  "Versatile for tracking a wide range of items",
                  "Water-resistant design (IP67 rating)",
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Best For",
        description: "",
        sections:
        [
          {
            type: "list",
            title: "Ideal use Cases",
            h3middleimage:true,
            h3images: ["/blog-best-bluetooth-trackers-tile-mate3.jpg", "/blog-best-bluetooth-trackers-tile-mate2.jpg", "/blog-best-bluetooth-trackers-tile-mate1.jpg"],
            items:
            [
            "The Tile Mate (2024) is ideal for individuals who want a dependable way to keep track of their belongings. It is particularly useful for those who frequently lose items like keys, wallets, or bags. The device's small size and easy integration with smart home systems make it a practical choice for a wide range of tracking needs, including pet owners who want to ensure their pets are always within reach.",
            ],
          },
        ]
      },
    ]
  },
  {
    header: "4. Samsung Galaxy SmartTag",
    paragraph: "",
    price: "$29",
    imageSrc: "/blog-best-tracker-galaxy-smarttag.png",
    productLink: "https://amzn.to/4cpAnkp",
    content:
    [
      {
        title: "Overview",
        description: "The Samsung Galaxy SmartTag is a powerful Bluetooth tracking device designed to help you keep track of your personal belongings. Whether you're constantly misplacing your keys, wallet, or other essentials, the SmartTag offers a seamless solution to ensure you never lose them again. With its deep integration into the Samsung ecosystem, robust tracking capabilities, and user-friendly app, the Galaxy SmartTag stands out as one of the best trackers available for those invested in Samsung devices. It's an essential tool for anyone looking for reliable Bluetooth tracking equipment to manage their personal belongings.",
        showProductFeature: true,
        sections:
        [
        ]
      },
      {
        title: "Key Features",
        description: "",
        sections:
        [
          {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
              { Feature: "<span class='font-semibold italic'>Compatibility with Samsung Devices</span>", Specification: "The Galaxy SmartTag2 is designed to work seamlessly with Samsung smartphones and tablets running Android 11.0 or later. Through the SmartThings app, users can register their SmartTag2 and begin tracking their belongings immediately. The device also supports IoT functionalities, allowing it to activate compatible IoT devices within the SmartThings ecosystem.", },
              { Feature: "<span class='font-semibold italic'>Range</span>", Specification: "With a Bluetooth range of up to 120 meters in an obstacle-free environment, the Galaxy SmartTag2 offers extensive coverage. This range ensures that users can keep track of their belongings even when they are not immediately close by. For users who find themselves out of range, the Galaxy Find Network will utilize nearby Samsung devices to locate the SmartTag2, ensuring the device is always within reach.", },
              { Feature: "<span class='font-semibold italic'>Tracking Features</span>", Specification: "The Galaxy SmartTag2 offers a variety of tracking features, including a \"Search Nearby\" function that uses Compass View to guide users to their lost items. If the item is still out of sight, the SmartTag2 can emit an audible signal to help pinpoint its location. Additionally, the SmartTag2 features a \"Lost Mode,\" where the NFC (Near Field Communication) displays the registered owner's contact information and a message on the finder's smartphone, regardless of the operating system they use.", },
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
                  "Most effective within the Samsung ecosystem, limiting functionality for non-Samsung users",
                  "Battery not included with purchase",
                  "Bluetooth range may be limited in environments with multiple obstacles",
                ]
              },
              {
                title: "Pros",
                list: [
                  "Seamless integration with Samsung devices",
                  "Strong Bluetooth range of up to 130 yards",
                  "SmartThings Find leverages Samsung's network for robust tracking",
                  "Versatile functionality with customizable button for smart home control",
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Best For",
        description: "",
        sections:
        [
          {
            type: "list",
            title: "Ideal use Cases",
            h3middleimage:true,
            h3images: ["/blog-best-bluetooth-trackers-galaxy-smarttag1.jpeg", "/blog-best-bluetooth-trackers-galaxy-smarttag2.jpeg", "/blog-best-bluetooth-trackers-galaxy-smarttag3.jpeg"],
            items:
            [
            "The Galaxy SmartTag2 is ideal for users who are already integrated into the Samsung ecosystem and want a reliable way to keep track of their belongings. It's perfect for individuals who frequently misplace items like keys, bags, or even pets. The device is also suitable for those who need a durable, water- and dust-resistant tracker for use in various environments.",
            ],
          },
        ]
      },
    ]
  },
  {
    header: "5. Chipolo ONE",
    paragraph: "",
    price: "$29",
    imageSrc: "/blog-best-tracker-chipolo-one.png",
    productLink: "https://amzn.to/3AlB3Kg",
    content:
    [
      {
        title: "Overview",
        description: "Have you ever found yourself frantically searching for your keys or wallet? The Chipolo ONE is here to rescue you from those stressful moments. This compact yet powerful Bluetooth tracker is perfect for anyone who often misplaces important items. With its easy-to-use app and impressive features, the Chipolo ONE ensures that your valuables are always within reach. Whether you're at home or on the go, this tracker makes sure you never have to worry about losing your essentials.",
        showProductFeature: true,
        sections:
        [
        ]
      },
      {
        title: "Key Features",
        description: "",
        sections:
        [
          {
            type: "table",
            title: "Key Features",
            headers: [],
            items: [
              { Feature: "<span class='font-semibold italic'>Range</span>", Specification: "The Chipolo ONE shines with its impressive range of up to 200 feet (60 meters) in open spaces. Whether your keys have slipped between the couch cushions or your wallet is across the yard, you'll be able to track them down with ease.", },
              { Feature: "<span class='font-semibold italic'>Battery Life</span>", Specification: "One of the highlights of the Chipolo ONE is its long-lasting CR2032 battery, which can last up to 2 years. This means you can enjoy reliable tracking without the constant need to replace batteries, simplifying your life significantly.", },
              { Feature: "<span class='font-semibold italic'>Main Features</span>", Specification: "Finding your items is a breeze with the Chipolo ONE's powerful 120dB ringtone. It's loud enough to hear even in noisy environments. The tracker is also water-resistant with an IPX5 rating, so it can handle a bit of rain or splashes without a hitch. If your item goes out of range, you'll receive a helpful notification on your phone. Plus, if you mark something as lost, the Chipolo community is there to help you track it down. The tracker works seamlessly with iOS and Android devices and is compatible with voice assistants like Siri, Google Assistant, and Alexa, adding an extra layer of convenience.", },
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
                  "Bluetooth range can be affected by crowded or cluttered spaces",
                  "Relies solely on Bluetooth, no global tracking like GPS devices",
                  "Battery needs replacement after about 2 years",
                ]
              },
              {
                title: "Pros",
                list: [
                  "Extended battery life of up to 2 years",
                  "200-foot range offers ample coverage",
                  "Loud 120dB ringtone for easy finding",
                  "Water-resistant for everyday use",
                  "User-friendly app for easy setup and management",
                  "Compatibility with voice assistants",
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Best For",
        description: "",
        sections:
        [
          {
            type: "list",
            title: "Ideal use Cases",
            h3images:["/blog-best-bluetooth-tracker-chipoloone-image1.jpeg", "/blog-best-bluetooth-tracker-chipoloone-image2.jpeg", "/blog-best-bluetooth-tracker-chipoloone-image3.webp"],
            h3middleimage:true,
            items:
            [
            "The Chipolo ONE is perfect for anyone who frequently misplaces their keys, wallet, or other essential items. It's also a great choice for those looking for a reliable, easy-to-use tracking tool that integrates smoothly with their existing smart devices. For an affordable and efficient way to keep track of your belongings, the Chipolo ONE is a fantastic option.",
            ],
          },
        ]
      },
    ]
  },
  {
    header: "Conclusion",
    paragraph: "",
    content:
    [
      {
        title: "Summary of the Top Bluetooth Trackers",
        h2middleimage:true,
        h2image:"/blog-best-bluetooth-trackers-summary.webp",
        description: "In the search for the best Bluetooth trackers to safeguard your belongings, the Tile Pro (2024), Apple AirTag, Tile Mate (2024), Samsung Galaxy SmartTag, and Chipolo ONE stand out for their unique features and reliability. Each device offers a mix of functionality, range, and compatibility to cater to different needs and preferences.",
        sections:
        [
        ]
      },
      {
        title: "Recommendations",
        description: "",
        sections:
        [
          {
            type: "list",
            title: "Based on Range",
            h3image:"/blog-best-bluetooth-trackers-basedon-range.jpg",
            items:
            [
            "For those who need extensive tracking coverage, the Tile Pro (2024) is exceptional with a range of up to 400 feet, making it ideal for tracking items over greater distances. The Chipolo ONE also offers a commendable range of up to 200 feet, suitable for most indoor and outdoor settings. Both devices are excellent choices for users seeking broad tracking capabilities.",
            ],
          },
          {
            type: "list",
            title: "Based on Compatibility",
            h3image:"/blog-best-bluetooth-trackers-basedon-compatibility.jpeg",
            items:
            [
            "The Apple AirTag is best suited for users within the Apple ecosystem, providing seamless integration with iOS devices and Siri for voice commands. On the other hand, the Samsung Galaxy SmartTag is designed for Samsung users, leveraging the SmartThings app for comprehensive tracking and smart home integration. For a more universal option, the Tile Mate (2024) and Chipolo ONE are compatible with both iOS and Android devices, offering flexibility across different platforms.",
            ],
          },
        ]
      },
      {
        title: "Final Thoughts",
        h2middleimage:true,
        description: "The Apple AirTag is best suited for users within the Apple ecosystem, providing seamless integration with iOS devices and Siri for voice commands. On the other hand, the Samsung Galaxy SmartTag is designed for Samsung users, leveraging the SmartThings app for comprehensive tracking and smart home integration. For a more universal option, the Tile Mate (2024) and Chipolo ONE are compatible with both iOS and Android devices, offering flexibility across different platforms.",
        h2image:"/placeholder-icon.jpg",
        sections:
        [
          {
            type: "list",
            title: "Choosing the Right Trackers for your Needs",
            items:
            [
            "Selecting the right Bluetooth tracker depends largely on your specific needs and the ecosystem you are most engaged with. If range and durability are your top priorities, the Tile Pro (2024) and Chipolo ONE are strong candidates. For seamless integration with Apple or Samsung devices, the Apple AirTag and Samsung Galaxy SmartTag are ideal choices, respectively. Meanwhile, the Tile Mate (2024) offers a balanced mix of features and affordability, making it a practical option for general use. <br><br> Each tracker has its strengths and potential drawbacks, but all provide valuable assistance in keeping track of your belongings. Whether you prioritize range, compatibility, or additional features, there is a tracker suited to your needs, ensuring your equipment remains within reach and secure.",
            ],
          },
        ]
      },
    ]
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
                src="/blog-best-tracker-cover.jpeg"
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
                <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">5 Best Bluetooth Trackers <br></br>To Help Find Your Equipment</h1>
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