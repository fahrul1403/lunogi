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
const skinCareContent: Section[] =

[
    {
        header: "",
        paragraph: "This article will increase your knowledge of the important steps to keep your skin healthy and radiant all the time. You will find a detailed step-by-step routine for morning and evening skin care. Additionally, this article advises you to optimize your skin care routine and avoid common mistakes to help you achieve the best results. Are you new to skin care or want to improve your current skin care routine? This article will provide you with the knowledge to perfect your daily routine.",
        content: []
    },
    {
        header: "Why a Consistent Skin Care Routine is Important",
        imageSrc: '/skincare-blog.webp',  
        paragraph: "Maintaining a consistent skin care routine is essential for achieving and sustaining optimal skin health. Regularly following a structured regimen allows your skin to benefit from a continuous application of care, leading to numerous advantages.<br></br>A consistent routine helps in promoting overall skin health by ensuring that your skin is regularly cleansed, hydrated, and protected. Cleansing your skin every day removes impurities, excess oil, and dead skin cells that can clog pores and lead to breakouts. Regular moisturizing keeps the skin's barrier intact, preventing dryness and maintaining its elasticity.<br></br>In addition to daily care, a steady routine aids in preventing and treating various skin issues. For instance, consistent use of targeted treatments, such as acne-fighting ingredients or anti-aging serums, addresses specific concerns and reduces their severity over time. This regular application helps in managing conditions like acne and signs of aging.",
        content: []
    },
    {
        header: "Morning Skin Care Routine Tips",
        loneheader: true,
        imageSrc: "/blog-skin-care-routine-day.jpeg",
        paragraph: "Starting your day with a well-structured skin care routine is essential for maintaining healthy, radiant skin. A good morning routine not only prepares your skin for the day ahead but also addresses specific skin concerns and keeps your complexion looking its best. Here are some detailed tips for an effective morning skin care routine:",
        content:
        []
    },
    {
        header: "1. Cleansing",
        paragraph: "Cleansing your face in the morning is crucial to remove any impurities, sweat, and excess oil that have accumulated overnight. A gentle cleanser that suits your skin type is essential.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>For Oily Skin</span>", Specification: "Use a foaming or gel cleanser to remove excess oil and prevent shine throughout the day." },
                            { Feature: "<span class='font-semibold italic'>For Dry Skin</span>", Specification: "Opt for a hydrating cleanser that won't strip your skin of its natural moisture." },
                            { Feature: "<span class='font-semibold italic'>For Sensitive Skin</span>", Specification: "Choose a fragrance-free, gentle cleanser to avoid irritation." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>La Roche-Posay Effaclar Purifying Foaming Gel</span>", 
                            Specification: "For Oily Skin",
                            h4image: "/blog-skin-care-routine-laroche-posay.jpeg",
                            price: "$14.99",
                            purchaseLink: "https://amzn.to/473e0QE"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>CeraVe Hydrating Facial Cleanser</span>", 
                            Specification: "For Dry Skin",
                            h4image: "/blog-skin-care-routine-cerave-hydrating-cleanser.jpeg",
                            price: "$15.99",
                            purchaseLink: "https://amzn.to/4cLyJd9"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Aveeno Ultra-Calming Foaming Cleanser</span>", 
                            Specification: "For Sensitive Skin",
                            h4image: "/blog-skin-care-routine-aveeno-foaming-cleanser.jpeg",
                            price: "$7.97",
                            purchaseLink: "https://amzn.to/4g2rQGX"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "2. Toner",
        paragraph: "Using a toner after cleansing helps to balance your skin's pH levels, remove any residual impurities, and prepare your skin for the next steps in your routine. Toners can also provide additional benefits, such as hydration or oil control.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Hydrating Toner</span>", Specification: "Look for ingredients like hyaluronic acid and glycerin to add moisture." },
                            { Feature: "<span class='font-semibold italic'>Exfoliating Toner</span>", Specification: "Choose a toner with AHAs or BHAs if you have oily or acne-prone skin to gently exfoliate." },
                            { Feature: "<span class='font-semibold italic'>Soothing Toner</span>", Specification: "Select toners with ingredients like aloe vera or chamomile for calming sensitive skin." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Thayers Witch Hazel Toner with Aloe Vera</span>", 
                            Specification: "Hydrating Toner",
                            price: "$10.95",
                            h4image: "/blog-skin-care-routine-thayers-toner.jpeg",
                            purchaseLink: "https://amzn.to/4fUIpEO"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Pixi Glow Tonic</span>", 
                            Specification: "Exfoliating Toner",
                            price: "$18.00",
                            h4image: "/blog-skin-care-routine-pixiglow-tonic.jpeg",
                            purchaseLink: "https://amzn.to/3T94RQN"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Kiehl's Calendula Herbal-Extract Toner</span>", 
                            Specification: "Soothing Toner",
                            price: "$45.00",
                            h4image: "/blog-skin-care-routine-kehls-calendula-extract.jpeg",
                            purchaseLink: "https://amzn.to/4e0nv5l"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "3. Serum",
        paragraph: "Serums are concentrated treatments that target specific skin concerns, such as dullness, dark spots, or fine lines. Applying a serum in the morning can provide your skin with active ingredients that penetrate deeply and deliver noticeable results.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Brightening Serum</span>", Specification: "Vitamin C serums help to brighten the skin and protect against environmental damage." },
                            { Feature: "<span class='font-semibold italic'>Hydrating Serum</span>", Specification: "Hyaluronic acid serums boost hydration and plump the skin." },
                            { Feature: "<span class='font-semibold italic'>Anti-Aging Serum</span>", Specification: "Look for ingredients like peptides or niacinamide to reduce fine lines and improve skin texture." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>SkinCeuticals C E Ferulic</span>", 
                            Specification: "Brightening Serum",
                            price: "$169.00",
                            h4image: "/blog-skin-care-routine-seoulceuticals-vitaminc.jpeg",
                            purchaseLink: "https://amzn.to/4e3PnWv"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>The Ordinary Hyaluronic Acid 2% + B5</span>", 
                            Specification: "Hydrating Serum",
                            price: "$7.50",
                            h4image: "/blog-skin-care-routine-theordinary-hyaluronic.jpeg",
                            purchaseLink: "https://amzn.to/4dwwZFL"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Olay Regenerist Regenerating Serum</span>", 
                            Specification: "Anti-Aging Serum",
                            price: "$22.84",
                            h4image: "/blog-skin-care-routine-olay-regenerist.jpeg",
                            purchaseLink: "https://amzn.to/3XhRr7z"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "4. Moisturizing",
        paragraph: "Moisturizing is a critical step in any morning routine as it keeps your skin hydrated and forms a barrier to protect against environmental aggressors. The type of moisturizer you choose should depend on your skin type.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>For Oily Skin</span>", Specification: "Use a lightweight, oil-free moisturizer to avoid clogging pores." },
                            { Feature: "<span class='font-semibold italic'>For Dry Skin</span>", Specification: "Select a richer, more emollient moisturizer to provide long-lasting hydration." },
                            { Feature: "<span class='font-semibold italic'>For Combination Skin</span>", Specification: "Opt for a gel-based moisturizer that offers hydration without heaviness." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Neutrogena Hydro Boost Water Gel</span>", 
                            Specification: "Oily Skin",
                            price: "$16.97",
                            h4image: "/blog-skin-care-routine-neutrogena-hydroboost.jpeg",
                            purchaseLink: "https://amzn.to/3ADqCC6"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Eucerin Advanced Repair Cream</span>", 
                            Specification: "Dry Skin",
                            price: "$12.99",
                            h4image: "/blog-skin-care-routine-eucerin-advanced-repair.jpeg",
                            purchaseLink: "https://amzn.to/3AHLgkn"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator</span>", 
                            Specification: "Combination Skin",
                            price: "$42.50",
                            h4image: "/blog-skin-care-routine-clinique-moisture-surge-force.jpeg",
                            purchaseLink: "https://amzn.to/4e0kyBR"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "5. Sunscreen",
        paragraph: "Sunscreen is the most important step in your morning skin care routine. It protects your skin from harmful UV rays, which can cause premature aging, hyperpigmentation, and skin cancer. Even on cloudy days or when indoors, applying sunscreen is a must.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>SPF 30 or Higher</span>", Specification: "Ensure your sunscreen has at least SPF 30 for adequate protection." },
                            { Feature: "<span class='font-semibold italic'>Broad Spectrum</span>", Specification: "Choose a broad-spectrum sunscreen to protect against both UVA and UVB rays." },
                            { Feature: "<span class='font-semibold italic'>Non-Greasy Formula</span>", Specification: "Look for a lightweight, non-greasy formula that won't interfere with your makeup." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Elta MD UV Clear Broad-Spectrum SPF 46</span>", 
                            Specification: "Oily Skin",
                            price: "$39.00",
                            h4image: "/blog-skin-care-routine-eltamd-spf46.jpeg",
                            purchaseLink: "https://amzn.to/3AHO4Os"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 100</span>", 
                            Specification: "Dry Skin",
                            price: "$36.99",
                            h4image: "/blog-skin-care-routine-larosche-posay-anthelios.jpeg",
                            purchaseLink: "https://amzn.to/3X1MGOi"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Neutrogena Sensitive Skin Face Liquid Sunscreen SPF 50</span>", 
                            Specification: "Sensitive Skin",
                            price: "$8.97",
                            h4image: "/blog-skin-care-routine-neutrogena-spf30.jpeg",
                            purchaseLink: "https://amzn.to/3yXKL5m"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "Night Skin Care Routine Tips",
        loneheader: true,
        imageSrc: "/blog-skin-care-routine-night.webp",
        paragraph: "A nighttime skin care routine is essential for repairing and rejuvenating your skin while you sleep. This is the time when your skin heals and regenerates, making it crucial to provide it with the right care and nourishment. Here are detailed tips for an effective night skin care routine:",
        content:
        []
    },
    {
        header: "1. Cleansing",
        paragraph: "The first step in your nighttime routine should always be cleansing. This step removes makeup, dirt, oil, and impurities that have accumulated on your skin throughout the day.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Double Cleansing</span>", Specification: "Start with an oil-based cleanser to dissolve makeup and sunscreen, followed by a water-based cleanser to remove any remaining impurities." },
                            { Feature: "<span class='font-semibold italic'>For All Skin Types</span>", Specification: "Choose a gentle cleanser that suits your skin type to avoid stripping your skin of its natural oils." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Banila Co Clean It Zero Cleansing Balm</span>", 
                            Specification: "Oil-Based Cleanser",
                            price: "$19.00",
                            h4image: "/blog-skin-care-routine-banilaco-cleanit-zero.jpeg",
                            purchaseLink: "https://amzn.to/3Z3ifK7"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>CeraVe Hydrating Facial Cleanser</span>", 
                            Specification: "Water-Based Cleanser",
                            price: "$15.99",
                            h4image: "/blog-skin-care-routine-cerave-facial-cleanser.jpeg",
                            purchaseLink: "https://amzn.to/3XmWYdh"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "2. Exfoliating (2-3 times a week)",
        paragraph: "Exfoliation is crucial for removing dead skin cells and promoting cell turnover. However, it should not be done every night to avoid irritation.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Chemical Exfoliants</span>", Specification: "Use products containing AHAs (like glycolic acid) or BHAs (like salicylic acid) to exfoliate gently." },
                            { Feature: "<span class='font-semibold italic'>Physical Exfoliants</span>", Specification: "If you prefer physical exfoliants, choose gentle ones with fine particles to avoid damaging your skin." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>The Ordinary Glycolic Acid 7% Toning Solution</span>", 
                            Specification: "Chemical Exfoliant",
                            price: "$8.70",
                            h4image: "/blog-skin-care-routine-theordinary-glycolic-acid.jpeg",
                            purchaseLink: "https://amzn.to/3Z4l3a0"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Dermalogica Daily Microfoliant</span>", 
                            Specification: "Physical Exfoliant",
                            price: "$64.00",
                            h4image: "/blog-skin-care-routine-dermalogica-daily-microfoliant.jpeg",
                            purchaseLink: "https://amzn.to/3MpD4bg"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "3. Toner",
        paragraph: "Applying a toner after cleansing helps to balance your skin's pH and prepare it for the subsequent steps in your routine. Nighttime toners can provide extra hydration or mild exfoliation.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Hydrating Toners</span>", Specification: "Look for ingredients like hyaluronic acid and glycerin for added moisture." },
                            { Feature: "<span class='font-semibold italic'>Exfoliating Toners</span>", Specification: "For added exfoliation, choose toners with mild acids." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Klairs Supple Preparation Unscented Toner</span>", 
                            Specification: "Hydrating Toner",
                            price: "$22.00",
                            h4image: "/blog-skin-care-routine-klairs-supple-unscentedtoner.jpeg",
                            purchaseLink: "https://amzn.to/3XlkabL"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant</span>", 
                            Specification: "Exfoliating Toner",
                            price: "$32.00",
                            h4image: "/blog-skin-care-routine-paulaschoice-skinperfecting-bha.jpeg",
                            purchaseLink: "https://amzn.to/3yZcyCh"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "4. Toner",
        paragraph: "Nighttime is the best time to apply treatment products such as serums, retinoids, and other active ingredients. These products can target specific skin concerns like aging, acne, and hyperpigmentation.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Retinoids</span>", Specification: "Use retinoids (vitamin A derivatives) to promote cell turnover and reduce signs of aging." },
                            { Feature: "<span class='font-semibold italic'>Serums</span>", Specification: "Choose serums with active ingredients tailored to your skin concerns, such as niacinamide, peptides, or hyaluronic acid." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Differin Gel Adapalene 0.1% Acne Treatment</span>", 
                            Specification: "Retinoid",
                            price: "$12.88",
                            h4image: "/blog-skin-care-routine-differin-adapalene-gel.jpeg",
                            purchaseLink: "https://amzn.to/477rT0s"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>The Ordinary Niacinamide 10% + Zinc 1%</span>", 
                            Specification: "Serum",
                            price: "$11",
                            h4image: "/blog-skin-care-routine-theordinary-niacinamide.jpeg",
                            purchaseLink: "https://amzn.to/3Mpk4cY"
                            },
                        ],
                    },
                ]
            },    
        ]
    },



    {
        header: "5. Moisturizing",
        paragraph: "Moisturizing is a critical step in your night routine to lock in hydration and help repair the skin barrier. Night creams are usually richer and more nourishing than day creams.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>For Oily Skin</span>", Specification: "Use a lightweight, non-comedogenic moisturizer." },
                            { Feature: "<span class='font-semibold italic'>For Dry Skin</span>", Specification: "Opt for a thicker, more emollient night cream." },
                            { Feature: "<span class='font-semibold italic'>For Combination Skin</span>", Specification: "Choose a balanced moisturizer that hydrates without being too heavy." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>Neutrogena Hydro Boost Gel-Cream</span>", 
                            Specification: "Oily Skin",
                            price: "$14.99",
                            h4image: "/blog-skin-care-routine-neutrogena-hydroboost-gel.jpeg",
                            purchaseLink: "https://amzn.to/476GCZb"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Cetaphil Rich Hydrating Night Cream</span>", 
                            Specification: "Dry Skin",
                            price: "$15.99",
                            h4image: "/blog-skin-care-routine-cetaphil-nightcream.jpeg",
                            purchaseLink: "https://amzn.to/3XmP97o"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>Clinique Moisture Surge Overnight Mask</span>", 
                            Specification: "Combination Skin",
                            price: "$7.97",
                            h4image: "/blog-skin-care-routine-clinique-moisture-facemask.jpeg",
                            purchaseLink: "https://amzn.to/472Rtn4"
                            },
                        ],
                    },
                ]
            },    
        ]
    },

    {
        header: "6. Eye Cream",
        paragraph: "The delicate skin around the eyes can benefit from extra care at night. Eye creams can help reduce puffiness, dark circles, and fine lines.",
        content:
        [
            {
                title: "Tips",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { Feature: "<span class='font-semibold italic'>Hydrating Eye Creams</span>", Specification: "Look for ingredients like hyaluronic acid and peptides." },
                            { Feature: "<span class='font-semibold italic'>Anti-Aging Eye Creams</span>", Specification: "Choose eye creams with retinol or vitamin C for anti-aging benefits." },
                        ],
                    },
                ]
            },
            {
                title: "Best Products",
                description: "",
                sections:
                [
                    {
                        type: "table",
                        title: "",
                        headers: ["Key Specifications"],
                        items:
                        [
                            { 
                            Feature: "<span class='font-semibold italic'>CeraVe Eye Repair Cream</span>", 
                            Specification: "Hydrating Eye Cream",
                            price: "$10.95",
                            h4image: "/blog-skin-care-routine-cerave-eye-repaircream.jpeg",
                            purchaseLink: "https://amzn.to/4cOOxM6"
                            },
                            { 
                            Feature: "<span class='font-semibold italic'>RoC Retinol Correxion Eye Cream</span>", 
                            Specification: "Anti-Aging Eye Cream",
                            price: "$18.00",
                            h4image: "/blog-skin-care-routine-roc-retinol-correxion.jpeg",
                            purchaseLink: "https://amzn.to/478CFTV"
                            },
                        ],
                    },
                ]
            },    
        ]
    },
    {
        header: "Conclusion",
        loneheader: true,
        paragraph: "Having a consistent skin care routine morning and night is an important step to keeping skin healthy and radiant. This article has discussed the important steps you need to follow for an effective morning and evening skin care routine. By cleansing, hydrating and protecting your skin in the morning and repairing and regenerating your skin at night, you can ensure your skin is always at its best.<br></br>To get optimal results, it is very important to use skin care products that suit your skin type and needs. Try to find products that are suitable for your skin care. Don't miss the opportunity to upgrade your skin care routine. Visit our website now and find the best skin care products that can help you achieve perfect skin!",
        content:
        []
    },
];


// Component to render content item

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
                <div className="relative w-full h-[200px] lg:h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/blog-skin-care-routine-title.webp"
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
                    <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Morning and Night<br></br>Skin Care Routine Tips
                    </h1>
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