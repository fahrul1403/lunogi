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
        content: [
            {
                title: "Overview",
                description: "The Awatrue Kids Headphones with Cord stand out in the crowded market of children's headphones, offering a blend of safety, comfort, and fun. Priced at $31.99, these headphones are designed with young listeners in mind, ensuring their auditory safety while providing an engaging and enjoyable experience. The headphones are equipped with a volume-limiting feature that caps the sound at 85 decibels, making them a reliable choice for parents who want to protect their children’s hearing. Beyond safety, these headphones are adorned with vibrant colors and themes that resonate with kids, making them a popular accessory for both school and leisure.",
                showProductFeature: true, // Product feature will be shown here
                sections: []
            },
            {
                title: "Features",
                description: "One of the standout features of the Awatrue Kids Headphones is their built-in volume control, which can be set to either 85 decibels for safety or 94 decibels for a slightly louder experience, depending on your preference. The headphones come with a universal 3.5mm jack, making them compatible with a wide range of devices, including Amazon tablets, smartphones, laptops, and more. They also feature a built-in microphone with a multifunctional button that allows your child to easily pick up calls, play, pause, or even switch tracks with a simple press.<br></br>These headphones are designed with comfort in mind, featuring soft and breathable earmuffs that allow for extended wear without discomfort. The foldable design and extendable headband make them easy to adjust and store, while their lightweight construction ensures they don't weigh down on little heads. The headphones are available in a variety of kid-friendly colors and themes, adding an extra layer of fun to your child's listening experience.",
                sections:
                [
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
                                    "The volume-limiting feature is a major plus, ensuring your child's hearing is protected even during extended use.",
                                    "The themed designs and vibrant colors are a hit with kids, turning these headphones into more than just a functional device—they become a fun accessory your child will love to use.",
                                    "The headphones are built to last, with a durable design that can withstand the rough and tumble of daily use by energetic children.",
                                    "Their comfort-focused features, like the soft earmuffs and lightweight build, ensure that your child can wear them for hours without any discomfort.",
                                    "The wired connection provides reliable sound quality."
                                ]
                            },
                            {
                                title: "Cons",
                                list: [
                                    "The Awatrue Kids Headphones are wired, which might not appeal to everyone in an age where wireless technology is becoming the norm.",
                                    "The wired connection does limit mobility compared to wireless options.",
                                    "For newer electronic devices, you may need a lightning or USB-C to 3.5mm adapter, which is not included with the headphones.",
                                    "While the headphones cover the basics very well, they lack some of the advanced features that more tech-savvy users might be looking for."
                                ]
                            },
                        ]
                    }, 
                ]
            },
        ]
    },
    {
        header: "2. JLab JBuddies Studio Wireless",
        paragraph: "",
        price: "$29.99",
        imageSrc: "/blog-best-kids-headphones-jlab-jbuddies.png",
        productLink: "https://amzn.to/4do8fQ2",
        content:
        [
            {
                title: "Overview",
                description: "Searching for kid-friendly wireless headphones that are also budget-conscious? The JLab JBuddies Studio Wireless fits the bill perfectly. These headphones offer a great mix of comfort, durability, and functionality, specifically designed with kids in mind. The generous padding in the headband and ear pads feels like memory foam, making them ideal for long listening sessions during road trips or flights. Plus, they conveniently fold down into a compact size, perfect for on-the-go use.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "Features",
                description: "The JLab JBuddies Studio Wireless headphones are crafted to fit kids comfortably and securely without slipping off. With an over-ear design, soft Eco Leather cushions, and a padded headband, they provide all-day comfort, whether being used at school or home. A standout feature is the built-in volume limiter, which ensures sound levels stay below 85 decibels, protecting young ears from potential harm. With 13 hours of Bluetooth playtime, kids can enjoy their favorite music or educational content wirelessly, and the simple, intuitive controls make these headphones easy to use.",
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
                                    "The JLab JBuddies Studio Wireless headphones shine in many areas. They're affordable, effectively limit volume to protect young ears, and deliver a solid wireless experience without distortion."
                                ]
                            },
                            {
                                title: "Cons",
                                list: [
                                    "On the downside, the wireless model does not include a 3.5mm jack, so those who prefer or need a wired option may need to explore other versions of these headphones."
                                ]
                            },
                        ]
                    }, 
                ]
            },
        ]
    },
    {
        header: "3. CozyPhones Kid Headphones",
        paragraph: "",
        price: "$19.99",
        imageSrc: "/blog-best-kids-headphones-cozyphones.jpeg",
        productLink: "https://amzn.to/3Mdncbr",
        content:
        [
            {
                title: "Overview",
                description: "CozyPhones Kid Headphones are designed with comfort and practicality in mind, especially for young children. These headphones are shaped like a headband, making them an ideal choice for children, toddlers, and even babies. The stretchable and soft material ensures a snug fit, making them perfect for use at home, during car rides, or while traveling on a plane. The headphones are made from polyester with a plush, flexible fleece fabric, which feels soft against the skin and is gentle enough for extended wear.<br></br>Available in a fun Unicorn Animal theme, CozyPhones come in four delightful colors: blue, purple, white, and pink. What's more, if the headband gets dirty, it's easy to clean—just remove the speakers and toss the headband into the washing machine. The speakers are easy to remove and reinsert, so maintenance is a breeze.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "Features",
                description: "CozyPhones are not just about comfort; they also prioritize safety and functionality. The headphones are a great alternative to traditional earbuds or over-the-ear headphones, especially for kids who find those options uncomfortable. The headband design is not only fun but also practical, staying securely in place without interfering with car seat headrests or airplane seats. This allows children to sleep comfortably while on the go.<br></br>These headphones feature a volume-limiting capability, ensuring that the sound stays at a safe level for little ears, with a maximum volume of 90 dB. The flat design of the speakers inside the headband prevents any discomfort, making them an excellent choice for children with sensory processing sensitivities.<br></br>Built to last, CozyPhones come with a durable 52-inch braided cord that resists kinking, twisting, or breaking, ensuring they can withstand the rigors of daily use. The 3.5 mm stereo plug is compatible with most devices, making these headphones versatile and easy to use.",
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
                                    "One of the standout features of CozyPhones is their flat design, which eliminates the discomfort that often comes with traditional earbuds or bulky headphones. The flat speakers inside the headband ensure that your child can lie down or lean against a surface without feeling any poking or pressure, a feature that both kids and parents will appreciate. When it comes to usability, CozyPhones are straightforward to set up and use. Once the earbuds are positioned correctly within the headband, all that's left to do is put on the headband, plug it into a device, and enjoy. The instructions are clear, and even young children can quickly learn to use them on their own. In terms of sound quality, CozyPhones deliver what you'd expect from a product designed for casual listening. While the sound might be slightly muffled due to the fleece material, increasing the volume slightly usually resolves this. The sound quality is good for the intended purpose—listening to music, audiobooks, or watching videos—without being overly sophisticated. Durability is another area where CozyPhones shine. The braided cable adds to the longevity of the headphones, and the well-constructed seams of the headband suggest that it will hold up well over time, even with regular use."
                                ]
                            },
                            {
                                title: "Cons",
                                list: [
                                    "As for drawbacks, the main issue lies in getting the headphones on, especially for kids on the higher end of the growth scale. The fit is snug, and while this ensures the headphones stay in place, it might take a little effort for children to put them on independently at first. Additionally, although the fleece material is soft and comfortable, it might be a bit warm in hotter climates. However, this is a minor concern, especially considering the overall benefits."
                                ]
                            },
                        ]
                    }, 
                ]
            },
        ]
    },
    {
        header: "4. LilGadgets Connect+",
        paragraph: "",
        price: "$19.95",
        imageSrc: "/blog-best-kids-headphones-lilgadgets-connectplus.png",
        productLink: "https://amzn.to/3WPdAZk",
        content:
        [
            {
                title: "Overview",
                description: "The LilGadgets Connect+ is a wired headphone designed specifically for children, priced at $19.95 for most colors, with a slight increase to $20.95 for the green and red variants. Available in six vibrant colors, these headphones cater to children aged 3 to 7 years. The Connect+ combines comfort with functionality, featuring a foldable design, SharePort technology for easy audio sharing, and durable construction suited for active kids.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "Features",
                description: "The LilGadgets Connect+ offers several key features: Comfortable Design with soft, padded ear cushions and lightweight design for extended wear. SharePort Technology allows multiple headphones to connect to one device without splitters. Durability is ensured with a tangle-resistant nylon cable and sturdy construction for active kids. It has wide compatibility, working with any device that has a 3.5mm audio jack. For safety, the volume is limited and capped at 93dB, with a frequency range of 20Hz to 20kHz.",
                sections: [
                    {
                        type: "table",
                        title: "Key Features",
                        headers: [],
                        items: [
                          { Feature: "<span class='font-semibold italic'>Comfortable Design</span>", Specification: "The Connect+ headphones prioritize comfort, making them ideal for extended wear. The soft, padded ear cushions and lightweight design mean kids can enjoy their music or movies without discomfort, whether they’re on a car ride or relaxing at home.", },
                          { Feature: "<span class='font-semibold italic'>SharePort Technology</span>", Specification: "One of the coolest features is SharePort Technology. It lets you connect multiple headphones to one device without needing a bunch of splitters. This means your kids can easily share their audio experiences with friends or family—no extra gadgets required.", },
                          { Feature: "<span class='font-semibold italic'>Durability</span>", Specification: "These headphones are built to last. The cable is wrapped in tough, tangle-resistant nylon, so it can handle the enthusiastic handling of kids. Plus, the built-in microphone is handy for making calls or chatting during a video call.", },
                          { Feature: "<span class='font-semibold italic'>Wide Compatibility</span>", Specification: "The Connect+ works with virtually any device that has a 3.5mm audio jack, including smartphones, tablets, and laptops. It’s a versatile choice that fits well into any tech setup.", },
                          { Feature: "<span class='font-semibold italic'>Volume Limitation</span>", Specification: "To keep little ears safe, the volume is capped at 93dB. This is slightly higher than the usual 85dB standard but still safe for young listeners. With a frequency range of 20Hz to 20kHz, kids get clear and balanced sound without having to crank up the volume.", },
                        ],
                    },
                    {
                        type: "flex",
                        items: [
                            {
                                title: "Pros",
                                list: [
                                    "The LilGadgets Connect+ headphones are a fantastic pick for kids. They score high on comfort, come in a bunch of fun colors, and have some handy features like SharePort technology, which makes sharing audio a breeze. They're also built to last with a tangle-resistant cable and comfortable fit."
                                ]
                            },
                            {
                                title: "Cons",
                                list: [
                                    "Although the volume limit is set at 93dB, which is a tad higher than the usual 85dB standard, it still provides safe listening for children."
                                ]
                            },
                        ]
                    }, 
                ]
            },
        ]
    },
    {
        header: "5. Koss KPH7 Kids Headphones",
        paragraph: "",
        price: "$5.49",
        imageSrc: "/blog-best-kids-headphones-koss-kph7.png",
        productLink: "https://amzn.to/3SOMi4i",
        content:
        [
            {
                title: "Overview",
                description: "The Koss KPH7 Kids Headphones offer an ultra-lightweight and budget-friendly audio solution. Priced at just $5.49, these headphones come in a classic black color and are crafted by Koss, a brand known for its dedication to high-quality sound since its inception in 1958. The KPH7 is designed to provide a comfortable and accessible listening experience, whether for educational use or personal enjoyment.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "Features",
                description: "The Koss KPH7 stands out with its ultra-lightweight design and soft foam cushions, ensuring a comfortable fit even during extended listening sessions. The adjustable headband allows for a customizable fit, enhancing comfort. While it's an excellent choice for schools, libraries, and learning labs due to its affordability, it's also versatile enough for personal use. Despite its low price, it delivers decent spatial reconstruction and clarity, making it a solid choice for casual listening.",
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
                                    "The Koss KPH7 offers great value for its low price. Its lightweight and adjustable design make it a practical choice for both kids and adults. It's perfect for schools or anyone looking for a cost-effective audio solution."
                                ]
                            },
                            {
                                title: "Cons",
                                list: [
                                    "However, it does come with a few drawbacks. The headphones have low sensitivity, which can make them hard to drive with a phone. They lack bass and sub-bass, and can sound tinny with certain tracks. Additionally, the bulky plug might not fit well with some phone cases."
                                ]
                            },
                        ]
                    }, 
                ]
            },
        ]
    },
    {
        header: "Conclusion",
        paragraph: "Choosing the right headphones for your child doesn't have to be overwhelming. With so many great options available, it's all about finding the one that fits your family's needs best.",
        content: [
            {
                title: "",
                description: "<b>The Awatrue Kids Headphones</b> with Cord are an excellent choice if you're looking for something that combines safety and fun. Their built-in volume limiter keeps your child's hearing protected, and the soft, breathable earmuffs ensure they stay comfortable during long listening sessions. While they come with a wired connection, their durability and safe design make them a favorite for both school and home use.<br></br>If wireless convenience is what you're after, the JLab JBuddies Studio Wireless headphones offer a fantastic blend of comfort and functionality. The memory foam padding and volume limiter are perfect for protecting young ears, while the Bluetooth connectivity makes them ideal for on-the-go listening. Though they lack a wired option, they provide a great wireless experience for tech-savvy families.<br></br>For a focus on comfort and practicality, consider the CozyPhones Kid Headphones. Their unique headband design is ideal for children who find traditional headphones uncomfortable. Plus, the washable fabric and safe volume-limiting feature make them a practical choice for daily use. They might be a bit warm in hotter climates, but the overall comfort and ease of maintenance are noteworthy.<br></br>The LilGadgets Connect+ headphones stand out for their durability and convenience, thanks to features like SharePort technology that allows multiple kids to share audio easily. They're built to last with a tangle-resistant cable and comfortable fit. Although the volume cap is slightly higher than some other models, it still provides safe listening for children.<br></br>Lastly, the Koss KPH7 Kids Headphones offer a budget-friendly option that doesn't compromise on comfort. Despite being an affordable choice, they provide a decent listening experience with soft foam cushions and an adjustable headband. While they lack some advanced features and may not deliver the richest sound, their low price and reliable design make them a solid pick for schools and casual use.<br></br>Each of these headphones brings something special to the table, so whether you're prioritizing safety, comfort, or affordability, you'll find a great option here. Explore our full list of the 5 Best Kids' Headphones of 2024 to find the perfect pair for your child and keep their hearing safe while they enjoy their favorite audio adventures!",
                sections: []
            }
        ]
    }
];
// Component to render content item
  export default function Detail() {
    

    const pageTitle = '5 Best kids headphones 2024: Top picks for Protect Your Childs Hearing | Lunogi';
    const pageDescription = "Discover the top 5 kids headphones of 2024 that offer excellent sound quality, comfort, and safety features to protect your child's hearing."
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
                  src="/blog-best-kids-headphones-header.webp"
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
                  <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">5 Best kids headphones 2024:<br></br>Top picks for Protect Your Childs Hearing</h1>
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