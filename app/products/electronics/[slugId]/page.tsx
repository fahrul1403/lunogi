"use client";
import { ImageCarousel } from "@/components/imageCarousel";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ProductOptions from '@/components/ui/ProductOptions';
import TechnicalSpecifications from '@/components/ui/TechnicalSpecifications';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
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
    specs: string[];
    values: {
      type: string;
      content: string | { label: string; value: string }[] | string[];
    }[]; // Array for values
    rating: number; // Added rating variable
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
if (pathname === '/products/electronics/Electactic-Countertop-Efficient-Machine-Self-Cleaning') {
    detail = {
        features: [
            '<strong>Easy to Carry</strong>',
            '<strong>High Efficient</strong>',
            '<strong>Two-Step method</strong>',
            '<strong>Special Design</strong>',
            '<strong>Shape of Ice Cube</strong>',
        ],
        descriptions: [
            '<p>The size of this ice maker is 8.7(D)*11.6(W)*11.4(H) inch and the weight is 14.74 pounds. Also the ice storage capacity is 1.5L. This portable ice machine is suitable for many place, such as kitchen, living room, bedroom, office and party.</p>',
            '<p>Our product has higher ice efficiency than most ice maker on the market. This maker can produce 10 pieces of ice in at least 10 minutes in different environment; because sometimes the surrounding ambient temperature will affect the ice efficiency of the ice maker.</p>',
            '<p>There is visible window on the top of the ice machine, so that we can see the interior of the ice machine. There are three lights on the machines front , which are used to indicate that ice maker is making ice, ice is full and lack water. Also, there is a free plastic spoon in the ice machine to make it easier for buyers to use the machine..</p>',
            '<p>Our product is more convenient to use than traditional ice maker.This ice maker dont need you to set up a lot of things before making ice. We just need to put water into the machine and then press it to start. Thats all.</p>',
            '<p>According to research, round ice cubes are less likely to melt than square ice cubes. Therefor, we have redesigned the shape of ice cubes to allow ice cubes to touch the liquid more widely, so that the liquid can cool down quickly.</p>',
        ],
        images: [
            '/electactic-countertop-black1.jpeg',
            '/electactic-countertop-black2.jpeg',
            '/electactic-countertop-black3.jpeg',
            '/electactic-countertop-black4.jpeg',
            '/electactic-countertop-black5.jpeg',
        ],
//
//
//
//
//
//
//
        carousel_feature: [
            '<strong>CONVENIENT AND CLEAN</strong>',
            '<strong>FRESH AND COLD</strong>',
            '<strong>WIDE APPLICABILITY AND CRYSTAL CLEAR</strong>',
        ],
        carousel_feature_images: [
            '/electactic-countertop-black4.jpeg',
            '/electactic-countertop-black5.jpeg',
            '/electactic-countertop-black6.jpeg',
        ],
        carousel_desc: [
            '<p>Cubes of ice are more scattered and dense than other ice shapes, which means they feel comfortable to the touch and dont budge.</p>',
            '<p>Cold ice is the best way to lock in the freshness, square ice is denser than other ice cubes, cools faster, and is harder to melt.</p>',
            '<p>Ice will bring wine down to its most refreshing temperature in a very short time, square ice provides a feeling that bullet ice cant.</p>',
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
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker with Ice Scoop & Basket, 9pcs/ 8mins 26.6Lbs Per Day for Home/Office/Kitchen- Black',
                imageset: [
                    '/electactic-countertop-black1.jpeg',
                    '/electactic-countertop-black2.jpeg',
                    '/electactic-countertop-black3.jpeg',
                    '/electactic-countertop-black4.jpeg',
                    '/electactic-countertop-black5.jpeg',
                    '/electactic-countertop-black6.jpeg',
                ],
                link: 'https://amzn.to/3Vp9iso',
            },
            {
                colorbutton: 'bg-gray-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker with Ice Scoop & Basket, 9pcs/ 8mins 26.6Lbs Per Day for Home/Office/Kitchen - Dark Black',
                imageset: [
                    '/electactic-countertop-darkblack1.jpeg',
                    '/electactic-countertop-darkblack2.jpeg',
                    '/electactic-countertop-darkblack3.jpeg',
                    '/electactic-countertop-darkblack4.jpeg',
                    '/electactic-countertop-darkblack5.jpeg',
                    '/electactic-countertop-darkblack6.jpeg',
                ],
                link: 'https://amzn.to/3Vp9iso',
            },
            {
                colorbutton: 'bg-red-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker with Ice Scoop & Basket, 9pcs/ 8mins 26.6Lbs Per Day for Home/Office/Kitchen - Dark Red',
                imageset: [
                    '/electactic-countertop-darkred1.jpeg',
                    '/electactic-countertop-darkred2.jpeg',
                    '/electactic-countertop-darkred3.jpeg',
                    '/electactic-countertop-darkred4.jpeg',
                    '/electactic-countertop-darkred5.jpeg',
                    '/electactic-countertop-darkred6.jpeg',
                ],
                link: 'https://amzn.to/3Vp9iso',
            },
            {
                colorbutton: 'bg-red-800 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker with Ice Scoop & Basket, 9pcs/ 8mins 26.6Lbs Per Day for Home/Office/Kitchen- Red',
                imageset: [
                    '/electactic-countertop-red1.jpeg',
                    '/electactic-countertop-red2.jpeg',
                    '/electactic-countertop-red3.jpeg',
                    '/electactic-countertop-red4.jpeg',
                    '/electactic-countertop-red5.jpeg',
                    '/electactic-countertop-red6.jpeg',
                ],
                link: 'https://amzn.to/3Vp9iso',
            },
            {
                colorbutton: 'bg-white-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker with Ice Scoop & Basket, 9pcs/ 8mins 26.6Lbs Per Day for Home/Office/Kitchen - White',
                imageset: [
                    '/electactic-countertop-white1.jpeg',
                    '/electactic-countertop-white2.jpeg',
                    '/electactic-countertop-white3.jpeg',
                    '/electactic-countertop-white4.jpeg',
                    '/electactic-countertop-white5.jpeg',
                    '/electactic-countertop-white6.jpeg',
                ],
                link: 'https://amzn.to/3Vp9iso',
            },
            {
                colorbutton: 'bg-gray-200 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Efficient Easy Carry Ice Machine, Self-Cleaning Ice Maker with Ice Scoop & Basket, 9pcs/ 8mins 26.6Lbs Per Day for Home/Office/Kitchen - Silver',
                imageset: [
                    '/electactic-countertop-silver1.jpeg',
                    '/electactic-countertop-silver2.jpeg',
                    '/electactic-countertop-silver3.jpeg',
                    '/electactic-countertop-silver4.jpeg',
                    '/electactic-countertop-silver5.jpeg',
                    '/electactic-countertop-silver6.jpeg',
                ],
                link: 'https://amzn.to/3Vp9iso',
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
        breadcumb: 'Electactic Ice Maker Countertop, Efficient Easy Carry Ice Machine',
        title: 'Electactic Ice Maker Countertop, Efficient Easy Carry Ice Machine',
        price: '$64.33',
        video: '/elactactic-icemaker-video.mp4',
//
//
//
//
//
//
//

        specs: [
            'General Specifications',
        ], // Add your specs here

        values: [
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Electactic' },
              { label: 'Model Name', value: '5812H' },
              { label: 'Capacity', value: '5.3 Liters' },
              { label: 'Voltage', value: '120 Volts' },
            ]
          }
        ], // Add corresponding values here
        rating: 4.4,
    };



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/electronics/BLACK-DECKER-Bottle-Thermoelectric-Display') {
    detail = {
        features: [
            '<strong>6 BOTTLE STORAGE</strong>',
            '<strong>PRESERVE YOUR WINE</strong>',
            '<strong>HERMOELECTRIC COOLING</strong>',
            '<strong>MIRRORED DOOR</strong>',
            '<strong>GUARANTEED SATISFACTION</strong>'
        ],
        descriptions: [
            '<p>Store up to 6 bottles of your favorite vino with this 18.7-lb. space-saving small wine cellar. Our BLACK+DECKER small wine fridge (10" x 20.4" x 14.8") also includes 2 full-length chrome removable racks and convenient interior light.</p>',
            '<p>For wine to maintain its taste, quality, and even color it must be stored at a consistent temperature. Enjoy delicious-tasting wine preserved in an ideal climate.</p>',
            '<p>Energy-efficient, quiet, and efficient are just a few words to describe this powerful thermoelectric cooling wine fridge. Small wine cooler ranges in temperature from 46° to 66°F. Ideal for your favorite bottles!</p>',
            '<p>The solid door with mirrored front on this digital wine cooler blocks out any potential UV light that can damage your wine and alter its true taste. Black trim included for a sleek, sophisticated, and modern style.</p>',
            '<p>BLACK+DECKER products come with a one-year warranty for parts and labor, so you can feel confident with your small wine cooler purchase.</p>'

            
        ],
        images: [
            '/balckdecker-winefridge-6bottle1.jpeg',
            '/balckdecker-winefridge-6bottle2.jpeg',
            '/balckdecker-winefridge-6bottle3.jpeg',
            '/balckdecker-winefridge-6bottle4.jpeg',
            '/balckdecker-winefridge-6bottle5.jpeg',
            '/balckdecker-winefridge-6bottle6.jpeg',
        ],
//
//
//
//
//
//
//
        carousel_feature: [
        ],
        carousel_feature_images: [
        ],
        carousel_desc: [
        ],

//
//
//
//
//
//
//
        options: [
            {
                colorbutton: '',
                textbutton: '6 bottles',
                subtitle: 'Wine Cooler with Mirrored Front, Mini Wine Fridge Thermoelectric, BD60316 - 6 bottles',
                imageset: [
                    '/balckdecker-winefridge-6bottle1.jpeg',
                    '/balckdecker-winefridge-6bottle2.jpeg',
                    '/balckdecker-winefridge-6bottle3.jpeg',
                    '/balckdecker-winefridge-6bottle4.jpeg',
                    '/balckdecker-winefridge-6bottle5.jpeg',
                    '/balckdecker-winefridge-6bottle6.jpeg',
                ],
                link: 'https://amzn.to/3wT5zdg',
            },
            {
                colorbutton: '',
                textbutton: '12 bottles',
                subtitle: 'Wine Cooler with Mirrored Front, Mini Wine Fridge Thermoelectric, BD60316 - 12 bottles',
                imageset: [
                    '/balckdecker-winefridge-12bottle1.jpeg',
                    '/balckdecker-winefridge-12bottle2.jpeg',
                    '/balckdecker-winefridge-12bottle3.jpeg',
                    '/balckdecker-winefridge-12bottle4.jpeg',
                    '/balckdecker-winefridge-12bottle5.jpeg',
                    '/balckdecker-winefridge-12bottle6.jpeg',
                ],
                link: 'https://amzn.to/3wT5zdg',
            },
            {
                colorbutton: '',
                textbutton: '8 bottles',
                subtitle: 'Wine Cooler with Mirrored Front, Mini Wine Fridge Thermoelectric, BD60316 - 8 bottles',
                imageset: [
                    '/balckdecker-winefridge-8bottle1.jpeg',
                ],
                link: 'https://amzn.to/3wT5zdg',
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
        breadcumb: 'BLACK+DECKER 6 Bottle Wine Fridge',
        title: 'BLACK+DECKER 6 Bottle Wine Fridge',
        price: '$148.79',
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
            'Capacity',
            'Product Dimensions',
        ], // Add your specs here

        values: [
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'BLACK+DECKER' },
              { label: 'Configuration', value: 'Freezerless' },
              { label: 'Color', value: 'Black' },
              { label: 'Installation Type', value: 'Freestanding' },
              { label: 'Number of Doors', value: '1' },
              { label: 'Energy Star', value: 'No' },
              { label: 'Temperature Range', value: '46°F - 65°F' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: '6 Bottles', value: '0.57 Cubic Feet' },
              { label: '8 Bottles', value: '0.81 Cubic Feet' },
              { label: '12 Bottles', value: '1.17 Cubic Feet' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: '6 Bottles', value: '20.4 x 10 x 14.8 inches; 18.7 pounds' },
              { label: '8 Bottles', value: '20.4 x 10 x 21.5 inches; 21.3 pounds' },
              { label: '12 Bottles', value: '10 x 20.4 x 24.9 inches; 28.3 pounds' },
            ]
          },
        ], // Add corresponding values here
        rating: 4.6,
    };


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/electronics/JBL-Portable-Waterproof-Wireless-Bluetooth') {
    detail = {
        features: [
            '<strong>WIRELESS BLUETOOTH STREAMING</strong>',
            '<strong>UP TO 20 HOURS OF PLAYTIME</strong>',
            '<strong>IPX7 WATERPROOF</strong>',
        ],
        descriptions: [
            '<p>Wirelessly connect up to 2 smartphones or tablets to the speaker and take turns enjoying powerful sound.</p>',
            '<p>Built-in rechargeable Li-ion 7500mAH battery supports up to 20 hours of playtime and charges your device via USB port.</p>',
            '<p>Take Charge 4 to the beach or the pool without worrying about spills or even submersion in water.</p>',
        ],
        images: [
            '/jbl-charge4-bluetooth.png',
            '/jbl-charge4-battery.png',
            '/jbl-charge4-water.jpeg',
        ],
//
//
//
//
//
//
//
        carousel_feature: [
            '<strong>JBLCONNECT plus</strong>',
            '<strong>DURABLE FABRIC AND RUGGED MATERIAL</strong>',
            '<strong>JBLBASS RADIATOR</strong>',
        ],
        carousel_feature_images: [
            '/jbl-charge4-connectplus.webp',
            '/jbl-charge4-fabric.webp',
            '/jbl-charge4-radiator.png',
        ],
        carousel_desc: [
            '<p>Amplify your listening experience to epic levels and rock the party perfectly by wirelessly connecting more than 100 JBL Connect plus enabled speakers.</p>',
            '<p>The durable fabric material and rugged rubber housing allow your speaker to outlast all of your adventures.</p>',
            '<p>Dual passive radiators deliver powerful, ear-catching JBL sound that resonates loud and clear.</p>',
        ],
//
//
//
//
//
//
//
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Black',
                imageset: [
                    '/jbl-charge4-black1.jpeg',
                    '/jbl-charge4-black2.jpeg',
                    '/jbl-charge4-black3.jpeg',
                    '/jbl-charge4-black4.jpeg',
                    '/jbl-charge4-black5.jpeg',
                    '/jbl-charge4-black6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-blue-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Blue',
                imageset: [
                    '/jbl-charge4-blue1.jpeg',
                    '/jbl-charge4-blue2.jpeg',
                    '/jbl-charge4-blue3.jpeg',
                    '/jbl-charge4-blue4.jpeg',
                    '/jbl-charge4-blue5.jpeg',
                    '/jbl-charge4-blue6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-brown-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Camo',
                imageset: [
                    '/jbl-charge4-camo1.jpeg',
                    '/jbl-charge4-camo2.jpeg',
                    '/jbl-charge4-camo3.jpeg',
                    '/jbl-charge4-camo4.jpeg',
                    '/jbl-charge4-camo5.jpeg',
                    '/jbl-charge4-camo6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-gray-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Gray',
                imageset: [
                    '/jbl-charge4-gray1.jpeg',
                    '/jbl-charge4-gray2.jpeg',
                    '/jbl-charge4-gray3.jpeg',
                    '/jbl-charge4-gray4.jpeg',
                    '/jbl-charge4-gray5.jpeg',
                    '/jbl-charge4-gray6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-green-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Green',
                imageset: [
                    '/jbl-charge4-green1.jpeg',
                    '/jbl-charge4-green2.jpeg',
                    '/jbl-charge4-green3.jpeg',
                    '/jbl-charge4-green4.jpeg',
                    '/jbl-charge4-green5.jpeg',
                    '/jbl-charge4-green6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-gray-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Blackwhite',
                imageset: [
                    '/jbl-charge4-blackwhite1.jpeg',
                    '/jbl-charge4-blackwhite2.jpeg',
                    '/jbl-charge4-blackwhite3.jpeg',
                    '/jbl-charge4-blackwhite4.jpeg',
                    '/jbl-charge4-blackwhite5.jpeg',
                    '/jbl-charge4-blackwhite6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-pink-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Pink',
                imageset: [
                    '/jbl-charge4-pink1.jpeg',
                    '/jbl-charge4-pink2.jpeg',
                    '/jbl-charge4-pink3.jpeg',
                    '/jbl-charge4-pink4.jpeg',
                    '/jbl-charge4-pink5.jpeg',
                    '/jbl-charge4-pink6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-red-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Red',
                imageset: [
                    '/jbl-charge4-red1.jpeg',
                    '/jbl-charge4-red2.jpeg',
                    '/jbl-charge4-red3.jpeg',
                    '/jbl-charge4-red4.jpeg',
                    '/jbl-charge4-red5.jpeg',
                    '/jbl-charge4-red6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-teal-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Teal',
                imageset: [
                    '/jbl-charge4-teal1.jpeg',
                    '/jbl-charge4-teal2.jpeg',
                    '/jbl-charge4-teal3.jpeg',
                    '/jbl-charge4-teal4.jpeg',
                    '/jbl-charge4-teal5.jpeg',
                    '/jbl-charge4-teal6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo',
            },
            {
                colorbutton: 'bg-white mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - White',
                imageset: [
                    '/jbl-charge4-white1.jpeg',
                    '/jbl-charge4-white2.jpeg',
                    '/jbl-charge4-white3.jpeg',
                    '/jbl-charge4-white4.jpeg',
                    '/jbl-charge4-white5.jpeg',
                    '/jbl-charge4-white6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo' ,
            },
            {
                colorbutton: 'bg-yellow-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Waterproof Portable Bluetooth Speaker - Yellow',
                imageset: [
                    '/jbl-charge4-yellow1.jpeg',
                    '/jbl-charge4-yellow2.jpeg',
                    '/jbl-charge4-yellow3.jpeg',
                    '/jbl-charge4-yellow4.jpeg',
                    '/jbl-charge4-yellow5.jpeg',
                    '/jbl-charge4-yellow6.jpeg',
                ],
                link: 'https://amzn.to/4e6EAvo' ,
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
        breadcumb: 'JBL Charge 4 - Waterproof Portable Bluetooth Speaker',
        title: 'JBL Charge 4',
        price: '$109.95',
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
            'Whats in the box',
            'Documents & Downloads'
        ], // Add your specs here

        values: [
          {
            type: 'table',
            content: [
              { label: 'Power output', value: '0.54kg' }
            ]
          },
          {
            type: 'text',
            content: 'Dynamic Frequency Response Range (Hz): 65Hz - 20KHz'
          },
          {
            type: 'table',
            content: [
              { label: 'Weight', value: '0.54kg' },
              { label: 'Dimensions', value: '7.12 x 2.91 x 2.71' }
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Bluetooth profiles', value: 'A2DP V1.3, AVRCP V1.6' },
              { label: 'Bluetooth frequency', value: '2.402 – 2.480GHz' },
              { label: 'Bluetooth transmitted modulation', value: 'GFSK, π/4 DQPSK, 8DPSK' },
              { label: 'Bluetooth transmitter power', value: '0-11dBm' },
              { label: 'Bluetooth version', value: '4.2' }
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Charging time', value: '2.5' },
              { label: 'Maximum music playing time', value: '12' }
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Bluetooth', value: 'Yes' },
              { label: 'Charging cable', value: 'Yes' },
              { label: 'JBL PartyBoost', value: 'Yes' },
              { label: 'Waterproof', value: 'Yes' },
              { label: 'Wireless', value: 'Yes' },
              { label: 'Rechargable Battery', value: 'Yes' }
            ]
          },
          {
            type: 'list',
            content: [
              'JBL Charge 5',
              'Type C USB cable',
              'Quick-Start Guide',
              'Safety Sheet',
              'Warranty Card',
            ]
          },
          {
            type: 'text',
            content: 'Manual included'
          }
        ], // Add corresponding values here
        rating: 4.7,
    };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/electronics/HILIFE-steamer-for-clothes-portable-handheld-design') {
    detail = {
        features: [
            '<strong>Easy to Use</strong>',
            '<strong>Portable</strong>',
            '<strong>Large Tank</strong>',
        ],
        descriptions: [
            '<p>Wirelessly connect up to 2 smartphones or tablets to the speaker and take turns enjoying powerful sound.</p>',
            '<p>Built-in rechargeable Li-ion 7500mAH battery supports up to 20 hours of playtime and charges your device via USB port.</p>',
            '<p>Take Charge 4 to the beach or the pool without worrying about spills or even submersion in water.</p>',
        ],
        images: [
            '/HiLIFE-portablesteamer-blue4.jpeg',
            '/HiLIFE-portablesteamer-blue5.jpeg',
            '/HiLIFE-portablesteamer-blue6.jpeg',
        ],
//
//
//
//
//
//
//
        carousel_feature: [
        ],
        carousel_feature_images: [
        ],
        carousel_desc: [
        ],

//
//
//
//
//
//
//
        options: [
            {
                colorbutton: 'bg-blue-200 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Portable Handheld Design, 240ml Big Capacity, 700W, Strong Penetrating Steam, Removes Wrinkle, for Home, Office and Travel(ONLY FOR 120V)(Maya Blue)',
                imageset: [
                  '/HiLIFE-portablesteamer-blue1.jpeg',
                  '/HiLIFE-portablesteamer-blue2.jpeg',
                  '/HiLIFE-portablesteamer-blue3.jpeg',
                  '/HiLIFE-portablesteamer-blue4.jpeg',
                  '/HiLIFE-portablesteamer-blue5.jpeg',
                  '/HiLIFE-portablesteamer-blue6.jpeg',
                ],
                link: 'https://amzn.to/3x7mmct',
            },
            {
                colorbutton: 'bg-gray-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Portable Handheld Design, 240ml Big Capacity, 700W, Strong Penetrating Steam, Removes Wrinkle, for Home, Office and Travel(ONLY FOR 120V)(Gray)',
                imageset: [
                    '/HiLIFE-portablesteamer-gray1.jpeg',
                    '/HiLIFE-portablesteamer-gray2.jpeg',
                    '/HiLIFE-portablesteamer-gray3.jpeg',
                    '/HiLIFE-portablesteamer-gray4.jpeg',
                    '/HiLIFE-portablesteamer-gray5.jpeg',
                    '/HiLIFE-portablesteamer-gray6.jpeg',
                ],
                link: 'https://amzn.to/3x7mmct',
            },
            {
                colorbutton: 'bg-green-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Portable Handheld Design, 240ml Big Capacity, 700W, Strong Penetrating Steam, Removes Wrinkle, for Home, Office and Travel(ONLY FOR 120V)(Green)',
                imageset: [
                    '/HiLIFE-portablesteamer-green1.jpeg',
                    '/HiLIFE-portablesteamer-green2.jpeg',
                    '/HiLIFE-portablesteamer-green3.jpeg',
                    '/HiLIFE-portablesteamer-green4.jpeg',
                    '/HiLIFE-portablesteamer-green5.jpeg',
                    '/HiLIFE-portablesteamer-green6.jpeg',
                ],
                link: 'https://amzn.to/3x7mmct',
            },
            {
                colorbutton: 'bg-blue-200 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Portable Handheld Design, 240ml Big Capacity, 700W, Strong Penetrating Steam, Removes Wrinkle, for Home, Office and Travel(ONLY FOR 120V)(Sky Blue)',
                imageset: [
                    '/HiLIFE-portablesteamer-skyblue1.jpeg',
                    '/HiLIFE-portablesteamer-skyblue2.jpeg',
                    '/HiLIFE-portablesteamer-skyblue3.jpeg',
                    '/HiLIFE-portablesteamer-skyblue4.jpeg',
                    '/HiLIFE-portablesteamer-skyblue5.jpeg',
                    '/HiLIFE-portablesteamer-skyblue6.jpeg',
                ],
                link: 'https://amzn.to/3x7mmct',
            },
            {
                colorbutton: 'bg-gray-200 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Portable Handheld Design, 240ml Big Capacity, 700W, Strong Penetrating Steam, Removes Wrinkle, for Home, Office and Travel(ONLY FOR 120V)(White)',
                imageset: [
                    '/HiLIFE-portablesteamer-white1.jpeg',
                    '/HiLIFE-portablesteamer-white2.jpeg',
                    '/HiLIFE-portablesteamer-white3.jpeg',
                    '/HiLIFE-portablesteamer-white4.jpeg',
                    '/HiLIFE-portablesteamer-white5.jpeg',
                    '/HiLIFE-portablesteamer-white6.jpeg',
                ],
                link: 'https://amzn.to/3x7mmct',
            },

        ],
//
//
//
//
//
//
        description:'',
        breadcumb: 'HiLIFE Steamer for Clothes, Portable Handheld Design, 240ml Big Capacity, 700W',
        title: 'HiLIFE Steamer for Clothes',
        price: '$26.99',
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
            'Safety Information',
            'Weight and Dimensions',
        ], // Add your specs here

        values: [
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'HiLIFE' },
              { label: 'Style', value: 'Handheld' },
              { label: 'Wattage', value: '700W' },
              { label: 'Voltage', value: '120V' },
              { label: 'What fabrics can be steamed', value: 'cottons, linens, silks, velvet, wools, polyesters' }
            ]
          },
          {
            type: 'table',
            content: [
                { label: 'Power output', value: 'Only use for 110V-120V. Do not use the Hilife garment steeamer in areas with 220V-240V voltage as it will damage the product' },
                { label: 'Compatibility', value: 'Check garment labels for ironing compatibility. Use caution with delicate fabrics such as wool, silk, chiffon, and velvet' },
              ]
          },
          {
            type: 'text',
            content: '6.8 x 5.5 x 1.7 inches; 1.7 pounds'
          }
        ], // Add corresponding values here

        rating: 4.3,
    };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/electronics/64-tripod-for-cell-phone-camera-phone-tripod-with-remote-and-phone-holder'){
    detail = {
        features: [
            'Sturdy and Stable',
            'Multi-angle Shot',
            'Wireless Remote Included',
            'Height Adjustable',
            'Wide Application'                
        ],
        descriptions: [
            'Made of premium aluminum alloy and stainless steel, Liphisy phone tripod with remote keeps your device stay securely in place for still shots and video recording.',
            'With a max height of 64", this tripod stand with a 210-degree rotation head and 360-degree rotation holder allows you to capture shots from any angle, catering to different photography needs.',
            'Package includes a wireless remote (Model: LAKM-001) that connects to your cell phone easily, making it a breeze to snap photos or video recordings.',
            'The height of this cell phone tripod with remote can be adjusted from 17" to 64" and the easy lock mechanism makes it really easy to set up. It gives you an excellent vantage point for capturing photos and videos.',
            'Compatable with different phone and camera, this tripod is great for photography and video recording, perfect for travel and home use.'
        ],
        images:[
            '/lipshy-tripod64-1.jpeg',
            '/lipshy-tripod64-2.jpeg',
            '/lipshy-tripod64-3.jpeg',
            '/lipshy-tripod64-4.jpeg',
            '/lipshy-tripod64-5.jpeg',
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
                subtitle:'Phone Tripod with Remote and Phone Holder, Portable Tripod for iPhone, Phone Tripod for Video Recording, Cell Phone Tripod Mount Stand for Cellphone ',
                imageset:[
                    '/lipshy-tripod64-1.jpeg',
                    '/lipshy-tripod64-2.jpeg',
                    '/lipshy-tripod64-3.jpeg',
                    '/lipshy-tripod64-4.jpeg',
                    '/lipshy-tripod64-5.jpeg',
                ],
                link: 'https://www.amazon.com/Liphisy-Tripod-Portable-Recording-Cellphone/dp/B0CMM89Y6Z?th=1'
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
        breadcumb: '64" Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder',
        title: '64" Tripod for Cell Phone & Camera',
        price: '$23.99',
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
            'Features',
            'Weight and Dimensions',
        ], // Add your specs here

        values: [
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Liphisy' },
              { label: 'Compatible Devices', value: 'iPhone, Android Phone, Camera' },
              { label: 'Material', value: 'Stainless Steel, Alumimum Alloy' },
              { label: 'Model Name', value: 'LPS163' },
              { label: 'Maximum Height', value: '64 Inches' },
              { label: 'Tripod Head Type', value: 'Ball Heads' },
              { label: 'Minimum Height', value: '17 Inches' },
              { label: 'Item Length', value: '43.18 Centimeters' },
              { label: 'Manufacturer', value: 'Liphisy' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Wireless Remote Included', value: 'Yes' },
              { label: 'Height Adjustable', value: 'Yes' },
              { label: 'Wide Application', value: 'Yes' },
              { label: 'Multi-angle Shot', value: 'Yes' },
              { label: 'Stable', value: 'Yes' },
            ]
          },
          {
            type: 'text',
            content: '17.72 x 3.46 x 2.4 inches; 1.63 pounds'
          }
        ], // Add corresponding values here

        rating: 4.6,
    }; 





// ... existing code ...

} else if (pathname === '/products/electronics/JBL-Tune-230NC-TWS') {
    detail = {
        features: [
            '<strong>Active Noise Cancelling</strong>',
            '<strong>JBL Pure Bass Sound</strong>',
            '<strong>40 (10+30) Hours of Playtime</strong>',
            '<strong>4 Mics for Perfect Calls</strong>',
            '<strong>IPX4 Water Resistant</strong>'
        ],
        descriptions: [
            '<p>Tune out the world and focus on your music with Active Noise Cancelling technology.</p>',
            '<p>Enjoy JBLs signature sound with deep, punchy bass thats perfect for any genre.</p>',
            '<p>Get up to 40 hours of battery life (10 hours in the earbuds + 30 hours in the case) for all-day listening.</p>',
            '<p>Make crystal clear calls with 4 microphones that ensure your voice is always heard.</p>',
            '<p>Take your music anywhere with IPX4-rated sweat and water resistance.</p>'
        ],
        images: [
            '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-1.jpg',
            '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-2.jpg',
            '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-3.jpg',
            '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-4.jpg',
            '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-1.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones - Black',
                imageset: [
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-1.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-2.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-3.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-4.jpg',
                ],
                link: 'https://amzn.to/3YTvKw2'
            },
            {
                colorbutton: 'bg-white mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones - White',
                imageset: [
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-1.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-2.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-3.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-4.jpg',
                ],
                link: 'https://amzn.to/4cuRFfT'
            },
            {
                colorbutton: 'bg-blue-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones - Blue',
                imageset: [
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-1.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-2.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-3.jpg',
                    '/JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones-4.jpg',
                ],
                link: 'https://amzn.to/4fQizSp'
            }
        ],
        description: '',
        breadcumb: 'JBL Tune 230NC TWS True Wireless in-Ear Noise Cancelling Headphones',
        title: 'JBL Tune 230NC TWS',
        price: '$59.95',
        video: '',
        specs: [
            'General Specifications',
            'Audio Specifications',
            'Battery Specifications'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'JBL' },
                    { label: 'Model Name', value: 'Tune 230NC TWS' },
                    { label: 'Color', value: 'Black, White, Blue' },
                    { label: 'Form Factor', value: 'In Ear' },
                    { label: 'Connectivity Technology', value: 'Wireless' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Driver Size', value: '6mm/0.24"' },
                    { label: 'Frequency Response', value: '20 Hz - 20 kHz' },
                    { label: 'Impedance', value: '16 ohm' },
                    { label: 'Sensitivity', value: '105 dB SPL@1 kHz' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Up to 40 hours (10 hours in earbuds + 30 hours in case)' },
                    { label: 'Charging Time', value: '2 hours from empty' },
                    { label: 'Quick Charge', value: '10 minutes charge = 2 hours playback' }
                ]
            }
        ],
        rating: 4.7,
    };


} else if (pathname === '/products/electronics/Apple-AirTag') {
    detail = {
        features: [
            '<strong>Precision Finding</strong>',
            '<strong>Find Nearby</strong>',
            '<strong>Lost Mode</strong>',
            '<strong>Privacy Built In</strong>',
            '<strong>Simple Setup</strong>'
        ],
        descriptions: [
            '<p>Ultra-wideband technology leads you right to your nearby AirTag (on select iPhone models).</p>',
            '<p>Play a sound on the built-in speaker to help find your things, or just ask Siri for help.</p>',
            '<p>Enable Lost Mode to be automatically notified when your AirTag is detected in the Find My network.</p>',
            '<p>Only you can see where your AirTag is, and your location data and history are never stored on the AirTag itself.</p>',
            '<p>One-tap connect instantly with your iPhone or iPad.</p>'
        ],
        images: [
            '/Apple Air Tag.jpg',
            '/Apple Air Tag-2.jpg',
            '/Apple Air Tag-3.jpg',
            '/Apple Air Tag-4.jpg',
            '/Apple Air Tag-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '1 Pack',
                subtitle: 'Apple AirTag',
                imageset: [
                    '/Apple Air Tag.jpg',
                    '/Apple Air Tag-2.jpg',
                    '/Apple Air Tag-3.jpg',
                    '/Apple Air Tag-4.jpg',
                ],
                link: 'https://amzn.to/4e1NUjs'
            },
        ],
        description: '',
        breadcumb: 'Apple AirTag',
        title: 'Apple AirTag',
        price: '$29.00',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Battery'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Apple' },
                    { label: 'Model Name', value: 'AirTag' },
                    { label: 'Color', value: 'White' },
                    { label: 'Water Resistance', value: 'IP67' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'iPhone', value: 'Models with iOS 14.5 or later' },
                    { label: 'iPad', value: 'Models with iPadOS 14.5 or later' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Type', value: 'CR2032 coin cell battery' },
                    { label: 'Life', value: 'Over a year' },
                    { label: 'User Replaceable', value: 'Yes' }
                ]
            }
        ],
        rating: 4.7,
    };
    


} else if (pathname === '/products/electronics/Sceptre-Professional-Monitor-Build-in-Speakers') {
    detail = {
        features: [
            '<strong>Ultra Slim Design</strong>',
            '<strong>75Hz Refresh Rate</strong>',
            '<strong>Blue Light Shift</strong>',
            '<strong>Built-in Speakers</strong>',
            '<strong>Multiple Ports</strong>'
        ],
        descriptions: [
            '<p>The ultra slim profile of this monitor delivers a modern and sleek look to any workspace.</p>',
            '<p>With 75Hz refresh rate, images change faster and smoother than the standard, reducing screen tearing.</p>',
            '<p>Reduce your monitors blue light to protect your eyes. Enable this feature when youre working late nights or want to limit your blue light exposure.</p>',
            '<p>Built-in speakers provide decent audio for general use, eliminating the need for external speakers.</p>',
            '<p>The monitor comes equipped with HDMI and VGA ports for versatile connectivity options.</p>'
        ],
        images: [
            '/Sceptre Professional Monitor Build-in Speakers-1.jpg',
            '/Sceptre Professional Monitor Build-in Speakers-2.jpg',
            '/Sceptre Professional Monitor Build-in Speakers-3.jpg',
            '/Sceptre Professional Monitor Build-in Speakers-4.jpg',
            '/Sceptre Professional Monitor Build-in Speakers-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '24"',
                subtitle: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
                imageset: [
                    '/Sceptre Professional Monitor Build-in Speakers-1.jpg',
                    '/Sceptre Professional Monitor Build-in Speakers-2.jpg',
                    '/Sceptre Professional Monitor Build-in Speakers-3.jpg',
                    '/Sceptre Professional Monitor Build-in Speakers-4.jpg',
                ],
                link: 'https://amzn.to/3YRXPDS'
            },
            {
                colorbutton: '',
                textbutton: '27"',
                subtitle: 'Sceptre 27" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E278W-19203R Series)',
                imageset: [
                    '/Sceptre Professional Monitor Build-in Speakers-1.jpg',
                    '/Sceptre Professional Monitor Build-in Speakers-2.jpg',
                    '/Sceptre Professional Monitor Build-in Speakers-3.jpg',
                    '/Sceptre Professional Monitor Build-in Speakers-4.jpg',
                ],
                link: 'https://amzn.to/4dQhzMf'
            }
        ],
        description: '',
        breadcumb: 'Sceptre Professional Monitor with Built-in Speakers',
        title: 'Sceptre Professional Monitor',
        price: '$109.97',
        video: '',
        specs: [
            'Display Specifications',
            'Connectivity',
            'Physical Specifications'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Screen Size', value: '24" / 27"' },
                    { label: 'Resolution', value: '1920 x 1080 (Full HD)' },
                    { label: 'Refresh Rate', value: '75Hz' },
                    { label: 'Response Time', value: '8ms' },
                    { label: 'Aspect Ratio', value: '16:9' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'HDMI', value: '2 x HDMI 1.4 Ports' },
                    { label: 'VGA', value: '1 x VGA Port' },
                    { label: 'Audio', value: '3.5mm Audio Out' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'VESA Mount', value: '100mm x 100mm' },
                    { label: 'Dimensions (24")', value: '21.57" x 15.84" x 7.02"' },
                    { label: 'Dimensions (27")', value: '24.33" x 17.73" x 7.02"' },
                    { label: 'Weight', value: '5.77 lbs (24") / 8.59 lbs (27")' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/Bose-Soundlink-Flex-Bluetooth-865983') {
    detail = {
        features: [
            '<strong>State-of-the-art Design</strong>',
            '<strong>Crisp, Balanced Sound</strong>',
            '<strong>Waterproof & Dustproof</strong>',
            '<strong>Up to 12 Hours of Battery Life</strong>',
            '<strong>Bose Connect App</strong>'
        ],
        descriptions: [
            '<p>Enjoy a compact, lightweight design thats perfect for outdoor adventures or relaxing at home.</p>',
            '<p>Experience clear, lifelike sound and deep, rich bass from a compact speaker that automatically optimizes audio based on orientation.</p>',
            '<p>With an IP67 rating, this speaker is waterproof and dustproof, making it perfect for beach days or poolside parties.</p>',
            '<p>Keep the music going all day with up to 12 hours of battery life on a single charge.</p>',
            '<p>Easily manage Bluetooth connections, unlock features, and access future updates with the Bose Connect app.</p>'
        ],
        images: [
            '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers.jpg',
            '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-2.jpg',
            '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-3.jpg',
            '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-4.jpg',
            '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker for Outdoor Travel - Black',
                imageset: [
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-2.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-3.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-4.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-5.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-6.jpg',
                ],
                link: 'https://amzn.to/46WipVA'
            },
            {
                colorbutton: 'bg-white mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker for Outdoor Travel - White Smoke',
                imageset: [
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-2.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-3.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-4.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-5.jpg',
                    '/Bose Soundlink Flex Bluetooth 865983 Freestanding Battery Powered Outdoor speakers-6.jpg',
                ],
                link: 'https://amzn.to/4cBVvnD'
            },
            {
                colorbutton: 'bg-blue-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker for Outdoor Travel - Stone Blue',
                imageset: [
                    '/bose-soundlink-flex-blue-1.jpg',
                    '/bose-soundlink-flex-blue-2.jpg',
                    '/bose-soundlink-flex-blue-3.jpg',
                    '/bose-soundlink-flex-blue-4.jpg'
                ],
                link: 'https://amzn.to/3SXxZdA'
            }
        ],
        description: '',
        breadcumb: 'Bose SoundLink Flex Bluetooth Portable Speaker',
        title: 'Bose SoundLink Flex',
        price: '$109.00',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Bose' },
                    { label: 'Model Name', value: 'SoundLink Flex' },
                    { label: 'Speaker Type', value: 'Portable Bluetooth' },
                    { label: 'Color Options', value: 'Black, White Smoke, Stone Blue' },
                    { label: 'Waterproof Rating', value: 'IP67' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Sound Technology', value: 'Bose PositionIQ technology' },
                    { label: 'Speaker Size', value: 'Full-range transducer' },
                    { label: 'Passive Radiators', value: 'Dual-opposing passive radiators' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Bluetooth Version', value: 'Bluetooth 4.2' },
                    { label: 'Bluetooth Range', value: 'Up to 30 ft (9 m)' },
                    { label: 'Battery Life', value: 'Up to 12 hours' },
                    { label: 'Charging', value: 'USB-C' }
                ]
            }
        ],
        rating: 4.6,
    };

// ... existing code ...

} else if (pathname === '/products/electronics/All-New-Kindle-Paperwhite-2022-Version') {
    detail = {
        features: [
            '<strong>6.8" display</strong>',
            '<strong>Adjustable warm light</strong>',
            '<strong>Up to 10 weeks of battery life</strong>',
            '<strong>20% faster page turns</strong>',
            '<strong>8 GB storage</strong>'
        ],
        descriptions: [
            '<p>Enjoy a larger 6.8" display with thinner borders for an immersive reading experience.</p>',
            '<p>Adjust the screen shade from white to amber for comfortable reading day and night.</p>',
            '<p>A single charge via USB-C lasts up to 10 weeks, based on a half hour of reading per day.</p>',
            '<p>The latest e-ink technology provides faster page turns for seamless reading.</p>',
            '<p>Store thousands of titles with 8 GB of storage, perfect for your personal library.</p>'
        ],
        images: [
            '/All New Kindle Paperwhite - 2022 Version-1.jpg',
            '/All New Kindle Paperwhite - 2022 Version-2.jpg',
            '/All New Kindle Paperwhite - 2022 Version-3.jpg',
            '/All New Kindle Paperwhite - 2022 Version-4.jpg',
            '/All New Kindle Paperwhite - 2022 Version-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'All-new Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light – Black',
                imageset: [
                    '/All New Kindle Paperwhite - 2022 Version-1.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-2.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-3.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-4.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-5.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-6.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-7.jpg',
                ],
                link: 'https://amzn.to/4dTgO4X'
            },
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'All-new Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light – Denim',
                imageset: [
                    '/All New Kindle Paperwhite - 2022 Version-1.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-2.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-3.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-4.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-5.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-6.jpg',
                    '/All New Kindle Paperwhite - 2022 Version-7.jpg',
                ],
                link: 'https://amzn.to/4dUqlJn'
            }
        ],
        description: '',
        breadcumb: 'All-new Kindle Paperwhite (2022 Version)',
        title: 'All-new Kindle Paperwhite',
        price: '$99.99',
        video: '',
        specs: [
            'Display',
            'Storage',
            'Battery Life',
            'Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Screen Size', value: '6.8 inches' },
                    { label: 'Resolution', value: '300 ppi' },
                    { label: 'Front Light', value: '17 LEDs' }
                ]
            },
            {
                type: 'text',
                content: '8 GB – Holds thousands of books'
            },
            {
                type: 'text',
                content: 'Up to 10 weeks based on a half hour of reading per day with wireless off and the light setting at 13'
            },
            {
                type: 'table',
                content: [
                    { label: 'Wi-Fi', value: 'Supports 2.4 GHz and 5.0 GHz networks' },
                    { label: 'Bluetooth', value: 'Yes, for audiobooks' }
                ]
            }
        ],
        rating: 4.6,
    };









} else if (pathname === '/products/electronics/ailihen-i35-kids-headphones') {
    detail = {
        features: [
            '<strong>Safe Volume Limit</strong>',
            '<strong>Comfortable Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Sharing Port</strong>',
            '<strong>Foldable and Durable</strong>'
        ],
        descriptions: [
            '<p>Protect your child\'s hearing with 85/94dB volume limiting technology.</p>',
            '<p>Soft, padded ear cushions and adjustable headband ensure a comfortable fit for long wear.</p>',
            '<p>Clear communication for online classes and calls with the integrated microphone.</p>',
            '<p>Share audio easily with friends using the built-in sharing port.</p>',
            '<p>Compact, foldable design with durable construction for travel and daily use.</p>'
        ],
        images: [
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-1.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-2.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-3.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-4.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'AILIHEN I35 Kids Headphones - Blue',
                imageset: [
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-1.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-2.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-3.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-4.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-5.jpg',
                ],
                link: 'https://amzn.to/example-link-blue'
            },
            {
                colorbutton: 'bg-pink-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'AILIHEN I35 Kids Headphones - Pink',
                imageset: [
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-1.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-2.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-3.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-4.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-5.jpg',
                ],
                link: 'https://amzn.to/example-link-pink'
            }
        ],
        description: '',
        breadcumb: 'AILIHEN I35 Kids Headphones',
        title: 'AILIHEN I35 Kids Headphones',
        price: '$24.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'AILIHEN' },
                    { label: 'Model', value: 'I35' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Volume Limit', value: '85/94dB' },
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sharing Port', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/lorelei-x6-over-ear-headphones') {
    detail = {
        features: [
            '<strong>Comfortable Design</strong>',
            '<strong>Noise Cancelling</strong>',
            '<strong>Bluetooth Connectivity</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Foldable and Durable</strong>'
        ],
        descriptions: [
            '<p>Soft, padded ear cushions and adjustable headband ensure a comfortable fit for long wear.</p>',
            '<p>Effectively block out external noise for immersive audio experience.</p>',
            '<p>Seamless connection with Bluetooth devices for wireless listening.</p>',
            '<p>Up to 30 hours of battery life for extended use.</p>',
            '<p>Compact, foldable design with durable construction for travel and daily use.</p>'
        ],
        images: [
            '/LORELEI X8-1.jpg',
            '/LORELEI X8-2.jpg',
            '/LORELEI X8-3.jpg',
            '/LORELEI X8-4.jpg',
            '/LORELEI X8-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'LORELEI X6 Over-Ear Headphones - Black',
                imageset: [
                    '/LORELEI X8-1.jpg',
                    '/LORELEI X8-2.jpg',
                    '/LORELEI X8-3.jpg',
                    '/LORELEI X8-4.jpg',
                    '/LORELEI X8-5.jpg',
                    '/LORELEI X8-6.jpg',
                    '/LORELEI X8-7.jpg',
                ],
                link: 'https://amzn.to/example-link-black'
            },
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'LORELEI X6 Over-Ear Headphones - White',
                imageset: [
                    '/LORELEI X8-1.jpg',
                    '/LORELEI X8-2.jpg',
                    '/LORELEI X8-3.jpg',
                    '/LORELEI X8-4.jpg',
                    '/LORELEI X8-5.jpg',
                    '/LORELEI X8-6.jpg',
                    '/LORELEI X8-7.jpg',
                ],
                link: 'https://amzn.to/example-link-white'
            }
        ],
        description: '',
        breadcumb: 'LORELEI X6 Over-Ear Headphones',
        title: 'LORELEI X6 Over-Ear Headphones',
        price: '$49.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'LORELEI' },
                    { label: 'Model', value: 'X6' },
                    { label: 'Connection Type', value: 'Bluetooth' },
                    { label: 'Compatibility', value: 'Universal Bluetooth' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Noise Cancelling', value: 'Yes' },
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Battery Life', value: 'Up to 30 hours' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/electronics/Candy-Bila-Kids-Headphones-Wired-Over-Ear-Microphone') {
    detail = {
        features: [
            '<strong>Safe Volume Limit</strong>',
            '<strong>Comfortable Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Sharing Port</strong>',
            '<strong>Foldable and Durable</strong>'
        ],
        descriptions: [
            '<p>Protect your child\'s hearing with 85/94dB volume limiting technology.</p>',
            '<p>Soft, padded ear cushions and adjustable headband ensure a comfortable fit for long wear.</p>',
            '<p>Clear communication for online classes and calls with the integrated microphone.</p>',
            '<p>Share audio easily with friends using the built-in sharing port.</p>',
            '<p>Compact, foldable design with durable construction for travel and daily use.</p>'
        ],
        images: [
            '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-1.jpg',
            '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-2.jpg',
            '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-3.jpg',
            '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-4.jpg',
            '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-pink-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Candy Bila Kids Headphones - Pink',
                imageset: [
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-1.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-2.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-3.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-4.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone-5.jpg',
                ],
                link: 'https://amzn.to/example-link-pink'
            },
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Candy Bila Kids Headphones - Blue',
                imageset: [
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone. 85-94dB Volume Limiter Headphones fo-1.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone. 85-94dB Volume Limiter Headphones fo-2.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone. 85-94dB Volume Limiter Headphones fo-3.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone. 85-94dB Volume Limiter Headphones fo-4.jpg',
                    '/Candy Bila Kids Headphones. Wired Headphones for Kids Over Ear with Microphone. 85-94dB Volume Limiter Headphones fo-5.jpg',
                ],
                link: 'https://amzn.to/3ARk4j6'
            }
        ],
        description: '',
        breadcumb: 'Candy Bila Kids Headphones',
        title: 'Candy Bila Kids Headphones',
        price: '$24.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Candy Bila' },
                    { label: 'Model', value: 'Kids Headphones' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Volume Limit', value: '85/94dB' },
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sharing Port', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/JLab-Go-Air-Pop-True-Wireless-Bluetooth-Earbuds') {
    detail = {
        features: [
            '<strong>True Wireless Design</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>3 EQ Sound Settings</strong>',
            '<strong>IPX4 Sweat Resistance</strong>',
            '<strong>Bluetooth 5.1 Connection</strong>'
        ],
        descriptions: [
            '<p>Experience true freedom with wireless earbuds and a compact charging case.</p>',
            '<p>Enjoy up to 32+ hours of playtime with the charging case.</p>',
            '<p>Customize your audio experience with JLab Signature, Balanced, and Bass Boost modes.</p>',
            '<p>Work out worry-free with sweat-resistant earbuds.</p>',
            '<p>Stable and efficient connection with the latest Bluetooth technology.</p>'
        ],
        images: [
            '/JLab Go Air Pop True Wireless Bluetooth Earbuds-1.jpg',
            '/JLab Go Air Pop True Wireless Bluetooth Earbuds-2.jpg',
            '/JLab Go Air Pop True Wireless Bluetooth Earbuds-3.jpg',
            '/JLab Go Air Pop True Wireless Bluetooth Earbuds-4.jpg',
            '/JLab Go Air Pop True Wireless Bluetooth Earbuds-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-purple-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JLab Go Air Pop True Wireless Bluetooth Earbuds - Mauve',
                imageset: [
                    '/JLab Go Air Pop True Wireless Bluetooth Earbuds-1.jpg',
                    '/JLab Go Air Pop True Wireless Bluetooth Earbuds-2.jpg',
                    '/JLab Go Air Pop True Wireless Bluetooth Earbuds-3.jpg',
                    '/JLab Go Air Pop True Wireless Bluetooth Earbuds-4.jpg',
                    '/JLab Go Air Pop True Wireless Bluetooth Earbuds-5.jpg',
                ],
                link: 'https://amzn.to/4cQ3ihI'
            }
        ],
        description: '',
        breadcumb: 'JLab Go Air Pop True Wireless Bluetooth Earbuds',
        title: 'JLab Go Air Pop',
        price: '$19.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'JLab' },
                    { label: 'Model', value: 'Go Air Pop' },
                    { label: 'Color', value: 'Mauve' },
                    { label: 'Connectivity', value: 'Bluetooth 5.1' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'EQ Settings', value: 'Signature, Balanced, Bass Boost' },
                    { label: 'Water Resistance', value: 'IPX4' },
                    { label: 'Dual Connect', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Earbud Playtime', value: '8+ hours' },
                    { label: 'Total Playtime', value: '32+ hours with case' },
                    { label: 'Charging Time', value: '2 hours' }
                ]
            }
        ],
        rating: 4.4,
    };
} else if (pathname === '/products/electronics/iClever-Kids-Headphones-for-School-Travel-with-Safe-Volume-85-94dB') {
    detail = {
        features: [
            '<strong>Safe Volume Control</strong>',
            '<strong>Comfortable Fit</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Versatile Compatibility</strong>',
            '<strong>Durable Construction</strong>'
        ],
        descriptions: [
            '<p>Protect your child\'s hearing with 85/94dB volume limiting technology.</p>',
            '<p>Soft, adjustable headband and cushioned earpads ensure comfort for extended use.</p>',
            '<p>Clear communication for online classes and calls with the integrated microphone.</p>',
            '<p>Compatible with a wide range of devices including iPads, computers, and smartphones.</p>',
            '<p>Sturdy design withstands daily use by active kids.</p>'
        ],
        images: [
            '/iClever Kids Headphones for School or Travel-1.jpg',
            '/iClever Kids Headphones for School or Travel-2.jpg',
            '/iClever Kids Headphones for School or Travel-3.jpg',
            '/iClever Kids Headphones for School or Travel-4.jpg',
            '/iClever Kids Headphones for School or Travel-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'iClever Kids Headphones - Blue',
                imageset: [
                    '/iClever Kids Headphones for School or Travel-1.jpg',
                    '/iClever Kids Headphones for School or Travel-2.jpg',
                    '/iClever Kids Headphones for School or Travel-3.jpg',
                    '/iClever Kids Headphones for School or Travel-4.jpg',
                    '/iClever Kids Headphones for School or Travel-5.jpg',
                ],
                link: 'https://amzn.to/4cJx3AD'
            },
            {
                colorbutton: 'bg-pink-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'iClever Kids Headphones - Pink',
                imageset: [
                    '/iClever Kids Headphones for School or Travel-1.jpg',
                    '/iClever Kids Headphones for School or Travel-2.jpg',
                    '/iClever Kids Headphones for School or Travel-3.jpg',
                    '/iClever Kids Headphones for School or Travel-4.jpg',
                    '/iClever Kids Headphones for School or Travel-5.jpg',
                ],
                link: 'https://amzn.to/3z0pZlr'
            }
        ],
        description: '',
        breadcumb: 'iClever Kids Headphones for School/Travel',
        title: 'iClever Kids Headphones',
        price: '$23.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'iClever' },
                    { label: 'Model', value: 'HS19' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Volume Limit', value: '85/94dB' },
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sound Quality', value: 'Stereo' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.6,
    };





} else if (pathname === '/products/electronics/She-s-Birdie-The-Original-Personal-Safety-Alarm-for-Women-by-Women-130dB-Siren-Strobe-Light-and-Key-Chain-in-8-Pop-Colors') {
    detail = {
        features: [
            '<strong>130dB Siren</strong>',
            '<strong>Strobe Light</strong>',
            '<strong>Compact Design</strong>',
            '<strong>Easy to Use</strong>',
            '<strong>8 Pop Colors</strong>'
        ],
        descriptions: [
            '<p>Emits a loud 130dB siren to attract attention and deter potential threats.</p>',
            '<p>Features a bright strobe light to disorient attackers and increase visibility.</p>',
            '<p>Small and lightweight, easily attaches to keys, bags, or clothing.</p>',
            '<p>Simple two-step activation process for quick deployment in emergencies.</p>',
            '<p>Available in 8 vibrant colors to suit your personal style.</p>'
        ],
        images: [
            '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
            '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
            '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
            '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
            '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-teal-200 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: "She's Birdie Personal Safety Alarm - Aqua",
                imageset: [
                    '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
                    '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
                    '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
                    '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
                    '/She’s Birdie–The Original Personal Safety Alarm for Women by Women–LOUD Siren, Strobe Light and Key Chain in a Variety of Colors (Aqua).jpg',
                ],
                link: 'https://amzn.to/3MrV04Z'
            },
            // Add more color options as needed
        ],
        description: '',
        breadcumb: "She's Birdie Personal Safety Alarm",
        title: "She's Birdie Personal Safety Alarm",
        price: '$23.00',
        video: '',
        specs: [
            'General Specifications',
            'Safety Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: "She's Birdie" },
                    { label: 'Model', value: 'Original Personal Safety Alarm' },
                    { label: 'Colors Available', value: '8 Pop Colors' },
                    { label: 'Intended Users', value: 'Women' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Siren Volume', value: '130dB' },
                    { label: 'Strobe Light', value: 'Yes' },
                    { label: 'Activation', value: 'Two-step process' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Size', value: 'Compact' },
                    { label: 'Attachment', value: 'Key Chain' },
                    { label: 'Water Resistance', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/Wireless-Earbuds-Bluetooth-5-3-Headphones') {
    detail = {
        features: [
            '<strong>Bluetooth 5.3 Technology</strong>',
            '<strong>Stereo Bass Sound</strong>',
            '<strong>Noise Cancelling Mic</strong>',
            '<strong>IP7 Waterproof</strong>',
            '<strong>32H Playtime</strong>'
        ],
        descriptions: [
            '<p>Latest Bluetooth 5.3 for stable and efficient wireless connection.</p>',
            '<p>Enjoy rich, immersive audio with powerful bass performance.</p>',
            '<p>Clear calls with advanced noise-cancelling microphone technology.</p>',
            '<p>IP7 waterproof rating for use during workouts or in light rain.</p>',
            '<p>Up to 32 hours of total playtime with the compact charging case.</p>'
        ],
        images: [
            '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-1.jpg',
            '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-2.jpg',
            '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-3.jpg',
            '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-4.jpg',
            '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Jxrev Wireless Earbuds - Black',
                imageset: [
                    '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-1.jpg',
                    '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-2.jpg',
                    '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-3.jpg',
                    '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-4.jpg',
                    '/Wireless Earbuds. Bluetooth 5.3 Headphones Stereo Bass-5.jpg',
                ],
                link: 'https://amzn.to/3MoKonn'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'Jxrev Wireless Earbuds',
        title: 'Jxrev Wireless Earbuds',
        price: '$21.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Jxrev' },
                    { label: 'Model', value: 'Bluetooth 5.3 Wireless Earbuds' },
                    { label: 'Color', value: 'Black' },
                    { label: 'Waterproof Rating', value: 'IP7' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Bluetooth Version', value: '5.3' },
                    { label: 'Audio', value: 'Stereo Bass' },
                    { label: 'Microphone', value: 'Noise Cancelling' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Total Playtime', value: 'Up to 32 hours' },
                    { label: 'Charging Case', value: 'USB-C Mini' },
                    { label: 'Quick Charge', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/electronics/Jbl-Clip-3-Bluetooth-Coaxial-Battery-Powered-Clip-On-Freestanding-speakers') {
    detail = {
        features: [
            '<strong>Portable Design</strong>',
            '<strong>Waterproof Construction</strong>',
            '<strong>Integrated Carabiner</strong>',
            '<strong>10 Hours of Playtime</strong>',
            '<strong>Wireless Bluetooth Streaming</strong>'
        ],
        descriptions: [
            '<p>Ultra-portable and compact speaker for on-the-go audio.</p>',
            '<p>IPX7 waterproof rating for worry-free outdoor use.</p>',
            '<p>Built-in carabiner for easy attachment to bags or belts.</p>',
            '<p>Rechargeable battery provides up to 10 hours of continuous playback.</p>',
            '<p>Wirelessly stream high-quality sound from your smartphone or tablet.</p>'
        ],
        images: [
            '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-1.jpg',
            '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-2.jpg',
            '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-3.jpg',
            '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-4.jpg',
            '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JBL Clip 3 Portable Bluetooth Speaker - Black',
                imageset: [
                    '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-1.jpg',
                    '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-2.jpg',
                    '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-3.jpg',
                    '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-4.jpg',
                    '/Jbl Clip 3 Bluetooth Coaxial Battery Powered Clip On.Freestanding speakers-5.jpg',
                ],
                link: 'https://amzn.to/3Z2pPVa'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'JBL Clip 3 Portable Bluetooth Speaker',
        title: 'JBL Clip 3',
        price: '$39.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'JBL' },
                    { label: 'Model', value: 'Clip 3' },
                    { label: 'Speaker Type', value: 'Portable Bluetooth' },
                    { label: 'Waterproof Rating', value: 'IPX7' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Bluetooth Version', value: 'Not specified' },
                    { label: 'Audio Output', value: 'Mono' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Playtime', value: 'Up to 10 hours' },
                    { label: 'Charging Time', value: 'Not specified' },
                    { label: 'Battery Capacity', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.7,
    };





} else if (pathname === '/products/electronics/ESOXOFFORE-Kids-Camera-Instant-Print-Christmas-Birthday-Gifts') {
    detail = {
        features: [
            '<strong>Instant Print</strong>',
            '<strong>1080P Video Recording</strong>',
            '<strong>Selfie Camera</strong>',
            '<strong>Portable Design</strong>',
            '<strong>Age-Appropriate</strong>'
        ],
        descriptions: [
            '<p>Print photos instantly for immediate enjoyment and sharing.</p>',
            '<p>Capture high-quality videos in 1080P resolution.</p>',
            '<p>Perfect for taking selfies and group photos with friends.</p>',
            '<p>Compact and lightweight, ideal for travel and on-the-go use.</p>',
            '<p>Designed specifically for children aged 3-12 years old.</p>'
        ],
        images: [
            '/ESOXOFFORE Kids Camera Instant Print-1.jpg',
            '/ESOXOFFORE Kids Camera Instant Print-2.jpg',
            '/ESOXOFFORE Kids Camera Instant Print-3.jpg',
            '/ESOXOFFORE Kids Camera Instant Print-4.jpg',
            '/ESOXOFFORE Kids Camera Instant Print-1.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'ESOXOFFORE Kids Camera - Blue',
                imageset: [
                    '/ESOXOFFORE Kids Camera Instant Print-1.jpg',
                    '/ESOXOFFORE Kids Camera Instant Print-2.jpg',
                    '/ESOXOFFORE Kids Camera Instant Print-3.jpg',
                    '/ESOXOFFORE Kids Camera Instant Print-4.jpg',
                    '/ESOXOFFORE Kids Camera Instant Print-1.jpg',
                ],
                link: 'https://amzn.to/3Mld2G2'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'ESOXOFFORE Kids Camera Instant Print',
        title: 'ESOXOFFORE Kids Camera',
        price: '$39.99',
        video: '',
        specs: [
            'General Specifications',
            'Camera Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'ESOXOFFORE' },
                    { label: 'Model', value: 'Kids Camera Instant Print' },
                    { label: 'Age Range', value: '3-12 years' },
                    { label: 'Video Resolution', value: '1080P' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Instant Print', value: 'Yes' },
                    { label: 'Selfie Function', value: 'Yes' },
                    { label: 'Video Recording', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Portable', value: 'Yes' },
                    { label: 'Color Options', value: 'Available' },
                    { label: 'Gift-Ready', value: 'Yes' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/Wireless-Earbuds-Bluetooth-V5-3-Headphones') {
    detail = {
        features: [
            '<strong>Bluetooth 5.3 Technology</strong>',
            '<strong>50H Playback</strong>',
            '<strong>Deep Bass Stereo</strong>',
            '<strong>LED Power Display</strong>',
            '<strong>IPX7 Waterproof</strong>'
        ],
        descriptions: [
            '<p>Latest Bluetooth 5.3 for stable and efficient wireless connection.</p>',
            '<p>Enjoy up to 50 hours of total playtime with the charging case.</p>',
            '<p>Experience rich, immersive audio with powerful bass performance.</p>',
            '<p>LED display shows remaining battery life for convenience.</p>',
            '<p>IPX7 waterproof rating for use during workouts or in light rain.</p>'
        ],
        images: [
            '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-1.jpg',
            '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-2.jpg',
            '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-3.jpg',
            '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-4.jpg',
            '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Daomim Wireless Earbuds - Black',
                imageset: [
                    '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-1.jpg',
                    '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-2.jpg',
                    '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-3.jpg',
                    '/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-4.jpg',
                    "/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-5.jpg",
                    "/Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof Earphones with Mic Headset for Lap-6.jpg",
                ],
                link: 'https://amzn.to/4dMmxKn'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'Daomim Wireless Earbuds Bluetooth V5.3',
        title: 'Daomim Wireless Earbuds',
        price: '$20.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Daomim' },
                    { label: 'Model', value: 'Bluetooth V5.3 Wireless Earbuds' },
                    { label: 'Color', value: 'Black' },
                    { label: 'Waterproof Rating', value: 'IPX7' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Bluetooth Version', value: '5.3' },
                    { label: 'Audio', value: 'Deep Bass Stereo' },
                    { label: 'Microphone', value: 'Built-in' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Total Playtime', value: 'Up to 50 hours' },
                    { label: 'Charging Case', value: 'LED Power Display' },
                    { label: 'Quick Charge', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.2,
    };
} else if (pathname === '/products/electronics/noot-products-Kids-Headphones') {
    detail = {
        features: [
            '<strong>Foldable Design</strong>',
            '<strong>Tangle-Free Cord</strong>',
            '<strong>Universal Compatibility</strong>',
            '<strong>Comfortable Fit</strong>',
            '<strong>Durable Construction</strong>'
        ],
        descriptions: [
            '<p>Compact foldable design for easy storage and portability.</p>',
            '<p>5ft long tangle-free cord for hassle-free use.</p>',
            '<p>Compatible with various devices via 3.5mm jack.</p>',
            '<p>Padded headband and ear cushions for extended comfort.</p>',
            '<p>Built to withstand daily use by children and teens.</p>'
        ],
        images: [
            '/noot products Kids Headphones K11-1.jpg',
            '/noot products Kids Headphones K11-2.jpg',
            '/noot products Kids Headphones K11-3.jpg',
            '/noot products Kids Headphones K11-4.jpg',
            '/noot products Kids Headphones K11-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'noot products Kids Headphones - Blue',
                imageset: [
                    '/noot products Kids Headphones K11-1.jpg',
                    '/noot products Kids Headphones K11-2.jpg',
                    '/noot products Kids Headphones K11-3.jpg',
                    '/noot products Kids Headphones K11-4.jpg',
                    '/noot products Kids Headphones K11-5.jpg',
                    '/noot products Kids Headphones K11-6.jpg',
                ],
                link: 'https://amzn.to/4dJZxvI'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'noot products Kids Headphones K11',
        title: 'noot products Kids Headphones',
        price: '$20.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'noot products' },
                    { label: 'Model', value: 'K11' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Cord Length', value: '5ft' },
                    { label: 'Tangle-Free', value: 'Yes' },
                    { label: 'Sound Quality', value: 'Stereo' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.7,
    };



} else if (pathname === '/products/electronics/Tozo-Earbuds-With-Wireless-Charging-Case-A1-In-Ear-Wireless-Bluetooth-5-3-headphones') {
    detail = {
        features: [
            '<strong>Bluetooth 5.3 Technology</strong>',
            '<strong>Wireless Charging Case</strong>',
            '<strong>Touch Control</strong>',
            '<strong>IPX5 Water Resistant</strong>',
            '<strong>Long Battery Life</strong>'
        ],
        descriptions: [
            '<p>Latest Bluetooth 5.3 for stable and efficient wireless connection.</p>',
            '<p>Convenient wireless charging case for easy power replenishment.</p>',
            '<p>Intuitive touch controls for easy operation of music and calls.</p>',
            '<p>IPX5 water resistance protects against sweat and light rain.</p>',
            '<p>Enjoy extended playtime with the charging case for all-day use.</p>'
        ],
        images: [
            '/Tozo Earbuds With Wireless Charging Case A1 In Ear Wireless.Bluetooth 5.3 headphones-1.jpg',
            '/Tozo Earbuds With Wireless Charging Case A1 In Ear Wireless.Bluetooth 5.3 headphones-2.jpg',
            '/Tozo Earbuds With Wireless Charging Case A1 In Ear Wireless.Bluetooth 5.3 headphones-3.jpg',
            '/Tozo Earbuds With Wireless Charging Case A1 In Ear Wireless.Bluetooth 5.3 headphones-4.jpg',
            '/Tozo Earbuds With Wireless Charging Case A1 In Ear Wireless.Bluetooth 5.3 headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'TOZO A1 Wireless Earbuds - Black',
                imageset: [
                    '/tozo-earbuds-a1-black-1.jpg',
                    '/tozo-earbuds-a1-black-2.jpg',
                    '/tozo-earbuds-a1-black-3.jpg',
                    '/tozo-earbuds-a1-black-4.jpg',
                ],
                link: 'https://amzn.to/3XlZQa0'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'TOZO A1 Wireless Earbuds with Charging Case',
        title: 'TOZO A1 Wireless Earbuds',
        price: '$19.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'TOZO' },
                    { label: 'Model', value: 'A1' },
                    { label: 'Color', value: 'Black' },
                    { label: 'Form Factor', value: 'In Ear' },
                    { label: 'Connectivity Technology', value: 'Wireless, Bluetooth 5.3' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Driver Size', value: 'Not specified' },
                    { label: 'Touch Control', value: 'Yes' },
                    { label: 'Water Resistance', value: 'IPX5' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Playtime', value: 'Not specified' },
                    { label: 'Charging Case', value: 'Wireless Charging Supported' },
                    { label: 'Quick Charge', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/electronics/5Ft-6Ft-10Ft-15Ft-20Ft-Surge-Protector-Power-Strip-8-Outlets-with-4-USB-Charging-Ports-3-Side-Outlet-Extender') {
    detail = {
        features: [
            '<strong>Multiple Length Options</strong>',
            '<strong>8 AC Outlets</strong>',
            '<strong>4 USB Charging Ports</strong>',
            '<strong>Surge Protection</strong>',
            '<strong>Wall Mountable</strong>'
        ],
        descriptions: [
            '<p>Available in 5ft, 6ft, 10ft, 15ft, and 20ft lengths to suit various needs.</p>',
            '<p>8 AC outlets provide ample space for multiple devices.</p>',
            '<p>4 USB ports for convenient charging of smartphones and tablets.</p>',
            '<p>Built-in surge protection safeguards your devices from power spikes.</p>',
            '<p>Wall mount design for easy installation and space-saving.</p>'
        ],
        images: [
            '/15FT-1.jpg',
            '/15FT-2.jpg',
            '/15FT-3.jpg',
            '/15FT-4.jpg',
            '/15FT-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '5ft',
                subtitle: 'Surge Protector Power Strip - 5ft',
                imageset: [
                    '/15FT-1.jpg',
                    '/15FT-2.jpg',
                    '/15FT-3.jpg',
                    '/15FT-4.jpg',
                ],
                link: 'https://amzn.to/4cG959r'
            },
            // Add more length options (6ft, 10ft, 15ft, 20ft)
        ],
        description: '',
        breadcumb: 'Hanycony Surge Protector Power Strip',
        title: 'Hanycony Surge Protector',
        price: '$19.99',
        video: '',
        specs: [
            'General Specifications',
            'Electrical Specifications',
            'Design Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Hanycony' },
                    { label: 'Available Lengths', value: '5ft, 6ft, 10ft, 15ft, 20ft' },
                    { label: 'Number of Outlets', value: '8 AC outlets' },
                    { label: 'USB Ports', value: '4' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: 'Yes' },
                    { label: 'Maximum Spike Voltage', value: 'Not specified' },
                    { label: 'Joule Rating', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Wall Mountable', value: 'Yes' },
                    { label: 'Flat Plug', value: 'Yes' },
                    { label: '3-Side Outlet Design', value: 'Yes' }
                ]
            }
        ],
        rating: 4.8,
    };


} else if (pathname === '/products/electronics/AILIHEN-Headphones-Wired-with-Microphone') {
    detail = {
        features: [
            '<strong>Wired Connectivity</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Comfortable Design</strong>',
            '<strong>Foldable Structure</strong>',
            '<strong>Universal Compatibility</strong>'
        ],
        descriptions: [
            '<p>Reliable wired connection for uninterrupted audio experience.</p>',
            '<p>Integrated microphone for clear voice calls and online meetings.</p>',
            '<p>Padded headband and ear cushions for extended wearing comfort.</p>',
            '<p>Foldable design for easy storage and portability.</p>',
            '<p>Compatible with various devices via 3.5mm audio jack.</p>'
        ],
        images: [
            '/AILIHEN Headphones Wired with Microphone-1.jpg',
            '/AILIHEN Headphones Wired with Microphone-2.jpg',
            '/AILIHEN Headphones Wired with Microphone-3.jpg',
            '/AILIHEN Headphones Wired with Microphone-4.jpg',
            '/AILIHEN Headphones Wired with Microphone-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'AILIHEN Headphones - Black',
                imageset: [
                    '/AILIHEN Headphones Wired with Microphone-1.jpg',
                    '/AILIHEN Headphones Wired with Microphone-2.jpg',
                    '/AILIHEN Headphones Wired with Microphone-3.jpg',
                    '/AILIHEN Headphones Wired with Microphone-4.jpg',
                    '/AILIHEN Headphones Wired with Microphone-5.jpg',
                ],
                link: 'https://amzn.to/3Xmzwg9'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'AILIHEN Headphones Wired with Microphone',
        title: 'AILIHEN Headphones',
        price: '$19.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'AILIHEN' },
                    { label: 'Model', value: 'Wired Headphones with Microphone' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sound Quality', value: 'Stereo' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/electronics/Voopwink-Kids-Headphones-with-Microphone') {
    detail = {
        features: [
            '<strong>Volume Limiting</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Comfortable Fit</strong>',
            '<strong>Durable Design</strong>',
            '<strong>Wide Compatibility</strong>'
        ],
        descriptions: [
            '<p>Limited volume (85dB/94dB) to protect children\'s hearing.</p>',
            '<p>Integrated microphone for online classes and communication.</p>',
            '<p>Soft, padded ear cushions and adjustable headband for comfort.</p>',
            '<p>Sturdy construction to withstand daily use by children.</p>',
            '<p>Compatible with various devices for school, travel, and entertainment.</p>'
        ],
        images: [
            '/Voopwink Kids Headphones-1.jpg',
            '/Voopwink Kids Headphones-2.jpg',
            '/Voopwink Kids Headphones-3.jpg',
            '/Voopwink Kids Headphones-4.jpg',
            '/Voopwink Kids Headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Voopwink Kids Headphones - Blue',
                imageset: [
                    '/Voopwink Kids Headphones-1.jpg',
                    '/Voopwink Kids Headphones-2.jpg',
                    '/Voopwink Kids Headphones-3.jpg',
                    '/Voopwink Kids Headphones-4.jpg',
                    '/Voopwink Kids Headphones-5.jpg',
                    '/Voopwink Kids Headphones-6.jpg',
                ],
                link: 'https://amzn.to/4cMOJeG'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'Voopwink Kids Headphones with Microphone',
        title: 'Voopwink Kids Headphones',
        price: '$19.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Voopwink' },
                    { label: 'Model', value: 'Kids Headphones with Microphone' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Volume Limit', value: '85dB/94dB' },
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sound Quality', value: 'Stereo' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/rockpapa-Comfort-Headphones') {
    detail = {
        features: [
            '<strong>Comfortable Design</strong>',
            '<strong>Adjustable Headband</strong>',
            '<strong>High-Quality Sound</strong>',
            '<strong>Durable Construction</strong>',
            '<strong>Universal Compatibility</strong>'
        ],
        descriptions: [
            '<p>Soft, padded ear cushions for extended listening comfort.</p>',
            '<p>Adjustable headband to fit various head sizes.</p>',
            '<p>Clear and balanced audio for an enjoyable listening experience.</p>',
            '<p>Built to withstand daily use with quality materials.</p>',
            '<p>Compatible with a wide range of devices via 3.5mm audio jack.</p>'
        ],
        images: [
            '/rockpapa Comfort Headphones-1.jpg',
            '/rockpapa Comfort Headphones-2.jpg',
            '/rockpapa Comfort Headphones-3.jpg',
            '/rockpapa Comfort Headphones-4.jpg',
            '/rockpapa Comfort Headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'rockpapa Comfort Headphones - Black',
                imageset: [
                    '/rockpapa Comfort Headphones-1.jpg',
                    '/rockpapa Comfort Headphones-2.jpg',
                    '/rockpapa Comfort Headphones-3.jpg',
                    '/rockpapa Comfort Headphones-4.jpg',
                    '/rockpapa Comfort Headphones-5.jpg',
                    '/rockpapa Comfort Headphones-6.jpg',
                ],
                link: 'https://amzn.to/4g1xJEt'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'rockpapa Comfort Headphones',
        title: 'rockpapa Comfort Headphones',
        price: '$19.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'rockpapa' },
                    { label: 'Model', value: 'Comfort Headphones' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Sound Quality', value: 'Stereo' },
                    { label: 'Frequency Response', value: 'Not specified' },
                    { label: 'Impedance', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Not specified' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Headband', value: 'Adjustable' }
                ]
            }
        ],
        rating: 4.5,
    };








} else if (pathname === '/products/electronics/Hisense-U6Hf-Flat-4K-Uled-television') {
    detail = {
        features: [
            '<strong>4K ULED Display</strong>',
            '<strong>Quantum Dot Technology</strong>',
            '<strong>Dolby Vision HDR and HDR10+</strong>',
            '<strong>Full Array Local Dimming</strong>',
            '<strong>Smart TV Features</strong>'
        ],
        descriptions: [
            '<p>Experience stunning clarity and detail with 4K Ultra HD resolution.</p>',
            '<p>Enjoy vibrant and lifelike colors with Quantum Dot technology.</p>',
            '<p>Enhanced contrast and brightness with Dolby Vision HDR and HDR10+ support.</p>',
            '<p>Improved contrast and deeper blacks with Full Array Local Dimming.</p>',
            '<p>Access popular streaming apps and content with built-in smart TV features.</p>'
        ],
        images: [
            '/Hisense U6Hf Flat 4K Uled television-1.jpg',
            '/Hisense U6Hf Flat 4K Uled television-2.jpg',
            '/Hisense U6Hf Flat 4K Uled television-3.jpg',
            '/Hisense U6Hf Flat 4K Uled television-4.jpg',
            '/Hisense U6Hf Flat 4K Uled television-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '55"',
                subtitle: 'Hisense U6Hf 55" Flat 4K ULED TV',
                imageset: [
                    '/Hisense U6Hf Flat 4K Uled television-1.jpg',
                    '/Hisense U6Hf Flat 4K Uled television-2.jpg',
                    '/Hisense U6Hf Flat 4K Uled television-3.jpg',
                    '/Hisense U6Hf Flat 4K Uled television-4.jpg',
                    '/Hisense U6Hf Flat 4K Uled television-5.jpg',
                    '/Hisense U6Hf Flat 4K Uled television-6.jpg',
                ],
                link: 'https://amzn.to/4g1FLNE'
            },
            // Add more size options if available
        ],
        description: '',
        breadcumb: 'Hisense U6Hf Flat 4K ULED Television',
        title: 'Hisense U6Hf 4K ULED TV',
        price: '$339.99',
        video: '',
        specs: [
            'Display Specifications',
            'Audio Features',
            'Smart TV Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Screen Size', value: '55 inches' },
                    { label: 'Resolution', value: '4K Ultra HD (3840 x 2160)' },
                    { label: 'Display Technology', value: 'ULED with Quantum Dot' },
                    { label: 'HDR', value: 'Dolby Vision HDR, HDR10+' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Audio System', value: 'Not specified' },
                    { label: 'Dolby Atmos', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Operating System', value: 'Not specified' },
                    { label: 'Voice Control', value: 'Not specified' },
                    { label: 'App Store', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/electronics/Bose-Quietcomfort-Wireless-Wired-884367-Over-Ear-headphones') {
    detail = {
        features: [
            '<strong>World-Class Noise Cancellation</strong>',
            '<strong>High-Fidelity Audio</strong>',
            '<strong>Comfortable Design</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Wireless and Wired Options</strong>'
        ],
        descriptions: [
            '<p>Experience industry-leading noise cancellation for immersive listening.</p>',
            '<p>Enjoy exceptional sound quality with balanced audio and deep bass.</p>',
            '<p>Plush ear cushions and lightweight design for all-day comfort.</p>',
            '<p>Up to 24 hours of battery life on a single charge.</p>',
            '<p>Use wirelessly via Bluetooth or wired with the included audio cable.</p>'
        ],
        images: [
            '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-1.jpg',
            '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-2.jpg',
            '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-3.jpg',
            '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-4.jpg',
            '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Bose QuietComfort Headphones - Black',
                imageset: [
                    '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-1.jpg',
                    '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-2.jpg',
                    '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-3.jpg',
                    '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-4.jpg',
                    '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-5.jpg',
                    '/Bose Quietcomfort Wireless. Wired 884367 Over Ear headphones-6.jpg',
                ],
                link: 'https://amzn.to/4dGnmEr'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'Bose QuietComfort Wireless/Wired Over-Ear Headphones',
        title: 'Bose QuietComfort Headphones',
        price: '$249.00',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Bose' },
                    { label: 'Model', value: 'QuietComfort' },
                    { label: 'Form Factor', value: 'Over-Ear' },
                    { label: 'Connectivity', value: 'Wireless and Wired' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Noise Cancellation', value: 'Active Noise Cancelling' },
                    { label: 'Sound Quality', value: 'High-Fidelity Audio' },
                    { label: 'Microphone', value: 'Built-in' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Up to 24 hours' },
                    { label: 'Charging Time', value: 'Not specified' },
                    { label: 'Quick Charge', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/Fitbit-Sense-2-Advanced-Health-and-Fitness-Smartwatch') {
    detail = {
        features: [
            '<strong>Advanced Health Tracking</strong>',
            '<strong>ECG App and Heart Rate Monitoring</strong>',
            '<strong>Stress Management Tools</strong>',
            '<strong>Sleep Tracking and Analysis</strong>',
            '<strong>Built-in GPS</strong>'
        ],
        descriptions: [
            '<p>Comprehensive health tracking including activity, heart rate, and more.</p>',
            '<p>ECG app for heart rhythm assessment and 24/7 heart rate monitoring.</p>',
            '<p>Tools to help manage and reduce stress, including guided mindfulness sessions.</p>',
            '<p>Advanced sleep tracking with detailed sleep stage analysis and sleep score.</p>',
            '<p>Built-in GPS for accurate pace and distance tracking during outdoor activities.</p>'
        ],
        images: [
            '/Fitbit Sense 2-1.jpg',
            '/Fitbit Sense 2-2.jpg',
            '/Fitbit Sense 2-3.jpg',
            '/Fitbit Sense 2-4.jpg',
            '/Fitbit Sense 2-5.jpg',    
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Fitbit Sense 2 - Shadow Grey/Graphite',
                imageset: [
                    '/Fitbit Sense 2-1.jpg',
                    '/Fitbit Sense 2-2.jpg',
                    '/Fitbit Sense 2-3.jpg',
                    '/Fitbit Sense 2-4.jpg',
                    '/Fitbit Sense 2-5.jpg',
                    '/Fitbit Sense 2-6.jpg',
                ],
                link: 'https://amzn.to/3XmzCV3'
            },
            // Add more color options if available
        ],
        description: '',
        breadcumb: 'Fitbit Sense 2 Advanced Health and Fitness Smartwatch',
        title: 'Fitbit Sense 2 Smartwatch',
        price: '$238.95',
        video: '',
        specs: [
            'General Specifications',
            'Health Features',
            'Battery and Compatibility'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Fitbit' },
                    { label: 'Model', value: 'Sense 2' },
                    { label: 'Display', value: 'Not specified' },
                    { label: 'Water Resistance', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Heart Rate Monitoring', value: '24/7' },
                    { label: 'ECG App', value: 'Yes' },
                    { label: 'SpO2 Monitoring', value: 'Yes' },
                    { label: 'Stress Management', value: 'Yes' },
                    { label: 'Sleep Tracking', value: 'Advanced' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Not specified' },
                    { label: 'GPS', value: 'Built-in' },
                    { label: 'Compatibility', value: 'iOS and Android' }
                ]
            }
        ],
        rating: 4.2,
    };


} else if (pathname === '/products/electronics/Apple-2021-10-2-inch-iPad') {
    detail = {
        features: [
            '<strong>10.2-inch Retina Display</strong>',
            '<strong>A13 Bionic Chip</strong>',
            '<strong>8MP Back Camera, 12MP Ultra Wide Front Camera</strong>',
            '<strong>Touch ID</strong>',
            '<strong>Up to 10 Hours of Battery Life</strong>'
        ],
        descriptions: [
            '<p>Enjoy a vibrant and sharp 10.2-inch Retina display for all your tasks and entertainment.</p>',
            '<p>Powerful A13 Bionic chip for smooth performance in apps and games.</p>',
            '<p>Capture great photos and enjoy video calls with the 8MP back camera and 12MP Ultra Wide front camera.</p>',
            '<p>Secure authentication and Apple Pay with Touch ID.</p>',
            '<p>All-day battery life for extended use without frequent charging.</p>'
        ],
        images: [
            '/Apple 2021 iPad Mini-1.jpg',
            '/Apple 2021 iPad Mini-2.jpg',
            '/Apple 2021 iPad Mini-3.jpg',
            '/Apple 2021 iPad Mini-4.jpg',
            '/Apple 2021 iPad Mini-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-200 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Apple iPad (2021) - Silver',
                imageset: [
                    '/Apple 2021 iPad Mini-1.jpg',
                    '/Apple 2021 iPad Mini-2.jpg',
                    '/Apple 2021 iPad Mini-3.jpg',
                    '/Apple 2021 iPad Mini-4.jpg',
                    '/Apple 2021 iPad Mini-5.jpg',
                    '/Apple 2021 iPad Mini-6.jpg',
                ],
                link: 'https://amzn.to/3AJACcS'
            },
            {
                colorbutton: 'bg-gray-700 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Apple iPad (2021) - Space Gray',
                imageset: [
                    '/Apple 2021 iPad Mini-1.jpg',
                    '/Apple 2021 iPad Mini-2.jpg',
                    '/Apple 2021 iPad Mini-3.jpg',
                    '/Apple 2021 iPad Mini-4.jpg',
                    '/Apple 2021 iPad Mini-5.jpg',
                    '/Apple 2021 iPad Mini-6.jpg',
                ],
                link: 'https://amzn.to/4fWYlXn'
            }
        ],
        description: '',
        breadcumb: 'Apple 2021 10.2-inch iPad',
        title: 'Apple iPad (2021)',
        price: '$249.00',
        video: '',
        specs: [
            'General Specifications',
            'Display',
            'Performance and Storage'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Apple' },
                    { label: 'Model', value: 'iPad (9th generation)' },
                    { label: 'Release Year', value: '2021' },
                    { label: 'Operating System', value: 'iPadOS' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Screen Size', value: '10.2 inches' },
                    { label: 'Resolution', value: '2160 x 1620 pixels' },
                    { label: 'Display Technology', value: 'Retina display' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Chip', value: 'A13 Bionic' },
                    { label: 'Storage Options', value: '64GB, 256GB' },
                    { label: 'RAM', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.8,
    };



} else if (pathname === '/products/electronics/Apple-Watch-SE-2nd-Gen-2023-GPS-40mm-Smartwatch') {
    detail = {
        features: [
            '<strong>Powerful Health and Fitness Features</strong>',
            '<strong>Crash Detection and Fall Detection</strong>',
            '<strong>Water Resistant up to 50m</strong>',
            '<strong>Customizable Watch Faces</strong>',
            '<strong>GPS Tracking</strong>'
        ],
        descriptions: [
            '<p>Track your daily activity, workouts, and health metrics with advanced sensors.</p>',
            '<p>Stay safe with Crash Detection and Fall Detection features that can call for help in emergencies.</p>',
            '<p>Swim-proof design allows you to wear your watch while swimming or in the shower.</p>',
            '<p>Personalize your watch face to match your style and see the information you care about most.</p>',
            '<p>Built-in GPS for accurate pace and distance tracking during outdoor workouts.</p>'
        ],
        images: [
            '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-1.jpg',
            '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-2.jpg',
            '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-3.jpg',
            '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-4.jpg',
            '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Apple Watch SE (2nd Gen) - Starlight',
                imageset: [
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-1.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-2.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-3.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-4.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-5.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-6.jpg',
                ],
                link: 'https://amzn.to/3z08BNM'
            },
            {
                colorbutton: 'bg-gray-700 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Apple Watch SE (2nd Gen) - Midnight',
                imageset: [
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-1.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-2.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-3.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-4.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-5.jpg',
                    '/Apple Watch SE GPS 40mm Midnight Aluminum Case with Midnight Sport Band-6.jpg',
                ],
                link: 'https://amzn.to/3XntOuw'
            }
        ],
        description: '',
        breadcumb: 'Apple Watch SE (2nd Gen, 2023) [GPS 40mm] Smartwatch',
        title: 'Apple Watch SE (2nd Gen, 2023)',
        price: '$219.00',
        video: '',
        specs: [
            'General Specifications',
            'Health and Fitness Features',
            'Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Apple' },
                    { label: 'Model', value: 'Watch SE (2nd generation)' },
                    { label: 'Release Year', value: '2023' },
                    { label: 'Case Size', value: '40mm' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Heart Rate Monitor', value: 'Yes' },
                    { label: 'Sleep Tracking', value: 'Yes' },
                    { label: 'Workout Types', value: 'Multiple' },
                    { label: 'Water Resistance', value: '50 meters' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'GPS', value: 'Built-in' },
                    { label: 'Bluetooth', value: 'Yes' },
                    { label: 'Wi-Fi', value: 'Yes' },
                    { label: 'Cellular', value: 'No (GPS model)' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/electronics/Apple-iPad-10th-Generation') {
    detail = {
        features: [
            '<strong>10.9-inch Liquid Retina Display</strong>',
            '<strong>A14 Bionic Chip</strong>',
            '<strong>12MP Wide Back Camera, 12MP Ultra Wide Front Camera</strong>',
            '<strong>Touch ID in Top Button</strong>',
            '<strong>All-Day Battery Life</strong>'
        ],
        descriptions: [
            '<p>Enjoy a larger 10.9-inch Liquid Retina display with vibrant colors and True Tone.</p>',
            '<p>Powerful A14 Bionic chip for fast performance in apps, games, and multitasking.</p>',
            '<p>Capture great photos and enjoy Center Stage video calls with the 12MP Wide back camera and 12MP Ultra Wide front camera.</p>',
            '<p>Convenient and secure authentication with Touch ID integrated into the top button.</p>',
            '<p>Up to 10 hours of battery life for all-day use without frequent charging.</p>'
        ],
        images: [
            '/Apple iPad (10th Generation).jpg',
            '/Apple iPad (10th Generation).jpg',
            '/Apple iPad (10th Generation).jpg',
            '/Apple iPad (10th Generation).jpg',
            '/Apple iPad (10th Generation).jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Apple iPad (10th Generation) - Blue',
                imageset: [
                    '/Apple iPad (10th Generation).jpg',
                    '/Apple iPad (10th Generation).jpg',
                    '/Apple iPad (10th Generation).jpg',
                    '/Apple iPad (10th Generation).jpg',
                ],
                link: 'https://amzn.to/3XlDLbD'
            },
            {
                colorbutton: 'bg-pink-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Apple iPad (10th Generation) - Pink',
                imageset: [
                    '/Apple iPad (10th Generation).jpg',
                    '/Apple iPad (10th Generation).jpg',
                    '/Apple iPad (10th Generation).jpg',
                    '/Apple iPad (10th Generation).jpg',
                ],
                link: 'https://amzn.to/3T5UwoE'
            }
        ],
        description: '',
        breadcumb: 'Apple iPad (10th Generation)',
        title: 'Apple iPad (10th Generation)',
        price: '$299.99',
        video: '',
        specs: [
            'General Specifications',
            'Display',
            'Performance and Storage'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Apple' },
                    { label: 'Model', value: 'iPad (10th generation)' },
                    { label: 'Release Year', value: '2022' },
                    { label: 'Operating System', value: 'iPadOS' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Screen Size', value: '10.9 inches' },
                    { label: 'Resolution', value: '2360 x 1640 pixels' },
                    { label: 'Display Technology', value: 'Liquid Retina display' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Chip', value: 'A14 Bionic' },
                    { label: 'Storage Options', value: '64GB, 256GB' },
                    { label: 'RAM', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.8,
    };




} else if (pathname === '/products/electronics/SAMSUNG-Galaxy-Watch-6-Smartwatch') {
    detail = {
        features: [
            '<strong>Fitness Tracker</strong>',
            '<strong>Personalized HR Zones</strong>',
            '<strong>Advanced Sleep Coaching</strong>',
            '<strong>Heart Monitor</strong>',
            '<strong>BIA Sensor</strong>'
        ],
        descriptions: [
            '<p>Track your workouts and daily activities with precision.</p>',
            '<p>Get customized heart rate zones for optimized training.</p>',
            '<p>Improve your sleep quality with advanced sleep tracking and coaching.</p>',
            '<p>Monitor your heart health with ECG and blood pressure monitoring features.</p>',
            '<p>Measure body composition with the built-in BIA sensor.</p>'
        ],
        images: [
            '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-1.jpg',
            '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-2.jpg',
            '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-3.jpg',
            '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-4.jpg',
            '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'SAMSUNG Galaxy Watch 6 - Graphite',
                imageset: [
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-1.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-2.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-3.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-4.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-5.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-6.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-7.jpg',
                ],
                link: 'https://amzn.to/4g5rtf6'
            },
            {
                colorbutton: 'bg-yellow-100 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'SAMSUNG Galaxy Watch 6 - Gold',
                imageset: [
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-1.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-2.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-3.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-4.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-5.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-6.jpg',
                    '/SAMSUNG Galaxy Watch 6 Smartwatch w Fitness Tracker. Personalized HR Zones. Advanced Sleep Coaching. Heart Monitor. BIA Sensor. Biggest Screen-7.jpg',
                ],
                link: 'https://amzn.to/4g5rtf6'
            }
        ],
        description: '',
        breadcumb: 'SAMSUNG Galaxy Watch 6 Smartwatch',
        title: 'SAMSUNG Galaxy Watch 6',
        price: '$208.99',
        video: '',
        specs: [
            'General Specifications',
            'Health Features',
            'Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Samsung' },
                    { label: 'Model', value: 'Galaxy Watch 6' },
                    { label: 'Display', value: 'Super AMOLED' },
                    { label: 'Screen Size', value: 'Biggest Screen (size not specified)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Fitness Tracker', value: 'Yes' },
                    { label: 'Heart Rate Monitor', value: 'Yes' },
                    { label: 'Sleep Tracking', value: 'Advanced' },
                    { label: 'BIA Sensor', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Bluetooth', value: 'Yes' },
                    { label: 'Wi-Fi', value: 'Yes' },
                    { label: 'NFC', value: 'Yes' },
                    { label: 'GPS', value: 'Yes' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/Beats-Studio-Pro') {
    detail = {
        features: [
            '<strong>Premium Sound Quality</strong>',
            '<strong>Active Noise Cancelling</strong>',
            '<strong>Transparency Mode</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Comfortable Design</strong>'
        ],
        descriptions: [
            '<p>Experience studio-quality audio with custom acoustic platforms.</p>',
            '<p>Block out external noise for immersive listening.</p>',
            '<p>Stay aware of your surroundings when needed with Transparency mode.</p>',
            '<p>Enjoy up to 40 hours of listening time with ANC off.</p>',
            '<p>Designed for all-day comfort with cushioned ear cups and adjustable headband.</p>'
        ],
        images: [
            '/Beats Studio Pro-1.jpg',
            '/Beats Studio Pro-2.jpg',
            '/Beats Studio Pro-3.jpg',
            '/Beats Studio Pro-4.jpg',
            '/Beats Studio Pro-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Studio Pro - Black',
                imageset: [
                    '/Beats Studio Pro-1.jpg',
                    '/Beats Studio Pro-2.jpg',
                    '/Beats Studio Pro-3.jpg',
                    '/Beats Studio Pro-4.jpg',
                    '/Beats Studio Pro-5.jpg',
                    '/Beats Studio Pro-6.jpg',
                    '/Beats Studio Pro-7.jpg',
                ],
                link: 'https://amzn.to/3Z4y7Mr'
            },
            {
                colorbutton: 'bg-blue-700 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Studio Pro - Navy',
                imageset: [
                    '/Beats Studio Pro-1.jpg',
                    '/Beats Studio Pro-2.jpg',
                    '/Beats Studio Pro-3.jpg',
                    '/Beats Studio Pro-4.jpg',
                    '/Beats Studio Pro-5.jpg',
                    '/Beats Studio Pro-6.jpg',
                    '/Beats Studio Pro-7.jpg',
                ],
                link: 'https://amzn.to/3Z9biHD'
            }
        ],
        description: '',
        breadcumb: 'Beats Studio Pro',
        title: 'Beats Studio Pro',
        price: '$179.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Beats' },
                    { label: 'Model', value: 'Studio Pro' },
                    { label: 'Form Factor', value: 'Over-Ear' },
                    { label: 'Connectivity', value: 'Bluetooth and Wired' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Active Noise Cancelling', value: 'Yes' },
                    { label: 'Transparency Mode', value: 'Yes' },
                    { label: 'Spatial Audio', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life (ANC off)', value: 'Up to 40 hours' },
                    { label: 'Battery Life (ANC on)', value: 'Not specified' },
                    { label: 'Fast Charging', value: 'Yes' }
                ]
            }
        ],
        rating: 4.0,
    };
} else if (pathname === '/products/electronics/STAGING-PRODUCT-Receive-and-Stow-P') {
    detail = {
        features: [
            '<strong>Staging Product</strong>',
            '<strong>For Testing Purposes</strong>',
            '<strong>Not for Sale</strong>',
            '<strong>Internal Use Only</strong>',
            '<strong>Placeholder Item</strong>'
        ],
        descriptions: [
            '<p>This is a staging product used for testing and internal processes.</p>',
            '<p>Designed to test receive and stow operations in warehouses.</p>',
            '<p>Not intended for sale to customers.</p>',
            '<p>Used for training and system validation purposes.</p>',
            '<p>Placeholder item with no actual product features or specifications.</p>'
        ],
        images: [
            '/STAGING PRODUCT - Receive and Stow - P-1.jpg',
            '/STAGING PRODUCT - Receive and Stow - P-2.jpg',
            '/STAGING PRODUCT - Receive and Stow - P-3.jpg',
            '/STAGING PRODUCT - Receive and Stow - P-4.jpg',
            '/STAGING PRODUCT - Receive and Stow - P-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'STAGING PRODUCT - Receive and Stow - P',
                imageset: [
                    '/STAGING PRODUCT - Receive and Stow - P-1.jpg',
                    '/STAGING PRODUCT - Receive and Stow - P-2.jpg',
                    '/STAGING PRODUCT - Receive and Stow - P-3.jpg',
                    '/STAGING PRODUCT - Receive and Stow - P-4.jpg',
                    '/STAGING PRODUCT - Receive and Stow - P-5.jpg',
                    '/STAGING PRODUCT - Receive and Stow - P-6.jpg',
                ],
                link: 'https://amzn.to/3T5UBbW'
            }
        ],
        description: '',
        breadcumb: 'STAGING PRODUCT - Receive and Stow - P',
        title: 'STAGING PRODUCT',
        price: '$149.99',
        video: '',
        specs: [
            'General Information',
            'Usage',
            'Restrictions'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Product Type', value: 'Staging Product' },
                    { label: 'Purpose', value: 'Testing and Internal Use' },
                    { label: 'Manufacturer', value: 'Amazon' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Intended Use', value: 'Warehouse Operations Testing' },
                    { label: 'Process', value: 'Receive and Stow' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Sale Status', value: 'Not for Sale' },
                    { label: 'Access', value: 'Internal Personnel Only' }
                ]
            }
        ],
        rating: 4.5,
    };





} else if (pathname === '/products/electronics/Fitbit-Versa-4-Fitness-Smartwatch') {
    detail = {
        features: [
            '<strong>Daily Readiness Score</strong>',
            '<strong>Built-in GPS</strong>',
            '<strong>24/7 Heart Rate Tracking</strong>',
            '<strong>Active Zone Minutes</strong>',
            '<strong>6+ Day Battery Life</strong>'
        ],
        descriptions: [
            '<p>Get a personalized score to know when your body is ready for a workout or needs rest.</p>',
            '<p>Track your pace and distance during outdoor activities without your phone.</p>',
            '<p>Continuously monitor your heart rate for better insights into your health and fitness.</p>',
            '<p>Earn Active Zone Minutes for time spent in fat burn, cardio, or peak heart rate zones.</p>',
            '<p>Enjoy up to 6+ days of battery life for extended use between charges.</p>'
        ],
        images: [
            '/Fitbit Versa 4 Fitness Smartwatch-1.jpg',
            '/Fitbit Versa 4 Fitness Smartwatch-2.jpg',
            '/Fitbit Versa 4 Fitness Smartwatch-3.jpg',
            '/Fitbit Versa 4 Fitness Smartwatch-4.jpg',
            '/Fitbit Versa 4 Fitness Smartwatch-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Fitbit Versa 4 - Black',
                imageset: [
                    '/Fitbit Versa 4 Fitness Smartwatch-1.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-2.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-3.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-4.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-5.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-6.jpg',
                ],
                link: 'https://amzn.to/3yLab6c'
            },
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Fitbit Versa 4 - Blue',
                imageset: [
                    '/Fitbit Versa 4 Fitness Smartwatch-1.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-2.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-3.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-4.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-5.jpg',
                    '/Fitbit Versa 4 Fitness Smartwatch-6.jpg',
                ],
                link: 'https://amzn.to/3ALJteb'
            }
        ],
        description: '',
        breadcumb: 'Fitbit Versa 4 Fitness Smartwatch',
        title: 'Fitbit Versa 4',
        price: '$185.00',
        video: '',
        specs: [
            'General Specifications',
            'Health Features',
            'Battery and Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Fitbit' },
                    { label: 'Model', value: 'Versa 4' },
                    { label: 'Display', value: 'Color touchscreen' },
                    { label: 'Water Resistance', value: '50 meters' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Heart Rate Monitoring', value: '24/7' },
                    { label: 'Sleep Tracking', value: 'Yes' },
                    { label: 'Stress Management', value: 'Yes' },
                    { label: 'SpO2 Monitoring', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: '6+ days' },
                    { label: 'GPS', value: 'Built-in' },
                    { label: 'Bluetooth', value: 'Yes' },
                    { label: 'Compatibility', value: 'iOS and Android' }
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/electronics/Beats-Powerbeats-Pro') {
    detail = {
        features: [
            '<strong>True Wireless Earbuds</strong>',
            '<strong>Up to 9 Hours of Listening Time</strong>',
            '<strong>Sweat and Water Resistant</strong>',
            '<strong>Apple H1 Chip</strong>',
            '<strong>Secure-fit Ear Hooks</strong>'
        ],
        descriptions: [
            '<p>Experience true wireless freedom with no cords to hold you back.</p>',
            '<p>Enjoy up to 9 hours of listening time, extendable to 24+ hours with the charging case.</p>',
            '<p>Perfect for workouts with sweat and water resistance.</p>',
            '<p>Powered by the Apple H1 chip for seamless connectivity with Apple devices.</p>',
            '<p>Adjustable, secure-fit ear hooks for lightweight comfort and stability.</p>'
        ],
        images: [
            '/Beats Powerbeats Pro-1.jpg',
            '/Beats Powerbeats Pro-2.jpg',
            '/Beats Powerbeats Pro-3.jpg',
            '/Beats Powerbeats Pro-4.jpg',
            '/Beats Powerbeats Pro-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Powerbeats Pro - Black',
                imageset: [
                    '/Beats Powerbeats Pro-1.jpg',
                    '/Beats Powerbeats Pro-2.jpg',
                    '/Beats Powerbeats Pro-3.jpg',
                    '/Beats Powerbeats Pro-4.jpg',
                    '/Beats Powerbeats Pro-5.jpg',
                    '/Beats Powerbeats Pro-6.jpg',
                    '/Beats Powerbeats Pro-7.jpg',
                ],
                link: 'https://amzn.to/3WX6qCA'
            },
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Powerbeats Pro - Ivory',
                imageset: [
                    '/Beats Powerbeats Pro-1.jpg',
                    '/Beats Powerbeats Pro-2.jpg',
                    '/Beats Powerbeats Pro-3.jpg',
                    '/Beats Powerbeats Pro-4.jpg',
                    '/Beats Powerbeats Pro-5.jpg',
                    '/Beats Powerbeats Pro-6.jpg',
                    '/Beats Powerbeats Pro-7.jpg',
                ],
                link: 'https://amzn.to/4e3aV5y'
            }
        ],
        description: '',
        breadcumb: 'Beats Powerbeats Pro',
        title: 'Beats Powerbeats Pro',
        price: '$179.95',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery and Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Beats' },
                    { label: 'Model', value: 'Powerbeats Pro' },
                    { label: 'Form Factor', value: 'In-ear with ear hooks' },
                    { label: 'Water Resistance', value: 'IPX4' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Driver Size', value: 'Not specified' },
                    { label: 'Noise Cancellation', value: 'No' },
                    { label: 'Microphones', value: 'Dual beam-forming' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Up to 9 hours (24+ with case)' },
                    { label: 'Fast Charging', value: '5-minute charge = 1.5 hours playback' },
                    { label: 'Bluetooth', value: 'Yes' },
                    { label: 'Chip', value: 'Apple H1' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/Beats-Fit-Pro') {
    detail = {
        features: [
            '<strong>Active Noise Cancelling (ANC)</strong>',
            '<strong>Transparency Mode</strong>',
            '<strong>Flexible Wingtip Design</strong>',
            '<strong>Apple H1 Chip</strong>',
            '<strong>Up to 6 Hours of Listening Time</strong>'
        ],
        descriptions: [
            '<p>Block out external noise for immersive sound with Active Noise Cancelling.</p>',
            '<p>Stay aware of your surroundings with Transparency mode.</p>',
            '<p>Secure, comfortable fit with flexible wingtips for all-day wear.</p>',
            '<p>Powered by the Apple H1 chip for seamless connectivity with Apple devices.</p>',
            '<p>Enjoy up to 6 hours of listening time, extendable to 24+ hours with the charging case.</p>'
        ],
        images: [
            '/Beats Fit Pro-1.jpg',
            '/Beats Fit Pro-2.jpg',
            '/Beats Fit Pro-3.jpg',
            '/Beats Fit Pro-4.jpg',
            '/Beats Fit Pro-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Fit Pro - Black',
                imageset: [
                    '/Beats Fit Pro-1.jpg',
                    '/Beats Fit Pro-2.jpg',
                    '/Beats Fit Pro-3.jpg',
                    '/Beats Fit Pro-4.jpg',
                    '/Beats Fit Pro-5.jpg',
                    '/Beats Fit Pro-6.jpg',
                ],
                link: 'https://amzn.to/3AHdPyl'
            },
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Fit Pro - White',
                imageset: [
                    '/Beats Fit Pro-1.jpg',
                    '/Beats Fit Pro-2.jpg',
                    '/Beats Fit Pro-3.jpg',
                    '/Beats Fit Pro-4.jpg',
                    '/Beats Fit Pro-5.jpg',
                    '/Beats Fit Pro-6.jpg',
                ],
                link: 'https://amzn.to/4e02E2f'
            }
        ],
        description: '',
        breadcumb: 'Beats Fit Pro',
        title: 'Beats Fit Pro',
        price: '$199.00',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery and Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Beats' },
                    { label: 'Model', value: 'Fit Pro' },
                    { label: 'Form Factor', value: 'In-ear with wingtips' },
                    { label: 'Water Resistance', value: 'IPX4' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Active Noise Cancellation', value: 'Yes' },
                    { label: 'Transparency Mode', value: 'Yes' },
                    { label: 'Spatial Audio', value: 'Yes' },
                    { label: 'Microphones', value: 'Dual beam-forming' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Up to 6 hours (24+ with case)' },
                    { label: 'Fast Charging', value: '5-minute charge = 1 hour playback' },
                    { label: 'Bluetooth', value: 'Yes' },
                    { label: 'Chip', value: 'Apple H1' }
                ]
            }
        ],
        rating: 4.5,
    };








} else if (pathname === '/products/electronics/Apple-EarPods-Headphones') {
    detail = {
        features: [
            '<strong>Designed by Apple</strong>',
            '<strong>Deep, rich bass tones</strong>',
            '<strong>Greater protection from sweat and water</strong>',
            '<strong>Built-in remote and mic</strong>',
            '<strong>Comfortable, defined fit</strong>'
        ],
        descriptions: [
            '<p>Engineered by Apple for optimal sound quality and comfort.</p>',
            '<p>Enjoy powerful bass and crisp, clear audio across all frequencies.</p>',
            '<p>Enhanced durability for everyday use and light workouts.</p>',
            '<p>Control music and calls, and activate Siri, right from the cord.</p>',
            '<p>Ergonomic shape sits comfortably in your ears for long listening sessions.</p>'
        ],
        images: [
            '/Apple EarPods Headphones-1.jpg',
            '/Apple EarPods Headphones-2.jpg',
            '/Apple EarPods Headphones-3.jpg',
            '/Apple EarPods Headphones-4.jpg',
            '/Apple EarPods Headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Apple EarPods with 3.5mm Headphone Plug',
                imageset: [
                    '/Apple EarPods Headphones-1.jpg',
                    '/Apple EarPods Headphones-2.jpg',
                    '/Apple EarPods Headphones-3.jpg',
                    '/Apple EarPods Headphones-4.jpg',
                    '/Apple EarPods Headphones-5.jpg',
                    '/Apple EarPods Headphones-6.jpg',
                ],
                link: 'https://amzn.to/3Mp5Bh6'
            }
        ],
        description: '',
        breadcumb: 'Apple EarPods Headphones',
        title: 'Apple EarPods',
        price: '$18.79',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Compatibility'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Apple' },
                    { label: 'Model', value: 'EarPods' },
                    { label: 'Form Factor', value: 'In-ear' },
                    { label: 'Connection Type', value: 'Wired' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Controls', value: 'Volume, playback, calls' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'iPhone Compatibility', value: 'All models' },
                    { label: 'iPad Compatibility', value: 'All models' },
                    { label: 'iPod Compatibility', value: 'iPod touch (all generations)' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/Tile') {
    detail = {
        features: [
            '<strong>Find nearby</strong>',
            '<strong>Find far away</strong>',
            '<strong>Find your phone</strong>',
            '<strong>Water resistant</strong>',
            '<strong>Long battery life</strong>'
        ],
        descriptions: [
            '<p>Use the Tile app to ring your Tile when its within Bluetooth range.</p>',
            '<p>When outside of Bluetooth range, use the Tile app to view your Tiles most recent location on a map.</p>',
            '<p>Cant find your phone? Simply double press the button on your Tile to make your phone ring, even when its on silent.</p>',
            '<p>Tile is water resistant, making it durable for all your adventures.</p>',
            '<p>Replaceable battery lasts up to a year, ensuring your items are findable for longer.</p>'
        ],
        images: [
            '/Tile Mate-1.jpg',
            '/Tile Mate-2.jpg',
            '/Tile Mate-3.jpg',
            '/Tile Mate-4.jpg',
            '/Tile Mate-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Tile Mate',
                imageset: [
                    '/Tile Mate-1.jpg',
                    '/Tile Mate-2.jpg',
                    '/Tile Mate-3.jpg',
                    '/Tile Mate-4.jpg',
                    '/Tile Mate-5.jpg',
                    '/Tile Mate-6.jpg',
                ],
                link: 'https://amzn.to/4cLPYuE'
            },
        ],
        description: '',
        breadcumb: 'Tile Bluetooth Tracker',
        title: 'Tile',
        price: '$34.99',
        video: '',
        specs: [
            'General Specifications',
            'Tracking Features',
            'Battery Information'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Tile' },
                    { label: 'Model', value: 'Mate/Pro' },
                    { label: 'Connectivity', value: 'Bluetooth' },
                    { label: 'Water Resistance', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Range', value: 'Up to 200 ft (Bluetooth)' },
                    { label: 'Community Find', value: 'Yes' },
                    { label: 'Smart Alerts', value: 'Available with Premium subscription' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Type', value: 'CR2032 (replaceable)' },
                    { label: 'Battery Life', value: 'Up to 1 year' },
                    { label: 'Low Battery Notification', value: 'Yes' }
                ]
            }
        ],
        rating: 4.3,
    }; 










} else if (pathname === '/products/electronics/ailihen-i35-kids-headphones') {
    detail = {
        features: [
            '<strong>Kid-Friendly Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Foldable and Adjustable</strong>',
            '<strong>Universal Compatibility</strong>',
            '<strong>Comfortable Fit</strong>'
        ],
        descriptions: [
            '<p>Specially designed for children with safe volume levels and durable construction.</p>',
            '<p>Integrated microphone for clear communication during online classes or calls.</p>',
            '<p>Foldable design for easy storage and adjustable headband for growing kids.</p>',
            '<p>Compatible with various devices including school computers, tablets, and smartphones.</p>',
            '<p>Soft ear cushions and lightweight build for extended comfortable wear.</p>'
        ],
        images: [
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-1.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-2.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-3.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-4.jpg',
            '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'AILIHEN I35 Kids Headphones',
                imageset: [
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-1.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-2.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-3.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-4.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-5.jpg',
                    '/AILIHEN I35 Kids Headphones for Children Boys Girls with Microphone Foldable Adjustable Headsets for School Cellphones Computer iPad Tablet-6.jpg',
                ],
                link: 'https://amzn.to/3T46IXi'
            }
        ],
        description: '',
        breadcumb: 'AILIHEN I35 Kids Headphones',
        title: 'AILIHEN I35 Kids Headphones for Children Boys Girls',
        price: '$16.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'AILIHEN' },
                    { label: 'Model', value: 'I35' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Volume Limiting', value: 'Yes' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Adjustable Headband', value: 'Yes' },
                    { label: 'Color Options', value: 'Available' }
                ]
            }
        ],
        rating: 4.4,
    };
} else if (pathname === '/products/electronics/lorelei-x6-over-ear-headphones') {
    detail = {
        features: [
            '<strong>Over-Ear Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Stereo Bass Sound</strong>',
            '<strong>Foldable and Portable</strong>',
            '<strong>No-Tangle Cord</strong>'
        ],
        descriptions: [
            '<p>Comfortable over-ear design for immersive listening experience.</p>',
            '<p>Integrated microphone for clear hands-free calls and communication.</p>',
            '<p>Enhanced bass response for rich, full-bodied sound.</p>',
            '<p>Foldable design for easy storage and portability.</p>',
            '<p>1.45M no-tangle cord for hassle-free use.</p>'
        ],
        images: [
            '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-1.jpg',
            '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-2.jpg',
            '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-3.jpg',
            '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-4.jpg',
            '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'LORELEI X6 Over-Ear Headphones',
                imageset: [
                    '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-1.jpg',
                    '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-2.jpg',
                    '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-3.jpg',
                    '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-4.jpg',
                    '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-5.jpg',
                    '/LORELEI X6 Over-Ear Headphones with Microphone. Lightweight Foldable Stereo Bass Headphones with 1.45M No-Tangle. Portable Wired Headphones for Smartphone Tablet MP3-6.jpg',
                ],
                link: 'https://amzn.to/472Q4wV'
            }
        ],
        description: '',
        breadcumb: 'LORELEI X6 Over-Ear Headphones',
        title: 'LORELEI X6 Over-Ear Headphones with Microphone',
        price: '$16.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'LORELEI' },
                    { label: 'Model', value: 'X6' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Cord Length', value: '1.45M' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Bass', value: 'Enhanced' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Ear Cushions', value: 'Padded' },
                    { label: 'Weight', value: 'Lightweight' }
                ]
            }
        ],
        rating: 4.4,
    };
} else if (pathname === '/products/electronics/lorelei-x8-over-ear-wired-headphones') {
    detail = {
        features: [
            '<strong>Over-Ear Comfort</strong>',
            '<strong>Integrated Microphone</strong>',
            '<strong>Wired Connection</strong>',
            '<strong>Versatile Compatibility</strong>',
            '<strong>Durable Design</strong>'
        ],
        descriptions: [
            '<p>Comfortable over-ear fit for extended listening sessions.</p>',
            '<p>Built-in microphone for clear voice capture during calls or online meetings.</p>',
            '<p>Reliable wired connection ensures consistent audio quality.</p>',
            '<p>Compatible with a wide range of devices with a standard 3.5mm jack.</p>',
            '<p>Sturdy construction for long-lasting use.</p>'
        ],
        images: [
            '/LORELEI X8-1.jpg',
            '/LORELEI X8-2.jpg',
            '/LORELEI X8-3.jpg',
            '/LORELEI X8-4.jpg',
            '/LORELEI X8-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'LORELEI X8 Over-Ear Headphones',
                imageset: [
                    '/LORELEI X8-1.jpg',
                    '/LORELEI X8-2.jpg',
                    '/LORELEI X8-3.jpg',
                    '/LORELEI X8-4.jpg',
                    '/LORELEI X8-5.jpg',
                    '/LORELEI X8-6.jpg',
                    '/LORELEI X8-7.jpg',
                ],
                link: 'https://amzn.to/4dBsd9Y'
            }
        ],
        description: '',
        breadcumb: 'LORELEI X8 Over-Ear Wired Headphones',
        title: 'LORELEI X8 Over-Ear Wired Headphones with Microphone',
        price: '$16.79',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'LORELEI' },
                    { label: 'Model', value: 'X8' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Compatibility', value: 'Universal 3.5mm jack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sound Quality', value: 'Stereo' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Ear Cup Style', value: 'Over-Ear' },
                    { label: 'Cable Length', value: 'Not specified' },
                    { label: 'Foldable', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.4,
    };
} else if (pathname === '/products/electronics/nuetsa-surge-protector-power-strip') {
    detail = {
        features: [
            '<strong>8 AC Outlets</strong>',
            '<strong>4 USB Ports</strong>',
            '<strong>Surge Protection</strong>',
            '<strong>Flat Plug Design</strong>',
            '<strong>Extension Cord</strong>'
        ],
        descriptions: [
            '<p>Provides 8 AC outlets for multiple device connections.</p>',
            '<p>Includes 4 USB ports for convenient charging of mobile devices.</p>',
            '<p>Built-in surge protection safeguards your electronics from power spikes.</p>',
            '<p>Flat plug design allows furniture to be placed closer to the wall.</p>',
            '<p>Extended cord length for flexible placement and reach.</p>'
        ],
        images: [
            '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports.jpg',
            '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-2.jpg',
            '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-3.jpg',
            '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-4.jpg',
            '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'STAGING PRODUCT - Receive and Stow - P',
                imageset: [
                    '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports.jpg',
                    '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-2.jpg',
                    '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-3.jpg',
                    '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-4.jpg',
                    '/Surge Protector Power Strip - Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports-5.jpg',
                ],
                link: 'https://amzn.to/3T9hlb4'            }
        ],
        description: '',
        breadcumb: 'Nuetsa Surge Protector Power Strip',
        title: 'Nuetsa Flat Plug Extension Cord with 8 Outlets and 4 USB Ports',
        price: '$15.99',
        video: '',
        specs: [
            'General Specifications',
            'Power Features',
            'Safety'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Nuetsa' },
                    { label: 'AC Outlets', value: '8' },
                    { label: 'USB Ports', value: '4' },
                    { label: 'Cord Length', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: 'Yes' },
                    { label: 'Max Energy Rating', value: 'Not specified' },
                    { label: 'USB Output', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Overload Protection', value: 'Yes' },
                    { label: 'Fire-Resistant', value: 'Not specified' },
                    { label: 'Warranty', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.7,
    };






} else if (pathname === '/products/electronics/new-bee-kh20-pink') {
    detail = {
        features: [
            '<strong>Comfortable Design</strong>',
            '<strong>Bluetooth Connectivity</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Stylish Pink Color</strong>'
        ],
        descriptions: [
            '<p>Ergonomic design for comfortable all-day wear.</p>',
            '<p>Wireless Bluetooth connection for hassle-free listening.</p>',
            '<p>Extended battery life for uninterrupted use.</p>',
            '<p>Integrated microphone for hands-free calls.</p>',
            '<p>Attractive pink color suitable for fashion-conscious users.</p>'
        ],
        images: [
            '/New bee KH20 Pink-1.jpg',
            '/New bee KH20 Pink-2.jpg',
            '/New bee KH20 Pink-3.jpg',
            '/New bee KH20 Pink-4.jpg',
            '/New bee KH20 Pink-5.jpg'
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-pink-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'New bee KH20 - Pink',
                imageset: [
                    '/New bee KH20 Pink-1.jpg',
                    '/New bee KH20 Pink-2.jpg',
                    '/New bee KH20 Pink-3.jpg',
                    '/New bee KH20 Pink-4.jpg',
                    '/New bee KH20 Pink-5.jpg',
                    '/New bee KH20 Pink-6.jpg',
                ],
                link: 'https://amzn.to/3X3zng8'
            }
        ],
        description: '',
        breadcumb: 'New bee KH20 Pink',
        title: 'New bee KH20 Pink',
        price: '$15.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Information'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'New Bee' },
                    { label: 'Model', value: 'KH20' },
                    { label: 'Color', value: 'Pink' },
                    { label: 'Connectivity', value: 'Bluetooth' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Noise Cancellation', value: 'Not specified' },
                    { label: 'Sound Quality', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Not specified' },
                    { label: 'Charging Time', value: 'Not specified' },
                    { label: 'Standby Time', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/addtam-surge-protector-outlet-extender') {
    detail = {
        features: [
            '<strong>5-Outlet Splitter</strong>',
            '<strong>4 USB Ports</strong>',
            '<strong>Night Light</strong>',
            '<strong>Surge Protection</strong>',
            '<strong>ETL Listed</strong>'
        ],
        descriptions: [
            '<p>Expand your power options with 5 AC outlets.</p>',
            '<p>Charge multiple devices with 4 USB ports, including USB-C.</p>',
            '<p>Built-in night light for convenience and safety.</p>',
            '<p>Protect your devices from power surges.</p>',
            '<p>ETL listed for safety and quality assurance.</p>'
        ],
        images: [
            '/Addtam USB.jpg',
            '/Addtam USB-2.jpg',
            '/Addtam USB-3.jpg',
            '/Addtam USB-4.jpg',
            '/Addtam USB-4.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Addtam Surge Protector Outlet Extender',
                imageset: [
                    '/Addtam USB.jpg',
                    '/Addtam USB-2.jpg',
                    '/Addtam USB-3.jpg',
                    '/Addtam USB-4.jpg',
                ],
                link: 'https://amzn.to/4cJKmBa'
            }
        ],
        description: '',
        breadcumb: 'Addtam Surge Protector Outlet Extender',
        title: 'Addtam Surge Protector Outlet Extender with Night Light',
        price: '$14.97',
        video: '',
        specs: [
            'General Specifications',
            'Power Features',
            'Safety'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Addtam' },
                    { label: 'AC Outlets', value: '5' },
                    { label: 'USB Ports', value: '4 (including USB-C)' },
                    { label: 'Night Light', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: 'Yes' },
                    { label: 'Max Energy Rating', value: 'Not specified' },
                    { label: 'USB Output', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'ETL Listed', value: 'Yes' },
                    { label: 'Overload Protection', value: 'Yes' },
                    { label: 'Fire-Resistant', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/rorsou-r10-on-ear-headphones') {
    detail = {
        features: [
            '<strong>On-Ear Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Stereo Bass Sound</strong>',
            '<strong>Lightweight and Foldable</strong>',
            '<strong>Tangle-Free Cord</strong>'
        ],
        descriptions: [
            '<p>Comfortable on-ear design for immersive listening experience.</p>',
            '<p>Integrated microphone for clear hands-free calls.</p>',
            '<p>Enhanced bass response for rich, full-bodied sound.</p>',
            '<p>Lightweight and foldable design for easy portability.</p>',
            '<p>1.5M tangle-free cord for hassle-free use.</p>'
        ],
        images: [
            '/RORSOU R10 On Ear Headphones with Microphone-1.jpg',
            '/RORSOU R10 On Ear Headphones with Microphone-2.jpg',
            '/RORSOU R10 On Ear Headphones with Microphone-3.jpg',
            '/RORSOU R10 On Ear Headphones with Microphone-4.jpg',
            '/RORSOU R10 On Ear Headphones with Microphone-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'RORSOU R10 On-Ear Headphones - Black',
                imageset: [
                    '/RORSOU R10 On Ear Headphones with Microphone-1.jpg',
                    '/RORSOU R10 On Ear Headphones with Microphone-2.jpg',
                    '/RORSOU R10 On Ear Headphones with Microphone-3.jpg',
                    '/RORSOU R10 On Ear Headphones with Microphone-4.jpg',
                    '/RORSOU R10 On Ear Headphones with Microphone-5.jpg',
                    '/RORSOU R10 On Ear Headphones with Microphone-6.jpg',
                    '/RORSOU R10 On Ear Headphones with Microphone-7.jpg',
                ],
                link: 'https://amzn.to/3XkezlY'
            }
        ],
        description: '',
        breadcumb: 'RORSOU R10 On-Ear Headphones',
        title: 'RORSOU R10 On-Ear Headphones with Microphone',
        price: '$14.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'RORSOU' },
                    { label: 'Model', value: 'R10' },
                    { label: 'Connection Type', value: 'Wired' },
                    { label: 'Cable Length', value: '1.5M' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sound Quality', value: 'Stereo Bass' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Weight', value: 'Lightweight' },
                    { label: 'Cord Type', value: 'Tangle-free' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/voice-remote-for-lg-tvs') {
    detail = {
        features: [
            '<strong>Voice Control</strong>',
            '<strong>LG TV Compatibility</strong>',
            '<strong>Easy Setup</strong>',
            '<strong>Ergonomic Design</strong>',
            '<strong>Multi-Function Buttons</strong>'
        ],
        descriptions: [
            '<p>Control your TV with voice commands for convenient operation.</p>',
            '<p>Specifically designed for compatibility with LG TVs.</p>',
            '<p>Simple setup process for quick and easy use.</p>',
            '<p>Comfortable grip and button layout for effortless navigation.</p>',
            '<p>Access multiple functions with dedicated buttons.</p>'
        ],
        images: [
            '/Voice Remote for LG Tvs-1.jpg',
            '/Voice Remote for LG Tvs-2.jpg',
            '/Voice Remote for LG Tvs-3.jpg',
            '/Voice Remote for LG Tvs-4.jpg',
            '/Voice Remote for LG Tvs-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Voice Remote for LG TVs',
                imageset: [
                    '/Voice Remote for LG Tvs-1.jpg',
                    '/Voice Remote for LG Tvs-2.jpg',
                    '/Voice Remote for LG Tvs-3.jpg',
                    '/Voice Remote for LG Tvs-4.jpg',
                    '/Voice Remote for LG Tvs-5.jpg',
                    '/Voice Remote for LG Tvs-6.jpg',
                    '/Voice Remote for LG Tvs-7.jpg',
                ],
                link: 'https://amzn.to/3AFPj0L'
            }
        ],
        description: '',
        breadcumb: 'Voice Remote for LG TVs',
        title: 'Voice Remote for LG TVs',
        price: '$13.99',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Loutoc' },
                    { label: 'Model', value: 'Not specified' },
                    { label: 'Color', value: 'Not specified' },
                    { label: 'Power Source', value: 'Battery (not specified)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible with', value: 'LG TVs' },
                    { label: 'Specific Models', value: 'Not specified' },
                    { label: 'Year Range', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Voice Control', value: 'Yes' },
                    { label: 'Range', value: 'Not specified' },
                    { label: 'Additional Functions', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.4,
    };









} else if (pathname === '/products/electronics/warrky-usb-c-to-hdmi') {
    detail = {
        features: [
            '<strong>USB-C to HDMI Adapter</strong>',
            '<strong>4K@60Hz Resolution</strong>',
            '<strong>Plug and Play</strong>',
            '<strong>Wide Compatibility</strong>',
            '<strong>Compact Design</strong>'
        ],
        descriptions: [
            '<p>Convert USB-C port to HDMI for easy connection to displays.</p>',
            '<p>Support up to 4K@60Hz resolution for crisp, clear visuals.</p>',
            '<p>No driver installation required for hassle-free use.</p>',
            '<p>Compatible with a wide range of USB-C devices.</p>',
            '<p>Sleek and portable design for easy carrying.</p>'
        ],
        images: [
            '/Warrky USB C to HDMI-1.jpg',
            '/Warrky USB C to HDMI-2.jpg',
            '/Warrky USB C to HDMI-3.jpg',
            '/Warrky USB C to HDMI-4.jpg',
            '/Warrky USB C to HDMI-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Warrky USB C to HDMI Adapter',
                imageset: [
                    '/Warrky USB C to HDMI-1.jpg',
                    '/Warrky USB C to HDMI-2.jpg',
                    '/Warrky USB C to HDMI-3.jpg',
                    '/Warrky USB C to HDMI-4.jpg',
                    '/Warrky USB C to HDMI-5.jpg',
                    '/Warrky USB C to HDMI-6.jpg',
                ],
                link: 'https://amzn.to/3YYdy4h'
            }
        ],
        description: '',
        breadcumb: 'Warrky USB C to HDMI',
        title: 'Warrky USB C to HDMI',
        price: '$13.99',
        video: '',
        specs: [
            'General Specifications',
            'Performance',
            'Compatibility'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Warrky' },
                    { label: 'Model', value: 'USB C to HDMI' },
                    { label: 'Color', value: 'Not specified' },
                    { label: 'Cable Length', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Max Resolution', value: '4K@60Hz' },
                    { label: 'HDCP', value: 'Supported (version not specified)' },
                    { label: 'Plug and Play', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'USB-C Devices', value: 'Compatible' },
                    { label: 'Operating Systems', value: 'Windows, macOS, Chrome OS, etc.' },
                    { label: 'HDMI Displays', value: 'TVs, Monitors, Projectors' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/noot-products-kids-headphones-k22') {
    detail = {
        features: [
            '<strong>Kid-Friendly Design</strong>',
            '<strong>Foldable and Portable</strong>',
            '<strong>Tangle-Free Cord</strong>',
            '<strong>Universal Compatibility</strong>',
            '<strong>Comfortable Fit</strong>'
        ],
        descriptions: [
            '<p>Designed specifically for children with safe volume levels.</p>',
            '<p>Foldable design for easy storage and portability.</p>',
            '<p>5ft long tangle-free cord for hassle-free use.</p>',
            '<p>3.5mm jack compatible with most devices.</p>',
            '<p>Soft ear cushions and adjustable headband for comfort.</p>'
        ],
        images: [
            '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-1.jpg',
            '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-2.jpg',
            '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-3.jpg',
            '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-4.jpg',
            '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'noot products Kids Headphones K22 - Teal',
                imageset: [
                    '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-1.jpg',
                    '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-2.jpg',
                    '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-3.jpg',
                    '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-4.jpg',
                    '/noot products Kids Headphones K22 Foldable Stereo Tangle-Free 5ft Long Cord 3.5mm Jack Plug in Wired On-Ear Headset for Children-5.jpg',
                ],
                link: 'https://amzn.to/3Mn1PEG'
            }
        ],
        description: '',
        breadcumb: 'noot products Kids Headphones K22',
        title: 'noot products Kids Headphones K22',
        price: '$13.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'noot products' },
                    { label: 'Model', value: 'K22' },
                    { label: 'Type', value: 'On-Ear' },
                    { label: 'Connection', value: 'Wired (3.5mm jack)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Volume Limiting', value: 'Yes (specific level not specified)' },
                    { label: 'Stereo Sound', value: 'Yes' },
                    { label: 'Microphone', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Cord Length', value: '5ft' },
                    { label: 'Age Range', value: 'Children/Teens' }
                ]
            }
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/electronics/beats-solo3-wireless') {
    detail = {
        features: [
            '<strong>Wireless Bluetooth</strong>',
            '<strong>Apple W1 Chip</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Fast Fuel Charging</strong>',
            '<strong>Comfortable On-Ear Design</strong>'
        ],
        descriptions: [
            '<p>Connect wirelessly to your devices for hassle-free listening.</p>',
            '<p>Enjoy seamless setup and switching for your Apple devices.</p>',
            '<p>Up to 40 hours of battery life for all-day listening.</p>',
            '<p>5 minutes of charging gives you 3 hours of playback.</p>',
            '<p>Adjustable fit with comfort-cushioned ear cups.</p>'
        ],
        images: [
            '/Beats Solo3 Wireless-1.jpg',
            '/Beats Solo3 Wireless-2.jpg',
            '/Beats Solo3 Wireless-3.jpg',
            '/Beats Solo3 Wireless-4.jpg',
            '/Beats Solo3 Wireless-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Solo3 Wireless - Black',
                imageset: [
                    '/Beats Solo3 Wireless-1.jpg',
                    '/Beats Solo3 Wireless-2.jpg',
                    '/Beats Solo3 Wireless-3.jpg',
                    '/Beats Solo3 Wireless-4.jpg',
                    '/Beats Solo3 Wireless-5.jpg',
                ],
                link: 'https://amzn.to/3Z4Ja8y'
            },
            {
                colorbutton: 'bg-red-600 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Solo3 Wireless - Red',
                imageset: [
                    '/Beats Solo3 Wireless-1.jpg',
                    '/Beats Solo3 Wireless-2.jpg',
                    '/Beats Solo3 Wireless-3.jpg',
                    '/Beats Solo3 Wireless-4.jpg',
                    '/Beats Solo3 Wireless-5.jpg',
                ],
                link: 'https://amzn.to/3Z79mPF'
            }
        ],
        description: '',
        breadcumb: 'Beats Solo3 Wireless',
        title: 'Beats Solo3 Wireless',
        price: '$99.00',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Beats' },
                    { label: 'Model', value: 'Solo3 Wireless' },
                    { label: 'Form Factor', value: 'On-Ear' },
                    { label: 'Connectivity', value: 'Wireless (Bluetooth)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Driver Size', value: 'Not specified' },
                    { label: 'Noise Cancellation', value: 'No' },
                    { label: 'Microphone', value: 'Built-in' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Up to 40 hours' },
                    { label: 'Fast Charging', value: '5 min charge = 3 hours playback' },
                    { label: 'Charging Method', value: 'Micro USB' }
                ]
            }
        ],
        rating: 4.6,
    };










} else if (pathname === '/products/electronics/beats-solo-4-wireless') {
    detail = {
        features: [
            '<strong>Wireless Bluetooth</strong>',
            '<strong>Improved Sound Quality</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Fast Charging</strong>',
            '<strong>Comfortable Design</strong>'
        ],
        descriptions: [
            '<p>Seamless Bluetooth connectivity for wireless freedom.</p>',
            '<p>Enhanced audio performance for immersive listening experience.</p>',
            '<p>Extended battery life for all-day use.</p>',
            '<p>Quick charge feature for on-the-go convenience.</p>',
            '<p>Ergonomic on-ear design for lasting comfort.</p>'
        ],
        images: [
            '/Beats Solo 4 Wireless-1.jpg',
            '/Beats Solo 4 Wireless-2.jpg',
            '/Beats Solo 4 Wireless-3.jpg',
            '/Beats Solo 4 Wireless-4.jpg',
            '/Beats Solo 4 Wireless-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Beats Solo 4 Wireless - Black',
                imageset: [
                    '/Beats Solo 4 Wireless-1.jpg',
                    '/Beats Solo 4 Wireless-2.jpg',
                    '/Beats Solo 4 Wireless-3.jpg',
                    '/Beats Solo 4 Wireless-4.jpg',
                    '/Beats Solo 4 Wireless-5.jpg',
                    '/Beats Solo 4 Wireless-6.jpg',
                ],
                link: 'https://amzn.to/4e5Nqc9'
            }
        ],
        description: '',
        breadcumb: 'Beats Solo 4 Wireless',
        title: 'Beats Solo 4 Wireless',
        price: '$129.95',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Information'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Beats' },
                    { label: 'Model', value: 'Solo 4 Wireless' },
                    { label: 'Type', value: 'On-Ear' },
                    { label: 'Connectivity', value: 'Bluetooth' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Noise Cancellation', value: 'Not specified' },
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Controls', value: 'On-ear controls' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Not specified' },
                    { label: 'Fast Charging', value: 'Yes' },
                    { label: 'Charging Method', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/shokz-openrun-over-ear-bluetooth-headphones') {
    detail = {
        features: [
            '<strong>Bone Conduction Technology</strong>',
            '<strong>Open-Ear Design</strong>',
            '<strong>Waterproof</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Lightweight and Comfortable</strong>'
        ],
        descriptions: [
            '<p>Uses bone conduction to deliver audio through your cheekbones.</p>',
            '<p>Leaves ears open for awareness of surroundings during activities.</p>',
            '<p>IP67 waterproof rating for use during intense workouts or in rain.</p>',
            '<p>Up to 8 hours of continuous playback on a single charge.</p>',
            '<p>Weighs only 26g for comfortable all-day wear.</p>'
        ],
        images: [
            '/SHOKZ OpenRun Over Ear Bluetooth headphones-1.jpg',
            '/SHOKZ OpenRun Over Ear Bluetooth headphones-2.jpg',
            '/SHOKZ OpenRun Over Ear Bluetooth headphones-3.jpg',
            '/SHOKZ OpenRun Over Ear Bluetooth headphones-4.jpg',
            '/SHOKZ OpenRun Over Ear Bluetooth headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'SHOKZ OpenRun Over Ear Bluetooth Headphones - Black',
                imageset: [
                    '/SHOKZ OpenRun Over Ear Bluetooth headphones-1.jpg',
                    '/SHOKZ OpenRun Over Ear Bluetooth headphones-2.jpg',
                    '/SHOKZ OpenRun Over Ear Bluetooth headphones-3.jpg',
                    '/SHOKZ OpenRun Over Ear Bluetooth headphones-4.jpg',
                    '/SHOKZ OpenRun Over Ear Bluetooth headphones-5.jpg',
                    '/SHOKZ OpenRun Over Ear Bluetooth headphones-6.jpg',
                ],
                link: 'https://amzn.to/3XmW1Bt'
            }
        ],
        description: '',
        breadcumb: 'SHOKZ OpenRun Over Ear Bluetooth headphones',
        title: 'SHOKZ OpenRun Over Ear Bluetooth headphones',
        price: '$129.95',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Durability'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'SHOKZ' },
                    { label: 'Model', value: 'OpenRun' },
                    { label: 'Type', value: 'Over-Ear' },
                    { label: 'Connectivity', value: 'Bluetooth' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Technology', value: 'Bone Conduction' },
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Battery Life', value: 'Up to 8 hours' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Waterproof Rating', value: 'IP67' },
                    { label: 'Weight', value: '26g' },
                    { label: 'Sweatproof', value: 'Yes' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/philips-sonicare-5300-electric-rechargable-protective-clean') {
    detail = {
        features: [
            '<strong>Sonic Technology</strong>',
            '<strong>Multiple Cleaning Modes</strong>',
            '<strong>Pressure Sensor</strong>',
            '<strong>Smart Timer</strong>',
            '<strong>Long Battery Life</strong>'
        ],
        descriptions: [
            '<p>Uses Sonic technology for effective plaque removal.</p>',
            '<p>Features various modes for personalized cleaning experience.</p>',
            '<p>Alerts you when youre brushing too hard to protect gums.</p>',
            '<p>Ensures you brush for the dentist-recommended time.</p>',
            '<p>Up to 2 weeks of use on a single charge.</p>'
        ],
        images: [
            '/Philips Sonicare 5300 electric rechargable protective clean-1.jpg',
            '/Philips Sonicare 5300 electric rechargable protective clean-2.jpg',
            '/Philips Sonicare 5300 electric rechargable protective clean-3.jpg',
            '/Philips Sonicare 5300 electric rechargable protective clean-4.jpg',
            '/Philips Sonicare 5300 electric rechargable protective clean-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Philips Sonicare 5300 electric rechargeable protective clean - Black',
                imageset: [
                    '/Philips Sonicare 5300 electric rechargable protective clean-1.jpg',
                    '/Philips Sonicare 5300 electric rechargable protective clean-2.jpg',
                    '/Philips Sonicare 5300 electric rechargable protective clean-3.jpg',
                    '/Philips Sonicare 5300 electric rechargable protective clean-4.jpg',
                    '/Philips Sonicare 5300 electric rechargable protective clean-5.jpg',
                ],
                link: 'https://amzn.to/4cIrqmn'
            }
        ],
        description: '',
        breadcumb: 'Philips Sonicare 5300 electric rechargeable protective clean',
        title: 'Philips Sonicare 5300 electric rechargeable protective clean',
        price: '$94.99',
        video: '',
        specs: [
            'General Specifications',
            'Cleaning Features',
            'Battery Information'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Philips Sonicare' },
                    { label: 'Model', value: '5300' },
                    { label: 'Type', value: 'Electric Toothbrush' },
                    { label: 'Color', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Cleaning Modes', value: 'Multiple' },
                    { label: 'Pressure Sensor', value: 'Yes' },
                    { label: 'Timer', value: 'Smart Timer' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Up to 2 weeks' },
                    { label: 'Charging Time', value: 'Not specified' },
                    { label: 'Charger Type', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/jbl-tune-130-bluetooth-headphone-in-ear-headphones') {
    detail = {
        features: [
            '<strong>JBL Pure Bass Sound</strong>',
            '<strong>Wireless Bluetooth</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Comfortable Fit</strong>',
            '<strong>Hands-Free Calls</strong>'
        ],
        descriptions: [
            '<p>Delivers JBLs signature Pure Bass sound for enhanced audio experience.</p>',
            '<p>Bluetooth connectivity for wireless freedom and convenience.</p>',
            '<p>Extended playtime for all-day listening enjoyment.</p>',
            '<p>Ergonomic design for a secure and comfortable in-ear fit.</p>',
            '<p>Built-in microphone for clear hands-free calls.</p>'
        ],
        images: [
            '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-1.jpg',
            '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-2.jpg',
            '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-3.jpg',
            '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-4.jpg',
            '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JBL Tune 130 Bluetooth In-Ear Headphones - Black',
                imageset: [
                    '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-1.jpg',
                    '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-2.jpg',
                    '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-3.jpg',
                    '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-4.jpg',
                    '/Jbl Tune 130 Bluetooth Headphone In Ear headphones-5.jpg',
                ],
                link: 'https://amzn.to/3Z4JsfE'
            }
        ],
        description: '',
        breadcumb: 'JBL Tune 130 Bluetooth In-Ear Headphones',
        title: 'JBL Tune 130 Bluetooth In-Ear Headphones',
        price: '$99.95',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Information'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'JBL' },
                    { label: 'Model', value: 'Tune 130' },
                    { label: 'Type', value: 'In-Ear' },
                    { label: 'Connectivity', value: 'Bluetooth' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Driver Size', value: 'Not specified' },
                    { label: 'Frequency Response', value: 'Not specified' },
                    { label: 'Microphone', value: 'Built-in' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Not specified' },
                    { label: 'Charging Time', value: 'Not specified' },
                    { label: 'Quick Charge', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.2,
    };
} else if (pathname === '/products/electronics/sony-wh-ch720n-noise-canceling-wireless-headphones') {
    detail = {
        features: [
            '<strong>Digital Noise Cancellation</strong>',
            '<strong>Wireless Bluetooth</strong>',
            '<strong>Long Battery Life</strong>',
            '<strong>Comfortable Over-Ear Design</strong>',
            '<strong>Alexa Voice Control</strong>'
        ],
        descriptions: [
            '<p>Advanced digital noise cancellation for immersive listening experience.</p>',
            '<p>Bluetooth connectivity for wireless freedom and convenience.</p>',
            '<p>Extended battery life for long listening sessions.</p>',
            '<p>Padded over-ear design for lasting comfort during extended use.</p>',
            '<p>Built-in Alexa for voice-controlled music playback and more.</p>'
        ],
        images: [
            '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control.jpg',
            '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-2.jpg',
            '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-3.jpg',
            '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-4.jpg',
            '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Sony WH-CH720N Noise Canceling Wireless Headphones - Black',
                imageset: [
                    '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control.jpg',
                    '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-2.jpg',
                    '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-3.jpg',
                    '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-4.jpg',
                    '/Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control-5.jpg',
                ],
                link: 'https://amzn.to/3z0ic7g'
            }
        ],
        description: '',
        breadcumb: 'Sony WH-CH720N Noise Canceling Wireless Headphones',
        title: 'Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control',
        price: '$96.95',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery and Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Sony' },
                    { label: 'Model', value: 'WH-CH720N' },
                    { label: 'Type', value: 'Over-Ear' },
                    { label: 'Color', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Noise Cancellation', value: 'Digital' },
                    { label: 'Voice Assistant', value: 'Alexa' },
                    { label: 'Microphone', value: 'Built-in' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Battery Life', value: 'Not specified' },
                    { label: 'Bluetooth Version', value: 'Not specified' },
                    { label: 'NFC', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.4,
    };






} else if (pathname === '/products/electronics/wyze-cam-pan-v3-indoor-outdoor-ip65-rated-1080p-pan-tilt-zoom-wi-fi-smart-home-security-camera') {
    detail = {
        features: [
            '<strong>1080p HD Video</strong>',
            '<strong>Pan/Tilt/Zoom</strong>',
            '<strong>IP65 Weatherproof</strong>',
            '<strong>Color Night Vision</strong>',
            '<strong>Smart Home Integration</strong>'
        ],
        descriptions: [
            '<p>Crystal clear 1080p HD video for sharp and detailed footage.</p>',
            '<p>360° horizontal pan, 93° vertical tilt, and 8x digital zoom for complete coverage.</p>',
            '<p>IP65-rated weatherproof design for indoor and outdoor use.</p>',
            '<p>Full-color night vision for clear footage even in low light conditions.</p>',
            '<p>Compatible with Alexa and Google Assistant for voice control.</p>'
        ],
        images: [
            '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi1.jpg',
            '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi2.jpg',
            '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi3.jpg',
            '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi4.jpg',
            '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'WYZE Cam Pan v3',
                imageset: [
                    '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi1.jpg',
                    '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi2.jpg',
                    '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi3.jpg',
                    '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi4.jpg',
                    '/WYZE Cam Pan v3 IndoorOutdoor IP65-Rated 1080p PanTiltZoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet. Color Night Vision. 2-Way Audio. Works wi5.jpg',
                ],
                link: 'https://amzn.to/4g0FSsP'
            }
        ],
        
        description: '',
        breadcumb: 'WYZE Cam Pan v3',
        title: 'WYZE Cam Pan v3 Indoor/Outdoor IP65-Rated 1080p Pan/Tilt/Zoom Wi-Fi Smart Home Security Camera',
        price: '$79.96',
        video: '',
        specs: [
            'General Specifications',
            'Camera Features',
            'Connectivity'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'WYZE' },
                    { label: 'Model', value: 'Cam Pan v3' },
                    { label: 'Resolution', value: '1080p HD' },
                    { label: 'Weatherproof Rating', value: 'IP65' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Pan/Tilt/Zoom', value: '360° pan, 93° tilt, 8x zoom' },
                    { label: 'Night Vision', value: 'Color' },
                    { label: 'Two-Way Audio', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Wi-Fi', value: 'Yes' },
                    { label: 'Smart Home Compatibility', value: 'Alexa, Google Assistant' },
                    { label: 'Mobile App', value: 'WYZE app' }
                ]
            }
        ],
        rating: 4.4,
    };
} else if (pathname === '/products/electronics/one-beat-power-strip-surge-protector') {
    detail = {
        features: [
            '<strong>6 AC Outlets</strong>',
            '<strong>3 USB Ports</strong>',
            '<strong>Surge Protection</strong>',
            '<strong>Flat Plug Design</strong>',
            '<strong>Compact and Portable</strong>'
        ],
        descriptions: [
            '<p>6 widely-spaced AC outlets for multiple devices.</p>',
            '<p>3 USB ports including 1 USB-C for convenient charging.</p>',
            '<p>Built-in surge protection to safeguard your electronics.</p>',
            '<p>Flat plug design allows furniture to be placed closer to the wall.</p>',
            '<p>Compact size ideal for travel, office, dorm, or home use.</p>'
        ],
        images: [
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-2.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-3.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-4.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'One Beat Power Strip Surge Protector',
                imageset: [
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-2.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-3.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-4.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-5.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-6.jpg',
                ],
                link: 'https://amzn.to/475Nypw'
            }
        ],
        description: '',
        breadcumb: 'One Beat Power Strip Surge Protector',
        title: 'Power Strip Surge Protector - 6 Widely Outlets with 3 USB Ports (1 USB C)',
        price: '$12.99',
        video: '',
        specs: [
            'General Specifications',
            'Power Features',
            'Safety'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'One Beat' },
                    { label: 'AC Outlets', value: '6' },
                    { label: 'USB Ports', value: '3 (including 1 USB-C)' },
                    { label: 'Cord Length', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: 'Yes' },
                    { label: 'Max Energy Rating', value: 'Not specified' },
                    { label: 'USB Output', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Overload Protection', value: 'Yes' },
                    { label: 'Fire-Resistant', value: 'Not specified' },
                    { label: 'Wall Mountable', value: 'Yes' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/electronics/mifaso-15ft-10ft-5ft-8-outlets-power-strip-surge-protector') {
    detail = {
        features: [
            '<strong>8 AC Outlets</strong>',
            '<strong>Multiple Length Options</strong>',
            '<strong>Heavy-Duty Braided Cord</strong>',
            '<strong>Surge Protection</strong>',
            '<strong>Flat Plug Design</strong>'
        ],
        descriptions: [
            '<p>8 AC outlets for powering multiple devices simultaneously.</p>',
            '<p>Available in 15ft, 10ft, and 5ft cord lengths for versatile placement.</p>',
            '<p>Durable braided cord for enhanced longevity and safety.</p>',
            '<p>Built-in surge protection with 15A circuit breaker for device safety.</p>',
            '<p>Space-saving flat plug design for convenient placement.</p>'
        ],
        images: [
            '/15FT-1.jpg',
            '/15FT-2.jpg',
            '/15FT-3.jpg',
            '/15FT-4.jpg',
            '/15FT-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '15FT',
                subtitle: '15FT 8 Outlets Power Strip Surge Protector',
                imageset: [
                    '/15FT-1.jpg',
                    '/15FT-2.jpg',
                    '/15FT-3.jpg',
                    '/15FT-4.jpg',
                    '/15FT-5.jpg',
                ],
                link: 'https://amzn.to/3T6xPkp'
            },
        ],
        description: '',
        breadcumb: 'Mifaso Power Strip Surge Protector',
        title: '15FT/10FT/5FT 8 Outlets Power Strip Surge Protector with USB Ports',
        price: '$12.99',
        video: '',
        specs: [
            'General Specifications',
            'Power Features',
            'Safety'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Mifaso' },
                    { label: 'AC Outlets', value: '8' },
                    { label: 'Cord Lengths', value: '15ft, 10ft, 5ft options' },
                    { label: 'USB Ports', value: 'Yes (number not specified)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: 'Yes' },
                    { label: 'Circuit Breaker', value: '15A' },
                    { label: 'Cord Type', value: 'Heavy-duty braided' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Overload Protection', value: 'Yes' },
                    { label: 'Flat Plug', value: 'Yes' },
                    { label: 'Fire-Resistant', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/electronics/nivava-wired-headphones-with-microphone-k16-on-ear-headphones-for-kids') {
    detail = {
        features: [
            '<strong>Kid-Friendly Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Foldable Structure</strong>',
            '<strong>3.5mm Jack Compatibility</strong>',
            '<strong>Stereo Bass Sound</strong>'
        ],
        descriptions: [
            '<p>Designed specifically for children with comfortable fit and safe volume levels.</p>',
            '<p>Integrated microphone for clear communication during online classes or calls.</p>',
            '<p>Foldable design for easy storage and portability.</p>',
            '<p>Universal 3.5mm jack compatible with various devices.</p>',
            '<p>Quality stereo sound with enhanced bass for enjoyable listening.</p>'
        ],
        images: [
            '/NIVAVA Wired Headphones with Microphone-1.jpg',
            '/NIVAVA Wired Headphones with Microphone-2.jpg',
            '/NIVAVA Wired Headphones with Microphone-3.jpg',
            '/NIVAVA Wired Headphones with Microphone-4.jpg',
            '/NIVAVA Wired Headphones with Microphone-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'NIVAVA K16 Kids Headphones - Blue',
                imageset: [
                    '/NIVAVA Wired Headphones with Microphone-1.jpg',
                    '/NIVAVA Wired Headphones with Microphone-2.jpg',
                    '/NIVAVA Wired Headphones with Microphone-3.jpg',
                    '/NIVAVA Wired Headphones with Microphone-4.jpg',
                    '/NIVAVA Wired Headphones with Microphone-5.jpg',
                    '/NIVAVA Wired Headphones with Microphone-6.jpg',
                ],
                link: 'https://amzn.to/4cISXUU'
            },
            {
                colorbutton: 'bg-pink-500 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'NIVAVA K16 Kids Headphones - Pink',
                imageset: [
                    '/NIVAVA Wired Headphones with Microphone-1.jpg',
                    '/NIVAVA Wired Headphones with Microphone-2.jpg',
                    '/NIVAVA Wired Headphones with Microphone-3.jpg',
                    '/NIVAVA Wired Headphones with Microphone-4.jpg',
                    '/NIVAVA Wired Headphones with Microphone-5.jpg',
                    '/NIVAVA Wired Headphones with Microphone-6.jpg',
                ],
                link: 'https://'
            }
        ],
        description: '',
        breadcumb: 'NIVAVA Wired Headphones for Kids',
        title: 'NIVAVA Wired Headphones with Microphone, K16 On-Ear Headphones for Kids',
        price: '$12.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ], 
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'NIVAVA' },
                    { label: 'Model', value: 'K16' },
                    { label: 'Type', value: 'On-Ear' },
                    { label: 'Connection', value: 'Wired (3.5mm jack)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Sound Quality', value: 'Stereo with Bass' },
                    { label: 'Volume Limiting', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Yes' },
                    { label: 'Cord Length', value: '5ft' },
                    { label: 'Age Range', value: 'Kids, Teens' }
                ]
            }
        ],
        rating: 4.5,
    };













} else if (pathname === '/products/electronics/addtam-flat-plug-power-strip') {
    detail = {
        features: [
            '<strong>12 AC Outlets</strong>',
            '<strong>Ultra Thin Flat Design</strong>',
            '<strong>900J Surge Protection</strong>',
            '<strong>5Ft Extension Cord</strong>',
            '<strong>Wall Mountable</strong>'
        ],
        descriptions: [
            '<p>12 widely-spaced AC outlets for multiple devices.</p>',
            '<p>Ultra-thin flat design allows furniture to be placed closer to the wall.</p>',
            '<p>900 Joule surge protection safeguards your electronics.</p>',
            '<p>5-foot extension cord for flexible placement.</p>',
            '<p>Wall mountable for convenient installation and space-saving.</p>'
        ],
        images: [
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-2.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-3.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-4.jpg',
            '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Addtam Flat Plug Power Strip',
                imageset: [
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-2.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-3.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-4.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-5.jpg',
                    '/Flat Plug Power Strip. Ultra Thin Flat Extension Cord - Addtam 12 Widely AC 3 Sides Multiple Outlets. 5Ft. 900J Surge Protector. Wall Mount. Desk Charging Station for Home-6.jpg',
                ],
                link: 'https://amzn.to/4cJLrcc'
            }
        ],
        description: '',
        breadcumb: 'Addtam Flat Plug Power Strip',
        title: 'Addtam 12 Widely AC 3 Sides Multiple Outlets, 5Ft, 900J Surge Protector',
        price: '$11.99',
        video: '',
        specs: [
            'General Specifications',
            'Power Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Addtam' },
                    { label: 'AC Outlets', value: '12' },
                    { label: 'Cord Length', value: '5 ft' },
                    { label: 'Color', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: '900 Joules' },
                    { label: 'USB Ports', value: 'Not specified' },
                    { label: 'Overload Protection', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Flat Plug', value: 'Yes' },
                    { label: 'Wall Mountable', value: 'Yes' },
                    { label: 'Dimensions', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/electronics/elecder-kids-headphones-s8-wired-headphones-for-kids') {
    detail = {
        features: [
            '<strong>Kid-Friendly Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Adjustable Volume Limit</strong>',
            '<strong>Comfortable Fit</strong>',
            '<strong>Universal Compatibility</strong>'
        ],
        descriptions: [
            '<p>Designed specifically for children with a durable and colorful build.</p>',
            '<p>Integrated microphone for clear communication during online classes or calls.</p>',
            '<p>Adjustable volume limit (85dB/94dB) for hearing protection.</p>',
            '<p>Soft ear cushions and adjustable headband for a comfortable fit.</p>',
            '<p>Compatible with various devices via 3.5mm audio jack.</p>'
        ],
        images: [
            '/ELECDER Kids Headphones-1.jpg',
            '/ELECDER Kids Headphones-2.jpg',
            '/ELECDER Kids Headphones-3.jpg',
            '/ELECDER Kids Headphones-4.jpg',
            '/ELECDER Kids Headphones-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'ELECDER Kids Headphones S8',
                imageset: [
                    '/ELECDER Kids Headphones-1.jpg',
                    '/ELECDER Kids Headphones-2.jpg',
                    '/ELECDER Kids Headphones-3.jpg',
                    '/ELECDER Kids Headphones-4.jpg',
                    '/ELECDER Kids Headphones-5.jpg',
                    '/ELECDER Kids Headphones-6.jpg',
                ],
                link: 'https://amzn.to/3XnCdy4'
            }
        ],
        description: '',
        breadcumb: 'ELECDER Kids Headphones S8',
        title: 'ELECDER Kids Headphones, S8 Wired Headphones for Kids with Microphone',
        price: '$11.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'ELECDER' },
                    { label: 'Model', value: 'S8' },
                    { label: 'Type', value: 'On-Ear' },
                    { label: 'Connection', value: 'Wired (3.5mm jack)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone', value: 'Built-in' },
                    { label: 'Volume Limit', value: 'Adjustable 85dB/94dB' },
                    { label: 'Frequency Response', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Foldable', value: 'Not specified' },
                    { label: 'Cord Length', value: 'Not specified' },
                    { label: 'Age Range', value: 'Kids, Boys, Girls' }
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/electronics/fyy-electronic-organizer-travel-cable-organizer-bag-pouch') {
    detail = {
        features: [
            '<strong>Double Layer Design</strong>',
            '<strong>Waterproof Material</strong>',
            '<strong>Portable and Compact</strong>',
            '<strong>Multiple Compartments</strong>',
            '<strong>Versatile Storage</strong>'
        ],
        descriptions: [
            '<p>Double-layer design for efficient organization of various electronics accessories.</p>',
            '<p>Made with waterproof material to protect your gadgets from spills and moisture.</p>',
            '<p>Compact size perfect for travel or everyday carry.</p>',
            '<p>Multiple compartments and elastic straps to secure different sized items.</p>',
            '<p>Suitable for storing cables, chargers, phones, earphones, and more.</p>'
        ],
        images: [
            '/FYY Electronic Organizer. Travel Cable Organizer-1.jpg',
            '/FYY Electronic Organizer. Travel Cable Organizer-2.jpg',
            '/FYY Electronic Organizer. Travel Cable Organizer-3.jpg',
            '/FYY Electronic Organizer. Travel Cable Organizer-4.jpg',
            '/FYY Electronic Organizer. Travel Cable Organizer-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'FYY Electronic Organizer',
                imageset: [
                    '/FYY Electronic Organizer. Travel Cable Organizer-1.jpg',
                    '/FYY Electronic Organizer. Travel Cable Organizer-2.jpg',
                    '/FYY Electronic Organizer. Travel Cable Organizer-3.jpg',
                    '/FYY Electronic Organizer. Travel Cable Organizer-4.jpg',
                    '/FYY Electronic Organizer. Travel Cable Organizer-5.jpg',
                    '/FYY Electronic Organizer. Travel Cable Organizer-6.jpg',                
                ],
                link: 'https://amzn.to/4dGNRtk'
            }
        ],
        description: '',
        breadcumb: 'FYY Electronic Organizer',
        title: 'FYY Electronic Organizer, Travel Cable Organizer Bag Pouch',
        price: '$11.99',
        video: '',
        specs: [
            'General Specifications',
            'Material',
            'Storage'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'FYY' },
                    { label: 'Type', value: 'Travel Organizer' },
                    { label: 'Layers', value: 'Double' },
                    { label: 'Closure Type', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Exterior Material', value: 'Waterproof' },
                    { label: 'Interior Material', value: 'Not specified' },
                    { label: 'Durability', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compartments', value: 'Multiple' },
                    { label: 'Elastic Straps', value: 'Yes' },
                    { label: 'Dimensions', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.4,
    };
} else if (pathname === '/products/electronics/snowkids-8k-hdmi-cable-fh') {
    detail = {
        features: [
            '<strong>8K Resolution Support</strong>',
            '<strong>High Speed Data Transfer</strong>',
            '<strong>Durable Construction</strong>',
            '<strong>Wide Compatibility</strong>',
            '<strong>FH (Assumed to be Full HD) Support</strong>'
        ],
        descriptions: [
            '<p>Supports ultra-high definition 8K resolution for crystal clear visuals.</p>',
            '<p>High-speed data transfer for smooth, lag-free audio and video transmission.</p>',
            '<p>Built with quality materials for long-lasting performance.</p>',
            '<p>Compatible with a wide range of devices including TVs, monitors, gaming consoles, and more.</p>',
            '<p>Supports Full HD content for versatile use with various display technologies.</p>'
        ],
        images: [
            '/Snowkids 8k hdmi Cable FH-1.jpg',
            '/Snowkids 8k hdmi Cable FH-2.jpg',
            '/Snowkids 8k hdmi Cable FH-3.jpg',
            '/Snowkids 8k hdmi Cable FH-4.jpg',
            '/Snowkids 8k hdmi Cable FH-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Snowkids 8K HDMI Cable FH',
                imageset: [
                    '/Snowkids 8k hdmi Cable FH-1.jpg',
                    '/Snowkids 8k hdmi Cable FH-2.jpg',
                    '/Snowkids 8k hdmi Cable FH-3.jpg',
                    '/Snowkids 8k hdmi Cable FH-4.jpg',
                    '/Snowkids 8k hdmi Cable FH-5.jpg',
                    '/Snowkids 8k hdmi Cable FH-6.jpg',
                ],
                link: 'https://amzn.to/3AJJjUy'
            }
        ],
        description: '',
        breadcumb: 'Snowkids 8K HDMI Cable FH',
        title: 'Snowkids 8K HDMI Cable FH',
        price: '$11.99',
        video: '',
        specs: [
            'General Specifications',
            'Performance',
            'Compatibility'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Snowkids' },
                    { label: 'Type', value: 'HDMI Cable' },
                    { label: 'Length', value: 'Not specified' },
                    { label: 'Color', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Max Resolution', value: '8K' },
                    { label: 'Data Transfer Rate', value: 'Not specified' },
                    { label: 'HDMI Version', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Device Compatibility', value: 'TVs, Monitors, Gaming Consoles, etc.' },
                    { label: 'HDCP Support', value: 'Not specified' },
                    { label: 'ARC Support', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.6,
    };



















} else if (pathname === '/products/electronics/amazon-basics-6-outlet-surge-protector-power-strip-2-pack') {
    detail = {
        features: [
            '<strong>6-Outlet Power Strip</strong>',
            '<strong>200 Joule Surge Protection</strong>',
            '<strong>2-Foot Long Cord</strong>',
            '<strong>2-Pack Value</strong>',
            '<strong>Compact Design</strong>'
        ],
        descriptions: [
            '<p>Six grounded outlets provide power for multiple devices.</p>',
            '<p>200 Joule rated surge protection to safeguard your electronics.</p>',
            '<p>2-foot cord length for convenient placement.</p>',
            '<p>Two power strips included for added value and coverage.</p>',
            '<p>Space-saving design fits easily in various settings.</p>'
        ],
        images: [
            '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule.jpg',
            '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-2.jpg',
            '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-3.jpg',
            '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-4.jpg',
            '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack',
                imageset: [
                    '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule.jpg',
                    '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-2.jpg',
                    '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-3.jpg',
                    '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-4.jpg',
                    '/Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack. 2-Foot Long Cord. 200 Joule-5.jpg',
                ],
                link: 'https://amzn.to/4dJ1c4o'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack',
        title: 'Amazon Basics 6-Outlet Surge Protector Power Strip 2-Pack, 2-Foot Long Cord, 200 Joule',
        price: '$10.30',
        video: '',
        specs: [
            'General Specifications',
            'Power Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Number of Outlets', value: '6 per strip' },
                    { label: 'Cord Length', value: '2 feet' },
                    { label: 'Quantity', value: '2-Pack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: '200 Joules' },
                    { label: 'Outlet Type', value: 'Grounded (3-prong)' },
                    { label: 'On/Off Switch', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Color', value: 'Not specified' },
                    { label: 'Dimensions', value: 'Not specified' },
                    { label: 'Wall Mountable', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.7,
    };

} else if (pathname === '/products/electronics/amazon-basics-led-indicator-6-power-strip') {
    detail = {
        features: [
            '<strong>6-Outlet Power Strip</strong>',
            '<strong>LED Power Indicator</strong>',
            '<strong>Compact Design</strong>',
            '<strong>On/Off Switch</strong>',
            '<strong>Safety Certified</strong>'
        ],
        descriptions: [
            '<p>Six outlets provide power for multiple devices.</p>',
            '<p>LED indicator shows when the power strip is on and working.</p>',
            '<p>Space-saving design fits easily in various settings.</p>',
            '<p>Convenient on/off switch for energy saving.</p>',
            '<p>Safety certified for peace of mind.</p>'
        ],
        images: [
            '/Amazon Basics Led Indicator 6 Power Strip.jpg',
            '/Amazon Basics Led Indicator 6 Power Strip-2.jpg',
            '/Amazon Basics Led Indicator 6 Power Strip-3.jpg',
            '/Amazon Basics Led Indicator 6 Power Strip-4.jpg',
            '/Amazon Basics Led Indicator 6 Power Strip-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Amazon Basics LED Indicator 6 Power Strip',
                imageset: [
                    '/Amazon Basics Led Indicator 6 Power Strip.jpg',
                    '/Amazon Basics Led Indicator 6 Power Strip-2.jpg',
                    '/Amazon Basics Led Indicator 6 Power Strip-3.jpg',
                    '/Amazon Basics Led Indicator 6 Power Strip-4.jpg',
                    '/Amazon Basics Led Indicator 6 Power Strip-5.jpg',
                    '/Amazon Basics Led Indicator 6 Power Strip-6.jpg',
                ],
                link: 'https://amzn.to/3yMEuJL'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics LED Indicator 6 Power Strip',
        title: 'Amazon Basics LED Indicator 6 Power Strip',
        price: '$9.99',
        video: '',
        specs: [
            'General Specifications',
            'Power Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Number of Outlets', value: '6' },
                    { label: 'Cord Length', value: 'Not specified' },
                    { label: 'Color', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'LED Indicator', value: 'Yes' },
                    { label: 'On/Off Switch', value: 'Yes' },
                    { label: 'Surge Protection', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Dimensions', value: 'Not specified' },
                    { label: 'Wall Mountable', value: 'Not specified' },
                    { label: 'Safety Certifications', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.8,
    };




} else if (pathname === '/products/electronics/USB-Type-C-to-3-5mm-Female-Headphone-Jack-Adapter') {
    detail = {
        features: [
            '<strong>Wide Compatibility</strong>',
            '<strong>High-Quality Audio</strong>',
            '<strong>Compact Design</strong>',
        ],
        descriptions: [
            '<p>Compatible with Samsung Galaxy S21, S20 Ultra, S20+, Note 20, 10, S10, S9 Plus, Pixel 4, 3, 2 XL, iPad Pro, and more USB-C devices.</p>',
            '<p>Ensures clear and stable audio transmission for a great listening experience.</p>',
            '<p>Small and lightweight, easy to carry and use on-the-go.</p>',
        ],
        images: [
            '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-1.jpg',
            '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-2.jpg',
            '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'USB Type C to 3.5mm Female Headphone Jack Adapter',
                imageset: [
                    '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-1.jpg',
                    '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-2.jpg',
                    '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-3.jpg',
                    '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-4.jpg',
                    '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-5.jpg',
                    '/USB Type C to 3.5mm Female Headphone Jack Adapter.USB C to Aux Audio Dongle Cable Cord Compatible with Samsung Galaxy S21 S20 Ultra S20+ Note 20 10 S10 S9 Plus.Pixel 4 3 2-6.jpg',
                ],
                link: 'https://amzn.to/3MHf7vS'
            }
        ],
        description: '',
        breadcumb: 'USB Type C to 3.5mm Adapter',
        title: 'USB Type C to 3.5mm Female Headphone Jack Adapter',
        price: '$8.98',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Audio Quality'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Jxmox' },
                    { label: 'Connector Type', value: 'USB-C to 3.5mm' },
                    { label: 'Cable Length', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible Devices', value: 'Samsung Galaxy, Google Pixel, iPad Pro' },
                    { label: 'Operating System', value: 'Android, iOS' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Audio Resolution', value: 'Not specified' },
                    { label: 'Impedance', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.4,
    };



} else if (pathname === '/products/electronics/Flat-Extension-Cord') {
    detail = {
        features: [
            '<strong>Surge Protection</strong>',
            '<strong>Flat Design</strong>',
            '<strong>Multiple Outlets</strong>',
        ],
        descriptions: [
            '<p>Protects your devices from power surges and spikes.</p>',
            '<p>Slim profile allows for use in tight spaces behind furniture.</p>',
            '<p>Provides multiple outlets for convenient power distribution.</p>',
        ],
        images: [
            '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-1.jpg',
            '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-2.jpg',
            '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-white border-2 border-gray-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Flat Extension Cord Power Strip',
                imageset: [
                    '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-1.jpg',
                    '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-2.jpg',
                    '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-3.jpg',
                    '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-4.jpg',
                    '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-5.jpg',
                    '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-6.jpg',
                    '/Flat Extension Cord. Olcorife Flat Plug Power Strip Surge Protector. Home Office Travel Dorm Room Essentials-7.jpg',
                ],
                link: 'https://amzn.to/4gkp8gc'
            }
        ],
        description: '',
        breadcumb: 'Flat Extension Cord',
        title: 'Flat Extension Cord Power Strip Surge Protector',
        price: '$8.99',
        video: '',
        specs: [
            'General Specifications',
            'Safety Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Olcorife' },
                    { label: 'Number of Outlets', value: 'Not specified' },
                    { label: 'Cord Length', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Surge Protection', value: 'Yes' },
                    { label: 'Overload Protection', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Flat Design', value: 'Yes' },
                    { label: 'Color', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/electronics/Apple-MFi-Certified-iPhone-AUX-Cord-for-Car-Stereo') {
    detail = {
        features: [
            '<strong>Apple MFi Certified</strong>',
            '<strong>High-Quality Audio</strong>',
            '<strong>Durable Design</strong>',
        ],
        descriptions: [
            '<p>Certified by Apple for guaranteed compatibility and performance with iPhone devices.</p>',
            '<p>Ensures clear, stable audio transmission for an excellent listening experience in your car.</p>',
            '<p>Made with high-quality materials for long-lasting use and reliability.</p>',
        ],
        images: [
            '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-1.jpg',
            '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-2.jpg',
            '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'iPhone AUX Cord for Car Stereo (Black)',
                imageset: [
                    '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-1.jpg',
                    '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-2.jpg',
                    '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-3.jpg',
                    '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-4.jpg',
                    '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-5.jpg',
                    '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-6.jpg',
                    '/(Apple MFi Certified) iPhone AUX Cord for Car Stereo.Lightning to 14 Inch Audio Cable.3.3ft. Headphone Jack Adapter Male Aux Stereo Audio Cable Compatible for iPhone 131-7.jpg',
                ],
                link: 'https://amzn.to/4ghmyYo'
            }
        ],
        description: '',
        breadcumb: 'iPhone AUX Cord',
        title: 'Apple MFi Certified iPhone AUX Cord for Car Stereo',
        price: '$8.98',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Audio Quality'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Seulliya' },
                    { label: 'Cable Length', value: '3.3ft' },
                    { label: 'Connector Type', value: 'Lightning to 3.5mm' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible Devices', value: 'iPhone 13/12/11/XR/X/8/7' },
                    { label: 'MFi Certified', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Audio Resolution', value: 'Not specified' },
                    { label: 'Impedance', value: 'Not specified' }
                ]
            }
        ],
        rating: 3.7,
    };





} else if (pathname === '/products/electronics/Sony-MDREX15AP-in-Ear-Earbud-Headphones-with-Mic') {
    detail = {
        features: [
            '<strong>In-Ear Design</strong>',
            '<strong>Built-in Microphone</strong>',
            '<strong>Sony Quality Sound</strong>',
        ],
        descriptions: [
            '<p>Comfortable in-ear fit for extended listening sessions.</p>',
            '<p>Integrated microphone for hands-free calls and voice commands.</p>',
            '<p>Enjoy clear, balanced audio with Sony\'s renowned sound quality.</p>',
        ],
        images: [
            '/Sony MDREX15AP in-Ear Earbud Headphones with Mic.jpg',
            '/Sony MDREX15AP in-Ear Earbud Headphones with Mic.jpg',
            '/Sony MDREX15AP in-Ear Earbud Headphones with Mic.jpg',

        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Sony MDREX15AP in-Ear Earbud Headphones with Mic',
                imageset: [
                    '/Sony MDREX15AP in-Ear Earbud Headphones with Mic.jpg',
                ],
                link: 'https://amzn.to/3XxZaOW'
            }
        ],
        description: '',
        breadcumb: 'Sony MDREX15AP Earbuds',
        title: 'Sony MDREX15AP in-Ear Earbud Headphones with Mic',
        price: '$7.49',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Microphone'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Sony' },
                    { label: 'Model', value: 'MDREX15AP' },
                    { label: 'Type', value: 'In-ear' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Frequency Response', value: 'Not specified' },
                    { label: 'Impedance', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Microphone Type', value: 'Built-in' },
                    { label: 'Compatibility', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/electronics/Amazon-Basics-Digital-Optical-Audio-Toslink-Sound-Bar-TV-Cable') {
    detail = {
        features: [
            '<strong>High-Quality Audio Transmission</strong>',
            '<strong>Durable Construction</strong>',
            '<strong>Wide Compatibility</strong>',
        ],
        descriptions: [
            '<p>Delivers clear, high-fidelity digital audio signals.</p>',
            '<p>Made with quality materials for long-lasting performance.</p>',
            '<p>Compatible with a wide range of audio devices including sound bars, TVs, and gaming consoles.</p>',
        ],
        images: [
            '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-1.jpg',
            '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-2.jpg',
            '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable',
                imageset: [
                    '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-1.jpg',
                    '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-2.jpg',
                    '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-3.jpg',
                    '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-4.jpg',
                    '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-5.jpg',
                    '/Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable-6.jpg',
                ],
                link: 'https://amzn.to/4dSUusV'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics Toslink Cable',
        title: 'Amazon Basics Digital Optical Audio Toslink Sound Bar TV Cable',
        price: '$7.29',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Performance'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Cable Type', value: 'Toslink' },
                    { label: 'Length', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible Devices', value: 'Sound bars, TVs, gaming consoles' },
                    { label: 'Connector Type', value: 'Toslink (Optical)' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Audio Quality', value: 'Digital' },
                    { label: 'Bandwidth', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/IPX8-Waterproof-AirTag-Keychain-Holder-Case') {
    detail = {
        features: [
            '<strong>IPX8 Waterproof</strong>',
            '<strong>Lightweight and Durable</strong>',
            '<strong>Easy Installation</strong>',
        ],
        descriptions: [
            '<p>Fully protects your AirTag from water and dust with IPX8 waterproof rating.</p>',
            '<p>Made from high-quality materials for durability while remaining lightweight.</p>',
            '<p>Simple snap-on design for quick and easy installation of your AirTag.</p>',
        ],
        images: [
            '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar.jpg',
            '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar-2.jpg',
            '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'IPX8 Waterproof AirTag Keychain Holder Case',
                imageset: [
                    '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar.jpg',
                    '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar-2.jpg',
                    '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar-3.jpg',
                    '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar-4.jpg',
                    '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar-5.jpg',
                    '/IPX8 Waterproof AirTag Keychain Holder Case. Lightweight. Anti-Scratch. Easy Installation.Soft Full-Body Shockproof Air Tag Holder for Luggage.Keys. Dog Collar-6.jpg',
                ],
                link: 'https://amzn.to/3ZgS179'
            }
        ],
        description: '',
        breadcumb: 'AirTag Keychain Holder Case',
        title: 'IPX8 Waterproof AirTag Keychain Holder Case',
        price: '$6.98',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Design Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Mozoter' },
                    { label: 'Material', value: 'Not specified' },
                    { label: 'Waterproof Rating', value: 'IPX8' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible With', value: 'Apple AirTag' },
                    { label: 'Attachment Type', value: 'Keychain' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Anti-Scratch', value: 'Yes' },
                    { label: 'Shockproof', value: 'Full-Body' }
                ]
            }
        ],
        rating: 4.6,
    };


} else if (pathname === '/products/electronics/KabelDirekt-TOSLINK-Optical-Audio-Cable') {
    detail = {
        features: [
            '<strong>High-Quality Audio Transmission</strong>',
            '<strong>Durable Construction</strong>',
            '<strong>Wide Compatibility</strong>',
        ],
        descriptions: [
            '<p>Delivers clear, high-fidelity digital audio signals with 24K gold-plated connectors.</p>',
            '<p>Metal case and fiber optic cable designed for long-lasting performance.</p>',
            '<p>Compatible with a wide range of audio devices including soundbars, amps, Xbox One, and PS4.</p>',
        ],
        images: [
            '/KabelDirekt - TOSLINK -1.jpg',
            '/KabelDirekt - TOSLINK -2.jpg',
            '/KabelDirekt - TOSLINK -3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'KabelDirekt TOSLINK Optical Audio Cable',
                imageset: [
                    '/KabelDirekt - TOSLINK -1.jpg',
                    '/KabelDirekt - TOSLINK -2.jpg',
                    '/KabelDirekt - TOSLINK -3.jpg',
                    '/KabelDirekt - TOSLINK -4.jpg',
                    '/KabelDirekt - TOSLINK -5.jpg',
                    '/KabelDirekt - TOSLINK -6.jpg',
                ],
                link: 'https://amzn.to/3XyPjsk'
            }
        ],
        description: '',
        breadcumb: 'KabelDirekt TOSLINK Cable',
        title: 'KabelDirekt TOSLINK Optical Audio Cable',
        price: '$6.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Compatibility'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'KabelDirekt' },
                    { label: 'Cable Type', value: 'TOSLINK Optical' },
                    { label: 'Connector Plating', value: '24K Gold' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Audio Quality', value: 'Digital' },
                    { label: 'S/PDIF Support', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible Devices', value: 'Soundbars, Amps, Xbox One, PS4' },
                    { label: 'Designed in', value: 'Germany' }
                ]
            }
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/electronics/Acer-USB-Hub-4-Ports') {
    detail = {
        features: [
            '<strong>4-Port USB Hub</strong>',
            '<strong>Compact Design</strong>',
            '<strong>Plug and Play</strong>',
        ],
        descriptions: [
            '<p>Expands your device\'s USB capabilities with 4 additional ports.</p>',
            '<p>Small and lightweight, perfect for travel or desktop use.</p>',
            '<p>Easy to use with no drivers required, just plug it in and it\'s ready to go.</p>',
        ],
        images: [
            '/Acer USB Hub 4 Ports-1.jpg',
            '/Acer USB Hub 4 Ports-2.jpg',
            '/Acer USB Hub 4 Ports-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Acer USB Hub 4 Ports',
                imageset: [
                    '/Acer USB Hub 4 Ports-1.jpg',
                    '/Acer USB Hub 4 Ports-2.jpg',
                    '/Acer USB Hub 4 Ports-3.jpg',
                    '/Acer USB Hub 4 Ports-4.jpg',
                    '/Acer USB Hub 4 Ports-5.jpg',
                    '/Acer USB Hub 4 Ports-6.jpg',
                ],
                link: 'https://amzn.to/3XzGcaB'
            }
        ],
        description: '',
        breadcumb: 'Acer USB Hub',
        title: 'Acer USB Hub 4 Ports',
        price: '$12.99',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Power'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Acer' },
                    { label: 'Number of Ports', value: '4' },
                    { label: 'USB Version', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible Devices', value: 'Not specified' },
                    { label: 'Operating Systems', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Power Source', value: 'USB' },
                    { label: 'Power Output', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/electronics/Cable-Clips-Cord-Organizer-Cable-Holder') {
    detail = {
        features: [
            '<strong>Versatile Organization</strong>',
            '<strong>Multiple Sizes</strong>',
            '<strong>Easy Installation</strong>',
        ],
        descriptions: [
            '<p>Keeps your cables neat and tidy in your car, home, or office.</p>',
            '<p>Comes with 3 packs of cable organizers with 7, 5, and 3 slots for different needs.</p>',
            '<p>Simple to install and use, helping you manage your cables effortlessly.</p>',
        ],
        images: [
            '/cable-clips-1.jpg',
            '/cable-clips-2.jpg',
            '/cable-clips-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Cable Clips, Cord Organizer Cable Holder',
                imageset: [
                    '/Cable Clips. Cord Organizer Cable Holder-1.jpg',
                    '/Cable Clips. Cord Organizer Cable Holder-2.jpg',
                    '/Cable Clips. Cord Organizer Cable Holder-3.jpg',
                    '/Cable Clips. Cord Organizer Cable Holder-4.jpg',
                    '/Cable Clips. Cord Organizer Cable Holder-5.jpg',
                    '/Cable Clips. Cord Organizer Cable Holder-6.jpg',
                    '/Cable Clips. Cord Organizer Cable Holder-7.jpg',
                ],
                link: 'https://amzn.to/3z9isku'
            }
        ],
        description: '',
        breadcumb: 'Cable Clips Organizer',
        title: 'Cable Clips, Cord Organizer Cable Holder',
        price: '$6.55',
        video: '',
        specs: [
            'General Specifications',
            'Package Contents',
            'Usage'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Inchor' },
                    { label: 'Material', value: 'Not specified' },
                    { label: 'Color', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Quantity', value: '3 Packs' },
                    { label: 'Slot Sizes', value: '7, 5, and 3 slots' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Suitable for', value: 'Car, Home, Office' },
                    { label: 'Cable Types', value: 'USB, Power Cord, etc.' }
                ]
            }
        ],
        rating: 4.6,
    };

} else if (pathname === '/products/electronics/Amazon-Basics-Computer-Monitor-TV-Replacement-Power-Cord') {
    detail = {
        features: [
            '<strong>Universal Compatibility</strong>',
            '<strong>Durable Construction</strong>',
            '<strong>Reliable Power Supply</strong>',
        ],
        descriptions: [
            '<p>Compatible with a wide range of computer monitors and TVs.</p>',
            '<p>Made with high-quality materials for long-lasting performance.</p>',
            '<p>Ensures stable and consistent power delivery to your devices.</p>',
        ],
        images: [
            '/Amazon Basics Computer Monitor TV Replacement Power Cord1.jpg',
            '/Amazon Basics Computer Monitor TV Replacement Power Cord2.jpg',
            '/Amazon Basics Computer Monitor TV Replacement Power Cord3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Amazon Basics Computer Monitor TV Replacement Power Cord',
                imageset: [
                    '/Amazon Basics Computer Monitor TV Replacement Power Cord1.jpg',
                    '/Amazon Basics Computer Monitor TV Replacement Power Cord2.jpg',
                    '/Amazon Basics Computer Monitor TV Replacement Power Cord3.jpg',
                    '/Amazon Basics Computer Monitor TV Replacement Power Cord4.jpg',
                    '/Amazon Basics Computer Monitor TV Replacement Power Cord5.jpg',
                ],
                link: 'https://amzn.to/3MEAX3k'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics Power Cord',
        title: 'Amazon Basics Computer Monitor TV Replacement Power Cord',
        price: '$6.19',
        video: '',
        specs: [
            'General Specifications',
            'Compatibility',
            'Safety Features'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Cable Length', value: 'Not specified' },
                    { label: 'Connector Type', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible Devices', value: 'Computer Monitors, TVs' },
                    { label: 'Power Rating', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Certification', value: 'Not specified' },
                    { label: 'Surge Protection', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/electronics/Carego-Wireless-Ear-Buds') {
    detail = {
        features: [
            '<strong>Long Battery Life</strong>',
            '<strong>Bluetooth 5.3 Technology</strong>',
            '<strong>Waterproof Design</strong>',
        ],
        descriptions: [
            '<p>Enjoy up to 40 hours of playtime with the charging case.</p>',
            '<p>Experience stable and fast connection with the latest Bluetooth 5.3.</p>',
            '<p>Waterproof construction allows use during workouts or in light rain.</p>',
        ],
        images: [
            '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-1.jpg',
            '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-2.jpg',
            '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Carego Wireless Ear Buds',
                imageset: [
                    '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-1.jpg',
                    '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-2.jpg',
                    '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-3.jpg',
                    '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-4.jpg',
                    '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-5.jpg',
                    '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-6.jpg',
                    '/Carego Wireless Ear Buds. Earbuds Bluetooth 5.3 Headphones 40H Playtime LED Display. HiFi Stereo Sound Waterproof in-Ear Earphones with Microphone for iPhoneSamsungAndro-7.jpg',
                ],
                link: 'https://amzn.to/4cWXGm2'
            }
        ],
        description: '',
        breadcumb: 'Carego Wireless Earbuds',
        title: 'Carego Wireless Ear Buds, Bluetooth 5.3 Headphones',
        price: '$9.99',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Battery Life'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Carego' },
                    { label: 'Bluetooth Version', value: '5.3' },
                    { label: 'Waterproof Rating', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Sound Quality', value: 'HiFi Stereo' },
                    { label: 'Microphone', value: 'Built-in' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Playtime', value: 'Up to 40 hours with case' },
                    { label: 'Charging Display', value: 'LED' }
                ]
            }
        ],
        rating: 4.1,
    };
} else if (pathname === '/products/electronics/Cat8-Ethernet-Cable') {
    detail = {
        features: [
            '<strong>High-Speed Performance</strong>',
            '<strong>Durable Construction</strong>',
            '<strong>Versatile Usage</strong>',
        ],
        descriptions: [
            '<p>Supports speeds up to 40Gbps and bandwidth up to 2000MHz.</p>',
            '<p>Made with 26AWG wire and gold-plated RJ45 connectors for reliability.</p>',
            '<p>Suitable for in-wall, outdoor, and weatherproof applications.</p>',
        ],
        images: [
            '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro1.jpg',
            '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro2.jpg',
            '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Cat8 Ethernet Cable, 1.5ft High Speed',
                imageset: [
                    '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro1.jpg',
                    '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro2.jpg',
                    '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro3.jpg',
                    '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro4.jpg',
                    '/Cat8 Ethernet Cable. 1.5ft High Speed 26AWG Cat8 LAN Network Cable. 2000Mhz. 40Gbps. Gold Plated RJ45 Connector. in Wall. Outdoor. UV Resistant. Weatherproof Rated for Ro5.jpg',
                    
                ],
                link: 'https://amzn.to/3MAz5Zc'
            }
        ],
        description: '',
        breadcumb: 'Cat8 Ethernet Cable',
        title: 'Cat8 Ethernet Cable, 1.5ft High Speed LAN Network Cable',
        price: '$3.99',
        video: '',
        specs: [
            'General Specifications',
            'Performance',
            'Durability'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Vabogu' },
                    { label: 'Cable Category', value: 'Cat8' },
                    { label: 'Length', value: '1.5ft' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Speed', value: 'Up to 40Gbps' },
                    { label: 'Bandwidth', value: '2000MHz' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Wire Gauge', value: '26AWG' },
                    { label: 'Connector Plating', value: 'Gold' },
                    { label: 'Weather Resistance', value: 'UV Resistant, Weatherproof' }
                ]
            }
        ],
        rating: 4.7,
    };





} else if (pathname === '/products/electronics/JVC-Gumy-in-Ear-Earbud-Headphones') {
    detail = {
        features: [
            '<strong>Comfortable Fit</strong>',
            '<strong>Quality Sound</strong>',
            '<strong>Compact Design</strong>',
        ],
        descriptions: [
            '<p>Soft rubber body provides a comfortable and secure fit for extended listening.</p>',
            '<p>Delivers clear and balanced audio for an enjoyable listening experience.</p>',
            '<p>Lightweight and compact design perfect for on-the-go use.</p>',
        ],
        images: [
            '/JVC Gumy in Ear Earbud Headphones-1.jpg',
            '/JVC Gumy in Ear Earbud Headphones-2.jpg',
            '/JVC Gumy in Ear Earbud Headphones-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'JVC Gumy in Ear Earbud Headphones',
                imageset: [
                    '/JVC Gumy in Ear Earbud Headphones-1.jpg',
                    '/JVC Gumy in Ear Earbud Headphones-2.jpg',
                    '/JVC Gumy in Ear Earbud Headphones-3.jpg',
                    '/JVC Gumy in Ear Earbud Headphones-4.jpg',
                    '/JVC Gumy in Ear Earbud Headphones-5.jpg',
                ],
                link: 'https://amzn.to/3TXbXXX'
            }
        ],
        description: '',
        breadcumb: 'JVC Gumy Earbuds',
        title: 'JVC Gumy in Ear Earbud Headphones',
        price: '$7.53',
        video: '',
        specs: [
            'General Specifications',
            'Audio Features',
            'Design'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'JVC' },
                    { label: 'Model', value: 'Gumy' },
                    { label: 'Type', value: 'In-ear' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Frequency Response', value: 'Not specified' },
                    { label: 'Impedance', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Cable Length', value: 'Not specified' },
                    { label: 'Color Options', value: 'Not specified' }
                ]
            }
        ],
        rating: 4.4,
    };


} else if (pathname === '/products/electronics/memzuoix-Medium-Mouse') {
    detail = {
        features: [
            '<strong>Wireless Convenience</strong>',
            '<strong>Precise Control</strong>',
            '<strong>Plug and Play</strong>',
        ],
        descriptions: [
            '<p>2.4G wireless technology provides a stable connection up to 33 feet.</p>',
            '<p>1200 DPI optical tracking offers accurate cursor control.</p>',
            '<p>Simple setup with included USB receiver, no drivers needed.</p>',
        ],
        images: [
            '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-1.jpg',
            '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-2.jpg',
            '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'memzuoix 2.4G Wireless Mouse',
                imageset: [
                    '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-1.jpg',
                    '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-2.jpg',
                    '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-3.jpg',
                    '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-4.jpg',
                    '/memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver-5.jpg',
                ],
                link: 'https://amzn.to/3TXbXXX'
            }
        ],
        description: '',
        breadcumb: 'memzuoix Wireless Mouse',
        title: 'memzuoix 2.4G Wireless Mouse, 1200 DPI Computer Wireless Mouse with USB Receiver',
        price: '$15.99',
        video: '',
        specs: [
            'General Specifications',
            'Performance',
            'Compatibility'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'memzuoix' },
                    { label: 'Connectivity', value: '2.4G Wireless' },
                    { label: 'DPI', value: '1200' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Wireless Range', value: 'Up to 33 feet' },
                    { label: 'Battery Type', value: 'Not specified' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Operating Systems', value: 'Not specified' },
                    { label: 'Plug and Play', value: 'Yes' }
                ]
            }
        ],
        rating: 4.5,
    };




} else if (pathname === '/products/electronics/PowerBear-4K-HDMI-Cable-6-ft') {
    detail = {
        features: [
            '<strong>High-Speed Performance</strong>',
            '<strong>Durable Construction</strong>',
            '<strong>Wide Compatibility</strong>',
        ],
        descriptions: [
            '<p>Supports 4K @ 60Hz, Ultra HD, 2K, and 1080P for crystal-clear visuals.</p>',
            '<p>Braided nylon cable and gold-plated connectors ensure long-lasting reliability.</p>',
            '<p>Compatible with a wide range of devices including laptops, gaming consoles, and streaming devices.</p>',
        ],
        images: [
            '/PowerBear 4K HDMI Cable 6 ft 1.jpg',
            '/PowerBear 4K HDMI Cable 6 ft 2.jpg',
            '/PowerBear 4K HDMI Cable 6 ft 3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'PowerBear 4K HDMI Cable 6 ft [2 Pack]',
                imageset: [
                    '/PowerBear 4K HDMI Cable 6 ft 1.jpg',
                    '/PowerBear 4K HDMI Cable 6 ft 2.jpg',
                    '/PowerBear 4K HDMI Cable 6 ft 3.jpg',
                    '/PowerBear 4K HDMI Cable 6 ft 4.jpg',
                    '/PowerBear 4K HDMI Cable 6 ft 5.jpg',
                ],
                link: 'https://amzn.to/3TXbXXX'
            }
        ],
        description: '',
        breadcumb: 'PowerBear HDMI Cable',
        title: 'PowerBear 4K HDMI Cable 6 ft [2 Pack] High Speed, Braided Nylon & Gold Connectors',
        price: '$7.99',
        video: '',
        specs: [
            'General Specifications',
            'Performance',
            'Compatibility'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'PowerBear' },
                    { label: 'Cable Length', value: '6 ft' },
                    { label: 'Quantity', value: '2 Pack' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Resolution Support', value: '4K @ 60Hz, Ultra HD, 2K, 1080P' },
                    { label: 'ARC & CL3 Rated', value: 'Yes' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Compatible Devices', value: 'Laptop, Monitor, PS5, PS4, Xbox One, Fire TV, Apple TV' },
                    { label: 'Connector Type', value: 'HDMI' }
                ]
            }
        ],
        rating: 4.7,
    };



} else if (pathname === '/products/electronics/aaaaa-aaaa') {
    detail = {
        features: [
            '<strong>description1</strong>',
            '<strong>description2</strong>',
            '<strong>description3</strong>',
        ],
        descriptions: [
            '<p>description1</p>',
            '<p>description2</p>',
            '<p>description3</p>',
        ],
        images: [
            '/aaaaa',
            '/aaaaa',
            '/aaaaa',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-black mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'aaaaa',  
                imageset: [
                    '/aaaaa',
                    '/aaaaa',
                    '/aaaaa',
                    '/aaaaa',
                    '/aaaaa',
                ],
                link: 'https://amzn.to/3TXbXXX'
            }
        ],
        description: '',
        breadcumb: 'aaaaa',
        title: 'aaaaa',
        price: 'price',
        video: '',
        specs: [
            'zzzz',
            'zzzz',
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'aaaaa', value: 'aaaaa' },
                    { label: 'aaaaa', value: 'aaaaa' },
                    { label: 'aaaaa', value: 'aaaaa' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'aaaaa', value: 'aaaaa' },
                    { label: 'aaaaa', value: 'aaaaa' }
                ]
            },
        ],
        rating: 11111,
    };



} else {
    detail = {
        features: [],
        descriptions: [],
        images: [],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '',
                subtitle: '',
                imageset: [],
                link: ''
            }
        ],
        description: '',
        breadcumb: '',
        title: '',
        price: '',
        video: '',
        specs: [],
        values: [
            {
                type: '',
                content: ''
            }
        ],
        rating: 0,
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


                            {detail.video && (
                                <div className="w-full border-r-8 border-slate-100 flex justify-center items-center my-8">
                                    <div className="w-full max-w-5xl">
                                        <ReactPlayer
                                            url={detail.video}
                                            controls={true}
                                            light={false}
                                            pip={true}
                                            width="100%"
                                            height="auto"
                                            style={{ aspectRatio: '16 / 9' }}
                                        />
                                    </div>
                                </div>
                            )}




                            
                        {detail.features.map((feature, index) => (
                            <React.Fragment key={index}>
                            <motion.div 
                            style={{ justifyContent: "flex-start" }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1}}
                            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                            viewport= {{ once: true, amount: 0.8}}
                            >
                            <div className="flex" key={index}>
                                {index % 2 === 0 ? (
                                    <div className="flex w-full h-[500px] py-10"> {/* Set a fixed height */}
                                        <div className="flex flex-col basis-1/2 justify-center pl-10 overflow-y-auto"> {/* Add overflow-y-auto */}
                                            {feature && (
                                                <div className="p-5">
                                                    <h1 className="text-xl md:text-3xl text-right" dangerouslySetInnerHTML={{ __html: feature }}></h1>
                                                </div>
                                            )}
                                            {detail.descriptions[index] && (
                                                <div className="p-5 text-base md:text-2xl text-right" dangerouslySetInnerHTML={{ __html: detail.descriptions[index] }}></div>
                                            )}
                                        </div>
                                        {detail.images[index] && (
                                            <div className="basis-1/2 relative overflow-hidden"> {/* Use relative positioning and overflow hidden */}
                                                <Image 
                                                    src={detail.images[index]} 
                                                    alt={`Feature ${index + 1} Image`} 
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="object-center"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex w-full h-[500px] py-10"> {/* Set a fixed height */}
                                        {detail.images[index] && (
                                            <div className="basis-1/2 relative overflow-hidden"> {/* Use relative positioning and overflow hidden */}
                                                <Image 
                                                    src={detail.images[index]} 
                                                    alt={`Feature ${index + 1} Image`} 
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="object-center"
                                                />
                                            </div>
                                        )}
                                        <div className="flex flex-col basis-1/2 justify-center pr-10 overflow-y-auto"> {/* Add overflow-y-auto */}
                                            {feature && (
                                                <div className="p-5">
                                                    <h1 className="text-xl md:text-3xl text-left" dangerouslySetInnerHTML={{ __html: feature }}></h1>
                                                </div>
                                            )}
                                            {detail.descriptions[index] && (
                                                <div className="p-5 text-base md:text-2xl" dangerouslySetInnerHTML={{ __html: detail.descriptions[index] }}></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            </motion.div>
                            </React.Fragment>
                        ))}




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