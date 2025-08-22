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
const skinCareContent: Section[] = [
  {
      header: "Introduction",
      paragraph: "Greetings! If you're on the hunt for a smartwatch, you're diving into a realm where technology meets convenience and style. These devices have come a long way from simply telling time; they now offer a range of features designed to enhance your lifestyle, from tracking your health to keeping you connected. With so many smartwatches on the market, finding the right one can seem like a challenge. Let's simplify the process by breaking down the essential aspects that matter most, so you can make an informed decision and find the perfect smartwatch for your needs.",
      content:
      [
      ]
  },
  {
    header: "Evaluation Criteria",
    paragraph: "To guide you through your decision-making process, we'll focus on several key criteria:",
    content:
    [
        {
            title: "Features and Functionality",
            description: "We'll start by exploring the core features and functionalities of each smartwatch. This includes everything from fitness tracking capabilities to how well it handles notifications and app integrations. Understanding these aspects will help you determine which model aligns best with your lifestyle.",
            h2image:"/blog-best-smartwatch-features.webp",
            sections:
            [
            ]
        },
        {
            title: "Design and Comfort",
            description: "Next, we'll delve into design and comfort. A smartwatch should enhance your style while providing comfort for all-day wear. We'll evaluate how each model balances aesthetics with practicality, making sure it suits both your personal taste and daily needs.",
            h2image:"/blog-best-smartwatch-comfort.jpeg",
            sections:
            [
            ]
        },
        {
            title: "Battery Life",
            description: "Battery life is crucial—no one wants a smartwatch that needs constant recharging. We'll review how long each smartwatch lasts on a single charge, so you can choose one that fits smoothly into your routine without frequent power-ups.",
            h2image:"/blog-best-smartwatch-batterylife.jpeg",
            sections:
            [
            ]
        },
        {
            title: "Compatibility with Other Devices",
            description: "Lastly, we'll look at compatibility. A smartwatch should work seamlessly with your existing devices. We'll examine how well each model integrates with phones and other gadgets to ensure you get the most out of its features without any hassle.",
            h2image:"/blog-best-smartwatch-compatibility.jpeg",
            sections:
            [
            ]
      },
    ]
  },
  {
    header: "Top Smartwatches of the Year",
    paragraph: "",
    loneheader:true,
    content: []
  },
    {
        header: "1. Apple Watch SE (2nd GEN. 2024) [GPS 40 mm] Smartwatch",
        paragraph: "",
        price: "$144.00", // Added price for the product
        imageSrc: "/blog-best-smartwatch-applewatchse.png",
        productLink: "https://amzn.to/3T9Z3Xl",
        content: [
            {
                title: "Overview",
                description: "The Apple Watch SE (2nd Gen, 2024) [GPS 40 mm] was released on September 16th, 2022. This popular model is a top choice for those seeking an entry-level wearable, offering all the essential fitness tracking features for individuals who do not require advanced options like blood oxygen monitoring or skin temperature tracking. It is powered by the S8 Chip, enhancing its performance and efficiency.",
                showProductFeature: true, // Product feature will be shown here
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
                                  "The Apple Watch SE is a great choice if you're looking for something affordable. It's priced between $238.00 and $238.99, depending on the color. If you're on a budget, the Midnight Aluminum Case with Midnight Sport Band and the Starlight Aluminum Case with Starlight Sport Band both come in at $238.00. For a touch more style, the Silver Aluminum Case with Blue Sport Band is available for $238.99.",
                                  "But the Apple Watch SE isn't just about being budget-friendly. It has a sleek and durable design that's swim-proof, with 50 meters of water resistance. This makes it perfect for just about any activity, and it's a popular choice among parents who want to keep an eye on their kids' safety and activity.",
                                  "Another cool feature? When you pair it with the latest Sport Loop, the watch is carbon neutral, so you can feel good about your eco-friendly choice.",
                                  "With watchOS 10, the Apple Watch SE offers even more convenience. The Smart Stack and updated apps let you see everything you need at a glance. It integrates smoothly with other Apple devices, letting you unlock your Mac automatically, find your devices easily, and use Apple Pay for quick transactions. Plus, it comes with a solid range of fitness and health tracking features like heart rate monitoring, GPS, and activity tracking, making it a solid companion for staying active and healthy.",
                                  "One of the standout qualities of the Apple Watch SE is how snappy and slick it is. It's incredibly light and comfortable to wear, making it a pleasure for daily use. It offers excellent mid-tier fitness tracking and includes new car crash detection for added safety. And let's not forget the impressive battery life, which means you can go longer between charges.",
                                  "Overall, the Apple Watch SE combines affordability, style, and functionality, making it a strong contender in the smartwatch market."
                                ]
                            },
                            {
                                title: "Cons",
                                list: [
                                  "However, it's worth noting a few things before you make your decision. The watch doesn't feature an always-on screen or built-in ECG, and its battery life falls a bit short compared to some Fitbits. Also, while it's packed with essential features, it lacks some of the advanced health monitoring capabilities like blood oxygen and skin temperature tracking found in higher-end models.",
                                  "But if you're after simplicity and a solid set of core features, the Apple Watch SE delivers excellent value. It's a strong contender in the smartwatch arena, keeping you motivated, active, and connected without the bells and whistles of more advanced models"
                                ]
                            },
                        ]
                    }, 
                ]
            },
        ]
    },


    {
      header: "2. Fitbit Versa 4 Fitness Smartwatch",
      paragraph: "",
      price: "$208.99",
      imageSrc: "/blog-best-smartwatch-fitbit-versa4.png",
      productLink: "https://amzn.to/478zbAW",
      content: [
        {
          title: "Overview",
          description: "The Fitbit Versa 4 Fitness Smartwatch arrived on September 23, 2022, bringing with it a blend of practical fitness tracking and essential smartwatch features, all at an accessible price. It's perfect for those who want to keep track of their health and stay connected, without paying for features they might not need.\n\nFor the shopper looking to combine style with affordability, the Fitbit Versa 4 offers three attractive color options, each with its own price point. You can choose the vibrant waterfall blue/platinum for $189, opt for the sleek black/graphite at $185, or go for the soft pink sand/copper rose, which is the most budget-friendly at $132. This variety gives you the flexibility to select the look and price that best aligns with your personal style and budget.",
          showProductFeature: true,
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
                    "One of the big wins for the Fitbit Versa 4 is that it's a much lower-maintenance option compared to an Apple Watch. You're not bogged down with constant charging, and you don't have to worry about navigating a complex system. The reworked interface is intuitive and easy to understand, making it user-friendly, even if you're not tech-savvy.",
                    "The design of the Versa 4 is another highlight—it manages to be both distinctive and cute, standing out without being too flashy. It's a smartwatch that you'll feel comfortable wearing whether you're at the gym or out for a casual dinner. Plus, the battery life is fairly impressive in the default mode, meaning you can go several days without needing to recharge, which is a huge convenience.",
                    "In terms of functionality, the Versa 4 delivers solid performance. It covers all your basic fitness needs with tracking for steps, heart rate, SpO2 levels, and more. The built-in GPS is a nice touch for those who love outdoor activities, and the automatic exercise tracking ensures you never miss a stat, even if you forget to start an activity." 
                  ]
                },
                {
                  title: "Cons",
                  list: [
                    "While the Fitbit Versa 4 is a great all-rounder, it's not without its downsides. Some users have noticed issues with heart rate accuracy, particularly during high-intensity workouts, which could be a concern if precise heart rate monitoring is critical for your fitness regimen.",
                    "Another limitation is the lack of third-party apps. For the shopper who enjoys customizing their smartwatch with a wide range of apps, the Versa 4 might feel a bit restrictive in this regard. The integrated speaker also leaves something to be desired. It's functional for phone calls, but the sound quality isn't the best, which might be a letdown if you're hoping to use it for voice assistants or listening to audio directly from your watch.",
                    "Lastly, some features weren't available at launch, which might have been frustrating for early adopters. However, software updates typically roll out to address these gaps, so it's worth checking if the features you're interested in have since been added.",
                    "In summary, while the Fitbit Versa 4 does have a few quirks",
                  ]
                },
              ]
            }, 
          ]
        },
      ]
    },

    {
      header: "3. Samsung Galaxy Watch 6 Classic Smartwatch",
      paragraph: "",
      price: "$208.99",
      imageSrc: "/blog-best-smartwatch-galaxy-watch6.png",
      productLink: "https://amzn.to/4dAMlsg",
      content: [
        {
          title: "Overview",
          description: "The Samsung Galaxy Watch 6 Classic Smartwatch was released on July 26, 2023, and quickly became a favorite for those who appreciate a bold, classic design paired with modern tech features. Priced at $208.99, this smartwatch delivers on both style and functionality, making it a great option for those who want a high-performing wearable that stands out on the wrist.",
          showProductFeature: true,
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
                    "The Samsung Galaxy Watch 6 Classic lives up to its name with its big, bold, and elegant look. It's the kind of watch that catches the eye, and if you're someone who loves large, noticeable wearables, this 47mm model is likely to appeal to you. The return of the rotating bezel is a welcome feature, adding a touch of nostalgia while also being practical for navigating the watch's many apps and features.",
                    "Samsung has also packed this smartwatch with Wear OS 4 and One UI Watch 5, offering a smooth, intuitive experience that makes it easy to access all the information you need, whether it's tracking your workout, checking the weather, or staying on top of notifications. The software is paired with a comprehensive set of sensors and features, including advanced heart rate monitoring, ECG, body composition analysis, and enhanced sleep tracking.",
                    "Battery life is another plus for this watch. Despite being packed with features, the battery holds up well, often lasting through a full day and into the next without needing a recharge, even with active use."
                  ]
                },
                {
                  title: "Cons",
                  list: [
                    "While the Samsung Galaxy Watch 6 Classic has a lot going for it, there are a few aspects that might give potential buyers pause. For one, the watch is on the heavier side, weighing in at 59g for the 47mm model (the smaller 43mm version is 33.3g). This weight, combined with its large size, might make it uncomfortable for those with smaller wrists, especially if worn for extended periods, like during sleep.",
                    "The watch is quite large and may feel oversized to some, particularly if you prefer something more subtle. The integrated speaker, while functional, doesn't offer the best sound quality, which could be a minor annoyance if you're relying on it for calls or voice assistants. Furthermore, some features weren't available at launch, which may have frustrated early adopters, though these are likely to be added through future updates.",
                    "In conclusion, the Samsung Galaxy Watch 6 Classic Smartwatch is a solid choice for those who love the look and feel of a big, bold smartwatch and want to stay connected while tracking their health. However, if you have smaller wrists or prefer a lighter, more discreet device, you might find it a bit overwhelming. Still, for its price and the wealth of features it offers, it's hard to find a better big Wear OS smartwatch on the market."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    {
      header: "4. Fitbit Sense 2",
      paragraph: "",
      price: "$238.95",
      imageSrc: "/blog-best-smartwatch-fitbit-sense2.png",
      productLink: "https://amzn.to/3SIk6jG",
      content: [
        {
          title: "Overview",
          description: "The Fitbit Sense 2, launched on September 23, 2022, is the brand's top-tier health and fitness smartwatch. Priced at $238.95, it comes with a range of features designed to help you manage stress, monitor your sleep, and keep tabs on your overall well-being. It's a bit pricier than some other models, but the Sense 2 is packed with tools that make it a worthwhile investment for those serious about their health.",
          showProductFeature: true,
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
                    "One of the biggest perks of the Fitbit Sense 2 is its impressive battery life. You can go about five days between charges with moderate use, which is fantastic compared to many other smartwatches that need daily charging. Even with the always-on display turned on, you'll still get a solid 2-3 days before needing to plug it in. This means less time worrying about battery life and more time focusing on your health goals.",
                    "The Sense 2 is also incredibly comfortable to wear. It's lightweight and designed for all-day use, so whether you're working out, going about your daily routine, or getting a good night's sleep, it won't feel like a burden on your wrist. The interface is user-friendly, with a layout that's easy to navigate, even if you're new to smartwatches. Plus, Fitbit made a smart move by replacing the touch-sensitive side with a physical button, making it much easier to use, especially during workouts or when you're on the go."
                  ]
                },
                {
                  title: "Cons",
                  list: [
                    "While the Fitbit Sense 2 offers a lot, there are a few areas where it doesn't quite hit the mark. For example, it doesn't support music storage or playback, which might be a bit disappointing if you enjoy listening to music directly from your watch during workouts. However, this might not be a dealbreaker if you usually carry your phone with you anyway.",
                    "Another thing to keep in mind is that while the heart rate tracking is generally reliable, it may not always be as accurate as some other devices, especially during high-intensity workouts. If you're someone who needs pinpoint accuracy for your training sessions, this is something to consider, but for everyday health monitoring, it still does a good job.",
                    "One more thing to note is that to unlock all the advanced features of the Sense 2, you'll need a Fitbit Premium subscription. While this does add some extra cost, it also opens up a lot of valuable insights and tools that can really enhance your health tracking experience. And lastly, the removal of third-party app support means the Sense 2 isn't as customizable as some other smartwatches. However, if you're mainly interested in the core health and fitness features, this might not be a big deal for you.",
                    "All in all, the Fitbit Sense 2 is a great choice for those who are focused on their health and well-being. It offers a comfortable, user-friendly experience with a range of advanced features that can help you stay on top of your health. While it might not have all the bells and whistles of some other smartwatches, its strengths lie in its dedication to helping you live a healthier, less stressful life. If that's what you're looking for, the Sense 2 is definitely worth considering."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    {
      header: "5. Apple Watch Series 9 [GPS 41 mm] Smartwatch",
      paragraph: "",
      price: "$337.88",
      imageSrc: "/blog-best-smartwatch-applewatch9.jpeg",
      productLink: "https://amzn.to/3YCYmcE",
      content: [
        {
          title: "Overview",
          description: "The Apple Watch Series 9 [GPS 41 mm], launched on September 12, 2023, is Apple's latest take on the ultimate smartwatch experience. Priced at $337.88, it offers a range of new features and enhancements that make it a standout choice for anyone looking to upgrade their wrist tech. If you've been considering a smartwatch that seamlessly blends style, functionality, and top-notch performance, the Series 9 might just be what you're looking for.",
          showProductFeature: true,
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
                    "One of the first things you'll notice about the Apple Watch Series 9 is how quick and responsive it is, thanks to the new S9 chip. This upgraded processor makes everything from scrolling through apps to launching features feel incredibly smooth. Apple has also introduced a nifty double-tap gesture, allowing you to control your watch with just a tap of your thumb and forefinger. It's a small addition, but it adds a level of convenience that you didn't know you needed until you try it.",
                    "Another highlight is the display. The Series 9 boasts a screen that's twice as bright as its predecessor, reaching up to 2000 nits. This makes it super easy to see what's on your watch, even in direct sunlight. Whether you're checking a message while out for a jog or using the watch's workout features on a bright day, the clarity is impressive. Plus, the always-on Retina display is vibrant and sharp, and it adjusts beautifully to different lighting conditions.",
                    "On the health front, the Apple Watch Series 9 continues to excel. It includes an ECG app, blood oxygen monitoring, and even temperature sensing for a more holistic view of your health. It's like having a mini wellness clinic on your wrist. The watch also supports a wide array of workouts, from running to yoga, and with three months of Apple Fitness+ included, staying on top of your fitness goals has never been easier.",
                    "Durability is another strong point. The Series 9 is designed to withstand everyday wear and tear, with water resistance up to 50 meters and tough, crack-resistant glass. Whether you're swimming, hiking, or just navigating your daily routine, this watch is built to last. And with seamless integration with other Apple devices, you can unlock your Mac, pay with Apple Pay, or find your iPhone with just a tap."
                  ]
                },
                {
                  title: "Cons",
                  list: [
                    "Of course, like any gadget, the Apple Watch Series 9 isn't without its quirks. One thing to keep in mind is the battery life, which, while solid, hasn't seen much of an upgrade from previous models. You're looking at about 18 hours on a single charge, which means you'll likely be charging it daily. While it does have fast charging, so you can quickly power it up during your morning routine, it's still something to consider if you were hoping for a multi-day battery life.",
                    "The design, while sleek and familiar, hasn't changed much over the years. If you were expecting a fresh new look, you might be a little underwhelmed. That said, Apple has stuck with a design that works and feels premium, even if it's not a radical departure from what we've seen before.",
                    "When it comes to health tracking, the Series 9 offers plenty, but it's not perfect. There's still no blood pressure monitoring, and while the watch tracks a lot of health metrics, some advanced features like Heart Rate Variability (HRV) are better utilized with third-party apps. Sleep tracking is solid, but if you're looking for the most detailed analysis, you might find third-party apps offer a bit more.",
                    "All in all, the Apple Watch Series 9 is an excellent choice if you're looking for a smartwatch that's packed with features and integrates seamlessly with your Apple devices. It's fast, functional, and durable, making it a great companion for both everyday life and more active pursuits. While it might not reinvent the wheel, it certainly refines it, offering a polished and powerful smartwatch experience that's hard to beat. If you're in the market for a new watch and value both performance and style, the Series 9 is definitely worth a closer look."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    {
      header: "Final Recommendations",
      paragraph: "",
      content: [
        {
          title: "For IOS Users",
          description: "If you're an iOS user, the Apple Watch Series 9 is a perfect fit for your lifestyle. It offers seamless integration with your other Apple devices, allowing you to unlock your Mac, use Apple Pay, and track down your iPhone with ease. The Series 9 is packed with features like the new S9 chip, which makes everything run smoother, and the innovative double-tap gesture that adds a whole new level of convenience. Its bright, always-on Retina display ensures you can see your notifications and apps clearly, even in direct sunlight. While the design may feel familiar, it's a refined experience that works effortlessly within the Apple ecosystem.\n\nFor those who want to enjoy the Apple Watch experience without the higher price tag, the Apple Watch SE (2nd Gen, 2024) is an excellent alternative. It might not have all the advanced health features of the Series 9, but it delivers solid performance with the S8 chip and integrates just as smoothly with your other Apple devices. Plus, it's light, comfortable, and priced more affordably, making it a great choice for first-time Apple Watch users or those looking for a reliable, budget-friendly option.",
          sections: []
        },
        {
          title: "For Fitness Enthusiasts",
          description: "If staying active is your top priority, the Fitbit Versa 4 is a fantastic option. It's designed to make fitness tracking simple and effective, with features like built-in GPS, automatic exercise tracking, and a long battery life that lets you focus on your workouts without worrying about frequent recharges. The Versa 4 is also lightweight and easy to use, with an intuitive interface that doesn't overwhelm you with unnecessary options. Whether you're running, swimming, or just keeping track of your daily steps, this smartwatch has you covered.\n\nFor those who prefer a more classic design with advanced fitness features, the Samsung Galaxy Watch 6 Classic offers a blend of style and functionality. Its bold, rotating bezel not only adds a touch of elegance but also makes it easy to navigate through your apps and settings. This watch is equipped with a comprehensive set of fitness and health tracking tools, including ECG, body composition analysis, and enhanced sleep tracking. It's a perfect match for anyone who wants a smartwatch that stands out while keeping them on top of their fitness goals.",
          sections: []
        },
        {
          title: "For Advanced Health Tracking",
          description: "If you're serious about monitoring your health, the Fitbit Sense 2 is the smartwatch to consider. It offers impressive battery life and a comfortable design that's ideal for all-day wear. The Sense 2 is packed with advanced health features, including stress management tools, heart rate tracking, and sleep monitoring, making it a powerful companion for anyone looking to improve their overall well-being. While it doesn't support music storage or third-party apps, its focus on health and wellness is what really sets it apart.\n\nThe Apple Watch Series 9 also excels in health tracking, offering features like an ECG app, blood oxygen monitoring, and temperature sensing. It's a great option for those who want an all-in-one device that combines advanced health monitoring with the convenience of a smartwatch. If you value both health insights and seamless integration with your Apple devices, the Series 9 is a top contender.",
          sections: []
        },
      ]
    },
    {
      header: "Conclusions",
      paragraph: "",
      content: [
        {
          title: "Importance of Choosing the Right Smartwatch",
          description: "Choosing the right smartwatch is essential because it becomes an integral part of your daily routine, helping you stay connected, active, and healthy. Whether you need seamless integration with your iPhone, comprehensive fitness tracking, or advanced health monitoring, selecting a smartwatch that fits your specific needs can make a significant difference in how effectively you achieve your goals.",
          sections: []
        },
        {
          title: "Additional Considerations",
          description: "When deciding on a smartwatch, consider factors like battery life, ease of use, and how well it integrates with your existing devices. For instance, if you're already an Apple user, the seamless connectivity of an Apple Watch might outweigh the benefits of other brands. On the other hand, if fitness tracking is your primary focus, a Fitbit or Samsung Galaxy Watch might offer the specialized features you need.",
          sections: []
        },
        {
          title: "Staying Updated",
          description: "As technology advances, staying updated on the latest features and improvements is key to maximizing the benefits of your smartwatch. Regular software updates can bring new functionalities and enhancements, making your device even more powerful over time. Whether you're using a Fitbit, Samsung, or Apple Watch, keeping your device updated ensures you're always getting the best performance and the most accurate data.\n\nIn summary, each of these smartwatches offers unique strengths tailored to different needs. Whether you're looking for seamless integration with iOS, advanced health tracking, or a focus on fitness, there's a smartwatch here that can help you stay connected, motivated, and on top of your health goals",
          sections: []
        },
      ]
    },
];
// Component to render content item
export default function Detail() {

    const pageTitle = '5 Best smartwatch 2024: Top picks for every budget and Activity | Lunogi';
    const pageDescription = "Discover the top 5 smartwatches of 2024 that offer a perfect balance of features, design, and affordability for every budget and activity level.";

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
                src="/blog-best-smartwatch-cover.jpeg"
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
                <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">5 Best smartwatch 2024:<br></br>Top picks for every budget and Activity</h1>
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