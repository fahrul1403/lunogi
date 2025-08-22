'use client';
import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';

const ArticlePage = () => {
const article = {
    title: "Stay Glowing and Protected: Sunscreens You Can’t Miss!",
    description: "",
    titleImage: {
        src: "/blog-sunscreens-you-cant-miss-cover.jpg",
        alt: "aaaaaa",
        width: 300,
        height: 200
    },
    content:
    [
        {
            type: 'header1',
            content: 'Why Sunscreen is Your Skin’s Bestie (No Cap!)',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'If you think sunscreen is just for beach days or summer, we need to talk! Sunscreen is like your skin’s armor against harmful UV rays, whether it’s sunny, cloudy, or even raining. The sun can mess with your skin 24/7, and if you don’t protect yourself, you’re risking sunburn, premature aging, and even skin cancer. Let’s break down why sunscreen should be a part of your daily routine because trust me, your future self will thank you.'
                }
            ],
        },
        {
            type: 'header1',
            content: 'Sun Protection 101: The Basics You Need to Know',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Before diving into product recs, let’s get clear on what sunscreen does. Sunscreen works by either absorbing or reflecting UV rays, which come in two types: UVA and UVB. UVA rays are responsible for premature aging, like wrinkles and dark spots, while UVB rays are the ones that burn your skin and cause cancer. A good sunscreen will protect against both, and that’s what you’re looking for when you see "broad-spectrum" on the label.'
                },
                {
                    type: 'paragraph',
                    content: 'Now that you’re all caught up on why sunscreen matters, let’s talk about SPF. SPF (Sun Protection Factor) measures how well the sunscreen can protect you from UVB rays. The higher the number, the longer you can stay in the sun without burning. For everyday use, experts recommend at least SPF 30.'
                },
            ],
        },
        {
            type: 'header1',
            content: 'Why Sunscreen Is Non-Negotiable in Your Skincare Routine',
            text:
            [
                {
                    type: 'grid',
                    content: {
                        title: '',
                        titleAlign: 'center',
                        columns: 2,
                        items:
                        [
                            {
                                title: 'Prevents Premature Aging',
                                description: 'If you want to keep your skin looking youthful and smooth, sunscreen is the #1 anti-aging product. It helps prevent fine lines, wrinkles, and those annoying dark spots.'
                            },
                            {
                                title: 'Reduces Risk of Skin Cancer',
                                description: 'Skin cancer is real, and wearing sunscreen daily can significantly lower your risk of developing it.'
                            },
                            {
                                title: 'Keeps Your Skin Even and Glowing',
                                description: 'Sunscreen prevents hyperpigmentation and dark spots, keeping your skin tone even and radiant.'
                            },
                            {
                                title: 'Protects from Blue Light',
                                description: 'Did you know that blue light from your phone or laptop can also damage your skin? Some sunscreens now come with blue light protection to keep your skin safe, even indoors.'
                            },
                        ]
                    }
                }
            ],
        },
        {
            type: 'header1',
            content: 'How Sunscreen Became a Skincare Essential',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Sunscreen has been around for decades, but it wasn’t always the go-to product it is today. Back in the 1930s, the first commercial sunscreens were made to protect soldiers during World War II. Over time, more research revealed just how damaging UV rays could be, leading to advancements in sun protection. Fast forward to today, and sunscreen is not just about protection it’s also a key player in maintaining youthful and healthy skin.'
                }
            ],
        },
        {
            type: 'header1',
            content: 'Top 3 Sunscreens to Add to Your Cart Right Now',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Now that we’ve established how sunscreen can be your skin’s ride-or-die, let’s get into the fun part: finding the perfect product! Here are three top-rated sunscreens you can grab on Amazon to keep your skin protected and glowing all year round:'
                },
                {
                    type: 'product',
                    content: {
                        name: 'EltaMD UV Clear Face Sunscreen SPF 46',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/3Y6Ser7',
                        description: 'Oil Free Sunscreen with Zinc Oxide, Dermatologist Recommended Sunscreen, 1.7 oz Pump',
                        image: {
                            src: '/blog-sunscreens-you-cant-miss1.png',
                            alt: 'EltaMD UV Clear Face Sunscreen SPF 46',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: 'La Roche-Posay Anthelios Tinted Sunscreen SPF 40+ ',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/3NsiTtx',
                        description: 'Broad Spectrum SPF + Antioxidants , Titanium Dioxide & Zinc Oxide Sunscreen, 4 Flexible Shades With No White Cast, Oil Free & Oxybenzone Free ',
                        image: {
                            src: '/blog-sunscreens-you-cant-miss2.png',
                            alt: 'La Roche-Posay Anthelios Tinted Sunscreen SPF 40+ ',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: 'Neutrogena Hydro Boost Moisturizing Water Gel Sunscreen Lotion with Broad Spectrum SPF 50',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/3NrrXPB',
                        description: 'Water-Resistant & Non-Greasy Hydrating Sunscreen Lotion, Oil-Free, 3 fl. oz, Pack of 3 ',
                        image: {
                            src: '/blog-sunscreens-you-cant-miss3.png',
                            alt: 'Neutrogena Hydro Boost Moisturizing Water Gel Sunscreen Lotion with Broad Spectrum SPF 50',
                            width: 300,
                            height: 200
                        }
                    }
                },
            ],
        },
        {
            type: 'header1',
            content: 'Don’t Skip the SPF!',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Sunscreen isn’t just for sunny days or vacations it’s something your skin needs every single day. Whether you’re trying to keep wrinkles at bay, avoid skin cancer, or just keep your complexion looking smooth and even, sunscreen is your secret weapon. So why wait? Head over to Amazon and snag one of these top-rated sunscreens: EltaMD UV Clear, La Roche-Posay Anthelios, or Neutrogena Hydro Boost. Your skin will love you for it!'
                }
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