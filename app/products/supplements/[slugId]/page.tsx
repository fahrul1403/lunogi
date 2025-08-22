"use client";
import { ImageCarousel } from "@/components/imageCarousel";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import ProductOptions from '@/components/ui/ProductOptions';
import TechnicalSpecifications from '@/components/ui/TechnicalSpecifications';
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactImageZoom from 'react-image-zoom';
import { usePathname } from "next/navigation";
import path from "path";
import ReactPlayer from "react-player";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-product" 

import React, { MouseEvent, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { MotionGridItem } from "@/components/ui/MotionGridItem";
import Script from "next/script";
import StarRating from "@/components/ui/StarRating";

interface ZoomProps {
    width: number;
    height: number;
    zoomWidth: number;
    img: string;
    zoomStyle?: string;
}

interface ProductDetail {

    features: string[]; // Array for features
    descriptions: string[]; // Array for descriptions
    images: string[]; // Array for images
  
    breadcumb: string;
  
    title: string;
  
    description: string;
  
  
    price: string;
    carousel_feature: string[];
    carousel_feature_images: string[];
    carousel_desc: string[];
  
    options: {
        colorbutton: string;
        textbutton: string;
        subtitle: string;
        imageset: string[];
        link: string;
    }[]; // Array of option objects
  
    video: string;
  
  
    specs: string[]; // Array for specifications
  
    values: {
      type: string;
      content: string | { label: string; value: string }[] | string[];
    }[]; // Array for values
  
    rating: number; // Added rating property
  }



  const MAGNIFIER_SIZE = 400;
  const ZOOM_LEVEL = 1;

const encodeImageUrl = (url: string) => {
  return url.split('/').map(segment => encodeURIComponent(segment)).join('/');
};

export default function ProductDetail() {
    const zoomProps: ZoomProps = {
        width: 600,
        height: 300,
        zoomWidth: 500,
        img: '', // This will be replaced dynamically
        zoomStyle: 'z-index: 100;',
    };

    const pathnameori = usePathname();
    const pathname = decodeURIComponent(pathnameori);
    const [imageSets, setImageSets] = useState<boolean[]>([]);
    const [currentImageSetIndex, setCurrentImageSetIndex] = useState(0); // Track the current image set index
    const [currentLink, setCurrentLink] = useState(''); // Add state for current link
    const [zoomable, setZoomable] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [position, setPosition] = useState({ x: 1, y: 100, mouseX: 0, mouseY: 0 });
    const [currentImage, setCurrentImage] = useState(''); // Add state for current image
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Add state for current image index
    const [carouselCounter, setCarouselCounter] = useState(0); // {{ edit_1 }}
    const [currentSubtitle, setCurrentSubtitle] = useState(''); 

    // Set the first image set to true
    useEffect(() => {
        setImageSets(prev => {
            const newSets = Array(detail.options.length).fill(false);
            newSets[0] = true; // Set the first option as default
            return newSets;
        });
        // Set default subtitle and link
        setCurrentSubtitle(detail.options[0].subtitle);
        setCurrentLink(detail.options[0].link);
        setCurrentImageSetIndex(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    // Event handlers
    const handleMouseEnter = (e: MouseEvent) => {
        let element = e.currentTarget;
        let { width, height } = element.getBoundingClientRect();
        setImageSize({ width, height });
        setZoomable(true);
        updatePosition(e);
    };

    const handleMouseLeave = (e: MouseEvent) => {
        setZoomable(false);
        updatePosition(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
        updatePosition(e);
    };

    const updatePosition = (e: MouseEvent) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - left;
        let y = e.clientY - top;
        setPosition({
            x: -x * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            y: -y * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            mouseX: x - (MAGNIFIER_SIZE / 2),
            mouseY: y - (MAGNIFIER_SIZE / 2),
        });
    };

    // Update current image index when the image changes
    const handleImageChange = (index: number) => {
        setCurrentImageIndex(index);
        setCurrentImage(imageSets[currentImageSetIndex] ? detail.options[currentImageSetIndex].imageset[index] : '');
    };


    let detail: ProductDetail;
    // console.log('path : ',decodedPathname);












////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (pathname === '/products/supplements/Sports-research-daily-probiotics-with-probiotics') {
        detail = {

            features: [
                '2-IN-1 FORMULA',
                'ENHANCED FORMULA',
                'LONGER SHELF LIFE',
                'PREMIUM VEGGIE CAPSULE',
                'THE SPORTS RESEARCH DIFFERENCE',
            ],
            descriptions: [
                'With a guaranteed 60 billion CFUs per capsule (thats a lot of good bacteria), and enhanced with 60mg of fiber inulin, this once-daily delayed-release probiotic in a veggie capsule provides valuable gut and digestive tract support*',
                'Our proprietary formula combines 12 strains of Lacto and Bifidobacteria shelf-stable probiotics, bringing you digestive enzyme and fatty acid production support, longer*',
                'Unlike other probiotics, our probiotic blend is guaranteed fresh through the expiration date, meaning you can reap the benefits of 60 billion CFUs for gut health and support*',
                'Each formula is encapsulated in a 100% Vegan Certified, delayed-release, non-GMO verified, and gluten-free capsule. Its all the positive benefits of a probiotic without the binders, fillers, or extra ingredients. Manufactured in the USA in cGMP-compliant facilities',
                'Founded in Southern California in 1980, Sports Research is a family-owned business born from a passion for fitness and wellness. Our goal is to embrace the sport of life through research-backed products created for every body—inside and out',
            ],
            images: [
                '/sportsresearch-probiotics-1.jpeg',
                '/sportsresearch-probiotics-2.jpeg',
                '/sportsresearch-probiotics-3.jpeg',
                '/sportsresearch-probiotics-4.jpeg',
                '/sportsresearch-probiotics-5.jpeg',
                '/sportsresearch-probiotics-6.jpeg',
            ],
//
//
//
//
//
//
//
            carousel_feature: [
                '',
                '',
                ''
            ],
            carousel_feature_images:[
                '',
                '',
                ''
            ],
            carousel_desc: [
                '',
                '',
                ''
            ],
//
//
//
//
//
//
//
            options:[
                {
                    colorbutton:'',
                    textbutton:'',
                    subtitle:'60 Billion CFU - Vegan Capsules for Gut Health & Digestive Support, Probiotics for Women & Men - Non-GMO Verified & Gluten Free - 30 Count',
                    imageset:[
                        '/sportsresearch-probiotics-1.jpeg',
                        '/sportsresearch-probiotics-2.jpeg',
                        '/sportsresearch-probiotics-3.jpeg',
                        '/sportsresearch-probiotics-4.jpeg',
                        '/sportsresearch-probiotics-5.jpeg',
                        '/sportsresearch-probiotics-6.jpeg',
                    ],
                    link: 'https://amzn.to/3KswCPI'
                }
             ],
//
//
//
//
//
//
//
            description:'',
            breadcumb: 'Sports Research Daily Probiotics with Prebiotics, 60 Billion CFU - Vegan Capsules for Gut Health & Digestive Support',
            title: 'Sports Research Daily Probiotics with Prebiotics',
            price: '$24.95',
            video: '',
//
//
//
//
//
//
//
            specs: [
                'General Specifications',
                'Weight and Dimensions',
                'Features',
            ], // Add your specs here

            values: [
            {
                type: 'table',
                content: [
                { label: 'Brand', value: 'Sports Research' },
                { label: 'Flavor', value: 'Unflavored' },
                { label: 'Supplement Type', value: 'Probiotics' },
                { label: 'Unit Count', value: '30.0 Count' },
                { label: 'Item Form', value: 'Capsule' },
                ]
            },
            {
                type: 'text',
                content: '3.1 x 2.1 x 2.2 inches; 0.01 ounces'
            },
            {
                type: 'table',
                content: [
                { label: 'May Help Replenish Good Bacteria In The Gut', value: 'Yes' },
                { label: '12 Lacto & Bifidobacteria Shelf-Stable Probiotic Strains', value: 'Yes' },
                { label: 'Delayed Release Veggie Capsule', value: 'Yes' },
                { label: 'Non-GMO Tested', value: 'Yes' },
                { label: 'Gluten-Free', value: 'Yes' },
                { label: 'Third Party Tested', value: 'Yes' },
                { label: 'cGMP Compliant', value: 'Yes' },
                
                ]
            }
            ], // Add corresponding values here
            rating: 4.6,
        };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (pathname === '/products/supplements/organic-lip-scrub-vanilla-usa-made-exfoliating-lip-scrub-with-natural-organic') {
        detail = {

            features: [
                'GREAT GIFT IDEA',
                'USA MADE, CERTIFIED ORGANIC & CRUELTY FREE',
                'LIP THERAPY FOR DRY LIPS',
                'LOVE IT OR LET US KNOW',
                'HAVE GORGEOUS SOFT LIPS',
            ],
            descriptions: [
                'Whether you are looking for self care gifts, a small gift for women, gifts for mom or mens gift ideas - we have you covered. This exfoliating lip scrub & lip exfoliant is great for skincare & makeup lovers',
                'This dry lip treatment exfoliates and acts as a lip conditioner. It is a lip exfoliator scrub & moisturizer made with Fair Trade Certified Sugar. Take your lip care to the next level with this sugar scrub for lips',
                'Have drop dead gorgeous & hydrated lips, even during the driest months. Use it to brighten dark lips or simply prepping your lips for lipstick or lip gloss. Looking for gift for teenage girls? Look no further, as this lip scrub is a great gift for girls',
                'We are sure you will love this lip exfoliating scrub with its wonderful ingredients, taste and results. As a family owned business, your satisfaction is our guarantee',
                'This lip repair scrub can be used with or without a lip scrub brush. It is lip scrub for dark lips and light lips alike. Pair with the Beauty by Earth Vanilla Lip Balm for the best lip repair',
            ],
            images: [
                '/beautybyearth-lipscrub-berry1.jpeg',
                '/beautybyearth-lipscrub-berry2.jpeg',
                '/beautybyearth-lipscrub-berry3.jpeg',
                '/beautybyearth-lipscrub-berry4.jpeg',
                '/beautybyearth-lipscrub-berry5.jpeg',
            ],
//
//
//
//
//
//
//
            carousel_feature: [],
            carousel_feature_images:[],
            carousel_desc: [],
//
//
//
//
//
//
//
            options:[
                {
                    colorbutton:'bg-black rounded-full w-10 h-10',
                    textbutton:'',
                    subtitle:'USA Made Exfoliating Lip Scrub with Natural & Organic Ingredients, Moisturizing Lip Exfoliator Scrub for Dry Lips, Lip Scrubber Exfoliator & Sugar Scrub for Smooth Lips - berry',
                    imageset:[
                        '/beautybyearth-lipscrub-berry1.jpeg',
                        '/beautybyearth-lipscrub-berry2.jpeg',
                        '/beautybyearth-lipscrub-berry3.jpeg',
                        '/beautybyearth-lipscrub-berry4.jpeg',
                        '/beautybyearth-lipscrub-berry5.jpeg',
                        '/beautybyearth-lipscrub-berry6.jpeg',
                        '/beautybyearth-lipscrub-berry7.jpeg'
                    ],
                    link: 'https://amzn.to/3KxEorw'
                },
                {
                    colorbutton:'bg-black rounded-full w-10 h-10',
                    textbutton:'',
                    subtitle:'USA Made Exfoliating Lip Scrub with Natural & Organic Ingredients, Moisturizing Lip Exfoliator Scrub for Dry Lips, Lip Scrubber Exfoliator & Sugar Scrub for Smooth Lips - mint',
                    imageset:[
                        '/beautybyearth-lipscrub-mint1.jpeg',
                        '/beautybyearth-lipscrub-mint2.jpeg',
                        '/beautybyearth-lipscrub-mint3.jpeg',
                        '/beautybyearth-lipscrub-mint4.jpeg',
                        '/beautybyearth-lipscrub-mint5.jpeg',
                        '/beautybyearth-lipscrub-mint6.jpeg',
                        '/beautybyearth-lipscrub-mint7.jpeg'
                    ],
                    link: 'https://amzn.to/3KxEorw'
                },
                {
                    colorbutton:'bg-black rounded-full w-10 h-10',
                    textbutton:'',
                    subtitle:'USA Made Exfoliating Lip Scrub with Natural & Organic Ingredients, Moisturizing Lip Exfoliator Scrub for Dry Lips, Lip Scrubber Exfoliator & Sugar Scrub for Smooth Lips - vanilla',
                    imageset:[
                        '/beautybyearth-lipscrub-vanilla1.jpeg',
                        '/beautybyearth-lipscrub-vanilla2.jpeg',
                        '/beautybyearth-lipscrub-vanilla3.jpeg',
                        '/beautybyearth-lipscrub-vanilla4.jpeg',
                        '/beautybyearth-lipscrub-vanilla5.jpeg',
                        '/beautybyearth-lipscrub-vanilla6.jpeg',
                        '/beautybyearth-lipscrub-vanilla7.jpeg'
                    ],
                    link: 'https://amzn.to/3KxEorw'
                },
            ],
//
//
//
//
//
//
//
            description:'',            
            breadcumb: 'Organic Lip Scrub Vanilla - USA Made Exfoliating Lip Scrub with Natural & Organic Ingredients',
            title: 'Organic Lip Scrub Vanilla',
            price: '$14.99',
            video: '',
//
//
//
//
//
//
//
            specs: [
                'General Specifications',
                'Weight And Dimensions',
                'Safety Information',
                'Indications',
                'Ingredients',
                'How to use',
            ], // Add your specs here

            values: [
            {
                type: 'table',
                content: [
                { label: 'Brand', value: 'Beauty by Earth' },
                { label: 'Item Form', value: 'Scrub' },
                { label: 'Skin Type', value: 'Dry' },
                { label: 'Product Benefits', value: 'Exfoliating' },
                { label: 'Active Ingredients', value: 'vitamin_e' },
                ]
            },
            {
                type: 'text',
                content: '1.25 x 1.25 x 1.5 inches; 0.64 ounces'
            },
            {
                type: 'text',
                content: 'For external use only. Stop using if reaction occurs.'
            },
            {
                type: 'text',
                content: 'Cracked, chapped and dry lips will finally meet their match with this lip scrub. Say goodbye to those bumpy, peeling lips and hello to smooth kissable lips. Perfect to use as a lip primer before the use of lipstick, lip liner or other lip coloring products.'
            },
            {
                type: 'list',
                content: [
                'Fair Trade Certified Organic Sugar',
                'Organic Vanilla Flavor',
                'Organic Jojoba Oil',
                'Organic Beeswax',
                'Organic Coconut Oil',
                'Vitamin E',
                'Organic Rosemary Leaf Extract',
                'Organic Calendula Flower Extract',
                'Organic Stevia Leaf Extract'
                ]
            },
            {
                type: 'text',
                content: 'Apply a small pea sized amount to your lips using a finger tip. Scrub the lips in a circular motion to remove dead skin for about 30 seconds and then rinse (or eat) off remaining sugar.'
            },
            ], // Add corresponding values here
            rating: 4.3,
        };




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/supplements/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties') { // New condition for Nippies product
    detail = {

        features: [
            '<strong>DISCREET AND COMFORTABLE</strong>',
            '<strong>REUSABLE AND WASHABLE</strong>',
            '<strong>SECURE ADHESION</strong>',
            '<strong>INCLUDES TRAVEL BOX</strong>',
        ],
        descriptions: [
            '<p>Ultra-thin and comfortable, these nipple covers are perfect for any outfit.</p>',
            '<p>Reusable and easy to clean, providing long-lasting use.</p>',
            '<p>Strong adhesive ensures they stay in place all day.</p>',
            '<p>Comes with a convenient travel box for easy storage and portability.</p>',
        ],
        images: [
            '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-1.jpg',
            '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-2.jpg',
            '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-3.jpg',
            '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-4.jpg',
        ],
//
//
//
//
//
//
//
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
//
//
//
//
//
//
//
        options:[
            {
                colorbutton: '',
                subtitle: '',
                imageset: [
                    '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-1.jpg',
                    '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-2.jpg',
                    '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-3.jpg',
                    '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-4.jpg',
                    '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-3.jpg',
                    '/Nippies-Nipple-Cover-Sticky-Adhesive-Silicone-Nipple-Pasties-Reusable-Pasty-Nipple-Covers-for-Women-with-Travel-Box-4.jpg',
                ],
                link: 'https://amzn.to/3WWrN6U',
                textbutton: ""
            },
        ],
//
//
//
//
//
//
//
description: '',
breadcumb: 'Nippies Nipple Cover',
title: 'Nippies Nipple Cover - Sticky Adhesive Silicone Nipple Pasties',
price: '$26.50',
        video: '',
//
//
//
//
//
//
//
        specs: [
            'General Specifications',
            'Weight and dimensions',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Nippies' },
                    { label: 'Material', value: 'Silicone' },
                    { label: 'Closure type', value: 'Adhesive' },
                    { label: 'Water resistance level', value: 'Water Resistant' },
                    { label: 'Fit', value: 'One size fits all' },
                    { label: 'Weight', value: '0.5 ounces' }
                ]
            },
            {
                type: 'text',
                content: '3 x 3 x 0.1 inches; 0.5 Ounces'
            }
        ],
        rating: 4.5, // Assuming a rating, as it wasn't in the provided data
    };











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/supplements/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth') {
    detail = {

        features: [
            'EASY & EFFECTIVE',
            'HEALTHIER GUMS',
            'ADVANCED TECHNOLOGY',
            'HIGH VOLUME RESERVOIR',
            'COMPLETE CARE',
        ],
        descriptions: [
            'The Waterpik Aquarius Water Flosser is the easy and most effective way to floss, removing up to 99.9% of plaque from treated areas and is up to 50% more effective than string floss for improving gum health',
            'Clinically proven to be up to 50% more effective than dental floss for improving gum health, and can reverse gingivitis and reduce gum bleeding. Perfect for braces, implants, and other dental work',
            'Features 10 pressure settings, 7 Waterpik water flossing tips, 90 seconds of water capacity, and a massage mode for gum stimulation plus built-in timer/pacer for a thorough cleaning',
            'Holds 22 ounces and provides 90 seconds of water capacity, no refilling required. Voltage - 120VAC, 60Hz. Cord length - 4 Feet',
            'Includes 7 tips for multiple family members and different dental needs: 3 Classic, 1 Orthodontic, 1 Plaque Seeker, 1 Pik Pocket, 1 Toothbrush Tip',
        ],
        images: [
            '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-1.jpg',
            '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-2.jpg',
            '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-3.jpg',
            '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-4.jpg',
            '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-5.jpg'
        ],
//
//
//
//
//
//
//
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
//
//
//
//
//
//
//
        options:[
            {
                colorbutton:'bg-blue-500 rounded-full w-10 h-10',
                textbutton:'',
                subtitle:'Waterpik Aquarius Water Flosser Professional For Teeth, Gums, Braces, Dental Care, Electric Power With 10 Settings, 7 Tips For Multiple Users And Needs, ADA Accepted, Blue WP-660',
                imageset:[
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-1.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-2.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-3.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-4.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-5.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-6.jpg',
                ],
                link: 'https://amzn.to/3YNZcU3'
            },
            {
                colorbutton:'bg-black rounded-full w-10 h-10',
                textbutton:'',
                subtitle:'Waterpik Aquarius Water Flosser Professional For Teeth, Gums, Braces, Dental Care, Electric Power With 10 Settings, 7 Tips For Multiple Users And Needs, ADA Accepted, Black WP-662',
                imageset:[
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-1.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-2.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-3.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-4.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-5.jpg',
                    '/Waterpik-Aquarius-Water-Flosser-Professional-for-Teeth-Gums-Braces-Dental-Care-Electric-Power-with-10-Settings-7-Tips-for-Multiple-Users-and-Needs-ADA-Accepted-6.jpg',
                ],
                link: 'https://amzn.to/4cBZxfL'
            },
            // Add more color options if available
        ],
//
//
//
//
//
//
//
        description: '',
        breadcumb: 'Waterpik Aquarius Water Flosser Professional For Teeth, Gums, Braces, Dental Care',
        title: 'Waterpik Aquarius Water Flosser Professional',
        price: '$79.99',
        video: '',
//
//
//
//
//
//
//
        specs: [
            'General Specifications',
            'Weight And Dimensions',
            'Features',
            'Included Components',
            'Warranty',
        ],
        values: [
        {
            type: 'table',
            content: [
            { label: 'Brand', value: 'Waterpik' },
            { label: 'Model Name', value: 'Aquarius' },
            { label: 'Power Source', value: 'Corded Electric' },
            { label: 'Item Weight', value: '1.46 Pounds' },
            { label: 'Voltage', value: '120 Volts' },
            ]
        },
        {
            type: 'text',
            content: '4.7 x 10.3 x 3.8 inches; 1.46 Pounds'
        },
        {
            type: 'list',
            content: [
            '10 pressure settings (10-100 PSI)',
            '7 Waterpik water flossing tips',
            '90 seconds of water capacity',
            'Massage mode for gum stimulation',
            'Built-in timer/pacer',
            'Enhanced pressure control system',
            'LED information panel',
            ]
        },
        {
            type: 'list',
            content: [
            '1 Waterpik Aquarius Water Flosser',
            '3 Classic Jet Tips',
            '1 Orthodontic Tip',
            '1 Plaque Seeker Tip',
            '1 Pik Pocket Tip',
            '1 Toothbrush Tip',
            ]
        },
        {
            type: 'text',
            content: '3-year manufacturers warranty'
        },
        ],
        rating: 4.7, // Assuming a rating, as it wasn't in the provided data
    };









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    } else if (pathname === '/products/supplements/GARDEN-OF-LIFE-Dr-Formulated-Probiotics-Probiotic-Vaginal-Digestive-Immune-Adult-Women-Capsules') {
        detail = {
            features: [
                'PROBIOTIC FOR WOMEN',
                'DIGESTIVE & IMMUNE SUPPORT',
                '50 BILLION CFU',
                '16 PROBIOTIC STRAINS',
            ],
            descriptions: [
                'Formulated by Dr. Perlmutter, this probiotic supplement is designed specifically for women.',
                'Supports digestive and immune health with 50 billion CFU and 16 probiotic strains.',
                'Contains organic prebiotic fiber to help feed good bacteria in the gut.',
                'Free from gluten, dairy, and soy, making it suitable for those with dietary restrictions.',
            ],
            images: [
                '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-1.jpg',
                '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-2.jpg',
                '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-3.jpg',
                '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-4.jpg',
            ],
            carousel_feature: [],
            carousel_feature_images: [],
            carousel_desc: [],
            options: [
                {
                    colorbutton: '',
                    textbutton: '',
                    subtitle: 'GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules',
                    imageset: [
                        '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-1.jpg',
                        '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-2.jpg',
                        '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-3.jpg',
                        '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-4.jpg',
                        '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-5.jpg',
                        '/GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules-6.jpg',
                    ],
                    link: 'https://amzn.to/3YNcyjn'
                }
            ],
            description: '',
            breadcumb: 'GARDEN OF LIFE Dr. Formulated Probiotics Probiotic Vaginal.Digestive.Immune Adult Women Capsules',
            title: 'GARDEN OF LIFE Dr. Formulated Probiotics',
            price: '$31.76',
            video: '',
            specs: [
                'General Specifications',
                'Weight and Dimensions',
                'Features',
            ],
            values: [
                {
                    type: 'table',
                    content: [
                        { label: 'Brand', value: 'Garden Of Life' },
                        { label: 'Probiotic Strains', value: '16' },
                        { label: 'CFU', value: '50 Billion' },
                        { label: 'Form', value: 'Capsules' },
                    ]
                },
                {
                    type: 'text',
                    content: 'Dimensions: 5 x 2 x 2 inches; Weight: 0.5 pounds'
                },
                {
                    type: 'list',
                    content: [
                        'Probiotic for women',
                        'Digestive & immune support',
                        '50 billion CFU',
                        '16 probiotic strains',
                    ]
                },
            ],
            rating: 4.6, // Assuming a rating, as it wasn't in the provided data
        };


    } else if (pathname === '/products/supplements/Charmin-Ultra-Soft-Cushiony-Touch-Toilet-Paper') {
        detail = {
            features: [
                'ULTRA SOFT',
                'CUSHIONY TOUCH',
                '24 FAMILY MEGA ROLLS',
                'SEPTIC SAFE',
            ],
            descriptions: [
                'Charmin Ultra Soft is our softest toilet paper ever so it is harder than ever to resist.',
                'The cushiony touch provides a comfortable and gentle clean.',
                'Each pack contains 24 family mega rolls, equivalent to 123 regular rolls.',
                'Septic safe and clog-safe, making it suitable for all plumbing systems.',
            ],
            images: [
                '/Charmin Ultra Soft Cushiony Touch Toilet Paper-1.jpg',
                '/Charmin Ultra Soft Cushiony Touch Toilet Paper-2.jpg',
                '/Charmin Ultra Soft Cushiony Touch Toilet Paper-3.jpg',
                '/Charmin Ultra Soft Cushiony Touch Toilet Paper-4.jpg',
            ],
            carousel_feature: [],
            carousel_feature_images: [],
            carousel_desc: [],
            options: [
                {
                    colorbutton: '',
                    textbutton: '',
                    subtitle: 'Charmin Ultra Soft Cushiony Touch Toilet Paper',
                    imageset: [
                        '/Charmin Ultra Soft Cushiony Touch Toilet Paper-1.jpg',
                        '/Charmin Ultra Soft Cushiony Touch Toilet Paper-2.jpg',
                        '/Charmin Ultra Soft Cushiony Touch Toilet Paper-3.jpg',
                        '/Charmin Ultra Soft Cushiony Touch Toilet Paper-4.jpg',
                        '/Charmin Ultra Soft Cushiony Touch Toilet Paper-5.jpg',
                        '/Charmin Ultra Soft Cushiony Touch Toilet Paper-6.jpg'
                    ],
                    link: 'https://amzn.to/3YRbtqC'
                }
            ],
            description: '',
            breadcumb: 'Charmin Ultra Soft Cushiony Touch Toilet Paper',
            title: 'Charmin Ultra Soft Toilet Paper',
            price: '$34.48',
            video: '',
            specs: [
                'General Specifications',
                'Weight and Dimensions',
                'Features',
            ],
            values: [
                {
                    type: 'table',
                    content: [
                        { label: 'Brand', value: 'Charmin' },
                        { label: 'Rolls', value: '24 Family Mega Rolls' },
                        { label: 'Septic Safe', value: 'Yes' },
                        { label: 'Softness', value: 'Ultra Soft' },
                    ]
                },
                {
                    type: 'text',
                    content: 'Dimensions: 10 x 6 x 4 inches; Weight: 1.5 pounds'
                },
                {
                    type: 'list',
                    content: [
                        'Ultra soft',
                        'Cushiony touch',
                        '24 family mega rolls',
                        'Septic safe',
                    ]
                },
            ],
            rating: 4.8,
        };


    } else if (pathname === '/products/supplements/Nespresso-Capsules-VertuoLine-Best-Seller-Variety-Pack') {
        detail = {
            features: [
                'BEST SELLER VARIETY PACK',
                'MEDIUM AND DARK ROAST',
                '30 COUNT COFFEE PODS',
                'BREWS 7.8 OZ',
            ],
            descriptions: [
                'Enjoy a variety of Nespresso VertuoLine capsules with this best seller variety pack.',
                'Includes both medium and dark roast coffee pods for a rich and flavorful experience.',
                'Each pack contains 30 coffee pods, perfect for daily use or sharing with friends.',
                'Brews a generous 7.8 oz cup of coffee, ideal for any time of the day.',
            ],
            images: [
                '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-1.jpg',
                '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-2.jpg',
                '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-3.jpg',
                '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-4ß.jpg',
            ],
            carousel_feature: [],
            carousel_feature_images: [],
            carousel_desc: [],
            options: [
                {
                    colorbutton: '',
                    textbutton: '',
                    subtitle: 'Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz',
                    imageset: [
                        '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-1.jpg',
                        '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-2.jpg',
                        '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-3.jpg',
                        '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-4.jpg',
                        '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-5.jpg',
                        '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-6.jpg',
                        '/Nespresso Capsules VertuoLine. Best Seller Variety Pack. Medium and Dark Roast Coffee. 30 Count Coffee Pods. Brews 7.8 oz-7.jpg',
                    ],
                    link: 'https://amzn.to/3XeTb0n'
                }
            ],
            description: '',
            breadcumb: 'Nespresso Capsules VertuoLine. Best Seller Variety Pack',
            title: 'Nespresso Capsules VertuoLine',
            price: '$37.50',
            video: '',
            specs: [
                'General Specifications',
                'Weight and Dimensions',
                'Features',
            ],
            values: [
                {
                    type: 'table',
                    content: [
                        { label: 'Brand', value: 'Nespresso' },
                        { label: 'Roast Type', value: 'Medium and Dark' },
                        { label: 'Count', value: '30 Pods' },
                        { label: 'Brew Size', value: '7.8 oz' },
                    ]
                },
                {
                    type: 'text',
                    content: 'Dimensions: 10 x 6 x 4 inches; Weight: 1.5 pounds'
                },
                {
                    type: 'list',
                    content: [
                        'Best seller variety pack',
                        'Medium and dark roast',
                        '30 count coffee pods',
                        'Brews 7.8 oz',
                    ]
                },
            ],
            rating: 4.7, // Assuming a rating, as it wasn't in the provided data
        };


    } else if (pathname === '/products/supplements/Drink-LMNT-Zero-Sugar-Electrolytes-Hydration-Powder-Packets') { // New product insertion
        detail = {
            features: [
                'ZERO-SUGAR ELECTROLYTES',
                'NO ARTIFICIAL INGREDIENTS',
                'KETO & PALEO FRIENDLY',
                '30 STICKS PER PACK',
            ],
            descriptions: [
                'Stay hydrated with LMNT Zero-Sugar Electrolytes, perfect for those on a keto or paleo diet.',
                'Contains no artificial ingredients, ensuring a clean and natural hydration solution.',
                'Each pack includes 30 sticks, making it convenient for daily use or on-the-go hydration.',
                'Ideal for athletes, fitness enthusiasts, or anyone needing a hydration boost.',
            ],
            images: [
                '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-3.jpg',
                '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-4.jpg',
                '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-5.jpg',
                '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-6.jpg',
            ],
            carousel_feature: [],
            carousel_feature_images: [],
            carousel_desc: [],
            options: [
                {
                    colorbutton: '',
                    textbutton: '',
                    subtitle: 'Drink LMNT Zero-Sugar Electrolytes - Hydration Powder Packets | No Artificial Ingredients | Keto & Paleo Friendly | 30 Sticks',
                    imageset: [
                        '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-1.jpg',
                        '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-2.jpg',
                        '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-3.jpg',
                        '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-4.jpg',
                        '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-5.jpg',
                        '/Drink LMNT Zero-Sugar Electrolytes Hydration Powder Packets No Artificial Ingredients Keto & Paleo Friendly 30 Sticks-6.jpg',
                    ],
                    link: 'https://amzn.to/3WVfwQ5'
                }
            ],
            description: '',
            breadcumb: 'Drink LMNT Zero-Sugar Electrolytes - Hydration Powder Packets',
            title: 'Drink LMNT Zero-Sugar Electrolytes',
            price: '$44.60',
            video: '',
            specs: [
                'General Specifications',
                'Weight and Dimensions',
                'Features',
            ],
            values: [
                {
                    type: 'table',
                    content: [
                        { label: 'Brand', value: 'Drink LMNT' },
                        { label: 'Count', value: '30 Sticks' },
                        { label: 'Diet Type', value: 'Keto, Paleo' },
                        { label: 'Flavor', value: 'Variety Pack' },
                    ]
                },
                {
                    type: 'text',
                    content: 'Dimensions: 6 x 4 x 3 inches; Weight: 1.2 pounds'
                },
                {
                    type: 'list',
                    content: [
                        'Zero-sugar electrolytes',
                        'No artificial ingredients',
                        'Keto & paleo friendly',
                        '30 sticks per pack',
                    ]
                },
            ],
            rating: 4.4,
        };





    } else if (pathname === '/products/supplements/Paulas-Choice-Skin-Perfecting-2-BHA-Liquid-Salicylic-Acid-Exfoliant') { // New product insertion
        detail = {
            features: [
                '2% BHA LIQUID EXFOLIANT',
                'GENTLE & NON-ABRASIVE',
                'IMPROVES SKIN TEXTURE',
                'FIGHTS BREAKOUTS',
            ],
            descriptions: [
                'Paula\'s Choice Skin Perfecting 2% BHA Liquid Exfoliant is a gentle, non-abrasive leave-on exfoliant.',
                'Helps to improve skin texture for a radiant, youthful look.',
                'Fights breakouts and unclogs pores, making it ideal for acne-prone skin.',
                'Suitable for all skin types, including sensitive skin.',
            ],
            images: [
                '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-1.jpg',
                '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-2.jpg',
                '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-3.jpg',
                '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-4.jpg',
            ],
            carousel_feature: [],
            carousel_feature_images: [],
            carousel_desc: [],
            options: [
                {
                    colorbutton: '',
                    textbutton: '',
                    subtitle: 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Salicylic Acid Exfoliant',
                    imageset: [
                        '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-1.jpg',
                        '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-2.jpg',
                        '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-3.jpg',
                        '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-4.jpg',
                        '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-5.jpg',
                        '/Paulas Choice Skin Perfecting Liquid Salicylic Acid Exfoliant-6.jpg',
                    ],
                    link: 'https://amzn.to/3MfEEfM'
                }
            ],
            description: '',
            breadcumb: 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Salicylic Acid Exfoliant',
            title: 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Exfoliant',
            price: '$41.65',
            video: '',
            specs: [
                'General Specifications',
                'Weight and Dimensions',
                'Features',
            ],
            values: [
                {
                    type: 'table',
                    content: [
                        { label: 'Brand', value: 'Paula\'s Choice' },
                        { label: 'Item Form', value: 'Liquid' },
                        { label: 'Skin Type', value: 'All' },
                        { label: 'Active Ingredients', value: 'Salicylic Acid' },
                    ]
                },
                {
                    type: 'text',
                    content: 'Dimensions: 5 x 2 x 2 inches; Weight: 0.5 pounds'
                },
                {
                    type: 'list',
                    content: [
                        '2% BHA liquid exfoliant',
                        'Gentle & non-abrasive',
                        'Improves skin texture',
                        'Fights breakouts',
                    ]
                },
            ],
            rating: 4.5,
        };




} else if (pathname === '/products/supplements/Premier-Protein-Premier-Protein-Shake') {
    detail = {
        features: [
            '30G PROTEIN',
            '160 CALORIES',
            '1G SUGAR',
            '24 VITAMINS & MINERALS',
        ],
        descriptions: [
            'Each shake contains 30g of protein to help curb your hunger and fuel your muscles.',
            'With only 160 calories per shake, its a great way to stay on track with your fitness goals.',
            'Contains only 1g of sugar, making it a healthy choice for those watching their sugar intake.',
            'Packed with 24 vitamins and minerals to support your immune health and overall wellness.',
        ],
        images: [
            '/Premier Protein Premier Protein Shake-1.jpg',
            '/Premier Protein Premier Protein Shake-2.jpg',
            '/Premier Protein Premier Protein Shake-3.jpg',
            '/Premier Protein Premier Protein Shake-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Premier Protein Premier Protein Shake - 30g Protein, 160 Calories, 1g Sugar, 24 Vitamins & Minerals',
                imageset: [
                    '/Premier Protein Premier Protein Shake-1.jpg',
                    '/Premier Protein Premier Protein Shake-2.jpg',
                    '/Premier Protein Premier Protein Shake-3.jpg',
                    '/Premier Protein Premier Protein Shake-4.jpg',
                    '/Premier Protein Premier Protein Shake-5.jpg',
                    '/Premier Protein Premier Protein Shake-6.jpg',
                ],
                link: 'https://amzn.to/4dSoep8'
            }
        ],
        description: '',
        breadcumb: 'Premier Protein Premier Protein Shake',
        title: 'Premier Protein Premier Protein Shake',
        price: '$40.43',
        video: '',
        specs: [
            'General Specifications',
            'Weight and Dimensions',
            'Features',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Premier Protein' },
                    { label: 'Protein', value: '30g' },
                    { label: 'Calories', value: '160' },
                    { label: 'Sugar', value: '1g' },
                    { label: 'Vitamins & Minerals', value: '24' },
                ]
            },
            {
                type: 'text',
                content: 'Dimensions: 6 x 4 x 3 inches; Weight: 1.2 pounds'
            },
            {
                type: 'list',
                content: [
                    '30g protein',
                    '160 calories',
                    '1g sugar',
                    '24 vitamins & minerals',
                ]
            },
        ],
        rating: 4.5,
    };









} else if (pathname === '/products/supplements/LMNT-Zero-Sugar-Electrolytes-Variety-Pack-Bundles') {
    detail = {
        features: [
            'ZERO-SUGAR ELECTROLYTES',
            'VARIETY PACK',
            'KETO & PALEO FRIENDLY',
            'NO ARTIFICIAL INGREDIENTS',
        ],
        descriptions: [
            'Stay hydrated with LMNT Zero-Sugar Electrolytes, perfect for those on a keto or paleo diet.',
            'Enjoy a variety of flavors in one convenient pack.',
            'Formulated to be compatible with keto and paleo lifestyles.',
            'Contains no artificial ingredients, ensuring a clean and natural hydration solution.',
        ],
        images: [
            '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-1.jpg',
            '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-2.jpg',
            '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-3.jpg',
            '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'LMNT Zero-Sugar Electrolytes - Variety Pack Bundles',
                imageset: [
                    '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-1.jpg',
                    '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-2.jpg',
                    '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-3.jpg',
                    '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-4.jpg',
                    '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-5.jpg',
                    '/LMNT Zero-Sugar Electrolytes - Variety Pack Bundles-6.jpg',
                ],
                link: 'https://amzn.to/3z0l4RA'
            }
        ],
        description: '',
        breadcumb: 'LMNT Zero-Sugar Electrolytes - Variety Pack Bundles',
        title: 'LMNT Zero-Sugar Electrolytes',
        price: '$23.99',
        video: '',
        specs: [
            'Product Information',
            'Nutritional Facts',
            'Usage Instructions',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'LMNT' },
                    { label: 'Item Form', value: 'Powder' },
                    { label: 'Diet Type', value: 'Keto, Paleo' },
                    { label: 'Flavor', value: 'Variety Pack' },
                ]
            },
            {
                type: 'text',
                content: 'Each stick contains 1000mg sodium, 200mg potassium, 60mg magnesium, and 0g sugar.'
            },
            {
                type: 'list',
                content: [
                    'Mix one stick with 16 oz (500 ml) of water.',
                    'Consume during or after exercise, or any time you need electrolyte replenishment.',
                    'Can be enjoyed hot or cold.',
                ]
            },
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/supplements/Washing-Machine-Cleaner-Descaler-Tablets-Deep-Cleaning-Tablet-For-HE-Front-Loader-Top-Load-Washer-Septic-Safe-Eco-Friendly-Deodorizer-Clean-Inside-Drum-And-Laundry-Tub-Seal-Descaling-Pods') {
    detail = {
        features: [
            'DEEP CLEANING FORMULA',
            'COMPATIBLE WITH ALL WASHERS',
            'ECO-FRIENDLY & SEPTIC SAFE',
            'DEODORIZES & DESCALES',
        ],
        descriptions: [
            'Powerful cleaning tablets that remove buildup and residue from your washing machine.',
            'Suitable for use in both HE front loader and top load washers.',
            'Environmentally friendly formula thats safe for septic systems.',
            'Eliminates odors and removes limescale for a fresher, cleaner washing machine.',
        ],
        images: [
            '/Washing Machine Cleaner Descaler Tablets-1.jpg',
            '/Washing Machine Cleaner Descaler Tablets-2.jpg',
            '/Washing Machine Cleaner Descaler Tablets-3.jpg',
            '/Washing Machine Cleaner Descaler Tablets-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Washing Machine Cleaner Descaler Tablets - 24 Pack',
                imageset: [
                    '/Washing Machine Cleaner Descaler Tablets-1.jpg',
                    '/Washing Machine Cleaner Descaler Tablets-2.jpg',
                    '/Washing Machine Cleaner Descaler Tablets-3.jpg',
                    '/Washing Machine Cleaner Descaler Tablets-4.jpg',
                    '/Washing Machine Cleaner Descaler Tablets-5.jpg',
                ],
                link: 'https://amzn.to/3XclKeS'
            }
        ],
        description: '',
        breadcumb: 'Washing Machine Cleaner Descaler Tablets',
        title: 'Washing Machine Cleaner Descaler Tablets',
        price: '$18.95',
        video: '',
        specs: [
            'Product Information',
            'Usage Instructions',
            'Safety Information',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Active' },
                    { label: 'Item Form', value: 'Tablet' },
                    { label: 'Scent', value: 'Unscented' },
                    { label: 'Package Count', value: '24 Tablets' },
                ]
            },
            {
                type: 'list',
                content: [
                    'Place one tablet in the empty drum of your washing machine.',
                    'Run a normal cycle with hot water.',
                    'Use monthly or as needed for optimal machine performance.',
                ]
            },
            {
                type: 'text',
                content: 'Keep out of reach of children. Avoid contact with eyes. If eye contact occurs, rinse thoroughly with water.'
            },
        ],
        rating: 4.5,
    };











} else if (pathname === '/products/supplements/orgain-organic-vegan-protein-powder-vanilla-bean') {
    detail = {
        features: [
            'ORGANIC VEGAN PROTEIN',
            'GLUTEN-FREE & DAIRY-FREE',
            'NO SUGAR ADDED',
            'CONVENIENT TRAVEL PACKETS',
            'VANILLA BEAN FLAVOR'
        ],
        descriptions: [
            '21g of plant-based protein per serving for optimal nutrition.',
            'Suitable for various dietary needs: gluten-free, dairy-free, lactose-free, and soy-free.',
            'No added sugar, perfect for those watching their sugar intake.',
            '10 travel packets for on-the-go convenience.',
            'Delicious vanilla bean flavor, great for smoothies and shakes.'
        ],
        images: [
            '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-1.jpg',
            '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-2.jpg',
            '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-3.jpg',
            '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-4.jpg',
            '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Orgain Organic Vegan Protein Powder - Vanilla Bean',
                imageset: [
                    '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-1.jpg',
                    '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-2.jpg',
                    '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-3.jpg',
                    '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-4.jpg',
                    '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-5.jpg',
                    '/Orgain Organic Vegan Protein Powder. Vanilla Bean - 21g Plant Based Protein.-6.jpg',
                ],
                link: 'https://amzn.to/4e2zYpb'
            },
        ],
        description: '',
        breadcumb: 'Orgain Organic Vegan Protein Powder, Vanilla Bean',
        title: 'Orgain Organic Vegan Protein Powder',
        price: '$13.25',
        video: '',
        specs: [
            'Product Information',
            'Nutritional Facts',
            'Usage Instructions'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Orgain' },
                    { label: 'Flavor', value: 'Vanilla Bean' },
                    { label: 'Protein Source', value: 'Plant-Based' },
                    { label: 'Package Count', value: '10 Travel Packets' }
                ]
            },
            {
                type: 'list',
                content: [
                    '21g plant-based protein per serving',
                    'No sugar added',
                    'Gluten-free, dairy-free, lactose-free, soy-free',
                    'Kosher certified'
                ]
            },
            {
                type: 'text',
                content: 'Mix one packet with 8-10 fl oz of water, milk, or your favorite beverage. Shake well and enjoy. Great for smoothies, baking, and more.'
            },
        ],
        rating: 4.4,
    };







} else if (pathname === '/products/supplements/Lavazza-Espresso-Whole-Bean-Coffee-Blend') {
    detail = {
        features: [
            'AUTHENTIC ITALIAN ESPRESSO',
            'MEDIUM ROAST',
            'WHOLE BEAN COFFEE',
            'BLENDED AND ROASTED IN ITALY',
        ],
        descriptions: [
            'Experience the rich, authentic taste of Italian espresso with Lavazza\'s expertly crafted blend.',
            'A perfectly balanced medium roast that delivers a smooth, full-bodied flavor.',
            'Whole bean coffee allows you to grind fresh for optimal flavor and aroma.',
            'Blended and roasted in Italy, ensuring genuine Italian quality and taste.',
        ],
        images: [
            '/Lavazza Espresso Whole Bean Coffee Blend Bag-1.jpg',
            '/Lavazza Espresso Whole Bean Coffee Blend Bag-2.jpg',
            '/Lavazza Espresso Whole Bean Coffee Blend Bag-3.jpg',
            '/Lavazza Espresso Whole Bean Coffee Blend Bag-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Lavazza Espresso Whole Bean Coffee Blend, Medium Roast, 2.2 Pound Bag',
                imageset: [
                    '/Lavazza Espresso Whole Bean Coffee Blend Bag-1.jpg',
                    '/Lavazza Espresso Whole Bean Coffee Blend Bag-2.jpg',
                    '/Lavazza Espresso Whole Bean Coffee Blend Bag-3.jpg',
                    '/Lavazza Espresso Whole Bean Coffee Blend Bag-4.jpg',
                    '/Lavazza Espresso Whole Bean Coffee Blend Bag-5.jpg',
                    '/Lavazza Espresso Whole Bean Coffee Blend Bag-6.jpg',
                ],
                link: 'https://amzn.to/3ZciFhm'
            }
        ],
        description: '',
        breadcumb: 'Lavazza Espresso Whole Bean Coffee Blend',
        title: 'Lavazza Espresso Whole Bean Coffee Blend',
        price: '$14.98',
        video: '',
        specs: [
            'Product Information',
            'Flavor Profile',
            'Usage Instructions',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Lavazza' },
                    { label: 'Roast Level', value: 'Medium Roast' },
                    { label: 'Weight', value: '2.2 Pounds' },
                    { label: 'Form', value: 'Whole Bean' },
                ]
            },
            {
                type: 'text',
                content: 'A well-balanced blend with notes of dried fruit and a hint of chocolate. Full-bodied with a rich crema.'
            },
            {
                type: 'list',
                content: [
                    'Grind beans immediately before brewing',
                    'Use 7-8 grams of coffee per shot of espresso',
                    'Store in a cool, dry place to maintain freshness',
                ]
            },
        ],
        rating: 4.6,
    };

} else if (pathname === '/products/supplements/PRESTO-Presto-Flex-A-Size-Paper-Towels') {
    detail = {
        features: [
            'FLEX-A-SIZE SHEETS',
            'STRONG AND ABSORBENT',
            'VERSATILE USE',
            'ECONOMICAL CHOICE',
        ],
        descriptions: [
            'Flex-a-Size sheets allow you to use just the right amount for any task, reducing waste.',
            'Made with strong, absorbent material to handle tough messes efficiently.',
            'Perfect for kitchen spills, cleaning tasks, and everyday use around the home.',
            'Presto offers quality paper towels at a great value, helping you save money without sacrificing performance.',
        ],
        images: [
            '/PRESTO Presto Flex A Size Paper Towels-1.jpg',
            '/PRESTO Presto Flex A Size Paper Towels-2.jpg',
            '/PRESTO Presto Flex A Size Paper Towels-3.jpg',
            '/PRESTO Presto Flex A Size Paper Towels-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'PRESTO Presto Flex-A-Size Paper Towels',
                imageset: [
                    '/PRESTO Presto Flex A Size Paper Towels-1.jpg',
                    '/PRESTO Presto Flex A Size Paper Towels-2.jpg',
                    '/PRESTO Presto Flex A Size Paper Towels-3.jpg',
                    '/PRESTO Presto Flex A Size Paper Towels-4.jpg',
                    '/PRESTO Presto Flex A Size Paper Towels-5.jpg',
                    '/PRESTO Presto Flex A Size Paper Towels-6.jpg',
                ],
                link: 'https://amzn.to/4ei82Ou'
            }
        ],
        description: '',
        breadcumb: 'PRESTO Presto Flex-A-Size Paper Towels',
        title: 'PRESTO Presto Flex-A-Size Paper Towels',
        price: '$5.95',
        video: '',
        specs: [
            'Product Information',
            'Usage Tips',
            'Environmental Impact',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Presto' },
                    { label: 'Sheet Size', value: 'Flex-A-Size' },
                    { label: 'Quantity', value: 'Varies by package' },
                    { label: 'Material', value: 'Paper' },
                ]
            },
            {
                type: 'list',
                content: [
                    'Use smaller sheets for small spills to reduce waste',
                    'Can be used wet or dry for various cleaning tasks',
                    'Store in a dry place to maintain quality',
                ]
            },
            {
                type: 'text',
                content: 'Made from responsibly sourced materials. Packaging may be recyclable where facilities exist.'
            },
        ],
        rating: 4.7,
    };

} else if (pathname === '/products/supplements/Organic-Blueberries') {
    detail = {
        features: [
            'USDA CERTIFIED ORGANIC',
            'FRESH AND DELICIOUS',
            'NUTRIENT-RICH SUPERFOOD',
            'VERSATILE INGREDIENT',
        ],
        descriptions: [
            'Grown without synthetic pesticides or fertilizers, ensuring a pure and natural product.',
            'Handpicked at peak ripeness for optimal flavor and freshness.',
            'Packed with antioxidants, vitamins, and fiber for a healthy addition to your diet.',
            'Perfect for snacking, baking, smoothies, or as a topping for yogurt and cereal.',
        ],
        images: [
            '/Organic-Blueberries-12Oz-1.jpg',
            '/Organic-Blueberries-12Oz-2.jpg',
            '/Organic-Blueberries-12Oz-1.jpg',
            '/Organic-Blueberries-12Oz-2.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Organic Blueberries, 12 Oz',
                imageset: [
                    '/Organic-Blueberries-12Oz-1.jpg',
                    '/Organic-Blueberries-12Oz-2.jpg',
                ],
                link: 'https://amzn.to/3ZhgokV'
            }
        ],
        description: '',
        breadcumb: 'Organic Blueberries',
        title: 'Organic Blueberries',
        price: '$4.99',
        video: '',
        specs: [
            'Product Information',
            'Nutritional Facts',
            'Storage Tips',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Fresh Produce (Brands May Vary)' },
                    { label: 'Weight', value: '12 Ounces' },
                    { label: 'Type', value: 'Organic' },
                    { label: 'Form', value: 'Fresh' },
                ]
            },
            {
                type: 'text',
                content: 'Rich in Vitamin C, dietary fiber, and antioxidants. Low in calories and fat-free.'
            },
            {
                type: 'list',
                content: [
                    'Store in the refrigerator for up to 1-2 weeks',
                    'Wash just before eating to maintain freshness',
                    'Can be frozen for longer storage',
                ]
            },
        ],
        rating: 4.7,
    };






} else if (pathname === '/products/supplements/365-by-Whole-Foods-Market-Organic-Baby-Spinach') {
    detail = {
        features: [
            'USDA CERTIFIED ORGANIC',
            'FRESH AND TENDER',
            'NUTRIENT-DENSE LEAFY GREEN',
            'VERSATILE INGREDIENT',
        ],
        descriptions: [
            'Grown without synthetic pesticides or fertilizers, ensuring a pure and natural product.',
            'Carefully selected and packaged to maintain freshness and quality.',
            'Rich in vitamins, minerals, and antioxidants for a healthy addition to your diet.',
            'Perfect for salads, smoothies, sautéing, or as a nutritious side dish.',
        ],
        images: [
            '/365 by Whole Foods Market. Organic Baby Spinach. 5 oz-1.jpg',
            '/365 by Whole Foods Market. Organic Baby Spinach. 5 oz-2.jpg',
            '/365 by Whole Foods Market. Organic Baby Spinach. 5 oz-1.jpg',
            '/365 by Whole Foods Market. Organic Baby Spinach. 5 oz-2.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: '365 by Whole Foods Market, Organic Baby Spinach, 5 oz',
                imageset: [
                    '/365 by Whole Foods Market. Organic Baby Spinach. 5 oz-1.jpg',
                    '/365 by Whole Foods Market. Organic Baby Spinach. 5 oz-2.jpg',
                ],
                link: 'https://amzn.to/4ed0ZXa'
            }
        ],
        description: '',
        breadcumb: '365 by Whole Foods Market, Organic Baby Spinach',
        title: '365 by Whole Foods Market, Organic Baby Spinach',
        price: '$2.49',
        video: '',
        specs: [
            'Product Information',
            'Nutritional Facts',
            'Storage Tips',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Whole Foods Market' },
                    { label: 'Weight', value: '5 Ounces' },
                    { label: 'Type', value: 'Organic' },
                    { label: 'Form', value: 'Fresh' },
                ]
            },
            {
                type: 'text',
                content: 'Excellent source of vitamins A, C, and K. Low in calories and high in iron and fiber.'
            },
            {
                type: 'list',
                content: [
                    'Store in the refrigerator at 40°F or below',
                    'Best if used within 5-7 days of purchase',
                    'Wash thoroughly before consuming',
                ]
            },
        ],
        rating: 4.7,
    };

} else if (pathname === '/products/supplements/Blueberries') {
    detail = {
        features: [
            'FRESH AND JUICY',
            'ANTIOXIDANT-RICH SUPERFOOD',
            'CONVENIENT PACKAGING',
            'VERSATILE FRUIT',
        ],
        descriptions: [
            'Handpicked at peak ripeness to ensure the best flavor and texture.',
            'Packed with antioxidants, vitamins, and fiber for a healthy snack or ingredient.',
            'Comes in a convenient 1 pint container, perfect for snacking or recipes.',
            'Great for eating fresh, baking, smoothies, or as a topping for yogurt and cereal.',
        ],
        images: [
            '/Blueberries. 1 Pint.jpg',
            '/Blueberries. 1 Pint.jpg',
            '/Blueberries. 1 Pint.jpg',
            '/Blueberries. 1 Pint.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Blueberries, 1 Pint',
                imageset: [
                    '/Blueberries. 1 Pint.jpg',
                ],
                link: 'https://amzn.to/4dW2Q2K'
            }
        ],
        description: '',
        breadcumb: 'Blueberries, 1 Pint',
        title: 'Blueberries',
        price: '$4.29',
        video: '',
        specs: [
            'Product Information',
            'Nutritional Benefits',
            'Storage and Usage',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: '成城石井' },
                    { label: 'Weight', value: '1 Pint (approximately 12 oz)' },
                    { label: 'Type', value: 'Fresh' },
                    { label: 'Form', value: 'Whole' },
                ]
            },
            {
                type: 'text',
                content: 'Rich in vitamin C, manganese, and dietary fiber. Known for their high antioxidant content, particularly anthocyanins.'
            },
            {
                type: 'list',
                content: [
                    'Store in the refrigerator for up to 1-2 weeks',
                    'Rinse just before eating to maintain freshness',
                    'Can be frozen for longer storage',
                ]
            },
        ],
        rating: 4.7,
    };

} else if (pathname === '/products/supplements/Organic-Cucumber') {
    detail = {
        features: [
            'USDA CERTIFIED ORGANIC',
            'FRESH AND CRISP',
            'LOW-CALORIE VEGETABLE',
            'VERSATILE INGREDIENT',
        ],
        descriptions: [
            'Grown without synthetic pesticides or fertilizers, ensuring a pure and natural product.',
            'Harvested at the perfect stage for optimal crispness and flavor.',
            'Excellent for weight management and hydration with its high water content.',
            'Perfect for salads, sandwiches, snacking, or as a refreshing addition to drinks.',
        ],
        images: [
            '/Organic Cucumber-1.jpg',
            '/Organic Cucumber-2.jpg',
            '/Organic Cucumber-1.jpg',
            '/Organic Cucumber-2.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Organic Cucumber',
                imageset: [
                    '/Organic Cucumber-1.jpg',
                    '/Organic Cucumber-2.jpg',

                ],
                link: 'https://amzn.to/4dWqVXa'
            }
        ],
        description: '',
        breadcumb: 'Organic Cucumber',
        title: 'Organic Cucumber',
        price: '$1.49',
        video: '',
        specs: [
            'Product Information',
            'Nutritional Facts',
            'Storage Tips',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Fresh Produce Aisle' },
                    { label: 'Type', value: 'Organic' },
                    { label: 'Form', value: 'Fresh, Whole' },
                    { label: 'Packaging', value: 'Varies' },
                ]
            },
            {
                type: 'text',
                content: 'Low in calories and high in water content. Contains vitamins K, C, and various B vitamins. Good source of potassium, magnesium, and manganese.'
            },
            {
                type: 'list',
                content: [
                    'Store in the refrigerator, preferably in the crisper drawer',
                    'Best when used within 1 week of purchase',
                    'Wash thoroughly before use',
                ]
            },
        ],
        rating: 4.7,
    };





} else if (pathname === '/products/supplements/Affresh-Washing-Machine-Cleaner') {
    detail = {
        features: [
            'EFFECTIVE CLEANING',
            'SAFE FOR ALL WASHERS',
            'SEPTIC TANK SAFE',
            'MONTHLY MAINTENANCE',
        ],
        descriptions: [
            'Removes odor-causing residues and grime that regular detergents can leave behind.',
            'Designed for use in both front load and top load washing machines.',
            'Formulated to be safe for septic tanks and won\'t harm plumbing.',
            'Recommended to use one tablet per month for optimal cleaning and freshness.',
        ],
        images: [
            '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-1.jpg',
            '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-2.jpg',
            '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-3.jpg',
            '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Affresh Washing Machine Cleaner, Cleans Front Load and Top Load Washers, 6 Tablets',
                imageset: [
                    '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-1.jpg',
                    '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-2.jpg',
                    '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-3.jpg',
                    '/Affresh Washing Machine Cleaner. Cleans Front Load and Top Load Washers-4.jpg',
                ],
                link: 'https://amzn.to/3TXbXXX'
            }
        ],
        description: '',
        breadcumb: 'Affresh Washing Machine Cleaner',
        title: 'Affresh Washing Machine Cleaner',
        price: '$6.49',
        video: '',
        specs: [
            'Product Information',
            'Usage Instructions',
            'Safety Information',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Affresh' },
                    { label: 'Form', value: 'Tablet' },
                    { label: 'Scent', value: 'Unscented' },
                    { label: 'Package Count', value: '6 Tablets' },
                ]
            },
            {
                type: 'list',
                content: [
                    'Place one tablet in the empty washer drum',
                    'Run a normal cycle with hot water',
                    'Use monthly or as needed for optimal cleaning',
                ]
            },
            {
                type: 'text',
                content: 'Keep out of reach of children. Avoid contact with eyes. If eye contact occurs, rinse thoroughly with water.'
            },
        ],
        rating: 4.7,
    };

} else if (pathname === '/products/supplements/Amazon-Basics-Bath-Tissue-Rolls') {
    detail = {
        features: [
            'SOFT AND STRONG',
            'SEPTIC-SAFE',
            'BULK PACK',
            'SUSTAINABLY SOURCED',
        ],
        descriptions: [
            'Soft, strong, and absorbent 2-ply toilet paper for comfortable use.',
            'Safe for septic systems, RVs, and boats.',
            'Convenient bulk pack for long-lasting supply.',
            'Made from sustainably sourced trees and controlled forests.',
        ],
        images: [
            '/Amazon Basics Bath Tissue Rolls-1.jpg',
            '/Amazon Basics Bath Tissue Rolls-2.jpg',
            '/Amazon Basics Bath Tissue Rolls-3.jpg',
            '/Amazon Basics Bath Tissue Rolls-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Amazon Basics Bath Tissue Rolls, 2-Ply, 30 Count',
                imageset: [
                    '/Amazon Basics Bath Tissue Rolls-1.jpg',
                    '/Amazon Basics Bath Tissue Rolls-2.jpg',
                    '/Amazon Basics Bath Tissue Rolls-3.jpg',
                    '/Amazon Basics Bath Tissue Rolls-4.jpg',
                ],
                link: 'https://amzn.to/3TXbYYY'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics Bath Tissue Rolls',
        title: 'Amazon Basics Bath Tissue Rolls',
        price: '$6.31',
        video: '',
        specs: [
            'Product Information',
            'Environmental Impact',
            'Usage Tips',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Ply', value: '2-Ply' },
                    { label: 'Sheet Count', value: '350 sheets per roll' },
                    { label: 'Package Count', value: '30 Rolls' },
                ]
            },
            {
                type: 'text',
                content: 'Made from sustainably sourced trees. Packaging may be recyclable where facilities exist.'
            },
            {
                type: 'list',
                content: [
                    'Store in a cool, dry place',
                    'For best results, use one sheet at a time',
                    'Suitable for all standard toilet paper holders',
                ]
            },
        ],
        rating: 4.4,
    };


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {
        detail = {
            features: [],
            descriptions: [],
            images: [],

            carousel_feature: [],
            carousel_feature_images:[],
            carousel_desc: [],

            options:[
                {
                    colorbutton:'',
                    textbutton:'',
                    subtitle:'',
                    imageset:[
                        ''
                    ],
                    link: ''
                }
            ],
            description:'',            
            breadcumb: '',
            title: '',
            price: '',
            video: '',

            specs:[],

            values: [
                {
                    type: '',
                    content: ''
                }
            ],
            rating: 0, // Default rating for unknown products
        };
    }
    

    if (!detail) {
        return <div>Product not found</div>;
    }


  return (
    <>
      <Script id="page-meta-tags" strategy="afterInteractive">
          {`
          document.title = "${detail.title} | Lunogi";
          document.querySelector('meta[name="description"]').setAttribute("content", "${currentSubtitle}");
          `}
      </Script>
        <Breadcrumb className="flex items-center px-5 lg:px-0 max-w-7xl pt-5 mx-auto justify-center">
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/components">Detail</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage className="text-primarytext2">{detail.breadcumb}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>






    <div className="flex flex-col bg-slate-100 m-5 lg:ml-10 lg:mr-10 lg:mb-10 lg:p-5 rounded-3xl">
        
        <div className="flex flex-col md:flex-row">


                        <div className="flex flex-col order-2 md:order-1 basis-3/4 overflow-y-auto overscroll-contain h-[650px]">
                            <div className="p-5 mx-auto text-black text-center w-full">            
                                <div className="flex justify-center"> {/* {{ edit_1 }} */}
                                        <Carousel className="rounded-2xl shadow-lg w-full max-w-[1000px] overflow-hidden bg-white p-5">
                                            <CarouselContent>
                                            {(imageSets[currentImageSetIndex] ? detail.options[currentImageSetIndex].imageset : []).map((imageSet, index) => (
                                                <CarouselItem key={index} onClick={() => handleImageChange(index)}>
                                                    {imageSet && (
                                                        <div
                                                            onMouseLeave={handleMouseLeave}
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseMove={handleMouseMove}
                                                            className="relative w-full h-[500px] overflow-hidden"> {/* Fixed height */}
                                                            {zoomable && (
                                                                <div
                                                                    style={{
                                                                        backgroundPosition: `${position.x}px ${position.y}px`,
                                                                        backgroundImage: `url(${encodeImageUrl(imageSet)})`,
                                                                        backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
                                                                        backgroundRepeat: 'no-repeat',
                                                                        top: `${position.mouseY}px`,
                                                                        left: `${position.mouseX}px`,
                                                                        width: `${MAGNIFIER_SIZE}px`,
                                                                        height: `${MAGNIFIER_SIZE}px`,
                                                                    }}
                                                                    className={`z-20 border-4 rounded-full pointer-events-none absolute border-gray-500`}
                                                                />
                                                            )}
                                                            <Image
                                                                src={encodeImageUrl(imageSet)}
                                                                alt={`Feature Image ${index + 1}`}
                                                                className="object-contain" // Changed to object-contain
                                                                layout="fill"
                                                                sizes="(max-width: 1000px) 100vw, 1000px"
                                                            />
                                                        </div>
                                                    )}
                                                </CarouselItem>
                                            ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-colors">
                                                <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                                            </CarouselPrevious>
                                            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-colors">
                                                <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                                            </CarouselNext>
                                        </Carousel>
                                    </div>

                                    <div className="flex space-x-2 mt-4 justify-center">
                                        {(() => {
                                            const currentImageset = imageSets[currentImageSetIndex] ? detail.options[currentImageSetIndex].imageset : [];
                                            return currentImageset.map((imageSet, index) => (
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    key={index}
                                                    src={encodeImageUrl(imageSet)}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className={`w-16 h-16 object-cover cursor-pointer border-2 border-blue-500`}
                                                />
                                            ));
                                        })()}
                                    </div>

                                    
                                </div>



                                <div className="flex justify-center"> {/* {{ edit_1 }} */}
                                    <a href="#specificationscroll" className="text-center text-3xl font-light text-gray-500 my-5 border-x-4 border-blue-700 w-80 rounded-3xl">See Technical Specifications</a>
                                </div>
                                
                                <div className="flex flex-col items-center w-full md:hidden">
                                    <div className="w-full flex justify-center">
                                        <span className="text-3xl md:text-5xl text-primarytext2 font-bold w-full text-center py-5">
                                            {detail.price}
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <Link href={currentLink} target="_blank" className="w-3/5 block md:w-4/5 mx-auto">
                                            <Button className="flex w-full bg-gradient-to-b p-2 mb-10 from-blue-500 to-blue-600 text-2xl py-10 items-center justify-center" size="lg">
                                                Purchase Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>







                            
                                <div className="grid grid-cols-2 gap-4 m-5 text-black text-center">
                                    {detail.features.map((feature, index) => (
                                        <MotionGridItem 
                                            key={index} 
                                            className={`rounded-b-2xl bg-gray-800 row-span-2 ${index === 0 ? 'row-start-1' : index === 1 ? 'row-start-2' : ''}`}
                                        >
                                            <div className="flex flex-col">
                                                <Image 
                                                    src={detail.images[index] || ''} 
                                                    alt={`Feature ${index + 1}`} 
                                                    width={500} 
                                                    height={300}
                                                />
                                                <div className="flex flex-col">
                                                    <div className="mt-5 text-xl md:text-3xl font-bold p-3 text-white">{feature}</div>
                                                    <div className="border-b border-4 border-white my-2 mx-10"></div>
                                                    <div className="text-white m-2 mb-5 mx-4 text-base md:text-xl">{detail.descriptions[index]}</div>
                                                </div>
                                            </div>
                                        </MotionGridItem>
                                    ))}
                                </div>






                        </div>






{/*---------------------------------------------------------------------------------------------------------------------------------------------*/}



                    <div className="order-1 md:order-2 md:basis-1/4 flex flex-col items-center overflow-y-auto overscroll-contain h-[650px]">

                    <div className="p-5 flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-semibold text-slate-700 text-center">
                                {detail.title}
                            </h1>

                        </div>

                        <div className="hidden md:flex flex-col items-center w-full mt-5">
                            <div className="w-full flex justify-center">
                                <span className="text-3xl md:text-5xl text-primarytext2 font-bold w-full text-center py-5">
                                    {detail.price}
                                </span>
                            </div>
                            <div className="w-full flex justify-center">
                                <Link href={currentLink} target="_blank" className="w-3/5 block md:w-4/5 mx-auto">
                                    <Button className="flex w-full bg-gradient-to-b p-2 mb-10 from-blue-500 to-blue-600 text-2xl py-10 items-center justify-center" size="lg">
                                        Purchase Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <StarRating rating={detail.rating} /> 
                        

                        <h1 className="text:sm md:text-base text-center w-full p-5">{currentSubtitle}</h1>

                        {detail.options.length > 1 && (detail.options.some(option => option.colorbutton) || detail.options.some(option => option.textbutton)) && (
                            <ProductOptions
                                options={detail.options}
                                currentImageSetIndex={currentImageSetIndex}
                                setImageSets={setImageSets}
                                setCurrentLink={setCurrentLink}
                                setCurrentSubtitle={setCurrentSubtitle}
                                setCurrentImageSetIndex={setCurrentImageSetIndex}
                            />
                        )}


                    </div>
        </div>

        <div id="specificationscroll" className="mb-20 text-center bg-black"></div>


        <TechnicalSpecifications specs={detail.specs} values={detail.values} />

    </div>
    </>
  );
}