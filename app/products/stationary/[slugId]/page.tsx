"use client";
import { ImageCarousel } from "@/components/imageCarousel";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, StarHalfIcon } from "lucide-react";
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
import StarRating from '@/components/ui/StarRating';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-product" 

import React, { MouseEvent, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { MotionGridItem } from "@/components/ui/MotionGridItem";


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
  
    rating: number; // New rating property
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
    if (pathname === '/products/stationary/Sports-research-daily-probiotics-with-probiotics') {
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

            rating: 4.6, // Add the rating from productData.ts
        };








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (pathname === '/products/stationary/Apple-MacBook-Laptop-11‑core-14‑core') {
    detail = {

        features: [
            'SUPERCHARGED BY M3 PRO OR M3 MAX',
            'UP TO 18 HOURS OF BATTERY LIFE',
            'BRILLIANT PRO DISPLAY',
            'FULLY COMPATIBLE',
            'ADVANCED CAMERA AND AUDIO',
            'CONNECT IT ALL',
        ],
        descriptions: [
            'The Apple M3 Pro chip, with an up to 12-core CPU and up to 18-core GPU, delivers amazing performance for demanding workflows like manipulating gigapixel panoramas or compiling millions of lines of code. M3 Max, with an up to 16-core CPU and up to 40-core GPU, drives extreme performance for the most advanced workflows like rendering intricate 3D content or developing transformer models with billions of parameters.',
            'Go all day thanks to the power-efficient design of Apple silicon. The MacBook Pro laptop delivers the same exceptional performance whether its running on battery or plugged in. (Battery life varies by use and configuration. See apple.com/batteries for more information.)',
            'The 14.2-inch Liquid Retina XDR display features Extreme Dynamic Range, over 1000 nits of brightness for stunning HDR content, up to 600 nits of brightness for SDR content, and pro reference modes for doing your best work on the go. (The display has rounded corners at the top. When measured diagonally, the screen is 14.2 inches. Actual viewable area is less.)',
            'All your pro apps run lightning fast — including Adobe Creative Cloud, Apple Xcode, Microsoft 365, SideFX Houdini, MathWorks MATLAB, Medivis SurgicalAR, and many of your favorite iPhone and iPad apps. And with macOS, work and play on your Mac are even more powerful. Elevate your presence on video calls. Access information in all-new ways. And discover even more ways to personalize your Mac. (Apps are available on the App Store.)',
            'Look sharp and sound great with a 1080p FaceTime HD camera, a studio-quality three-mic array, and a six-speaker sound system with Spatial Audio.',
            'This MacBook Pro features a MagSafe charging port, three Thunderbolt 4 ports, an SDXC card slot, an HDMI port, and a headphone jack. Enjoy fast wireless connectivity with Wi-Fi 6E and Bluetooth 5.3. And you can connect up to two external displays with M3 Pro, or up to four with M3 Max. (Wi‑Fi 6E available in countries and regions where supported.)',
        ],
        images: [
            '/product-1.jpg',
            '/product-2.jpg',
            '/product-3.jpg',
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

        rating: 4.7, // Add the rating from productData.ts
    };









} else if (pathname === '/products/stationary/Stanley-Quencher-H2-0-FlowState-Stainless-Steel-Vacuum-Insulated-Tumbler-with-Lid-and-Straw-for-Water-Iced-Tea-or-Coffee') {
    detail = {
        features: [
            'VACUUM INSULATED',
            'FLOWSTATE LID',
            'REUSABLE STRAW',
            'ERGONOMIC HANDLE',
            'DURABLE CONSTRUCTION',
        ],
        descriptions: [
            'Double-wall vacuum insulation keeps drinks cold for hours and hot for up to 7 hours.',
            'Rotating cover with 3-position lid allows for easy drinking and spill resistance.',
            'Includes a reusable straw for convenient sipping of cold beverages.',
            'Comfortable handle design for easy carrying and transport.',
            'Made from recycled stainless steel, built to last and resist dents and drops.',
        ],
        images: [
            '/Stanley Quencher H2 0 -1.jpg',
            '/Stanley Quencher H2 0 -2.jpg',
            '/Stanley Quencher H2 0 -3.jpg',
            '/Stanley Quencher H2 0 -4.jpg',
            '/Stanley Quencher H2 0 -5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-green-500 rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Stanley Quencher H2.0 FlowState Tumbler - Green',
                imageset: [
                    '/Stanley Quencher H2 0 -1.jpg',
                    '/Stanley Quencher H2 0 -2.jpg',
                    '/Stanley Quencher H2 0 -3.jpg',
                    '/Stanley Quencher H2 0 -4.jpg',
                    '/Stanley Quencher H2 0 -5.jpg',
                ],
                link: 'https://amzn.to/3XokHtB'
            },
            // Add more color options as needed
        ],
        description: '',
        breadcumb: 'Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler',
        title: 'Stanley Quencher H2.0 FlowState Tumbler',
        price: '$20.00',
        video: '',
        specs: [
            'Product Information',
            'Dimensions',
            'Features',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Stanley' },
                    { label: 'Material', value: 'Stainless Steel' },
                    { label: 'Capacity', value: '40 oz' },
                    { label: 'Insulation', value: 'Double-wall vacuum' },
                ]
            },
            {
                type: 'text',
                content: '4.7 x 4.7 x 12.5 inches; 1.5 pounds'
            },
            {
                type: 'list',
                content: [
                    'Keeps drinks cold for hours, hot for up to 7 hours',
                    '3-position FlowState lid',
                    'Reusable straw included',
                    'Fits in car cup holders',
                    'Dishwasher safe',
                ]
            },
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/stationary/JISULIFE-Handheld-Mini-Fan-3-IN-1-Hand-Fan-USB-Rechargeable-Small-Pocket-Fan') {
    detail = {
        features: [
            '3-IN-1 DESIGN',
            'LONG BATTERY LIFE',
            'PORTABLE SIZE',
            'ADJUSTABLE SPEEDS',
            'BUILT-IN FLASHLIGHT',
        ],
        descriptions: [
            'Functions as a handheld fan, power bank, and flashlight in one compact device.',
            'Rechargeable battery provides 12-19 hours of continuous use on a single charge.',
            'Small and lightweight, perfect for travel, outdoor events, or everyday use.',
            'Multiple speed settings allow you to customize airflow to your preference.',
            'Integrated LED light offers convenience for nighttime use or emergencies.',
        ],
        images: [
            '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-1.jpg',
            '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-2.jpg',
            '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-3.jpg',
            '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-4.jpg',
            '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-pink-300 rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JISULIFE Handheld Mini Fan - Pink',
                imageset: [
                    '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-1.jpg',
                    '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-2.jpg',
                    '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-3.jpg',
                    '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-4.jpg',
                    '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-5.jpg',
                    '/JISULIFE Handheld Mini Fan. 3 IN 1 Hand Fan.-6.jpg',
                ],
                link: 'https://amzn.to/3XocnKm'
            },
            // Add more color options as needed
        ],
        description: '',
        breadcumb: 'JISULIFE Handheld Mini Fan, 3 IN 1 Hand Fan, USB Rechargeable Small Pocket Fan',
        title: 'JISULIFE Handheld Mini Fan',
        price: '$19.99',
        video: '',
        specs: [
            'Product Information',
            'Technical Details',
            'Features',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'JISULIFE' },
                    { label: 'Power Source', value: 'Battery Powered' },
                    { label: 'Material', value: 'ABS Plastic' },
                    { label: 'Number of Speeds', value: '3' },
                ]
            },
            {
                type: 'text',
                content: 'Dimensions: 4.1 x 1.6 x 1.2 inches; Weight: 4.2 ounces'
            },
            {
                type: 'list',
                content: [
                    'USB rechargeable',
                    '12-19 hours working time',
                    'Power bank function',
                    'LED flashlight',
                    'Foldable design',
                ]
            },
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/stationary/Energizer-Alkaline-Power-AAA-Batteries-32-Pack') {
    detail = {
        features: [
            'LONG-LASTING POWER',
            'LEAK-RESISTANT CONSTRUCTION',
            'VERSATILE USE',
            'BULK PACK',
            'TRUSTED BRAND',
        ],
        descriptions: [
            'Provides reliable, long-lasting power for your everyday devices.',
            'Designed to prevent leaks, protecting your devices from damage.',
            'Suitable for a wide range of devices, from remotes to toys and more.',
            '32-pack ensures you always have batteries on hand when needed.',
            'Energizer is a globally recognized brand known for quality and reliability.',
        ],
        images: [
            '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-1.jpg',
            '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-2.jpg',
            '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-3.jpg',
            '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-4.jpg',
            '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: 'AAA',
                subtitle: 'Energizer Alkaline Power AAA Batteries (32 Pack)',
                imageset: [
                    '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-1.jpg',
                    '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-2.jpg',
                    '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-3.jpg',
                    '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-4.jpg',
                    '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-5.jpg',
                    '/Energizer Alkaline Power AAA Batteries (32 Pack). Long-Lasting Triple A Batteries-6.jpg',
                ],
                link: 'https://amzn.to/3Mm6BTb'
            },
        ],
        description: '',
        breadcumb: 'Energizer Alkaline Power AAA Batteries (32 Pack), Long-Lasting Triple A Batteries',
        title: 'Energizer Alkaline Power AAA Batteries',
        price: '$19.98',
        video: '',
        specs: [
            'Product Information',
            'Technical Details',
            'Features',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Energizer' },
                    { label: 'Battery Type', value: 'Alkaline' },
                    { label: 'Size', value: 'AAA' },
                    { label: 'Count', value: '32 Pack' },
                ]
            },
            {
                type: 'text',
                content: 'Dimensions: 2.5 x 0.41 inches (per battery); Weight: 11.2 grams (per battery)'
            },
            {
                type: 'list',
                content: [
                    'Long-lasting alkaline batteries',
                    'Leak-resistant construction',
                    'Suitable for high-drain devices',
                    '10-year shelf life',
                    'Mercury and cadmium free',
                ]
            },
        ],
        rating: 4.8,
    };

} else if (pathname === '/products/stationary/Energizer-AA-Batteries-Alkaline-Power-32-Count') {
    detail = {
        features: [
            'LONG-LASTING POWER',
            'LEAK-RESISTANT CONSTRUCTION',
            'VERSATILE USE',
            'BULK PACK',
            'TRUSTED BRAND',
        ],
        descriptions: [
            'Provides reliable, long-lasting power for your everyday devices.',
            'Designed to prevent leaks, protecting your devices from damage.',
            'Suitable for a wide range of devices, from remotes to toys and more.',
            '32-pack ensures you always have batteries on hand when needed.',
            'Energizer is a globally recognized brand known for quality and reliability.',
        ],
        images: [
            '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-1.jpg',
            '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-2.jpg',
            '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-3.jpg',
            '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-4.jpg',
            '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: 'AA',
                subtitle: 'Energizer Alkaline Power AA Batteries (32 Pack)',
                imageset: [
                    '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-1.jpg',
                    '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-2.jpg',
                    '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-3.jpg',
                    '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-4.jpg',
                    '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-5.jpg',
                    '/Energizer AA Batteries. Alkaline Power Double A Battery Alkaline. 32 Count-6.jpg',
                ],
                link: 'https://amzn.to/3XkqX5t'
            },
        ],
        description: '',
        breadcumb: 'Energizer AA Batteries, Alkaline Power Double A Battery Alkaline, 32 Count',
        title: 'Energizer AA Batteries',
        price: '$18.00',
        video: '',
        specs: [
            'Product Information',
            'Technical Details',
            'Features',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Energizer' },
                    { label: 'Battery Type', value: 'Alkaline' },
                    { label: 'Size', value: 'AA' },
                    { label: 'Count', value: '32 Pack' },
                ]
            },
            {
                type: 'text',
                content: 'Dimensions: 2.88 x 0.57 inches (per battery); Weight: 23 grams (per battery)'
            },
            {
                type: 'list',
                content: [
                    'Long-lasting alkaline batteries',
                    'Leak-resistant construction',
                    'Suitable for high-drain devices',
                    '10-year shelf life',
                    'Mercury and cadmium free',
                ]
            },
        ],
        rating: 4.8,
    };





} else if (pathname === '/products/stationary/hefty-ultra-strong-scented-kitchen-bags') {
    detail = {
        features: [
            'ULTRA STRONG CONSTRUCTION',
            'FRESH SCENT',
            'DRAWSTRING CLOSURE',
            'LARGE CAPACITY',
            'TRUSTED BRAND'
        ],
        descriptions: [
            'Made with durable materials to prevent rips and tears.',
            'Infused with a pleasant scent to mask odors.',
            'Easy-to-use drawstring for quick and secure closure.',
            'Ideal for large kitchen trash cans and high-volume waste.',
            'Hefty is a well-known brand for reliable household products.'
        ],
        images: [
            '/HEFTY Ultra Strong Scented Kitchen Bags Drawstring Plastic-1.jpg',
            '/HEFTY Ultra Strong Scented Kitchen Bags Drawstring Plastic-1.jpg',
            '/HEFTY Ultra Strong Scented Kitchen Bags Drawstring Plastic-1.jpg',
            '/HEFTY Ultra Strong Scented Kitchen Bags Drawstring Plastic-1.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'HEFTY Ultra Strong Scented Kitchen Bags',
                imageset: [
                    '/HEFTY Ultra Strong Scented Kitchen Bags Drawstring Plastic-1.jpg',
                ],
                link: 'https://amzn.to/4g52jgr'
            },
        ],
        description: '',
        breadcumb: 'HEFTY Ultra Strong Scented Kitchen Bags Drawstring Plastic',
        title: 'HEFTY Ultra Strong Scented Kitchen Bags',
        price: '$14.96',
        video: '',
        specs: [
            'Product Information',
            'Technical Details',
            'Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Hefty' },
                    { label: 'Material', value: 'Plastic' },
                    { label: 'Scent', value: 'Scented' },
                    { label: 'Closure Type', value: 'Drawstring' }
                ]
            },
            {
                type: 'text',
                content: 'Dimensions and count not specified in the provided information.'
            },
            {
                type: 'list',
                content: [
                    'Ultra strong construction',
                    'Fresh scent to mask odors',
                    'Easy-to-use drawstring closure',
                    'Suitable for large kitchen trash cans',
                    'Leak-resistant design'
                ]
            },
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/stationary/cascade-complete-dawn-pod') {
    detail = {
        features: [
            'POWERFUL CLEANING',
            'DAWN GREASE-FIGHTING POWER',
            'CONVENIENT PODS',
            'RINSE AID ACTION',
            'PHOSPHATE-FREE FORMULA'
        ],
        descriptions: [
            'Delivers a thorough clean for all your dishes and cookware.',
            'Incorporates Dawn dish soap for effective grease removal.',
            'Pre-measured pods for easy and mess-free dishwasher loading.',
            'Includes built-in rinse aid to prevent water spots and film.',
            'Environmentally friendly formula without phosphates.'
        ],
        images: [
            '/Cascade complete dawn pod.jpg',
            '/Cascade complete dawn pod.jpg',
            '/Cascade complete dawn pod.jpg',
            '/Cascade complete dawn pod.jpg',
            '/Cascade complete dawn pod.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Cascade Complete Dawn Pod',
                imageset: [
                    '/Cascade complete dawn pod.jpg',
                ],
                link: 'https://amzn.to/3T7Dhnd'
            },
        ],
        description: '',
        breadcumb: 'Cascade Complete Dawn Pod',
        title: 'Cascade Complete Dawn Pod',
        price: '$96.49',
        video: '',
        specs: [
            'Product Information',
            'Usage',
            'Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Cascade' },
                    { label: 'Form', value: 'Pod' },
                    { label: 'Scent', value: 'Not specified' },
                    { label: 'Package Count', value: 'Not specified' }
                ]
            },
            {
                type: 'text',
                content: 'Place one pod in the main detergent cup and run dishwasher as usual.'
            },
            {
                type: 'list',
                content: [
                    'Powerful cleaning action',
                    'Dawn grease-fighting formula',
                    'Convenient pre-measured pods',
                    'Built-in rinse aid',
                    'Phosphate-free'
                ]
            },
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/stationary/amazon-basics-colored-pencils') {
    detail = {
        features: [
            'VIBRANT COLORS',
            'SMOOTH APPLICATION',
            'DURABLE CONSTRUCTION',
            'VERSATILE USE',
            'AFFORDABLE QUALITY'
        ],
        descriptions: [
            'Set includes a wide range of vibrant, blendable colors.',
            'Soft lead core for smooth and easy application.',
            'Made with high-quality wood for easy sharpening and long-lasting use.',
            'Ideal for coloring, sketching, and various art projects.',
            'Amazon Basics offers quality art supplies at an affordable price.'
        ],
        images: [
            '/Amazon Basics Colored Pencils-1.jpg',
            '/Amazon Basics Colored Pencils-2.jpg',
            '/Amazon Basics Colored Pencils-3.jpg',
            '/Amazon Basics Colored Pencils-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Amazon Basics Colored Pencils',
                imageset: [
                    '/Amazon Basics Colored Pencils-1.jpg',
                    '/Amazon Basics Colored Pencils-2.jpg',
                    '/Amazon Basics Colored Pencils-3.jpg',
                    '/Amazon Basics Colored Pencils-4.jpg',
                    '/Amazon Basics Colored Pencils-5.jpg',
                    '/Amazon Basics Colored Pencils-6.jpg',
                    '/Amazon Basics Colored Pencils-7.jpg',
                ],
                link: 'https://amzn.to/4g17C0v'
            },
        ],
        description: '',
        breadcumb: 'Amazon Basics Colored Pencils',
        title: 'Amazon Basics Colored Pencils',
        price: '$10.09',
        video: '',
        specs: [
            'Product Information',
            'Technical Details',
            'Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Type', value: 'Colored Pencils' },
                    { label: 'Number of Colors', value: 'Not specified' },
                    { label: 'Lead Hardness', value: 'Soft' }
                ]
            },
            {
                type: 'text',
                content: 'Dimensions and exact color count not specified in the provided information.'
            },
            {
                type: 'list',
                content: [
                    'Vibrant, blendable colors',
                    'Smooth application',
                    'Durable wood casing',
                    'Suitable for various art projects',
                    'Easy to sharpen'
                ]
            },
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/stationary/amazon-basics-clear-thermal-laminating-plastic-paper-laminator-sheets') {
    detail = {
        features: [
            'CLEAR FINISH',
            'THERMAL LAMINATION',
            'VERSATILE SIZE',
            'BULK PACK',
            'EASY TO USE'
        ],
        descriptions: [
            'Provides a crystal-clear finish to preserve and protect documents.',
            'Compatible with most thermal laminators for easy lamination.',
            '9 x 11.5-inch size suitable for various document sizes.',
            '200-pack offers great value for frequent laminating needs.',
            'Simple to use with thermal laminators for quick and efficient lamination.'
        ],
        images: [
            '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-1.jpg',
            '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-2.jpg',
            '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-3.jpg',
            '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-4.jpg',
            '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Amazon Basics Clear Thermal Laminating Sheets',
                imageset: [
                    '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-1.jpg',
                    '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-2.jpg',
                    '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-3.jpg',
                    '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-4.jpg',
                    '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-5.jpg',
                    '/Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch. 200-Pack-6.jpg',
                ],
                link: 'https://amzn.to/477zkET'
            },
        ],
        description: '',
        breadcumb: 'Amazon Basics Clear Thermal Laminating Plastic Paper Laminator Sheets - 9 x 11.5-Inch, 200-Pack',
        title: 'Amazon Basics Clear Thermal Laminating Sheets',
        price: '$10.02',
        video: '',
        specs: [
            'Product Information',
            'Technical Details',
            'Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Size', value: '9 x 11.5 inches' },
                    { label: 'Quantity', value: '200 sheets' },
                    { label: 'Type', value: 'Thermal Laminating' }
                ]
            },
            {
                type: 'text',
                content: 'Compatible with most thermal laminators. Thickness not specified in the provided information.'
            },
            {
                type: 'list',
                content: [
                    'Crystal-clear finish',
                    'Thermal lamination compatible',
                    'Versatile 9 x 11.5-inch size',
                    'Bulk pack of 200 sheets',
                    'Easy to use with thermal laminators'
                ]
            },
        ],
        rating: 4.8,
    };







} else if (pathname === '/products/stationary/amazon-basics-multipurpose-copy-printer-paper') {
    detail = {
        features: [
            'VERSATILE USE',
            'HIGH QUALITY',
            'BRIGHT WHITE',
            'PRINTER COMPATIBLE',
            'ECONOMICAL PACK'
        ],
        descriptions: [
            'Suitable for everyday printing, copying, and writing needs.',
            'Smooth surface ensures clear text and vibrant image reproduction.',
            '92 bright white paper for enhanced contrast and readability.',
            'Compatible with inkjet and laser printers, as well as copiers.',
            'Bulk pack offers great value for home, office, or school use.'
        ],
        images: [

            '/Amazon Basics Multipurpose Copy Printer Paper-1.jpg',
            '/Amazon Basics Multipurpose Copy Printer Paper-2.jpg',
            '/Amazon Basics Multipurpose Copy Printer Paper-3.jpg',
            '/Amazon Basics Multipurpose Copy Printer Paper-4.jpg',
            '/Amazon Basics Multipurpose Copy Printer Paper-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Amazon Basics Multipurpose Copy Printer Paper',
                imageset: [
                    '/Amazon Basics Multipurpose Copy Printer Paper-1.jpg',
                    '/Amazon Basics Multipurpose Copy Printer Paper-2.jpg',
                    '/Amazon Basics Multipurpose Copy Printer Paper-3.jpg',
                    '/Amazon Basics Multipurpose Copy Printer Paper-4.jpg',
                    '/Amazon Basics Multipurpose Copy Printer Paper-5.jpg',
                    '/Amazon Basics Multipurpose Copy Printer Paper-6.jpg',
                    '/Amazon Basics Multipurpose Copy Printer Paper-7.jpg',
                ],
                link: 'https://amzn.to/3Xl7UrM'
            },
        ],
        description: '',
        breadcumb: 'Amazon Basics Multipurpose Copy Printer Paper',
        title: 'Amazon Basics Multipurpose Copy Printer Paper',
        price: '$9.99',
        video: '',
        specs: [
            'Product Information',
            'Technical Details',
            'Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Paper Size', value: '8.5 x 11 inches' },
                    { label: 'Weight', value: '20 lbs' },
                    { label: 'Brightness', value: '92' }
                ]
            },
            {
                type: 'text',
                content: 'Sheets per ream: 500; Reams per case: Not specified in the provided information'
            },
            {
                type: 'list',
                content: [
                    'Multipurpose use for printing, copying, and writing',
                    'Smooth surface for clear text and image reproduction',
                    'Bright white for enhanced contrast',
                    'Compatible with inkjet and laser printers',
                    'Acid-free for long-lasting documents'
                ]
            },
        ],
        rating: 4.8,
    };






    

} else if (pathname === '/products/stationary/Paper-Mate') {
    detail = {
        features: [
            'Smooth Writing Experience',
            'Comfortable Grip',
            'Reliable Performance',
            'Versatile Use',
            'Variety of Colors'
        ],
        descriptions: [
            'Delivers effortless writing with consistent ink flow.',
            'Ergonomic design for reduced writing fatigue.',
            'Dependable for everyday writing tasks.',
            'Suitable for office, school, or home use.',
            'Available in multiple ink colors for diverse needs.'
        ],
        images: [
            '/Paper Mate-1.jpg',
            '/Paper Mate-2.jpg',
            '/Paper Mate-3.jpg',
            '/Paper Mate-4.jpg',
            '/Paper Mate-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Paper Mate InkJoy Gel Pens, Medium Point (0.7mm)',
                imageset: [
                    '/Paper Mate-1.jpg',
                    '/Paper Mate-2.jpg',
                    '/Paper Mate-3.jpg',
                    '/Paper Mate-4.jpg',
                    '/Paper Mate-5.jpg',
                    '/Paper Mate-6.jpg',
                ],
                link: 'https://amzn.to/3MXLwih'
            }
        ],
        description: '',
        breadcumb: 'Paper Mate InkJoy Gel Pens',
        title: 'Paper Mate InkJoy Gel Pens',
        price: '$9.24',
        video: '',
        specs: ['General Specifications', 'Pen Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Paper Mate' },
                    { label: 'Ink Color', value: 'Assorted' },
                    { label: 'Point Type', value: 'Medium' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Point Size', value: '0.7mm' },
                    { label: 'Grip Type', value: 'Comfort' },
                    { label: 'Retractable', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '8 pens per pack' },
                    { label: 'Colors Included', value: 'Black, Blue, Red, Green, Pink, Orange, Purple, Light Blue' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/stationary/EXPO-Low-Odor-Dry') {
    detail = {
        features: [
            'Low Odor Formula',
            'Quick-Drying Ink',
            'Vibrant Colors',
            'Versatile Use',
            'Easy Erasing'
        ],
        descriptions: [
            'Ideal for classrooms and offices with its low-odor ink.',
            'Ink dries quickly to prevent smearing.',
            'Bright, bold colors for clear visibility.',
            'Suitable for whiteboards, glass, and most non-porous surfaces.',
            'Erases easily and cleanly from whiteboards.'
        ],
        images: [
            '/EXPO Low Odor Dry.jpg',
            '/EXPO Low Odor Dry-2.jpg',
            '/EXPO Low Odor Dry-3.jpg',
            '/EXPO Low Odor Dry-4.jpg',
            '/EXPO Low Odor Dry-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'EXPO Low Odor Dry Erase Markers, Chisel Tip',
                imageset: [
                    '/EXPO Low Odor Dry.jpg',
                    '/EXPO Low Odor Dry-2.jpg',
                    '/EXPO Low Odor Dry-3.jpg',
                    '/EXPO Low Odor Dry-4.jpg',
                    '/EXPO Low Odor Dry-5.jpg',
                    '/EXPO Low Odor Dry-6.jpg',

                ],
                link: 'https://amzn.to/3XzijA7'
            }
        ],
        description: '',
        breadcumb: 'EXPO Low Odor Dry Erase Markers',
        title: 'EXPO Low Odor Dry Erase Markers',
        price: '$8.97',
        video: '',
        specs: ['General Specifications', 'Marker Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'EXPO' },
                    { label: 'Ink Type', value: 'Low Odor' },
                    { label: 'Tip Type', value: 'Chisel' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Tip Width', value: 'Broad' },
                    { label: 'Erasable', value: 'Yes' },
                    { label: 'Refillable', value: 'No' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '4 markers per pack' },
                    { label: 'Colors Included', value: 'Black, Blue, Red, Green' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/stationary/BIC-Brite-Liner-Highlighters-Ideal-Highlighter-Set-for-Organizing') {
    detail = {
        features: [
            'Bright Fluorescent Ink',
            'Chisel Tip',
            'Smear Guard Technology',
            'Long-Lasting',
            'Versatile Use'
        ],
        descriptions: [
            'Vibrant colors for effective highlighting.',
            'Allows for both broad and fine lines.',
            'Resists smearing of many pen and marker inks.',
            'Provides extended use before needing replacement.',
            'Ideal for textbooks, documents, and organizing notes.'
        ],
        images: [
            '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-1.jpg',
            '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-2.jpg',
            '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-3.jpg',
            '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-4.jpg',
            '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'BIC Brite Liner Highlighter, Chisel Tip',
                imageset: [
                    '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-1.jpg',
                    '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-2.jpg',
                    '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-3.jpg',
                    '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-4.jpg',
                    '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-5.jpg',
                    '/BIC Brite Liner Highlighters Ideal Highlighter Set for Organizing-6.jpg',
                ],
                link: 'https://amzn.to/3TjX5Up'
            }
        ],
        description: '',
        breadcumb: 'BIC Brite Liner Highlighters',
        title: 'BIC Brite Liner Highlighters',
        price: '$7.93',
        video: '',
        specs: ['General Specifications', 'Highlighter Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'BIC' },
                    { label: 'Ink Type', value: 'Fluorescent' },
                    { label: 'Tip Type', value: 'Chisel' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Tip Width', value: 'Broad and Fine' },
                    { label: 'Smear Resistant', value: 'Yes' },
                    { label: 'Refillable', value: 'No' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '5 highlighters per pack' },
                    { label: 'Colors Included', value: 'Yellow, Pink, Blue, Green, Orange' }
                ]
            }
        ],
        rating: 4.8,
    };









} else if (pathname === '/products/stationary/Elmers-Plastic-Washable-Non-Toxic-Stick-Paper-Sticks-Bonding-Adhesives') {
    detail = {
        features: [
            'Washable Formula',
            'Non-Toxic',
            'Strong Bond',
            'Easy Application',
            'Versatile Use'
        ],
        descriptions: [
            'Safe for children, easily washes off hands and clothes.',
            'Safe for school and home use.',
            'Creates a lasting bond on paper, cardboard, and fabric.',
            'Smooth glide for precise application.',
            'Ideal for school projects, crafts, and office use.'
        ],
        images: [
            '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-1.jpg',
            '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-2.jpg',
            '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-3.jpg',
            '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-4.jpg',
            '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: "Elmer's Washable Glue Sticks, 0.24 ounces each, 4 Count",
                imageset: [
                    '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-1.jpg',
                    '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-2.jpg',
                    '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-3.jpg',
                    '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-4.jpg',
                    '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-5.jpg',
                    '/Elmer\'S Plastic Washable. Non Toxic Stick Paper Sticks Bonding Adhesives-6.jpg',
                ],
                link: 'https://amzn.to/3zaEwet'
            }
        ],
        description: '',
        breadcumb: "Elmer's Washable Glue Sticks",
        title: "Elmer's Washable Glue Sticks",
        price: '$7.64',
        video: '',
        specs: ['General Specifications', 'Product Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: "Elmer's" },
                    { label: 'Adhesive Type', value: 'Glue Stick' },
                    { label: 'Color', value: 'Clear' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Weight', value: '0.24 ounces each' },
                    { label: 'Washable', value: 'Yes' },
                    { label: 'Non-Toxic', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '4 glue sticks per pack' },
                    { label: 'Dimensions', value: 'Not specified in the provided information' }
                ]
            }
        ],
        rating: 4.9,
    };
} else if (pathname === '/products/stationary/Bostitch-Office-Pencil-Sharpener') {
    detail = {
        features: [
            'Electric Operation',
            'Auto-Stop Feature',
            'Multiple Pencil Sizes',
            'Large Shavings Reservoir',
            'Quiet Performance'
        ],
        descriptions: [
            'Powered for quick and effortless sharpening.',
            'Stops automatically when pencil is optimally sharp.',
            'Accommodates standard and oversized pencils.',
            'Holds more shavings, reducing emptying frequency.',
            'Operates quietly, ideal for office or classroom use.'
        ],
        images: [
            '/Bostitch Office Pencil Sharpener-1.jpg',
            '/Bostitch Office Pencil Sharpener-2.jpg',
            '/Bostitch Office Pencil Sharpener-3.jpg',
            '/Bostitch Office Pencil Sharpener-4.jpg',
            '/Bostitch Office Pencil Sharpener-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Bostitch Office Electric Pencil Sharpener, Black',
                imageset: [
                    '/Bostitch Office Pencil Sharpener-1.jpg',
                    '/Bostitch Office Pencil Sharpener-2.jpg',
                    '/Bostitch Office Pencil Sharpener-3.jpg',
                    '/Bostitch Office Pencil Sharpener-4.jpg',
                    '/Bostitch Office Pencil Sharpener-5.jpg',
                    '/Bostitch Office Pencil Sharpener-6.jpg',
                ],
                link: 'https://amzn.to/3XywS78'
            }
        ],
        description: '',
        breadcumb: 'Bostitch Office Electric Pencil Sharpener',
        title: 'Bostitch Office Electric Pencil Sharpener',
        price: '$7.08',
        video: '',
        specs: ['General Specifications', 'Sharpener Details', 'Power Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Bostitch Office' },
                    { label: 'Color', value: 'Black' },
                    { label: 'Material', value: 'Plastic' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Pencil Sizes', value: 'Standard and Oversized' },
                    { label: 'Auto-Stop Feature', value: 'Yes' },
                    { label: 'Noise Level', value: 'Quiet' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Power Source', value: 'Electric' },
                    { label: 'Voltage', value: 'Not specified in the provided information' }
                ]
            }
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/stationary/DURACELL-CopperBlack-2032') {
    detail = {
        features: [
            'Long-Lasting Power',
            'Reliable Performance',
            'Versatile Use',
            'Leak Resistant',
            'Extended Shelf Life'
        ],
        descriptions: [
            'Provides long-lasting energy for various devices.',
            'Consistent power output for reliable device operation.',
            'Suitable for a wide range of small electronics.',
            'Designed to prevent leaks, protecting your devices.',
            'Guaranteed fresh for up to 10 years in storage.'
        ],
        images: [
            '/DURACELL Copper&Black 2032-1.jpg',
            '/DURACELL Copper&Black 2032-2.jpg',
            '/DURACELL Copper&Black 2032-3.jpg',
            '/DURACELL Copper&Black 2032-4.jpg',
            '/DURACELL Copper&Black 2032-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Duracell - 2032 3V Lithium Coin Battery - long lasting battery - 2 count',
                imageset: [
                    '/DURACELL Copper&Black 2032-1.jpg',
                    '/DURACELL Copper&Black 2032-2.jpg',
                    '/DURACELL Copper&Black 2032-3.jpg',
                    '/DURACELL Copper&Black 2032-4.jpg',
                    '/DURACELL Copper&Black 2032-5.jpg',
                    '/DURACELL Copper&Black 2032-6.jpg',
                ],
                link: 'https://amzn.to/47hUUXg'
            }
        ],
        description: '',
        breadcumb: 'Duracell 2032 Lithium Coin Battery',
        title: 'Duracell 2032 Lithium Coin Battery',
        price: '$6.69',
        video: '',
        specs: ['General Specifications', 'Battery Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Duracell' },
                    { label: 'Battery Type', value: 'Lithium Coin' },
                    { label: 'Voltage', value: '3V' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Model', value: '2032' },
                    { label: 'Shelf Life', value: 'Up to 10 years' },
                    { label: 'Leak Resistant', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '2 batteries per pack' },
                    { label: 'Packaging', value: 'Retail Packaging' }
                ]
            }
        ],
        rating: 4.7,
    };






} else if (pathname === '/products/stationary/Elmers-E1560-Plastic-Dries-Clear') {
    detail = {
        features: [
            'Clear Drying Formula',
            'Washable',
            'Strong Bond',
            'Easy Application',
            'Versatile Use'
        ],
        descriptions: [
            'Dries clear for a neat and professional finish.',
            'Easily washes off hands and most fabrics.',
            'Creates a lasting bond on paper, cardboard, and fabric.',
            'Smooth glide for precise and easy application.',
            'Ideal for school projects, crafts, and office use.'
        ],
        images: [
            '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-1.jpg',
            '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-2.jpg',
            '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-3.jpg',
            '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-4.jpg',
            '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: "Elmer's E1560 Glue-All Multi-Purpose Liquid Glue, Extra Strong, 7.625 Ounces",
                imageset: [
                    '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-1.jpg',
                    '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-2.jpg',
                    '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-3.jpg',
                    '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-4.jpg',
                    '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-5.jpg',
                    '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-6.jpg',
                    '/Elmer\'S E1560 Plastic Dries Clear.Washable Tube Cardboard. Paper Sticks Bonding Adhesives-7.jpg',
                ],
                link: 'https://amzn.to/47jicfc'
            }
        ],
        description: '',
        breadcumb: "Elmer's E1560 Glue-All Multi-Purpose Liquid Glue",
        title: "Elmer's E1560 Glue-All Multi-Purpose Liquid Glue",
        price: '$6.30',
        video: '',
        specs: ['General Specifications', 'Product Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: "Elmer's" },
                    { label: 'Adhesive Type', value: 'Liquid Glue' },
                    { label: 'Color', value: 'Clear when dry' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Volume', value: '7.625 Ounces' },
                    { label: 'Washable', value: 'Yes' },
                    { label: 'Drying Time', value: 'Varies based on application' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '1 bottle' },
                    { label: 'Dimensions', value: 'Not specified in the provided information' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/stationary/EXPO-Low-Odor-Dry-Erase-Markers') {
    detail = {
        features: [
            'Low Odor Formula',
            'Quick-Drying Ink',
            'Vibrant Colors',
            'Versatile Use',
            'Easy Erasing'
        ],
        descriptions: [
            'Ideal for classrooms and offices with its low-odor ink.',
            'Ink dries quickly to prevent smearing.',
            'Bright, bold colors for clear visibility.',
            'Suitable for whiteboards, glass, and most non-porous surfaces.',
            'Erases easily and cleanly from whiteboards.'
        ],
        images: [
            '/EXPO Low Odor Dry Erase Markers-1.jpg',
            '/EXPO Low Odor Dry Erase Markers-2.jpg',
            '/EXPO Low Odor Dry Erase Markers-3.jpg',
            '/EXPO Low Odor Dry Erase Markers-4.jpg',
            '/EXPO Low Odor Dry Erase Markers-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'EXPO Low Odor Dry Erase Markers, Chisel Tip, Assorted Colors, 8 Count',
                imageset: [
                    '/EXPO Low Odor Dry Erase Markers-1.jpg',
                    '/EXPO Low Odor Dry Erase Markers-2.jpg',
                    '/EXPO Low Odor Dry Erase Markers-3.jpg',
                    '/EXPO Low Odor Dry Erase Markers-4.jpg',
                    '/EXPO Low Odor Dry Erase Markers-5.jpg',
                    '/EXPO Low Odor Dry Erase Markers-6.jpg',
                ],
                link: 'https://amzn.to/3AXeFr3'
            }
        ],
        description: '',
        breadcumb: 'EXPO Low Odor Dry Erase Markers',
        title: 'EXPO Low Odor Dry Erase Markers',
        price: '$6.27',
        video: '',
        specs: ['General Specifications', 'Marker Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'EXPO' },
                    { label: 'Ink Type', value: 'Low Odor' },
                    { label: 'Tip Type', value: 'Chisel' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Tip Width', value: 'Broad' },
                    { label: 'Erasable', value: 'Yes' },
                    { label: 'Refillable', value: 'No' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '8 markers per pack' },
                    { label: 'Colors Included', value: 'Assorted' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/stationary/DURACELL-CopperTop-AA-Alkaline-Batteries') {
    detail = {
        features: [
            'Long-Lasting Power',
            'Reliable Performance',
            'Versatile Use',
            'Leak Resistant',
            'Extended Shelf Life'
        ],
        descriptions: [
            'Provides long-lasting energy for various devices.',
            'Consistent power output for reliable device operation.',
            'Suitable for a wide range of household and business devices.',
            'Designed to prevent leaks, protecting your devices.',
            'Guaranteed fresh for up to 10 years in storage.'
        ],
        images: [
            '/DURACELL-CopperTop AA Alkaline Batteries-1.jpg',
            '/DURACELL-CopperTop AA Alkaline Batteries-2.jpg',
            '/DURACELL-CopperTop AA Alkaline Batteries-3.jpg',
            '/DURACELL-CopperTop AA Alkaline Batteries-4.jpg',
            '/DURACELL-CopperTop AA Alkaline Batteries-5.jpg',
            '/DURACELL-CopperTop AA Alkaline Batteries-6.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Duracell - CopperTop AA Alkaline Batteries - long lasting, all-purpose Double A battery for household and business - 20 count',
                imageset: [
                    '/DURACELL-CopperTop AA Alkaline Batteries-1.jpg',
                    '/DURACELL-CopperTop AA Alkaline Batteries-2.jpg',
                    '/DURACELL-CopperTop AA Alkaline Batteries-3.jpg',
                    '/DURACELL-CopperTop AA Alkaline Batteries-4.jpg',
                    '/DURACELL-CopperTop AA Alkaline Batteries-5.jpg',
                    '/DURACELL-CopperTop AA Alkaline Batteries-6.jpg',
                ],
                link: 'https://amzn.to/3zjIxx5'
            }
        ],
        description: '',
        breadcumb: 'Duracell CopperTop AA Alkaline Batteries',
        title: 'Duracell CopperTop AA Alkaline Batteries',
        price: '$4.97',
        video: '',
        specs: ['General Specifications', 'Battery Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Duracell' },
                    { label: 'Battery Type', value: 'Alkaline' },
                    { label: 'Size', value: 'AA' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Voltage', value: '1.5V' },
                    { label: 'Shelf Life', value: 'Up to 10 years' },
                    { label: 'Leak Resistant', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '20 batteries per pack' },
                    { label: 'Packaging', value: 'Retail Packaging' }
                ]
            }
        ],
        rating: 4.8,
    };








} else if (pathname === '/products/stationary/EXPO-Low-Odor-Dry-Erase-Markers') {
    detail = {
        features: [
            'Low Odor Formula',
            'Quick-Drying Ink',
            'Vibrant Colors',
            'Versatile Use',
            'Easy Erasing'
        ],
        descriptions: [
            'Ideal for classrooms and offices with its low-odor ink.',
            'Ink dries quickly to prevent smearing.',
            'Bright, bold colors for clear visibility.',
            'Suitable for whiteboards, glass, and most non-porous surfaces.',
            'Erases easily and cleanly from whiteboards.'
        ],
        images: [
            '/EXPO Low Odor Dry Erase Markers-1.jpg',
            '/EXPO Low Odor Dry Erase Markers-2.jpg',
            '/EXPO Low Odor Dry Erase Markers-3.jpg',
            '/EXPO Low Odor Dry Erase Markers-4.jpg',
            '/EXPO Low Odor Dry Erase Markers-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'EXPO Low Odor Dry Erase Markers, Chisel Tip, Assorted Colors',
                imageset: [
                    '/EXPO Low Odor Dry Erase Markers-1.jpg',
                    '/EXPO Low Odor Dry Erase Markers-2.jpg',
                    '/EXPO Low Odor Dry Erase Markers-3.jpg',
                    '/EXPO Low Odor Dry Erase Markers-4.jpg',
                    '/EXPO Low Odor Dry Erase Markers-5.jpg',
                    '/EXPO Low Odor Dry Erase Markers-6.jpg',
                ],
                link: 'https://amzn.to/47fVh4x'
            }
        ],
        description: '',
        breadcumb: 'EXPO Low Odor Dry Erase Markers',
        title: 'EXPO Low Odor Dry Erase Markers',
        price: '$4.39',
        video: '',
        specs: ['General Specifications', 'Marker Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'EXPO' },
                    { label: 'Ink Type', value: 'Low Odor' },
                    { label: 'Tip Type', value: 'Chisel' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Tip Width', value: 'Broad' },
                    { label: 'Erasable', value: 'Yes' },
                    { label: 'Refillable', value: 'No' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: 'Not specified in the provided information' },
                    { label: 'Colors Included', value: 'Assorted' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/stationary/Elmers-Adhesive-Dries-Clear') {
    detail = {
        features: [
            'Clear Drying Formula',
            'Washable',
            'Strong Bond',
            'Easy Application',
            'Versatile Use'
        ],
        descriptions: [
            'Dries clear for a neat and professional finish.',
            'Easily washes off hands and most fabrics.',
            'Creates a lasting bond on paper, cardboard, and fabric.',
            'Smooth glide for precise and easy application.',
            'Ideal for school projects, crafts, and office use.'
        ],
        images: [
            '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-1.jpg',
            '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-2.jpg',
            '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-3.jpg',
            '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-4.jpg',
            '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: "Elmer's Washable Clear Glue Stick",
                imageset: [
                    '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-1.jpg',
                    '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-2.jpg',
                    '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-3.jpg',
                    '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-4.jpg',
                    '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-5.jpg',
                    '/Elmer\'S Adhesive Dries Clear.Washable Stick Paper Sticks Bonding Adhesives-6.jpg',
                ],
                link: 'https://amzn.to/3ZA6mf9'
            }
        ],
        description: '',
        breadcumb: "Elmer's Washable Clear Glue Stick",
        title: "Elmer's Washable Clear Glue Stick",
        price: '$2.88',
        video: '',
        specs: ['General Specifications', 'Product Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: "Elmer's" },
                    { label: 'Adhesive Type', value: 'Glue Stick' },
                    { label: 'Color', value: 'Clear when dry' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Weight', value: 'Not specified in the provided information' },
                    { label: 'Washable', value: 'Yes' },
                    { label: 'Drying Time', value: 'Varies based on application' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: 'Not specified in the provided information' },
                    { label: 'Dimensions', value: 'Not specified in the provided information' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/stationary/Amazon-Basics-Pre-sharpened-Wood-Cased-2-HB-Pencils') {
    detail = {
        features: [
            'Pre-sharpened',
            'High-Quality Wood',
            'Durable #2 HB Lead',
            'Latex-Free Eraser',
            'Bulk Pack'
        ],
        descriptions: [
            'Ready to use right out of the box.',
            'Made from high-quality wood for easy sharpening.',
            'Ideal for standardized tests and general writing.',
            'Smudge-free eraser for clean corrections.',
            'Perfect for classrooms, offices, or home use.'
        ],
        images: [
            '/Amazon-Basics-Wood-Cased-2HB-Pencils-1.jpg',
            '/Amazon-Basics-Wood-Cased-2HB-Pencils-2.jpg',
            '/Amazon-Basics-Wood-Cased-2HB-Pencils-3.jpg',
            '/Amazon-Basics-Wood-Cased-2HB-Pencils-4.jpg',
            '/Amazon-Basics-Wood-Cased-2HB-Pencils-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: 'Amazon Basics Pre-sharpened Wood Cased #2 HB Pencils',
                imageset: [
                    '/Amazon-Basics-Wood-Cased-2HB-Pencils-1.jpg',
                    '/Amazon-Basics-Wood-Cased-2HB-Pencils-2.jpg',
                    '/Amazon-Basics-Wood-Cased-2HB-Pencils-3.jpg',
                    '/Amazon-Basics-Wood-Cased-2HB-Pencils-4.jpg',
                ],
                link: 'https://amzn.to/4gkHf5Y'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics Pre-sharpened Wood Cased #2 HB Pencils',
        title: 'Amazon Basics Pre-sharpened Wood Cased #2 HB Pencils',
        price: '$1.99',
        video: '',
        specs: ['General Specifications', 'Pencil Details', 'Package Information'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Lead Type', value: '#2 HB' },
                    { label: 'Material', value: 'Wood' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Pre-sharpened', value: 'Yes' },
                    { label: 'Eraser Type', value: 'Latex-Free' },
                    { label: 'Lead Hardness', value: 'Medium' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: 'Not specified in the provided information' },
                    { label: 'Packaging', value: 'Bulk Pack' }
                ]
            }
        ],
        rating: 4.8,
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

            rating: 0, // Default rating if not found
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




                                This is a categoty for tools and stationary items



                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-auto">
                                    {detail.features.map((feature, index) => {
                                        const isBlueBackground = (index % 4 === 0) || (index % 4 === 3);
                                        return (
                                            <div key={index} className={`${isBlueBackground ? 'bg-blue-300' : 'bg-gray-300'} rounded-2xl p-4 flex flex-col`}>
                                                <div className="flex flex-col md:flex-row mb-4">
                                                    <div className="flex-shrink-0 md:w-1/2 mb-4 md:mb-0">
                                                        <div className="relative w-full aspect-square">
                                                            <Image 
                                                                src={detail.images[index] || ''}
                                                                alt={`image ${index + 1}`}
                                                                layout="fill"
                                                                objectFit="contain"
                                                                className="rounded-xl"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-center md:w-1/2 md:pl-4">
                                                        <h3 className="font-bold text-xl mb-2">{feature}</h3>
                                                    </div>
                                                </div>
                                                <div className="text-sm">
                                                    {detail.descriptions[index]}
                                                </div>
                                            </div>
                                        );
                                    })}
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