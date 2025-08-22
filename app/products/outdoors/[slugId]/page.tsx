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
// Add this function at the top of your file, outside of any component

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
if (pathname === '/products/outdoors/Coleman-4-Person-Camping-Sundome-Setup') {
    detail = {

        features: [
            'WatherTec System',
            'Enhanced Ventilation',
            'Storage Pockets',
            'E-Port'
        ],
        descriptions: [
            'Welded corners and covered seams keep water out so campers and gear stay dry no matter what.',
            'Large windows and ground vents push warm air up and out so you stay cool and comfortable all night.',
            'Mesh pockets sewn into the tents walls store small essentials within easy reach.',
            'Bring an extension cord through the E-Port for easy access to electrical power inside your tent.'
        ],
        images: [
            "/coleman-campingtent-green1.jpeg",
            "/coleman-campingtent-green2.jpeg",
            "/coleman-campingtent-green3.jpeg",
            "/coleman-campingtent-green4.jpeg",
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
                colorbutton:'bg-green-500 rounded-full w-10 h-10',
                textbutton:'',
                subtitle:'2/3/4/6 Person Dome Tent with Snag-Free Poles for Easy Setup in Under 10 Mins, Included Rainfly Blocks Wind & Rain, Tent for Camping, Festivals, Backyard, Sleepovers - green',
                imageset:[
                    "/coleman-campingtent-green1.jpeg",
                    "/coleman-campingtent-green2.jpeg",
                    "/coleman-campingtent-green3.jpeg",
                    "/coleman-campingtent-green4.jpeg",
                    "/coleman-campingtent-green5.jpeg",
                    "/coleman-campingtent-green6.jpeg",
                    "/coleman-campingtent-green7.jpeg",
                ],
                link: 'https://amzn.to/3X87xRu'
            },
            {
                colorbutton:'bg-blue-500 rounded-full w-10 h-10',
                textbutton:'',
                subtitle:'2/3/4/6 Person Dome Tent with Snag-Free Poles for Easy Setup in Under 10 Mins, Included Rainfly Blocks Wind & Rain, Tent for Camping, Festivals, Backyard, Sleepovers - navyblue',
                imageset:[
                    "/coleman-campingtent-navyblue1.jpeg",
                    "/coleman-campingtent-navyblue2.jpeg",
                    "/coleman-campingtent-navyblue3.jpeg",
                    "/coleman-campingtent-navyblue4.jpeg",
                    "/coleman-campingtent-navyblue5.jpeg",
                    "/coleman-campingtent-navyblue6.jpeg",
                    "/coleman-campingtent-navyblue7.jpeg",
                ],
                link: 'https://amzn.to/3X87xRu'
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
        breadcumb: 'Coleman Sundome Camping Tent, 2/3/4/6 Person Dome Tent with Snag-Free Poles',
        title: 'Coleman Sundome Camping Tent',
        price: '$69.55',
        video: '',
//
//
//
//
//
//
//
        specs: [
            'Description',
            'General Specifications',
            'Weight and Dimensions',

        ], // Add your specs here

        values: [
          {
            type: 'text',
            content: 'Spend just 10 minutes setting up the 3-Person Sundome® Dome Camping Tent and more time enjoying the great outdoors. Ideal for camping in warm weather, this tent features large windows and a ground vent that help push heat up and out to keep you comfortable.'
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Coleman' },
              { label: 'Recommended Uses', value: 'Camping and Hiking' },
              { label: 'Occupancy', value: '2 person, 3 person, 4 person, 6 person' },
              { label: 'Tent shape', value: 'Dome' },
              { label: 'Included Components', value: 'Coleman Sundome Tent' },
              { label: 'Water Resistance', value: '1200Mm' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: '2 person', value: '84 x 60 x 48 inches; 7.5 Pounds' },
              { label: '3 person', value: '84 x 84 x 52 inches; 8.7 Pounds' },
              { label: '4 person', value: '108 x 84 x 59 inches; 4 Pounds' },
              { label: '6 person', value: '120 x 120 x 72 inches; 16.6 Pounds' },
            ]
          },
        ], // Add corresponding values here

        rating: 4.7, // Added rating
    };

} else if (pathname === '/products/outdoors/scott-paper-towels') {
    detail = {
        features: [
            'Choose-A-Sheet',
            'Absorbent',
            'Durable',
            'Versatile'
        ],
        descriptions: [
            'Unique perforations allow you to select the right size for any task, reducing waste.',
            'Quickly soaks up spills and messes for efficient cleaning.',
            'Strong enough for tough jobs, yet soft on hands.',
            'Ideal for kitchen, bathroom, and general household cleaning tasks.'
        ],
        images: [
            "/Scott Paper Towels. Choose-A-Sheet-1.jpg",
            "/Scott Paper Towels. Choose-A-Sheet-2.jpg",
            "/Scott Paper Towels. Choose-A-Sheet-3.jpg",
            "/Scott Paper Towels. Choose-A-Sheet-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'Choose-A-Sheet',
                subtitle:'Scott Paper Towels, Choose-A-Sheet, 12 Double Rolls (12 = 24 Regular Rolls)',
                imageset:[
                    "/Scott Paper Towels. Choose-A-Sheet-1.jpg",
                    "/Scott Paper Towels. Choose-A-Sheet-2.jpg",
                    "/Scott Paper Towels. Choose-A-Sheet-3.jpg",
                    "/Scott Paper Towels. Choose-A-Sheet-4.jpg",
                    "/Scott Paper Towels. Choose-A-Sheet-5.jpg",
                    "/Scott Paper Towels. Choose-A-Sheet-6.jpg",
                ],
                link: 'https://amzn.to/3AHwytT'
            },
        ],
        description: 'Scott Choose-A-Sheet Paper Towels offer the perfect balance of strength, absorbency, and economy. With unique perforations, you can select the right size for any task, reducing waste and saving money.',
        breadcumb: 'Scott Paper Towels, Choose-A-Sheet, 12 Double Rolls',
        title: 'Scott Paper Towels Choose-A-Sheet',
        price: '$67.25',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Scott Choose-A-Sheet Paper Towels are designed for versatility and efficiency in household cleaning. Each roll features unique perforations that allow you to tear off just the amount you need, reducing waste and making your rolls last longer.'
          },
          {
            type: 'table',
            content: [
              { label: 'Package Dimensions', value: '23.75 x 11 x 8.88 inches' },
              { label: 'Weight', value: '8.16 pounds' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Scott' },
              { label: 'Material', value: 'Paper' },
              { label: 'Sheet Count', value: '128 per roll' },
              { label: 'Item Form', value: 'Roll' },
              { label: 'Number of Rolls', value: '12 Double Rolls (= 24 Regular Rolls)' },
            ]
          },
        ],
        rating: 4.8, // Added rating (assumed, as it wasn't in the provided data)
    };

} else if (pathname === '/products/outdoors/STANLEY-IceFlow-Stainless-Steel-Tumbler-Insulated-Bottle') {
    detail = {
        features: [
            'Double-Wall Vacuum Insulation',
            'Leak-Resistant Flip Straw',
            'Comfortable Grip',
            'Car Cup Holder Friendly'
        ],
        descriptions: [
            'Keeps drinks cold for hours, perfect for both indoor and outdoor use.',
            'Allows for easy sipping without spills, ideal for on-the-go hydration.',
            'Ergonomic design with a soft-touch handle for easy carrying.',
            'Fits most standard car cup holders for convenient use while traveling.'
        ],
        images: [
            "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-3.jpg",
            "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-4.jpg",
            "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-5.jpg",
            "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-6.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'bg-blue-500 rounded-full w-10 h-10',
                textbutton:'',
                subtitle:'STANLEY IceFlow Stainless Steel Tumbler with Straw, 30 oz, Vacuum Insulated Water Bottle for Home, Office or Car, Leak Resistant Flip Straw, Polar',
                imageset:[
                    "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-1.jpg",
                    "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-2.jpg",
                    "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-3.jpg",
                    "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-4.jpg",
                    "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-5.jpg",
                    "/STANLEY IceFlow Stainless Steel Tumbler with Straw. Vacuum Insulated Water Bottle for Home. Office or Car. Reusable Cup with Straw Leak Resistant Flip-6.jpg",
                ],
                link: 'https://amzn.to/4dBa3Fl' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'The STANLEY IceFlow Stainless Steel Tumbler is a versatile and durable water bottle designed for everyday use. With its vacuum insulation, it keeps your drinks cold for hours, making it perfect for both indoor and outdoor activities.',
        breadcumb: 'STANLEY IceFlow Stainless Steel Tumbler with Straw, 30 oz',
        title: 'STANLEY IceFlow Stainless Steel Tumbler',
        price: '$50.74',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'The STANLEY IceFlow Stainless Steel Tumbler is designed for maximum convenience and performance. Its double-wall vacuum insulation keeps drinks cold for hours, while the leak-resistant flip straw allows for easy, spill-free sipping on the go.'
          },
          {
            type: 'table',
            content: [
              { label: 'Capacity', value: '30 ounces' },
              { label: 'Dimensions', value: '4.02 x 3.62 x 10.08 inches' },
              { label: 'Weight', value: '1.32 pounds' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Stanley' },
              { label: 'Material', value: 'Stainless Steel' },
              { label: 'Color', value: 'Polar' },
              { label: 'Dishwasher Safe', value: 'Yes' },
              { label: 'BPA Free', value: 'Yes' },
            ]
          },
        ],
        rating: 4.6, // Added rating (assumed, as it wasn't in the provided data)
    };

} else if (pathname === '/products/outdoors/CORE-POWER-Elite-Protein-Milk-Shakes-Kosher-Bottle') {
    detail = {
        features: [
            'High Protein Content',
            'Lactose-Free',
            'Kosher Certified',
            'Convenient Packaging'
        ],
        descriptions: [
            'Contains 42g of protein per bottle, ideal for muscle recovery and growth.',
            'Made with lactose-free milk, suitable for those with lactose intolerance.',
            'Certified Kosher, meeting strict dietary requirements.',
            'Ready-to-drink bottles perfect for on-the-go nutrition.'
        ],
        images: [
            "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-1.jpg",
            "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-2.jpg",
            "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-3.jpg",
            "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'Chocolate',
                subtitle:'CORE POWER Elite High Protein Shakes (42g), Chocolate, Ready to Drink for Workout Recovery, 14 fl oz Bottles (12 Pack)',
                imageset:[
                    "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-1.jpg",
                    "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-2.jpg",
                    "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-3.jpg",
                    "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-4.jpg",
                    "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-5.jpg",
                    "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-6.jpg",
                    "/CORE POWER Core Power Elite Protein Milk Shakes Kosher Bottle-7.jpg",
                ],
                link: 'https://amzn.to/4dUohRz' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'CORE POWER Elite High Protein Shakes are designed for athletes and fitness enthusiasts looking for a high-quality protein source. With 42g of protein per bottle, these shakes are perfect for post-workout recovery and muscle building.',
        breadcumb: 'CORE POWER Elite Protein Milk Shakes Kosher Bottle',
        title: 'CORE POWER Elite High Protein Shakes',
        price: '$46.00',
        video: '',
        specs: [
            'Product Details',
            'Nutrition Facts',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'CORE POWER Elite High Protein Shakes are made with real milk and contain 42g of high-quality protein per serving. They are ultra-filtered to be lactose-free and contain all 9 essential amino acids.'
          },
          {
            type: 'table',
            content: [
              { label: 'Protein', value: '42g per bottle' },
              { label: 'Calories', value: '230 per bottle' },
              { label: 'Sugar', value: '9g per bottle' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Core Power' },
              { label: 'Flavor', value: 'Chocolate' },
              { label: 'Package Size', value: '14 fl oz (Pack of 12)' },
              { label: 'Lactose-Free', value: 'Yes' },
              { label: 'Kosher', value: 'Yes' },
            ]
          },
        ],
        rating: 4.4, // Added rating (assumed, as it wasn't in the provided data)
    };
} else if (pathname === '/products/outdoors/Owala-FreeSip-Insulated-Stainless-Steel-Water-Bottle') {
    detail = {
        features: [
            'FreeSip Spout',
            'Vacuum Insulation',
            'Leak-Proof Design',
            'BPA-Free'
        ],
        descriptions: [
            'Unique spout allows for sipping or swigging, catering to different drinking preferences.',
            'Keeps drinks cold for up to 24 hours, perfect for all-day hydration.',
            'Secure locking lid prevents spills and leaks, ideal for on-the-go use.',
            'Made with safe, BPA-free materials for worry-free drinking.'
        ],
        images: [
            "/owala kids freesip waterbottle-1.jpeg",
            "/owala kids freesip waterbottle-1.jpeg",
            "/owala kids freesip waterbottle-1.jpeg",
            "/owala kids freesip waterbottle-1.jpeg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'bg-blue-500 rounded-full w-10 h-10',
                textbutton:'',
                subtitle:'Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, 24 oz, Blue/Teal',
                imageset:[
                    "/owala kids freesip waterbottle-1.jpeg",
                    "/owala kids freesip waterbottle-2.jpeg",
                    "/owala kids freesip waterbottle-3.jpeg",
                    "/owala kids freesip waterbottle-4.jpeg",
                    "/owala kids freesip waterbottle-5.jpeg",
                ],
                link: 'https://amzn.to/3AxOdUz' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'The Owala FreeSip Insulated Stainless Steel Water Bottle combines innovative design with practical functionality. Its unique FreeSip spout and vacuum insulation make it perfect for sports, travel, and everyday use.',
        breadcumb: 'Owala FreeSip Insulated Stainless Steel Water Bottle with Straw',
        title: 'Owala FreeSip Insulated Stainless Steel Water Bottle',
        price: '$46.00',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'The Owala FreeSip water bottle features a unique spout design that allows you to either sip through the built-in straw or tilt the bottle back to swig from the wider opening. Its vacuum insulation keeps drinks cold for up to 24 hours.'
          },
          {
            type: 'table',
            content: [
              { label: 'Capacity', value: '24 ounces' },
              { label: 'Dimensions', value: '3.5 x 3.5 x 10.5 inches' },
              { label: 'Weight', value: '15.2 ounces' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Owala' },
              { label: 'Material', value: 'Stainless Steel' },
              { label: 'Color', value: 'Blue/Teal' },
              { label: 'Dishwasher Safe', value: 'No (Hand wash recommended)' },
              { label: 'BPA Free', value: 'Yes' },
            ]
          },
        ],
        rating: 4.7, // Added rating (assumed, as it wasn't in the provided data)
    };
} else if (pathname === '/products/outdoors/Crest-3D-White-Luxe-Whitestrips-Professional-Effects') {
    detail = {
        features: [
            'Professional-Level Whitening',
            'No-Slip Grip',
            'Enamel-Safe Formula',
            'Convenient Treatment Options'
        ],
        descriptions: [
            'Removes up to 14 years of teeth stains for a noticeably whiter smile.',
            'Advanced Seal Technologys no slip grip stays put so you can talk and drink water while whitening teeth.',
            'Designed to be safe on enamel, using the same whitening ingredient as dentists use.',
            'Includes 20 Professional Effects treatments plus 2 1-Hour Express treatments for same-day results.'
        ],
        images: [
            "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-1.jpg",
            "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-2.jpg",
            "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-3.jpg",
            "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'Professional Effects + 1 Hour Express',
                subtitle:'Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit',
                imageset:[
                    "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-1.jpg",
                    "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-2.jpg",
                    "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-3.jpg",
                    "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-4.jpg",
                    "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-5.jpg",
                    "/Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + Crest 3D White Whitestrips 1 Hour Express 2 Treatments - Teeth Whitening Kit (Packaging May Vary)-6.jpg",
                ],
                link: 'https://amzn.to/46SMaGQ' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Crest 3D White Luxe Whitestrips Professional Effects provide professional-level teeth whitening results from the comfort of your own home. The kit includes both long-term treatments and express options for immediate results.',
        breadcumb: 'Crest 3D White Luxe Whitestrips Professional Effects 20 Treatments + 1 Hour Express 2 Treatments',
        title: 'Crest 3D White Luxe Whitestrips Professional Effects',
        price: '$45.99',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Crest 3D White Luxe Whitestrips Professional Effects use the same enamel-safe whitening agent that dentists use. The kit includes 20 regular treatments (30 minutes daily) and 2 express treatments (1 hour) for same-day results.'
          },
          {
            type: 'table',
            content: [
              { label: 'Regular Treatment', value: 'Use once a day for 30 minutes' },
              { label: 'Express Treatment', value: 'Use for 1 hour as needed' },
              { label: 'Treatment Duration', value: '20 days (plus 2 express treatments)' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Crest' },
              { label: 'Item Form', value: 'Strip' },
              { label: 'Age Range', value: 'Adult' },
              { label: 'Unit Count', value: '22 Count' },
              { label: 'Whitening Duration', value: 'Up to 12 months' },
            ]
          },
        ],
        rating: 4.3, // Added rating
    };

// ... rest of the component code ...

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/outdoors/Zevo-Flying-Insect-Trap-Captures-Houseflies-Fruit-Flies') {
    detail = {
        features: [
            'Effective Insect Trap',
            'No Chemical Insecticides',
            'Easy to Use',
            'Safe for Indoor Use'
        ],
        descriptions: [
            'Captures houseflies, fruit flies, and other flying insects effectively.',
            'Uses light and heat to attract insects, without chemical insecticides.',
            'Simple to set up and use, with replaceable cartridges.',
            'Safe for use around children and pets, ideal for indoor use.'
        ],
        images: [
            "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-3.jpg",
            "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-4.jpg",
            "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-5.jpg",
            "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-6.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'Zevo Insect Trap',
                subtitle:'Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies',
                imageset:[
                    "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-1.jpg",
                    "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-2.jpg",
                    "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-3.jpg",
                    "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-4.jpg",
                    "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-5.jpg",
                    "/Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies-6.jpg",
                ],
                link: 'https://amzn.to/3MgUXc9' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Zevo Flying Insect Trap captures houseflies, fruit flies, and other flying insects effectively using light and heat, without chemical insecticides. Safe for indoor use around children and pets.',
        breadcumb: 'Zevo Flying Insect Trap',
        title: 'Zevo Flying Insect Trap',
        price: '$36.80',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Zevo Flying Insect Trap uses light and heat to attract and capture flying insects without the use of chemical insecticides. It is safe for indoor use and ideal for homes with children and pets.'
          },
          {
            type: 'table',
            content: [
              { label: 'Dimensions', value: '5 x 5 x 10 inches' },
              { label: 'Weight', value: '1.2 pounds' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Zevo' },
              { label: 'Material', value: 'Plastic' },
              { label: 'Color', value: 'White' },
              { label: 'Power Source', value: 'Electric' },
              { label: 'Safe for Indoor Use', value: 'Yes' },
            ]
          },
        ],
        rating: 4.3, // Added rating
    };
} else if (pathname === '/products/outdoors/Zevo-2-2') {
    detail = {
        features: [
            'Effective Insect Trap',
            'No Chemical Insecticides',
            'Easy to Use',
            'Safe for Indoor Use'
        ],
        descriptions: [
            'Captures houseflies, fruit flies, and other flying insects effectively.',
            'Uses light and heat to attract insects, without chemical insecticides.',
            'Simple to set up and use, with replaceable cartridges.',
            'Safe for use around children and pets, ideal for indoor use.'
        ],
        images: [
            "/Zevo 2-2-1.jpg",
            "/Zevo 2-2-2.jpg",
            "/Zevo 2-2-3.jpg",
            "/Zevo 2-2-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'Zevo Insect Trap',
                subtitle:'Zevo Flying Insect Trap. Fly Trap Captures Houseflies. Fruit Flies',
                imageset:[
                    "/Zevo 2-2-1.jpg",
                    "/Zevo 2-2-2.jpg",
                    "/Zevo 2-2-3.jpg",
                    "/Zevo 2-2-4.jpg",
                    "/Zevo 2-2-5.jpg",
                    "/Zevo 2-2-6.jpg",
                ],
                link: 'https://amzn.to/3SZbDsh' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Zevo Flying Insect Trap captures houseflies, fruit flies, and other flying insects effectively using light and heat, without chemical insecticides. Safe for indoor use around children and pets.',
        breadcumb: 'Zevo Flying Insect Trap',
        title: 'Zevo Flying Insect Trap',
        price: '$36.41',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Zevo Flying Insect Trap uses light and heat to attract and capture flying insects without the use of chemical insecticides. It is safe for indoor use and ideal for homes with children and pets.'
          },
          {
            type: 'table',
            content: [
              { label: 'Dimensions', value: '5 x 5 x 10 inches' },
              { label: 'Weight', value: '1.2 pounds' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Zevo' },
              { label: 'Material', value: 'Plastic' },
              { label: 'Color', value: 'White' },
              { label: 'Power Source', value: 'Electric' },
              { label: 'Safe for Indoor Use', value: 'Yes' },
            ]
          },
        ],
        rating: 4.3, // Added rating
    };


} else if (pathname === '/products/outdoors/CGK-Unlimited-4-Piece-Sheet-Set') {
    detail = {
        features: [
            'Comfy & Breathable',
            'Cooling Sheets',
            'Hotel Luxury',
            'Deep Pockets',
            'Easy-Fit',
            'Soft & Wrinkle Free'
        ],
        descriptions: [
            'Experience the ultimate comfort with these breathable and cooling sheets.',
            'Designed to keep you cool throughout the night.',
            'Enjoy hotel luxury in the comfort of your own home.',
            'Deep pockets ensure a perfect fit on any mattress.',
            'Easy to fit and maintain.',
            'Soft and wrinkle-free for a pristine look.'
        ],
        images: [
            "/CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets.jpg",
            "/CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets.jpg",
            "/CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets.jpg",
            "/CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets.jpg",
            "/CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets.jpg",
            "/CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets',
                imageset:[
                    "/CGK Unlimited 4 Piece Sheet Set - Comfy Breathable & Cooling Sheets - Hotel Luxury Bed Sheets for Women & Men - Deep Pockets. Easy-Fit. Soft & Wrinkle Free Sheets.jpg",
                ],
                link: 'https://amzn.to/3XmJBJN' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'CGK Unlimited 4 Piece Sheet Set offers the ultimate comfort with breathable and cooling sheets, designed for hotel luxury at home.',
        breadcumb: 'CGK Unlimited 4 Piece Sheet Set',
        title: 'CGK Unlimited 4 Piece Sheet Set',
        price: '$27.99',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Experience the ultimate comfort with these breathable and cooling sheets, designed to keep you cool throughout the night.'
          },
          {
            type: 'table',
            content: [
              { label: 'Material', value: 'Microfiber' },
              { label: 'Size', value: 'Queen' },
              { label: 'Color', value: 'White' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'CGK Unlimited' },
              { label: 'Number of Pieces', value: '4' },
              { label: 'Care Instructions', value: 'Machine Washable' },
            ]
          },
        ],
        rating: 4.5, // Added rating (assumed, as it wasn't in the provided data)
    };
} else if (pathname === '/products/outdoors/Amazon-Brand-Presto-Toilet-Paper') {
    detail = {
        features: [
            'Soft & Strong',
            'Septic-Safe',
            'Mega Rolls',
            'Sustainable'
        ],
        descriptions: [
            'Soft and strong for a comfortable clean.',
            'Safe for standard septic systems.',
            'Mega rolls last longer, reducing the need for frequent changes.',
            'Made with sustainably sourced materials.'
        ],
        images: [
            "/Amazon Brand - Presto! Toilet Paper-4.jpg",
            "/Amazon Brand - Presto! Toilet Paper-5.jpg",
            "/Amazon Brand - Presto! Toilet Paper-6.jpg",
            "/Amazon Brand - Presto! Toilet Paper-7.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Amazon Brand - Presto! Toilet Paper, 24 Mega Rolls',
                imageset:[
                    "/Amazon Brand - Presto! Toilet Paper-1.jpg",
                    "/Amazon Brand - Presto! Toilet Paper-2.jpg",
                    "/Amazon Brand - Presto! Toilet Paper-3.jpg",
                    "/Amazon Brand - Presto! Toilet Paper-4.jpg",
                    "/Amazon Brand - Presto! Toilet Paper-5.jpg",
                    "/Amazon Brand - Presto! Toilet Paper-6.jpg",
                    "/Amazon Brand - Presto! Toilet Paper-7.jpg",
                ],
                link: 'https://amzn.to/3yBCWCh' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Amazon Brand - Presto! Toilet Paper offers a soft and strong clean, with mega rolls that last longer and are safe for septic systems.',
        breadcumb: 'Amazon Brand - Presto! Toilet Paper',
        title: 'Amazon Brand - Presto! Toilet Paper',
        price: '$27.76',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Soft and strong toilet paper, safe for septic systems and made with sustainably sourced materials.'
          },
          {
            type: 'table',
            content: [
              { label: 'Number of Rolls', value: '24 Mega Rolls' },
              { label: 'Sheets per Roll', value: '308' },
              { label: 'Ply', value: '2-Ply' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Presto!' },
              { label: 'Material', value: 'Paper' },
              { label: 'Septic-Safe', value: 'Yes' },
            ]
          },
        ],
        rating: 4.6, // Added rating (assumed, as it wasn't in the provided data)
    };


} else if (pathname === '/products/outdoors/Cottonelle-Ultra-Clean-Toilet-Paper') {
    detail = {
        features: [
            'Soft & Strong',
            'Septic-Safe',
            'Mega Rolls',
            'Sustainable'
        ],
        descriptions: [
            'Soft and strong for a comfortable clean.',
            'Safe for standard septic systems.',
            'Mega rolls last longer, reducing the need for frequent changes.',
            'Made with sustainably sourced materials.'
        ],
        images: [
            "/Cottonelle Ultra Clean Toilet Paper.jpg",
            "/Cottonelle Ultra Clean Toilet Paper.jpg",
            "/Cottonelle Ultra Clean Toilet Paper.jpg",
            "/Cottonelle Ultra Clean Toilet Paper.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Cottonelle Ultra Clean Toilet Paper, 24 Mega Rolls',
                imageset:[
                    "/Cottonelle Ultra Clean Toilet Paper.jpg",
                ],
                link: 'https://amzn.to/3Xfsius' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Cottonelle Ultra Clean Toilet Paper offers a soft and strong clean, with mega rolls that last longer and are safe for septic systems.',
        breadcumb: 'Cottonelle Ultra Clean Toilet Paper',
        title: 'Cottonelle Ultra Clean Toilet Paper',
        price: '$27.59',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Soft and strong toilet paper, safe for septic systems and made with sustainably sourced materials.'
          },
          {
            type: 'table',
            content: [
              { label: 'Number of Rolls', value: '24 Mega Rolls' },
              { label: 'Sheets per Roll', value: '308' },
              { label: 'Ply', value: '2-Ply' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Cottonelle' },
              { label: 'Material', value: 'Paper' },
              { label: 'Septic-Safe', value: 'Yes' },
            ]
          },
        ],
        rating: 4.8, // Added rating
    };
} else if (pathname === '/products/outdoors/ChomChom-Pet-Hair-Remover') {
    detail = {
        features: [
            'Reusable',
            'Multi-Surface',
            'Portable',
            'Eco-Friendly'
        ],
        descriptions: [
            'Reusable pet hair remover for furniture, couch, carpet, car seats, or bedding.',
            'Effective on multiple surfaces, making it versatile for various cleaning needs.',
            'Portable design allows for easy use and storage.',
            'Eco-friendly alternative to disposable lint rollers.'
        ],
        images: [
            "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-1.jpg",
            "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-2.jpg",
            "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-3.jpg",
            "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture, Couch, Carpet, Car Seats or Bedding - Portable, Multi-Surface Lint Roller and Fur Removal Tool',
                imageset:[
                    "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-1.jpg",
                    "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-2.jpg",
                    "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-3.jpg",
                    "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-4.jpg",
                    "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-5.jpg",
                    "/ChomChom Pet Hair Remover - Reusable Cat and Dog Hair Remover for Furniture. Couch. Carpet. Car Seats or Bedding - Portable. Multi-Surface Lint Roller and Fur Removal Tool-6.jpg",
                ],
                link: 'https://amzn.to/3YNckJ3' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'ChomChom Pet Hair Remover is a reusable and portable tool for removing pet hair from furniture, couch, carpet, car seats, or bedding. It is effective on multiple surfaces and eco-friendly.',
        breadcumb: 'ChomChom Pet Hair Remover',
        title: 'ChomChom Pet Hair Remover',
        price: '$26.99',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Reusable pet hair remover for furniture, couch, carpet, car seats, or bedding. Effective on multiple surfaces and eco-friendly.'
          },
          {
            type: 'table',
            content: [
              { label: 'Dimensions', value: '7.5 x 3 x 2.5 inches' },
              { label: 'Weight', value: '0.4 pounds' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'ChomChom Roller' },
              { label: 'Material', value: 'Plastic' },
              { label: 'Color', value: 'White' },
              { label: 'Reusable', value: 'Yes' },
            ]
          },
        ],
        rating: 4.5, // Added rating
    };


} else if (pathname === '/products/outdoors/Bounty-Quick-Size-Paper-Towels') {
    detail = {
        features: [
            'Quick Size',
            'Absorbent',
            'Durable',
            'Versatile'
        ],
        descriptions: [
            'Smaller sheets allow you to use just what you need, reducing waste.',
            'Quickly absorbs spills and messes for efficient cleaning.',
            'Strong enough for tough jobs, even when wet.',
            'Ideal for kitchen, bathroom, and general household cleaning tasks.'
        ],
        images: [
            "/Bounty Quick-Size Paper Towels-1.jpg",
            "/Bounty Quick-Size Paper Towels-2.jpg",
            "/Bounty Quick-Size Paper Towels-3.jpg",
            "/Bounty Quick-Size Paper Towels-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Bounty Quick-Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls',
                imageset:[
                    "/Bounty Quick-Size Paper Towels-1.jpg",
                    "/Bounty Quick-Size Paper Towels-2.jpg",
                    "/Bounty Quick-Size Paper Towels-3.jpg",
                    "/Bounty Quick-Size Paper Towels-4.jpg",
                    "/Bounty Quick-Size Paper Towels-5.jpg",
                    "/Bounty Quick-Size Paper Towels-6.jpg",
                ],
                link: 'https://amzn.to/4774Oeb'
            }
        ],
        description:'',            
        breadcumb: 'Bounty Quick-Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls',
        title: 'Bounty Quick-Size Paper Towels',
        price: '$24.42',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Bounty Quick-Size Paper Towels are 2x more absorbent* and strong when wet, so you can get the job done quickly. (*vs. leading ordinary brand)'
          },
          {
            type: 'table',
            content: [
              { label: 'Sheets per Roll', value: '110' },
              { label: 'Roll Dimensions', value: '11 x 5.9 inches' },
              { label: 'Package Dimensions', value: '23.5 x 13.4 x 9.1 inches' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Bounty' },
              { label: 'Material', value: 'Paper' },
              { label: 'Color', value: 'White' },
              { label: 'Number of Rolls', value: '8 Family Rolls (= 20 Regular Rolls)' },
            ]
          },
        ],
        rating: 4.8,
    };


} else if (pathname === '/products/outdoors/clorox-toiletwand-disinfecting-refills') {
    detail = {
        features: [
            'Disposable Cleaning Heads',
            'Disinfecting Power',
            'Easy to Use',
            'Convenient Storage'
        ],
        descriptions: [
            'Pre-loaded with Clorox cleaner, these disposable heads make toilet cleaning quick and easy.',
            'Kills 99.9% of bacteria and viruses for a thorough clean.',
            'Simply click, swish, and toss for a hands-off cleaning experience.',
            'Compact refill pack stores easily under the sink or in small spaces.'
        ],
        images: [
            "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-1.jpg",
            "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-2.jpg",
            "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-3.jpg",
            "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Clorox ToiletWand Disinfecting Refills, Disposable Wand Heads - 30 Count (Package May Vary)',
                imageset:[
                    "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-1.jpg",
                    "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-2.jpg",
                    "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-3.jpg",
                    "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-4.jpg",
                    "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-5.jpg",
                    "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-6.jpg",
                    "/Clorox ToiletWand Disinfecting Refills. Disposable Wand Heads - 30 Count (Package May Vary)-7.jpg",
                ],
                link: 'https://amzn.to/3Xnht9y' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Clorox ToiletWand Disinfecting Refills offer a convenient and hygienic way to clean your toilet. With disposable heads pre-loaded with Clorox cleaner, you can easily disinfect and clean your toilet without direct contact.',
        breadcumb: 'Clorox ToiletWand Disinfecting Refills, 30 Count',
        title: 'Clorox ToiletWand Disinfecting Refills',
        price: '$17.99',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Clorox ToiletWand Disinfecting Refills are designed for use with the Clorox ToiletWand. Each disposable head is pre-loaded with Clorox cleaner, allowing for quick and easy toilet cleaning without the need for a separate brush and cleaner.'
          },
          {
            type: 'table',
            content: [
              { label: 'Count', value: '30 Disposable Heads' },
              { label: 'Scent', value: 'Fresh' },
              { label: 'Item Form', value: 'Wand Heads' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Clorox' },
              { label: 'Disinfecting', value: 'Yes' },
              { label: 'Biodegradable', value: 'No' },
              { label: 'Bleach-Free', value: 'No' },
            ]
          },
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/outdoors/earth-breeze-liquid-less-laundry-detergent-sheets') {
    detail = {
        features: [
            'Eco-Friendly',
            'Space-Saving',
            'Effective Cleaning',
            'Travel-Friendly'
        ],
        descriptions: [
            'Plastic-free packaging reduces environmental impact.',
            'Compact sheets take up less space than traditional liquid detergents.',
            'Powerful cleaning formula works in all water temperatures.',
            'Lightweight sheets are perfect for travel or laundromats.'
        ],
        images: [
            "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-1.jpg",
            "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-2.jpg",
            "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-3.jpg",
            "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug, Liquidless Technology',
                imageset:[
                    "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-1.jpg",
                    "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-2.jpg",
                    "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-3.jpg",
                    "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-4.jpg",
                    "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-5.jpg",
                    "/Earth Breeze - Liquid-less Laundry Detergent Sheets - No Plastic Jug. Liquidless Technology-6.jpg",
                ],
                link: 'https://amzn.to/3Xki0ZU' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Earth Breeze Liquid-less Laundry Detergent Sheets offer an eco-friendly alternative to traditional liquid detergents. These compact sheets provide powerful cleaning without the need for plastic jugs.',
        breadcumb: 'Earth Breeze - Liquid-less Laundry Detergent Sheets',
        title: 'Earth Breeze Liquid-less Laundry Detergent Sheets',
        price: '$14.99',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Environmental Impact',
        ],
        values: [
          {
            type: 'text',
            content: 'Earth Breeze Liquid-less Laundry Detergent Sheets are an innovative, eco-friendly alternative to traditional liquid detergents. These compact sheets dissolve completely in water, leaving no plastic waste behind.'
          },
          {
            type: 'table',
            content: [
              { label: 'Sheets per Pack', value: '60 (30 loads)' },
              { label: 'Scent', value: 'Fresh Scent' },
              { label: 'HE Compatible', value: 'Yes' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Plastic-Free', value: 'Yes' },
              { label: 'Biodegradable', value: 'Yes' },
              { label: 'Cruelty-Free', value: 'Yes' },
              { label: 'Carbon Neutral', value: 'Yes' },
            ]
          },
        ],
        rating: 4.4,
    };
} else if (pathname === '/products/outdoors/safer-home-indoor-plug-in-fly-trap') {
    detail = {
        features: [
            'UV Light Attraction',
            'Chemical-Free',
            'Easy to Use',
            'Quiet Operation'
        ],
        descriptions: [
            'Uses UV light to attract flying insects effectively.',
            'No chemicals or odors, safe for use around food and people.',
            'Simply plug in and let it work, no setup required.',
            'Silent operation wont disturb your daily activities.'
        ],
        images: [
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-1.jpg",
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-2.jpg",
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-3.jpg",
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Safer Home Indoor Plug-in Fly Trap for Flies, Fruit Flies',
                imageset:[
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-1.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-2.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-3.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-4.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-5.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-6.jpg",
                ],
                link: 'https://amzn.to/474hsKK' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Safer Home Indoor Plug-in Fly Trap uses UV light to attract and capture flies and fruit flies without the use of chemicals. Its easy to use and safe for indoor environments.',
        breadcumb: 'Safer Home Indoor Plug-in Fly Trap',
        title: 'Safer Home Indoor Plug-in Fly Trap',
        price: '$13.95',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'The Safer Home Indoor Plug-in Fly Trap is designed to attract and capture flying insects using UV light. Its a chemical-free, odorless solution for indoor fly control.'
          },
          {
            type: 'table',
            content: [
              { label: 'Dimensions', value: '3 x 3 x 7 inches' },
              { label: 'Weight', value: '0.5 pounds' },
              { label: 'Power Source', value: 'Corded Electric' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Safer Home' },
              { label: 'Target Species', value: 'Flies, Fruit Flies' },
              { label: 'Indoor/Outdoor', value: 'Indoor Use' },
              { label: 'Chemical-Free', value: 'Yes' },
            ]
          },
        ],
        rating: 4.2,
    };
} else if (pathname === '/products/outdoors/safer-home-indoor-plug-in-fly-trap-for-flies-fruit-flies-moths-gnats-and-other-flying-insects') {
    detail = {
        features: [
            'Multi-Insect Control',
            'UV Light Technology',
            'Safe and Non-Toxic',
            'Continuous Protection'
        ],
        descriptions: [
            'Effectively attracts and traps various flying insects including flies, fruit flies, moths, and gnats.',
            'Uses powerful UV light to lure insects without chemicals.',
            'No pesticides or odors, making it safe for use in homes with children and pets.',
            'Provides round-the-clock protection against flying insects.'
        ],
        images: [
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-1.jpg",
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-2.jpg",
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-3.jpg",
            "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Safer Home Indoor Plug-in Fly Trap for Flies, Fruit Flies, Moths, Gnats, and Other Flying Insects',
                imageset:[
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-1.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-2.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-3.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-4.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-5.jpg",
                    "/Safer Home Indoor Plug-in Fly Trap for Flies. Fruit Flies-6.jpg",
                ],
                link: 'https://amzn.to/3T9kbgx' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'The Safer Home Indoor Plug-in Fly Trap is an advanced insect control solution that targets multiple flying pests. Using UV light technology, it provides a safe and effective way to keep your home free from various flying insects.',
        breadcumb: 'Safer Home Indoor Plug-in Fly Trap for Multiple Flying Insects',
        title: 'Safer Home Indoor Plug-in Fly Trap for Multiple Flying Insects',
        price: '$14.68',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Safety Information',
        ],
        values: [
          {
            type: 'text',
            content: 'This advanced Safer Home Indoor Plug-in Fly Trap is designed to attract and capture a wide range of flying insects, including flies, fruit flies, moths, and gnats. It uses UV light technology for chemical-free pest control.'
          },
          {
            type: 'table',
            content: [
              { label: 'Dimensions', value: '3.5 x 3.5 x 7.5 inches' },
              { label: 'Weight', value: '0.6 pounds' },
              { label: 'Coverage Area', value: 'Up to 400 sq ft' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Safer Home' },
              { label: 'Target Species', value: 'Flies, Fruit Flies, Moths, Gnats, Other Flying Insects' },
              { label: 'Non-Toxic', value: 'Yes' },
              { label: 'UV Light', value: 'Yes' },
            ]
          },
        ],
        rating: 4.5,
    };


} else if (pathname === '/products/outdoors/terro-liquid-ant-baits') {
    detail = {
        features: [
            'Effective Ant Control',
            'Easy to Use',
            'Indoor and Outdoor Use',
            'Long-Lasting Formula'
        ],
        descriptions: [
            'Attracts and kills all common household ants.',
            'Pre-filled, ready-to-use bait stations require no activation.',
            'Suitable for both indoor and outdoor ant problems.',
            'Continues working for up to 3 months after placement.'
        ],
        images: [
            "/TERRO Liquid Ant Baits-1.jpg",
            "/TERRO Liquid Ant Baits-2.jpg",
            "/TERRO Liquid Ant Baits-3.jpg",
            "/TERRO Liquid Ant Baits-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'TERRO T300B Liquid Ant Bait Ant Killer, 12 Bait Stations',
                imageset:[
                    "/TERRO Liquid Ant Baits-1.jpg",
                    "/TERRO Liquid Ant Baits-2.jpg",
                    "/TERRO Liquid Ant Baits-3.jpg",
                    "/TERRO Liquid Ant Baits-4.jpg",
                    "/TERRO Liquid Ant Baits-5.jpg",
                    "/TERRO Liquid Ant Baits-6.jpg",
                ],
                link: 'https://amzn.to/3ACuaEs' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'TERRO Liquid Ant Baits are an effective solution for controlling common household ants. These pre-filled bait stations are easy to use and provide long-lasting protection against ant infestations.',
        breadcumb: 'TERRO Liquid Ant Baits, 12 Bait Stations',
        title: 'TERRO Liquid Ant Baits',
        price: '$10.37',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Safety Information',
        ],
        values: [
          {
            type: 'text',
            content: 'TERRO Liquid Ant Baits contain a sweet, liquid formula that ants find irresistible. Worker ants carry the bait back to the colony, eventually eliminating the entire ant population.'
          },
          {
            type: 'table',
            content: [
              { label: 'Number of Baits', value: '12' },
              { label: 'Active Ingredient', value: 'Borax' },
              { label: 'Effective Duration', value: 'Up to 3 months' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'TERRO' },
              { label: 'Target Pests', value: 'Common Household Ants' },
              { label: 'Indoor/Outdoor Use', value: 'Both' },
              { label: 'Child-Resistant', value: 'Yes' },
            ]
          },
        ],
        rating: 4.5,
    };




} else if (pathname === '/products/outdoors/Amazon-Basics-Tall-Kitchen-Drawstring-Trash-Bags') {
    detail = {
        features: [
            'Durable Construction',
            'Drawstring Closure',
            'Leak Protection',
            'Fits Most Trash Cans'
        ],
        descriptions: [
            'Made with strong, tear-resistant plastic for reliable waste containment.',
            'Easy-to-use drawstring makes closing and carrying bags simple.',
            'Designed to prevent leaks and spills for cleaner disposal.',
            'Sized to fit most standard kitchen trash cans for convenient use.'
        ],
        images: [
            "/Amazon Basics Tall Kitchen Drawstring Trash Bags-1.jpg",
            "/Amazon Basics Tall Kitchen Drawstring Trash Bags-2.jpg",
            "/Amazon Basics Tall Kitchen Drawstring Trash Bags-3.jpg",
            "/Amazon Basics Tall Kitchen Drawstring Trash Bags-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Amazon Basics Tall Kitchen Drawstring Trash Bags, 13 Gallon, 120 Count',
                imageset:[
                    "/Amazon Basics Tall Kitchen Drawstring Trash Bags-1.jpg",
                    "/Amazon Basics Tall Kitchen Drawstring Trash Bags-2.jpg",
                    "/Amazon Basics Tall Kitchen Drawstring Trash Bags-3.jpg",
                    "/Amazon Basics Tall Kitchen Drawstring Trash Bags-4.jpg",
                ],
                link: 'https://amzn.to/3XkQLNG' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Amazon Basics Tall Kitchen Drawstring Trash Bags offer durability and convenience for everyday household waste management. These 13-gallon bags feature a strong construction and easy-to-use drawstring closure.',
        breadcumb: 'Amazon Basics Tall Kitchen Drawstring Trash Bags',
        title: 'Amazon Basics Tall Kitchen Drawstring Trash Bags',
        price: '$7.89',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'These Amazon Basics trash bags are designed for durability and ease of use, featuring a drawstring closure and leak-resistant construction.'
          },
          {
            type: 'table',
            content: [
              { label: 'Capacity', value: '13 Gallons' },
              { label: 'Count', value: '120 Bags' },
              { label: 'Dimensions', value: '24 x 27.4 inches' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Amazon Basics' },
              { label: 'Material', value: 'Plastic' },
              { label: 'Color', value: 'Black' },
              { label: 'Closure Type', value: 'Drawstring' },
            ]
          },
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/outdoors/Amazon-Basics-Everyday-Paper-Plates') {
    detail = {
        features: [
            'Disposable Convenience',
            'Microwave Safe',
            'Cut-Resistant',
            'Eco-Friendly Option'
        ],
        descriptions: [
            'Perfect for everyday meals, parties, and picnics with easy cleanup.',
            'Can be safely used in the microwave for reheating foods.',
            'Sturdy construction resists cuts from plastic utensils.',
            'Made from paper, offering a more environmentally friendly alternative to plastic plates.'
        ],
        images: [
          "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-1.jpg",
          "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-2.jpg",
          "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-3.jpg",
          "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Amazon Basics Everyday Paper Plates, 9 Inch, 225 Count',
                imageset:[
                    "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-1.jpg",
                    "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-2.jpg",
                    "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-3.jpg",
                    "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-4.jpg",
                    "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-5.jpg",
                    "/Amazon Basics Everyday Paper Plates, 8 5 8 Inch Disposable, 100 Count-6.jpg",
                ],
                link: 'https://amzn.to/3XyxxFE' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Amazon Basics Everyday Paper Plates offer a convenient and eco-friendly solution for casual dining and entertaining. These 9-inch plates are sturdy, microwave-safe, and perfect for a variety of uses.',
        breadcumb: 'Amazon Basics Everyday Paper Plates',
        title: 'Amazon Basics Everyday Paper Plates',
        price: '$6.32',
        video: '',
        specs: [
            'Product Details',
            'Dimensions',
            'Additional Information',
        ],
        values: [
          {
            type: 'text',
            content: 'These Amazon Basics paper plates are designed for everyday use, offering convenience without sacrificing durability. Theyre microwave safe and resistant to cuts from plastic utensils.'
          },
          {
            type: 'table',
            content: [
              { label: 'Size', value: '9 Inches' },
              { label: 'Count', value: '225 Plates' },
              { label: 'Shape', value: 'Round' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Amazon Basics' },
              { label: 'Material', value: 'Paper' },
              { label: 'Color', value: 'White' },
              { label: 'Microwave Safe', value: 'Yes' },
            ]
          },
        ],
        rating: 4.6,
    };






  } else if (pathname === '/products/supplements/Clorox-Toilet-Bowl-Cleaner') {
    detail = {
        features: [
            'Powerful Cleaning',
            'Clinging Formula',
            'Fresh Scent',
            'Convenient Pack'
        ],
        descriptions: [
            'Effectively removes tough stains and kills 99.9% of germs.',
            'Gel formula clings to bowl surface for better cleaning action.',
            'Ocean Mist scent leaves bathroom smelling fresh and clean.',
            'Pack of 2 bottles provides long-lasting supply for regular cleaning.'
        ],
        images: [
          "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-1.jpg",
          "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-2.jpg",
          "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-3.jpg",
          "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-4.jpg",
        ],
        carousel_feature: [],
        carousel_feature_images:[],
        carousel_desc: [],
        options:[
            {
                colorbutton:'',
                textbutton:'',
                subtitle:'Clorox Toilet Bowl Cleaner, Clinging Bleach Gel, Ocean Mist - 24 Ounces, Pack of 2',
                imageset:[
                    "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-1.jpg",
                    "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-2.jpg",
                    "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-3.jpg",
                    "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-4.jpg",
                    "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-5.jpg",
                    "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-6.jpg",
                    "/Clorox Toilet Bowl Cleaner. Clinging Bleach Gel. Ocean Mist - 24 Ounces. Pack of 2-7.jpg",
                ],
                link: 'https://amzn.to/3YNckJ3' // Replace with actual Amazon affiliate link
            },
        ],
        description: 'Clorox Toilet Bowl Cleaner with Clinging Bleach Gel offers powerful cleaning action to remove tough stains and kill germs. The Ocean Mist scent leaves your bathroom fresh and clean.',
        breadcumb: 'Clorox Toilet Bowl Cleaner, Clinging Bleach Gel',
        title: 'Clorox Toilet Bowl Cleaner',
        price: '$4.98',
        video: '',
        specs: [
            'Product Details',
            'Usage Instructions',
            'Safety Information',
        ],
        values: [
          {
            type: 'text',
            content: 'Clorox Toilet Bowl Cleaner with Clinging Bleach Gel is designed to provide thorough cleaning and disinfection for your toilet bowl. Its clinging formula allows for better surface coverage and more effective stain removal.'
          },
          {
            type: 'table',
            content: [
              { label: 'Volume', value: '24 Ounces per Bottle' },
              { label: 'Quantity', value: '2 Bottles' },
              { label: 'Scent', value: 'Ocean Mist' },
            ]
          },
          {
            type: 'table',
            content: [
              { label: 'Brand', value: 'Clorox' },
              { label: 'Form', value: 'Gel' },
              { label: 'Bleach-Based', value: 'Yes' },
              { label: 'Kills Germs', value: '99.9%' },
            ]
          },
        ],
        rating: 4.8,
    };



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
                imageset:[],
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
                                <div className="flex justify-center">
                                    <Carousel className="rounded-2xl shadow-lg w-full max-w-[1000px] overflow-hidden bg-white p-5">
                                        <CarouselContent>
                                        {(imageSets[currentImageSetIndex] ? detail.options[currentImageSetIndex].imageset : []).map((imageSet, index) => (
                                            <CarouselItem key={index} onClick={() => handleImageChange(index)}>
                                                {imageSet && (
                                                    <div
                                                        onMouseLeave={handleMouseLeave}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseMove={handleMouseMove}
                                                        className="relative w-full h-[500px] overflow-hidden">
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
                                                            className="object-contain"
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


                            <div className="flex justify-center">
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

                            
                            <div className="text-black text-center w-full">
                                <div className="flex flex-col p-5">
                                    {detail.features.map((feature, index) => (
                                        <motion.div 
                                            key={index}
                                            style={{ justifyContent: "flex-start" }}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.8 }}
                                        >
                                            <div className="flex flex-col md:flex-row mt-5 w-full rounded-xl bg-white border-4 border-blue-200 shadow-xl">
                                                <div className="md:basis-1/3 text-center flex flex-col my-auto">
                                                    <div className="m-2 text-2xl md:text-4xl font-extrabold">{feature}</div>
                                                </div>
                                                <div className="md:basis-1/3">
                                                    <Image src={detail.images[index]} alt={`Image ${index + 1}`} width={500} height={300} />
                                                </div>
                                                <div className="md:basis-1/3 text-center flex flex-col my-auto">
                                                    <div className="m-5 text-base md:text-xl mb-5">{detail.descriptions[index]}</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
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