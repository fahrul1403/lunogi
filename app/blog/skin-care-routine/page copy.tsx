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
sections: Array<{
    type: 'table' | 'list';
    title?: string;
    items: Array<{ tip: string; product: string }> | Array<string>;
}>;
};

type Section = {
header: string;
paragraph: string;
content: ContentItem[];
};

// Define content
const skinCareContent: Section[] = [
{
    header: "Why a Consistent Skin Care Routine is Important",
    paragraph: "Maintaining a consistent skin care routine is essential for achieving and sustaining optimal skin health. Regularly following a structured regimen allows your skin to benefit from a continuous application of care, leading to numerous advantages. A consistent routine helps in promoting overall skin health by ensuring that your skin is regularly cleansed, hydrated, and protected. Cleansing your skin every day removes impurities, excess oil, and dead skin cells that can clog pores and lead to breakouts. Regular moisturizing keeps the skin's barrier intact, preventing dryness and maintaining its elasticity. In addition to daily care, a steady routine aids in preventing and treating various skin issues. For instance, consistent use of targeted treatments, such as acne-fighting ingredients or anti-aging serums, addresses specific concerns and reduces their severity over time. This regular application helps in managing conditions like acne and signs of aging.",
    content: []
},
{
    header: "Morning Skin Care Routine Tips",
    paragraph: "Starting your day with a well-structured skin care routine is essential for maintaining healthy, radiant skin. A good morning routine not only prepares your skin for the day ahead but also addresses specific skin concerns and keeps your complexion looking its best. Here are some detailed tips for an effective morning skin care routine:",
    content: [
    {
        title: "1. Cleansing",
        description: "Cleansing your face in the morning is crucial to remove any impurities, sweat, and excess oil that have accumulated overnight.",
        sections: [
        {
            type: "list",
            title: "Cleansers for Different Skin Types",
            items: [
            "For Oily Skin: Use a foaming or gel cleanser to remove excess oil and prevent shine throughout the day.",
            "For Dry Skin: Opt for a hydrating cleanser that won't strip your skin of its natural moisture.",
            "For Sensitive Skin: Choose a fragrance-free, gentle cleanser to avoid irritation."
            ]
        },
        {
            type: "list",
            title: "Additional Cleansing Tips",
            items: [
            "Use lukewarm water to avoid irritating your skin.",
            "Gently massage the cleanser in circular motions for about 30 seconds.",
            "Rinse thoroughly and pat dry with a clean towel."
            ]
        },
        ]
    },
    {
        title: "2. Toner",
        description: "Using a toner after cleansing helps to balance your skin's pH levels, remove any residual impurities, and prepare your skin for the next steps in your routine.",
        sections: [
        {
            type: "table",
            items: [
            { tip: "<span class='font-semibold italic'>Hydrating Toner</span> - Look for ingredients like hyaluronic acid and glycerin to add moisture", product: "Thayers Witch Hazel Toner</span> with Aloe Vera" },
            { tip: "<span class='font-semibold italic'>Exfoliating Toner</span> - Choose a toner with AHAs or BHAs if you have oily or acne-prone skin to gently exfoliate.", product: "Pixi Glow Tonic" },
            { tip: "<span class='font-semibold italic'>Soothing Toner</span> - Select toners with ingredients like aloe vera or chamomile for calming sensitive skin.", product: "Kiehl's Calendula Herbal-Extract Toner" }
            ]
        }
        ]
    },
    {
        title: "3. Serum",
        description: "Serums are concentrated treatments that target specific skin concerns, such as dullness, dark spots, or fine lines. Applying a serum in the morning can provide your skin with active ingredients that penetrate deeply and deliver noticeable results.",
        sections: [
        {
            type: "table",
            items: [
            { tip: "<span class='font-semibold italic'>Brightening Serum</span> - Vitamin C serums help to brighten the skin and protect against environmental damage.", product: "SkinCeuticals C E Ferulic" },
            { tip: "<span class='font-semibold italic'>Hydrating Serum</span> - Hyaluronic acid serums boost hydration and plump the skin.", product: "The Ordinary Hyaluronic Acid 2% + B5" },
            { tip: "<span class='font-semibold italic'>Anti-Aging Serum</span> - Look for ingredients like peptides or niacinamide to reduce fine lines and improve skin texture.", product: "Olay Regenerist Regenerating Serum" }
            ]
        }
        ]
    },
    {
        title: "4. Moisturizing",
        description: "Moisturizing is a critical step in any morning routine as it keeps your skin hydrated and forms a barrier to protect against environmental aggressors. The type of moisturizer you choose should depend on your skin type.",
        sections: [
        {
            type: "list",
            items: [
            "For Oily Skin: Use a lightweight, oil-free moisturizer to avoid clogging pores.",
            "For Dry Skin: Select a richer, more emollient moisturizer to provide long-lasting hydration.",
            "For Combination Skin: Opt for a gel-based moisturizer that offers hydration without heaviness."
            ]
        }
        ]
    },
    {
        title: "5. Sunscreen",
        description: "Sunscreen is the most important step in your morning skin care routine. It protects your skin from harmful UV rays, which can cause premature aging, hyperpigmentation, and skin cancer. Even on cloudy days or when indoors, applying sunscreen is a must.",
        sections: [
        {
            type: "list",
            items: [
            "SPF 30 or Higher: Ensure your sunscreen has at least SPF 30 for adequate protection.",
            "Broad Spectrum: Choose a broad-spectrum sunscreen to protect against both UVA and UVB rays.",
            "Non-Greasy Formula: Look for a lightweight, non-greasy formula that won't interfere with your makeup."
            ]
        }
        ]
    }
    ]
},
{
    header: "Night Skin Care Routine Tips",
    paragraph: "Your nighttime skin care routine is crucial for repairing and rejuvenating your skin while you sleep. Here are some essential steps to include in your evening regimen:",
    content: [
    {
        title: "1. Cleansing",
        description: "The first step in your nighttime routine should always be cleansing. This step removes makeup, dirt, oil, and impurities that have accumulated on your skin throughout the day.",
        sections: [
        {
            type: "table",
            items: [
            { tip: "<span class='font-semibold italic'>Double Cleansing</span> - Start with an oil-based cleanser to dissolve makeup and sunscreen, followed by a water-based cleanser to remove any remaining impurities.", product: "Banila Co Clean It Zero Cleansing Balm" },
            { tip: "<span class='font-semibold italic'>For All Skin Types</span> - Choose a gentle cleanser that suits your skin type to avoid stripping your skin of its natural oils.", product: "CeraVe Hydrating Facial Cleanser" }
            ]
        }
        ]
    },
    {
        title: "2. Exfoliating (2-3 times a week)",
        description: "Exfoliation is crucial for removing dead skin cells and promoting cell turnover. However, it should not be done every night to avoid irritation.",
        sections: [
        {
            type: "table",
            items: [
            { tip: "<span class='font-semibold italic'>Chemical Exfoliants</span> - Use products containing AHAs (like glycolic acid) or BHAs (like salicylic acid) to exfoliate gently.", product: "The Ordinary Glycolic Acid 7% Toning Solution" },
            { tip: "<span class='font-semibold italic'>Physical Exfoliants</span> - If you prefer physical exfoliants, choose gentle ones with fine particles to avoid damaging your skin.", product: "Dermalogica Daily Microfoliant" }
            ]
        }
        ]
    },
    {
        title: "3. Toner",
        description: "Applying a toner after cleansing helps to balance your skin's pH and prepare it for the subsequent steps in your routine. Nighttime toners can provide extra hydration or mild exfoliation.",
        sections: [
        {
            type: "list",
            items: [
            "Hydrating Toners: Look for ingredients like hyaluronic acid and glycerin for added moisture.",
            "Exfoliating Toners: For added exfoliation, choose toners with mild acids."
            ]
        }
        ]
    },
    {
        title: "4. Treatment Products",
        description: "Nighttime is the best time to apply treatment products such as serums, retinoids, and other active ingredients. These products can target specific skin concerns like aging, acne, and hyperpigmentation.",
        sections: [
        {
            type: "list",
            items: [
            "Retinoids: Use retinoids (vitamin A derivatives) to promote cell turnover and reduce signs of aging.",
            "Serums: Choose serums with active ingredients tailored to your skin concerns, such as niacinamide, peptides, or hyaluronic acid."
            ]
        }
        ]
    },
    {
        title: "5. Moisturizing",
        description: "Moisturizing is a critical step in your night routine to lock in hydration and help repair the skin barrier. Night creams are usually richer and more nourishing than day creams.",
        sections: [
        {
            type: "table",
            items: [
            { tip: "<span class='font-semibold italic'>For Oily Skin</span> - Use a lightweight, non-comedogenic moisturizer.", product: "Neutrogena Hydro Boost Gel-Cream" },
            { tip: "<span class='font-semibold italic'>For Dry Skin</span> - Opt for a thicker, more emollient night cream.", product: "Cetaphil Rich Hydrating Night Cream" },
            { tip: "<span class='font-semibold italic'>For Combination Skin</span> - Choose a balanced moisturizer that hydrates without being too heavy.", product: "CeraVe PM Facial Moisturizing Cream" }
            ]
        }
        ]
    },
    {
        title: "6. Eye Cream",
        description: "The delicate skin around the eyes can benefit from extra care at night. Eye creams can help reduce puffiness, dark circles, and fine lines.",
        sections: [
        {
            type: "list",
            items: [
            "Hydrating Eye Creams: Look for ingredients like hyaluronic acid and peptides.",
            "Anti-Aging Eye Creams: Choose eye creams with retinol or vitamin C for anti-aging benefits."
            ]
        }
        ]
    }
    ]
},
{
    header: "Conclusion",
    paragraph: "Having a consistent skin care routine morning and night is an important step to keeping skin healthy and radiant. This article has discussed the important steps you need to follow for an effective morning and evening skin care routine. By cleansing, hydrating and protecting your skin in the morning and repairing and regenerating your skin at night, you can ensure your skin is always at its best. To get optimal results, it is very important to use skin care products that suit your skin type and needs. Try to find products that are suitable for your skin care. Don't miss the opportunity to upgrade your skin care routine. Visit our website now and find the best skin care products that can help you achieve perfect skin!",
    content: []
}
];

