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
h2image?: string;
sections: Array<{
    type: 'table' | 'list' | 'flex';
    title?: string;
    headers?: string[];
    items: Array<{ Feature: string; Specification: string; h4image?: string;}> | Array<string> | Array<{ title: string; list: string[];  h4image?: string}>;
    content?: string;
    showProductFeature?: boolean;
    h3image?: string;
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
};

// Define content
const skinCareContent: Section[] = [
    {
        header: "Introduction",
        paragraph: "These days, technology is pretty much everywhere in our lives. Whether you're a stay-at-home parent, a busy worker, or a student, it's hard to avoid screens and gadgets. From video calls and meetings to managing documents and projects, technology keeps us busy. And after a long day, it's common to unwind with a bit of screen time or enjoy some music and podcasts through your headphones. If you're a parent who has this routine, chances are your kids might follow suit. You might have heard the saying, The apple doesn't fall far from the tree. Just like you enjoy your technology time, your children might want to do the same on weekends or during their downtime. As a parent, you want to ensure that the products you choose for your kids are safe and comfortable. When it comes to headphones, you're looking for something that protects their hearing while being perfect for school, travel, or just relaxing. That's why we've put together this guide to the best kids' headphones for 2024—so you can find the ideal pair that keeps your child's hearing safe and their audio experience enjoyable.",
        content:
        [
        ]
    },
    {
        header: "1. Awatrue Kids Headphones with cord",
        paragraph: "",
        price: "$31.99", // Added price for the product
        imageSrc: "/blog-best-kids-headphones-awatrue.png", // Add this line
        productLink: "https://amzn.to/46JOEap",
        content:
        [
            {
                title: "Overview",
                description: "The Awatrue Kids Headphones with Cord stand out in the crowded market of children's headphones, offering a blend of safety, comfort, and fun. Priced at $31.99, these headphones are designed with young listeners in mind, ensuring their auditory safety while providing an engaging and enjoyable experience. The headphones are equipped with a volume-limiting feature that caps the sound at 85 decibels, making them a reliable choice for parents who want to protect their children's hearing. Beyond safety, these headphones are adorned with vibrant colors and themes that resonate with kids, making them a popular accessory for both school and leisure.",
                sections:
                [
                ]
            },
            {
                title: "Features",
                description: "One of the standout features of the Awatrue Kids Headphones is their built-in volume control, which can be set to either 85 decibels for safety or 94 decibels for a slightly louder experience, depending on your preference. The headphones come with a universal 3.5mm jack, making them compatible with a wide range of devices, including Amazon tablets, smartphones, laptops, and more. They also feature a built-in microphone with a multifunctional button that allows your child to easily pick up calls, play, pause, or even switch tracks with a simple press. These headphones are designed with comfort in mind, featuring soft and breathable earmuffs that allow for extended wear without discomfort. The foldable design and extendable headband make them easy to adjust and store, while their lightweight construction ensures they don't weigh down on little heads. The headphones are available in a variety of kid-friendly colors and themes, adding an extra layer of fun to your child's listening experience.",
                sections:
                [
                ]
            },
        ]
    },
    {
        header: "Pro and Cons",
        paragraph: "The Awatrue Kids Headphones have many strengths that make them a solid choice for parents. The volume-limiting feature is a major plus, ensuring your child's hearing is protected even during extended use. The themed designs and vibrant colors are a hit with kids, turning these headphones into more than just a functional device—they become a fun accessory your child will love to use. The headphones are also built to last, with a durable design that can withstand the rough and tumble of daily use by energetic children. Additionally, their comfort-focused features, like the soft earmuffs and lightweight build, ensure that your child can wear them for hours without any discomfort. On the flip side, there are a few things to consider. The Awatrue Kids Headphones are wired, which might not appeal to everyone in an age where wireless technology is becoming the norm. While the wired connection provides reliable sound quality, it does limit mobility compared to wireless options. Additionally, for newer electronic devices, you may need a lightning or USB-C to 3.5mm adapter, which is not included with the headphones. Lastly, while the headphones cover the basics very well, they lack some of the advanced features that more tech-savvy users might be looking for. Overall, the Awatrue Kids Headphones offer a fantastic balance of safety, comfort, and fun, making them an excellent choice for parents who want to invest in a reliable and kid-friendly pair of headphones.",
        content:
        [
        ]
    },
    {
        header: "2. JLab JBuddies Studio Wireless",
        paragraph: "",
        price: "$29.99", // Added price for the product
        imageSrc: "/blog-best-kids-headphones-jlab-jbuddies.png", // Add this line
        productLink: "https://amzn.to/4do8fQ2",
        content:
        [
            {
                title: "Overview",
                description: "Searching for kid-friendly wireless headphones that are also budget-conscious? The JLab JBuddies Studio Wireless fits the bill perfectly. These headphones offer a great mix of comfort, durability, and functionality, specifically designed with kids in mind. The generous padding in the headband and ear pads feels like memory foam, making them ideal for long listening sessions during road trips or flights. Plus, they conveniently fold down into a compact size, perfect for on-the-go use.",
                sections:
                [
                ]
            },
            {
                title: "Features",
                description: "The JLab JBuddies Studio Wireless headphones are crafted to fit kids comfortably and securely without slipping off. With an over-ear design, soft Eco Leather cushions, and a padded headband, they provide all-day comfort, whether being used at school or home. A standout feature is the built-in volume limiter, which ensures sound levels stay below 85 decibels, protecting young ears from potential harm. With 13 hours of Bluetooth playtime, kids can enjoy their favorite music or educational content wirelessly, and the simple, intuitive controls make these headphones easy to use.",
                sections:
                [
                ]
            },
        ]
    },
    {
        header: "Pro and Cons",
        paragraph: "The JLab JBuddies Studio Wireless headphones shine in many areas. They're affordable, effectively limit volume to protect young ears, and deliver a solid wireless experience without distortion. On the downside, the wireless model does not include a 3.5mm jack, so those who prefer or need a wired option may need to explore other versions of these headphones.",
        content:
        [
        ]
    },
    {
        header: "3. CozyPhones Kid Headphones",
        paragraph: "",
        price: "$19.99", // Added price for the product
        imageSrc: "/blog-best-kids-headphones-cozyphones.jpeg", // Add this line
        productLink: "https://amzn.to/3Mdncbr",
        content:
        [
            {
                title: "Overview",
                description: "CozyPhones Kid Headphones are designed with comfort and practicality in mind, especially for young children. These headphones are shaped like a headband, making them an ideal choice for children, toddlers, and even babies. The stretchable and soft material ensures a snug fit, making them perfect for use at home, during car rides, or while traveling on a plane. The headphones are made from polyester with a plush, flexible fleece fabric, which feels soft against the skin and is gentle enough for extended wear. Available in a fun Unicorn Animal theme, CozyPhones come in four delightful colors: blue, purple, white, and pink. What's more, if the headband gets dirty, it's easy to clean—just remove the speakers and toss the headband into the washing machine. The speakers are easy to remove and reinsert, so maintenance is a breeze.",
                sections:
                [
                ]
            },
            {
                title: "Features",
                description: "CozyPhones are not just about comfort; they also prioritize safety and functionality. The headphones are a great alternative to traditional earbuds or over-the-ear headphones, especially for kids who find those options uncomfortable. The headband design is not only fun but also practical, staying securely in place without interfering with car seat headrests or airplane seats. This allows children to sleep comfortably while on the go. These headphones feature a volume-limiting capability, ensuring that the sound stays at a safe level for little ears, with a maximum volume of 90 dB. The flat design of the speakers inside the headband prevents any discomfort, making them an excellent choice for children with sensory processing sensitivities. Built to last, CozyPhones come with a durable 52-inch braided cord that resists kinking, twisting, or breaking, ensuring they can withstand the rigors of daily use. The 3.5 mm stereo plug is compatible with most devices, making these headphones versatile and easy to use.",
                sections:
                [
                ]
            },
        ]
    },
    {
        header: "Pro and Cons",
        paragraph: "One of the standout features of CozyPhones is their flat design, which eliminates the discomfort that often comes with traditional earbuds or bulky headphones. The flat speakers inside the headband ensure that your child can lie down or lean against a surface without feeling any poking or pressure, a feature that both kids and parents will appreciate. When it comes to usability, CozyPhones are straightforward to set up and use. Once the earbuds are positioned correctly within the headband, all that's left to do is put on the headband, plug it into a device, and enjoy. The instructions are clear, and even young children can quickly learn to use them on their own. In terms of sound quality, CozyPhones deliver what you'd expect from a product designed for casual listening. While the sound might be slightly muffled due to the fleece material, increasing the volume slightly usually resolves this. The sound quality is good for the intended purpose—listening to music, audiobooks, or watching videos—without being overly sophisticated. Durability is another area where CozyPhones shine. The braided cable adds to the longevity of the headphones, and the well-constructed seams of the headband suggest that it will hold up well over time, even with regular use. As for drawbacks, the main issue lies in getting the headphones on, especially for kids on the higher end of the growth scale. The fit is snug, and while this ensures the headphones stay in place, it might take a little effort for children to put them on independently at first. Additionally, although the fleece material is soft and comfortable, it might be a bit warm in hotter climates. However, this is a minor concern, especially considering the overall benefits. In summary, CozyPhones Kid Headphones are a fantastic option for parents looking for a comfortable, durable, and kid-friendly headphone solution. They are well-suited for casual use and provide a pleasant listening experience without compromising on comfort or safety. Whether you're traveling, at home, or just looking for a fun way for your child to enjoy their favorite media, CozyPhones are worth considering.",
        content:
        [
        ]
    },
    {
        header: "4. LilGadgets Connect+",
        paragraph: "",
        price: "$19.95", // Added price for the product
        imageSrc: "/blog-best-kids-headphones-lilgadgets-connectplus.png", // Add this line
        productLink: "https://amzn.to/3WPdAZk",
        content:
        [
            {
                title: "Overview",
                description: "The LilGadgets Connect+ is a wired headphone designed specifically for children, priced at $19.95 for most colors, with a slight increase to $20.95 for the green and red variants. Available in six vibrant colors, these headphones cater to children aged 3 to 7 years. The Connect+ combines comfort with functionality, featuring a foldable design, SharePort technology for easy audio sharing, and durable construction suited for active kids.",
                sections: []
            },
            {
                title: "Features",
                description: "The LilGadgets Connect+ offers several key features:",
                sections: [
                    {
                        type: "list",
                        items: [
                            "Comfortable Design: Soft, padded ear cushions and lightweight design for extended wear.",
                            "SharePort Technology: Allows multiple headphones to connect to one device without splitters.",
                            "Durability: Tangle-resistant nylon cable and sturdy construction for active kids.",
                            "Wide Compatibility: Works with any device that has a 3.5mm audio jack.",
                            "Volume Limitation: Capped at 93dB for safety, with a frequency range of 20Hz to 20kHz."
                        ]
                    }
                ]
            },
        ]
    },
    {
        header: "Pro and Cons",
        paragraph: "The LilGadgets Connect+ headphones are a fantastic pick for kids. They score high on comfort, come in a bunch of fun colors, and have some handy features like SharePort technology, which makes sharing audio a breeze. They're also built to last with a tangle-resistant cable and comfortable fit. Although the volume limit is set at 93dB, which is a tad higher than the usual 85dB standard, it still provides safe listening for children. With all their focus on comfort and ease of use, the Connect+ is a great choice for families who are always on the move.",
        content: []
    },
    {
        header: "5. Koss KPH7 Kids Headphones",
        paragraph: "",
        price: "$5.49", // Added price for the product
        imageSrc: "/blog-best-kids-headphones-koss-kph7.png",
        productLink: "https://amzn.to/3SOMi4i",
        content:
        [
            {
                title: "Overview",
                description: "The Koss KPH7 Kids Headphones offer an ultra-lightweight and budget-friendly audio solution. Priced at just $5.49, these headphones come in a classic black color and are crafted by Koss, a brand known for its dedication to high-quality sound since its inception in 1958. The KPH7 is designed to provide a comfortable and accessible listening experience, whether for educational use or personal enjoyment.",
                sections: []
            },
            {
                title: "Features",
                description: "The Koss KPH7 stands out with its ultra-lightweight design and soft foam cushions, ensuring a comfortable fit even during extended listening sessions. The adjustable headband allows for a customizable fit, enhancing comfort. While it's an excellent choice for schools, libraries, and learning labs due to its affordability, it's also versatile enough for personal use. Despite its low price, it delivers decent spatial reconstruction and clarity, making it a solid choice for casual listening.",
                sections: []
            },
        ]
    },
    {
        header: "Pro and Cons",
        paragraph: "The Koss KPH7 offers great value for its low price. Its lightweight and adjustable design make it a practical choice for both kids and adults. It's perfect for schools or anyone looking for a cost-effective audio solution. However, it does come with a few drawbacks. The headphones have low sensitivity, which can make them hard to drive with a phone. They lack bass and sub-bass, and can sound tinny with certain tracks. Additionally, the bulky plug might not fit well with some phone cases. Despite these cons, the Koss KPH7 remains a reliable option for budget-conscious users seeking a functional and comfortable headphone.",
        content: []
    },
    {
        header: "Conclusion",
        paragraph: "Choosing the right headphones for your child doesn't have to be overwhelming. With so many great options available, it's all about finding the one that fits your family's needs best.",
        content: [
            {
                title: "",
                description: "The Awatrue Kids Headphones with Cord are an excellent choice if you're looking for something that combines safety and fun. Their built-in volume limiter keeps your child's hearing protected, and the soft, breathable earmuffs ensure they stay comfortable during long listening sessions. While they come with a wired connection, their durability and safe design make them a favorite for both school and home use.\n\nIf wireless convenience is what you're after, the JLab JBuddies Studio Wireless headphones offer a fantastic blend of comfort and functionality. The memory foam padding and volume limiter are perfect for protecting young ears, while the Bluetooth connectivity makes them ideal for on-the-go listening. Though they lack a wired option, they provide a great wireless experience for tech-savvy families.\n\nFor a focus on comfort and practicality, consider the CozyPhones Kid Headphones. Their unique headband design is ideal for children who find traditional headphones uncomfortable. Plus, the washable fabric and safe volume-limiting feature make them a practical choice for daily use. They might be a bit warm in hotter climates, but the overall comfort and ease of maintenance are noteworthy.\n\nThe LilGadgets Connect+ headphones stand out for their durability and convenience, thanks to features like SharePort technology that allows multiple kids to share audio easily. They're built to last with a tangle-resistant cable and comfortable fit. Although the volume cap is slightly higher than some other models, it still provides safe listening for children.\n\nLastly, the Koss KPH7 Kids Headphones offer a budget-friendly option that doesn't compromise on comfort. Despite being an affordable choice, they provide a decent listening experience with soft foam cushions and an adjustable headband. While they lack some advanced features and may not deliver the richest sound, their low price and reliable design make them a solid pick for schools and casual use.\n\nEach of these headphones brings something special to the table, so whether you're prioritizing safety, comfort, or affordability, you'll find a great option here. Explore our full list of the 5 Best Kids' Headphones of 2024 to find the perfect pair for your child and keep their hearing safe while they enjoy their favorite audio adventures!",
                sections: []
            }
        ]
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
      <div>
        {!renderProductFeature && item.title && (
          <h3 className={`text-center text-2xl font-semibold my-5 ${
            item.sections.some(section => section.type === 'table') ? 'text-center' : ''
          }`}>
            {item.title}
          </h3>
        )}
        {renderProductFeature && price && imageSrc && productLink ? (
          <div className="flex flex-col md:flex-row p-3 rounded-2xl mb-4">
            <div className="flex flex-col basis-full md:basis-2/5 space-y-4">
              <div className="flex items-center justify-center h-full">
                <Image src={imageSrc} alt="Product" width={350} height={350} className="rounded-xl" />
              </div>
            </div>
            <div className="basis-full md:basis-3/5 mt-4 md:mt-0 md:ml-4 flex flex-col justify-center items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                {item.description && (
                  <p className="bg-blue-100 text-xl p-5 rounded-xl w-full">{item.description}</p>
                )}
              </div>
              <div className="mt-4">
                <ToggleButton price={price} imageSrc={imageSrc} productLink={productLink} />
              </div>
            </div>
          </div>
        ) : (
          // Render description outside of product feature section
          item.description && (
            <div className="flex">
              {item.h2image && <div className="basis-1/2"><Image src={item.h2image} alt="Product" width={1000} height={1000} className="rounded-xl" /></div>}
              <p className={`${item.h2image ? 'basis-1/2' : 'w-full'} bg-blue-100 text-xl p-5 rounded-xl mb-4`}>{item.description}</p>
            </div>
          )
        )}
        {item.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="">
            {section.type === 'table' ? (
              <div className="flex flex-col space-y-4">
                {Array.from({ length: Math.ceil(section.items.length / 3) }).map((_, rowIndex) => (
                  <div key={rowIndex} className={`grid gap-2 ${
                    rowIndex === 0 || section.items.length - rowIndex * 3 >= 3
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                      : section.items.length - rowIndex * 3 === 1
                      ? 'grid-cols-1 mx-8 md:mx-16 lg:mx-32'
                      : 'grid-cols-1 md:grid-cols-2'
                  }`}>
                    {(section.items as Array<{ Feature: string; Specification: string; h4image?: string }>)
                      .slice(rowIndex * 3, rowIndex * 3 + 3)
                      .map((item, index) => (
                        <div key={index} className="flex flex-col bg-gray-100 p-4 rounded-lg">
                          {item.h4image && (
                            <div className="text-base">
                              <Image 
                                src={item.h4image} 
                                alt="Product" 
                                width={240} 
                                height={240} 
                                className="rounded-xl border-2 border-white p-10 mx-auto" 
                              />
                            </div>
                          )}
                          <div 
                            className="font-semibold mb-2 mx-auto" 
                            dangerouslySetInnerHTML={{ __html: item.Feature }}
                          />
                          <div className="text-sm">{item.Specification}</div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ) : section.type === 'list' ? (
              <div className="flex flex-col md:flex-row items-center gap-4 my-10 md:text-left text-center">
                {section.h3image && (
                  <div className="md:flex-shrink-0 flex-col mb-4 md:mb-0 md:w-1/5">
                  {section.title && (
                    <h4 className="mb-2 text-xl font-medium md:hidden block">{section.title}</h4>
                  )}
                    <Image 
                      src={section.h3image} 
                      alt="Product" 
                      width={240} 
                      height={240} 
                      className="rounded-xl border-2 border-black p-10" 
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-center md:w-4/5 md:pl-4">
                  {section.title && (
                    <h4 className="mb-2 text-xl font-medium md:block hidden">{section.title}</h4>
                  )}
                  {(section.items as Array<string>).length === 1 ? (
                    <p className="mb-3">{(section.items as Array<string>)[0]}</p>
                  ) : (
                    <ul className="list-disc pl-5 mb-3">
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
                            {item.title === "Pros" ? (
                              <TbPlus className="text-green-500" />
                            ) : (
                              <TbMinus className="text-red-500" />
                            )}
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
  
      
              {skinCareContent.map((section, index) => (
                  <div key={index} className="flex flex-col space-y-10 pb-10 pt-20 px-0 md:px-[20px] lg:px-[40px]">
                  <div className="flex flex-col space-y-6">
                      <h2 className="text-4xl font-medium text-neutral-700">{section.header}</h2>
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