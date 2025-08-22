'use client';
import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';

const ArticlePage = () => {
const article = {
    title: "Trending Cameras: Capture Every Moment in Style!",
    description: "These days, cameras are more than just tools for taking photos—they\re like an extension of your personality, your creativity, and even your throwback vibes. From sleek digital gadgets to fun instant print cameras, there’s something for every type of photographer. Let’s check out what’s hot in the camera world right now!",
    titleImage: {
        src: "/blog-trending-cameras-capture-every-moment-in-style-cover.jpg",
        alt: "aaaaaa",
        width: 300,
        height: 200
    },
    content:
    [
        {
            type: 'header1',
            content: '1. Instant Cameras: Retro Vibes, Real Prints',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Everyone’s getting back into instant cameras, and it’s easy to see why! These cameras bring that old-school magic but with a modern twist, printing out photos right on the spot. Brands like Fujifilm’s Instax Mini 11 are super popular, with cute colors, easy-to-use features, and crisp instant prints. Perfect for parties, vacations, or just everyday snaps you can hold the moment in your hand, not just on your screen.'
                }
            ]
        },
        {
            type: 'header1',
            content: '2. Compact Digital Cameras: Small but Mighty',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Sure, smartphone cameras are amazing nowadays, but compact digital cameras still have their place in the game. They’ve got better image quality, bigger sensors, and more manual controls. Brands like Sony and Canon are still killing it with these pocket-sized powerhouses. Take the Sony RX100 series, for example it’s a go to for travel photographers who want DSLR-level quality without carrying a ton of gear.'
                }
            ]
        },
        {
            type: 'header1',
            content: '3. Mirrorless Cameras: The Future Is Here',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Mirrorless cameras are taking over the photography world, blending DSLR quality with a lighter, more portable design. Sony’s Alpha series and Canon EOS R models are crushing it with features like incredible low-light performance, fast autofocus, and interchangeable lenses. Whether you’re a pro or just leveling up your photo game, these cameras give you all the perks without the bulk.'
                }
            ]
        },
        {
            type: 'header1',
            content: '4. Action Cameras: For the Thrill Seekers',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'If you’re into capturing your most epic adventures, action cameras like the GoPro Hero series are still the ones to beat. These tiny but tough cameras can go anywhere with you—underwater, on a mountain, you name it—and they shoot super-smooth, high-quality videos. Perfect for thrill junkies and vloggers who want to capture every intense moment.'
                }
            ]
        },
        {
            type: 'header1',
            content: 'Amazon Camera Recommendations! ',
            align: 'center',
            text:
            [
                {
                    type: 'product',
                    content: {
                        name: 'Fujifilm Instax Mini 11',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/4f1XXVW',
                        description: 'The ultimate instant camera! Fun, colorful, and easy to use, it auto-adjusts for perfect snaps every time, and prints them instantly. Great for capturing spontaneous moments!',
                        image: {
                            src: '/blog-trending-cameras-capture-every-moment-in-style1.png',
                            alt: 'Fujifilm Instax Mini 11',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: 'Canon EOS R10 Mirrorless Camera',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/3Yos8Bo',
                        description: 'A versatile choice for enthusiasts, offering top-tier photo and video quality in a compact body. Ideal for vloggers or budding photographers.',
                        image: {
                            src: '/blog-trending-cameras-capture-every-moment-in-style2.png',
                            alt: 'Canon EOS R10 Mirrorless Camera',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: 'Sony RX100 VII',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/3BOL2IK',
                        description: 'A premium compact camera for serious shooters who want DSLR-quality images without lugging heavy gear. Perfect for travel and street photography.',
                        image: {
                            src: '/blog-trending-cameras-capture-every-moment-in-style3.png',
                            alt: 'Sony RX100 VII',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: 'GoPro HERO12 Black',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/4eM028K',
                        description: 'Whether you’re diving, biking, or climbing, this action cam will capture every heart-pounding moment in 4K glory. A must-have for adventure lovers!',
                        image: {
                            src: '/blog-trending-cameras-capture-every-moment-in-style4.png',
                            alt: 'GoPro HERO12 Black',
                            width: 300,
                            height: 200
                        }
                    }
                },
            ]
        },
        {
            type: 'header1',
            content: 'Head over to Amazon and grab one that fits your style—because life’s too short for boring photos!',
            align: 'center',
            text:
            [
                
            ],
        },
    ],


    date: "May 10, 2024",
    references: [
    ]
};
return <ArticleLayout article={article} />;
};

export default ArticlePage;