"use client";
import { ImageCarousel } from "@/components/imageCarousel";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ProductOptions from '@/components/ui/ProductOptions';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
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
  
    rating: number; // Added rating from productData.ts
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
    const [imageSets, setImageSets] = useState<boolean[]>(Array(11).fill(false)); // Initialize an array for image sets
    const [currentImageSetIndex, setCurrentImageSetIndex] = useState(0); // Track the current image set index
    const [currentLink, setCurrentLink] = useState(''); // Add state for current link
    const [zoomable, setZoomable] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [position, setPosition] = useState({ x: 1, y: 100, mouseX: 0, mouseY: 0 });
    const [currentImage, setCurrentImage] = useState(''); // Add state for current image
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Add state for current image index
    const [carouselCounter, setCarouselCounter] = useState(0); // {{ edit_1 }}
    const [currentSubtitle, setCurrentSubtitle] = useState(''); 
    const [selectedColor, setSelectedColor] = useState(0); // New state to track selected color

    // Set the first image set to true
    useEffect(() => {
        setImageSets(prev => {
            const newSets = [...prev];
            newSets[0] = true; // Set the first image set to true
            return newSets;
        });
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








    





    const renderButton = (index: number, isTextButton: boolean) => {
        const option = detail.options[index];
        const isActive = isTextButton ? imageSets[index] : index === selectedColor;
        const setActive = () => {
            if (isTextButton) {
                // For text buttons (size), keep the current color selection
                setImageSets(prev => {
                    const newSets = [...prev];
                    newSets[index] = true;
                    for (let i = 0; i < detail.options.length; i++) {
                        if (i !== index && detail.options[i].textbutton) {
                            newSets[i] = false;
                        }
                    }
                    return newSets;
                });
            } else {
                // For color buttons, update both imageSets and selectedColor
                setSelectedColor(index);
                setImageSets(prev => {
                    const newSets = Array(prev.length).fill(false);
                    newSets[index] = true;
                    return newSets;
                });
                setCurrentImageSetIndex(index); // Update current image set index
            }
            setCurrentLink(option.link);
            setCurrentSubtitle(option.subtitle);
        };

        return (
            isTextButton ? (
                option.textbutton && (
                    <Button 
                        onClick={setActive} 
                        className={`${isActive ? 'border-4 border-blue-500 bg-blue-500' : 'border border-black bg-white text-black'} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl w-full h-full rounded-none whitespace-normal break-words p-1 flex items-center justify-center`}
                    >
                        {option.textbutton}
                    </Button>
                )
            ) : (
                option.colorbutton && (
                    <Button 
                        onClick={setActive} 
                        className={`${isActive ? 'border-4 border-blue-500 my-4' : 'border-2 border-black my-4'} ${option.colorbutton}`}
                    />
                )
            )
        );
    };







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (pathname === '/products/fashion/adidas-womens-duramo-sl-20-running-shoe') {
        detail = {

            features: [
                '<strong>SUPPORTIVE UPPER</strong>',
                '<strong>LIGHT MAKES FAST</strong>',
                '<strong>HIGH TRACTION</strong>',
                '<strong>MADE WITH RECYCLED CONTENT</strong>',
            ],
            descriptions: [
                '<p>Mesh and textile upper provides breathability and support.</p>',
                '<p>adidas LIGHTMOTION provides super-light cushioning for next-level movement.</p>',
                '<p>The rubber outsole delivers great grip</p>',
                '<p>Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste</p>',
            ],
            images: [
                '/adidas-duramosl-feature1.webp',
                '/adidas-duramosl-feature2.webp',
                '/adidas-duramosl-feature4.jpeg',
                '/adidas-duramosl-feature3.webp'
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
            options: [
                {
                  colorbutton: 'bg-black rounded-full w-10 h-10',
                  subtitle: 'Black',
                  imageset: [
                    '/adidas-duramosl-black1.jpeg',
                    '/adidas-duramosl-black2.jpeg',
                    '/adidas-duramosl-black3.jpeg',
                    '/adidas-duramosl-black4.jpeg',
                    '/adidas-duramosl-black5.jpeg',
                    '/adidas-duramosl-black6.jpeg',
                  ],
                  link: 'https://amzn.to/3Xb73tX',
                  textbutton: ""
                },
                {
                  colorbutton: 'bg-gray-300 rounded-full w-10 h-10',
                  subtitle: 'White',
                  imageset: [
                    '/adidas-duramosl-white1.jpeg',
                    '/adidas-duramosl-white2.jpeg',
                    '/adidas-duramosl-white3.jpeg',
                    '/adidas-duramosl-white4.jpeg',
                    '/adidas-duramosl-white5.jpeg',
                    '/adidas-duramosl-white6.jpeg',
                  ],
                  link: 'https://amzn.to/3Xb73tX',
                  textbutton: ""
                },
                {
                  textbutton: '5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '5 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '5.5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '5.5 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '6',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '6 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '6.5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '6.5 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '7',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '7 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '7.5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '7.5 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '8',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '8 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '8.5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '8.5 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '9',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '9 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '9.5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '9.5 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '10',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '10 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '10.5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '11',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '11 wide',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '13',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
                {
                  textbutton: '13.5',
                  link: 'https://amzn.to/3Xb73tX',
                  colorbutton: "",
                  subtitle: "",
                  imageset: []
                },
            ],
//
//
//
//
//
//
//
            description: 'Feel light, fast and free. When youre ready to pick up the pace and train for courses up to 10 kilometres, these adidas running shoes support your efforts with comfort. Theyre light from top to bottom with a soft mono mesh upper and stable LIGHTMOTION midsole. On the track or pavement, an Adiwear outsole provides durability and grip. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.',            
            breadcumb: 'Adidas Women Duramo Sl 2.0 Running Shoe',
            title: 'Adidas Women Duramo Sl 2.0 Running Shoe',
            price: '$55.00 - $70.00',
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
            ], // Add your specs here

            values: [
              {
                type: 'table',
                content: [
                  { label: 'Brand', value: 'Adidas' },
                  { label: 'Sole material', value: 'Rubber' },
                  { label: 'Closure type', value: 'Lace-Up' },
                  { label: 'Water resistance level', value: 'Not Water Resistant' },
                  { label: 'Fit', value: 'Regular fit' },
                  { label: 'Fabric Type', value: '50% Textile, 30% Synthetic, 20%Rubber' }

                ]
              },
              {
                type: 'text',
                content: '12.52 x 8.46 x 4.88 inches; 2 Pounds'
              }
            ], // Add corresponding values here
            rating: 4.3, // Added rating from productData.ts
        };


        

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (pathname === '/products/fashion/Crocs-Unisex-Adult-Classic-Clogs') { // New condition for Crocs product
        detail = {
            features: [
                '<strong>LIGHTWEIGHT AND FUN</strong>',
                '<strong>VERSATILE AND COMFORTABLE</strong>',
                '<strong>VENTILATION PORTS</strong>',
                '<strong>DESIGNED TO FIT</strong>',
            ],
            descriptions: [
                '<p>Incredibly light and fun to wear, these Crocs are the perfect pair for any occasion.</p>',
                '<p>These slip-on clogs are easy to take on and off, while being extremely durable.</p>',
                '<p>Ventilation ports add breathability and help shed water and debris quickly.</p>',
                '<p>These Crocs offer a roomy fit and we recommend ordering a size down to the next largest whole size.</p>',
            ],
            images: [
                '/Crocs-Unisex-Adult-Classic-Clogs-3.jpg',
                '/Crocs-Unisex-Adult-Classic-Clogs-4.jpg',
                '/Crocs-Unisex-Adult-Classic-Clogs-5.jpg',
                '/Crocs-Unisex-Adult-Classic-Clogs-6.jpg',
            ],
            carousel_feature: [],
            carousel_feature_images: [],
            carousel_desc: [],
            options: [
                {
                    colorbutton: 'bg-black rounded-full w-10 h-10',
                    subtitle: 'Black',
                    imageset: [
                        '/Crocs-Unisex-Adult-Classic-Clogs-1.jpg',
                        '/Crocs-Unisex-Adult-Classic-Clogs-2.jpg',
                        '/Crocs-Unisex-Adult-Classic-Clogs-3.jpg',
                        '/Crocs-Unisex-Adult-Classic-Clogs-4.jpg',
                        '/Crocs-Unisex-Adult-Classic-Clogs-5.jpg',
                        '/Crocs-Unisex-Adult-Classic-Clogs-6.jpg',
                    ],
                    link: 'https://amzn.to/4dRnctO',
                    textbutton: ""
                },
                {
                    colorbutton: 'bg-white rounded-full w-10 h-10',
                    subtitle: 'White',
                    imageset: [
                        '/crocs-classic-white1.jpg',
                        '/crocs-classic-white2.jpg',
                        '/crocs-classic-white3.jpg',
                        '/crocs-classic-white4.jpg',
                    ],
                    link: 'https://amzn.to/4fQl2fD',
                    textbutton: ""
                },
                // Add more color options if needed
            ],
            description: 'Crocs Unisex-Adult Classic Clogs are comfortable and versatile footwear for all occasions. These slip-on clogs are incredibly light and fun to wear, with ventilation ports for breathability and quick water shedding. Designed to fit comfortably, they are perfect for any casual outing.',
            breadcumb: 'Crocs Unisex-Adult Classic Clogs',
            title: 'Crocs Unisex-Adult Classic Clogs',
            price: '$44.82',
            video: '',
            specs: [
                'General Specifications',
                'Weight and dimensions',
            ],
            values: [
                {
                    type: 'table',
                    content: [
                        { label: 'Brand', value: 'Crocs' },
                        { label: 'Material', value: 'Croslite' },
                        { label: 'Closure type', value: 'Slip-On' },
                        { label: 'Water resistance level', value: 'Water Resistant' },
                        { label: 'Fit', value: 'Roomy fit' },
                        { label: 'Weight', value: '7 ounces' }
                    ]
                },
                {
                    type: 'text',
                    content: '10 x 8 x 4 inches; 7 Ounces'
                }
            ],
            rating: 4.8, // Added rating from productData.ts
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
            rating: 0, // Default rating if not found in productData.ts

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


                        <div className="flex flex-col order-2 md:order-1 basis-3/4 overscroll-contain h-[650px]">
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

                                
                                <div className="flex justify-center mb-5 mt-10 mx-6"> {/* Outer flex container for centering */}
                                    <div className="inline-flex flex-wrap justify-center mx-auto"> {/* Inner flex container with max width */}
                                        {Array.from({ length: detail.options.length }, (_, i) => {
                                            if (detail.options[i].textbutton) {
                                                return (
                                                    <div key={i} className="w-[calc(8%-0.5rem)] aspect-square m-1"> {/* Removed m-1 */}
                                                        {renderButton(i, true)}
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
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

                                <div className="mx-10 my-20 text-center text-2xl border-x-8 border-blue-500 p-10 rounded-3xl">{detail.description}</div>



                            
                                {detail.features.map((feature, index) => (
                                    <React.Fragment key={index}>
                                    <motion.div 
                                        style={{ justifyContent: "flex-start" }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1}}
                                        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.8}}
                                    >
                                        <div className="mt-10 p-5">
                                        <div className="relative" style={{ height: '500px' }}>
                                            <div 
                                            className="absolute inset-0 rounded-2xl border-4 border-blue-700" 
                                            style={{ 
                                                backgroundImage: `url(${detail.images[index]})`, 
                                                backgroundSize: 'cover', 
                                                backgroundPosition: 'center',
                                            }}
                                            />
                                        </div>
                                        <div className="p-5 text-center">
                                            <h1 className="text-7xl mb-4" dangerouslySetInnerHTML={{ __html: feature }}></h1>
                                            {detail.descriptions[index] && (
                                            <div className="text-2xl" dangerouslySetInnerHTML={{ __html: detail.descriptions[index] }}></div>
                                            )}
                                        </div>
                                        </div>
                                    </motion.div>
                                    {index < detail.features.length - 1 && (
                                        <hr className="my-10 border-t-2 border-blue-700 border-8 w-4/5 mx-auto" />
                                    )}
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

                        {detail.options.length > 1 && detail.options.some(option => option.colorbutton) && (
                            <ProductOptions
                                options={detail.options.filter(option => option.colorbutton)}
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