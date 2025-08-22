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
        header: "6 Best mascara 2024 For long and must have!",
        paragraph: "Finding the perfect mascara can feel like searching for a hidden gem, especially if you're after that ideal mix of length, volume, and staying power. This year, 2024 has introduced some fantastic mascaras that are catching eyes for all the right reasons. Whether you're a makeup pro or just exploring new options, I've got you covered. Let's dive into the top choices that promise to give you those stunning, long lashes you've been dreaming of!",
        content:
        [
        ]
    },
    {
        header: "Top Mascaras 2024",
        paragraph: "",
        content:
        [
        ]
    },
    {
        header: "1. Best Overall : Essence Lash Princess False Lash Mascara",
        paragraph: "",
        price: "$4.99", // Added price for the product
        imageSrc: "/blog-best-mascara-essence-lash.png", // Add this line
        productLink: "https://amzn.to/3X3dZJ0",
        content: [
            {
                title: "Overview",
                description: "If you've been on the hunt for a mascara that delivers dramatic volume and length without breaking the bank, the Essence Lash Princess False Lash Mascara might just be your new best friend. Priced at an incredibly affordable $4.99, this mascara offers a high-impact look that rivals even the most expensive brands.",
                showProductFeature: true, // Product feature will be shown here
                sections: []
            },
            {
                title: "",
                description: "What makes the Essence Lash Princess truly special is its conic shape fiber brush. This design ensures that each lash is coated evenly, creating a bold and voluminous effect that mimics the look of false lashes. You'll notice a significant difference after just one coat, but if you're aiming for a more intense look, a few extra swipes will give you that glamorous, full-lash appearance without any clumping or flaking. One of the standout features of this mascara is its longevity. It's smudge-proof and holds up beautifully throughout the day, even in humid conditions. Whether you're heading to work, out for a night on the town, or simply running errands, this mascara stays put and keeps your lashes looking fabulous. And when it's time to remove it, you won't be left struggling—it comes off easily with your favorite makeup remover. Essence's commitment to cruelty-free beauty is another reason to love this mascara. It's certified by PETA and free from parabens, fragrance, oil, and other potentially harmful ingredients, making it a safe choice for those with sensitive skin. While there's a lot to love about the Essence Lash Princess, it's worth noting that it isn't waterproof. For those long days or nights when you need your mascara to stay put without a touch-up, you might find yourself needing to reapply. Additionally, some users have mentioned a subtle chemical scent, but it's not overpowering and doesn't linger after application. Despite these minor drawbacks, the Essence Lash Princess False Lash Mascara is a game-changer in the world of affordable beauty. Its ability to deliver a high-end look at a fraction of the price is why it earns the top spot for the best overall mascara of 2024.",
                sections:
                [
                ]
            },
        ]
    },
    {
        header: "2. Best Waterproof : L'Oréal Paris Voluminous Lash Paradise Waterproof ",
        paragraph: "",
        price: "$8.24",
        imageSrc: "/blog-best-mascara-loreal-paris-voluminous.png",
        productLink: "https://amzn.to/46Kfgbn ",
        content:
        [
            {
                title: "Overview",
                description: "When it comes to waterproof mascaras, the L'Oréal Paris Voluminous Lash Paradise Waterproof Mascara is a standout. Priced at just $9.97, it's a fantastic blend of affordability and performance, making it a favorite among makeup enthusiasts and professionals alike.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "",
                description: "The first thing you'll notice about this mascara is its ability to create a full, voluminous lash look that's feathery soft to the touch. The unique formula promises 20 times more volume and up to twice the length of your natural lashes, giving you a dramatic yet natural look. The brush, with its soft wavy bristles, plays a significant role in this transformation. With over 200 bristles, it catches every lash, ensuring that each one is coated with the perfect amount of mascara for a fringe effect that's nothing short of mesmerizing. What sets this mascara apart is its staying power. True to its waterproof claim, it stays put throughout the day, no matter the weather or conditions. Whether you're caught in the rain, sweating it out at the gym, or just going through a long workday, this mascara won't budge. Yet, despite its impressive durability, it doesn't compromise on comfort. The formula is smooth, gliding onto lashes effortlessly without clumping, smudging, or flaking. However, as much as there is to love about this mascara, it's not without its minor quirks. Some users have found the brush to be a bit too thick, which can lead to excess product clinging to the lashes, potentially causing clumping if not applied carefully. But with a little practice, you can easily adjust your application technique to avoid this issue. Another highlight is that this mascara is gentle on sensitive skin. If you've struggled with mascaras that irritate the delicate skin around your eyes, you'll be pleased to know that the L'Oréal Paris Voluminous Lash Paradise has been praised for not causing any adverse reactions, even when worn daily. While it's not a perfect product—it does require some careful application to avoid clumping and may not be everyone's first choice due to the brush size—its overall performance, especially in the waterproof category, makes it a must-have in your makeup bag.",
                sections: []
            },
        ]
    },
    {
        header: "3. Best Drugstore : CoverGirl Lash Blast Volume Mascara",
        paragraph: "",
        price: "$7.18",
        imageSrc: "/blog-best-mascara-covergirl-lashblast.png",
        productLink: "https://amzn.to/4fLnUKI ",
        content:
        [
            {
                title: "Overview",
                description: "CoverGirl Lash Blast Volume Mascara has earned its place as a top contender for 2024, especially for those seeking both performance and affordability. Priced at just $8.24, this mascara offers an impressive combination of value and efficacy, making it an excellent choice for enhancing your lashes without stretching your budget.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "",
                description: "The mascara's standout feature is its ability to deliver up to ten times more volume instantly. This is thanks to its innovative brush design, which features a plastic comb bristle wand engineered to coat each lash evenly. This ensures a clump-free application and avoids the spider-leg effect, delivering a clean and polished look. Beyond its volumizing prowess, CoverGirl Lash Blast Volume Mascara is known for its smooth application and resistance to flaking and smudging. The hypoallergenic formula is gentle enough for sensitive eyes and contact lens wearers, making it a versatile option for many. Plus, CoverGirl's commitment to cruelty-free practices means you can feel confident that this product is not tested on animals. In summary, CoverGirl Lash Blast Volume Mascara is a stellar drugstore pick for 2024, combining dramatic volume with a budget-friendly price of $8.24. It proves that achieving lush, full lashes doesn't have to come with a hefty price tag.",
                sections: []
            },
        ]
    },
    {
        header: "4. Best High-End : Dior Diorshow Iconic Overcurl Mascara",
        paragraph: "",
        price: "$24.68",
        imageSrc: "/blog-best-mascara-dior-diorshow.png",
        productLink: "https://amzn.to/4e2i5qP ",
        content:
        [
            {
                title: "Overview",
                description: "In the quest for a mascara that offers both luxury and performance, the Dior Diorshow Iconic Overcurl Mascara is a standout choice. This high-end product is designed to deliver not only remarkable curl and volume but also exceptional lash care. The mascara promises a 24-hour wear that maintains its impressive curl throughout the day.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "",
                description: "The first thing you'll notice about this mascara is its ability to create a full, voluminous lash look that's feathery soft to the touch. The unique formula promises 20 times more volume and up to twice the length of your natural lashes, giving you a dramatic yet natural look. The brush, with its soft wavy bristles, plays a significant role in this transformation. With over 200 bristles, it catches every lash, ensuring that each one is coated with the perfect amount of mascara for a fringe effect that's nothing short of mesmerizing. What sets this mascara apart is its staying power. True to its waterproof claim, it stays put throughout the day, no matter the weather or conditions. Whether you're caught in the rain, sweating it out at the gym, or just going through a long workday, this mascara won't budge. Yet, despite its impressive durability, it doesn't compromise on comfort. The formula is smooth, gliding onto lashes effortlessly without clumping, smudging, or flaking. However, as much as there is to love about this mascara, it's not without its minor quirks. Some users have found the brush to be a bit too thick, which can lead to excess product clinging to the lashes, potentially causing clumping if not applied carefully. But with a little practice, you can easily adjust your application technique to avoid this issue. Another highlight is that this mascara is gentle on sensitive skin. If you've struggled with mascaras that irritate the delicate skin around your eyes, you'll be pleased to know that the L'Oréal Paris Voluminous Lash Paradise has been praised for not causing any adverse reactions, even when worn daily. While it's not a perfect product—it does require some careful application to avoid clumping and may not be everyone's first choice due to the brush size—its overall performance, especially in the waterproof category, makes it a must-have in your makeup bag.",
                sections: []
            },
        ]
    },
    {
        header: "5. Best for Sensitive Eyes  : Clinique High Impact Mascara",
        paragraph: "",
        price: "$24.70",
        imageSrc: "/blog-best-mascara-clinique-high-impact.png",
        productLink: "https://amzn.to/3SQqXHJ ",
        content:
        [
            {
                title: "Overview",
                description: "When it comes to mascara that ticks all the boxes—volume, length, and comfort—Clinique's High Impact Mascara is a solid choice, especially if you have sensitive eyes. At $24.70, this mascara offers a reliable blend of performance and ease.",
                showProductFeature: true,
                sections: []
            },
            {
                title: "",
                description: "The mascara's standout feature is its ability to deliver up to ten times more volume instantly. This is thanks to its innovative brush design, which features a plastic comb bristle wand engineered to coat each lash evenly. This ensures a clump-free application and avoids the spider-leg effect, delivering a clean and polished look. Beyond its volumizing prowess, CoverGirl Lash Blast Volume Mascara is known for its smooth application and resistance to flaking and smudging. The hypoallergenic formula is gentle enough for sensitive eyes and contact lens wearers, making it a versatile option for many. Plus, CoverGirl's commitment to cruelty-free practices means you can feel confident that this product is not tested on animals. In summary, CoverGirl Lash Blast Volume Mascara is a stellar drugstore pick for 2024, combining dramatic volume with a budget-friendly price of $8.24. It proves that achieving lush, full lashes doesn't have to come with a hefty price tag.",
                sections: []
            },
        ]
    },
    {
        header: "6. Best Volumizing: Too Faced Better Than Sex Mascara",
        paragraph: "",
        price: "$24.68",
        imageSrc: "/blog-best-mascara-too-faced-better.png",
        productLink: "https://amzn.to/3M9vJfL ",
        content:
        [
            {
                title: "Overview",
                description: "Finding the perfect mascara can feel like a bit of a treasure hunt, especially when you're looking for that magic formula that ticks all the boxes—volume, length, and staying power. Enter the Too Faced Better Than Sex Mascara, a product that's gained quite a reputation for delivering dramatic, eye-catching lashes. Priced at $24.68, this mascara promises lush, voluminous results with just a few swipes. Available in classic Black and Brown, it's designed to enhance your lashes and make a statement. Here's what you need to know if you're thinking about giving it a try",
                showProductFeature: true,
                sections: []
            },
            {
                title: "",
                description: "Too Faced Better Than Sex Mascara really shines when it comes to giving lashes that fuller, longer, and more defined look. Its unique formula is crafted to thicken, lengthen, and curl your lashes, all while avoiding clumps. The hourglass-shaped brush is designed to coat each lash evenly, ensuring a voluminous effect that stands out. Inside the tube, you'll find a blend of film-forming polymers and Acacia Senegal Tree Extract. These ingredients work together to lock in curl and add maximum volume, while peptides help nourish and strengthen your lashes. Performance-wise, this mascara holds up well even in challenging conditions. On a hot, humid day, it managed to keep lashes looking full and long with minimal flaking. Although the volume was impressive, the length didn't quite hit the high notes expected. The larger brush can make it a bit tricky to apply to lower lashes, but overall, it delivers a bold look. Customer feedback often highlights the mascara's ability to revitalize thinning lashes and add significant volume without clumping. However, some users find the brush size a bit cumbersome for their lower lashes. To get the best results, sweep the applicator through your lashes, layering it until you achieve your desired effect. Building up to three coats can give you an even more dramatic look. Just be mindful of the brush size when working on your lower lashes. In the end, Too Faced Better Than Sex Mascara lives up to its name by providing voluminous, defined lashes that make a statement. It's perfect for those who love a bold look and don't mind a slightly larger brush. If lush, dramatic lashes are on your wishlist, this mascara might just become your new go-to.",
                sections: []
            },
        ]
    },
    {
        header: "Tips for Choosing the Right Mascara",
        paragraph: "Choosing the perfect mascara can be a bit like navigating a beauty maze, but don't worry—I've got some handy tips to help you find your ideal match! Let's chat about what to look for so you can get those lashes looking fabulous. First off, think about what you want your mascara to do. If you're after big, bold volume, look for a mascara with a thick formula and a brush that pumps up the volume. But if length is more your thing, opt for a mascara with a formula that stretches out your lashes and a brush that keeps things separated. Speaking of brushes, they can really make a difference. An hourglass-shaped brush is fantastic for adding lots of volume, while a tapered brush is great for reaching those tricky corner lashes and giving a bit of length. If you've got a clump issue, a plastic comb brush can help distribute the product evenly without the dreaded clumping. If you need your mascara to stay put through sweat, tears, or a rainy day, go for a waterproof formula. It's designed to handle whatever comes your way. But for everyday use, a regular formula might be more comfortable and easier to remove. Also, check out the ingredients, especially if you have sensitive eyes. Look for mascaras that are labeled as hypoallergenic or specifically designed for sensitive eyes to avoid irritation. It's a good idea to skip products with strong fragrances or harsh chemicals. Lastly, make sure your mascara doesn't flake or clump. You want a smooth application that keeps your lashes looking great all day. Reading reviews can help you find a mascara that lives up to its promises.",
        content: [
        ]
    },
    {
        header: "Conclusion",
        paragraph: "Finding the right mascara can make all the difference in your beauty routine. Whether you're after dramatic volume, waterproof wear, or something gentle for sensitive eyes, there's mascara out there for you. For an affordable option that delivers serious impact, try the Essence Lash Princess False Lash Mascara. At just $4.99, it gives your lashes a bold look without costing a fortune. If you need waterproof, the L'Oréal Paris Voluminous Lash Paradise Waterproof Mascara is a great pick for $9.97—it stays put through anything. On a budget but still want great results? The CoverGirl Lash Blast Volume Mascara, priced at $7.18, offers amazing volume without the clumps. For a touch of luxury, the Dior Diorshow Iconic Overcurl Mascara, at $24.68, is perfect for a beautiful curl and volume. Sensitive eyes? No problem! The Clinique High Impact Mascara, at $24.70, is both comfortable and effective. And if you're looking for something that delivers incredible volume, the Too Faced Better Than Sex Mascara, also at $24.68, is a top choice for lush, dramatic lashes. Ready to upgrade your lash game? Click the links above to find the mascara that's just right for you and give your lashes the love they deserve!",
        content: [
        ]
    }

];
// Component to render content item
  export default function Detail() {
    

    const pageTitle = '6 Best mascara 2024 For long and must have!';
    const pageDescription = "6 Best mascara 2024 For long and must have!";
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
                  src="/blog-best-mascara-title.avif"
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
                  <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">{"6 Best mascara 2024\nFor long, and must have!"}</h1>
                  <div className="flex flex-col space-y-5 w-[380px]">
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