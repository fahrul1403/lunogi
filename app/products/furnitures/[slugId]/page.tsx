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
    rating: number;
  
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
    if (pathname === '/products/furnitures/Sports-research-daily-probiotics-with-probiotics') {
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
            rating: 0
        };








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (pathname === '/products/furnitures/Apple-MacBook-Laptop-11‑core-14‑core') {
    detail = {

        features: [
            'SUPERCHARGED BY M3 PRO OR M3 MAX',
            'UP TO 18 HOURS OF BATTERY LIFE',
            'BRILLIANT PRO DISPLAY',
            'FULLY COMPATIBLE',
            'ADVANCED CAMERA AND AUDIO',
            'CONNECT IT ALL'
        ],
        descriptions: [
            'The Apple M3 Pro chip, with an up to 12-core CPU and up to 18-core GPU, delivers amazing performance for demanding workflows like manipulating gigapixel panoramas or compiling millions of lines of code. M3 Max, with an up to 16-core CPU and up to 40-core GPU, drives extreme performance for the most advanced workflows like rendering intricate 3D content or developing transformer models with billions of parameters.',
            'Go all day thanks to the power-efficient design of Apple silicon. The MacBook Pro laptop delivers the same exceptional performance whether its running on battery or plugged in. (Battery life varies by use and configuration. See apple.com/batteries for more information.)',
            'The 14.2-inch Liquid Retina XDR display features Extreme Dynamic Range, over 1000 nits of brightness for stunning HDR content, up to 600 nits of brightness for SDR content, and pro reference modes for doing your best work on the go. (The display has rounded corners at the top. When measured diagonally, the screen is 14.2 inches. Actual viewable area is less.)',
            'All your pro apps run lightning fast — including Adobe Creative Cloud, Apple Xcode, Microsoft 365, SideFX Houdini, MathWorks MATLAB, Medivis SurgicalAR, and many of your favorite iPhone and iPad apps. And with macOS, work and play on your Mac are even more powerful. Elevate your presence on video calls. Access information in all-new ways. And discover even more ways to personalize your Mac. (Apps are available on the App Store.)',
            'Look sharp and sound great with a 1080p FaceTime HD camera, a studio-quality three-mic array, and a six-speaker sound system with Spatial Audio.',
            'This MacBook Pro features a MagSafe charging port, three Thunderbolt 4 ports, an SDXC card slot, an HDMI port, and a headphone jack. Enjoy fast wireless connectivity with Wi-Fi 6E and Bluetooth 5.3. And you can connect up to two external displays with M3 Pro, or up to four with M3 Max. (Wi‑Fi 6E available in countries and regions where supported.)'
        ],
        images: [
            '/product-1.jpg',
            '/product-2.jpg',
            '/product-3.jpg'
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
                colorbutton: 'bg-grey rounded-full w-10 h-10',
                textbutton:'',
                subtitle: 'Silver',
                imageset: [
                    '/apple-macbookpro-m3-silver.jpeg',
                    '/apple-macbookpro-m3-silver2.jpeg',
                    '/apple-macbookpro-m3-silver3.jpeg',
                    '/apple-macbookpro-m3-silver4.jpeg',
                    '/apple-macbookpro-m3-silver5.jpeg',
                    '/apple-macbookpro-m3-silver6.jpeg',
                ],
                link: 'https://amzn.to/452ZOGz',
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
        breadcumb: 'Apple 2023 MacBook Pro Laptop M3 Pro chip with 11‑core CPU',
        title: 'Apple 2023 MacBook Pro Laptop',
        price: '$1,781.01',
        video: '/Macbook_pro_m3_1.mp4',
//
//
//
//
//
//
//
        specs: [
            'Technical Details',
            'General Specifications',
            'Chip',
            'Display Support',
            'Ports',
            'Keyboard and Trackpad',
            'Wireless',
            'Audio',
            'Camera',
            'Weight and Dimensions',
            'Whats included in the box',
        ], // Add your specs here

        values: [
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Apple' },
              { label: 'Model Name', value: 'Macbook Pro' },
              { label: 'Screen Size', value: '14.2 Inches' },
              { label: 'Colors', value: 'Silver, Space Black' }
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Display', value: '14.2-inch Liquid Redtina XDR display' },
              { label: 'Resolution', value: '3024x1964 native resolution at 254 pixels per inch' },
              { label: 'Processor', value: 'Apple M3 Chip' },
              { label: 'CPU', value: '8-code CPU' },
              { label: 'GPU', value: 'Up to 10-core GPU' },
              { label: 'Memory', value: 'Up to 24GB unified memory' },
              { label: 'Battery', value: 'Up to 18 hours battery life' },
              { label: 'Storage', value: 'Up to 2TB storge' },
            ]
          },
          {
            type: 'list',
            content: [
              'Apple M3 Pro Chip',
              '11-core CPU with 5 performance cores and 6 efficiency cores, 12-core CPU with 6 performance cores and 6 efficiency cores',
              '14-core GPU, 18-core GPU',
              'Hardware-accelerated ray tracing',
              '16-core Neural Engine',
              '150GB/s memory bandwidth'
            ]
          },
          {
            type: 'list',
            content: [
              'Simultaneously supports full native resolution on the built-in display at 1 billion colours ',
              'Up to two external displays with up to 6K resolution at 60Hz over Thunderbolt, or one external display with up to 6K resolution at 60Hz over Thunderbolt and one external display with up to 4K resolution at 144Hz over HDMI',
              'One external display supported at 8K resolution at 60Hz or one external display at 4K resolution at 240Hz over HDMI',
              'Thunderbolt 4 digital video output',
              'Support for native DisplayPort output over USB‑C (M3 Pro and M3 Max)',
              'HDMI digital video output',
              'Support for one display with up to 8K resolution at 60Hz or 4K resolution at 240Hz over HDMI (M3 Pro and M3 Max)',
            ]
          },
          {
            type: 'list',
            content: [
              'SDXC card slot',
              'HDMI port',
              '3.5 mm headphone jack',
              'MagSafe 3 port',
              'Three Thunderbolt 4 ports',
            ]
          },
          {
            type: 'list',
            content: [
              'Backlit Magic Keyboard',
              '78 (U.S.) or 79 (ISO) keys including 12 full-height function keys and 4 arrow keys in an inverted-T arrangement',
              'Touch ID',
              'Ambient light sensor',
              'Force Touch trackpad for precise cursor control and pressure-sensing capabilities; enables Force clicks, accelerators, pressure-sensitive drawing, and Multi-Touch gestures',
            ]
          },
          {
            type: 'list',
            content: [
              'Wi-Fi 6E (802.11ax)',
              'Bluetooth 5.3',
            ]
          },
          {
            type: 'list',
            content: [
              'High-fidelity six-speaker sound system with force-cancelling woofers',
              'Wide stereo sound',
              'Support for Spatial Audio when playing music or video with Dolby Atmos on built-in speakers',
              'Spatial Audio with dynamic head tracking when using AirPods (3rd generation), AirPods Pro, and AirPods Max',
              'Studio-quality three-mic array with high signal-to-noise ratio and directional beamforming',
              '3.5 mm headphone jack with advanced support for high-impedance headphones',
              'HDMI port supports multichannel audio output'
            ]
          },
          {
            type: 'list',
            content: [
              '1080p FaceTime HD camera',
              'Advanced image signal processor with computational video'
            ]
          },
          {
            type: 'text',
            content: '0.61 x 12.31 x 8.71 inches; 3.5 pounds'
          },
          {
            type: 'list',
            content: [
              '14-inch MacBook Pro',
              '70W USB‑C Power Adapter (M3 Pro with 11-core CPU) or 96W USB‑C Power Adapter (M3 Pro with 12-core CPU)',
              'USB-C to MagSafe 3 Cable (2 m)',
            ]
          },                                          
        ], // Add corresponding values here
        rating: 0
    };





} else if (pathname === '/products/furniture/amazon-basics-lightweight-super-soft-easy-care-microfiber-bedding') {
    detail = {
        features: [
            '<strong>Soft and Comfortable</strong>',
            '<strong>Easy Care</strong>',
            '<strong>Lightweight</strong>',
            '<strong>Versatile Design</strong>',
            '<strong>Various Sizes Available</strong>'
        ],
        descriptions: [
            '<p>Made from 100% polyester microfiber for a soft and comfortable feel.</p>',
            '<p>Machine washable and dryable for easy maintenance.</p>',
            '<p>Lightweight fabric ideal for all seasons.</p>',
            '<p>Simple and elegant design suitable for various bedroom styles.</p>',
            '<p>Available in multiple sizes to fit different bed types.</p>'
        ],
        images: [
            '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-1.jpg',
            '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-2.jpg',
            '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-3.jpg',
            '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-4.jpg',
            '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Queen Size Set',
                imageset: [
                    '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-1.jpg',
                    '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-2.jpg',
                    '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-3.jpg',
                    '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-4.jpg',
                    '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-5.jpg',
                    '/Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding-6.jpg',
                ],
                link: 'https://amzn.to/3Z3cts0'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding',
        title: 'Amazon Basics Lightweight Super Soft Easy Care Microfiber Bedding',
        price: '$15.99',
        video: '',
        specs: [
            'General Specifications',
            'Material',
            'Care Instructions'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Size', value: 'Queen (also available in other sizes)' },
                    { label: 'Color', value: 'Various options available' },
                    { label: 'Pattern', value: 'Solid' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Material', value: '100% Polyester Microfiber' },
                    { label: 'Thread Count', value: 'Not specified' },
                    { label: 'Weave', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Machine Washable', value: 'Yes' },
                    { label: 'Tumble Dry', value: 'Yes' },
                    { label: 'Iron if needed', value: 'Yes, on low heat' }
                ]
            }
        ],
        rating: 4.5,
    };







} else if (pathname === '/products/furniture/Bedsure-Satin-Pillowcases') {
    detail = {
        features: [
            '<strong>Silky Smooth Comfort</strong>',
            '<strong>Hair and Skin Friendly</strong>',
            '<strong>Durable and Easy Care</strong>',
            '<strong>Perfect Fit</strong>',
            '<strong>Elegant Design</strong>'
        ],
        descriptions: [
            '<p>Made from high-quality polyester satin for a luxuriously smooth feel against your skin.</p>',
            '<p>Helps reduce hair breakage and facial creases, promoting healthier hair and skin.</p>',
            '<p>Machine washable and wrinkle-resistant for easy maintenance and long-lasting use.</p>',
            '<p>Envelope closure design ensures your pillow stays securely in place all night.</p>',
            '<p>Available in various colors to complement any bedroom decor.</p>'
        ],
        images: [
            '/Bedsure Satin Pillowcases. 2 Count-1.jpg',
            '/Bedsure Satin Pillowcases. 2 Count-2.jpg',
            '/Bedsure Satin Pillowcases. 2 Count-3.jpg',
            '/Bedsure Satin Pillowcases. 2 Count-4.jpg',
            '/Bedsure Satin Pillowcases. 2 Count-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Standard Size (20 x 26 inches) - Set of 2',
                imageset: [
                    '/Bedsure Satin Pillowcases. 2 Count-1.jpg',
                    '/Bedsure Satin Pillowcases. 2 Count-2.jpg',
                    '/Bedsure Satin Pillowcases. 2 Count-3.jpg',
                    '/Bedsure Satin Pillowcases. 2 Count-4.jpg',
                    '/Bedsure Satin Pillowcases. 2 Count-5.jpg',
                ],
                link: 'https://amzn.to/3xrZWXX'
            }
        ],
        description: '',
        breadcumb: 'Bedsure Satin Pillowcases, 2 Count',
        title: 'Bedsure Satin Pillowcases',
        price: '$7.19',
        video: '',
        specs: [
            'General Specifications',
            'Material',
            'Care Instructions'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Bedsure' },
                    { label: 'Size', value: 'Standard (20 x 26 inches)' },
                    { label: 'Color', value: 'Various options available' },
                    { label: 'Quantity', value: '2 Count' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Material', value: '100% Polyester Satin' },
                    { label: 'Closure Type', value: 'Envelope' },
                    { label: 'Finish', value: 'Satin' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Machine Washable', value: 'Yes' },
                    { label: 'Tumble Dry', value: 'Low' },
                    { label: 'Iron if needed', value: 'Yes, on low heat' }
                ]
            }
        ],
        rating: 4.5,
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
            rating: 0

        };
    }
    

    if (!detail) {
        return <div>Product not found</div>;
    }


  return (
    <>
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


                                This is a categoty for home and office furnitures

                                <div className="flex flex-col">
                                    {detail.features.map((feature, index) => (
                                        <div key={index} className="flex flex-col relative overflow-hidden min-h-[32rem] w-full mx-auto">
                                            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-l from-blue-600 via-blue-500 to-white"></div>
                                            <div className="relative z-10 flex flex-col h-full border-b-8 border-transparent">
                                                <div className="absolute inset-0 z-0">
                                                    <Image 
                                                        src={detail.images[index] || ''}
                                                        alt={`Feature image ${index + 1}`}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-white from-30% via-white via-20% to-transparent"></div>
                                                <div className="relative z-20 p-4 text-black flex flex-col justify-center h-full w-full">
                                                    <div className="max-w-[45%]">
                                                        <h3 className="font-bold text-3xl mb-2">{feature}</h3>
                                                        <p className="text-xl mt-2">{detail.descriptions[index]}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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