// Component to render content item
const ContentSection = ({ item }: { item: ContentItem }) => (
<div>
    <h2 className="mb-5 text-2xl font-semibold">{item.title}</h2>
    <p className="mb-5 bg-blue-100 p-5 rounded-xl">{item.description}</p>
    {item.sections.map((section, sectionIndex) => (
    <div key={sectionIndex} className="mb-5">
        {section.type === 'table' ? (
        <div className="overflow-x-auto">
            <table className="table-auto mb-5 w-full">
            <thead className="lg:table-header-group hidden">
                <tr>
                <th className="border border-blue-200 p-5 w-1/2">Tips</th>
                <th className="border border-blue-200 p-5 w-1/2">Example Products</th>
                </tr>
            </thead>
            <tbody>
                <tr className="lg:hidden flex flex-col">
                <td className="border border-blue-200 p-5">
                    <span className="font-bold">Tips:</span>
                    <ul className="list-disc pl-5 mt-2">
                    {(section.items as Array<{ tip: string; product: string }>).map((row, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: row.tip }}></li>
                    ))}
                    </ul>
                </td>
                <td className="border border-blue-200 p-5">
                    <span className="font-bold">Example Products:</span>
                    <ul className="list-disc pl-5 mt-2">
                    {(section.items as Array<{ tip: string; product: string }>).map((row, index) => (
                        <li key={index}>{row.product}</li>
                    ))}
                    </ul>
                </td>
                </tr>
                {(section.items as Array<{ tip: string; product: string }>).map((row, index) => (
                <tr key={index} className="hidden lg:table-row">
                    <td className="border border-blue-200 p-5" dangerouslySetInnerHTML={{ __html: row.tip }}></td>
                    <td className="border border-blue-200 p-5">{row.product}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        ) : (
        <>
            {section.title && <h3 className="mb-3 text-xl font-medium">{section.title}</h3>}
            <ul className="list-inside list-disc mb-5">
            {(section.items as Array<string>).map((listItem, index) => (
                <li key={index}>{listItem}</li>
            ))}
            </ul>
        </>
        )}
    </div>
    ))}
</div>
);

export default function Detail() {
    const pageTitle = 'Morning and Night Skin Care Routine Tips | Lunogi';
    const pageDescription = 'Discover essential morning and night skin care routine tips to keep your skin glowing and healthy in the following article.';

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
            <div className="relative bg-cover bg-center h-[200px] lg:h-[400px] flex items-center justify-center text-white">
            <Image
                src="/skincare-blog.webp"
                width={1440}
                height={400}
                className="absolute inset-0 h-full object-contain"
                alt="Lunogi Smart School Hero Image"
                loading="eager"
            />

            <div className="relative z-10 flex flex-col space-y-6 items-start w-full px-7 lg:px-[156px] lg:py-[160px]">
                <Link href={'/blog'} className="flex flex-row space-x-2">
                <TbArrowLeft className="size-5 text-white" />
                <p className="font-light text-base">Back to article list</p>
                </Link>
                <div className="flex flex-row justify-between w-full">
                <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Morning and Night<br></br>Skin Care Routine Tips</h1>
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
            <div className="py-10 flex flex-col items-center px-[156px]">
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
                <div key={index} className="flex flex-col space-y-10 pb-10 pt-20 px-[96px]">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-4xl font-medium text-neutral-700">{section.header}</h1>
                    <p className="font-light text-lg text-neutral-700">{section.paragraph}</p>
                </div>
                {section.content.map((item, itemIndex) => (
                    <ContentSection key={itemIndex} item={item} />
                ))}
                </div>
            ))}
            </div>
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
        </motion.div>
        </motion.div>
        </>
    );
}