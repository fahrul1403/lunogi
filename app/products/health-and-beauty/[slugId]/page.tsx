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
    rating:number;
  
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
     if (pathname === '/products/health-and-beauty/LANEIGE-Lip-Sleeping-Mask-Nourish-Hydrate-Vitamin-C-Murumuru-Shea-Butter-Antioxidants-Flaky-Dry-Lips') {
    detail = {
        features: [
            'Nourishing Formula',
            'Overnight Treatment',
            'Antioxidant-Rich',
            'Moisturizing Ingredients',
            'Gentle Exfoliation'
        ],
        descriptions: [
            'Deeply nourishes and hydrates lips while you sleep.',
            'Wake up to softer, smoother, and more supple lips.',
            'Contains Vitamin C and other antioxidants to protect lips from environmental stressors.',
            'Formulated with Murumuru and Shea Butter for intense moisturization.',
            'Gently removes dead skin cells for smoother lips.'
        ],
        images: [
            '/LANEIGE Lip Sleeping Mask Nourish-1.jpg',
            '/LANEIGE Lip Sleeping Mask Nourish-2.jpg',
            '/LANEIGE Lip Sleeping Mask Nourish-3.jpg',
            '/LANEIGE Lip Sleeping Mask Nourish-4.jpg',
            '/LANEIGE Lip Sleeping Mask Nourish-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-pink-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Berry',
                imageset: [
                    '/LANEIGE Lip Sleeping Mask Nourish-1.jpg',
                    '/LANEIGE Lip Sleeping Mask Nourish-2.jpg',
                    '/LANEIGE Lip Sleeping Mask Nourish-3.jpg',
                    '/LANEIGE Lip Sleeping Mask Nourish-4.jpg',
                    '/LANEIGE Lip Sleeping Mask Nourish-5.jpg',
                    '/LANEIGE Lip Sleeping Mask Nourish-6.jpg',
                ],
                link: 'https://amzn.to/3AJGDXb'
            },
        ],
        description: '',
        breadcumb: 'LANEIGE Lip Sleeping Mask',
        title: 'LANEIGE Lip Sleeping Mask',
        price: '$24.00',
        video: '',
        specs: [
            'Product Information',
            'Ingredients',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'LANEIGE' },
                    { label: 'Item Form', value: 'Cream' },
                    { label: 'Net Weight', value: '20g / 0.7 oz' },
                    { label: 'Skin Type', value: 'All' }
                ]
            },
            {
                type: 'text',
                content: 'Diisostearyl Malate, Hydrogenated Polyisobutene, Phytosteryl/Isostearyl/Cetyl/Stearyl/Behenyl Dimer Dilinoleate, Hydrogenated C6-14 Olefin Polymers, Polybutene, Microcrystalline Wax, Shea Butter, Synthetic Wax, Candelilla Wax, Sucrose Tetrastearate Triacetate, Hydrogenated Butylene/Ethylene/Styrene Copolymer, Ethylene/Propylene/Styrene Copolymer, Mica, Astrocaryum Murumuru Seed Butter, Titanium Dioxide, Dimethicone, Fragrance, Polyglyceryl-2 Diisostearate, Dehydroacetic Acid, 1,2-Hexanediol, Mechicone, Carnauba Wax, Polyglyceryl-2 Triisostearate, Orange Oil, Vanilla Extract, Strawberry Fruit Extract, Raspberry Fruit Extract, Blueberry Fruit Extract, Cranberry Fruit Extract, Melon Fruit Extract, Grapefruit Fruit Extract, Ascorbyl Glucoside, Calcium Aluminum Borosilicate, Polyethylene, Silica, Copernicia Cerifera (Carnauba) Wax, Water, Potassium Alginate, Propanediol, Glycerin, Alcohol, Lecithin, Calcium Carbonate, Sodium Hyaluronate, Beta-Glucan, Manganese Sulfate, Zinc Sulfate, Ascorbyl Palmitate'
            },
            {
                type: 'list',
                content: [
                    'Apply a generous layer on the lips using the applicator before going to bed.',
                    'Gently wipe off any excess the next morning with a tissue or cotton swab.',
                    'Use nightly for best results.'
                ]
            }
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/health-and-beauty/iHealth-COVID-19-Antigen-Rapid-Test-1-Pack-5-Tests-Total') {
    detail = {
        features: [
            'FDA EUA Authorized',
            'Rapid Results',
            'Non-Invasive',
            'Easy to Use',
            'Multiple Tests'
        ],
        descriptions: [
            'Authorized by FDA under an Emergency Use Authorization (EUA) for over-the-counter (OTC) use.',
            'Get results in just 15 minutes.',
            'Comfortable nasal swab for easy self-collection.',
            'Simple step-by-step instructions for at-home testing.',
            'Each pack contains 5 tests for multiple uses.'
        ],
        images: [
            '/iHealth COVID-19 Antigen Rapid Test-1.jpg',
            '/iHealth COVID-19 Antigen Rapid Test-2.jpg',
            '/iHealth COVID-19 Antigen Rapid Test-3.jpg',
            '/iHealth COVID-19 Antigen Rapid Test-4.jpg',
            '/iHealth COVID-19 Antigen Rapid Test-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'iHealth COVID-19 Antigen Rapid Test',
                imageset: [
                    '/iHealth COVID-19 Antigen Rapid Test-1.jpg',
                    '/iHealth COVID-19 Antigen Rapid Test-2.jpg',
                    '/iHealth COVID-19 Antigen Rapid Test-3.jpg',
                    '/iHealth COVID-19 Antigen Rapid Test-4.jpg',
                    '/iHealth COVID-19 Antigen Rapid Test-5.jpg',
                    '/iHealth COVID-19 Antigen Rapid Test-6.jpg',
                ],
                link: 'https://amzn.to/4fW6QBM'
            }
        ],
        description: '',
        breadcumb: 'iHealth COVID-19 Antigen Rapid Test',
        title: 'iHealth COVID-19 Antigen Rapid Test',
        price: '$28.87',
        video: '',
        specs: [
            'Product Information',
            'Test Details',
            'Usage Instructions'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'iHealth' },
                    { label: 'Tests per Pack', value: '5' },
                    { label: 'Result Time', value: '15 minutes' },
                    { label: 'FDA Authorization', value: 'EUA for OTC use' }
                ]
            },
            {
                type: 'table',
                content: [
                    { label: 'Test Type', value: 'Antigen' },
                    { label: 'Specimen Type', value: 'Anterior Nasal Swab' },
                    { label: 'Sensitivity', value: '94.3%' },
                    { label: 'Specificity', value: '98.1%' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Wash and dry hands thoroughly.',
                    'Open the test card and place it on a flat surface.',
                    'Collect nasal specimen using the provided swab.',
                    'Insert swab into the sample port and rotate 5 times.',
                    'Wait 15 minutes and read results.',
                    'Dispose of used test components in household trash.'
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/health-and-beauty/Lumineux-TOOTH_WHITENER') {
    detail = {
        features: [
            'Enamel-Safe Formula',
            'Peroxide-Free',
            'Clinically Proven',
            'Natural Ingredients',
            'Sensitivity-Free'
        ],
        descriptions: [
            'Whitens teeth without damaging enamel.',
            'Achieves whitening results without harsh chemicals.',
            'Proven to whiten teeth up to 8 shades in 30 days.',
            'Made with coconut oil, sage oil, and lemon peel oil.',
            'Gentle on sensitive teeth and gums.'
        ],
        images: [
            '/Lumineux TOOTH_WHITENER-1.jpg',
            '/Lumineux TOOTH_WHITENER-2.jpg',
            '/Lumineux TOOTH_WHITENER-3.jpg',
            '/Lumineux TOOTH_WHITENER-4.jpg',
            '/Lumineux TOOTH_WHITENER-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Lumineux TOOTH_WHITENER',
                imageset: [
                    '/Lumineux TOOTH_WHITENER-1.jpg',
                    '/Lumineux TOOTH_WHITENER-2.jpg',
                    '/Lumineux TOOTH_WHITENER-3.jpg',
                    '/Lumineux TOOTH_WHITENER-4.jpg',
                    '/Lumineux TOOTH_WHITENER-5.jpg',
                    '/Lumineux TOOTH_WHITENER-6.jpg',
                ],
                link: 'https://amzn.to/474on6W'
            }
        ],
        description: '',
        breadcumb: 'Lumineux TOOTH_WHITENER',
        title: 'Lumineux TOOTH_WHITENER',
        price: '$22.99',
        video: '',
        specs: [
            'Product Information',
            'Key Ingredients',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Lumineux' },
                    { label: 'Item Form', value: 'Gel' },
                    { label: 'Net Weight', value: '2 oz / 59 ml' },
                    { label: 'Treatment Duration', value: '30 days' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Dead Sea Salt: Remineralizes teeth',
                    'Coconut Oil: Natural whitening agent',
                    'Sage Oil: Antibacterial properties',
                    'Lemon Peel Oil: Natural whitening and freshening',
                    'Aloe Vera: Soothes gums'
                ]
            },
            {
                type: 'list',
                content: [
                    'Brush teeth with regular toothpaste and rinse.',
                    'Apply a thin layer of whitening gel to teeth.',
                    'Leave on for 30 minutes.',
                    'Rinse thoroughly with water.',
                    'Use once daily for 30 days for best results.'
                ]
            }
        ],
        rating: 4.1,
    };



} else if (pathname === '/products/health-and-beauty/LUMIFY-Redness-Reliever-Eye-Drops') {
    detail = {
        features: [
            'Fast-Acting Formula',
            'Long-Lasting Relief',
            'Preservative-Free',
            'FDA Approved',
            'Safe for Daily Use'
        ],
        descriptions: [
            'Reduces redness in just 1 minute, with effects lasting up to 8 hours.',
            'Provides extended relief from eye redness due to minor irritations.',
            'Free from harsh preservatives that can cause irritation.',
            'The first and only over-the-counter eye drop with low-dose brimonidine.',
            'Can be used daily to relieve redness without risk of rebound redness.'
        ],
        images: [
            '/LUMIFY Redness Reliever Eye Drops-1.jpg',
            '/LUMIFY Redness Reliever Eye Drops-2.jpg',
            '/LUMIFY Redness Reliever Eye Drops-3.jpg',
            '/LUMIFY Redness Reliever Eye Drops-4.jpg',
            '/LUMIFY Redness Reliever Eye Drops-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '0.25 fl oz',
                subtitle: 'LUMIFY Redness Reliever Eye Drops, 0.25 fl oz (7.5ml)',
                imageset: [
                    '/LUMIFY Redness Reliever Eye Drops-1.jpg',
                    '/LUMIFY Redness Reliever Eye Drops-2.jpg',
                    '/LUMIFY Redness Reliever Eye Drops-3.jpg',
                    '/LUMIFY Redness Reliever Eye Drops-4.jpg',
                    '/LUMIFY Redness Reliever Eye Drops-5.jpg',
                    '/LUMIFY Redness Reliever Eye Drops-6.jpg',
                ],
                link: 'https://amzn.to/4dMEmsY'
            }
        ],
        description: '',
        breadcumb: 'LUMIFY Redness Reliever Eye Drops',
        title: 'LUMIFY Redness Reliever Eye Drops',
        price: '$21.48',
        video: '',
        specs: [
            'Product Information',
            'Active Ingredient',
            'Directions for Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'LUMIFY' },
                    { label: 'Item Form', value: 'Liquid' },
                    { label: 'Age Range', value: 'Adult' },
                    { label: 'Specific Uses', value: 'Eye Redness Relief' }
                ]
            },
            {
                type: 'text',
                content: 'Brimonidine Tartrate 0.025%'
            },
            {
                type: 'list',
                content: [
                    'Instill 1 drop in the affected eye(s) every 6-8 hours.',
                    'Do not use more than 4 times daily.',
                    'Replace cap after each use.',
                    'If bottle tip touches your eye or any other surface, throw away the bottle.',
                    'Do not use if solution changes color or becomes cloudy.'
                ]
            }
        ],
        rating: 4.7,
    };





} else if (pathname === '/products/health-and-beauty/anua-heartleaf-pore-control-cleansing-oil') {
    detail = {
        features: [
            'Pore Control Formula',
            'Gentle Cleansing',
            'Makeup Removal',
            'Korean Skincare',
            'Suitable for All Skin Types'
        ],
        descriptions: [
            'Effectively controls and cleanses pores for a clearer complexion.',
            'Gently removes impurities without stripping the skin\'s natural oils.',
            'Efficiently dissolves and removes makeup, including waterproof formulas.',
            'Incorporates advanced Korean skincare technology for optimal results.',
            'Formulated to be suitable for all skin types, including sensitive skin.'
        ],
        images: [
            '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-1.jpg',
            '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-2.jpg',
            '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-3.jpg',
            '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-4.jpg',
            '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'ANUA Heartleaf Pore Control Cleansing Oil',
                imageset: [
                    '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-1.jpg',
                    '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-2.jpg',
                    '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-3.jpg',
                    '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-4.jpg',
                    '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-5.jpg',
                    '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-6.jpg',
                    '/ANUA Heartleaf Pore Control Cleansing Oil. Oil Cleanser for Face. Makeup Blackhead Remover. Korean Skin Care 6.76 fl oz(200ml) (original)-7.jpg',
                ],
                link: 'https://amzn.to/3AHfILr'
            }
        ],
        description: '',
        breadcumb: 'ANUA Heartleaf Pore Control Cleansing Oil',
        title: 'ANUA Heartleaf Pore Control Cleansing Oil',
        price: '$17.69',
        video: '',
        specs: [
            'Product Information',
            'Key Ingredients',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'ANUA' },
                    { label: 'Item Form', value: 'Oil' },
                    { label: 'Volume', value: '6.76 fl oz (200ml)' },
                    { label: 'Skin Type', value: 'All' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Heartleaf Extract: Soothes and calms skin',
                    'Tea Tree Oil: Natural antibacterial properties',
                    'Jojoba Oil: Moisturizes without clogging pores',
                    'Centella Asiatica Extract: Promotes skin healing'
                ]
            },
            {
                type: 'list',
                content: [
                    'Apply to dry face with dry hands.',
                    'Gently massage in circular motions to dissolve makeup and impurities.',
                    'Add water to emulsify the oil.',
                    'Rinse thoroughly with lukewarm water.',
                    'Follow with your regular skincare routine.'
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/health-and-beauty/sensodyne-pronamel-tooth-cleaning-agent') {
    detail = {
        features: [
            'Enamel Protection',
            'Sensitivity Relief',
            'Cavity Prevention',
            'Whitening Action',
            'Fluoride Formula'
        ],
        descriptions: [
            'Protects tooth enamel from acid erosion caused by daily acidic foods and drinks.',
            'Provides relief from tooth sensitivity to hot and cold.',
            'Helps prevent cavities and strengthens tooth enamel.',
            'Gently whitens teeth while protecting enamel.',
            'Contains fluoride to remineralize weakened enamel.'
        ],
        images: [
            '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-1.jpg',
            '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-2.jpg',
            '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-3.jpg',
            '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-4.jpg',
            '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Sensodyne Pronamel Tooth Cleaning Agent',
                imageset: [
                    '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-1.jpg',
                    '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-2.jpg',
                    '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-3.jpg',
                    '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-4.jpg',
                    '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-5.jpg',
                    '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-6.jpg',
                    '/Sensodyne Pronamel TOOTH_CLEANING_AGENT-7.jpg',
                ],
                link: 'https://amzn.to/4e4qSIO'
            }
        ],
        description: '',
        breadcumb: 'Sensodyne Pronamel Tooth Cleaning Agent',
        title: 'Sensodyne Pronamel Tooth Cleaning Agent',
        price: '$17.47',
        video: '',
        specs: [
            'Product Information',
            'Active Ingredients',
            'Directions'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Sensodyne' },
                    { label: 'Item Form', value: 'Paste' },
                    { label: 'Flavor', value: 'Mint' },
                    { label: 'Age Range', value: 'Adult' }
                ]
            },
            {
                type: 'text',
                content: 'Potassium Nitrate 5% (Antisensitvity), Sodium Fluoride 0.15% w/v Fluoride Ion (Anticavity)'
            },
            {
                type: 'list',
                content: [
                    'Brush teeth thoroughly twice a day (morning and night) or as directed by a dentist or physician.',
                    'Do not swallow.',
                    'Children 12 years of age and younger: consult a dentist or physician.',
                    'For best results, apply twice daily and do not rinse after use.'
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/health-and-beauty/essence-lash-princess-false-lash-mascara') {
    detail = {
        features: [
            'Dramatic Volume',
            'Long-Lasting Formula',
            'Cruelty-Free',
            'Affordable Luxury',
            'Easy Application'
        ],
        descriptions: [
            'Creates dramatic volume and length for a false lash effect.',
            'Smudge-proof and long-lasting formula for all-day wear.',
            'Certified cruelty-free, never tested on animals.',
            'High-end results at a budget-friendly price.',
            'Conic fiber brush for easy and precise application.'
        ],
        images: [
            '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-1.jpg',
            '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-2.jpg',
            '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-3.jpg',
            '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-4.jpg',
            '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'essence Lash Princess False Lash Mascara',
                imageset: [
                    '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-1.jpg',
                    '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-2.jpg',
                    '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-3.jpg',
                    '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-4.jpg',
                    '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-5.jpg',
                    '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-6.jpg',
                    '/essence Lash Princess False Lash Mascara Cruelty Free Beauty-7.jpg',
                ],
                link: 'https://amzn.to/3Xojwub'
            }
        ],
        description: '',
        breadcumb: 'essence Lash Princess False Lash Mascara',
        title: 'essence Lash Princess False Lash Mascara',
        price: '$14.97',
        video: '',
        specs: [
            'Product Information',
            'Key Features',
            'Application Tips'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'essence' },
                    { label: 'Color', value: 'Black' },
                    { label: 'Item Volume', value: '0.4 Fluid Ounces' },
                    { label: 'Waterproof', value: 'No' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Ophthalmologically tested',
                    'Suitable for sensitive eyes and contact lens wearers',
                    'Gluten-free and paraben-free formula',
                    'Unique conic fiber brush for optimal lash separation'
                ]
            },
            {
                type: 'list',
                content: [
                    'Start at the base of your lashes and wiggle the brush up to the tips.',
                    'Apply multiple coats for more dramatic results.',
                    'Allow each coat to dry slightly before applying the next.',
                    'Remove with gentle eye makeup remover.'
                ]
            }
        ],
        rating: 4.3,
    };
} else if (pathname === '/products/health-and-beauty/valitic-kojic-acid-dark-spot-remover-soap-bars') {
    detail = {
        features: [
            'Dark Spot Removal',
            'Multi-Ingredient Formula',
            'Skin Brightening',
            'Anti-Aging Properties',
            'Natural Ingredients'
        ],
        descriptions: [
            'Effectively targets and reduces dark spots and hyperpigmentation.',
            'Combines Kojic Acid, Vitamin C, Retinol, and Collagen for comprehensive skin care.',
            'Promotes a brighter, more even skin tone.',
            'Helps reduce the appearance of fine lines and wrinkles.',
            'Infused with natural ingredients like Turmeric and Shea Butter for gentle care.'
        ],
        images: [
            '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-1.jpg',
            '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-2.jpg',
            '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-3.jpg',
            '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-4.jpg',
            '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'VALITIC Kojic Acid Dark Spot Remover Soap Bars',
                imageset: [
                    '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-1.jpg',
                    '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-2.jpg',
                    '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-3.jpg',
                    '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-4.jpg',
                    '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-5.jpg',
                    '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-6.jpg',
                    '/VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C-7.jpg',
                ],
                link: 'https://amzn.to/3XxUGIp'
            }
        ],
        description: '',
        breadcumb: 'VALITIC Kojic Acid Dark Spot Remover Soap Bars',
        title: 'VALITIC Kojic Acid Dark Spot Remover Soap Bars',
        price: '$14.99',
        video: '',
        specs: [
            'Product Information',
            'Key Ingredients',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'VALITIC' },
                    { label: 'Item Form', value: 'Bar' },
                    { label: 'Skin Type', value: 'All' },
                    { label: 'Package Content', value: 'Multiple Bars' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Kojic Acid: Natural skin lightener',
                    'Vitamin C: Antioxidant and brightening agent',
                    'Retinol: Promotes cell turnover',
                    'Collagen: Improves skin elasticity',
                    'Turmeric: Anti-inflammatory properties',
                    'Shea Butter: Moisturizes and nourishes skin'
                ]
            },
            {
                type: 'list',
                content: [
                    'Wet the soap bar and lather in your hands.',
                    'Gently massage the lather onto your face or body in circular motions.',
                    'Leave on for 1-2 minutes before rinsing thoroughly.',
                    'Use 1-2 times daily for best results.',
                    'Follow with moisturizer and sunscreen during daytime use.'
                ]
            }
        ],
        rating: 4.1,
    };






} else if (pathname === '/products/health-and-beauty/cosrx-unscentedfacedull-skinhydratingliquidsnailmucin') {
    detail = {
        features: [
            'Hydrating Formula',
            'Snail Mucin Extract',
            'Unscented',
            'Suitable for Dull Skin',
            'Korean Skincare'
        ],
        descriptions: [
            'Deeply hydrates and moisturizes the skin.',
            'Contains 96% snail mucin for skin repair and regeneration.',
            'Fragrance-free formula suitable for sensitive skin.',
            'Helps revitalize dull and tired-looking skin.',
            'Incorporates advanced Korean skincare technology.'
        ],
        images: [
            '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-1.jpg',
            '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-2.jpg',
            '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-3.jpg',
            '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-4.jpg',
            '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'COSRX Unscented Face Dull Skin Hydrating Liquid Snail Mucin',
                imageset: [
                    '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-1.jpg',
                    '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-2.jpg',
                    '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-3.jpg',
                    '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-4.jpg',
                    '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-5.jpg',
                    '/COSRX Unscentedfacedull Skinhydratingliquidsnailmucin-6.jpg',
                ],
                link: 'https://amzn.to/3MoTPTP'
            }
        ],
        description: '',
        breadcumb: 'COSRX Unscented Face Dull Skin Hydrating Liquid Snail Mucin',
        title: 'COSRX Unscented Face Dull Skin Hydrating Liquid Snail Mucin',
        price: '$15.00',
        video: '',
        specs: [
            'Product Information',
            'Key Ingredients',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'COSRX' },
                    { label: 'Item Form', value: 'Liquid' },
                    { label: 'Volume', value: '100ml' },
                    { label: 'Skin Type', value: 'All, especially Dull' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Snail Secretion Filtrate: Hydrates and repairs skin',
                    'Sodium Hyaluronate: Provides deep hydration',
                    'Betaine: Moisturizes and soothes skin',
                    'Panthenol: Improves skin barrier function'
                ]
            },
            {
                type: 'list',
                content: [
                    'After cleansing and toning, apply an appropriate amount to your face.',
                    'Gently pat in for better absorption.',
                    'Follow with moisturizer if needed.',
                    'Use morning and night for best results.'
                ]
            }
        ],
        rating: 4.6,
    };
} else if (pathname === '/products/health-and-beauty/cosrx-face-moisturize-gel-jar-dry-sensitive-skin-snail-mucin-parabenfree') {
    detail = {
        features: [
            'Moisturizing Gel',
            'Snail Mucin Formula',
            'Paraben-Free',
            'For Dry and Sensitive Skin',
            'Lightweight Texture'
        ],
        descriptions: [
            'Provides intense hydration with a lightweight gel texture.',
            'Contains snail mucin to promote skin repair and regeneration.',
            'Free from parabens and other harsh chemicals.',
            'Specially formulated for dry and sensitive skin types.',
            'Absorbs quickly without leaving a greasy residue.'
        ],
        images: [
            '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-1.jpg',
            '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-2.jpg',
            '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-3.jpg',
            '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-4.jpg',
            '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free',
                imageset: [
                    '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-1.jpg',
                    '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-2.jpg',
                    '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-3.jpg',
                    '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-4.jpg',
                    '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-5.jpg',
                    '/COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free-6.jpg',
                ],
                link: 'https://amzn.to/3Mm5liV'
            }
        ],
        description: '',
        breadcumb: 'COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free',
        title: 'COSRX Face Moisturize Gel Jar Dry Sensitive Skin Snail Mucin Paraben-free',
        price: '$13.99',
        video: '',
        specs: [
            'Product Information',
            'Key Ingredients',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'COSRX' },
                    { label: 'Item Form', value: 'Gel' },
                    { label: 'Volume', value: '50ml' },
                    { label: 'Skin Type', value: 'Dry, Sensitive' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Snail Secretion Filtrate: Hydrates and repairs skin',
                    'Betaine: Moisturizes and soothes skin',
                    'Hyaluronic Acid: Provides deep hydration',
                    'Allantoin: Calms and protects sensitive skin'
                ]
            },
            {
                type: 'list',
                content: [
                    'After cleansing and toning, take an appropriate amount.',
                    'Apply evenly to face and neck.',
                    'Gently pat for better absorption.',
                    'Use morning and night for best results.'
                ]
            }
        ],
        rating: 4.5,
    };
} else if (pathname === '/products/health-and-beauty/olaplex-no-4-bond-maintenance-shampoo') {
    detail = {
        features: [
            'Bond Maintenance',
            'Repairs and Protects',
            'Color-Safe',
            'Sulfate-Free',
            'Professional Formula'
        ],
        descriptions: [
            'Repairs and maintains bonds within the hair structure.',
            'Reduces breakage and strengthens hair from within.',
            'Safe for color-treated hair, helps maintain color vibrancy.',
            'Free from sulfates, parabens, and other harsh chemicals.',
            'Professional-grade formula for salon-quality results at home.'
        ],
        images: [
            '/Olaplex No. 4 Bond Maintenance Shampoo-1.jpg',
            '/Olaplex No. 4 Bond Maintenance Shampoo-2.jpg',
            '/Olaplex No. 4 Bond Maintenance Shampoo-3.jpg',
            '/Olaplex No. 4 Bond Maintenance Shampoo-4.jpg',
            '/Olaplex No. 4 Bond Maintenance Shampoo-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Olaplex No. 4 Bond Maintenance Shampoo',
                imageset: [
                    '/Olaplex No. 4 Bond Maintenance Shampoo-1.jpg',
                    '/Olaplex No. 4 Bond Maintenance Shampoo-2.jpg',
                    '/Olaplex No. 4 Bond Maintenance Shampoo-3.jpg',
                    '/Olaplex No. 4 Bond Maintenance Shampoo-4.jpg',
                    '/Olaplex No. 4 Bond Maintenance Shampoo-5.jpg',
                    '/Olaplex No. 4 Bond Maintenance Shampoo-6.jpg',
                    '/Olaplex No. 4 Bond Maintenance Shampoo-7.jpg',
                ],
                link: 'https://amzn.to/4e3wnao'
            }
        ],
        description: '',
        breadcumb: 'Olaplex No. 4 Bond Maintenance Shampoo',
        title: 'Olaplex No. 4 Bond Maintenance Shampoo',
        price: '$30.00',
        video: '',
        specs: [
            'Product Information',
            'Key Benefits',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Olaplex' },
                    { label: 'Item Form', value: 'Liquid' },
                    { label: 'Volume', value: '250ml' },
                    { label: 'Hair Type', value: 'All' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Repairs damaged and compromised hair',
                    'Strengthens and protects hair structure',
                    'Restores healthy appearance and texture',
                    'Leaves hair easier to manage',
                    'Reduces frizz and flyaways'
                ]
            },
            {
                type: 'list',
                content: [
                    'Apply to wet hair and massage into a lather.',
                    'Leave on for 3-5 minutes.',
                    'Rinse thoroughly.',
                    'Follow with Olaplex No. 5 Bond Maintenance Conditioner for best results.',
                    'Use 2-3 times per week or as needed.'
                ]
            }
        ],
        rating: 4.6,
    };



} else if (pathname === '/products/health-and-beauty/angel-soft-printed-toiletpaper-2-ply-soft-strong-and-septic-safe-unscented') {
    detail = {
        features: [
            '2-Ply Softness',
            'Strong and Durable',
            'Septic-Safe',
            'Unscented',
            'Printed Design'
        ],
        descriptions: [
            'Provides comfort with its soft 2-ply construction.',
            'Strong enough for effective cleaning without tearing.',
            'Safe for septic systems and plumbing.',
            'Free from added fragrances, suitable for sensitive users.',
            'Features a subtle printed design for a touch of elegance.'
        ],
        images: [
            '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-1.jpg',
            '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-2.jpg',
            '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-3.jpg',
            '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-4.jpg',
            '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Angel Soft Printed Toilet Paper 2-Ply',
                imageset: [
                    '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-1.jpg',
                    '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-2.jpg',
                    '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-3.jpg',
                    '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-4.jpg',
                    '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-5.jpg',
                    '/angel soft printed toiletpaper 2 ply soft strong and septic safe unscented-6.jpg',
                ],
                link: 'https://amzn.to/4g2Bhq4'
            }
        ],
        description: '',
        breadcumb: 'Angel Soft Printed Toilet Paper 2-Ply',
        title: 'Angel Soft Printed Toilet Paper 2-Ply Soft Strong and Septic Safe Unscented',
        price: '$12.49',
        video: '',
        specs: [
            'Product Information',
            'Key Features',
            'Environmental Impact'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Angel Soft' },
                    { label: 'Ply', value: '2-Ply' },
                    { label: 'Scent', value: 'Unscented' },
                    { label: 'Septic Safe', value: 'Yes' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Soft and comfortable 2-ply sheets',
                    'Strong and durable for effective use',
                    'Septic-safe formula',
                    'Unscented for sensitive users',
                    'Subtle printed design'
                ]
            },
            {
                type: 'list',
                content: [
                    'Made from sustainably sourced materials',
                    'Packaging made with recycled materials',
                    'Biodegradable and eco-friendly',
                    'Manufactured in facilities that prioritize energy efficiency'
                ]
            }
        ],
        rating: 4.7,
    };


} else if (pathname === '/products/health-and-beauty/waterwipes-plastic-free-original-baby-wipes') {
    detail = {
        features: [
            '99.9% Water-Based',
            'Plastic-Free',
            'Unscented',
            'Hypoallergenic',
            'Suitable for Sensitive Skin'
        ],
        descriptions: [
            'Made with 99.9% water and a drop of fruit extract.',
            'Environmentally friendly with plastic-free packaging.',
            'Free from artificial fragrances, ideal for sensitive noses.',
            'Gentle on sensitive skin, reducing the risk of irritation.',
            'Perfect for newborns, adults, and all skin types in between.'
        ],
        images: [
            '/WaterWipes Plastic-Free Original Baby Wipes-1.jpg',
            '/WaterWipes Plastic-Free Original Baby Wipes-2.jpg',
            '/WaterWipes Plastic-Free Original Baby Wipes-3.jpg',
            '/WaterWipes Plastic-Free Original Baby Wipes-4.jpg',
            '/WaterWipes Plastic-Free Original Baby Wipes-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'WaterWipes Plastic-Free Original Baby Wipes',
                imageset: [
                    '/WaterWipes Plastic-Free Original Baby Wipes-1.jpg',
                    '/WaterWipes Plastic-Free Original Baby Wipes-2.jpg',
                    '/WaterWipes Plastic-Free Original Baby Wipes-3.jpg',
                    '/WaterWipes Plastic-Free Original Baby Wipes-4.jpg',
                    '/WaterWipes Plastic-Free Original Baby Wipes-5.jpg',
                ],
                link: 'https://amzn.to/4g0H3Zh'
            }
        ],
        description: '',
        breadcumb: 'WaterWipes Plastic-Free Original Baby Wipes',
        title: 'WaterWipes Plastic-Free Original Baby Wipes, 99.9% Water Based Wipes, Unscented & Hypoallergenic for Sensitive Skin',
        price: '$11.97',
        video: '',
        specs: [
            'Product Information',
            'Ingredients',
            'Usage Instructions'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'WaterWipes' },
                    { label: 'Item Form', value: 'Wipe' },
                    { label: 'Scent', value: 'Unscented' },
                    { label: 'Skin Type', value: 'Sensitive' }
                ]
            },
            {
                type: 'list',
                content: [
                    '99.9% Purified Water',
                    'Fruit Extract',
                    'No artificial fragrances',
                    'No parabens or sulfates'
                ]
            },
            {
                type: 'list',
                content: [
                    'Gently wipe babys skin as needed.',
                    'Safe for use on hands and face.',
                    'No need to rinse after use.',
                    'Dispose of used wipes responsibly.',
                    'Do not flush.'
                ]
            }
        ],
        rating: 4.7,
    };
} else if (pathname === '/products/health-and-beauty/huggies-natural-care-unscented-sensitive-flip-top-lid') {
    detail = {
        features: [
            'Unscented Formula',
            'Sensitive Skin Friendly',
            'Flip-Top Lid',
            'Natural Care',
            'Hypoallergenic'
        ],
        descriptions: [
            'Free from fragrances, ideal for sensitive skin.',
            'Specially formulated for delicate and sensitive skin types.',
            'Convenient flip-top lid for easy, one-handed dispensing.',
            'Made with naturally derived ingredients for gentle care.',
            'Hypoallergenic and dermatologically tested for safety.'
        ],
        images: [
            '/Huggies natural care Unscented Sensitive flip top lid-1.jpg',
            '/Huggies natural care Unscented Sensitive flip top lid-2.jpg',
            '/Huggies natural care Unscented Sensitive flip top lid-3.jpg',
            '/Huggies natural care Unscented Sensitive flip top lid-4.jpg',
            '/Huggies natural care Unscented Sensitive flip top lid-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Huggies Natural Care Unscented Sensitive Wipes',
                imageset: [
                    '/Huggies natural care Unscented Sensitive flip top lid-1.jpg',
                    '/Huggies natural care Unscented Sensitive flip top lid-2.jpg',
                    '/Huggies natural care Unscented Sensitive flip top lid-3.jpg',
                    '/Huggies natural care Unscented Sensitive flip top lid-4.jpg',
                    '/Huggies natural care Unscented Sensitive flip top lid-5.jpg',
                    '/Huggies natural care Unscented Sensitive flip top lid-6.jpg',
                ],
                link: 'https://amzn.to/3AMapKY'
            }
        ],
        description: '',
        breadcumb: 'Huggies Natural Care Unscented Sensitive Wipes',
        title: 'Huggies Natural Care Unscented Sensitive Flip Top Lid',
        price: '$11.33',
        video: '',
        specs: [
            'Product Information',
            'Key Features',
            'Usage Tips'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Huggies' },
                    { label: 'Item Form', value: 'Wipe' },
                    { label: 'Scent', value: 'Unscented' },
                    { label: 'Skin Type', value: 'Sensitive' }
                ]
            },
            {
                type: 'list',
                content: [
                    'pH-balanced to help maintain healthy skin',
                    'Free from harsh chemicals',
                    'Enriched with aloe and vitamin E',
                    'Thick and soft texture for effective cleaning',
                    'Safe for newborns'
                ]
            },
            {
                type: 'list',
                content: [
                    'Use for diaper changes, messes, and quick clean-ups.',
                    'Gently wipe babys skin, no need to rinse.',
                    'Can be used on hands and face.',
                    'Keep lid closed when not in use to maintain moisture.',
                    'Do not flush.'
                ]
            }
        ],
        rating: 4.8,
    };
} else if (pathname === '/products/health-and-beauty/mielle-organics-rosemary-mint-scalp-hair-strengthening-oil') {
    detail = {
        features: [
            'Strengthening Formula',
            'Scalp Care',
            'All Hair Types',
            'Natural Ingredients',
            'Refreshing Scent'
        ],
        descriptions: [
            'Formulated to strengthen and nourish hair from root to tip.',
            'Promotes a healthy scalp environment for optimal hair growth.',
            'Suitable for all hair types, including curly, coily, and straight.',
            'Made with organic ingredients including rosemary and mint oils.',
            'Invigorating rosemary mint scent for a refreshing experience.'
        ],
        images: [
            '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-1.jpg',
            '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-2.jpg',
            '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-3.jpg',
            '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-4.jpg',
            '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-5.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: 'bg-blue-300 mb rounded-full w-10 h-10',
                textbutton: '',
                subtitle: 'Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil',
                imageset: [
                    '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-1.jpg',
                    '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-2.jpg',
                    '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-3.jpg',
                    '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-4.jpg',
                    '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-5.jpg',
                    '/Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce-6.jpg',
                ],
                link: 'https://amzn.to/4g7izNV'
            }
        ],
        title: 'Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce',
        description: '',
        breadcumb: 'Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce',
        price: '$9.50',
        video: '',
        specs: [
            'Product Information',
            'Key Ingredients',
            'How to Use'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Mielle Organics' },
                    { label: 'Item Form', value: 'Oil' },
                    { label: 'Volume', value: '2 Ounce' },
                    { label: 'Hair Type', value: 'All' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Rosemary Oil: Stimulates hair growth',
                    'Mint Oil: Soothes and refreshes the scalp',
                    'Biotin: Strengthens hair strands',
                    'Castor Oil: Nourishes and promotes thickness',
                    'Coconut Oil: Moisturizes and conditions'
                ]
            },
            {
                type: 'list',
                content: [
                    'Apply a small amount to scalp and massage gently.',
                    'Distribute through hair from roots to ends.',
                    'Can be used on dry or damp hair.',
                    'Use 2-3 times a week or as needed.',
                    'For best results, leave in overnight before washing.'
                ]
            }
        ],
        rating: 4.5,
    };



} else if (pathname === '/products/health-and-beauty/Bounty-napkin-box-1-paper') {
    detail = {
        features: ['Absorbent', 'Durable', 'Versatile'],
        descriptions: [
            'Quickly absorbs spills and messes',
            'Strong enough for tough cleaning tasks',
            'Suitable for various household uses'
        ],
        images: [
            '/Bounty napkin box 1 paper-1.jpg',
            '/Bounty napkin box 1 paper-2.jpg',
            '/Bounty napkin box 1 paper-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '1 Box',
                subtitle: 'Bounty Napkin Box',
                imageset: [
                    '/Bounty napkin box 1 paper-1.jpg',
                    '/Bounty napkin box 1 paper-2.jpg',
                    '/Bounty napkin box 1 paper-3.jpg',
                    '/Bounty napkin box 1 paper-4.jpg',
                    '/Bounty napkin box 1 paper-5.jpg',
                    '/Bounty napkin box 1 paper-6.jpg',
                    '/Bounty napkin box 1 paper-7.jpg',
                ],
                link: 'https://amzn.to/4gkLLRF'
            }
        ],
        description: '',
        breadcumb: 'Bounty Napkin Box',
        title: 'Bounty Napkin Box 1 Paper',
        price: '$9.00',
        video: '',
        specs: ['Product Information', 'Usage', 'Sustainability'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Bounty' },
                    { label: 'Item Form', value: 'Napkin' },
                    { label: 'Material', value: 'Paper' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Ideal for everyday meals and quick cleanups',
                    'Can be used as napkins or paper towels',
                    'Convenient box packaging for easy dispensing'
                ]
            },
            {
                type: 'list',
                content: [
                    'Made from responsibly sourced materials',
                    'Packaging can be recycled where facilities exist'
                ]
            }
        ],
        rating: 4.8
    };
} else if (pathname === '/products/health-and-beauty/Hate-Stains-Co-Stain-Remover-for-Clothes') {
    detail = {
        features: ['Non-Toxic', 'Effective', 'Versatile'],
        descriptions: [
            'Safe for use around children and pets',
            'Removes tough stains from various fabrics',
            'Works on clothing, carpets, and upholstery'
        ],
        images: [
            '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-1.jpg',
            '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-2.jpg',
            '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '1 Bottle',
                subtitle: 'Hate Stains Co. Stain Remover',
                imageset: [
                    '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-1.jpg',
                    '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-2.jpg',
                    '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-3.jpg',
                    '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-4.jpg',
                    '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-5.jpg',
                    '/Miss Mouth\'s Messy Eater Stain Treater Spray - 4oz Stain Remover - Newborn & Baby Essentials - No Dry Cleaning Food, Grease, Coffee Off Laundry, Underwear, Fabric-6.jpg',
                ],
                link: 'https://amzn.to/4dLDfJT'
            }
        ],
        description: '',
        breadcumb: 'Hate Stains Co. Stain Remover',
        title: 'Hate Stains Co. Stain Remover for Clothes',
        price: '$7.39',
        video: '',
        specs: ['Product Information', 'Key Features', 'How to Use'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: "Miss Mouth's" },
                    { label: 'Item Form', value: 'Spray' },
                    { label: 'Scent', value: 'Unscented' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Non-toxic and safe for all fabrics',
                    'Effective on food, dirt, and grass stains',
                    'Color-safe and gentle on clothes'
                ]
            },
            {
                type: 'list',
                content: [
                    'Spray directly on the stain',
                    'Gently rub the fabric together',
                    'Wash as normal or rinse with water',
                    'For best results, treat stains promptly'
                ]
            }
        ],
        rating: 4.4
    };
} else if (pathname === '/products/health-and-beauty/Scott-ComfortPlus-Toilet-Paper') {
    detail = {
        features: ['Soft', 'Strong', 'Septic-Safe'],
        descriptions: [
            'Provides comfort and softness',
            'Durable for effective cleaning',
            'Safe for septic systems'
        ],
        images: [
            '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue.jpg',
            '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue-2.jpg',
            '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '12 Double Rolls',
                subtitle: 'Scott ComfortPlus Toilet Paper',
                imageset: [
                    '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue.jpg',
                    '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue-2.jpg',
                    '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue-3.jpg',
                    '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue-4.jpg',
                    '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue-5.jpg',
                    '/Scott ComfortPlus Toilet Paper. 12 Double Rolls. 231 Sheets per Roll. Septic-Safe. 1-Ply Toilet Tissue-6.jpg',
                ],
                link: 'https://amzn.to/3ATeFYZ'
            }
        ],
        description: '',
        breadcumb: 'Scott ComfortPlus Toilet Paper',
        title: 'Scott ComfortPlus Toilet Paper, 12 Double Rolls',
        price: '$5.99',
        video: '',
        specs: ['Product Information', 'Features', 'Sustainability'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Scott' },
                    { label: 'Sheets per Roll', value: '231' },
                    { label: 'Ply', value: '1-Ply' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Soft and comfortable to use',
                    'Strong and absorbent',
                    'Septic-safe and sewer-safe',
                    'Unscented for sensitive skin'
                ]
            },
            {
                type: 'list',
                content: [
                    'Made with sustainably sourced materials',
                    'Packaging can be recycled where facilities exist',
                    'FSC certified product'
                ]
            }
        ],
        rating: 4.5
    };



} else if (pathname === '/products/health-and-beauty/Dixie-Paper-Plates') {
    detail = {
        features: ['Convenient', 'Durable', 'Versatile'],
        descriptions: [
            'Perfect for quick meals and easy cleanup',
            'Strong enough to hold various food items',
            'Suitable for both indoor and outdoor use'
        ],
        images: [
            '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-1.jpg',
            '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-2.jpg',
            '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '90 Count',
                subtitle: 'Dixie Paper Plates',
                imageset: [
                    '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-1.jpg',
                    '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-2.jpg',
                    '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-3.jpg',
                    '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-4.jpg',
                    '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-5.jpg',
                    '/Dixie Paper Plates. 8 ½ inch. Lunch or Light Dinner Size Printed Disposable Plate. Packaging and Design May Vary 90 Counts (Pack of 1)-6.jpg',
                    
                ],
                link: 'https://amzn.to/3XhrpjF'
            }
        ],
        description: '',
        breadcumb: 'Dixie Paper Plates',
        title: 'Dixie Paper Plates, 8 ½ inch, Lunch or Light Dinner Size',
        price: '$5.68',
        video: '',
        specs: ['Product Information', 'Usage', 'Sustainability'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Dixie' },
                    { label: 'Size', value: '8 ½ inch' },
                    { label: 'Count', value: '90 (Pack of 1)' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Ideal for everyday meals, parties, and picnics',
                    'Microwave-safe for reheating',
                    'Cut-resistant and soak-proof'
                ]
            },
            {
                type: 'list',
                content: [
                    'Made from renewable resources',
                    'Packaging can be recycled where facilities exist'
                ]
            }
        ],
        rating: 4.8
    };
} else if (pathname === '/products/health-and-beauty/Amazon-Brand-Solimo-Disinfecting-Wipes') {
    detail = {
        features: ['Effective', 'Versatile', 'Convenient'],
        descriptions: [
            'Kills 99.9% of bacteria and viruses',
            'Suitable for multiple surfaces',
            'Easy-to-use dispenser'
        ],
        images: [
            '/Amazon Brand - Solimo Disinfecting Wipes-1.jpg',
            '/Amazon Brand - Solimo Disinfecting Wipes-2.jpg',
            '/Amazon Brand - Solimo Disinfecting Wipes-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '1 Pack',
                subtitle: 'Solimo Disinfecting Wipes',
                imageset: [
                    '/Amazon Brand - Solimo Disinfecting Wipes-1.jpg',
                    '/Amazon Brand - Solimo Disinfecting Wipes-2.jpg',
                    '/Amazon Brand - Solimo Disinfecting Wipes-3.jpg',
                    '/Amazon Brand - Solimo Disinfecting Wipes-4.jpg',
                    '/Amazon Brand - Solimo Disinfecting Wipes-5.jpg',
                    '/Amazon Brand - Solimo Disinfecting Wipes-6.jpg',
                ],
                link: 'https://amzn.to/3zdSxrQ'
            }
        ],
        description: '',
        breadcumb: 'Amazon Brand - Solimo Disinfecting Wipes',
        title: 'Amazon Brand - Solimo Disinfecting Wipes',
        price: '$9.88',
        video: '',
        specs: ['Product Information', 'Key Features', 'Usage Instructions'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Scent', value: 'Fresh' },
                    { label: 'Item Form', value: 'Wipe' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Kills 99.9% of bacteria and viruses',
                    'Safe for use on multiple surfaces',
                    'Bleach-free formula',
                    'Leaves a fresh scent'
                ]
            },
            {
                type: 'list',
                content: [
                    'Use on hard, nonporous surfaces',
                    'Wipe surface and allow to air dry',
                    'For heavily soiled areas, clean excess dirt first',
                    'Keep container closed between uses'
                ]
            }
        ],
        rating: 4.8
    };
} else if (pathname === '/products/health-and-beauty/Samnyte-Hair-Wax-Stick') {
    detail = {
        features: ['Strong Hold', 'Easy Application', 'Versatile'],
        descriptions: [
            'Provides long-lasting hold for various hairstyles',
            'Convenient stick form for precise application',
            'Suitable for all hair types and textures'
        ],
        images: [
            '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-`1.jpg',
            '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-2.jpg',
            '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '1 Stick',
                subtitle: 'Samnyte Hair Wax Stick',
                imageset: [
                    '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-`1.jpg',
                    '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-2.jpg',
                    '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-3.jpg',
                    '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-4.jpg',
                    '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-5.jpg',
                    '/Samnyte Hair Wax Stick. Wax Stick for Hair Slick Stick-6.jpg',
                ],
                link: 'https://amzn.to/3XlTgiL'
            }
        ],
        description: '',
        breadcumb: 'Samnyte Hair Wax Stick',
        title: 'Samnyte Hair Wax Stick, Wax Stick for Hair Slick Stick',
        price: '$7.99',
        video: '',
        specs: ['Product Information', 'Key Features', 'How to Use'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Samnyte' },
                    { label: 'Item Form', value: 'Stick' },
                    { label: 'Hair Type', value: 'All' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Strong, long-lasting hold',
                    'Non-greasy formula',
                    'Easy to apply and wash out',
                    'Travel-friendly packaging'
                ]
            },
            {
                type: 'list',
                content: [
                    'Apply to dry or slightly damp hair',
                    'Rub the stick directly onto hair or warm between hands',
                    'Style as desired',
                    'Reapply as needed for touch-ups'
                ]
            }
        ],
        rating: 4.3
    };



} else if (pathname === '/products/health-and-beauty/Schick-Hydro-Silk-Touch-Up-Multipurpose-Exfoliating-Dermaplaning-Tool') {
    detail = {
        features: ['Multipurpose', 'Precision', 'Exfoliating'],
        descriptions: [
            'Ideal for facial hair removal and eyebrow shaping',
            'Comes with a precision cover for detailed work',
            'Helps remove dead skin cells for smoother skin'
        ],
        images: [
            '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-1.jpg',
            '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-2.jpg',
            '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '3 Count',
                subtitle: 'Schick Hydro Silk Touch-Up',
                imageset: [
                    '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-1.jpg',
                    '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-2.jpg',
                    '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-3.jpg',
                    '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-4.jpg',
                    '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-5.jpg',
                    '/Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool. Eyebrow Razor. and Facial Razor with Precision Cover-6.jpg',
                ],
                link: 'https://amzn.to/3zcfJXq'
            }
        ],
        description: '',
        breadcumb: 'Schick Hydro Silk Touch-Up',
        title: 'Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool',
        price: '$5.94',
        video: '',
        specs: ['Product Information', 'Key Features', 'How to Use'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Schick Hydro Silk' },
                    { label: 'Item Count', value: '3' },
                    { label: 'Blade Material', value: 'Stainless Steel' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Dermaplaning tool for face and eyebrows',
                    'Precision cover for detailed shaping',
                    'Exfoliates while removing hair',
                    'Safe for sensitive skin'
                ]
            },
            {
                type: 'list',
                content: [
                    'Cleanse and dry your face',
                    'Hold skin taut and use short, light strokes',
                    'Go in the direction of hair growth',
                    'Use precision cover for eyebrows and small areas'
                ]
            }
        ],
        rating: 4.6
    };






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (pathname === '/products/health-and-beauty/Amazon-Basics-Flushable-Adult-Toilet-Wipes') {
    detail = {
        features: ['Flushable', 'Gentle', 'Convenient'],
        descriptions: [
            'Safe for sewers and septic systems',
            'Soft and gentle on sensitive skin',
            'Resealable packaging for easy use'
        ],
        images: [
            '/Amazon-basics-flushable-adult-toilet-wipes1.jpeg',
            '/Amazon-basics-flushable-adult-toilet-wipes2.jpeg',
            '/Amazon-basics-flushable-adult-toilet-wipes3.jpeg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '1 Pack',
                subtitle: 'Amazon Basics Flushable Wipes',
                imageset: [
                    '/Amazon-basics-flushable-adult-toilet-wipes1.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes2.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes3.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes4.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes5.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes6.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes7.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes8.jpeg',
                    '/Amazon-basics-flushable-adult-toilet-wipes9.jpeg',
                ],
                link: 'https://amzn.to/47qI3lG'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics Flushable Adult Toilet Wipes',
        title: 'Amazon Basics Flushable Adult Toilet Wipes',
        price: '$5.00',
        video: '',
        specs: ['Product Information', 'Key Features', 'Usage Instructions'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Scent', value: 'Unscented' },
                    { label: 'Item Form', value: 'Wipe' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Flushable and septic-safe',
                    'Alcohol-free and hypoallergenic',
                    'Resealable packaging',
                    'Suitable for adults and children'
                ]
            },
            {
                type: 'list',
                content: [
                    'Use as needed for personal hygiene',
                    'Flush only one or two wipes at a time',
                    'Do not flush non-flushable materials',
                    'Store in a cool, dry place'
                ]
            }
        ],
        rating: 4.5
    };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






} else if (pathname === '/products/health-and-beauty/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-Made-With-100-Cotton-625-Count') {
    detail = {
        features: ['Versatile', 'High-Quality', 'Reliable'],
        descriptions: [
            'Suitable for various hygiene and beauty applications',
            'Made with 100% pure cotton for softness',
            'Trusted brand for generations'
        ],
        images: [
            '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-1.jpg',
            '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-2.jpg',
            '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '625 Count',
                subtitle: 'Q-tips Cotton Swabs',
                imageset: [
                    '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-1.jpg',
                    '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-2.jpg',
                    '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-3.jpg',
                    '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-4.jpg',
                    '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-5.jpg',
                    '/Q-tips-Cotton-Swabs-For-Hygiene-and-Beauty-Care-Original-Cotton-Swab-HITE-6.jpg',                 

                ],
                link: 'https://amzn.to/3TpKn6v'
            }
        ],
        description: '',
        breadcumb: 'Q-tips Cotton Swabs',
        title: 'Q-tips Cotton Swabs For Hygiene and Beauty Care, 625 Count',
        price: '$4.47',
        video: '',
        specs: ['Product Information', 'Key Features', 'Usage Tips'],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Q-Tips' },
                    { label: 'Material', value: '100% Cotton' },
                    { label: 'Count', value: '625' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Made with 100% pure cotton',
                    'Soft and gentle on skin',
                    'Versatile for various applications',
                    'Paper stick for stability'
                ]
            },
            {
                type: 'list',
                content: [
                    'Ideal for makeup application and removal',
                    'Use for cleaning small areas or objects',
                    'Suitable for arts and crafts projects',
                    'Do not insert into ear canal'
                ]
            }
        ],
        rating: 4.8
    };



} else if (pathname === '/products/health-and-beauty/Amazon-Basics-Cotton-Swabs-500ct') {
    detail = {
        features: ['Versatile', 'High-Quality', 'Economical'],
        descriptions: [
            'Suitable for various personal care and household uses',
            'Made with 100% cotton for softness and absorbency',
            'Great value pack with 500 cotton swabs'
        ],
        images: [
            '/Amazon Basics Cotton Swabs-1.jpg',
            '/Amazon Basics Cotton Swabs-2.jpg',
            '/Amazon Basics Cotton Swabs-3.jpg',
        ],
        carousel_feature: [],
        carousel_feature_images: [],
        carousel_desc: [],
        options: [
            {
                colorbutton: '',
                textbutton: '500 Count',
                subtitle: 'Amazon Basics Cotton Swabs',
                imageset: [
                    '/Amazon Basics Cotton Swabs-1.jpg',
                    '/Amazon Basics Cotton Swabs-2.jpg',
                    '/Amazon Basics Cotton Swabs-3.jpg',
                    '/Amazon Basics Cotton Swabs-4.jpg',
                    '/Amazon Basics Cotton Swabs-5.jpg',
                    '/Amazon Basics Cotton Swabs-6.jpg',
                ],
                link: 'https://amzn.to/47goyMx'
            }
        ],
        description: '',
        breadcumb: 'Amazon Basics Cotton Swabs',
        title: 'Amazon Basics Cotton Swabs, 500ct',
        price: '$2.65',
        video: '',
        specs: [
            'Product Information',
            'Key Features',
            'Usage Tips'
        ],
        values: [
            {
                type: 'table',
                content: [
                    { label: 'Brand', value: 'Amazon Basics' },
                    { label: 'Material', value: '100% Cotton' },
                    { label: 'Count', value: '500' }
                ]
            },
            {
                type: 'list',
                content: [
                    'Made with 100% pure cotton',
                    'Soft and gentle on skin',
                    'Versatile for various applications',
                    'Paper stick for stability'
                ]
            },
            {
                type: 'list',
                content: [
                    'Ideal for makeup application and removal',
                    'Use for cleaning small areas or objects',
                    'Suitable for arts and crafts projects',
                    'Do not insert into ear canal'
                ]
            }
        ],
        rating: 4.7
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
            rating:0

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




                                This is a category for health, beauty, and supplements

                                <div className="flex flex-col">
                                    {detail.features.map((feature, index) => (
                                        <div key={index} className={`flex ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-400'}`}>
                                            <div className="p-5 basis-1/2">
                                                <Image 
                                                    src={detail.images[index] || ''}  // Fallback to empty string if image doesn't exist
                                                    alt={`Feature image ${index + 1}`}
                                                    width={500}
                                                    height={500}
                                                    className="object-contain rounded-2xl"
                                                />
                                            </div>
                                            <div className="flex flex-col basis-1/2 justify-center ml-5">
                                                <div className="text-4xl font-bold mb-2">{feature}</div>
                                                <div className="text-2xl mt-2">{detail.descriptions[index] || ''}</div>
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