'use client';
import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';

const ArticlePage = () => {
const article = {
    title: "How to Be the Ultimate Coquette: Accessorize Like a Pro and Slay the Look",
    description: "Alright, besties, let’s be real you’re probably obsessed with the Coquette trend right now, and honestly, who isn’t? It’s feminine, flirty, and super cute. But here’s the tea: to truly nail the Coquette look, it’s all about the accessories. Yup, you heard me. You can have the cutest dress ever, but if you’re not accessorizing right, you’re missing out on that extra sparkle that makes the whole look come together.",
    titleImage: {
        src: "/blog-how-to-be-the-ultimate-coquette-cover.jpg",
        alt: "aaaaaa",
        width: 300,
        height: 200
    },
    content:
    [
        {
            type: 'header1',
            content: '',
            align: 'center',
            text:
            [
                {
                    type: 'paragraph',
                    textAlign: 'center',
                    content: 'So, if you wanna live that dreamy Coquette life, I’ve got your back. We’re talking hair clips, dainty necklaces, bracelets that twinkle — all the good stuff. By the end of this, you’ll be accessorizing like a pro, and your outfit will scream Coquette queen. And yes, I’ll totally drop some Amazon suggestions at the end so you can grab everything you need!'
                }
            ],
        },
        {
            type: 'header1',
            content: 'Why Accessories are EVERYTHING',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Let me just say this loud and clear: accessories are life. They’re what take your look from cute to OMG stunning. It’s the little details that make the biggest impact — whether it’s a pearl hair clip, a delicate necklace, or a chic bracelet, these pieces are the secret sauce to that Coquette aesthetic.'
                },
                {
                    type: 'paragraph',
                    content: 'The whole Coquette vibe is soft, romantic, and a little vintage, right? So, you gotta make sure your accessories reflect that. Think pastels, pearls, lace, bows — basically, all the things that make you feel like a total princess. Trust me, once you get the accessories right, you’ll feel like you’re living in your own fairy tale'
                },
            ],
        },
        {
            type: 'header1',
            content: 'The Must-Have Coquette Accessories',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Let’s break it down! If you wanna level up your Coquette game, these are the accessories you NEED in your wardrobe:'
                },
            ],
            
            subsections:
            [
                {
                    type: 'header2',
                    content: '1. Hair Clips and Bows for Days',
                    text:
                    [
                        {
                            type: 'product',
                            content: {
                                name: 'Furling Pompoms Hair Bows Clips for Women Black White Pink Bows Hair Clips for Girls Ribbons Bow Barrettes Satin Hair Bows Long Tail Hair Accessories 3pcs ',
                                buttonText: 'Check on Amazon',
                                buttonLink: 'https://amzn.to/4dOuLB4',
                                description: 'Nothing says Coquette like a cute hair clip or an oversized bow. Whether you’re rocking soft curls or a sleek ponytail, a bow or a pearl-studded clip adds that extra “aww” factor to your look. It’s like instant Coquette magic.',
                                image: {
                                    src: '/blog-how-to-be-the-ultimate-coquette1.png',
                                    alt: 'Furling Pompoms Hair Bows Clips for Women Black White Pink Bows Hair Clips for Girls Ribbons Bow Barrettes Satin Hair Bows Long Tail Hair Accessories 3pcs',
                                    width: 300,
                                    height: 200
                                }
                            }
                        },
                        {
                            type: 'paragraph',
                            content: 'Pro tip: Go for soft colors like baby pink, mint green, or cream. You can even get clips with lace or satin textures to make your hairstyle pop even more. And don’t be shy with the size bigger bows are better, babe.'
                        },
                    ],
                },
                {
                    type: 'header2',
                    content: '2. Dainty Necklaces = Major Vibes',
                    text:
                    [
                        {
                            type: 'product',
                            content: {
                                name: 'Befettly Moon Pendant Necklace 14K Gold Fill Dainty Hammered Moon Phase Gold Choker Simple Crescent Moon Full Moon Karma Circle Choker Necklace ',
                                buttonText: 'Check on Amazon',
                                buttonLink: 'https://amzn.to/3UgeNIP',
                                description: 'When it comes to jewelry, it’s all about keeping it cute and simple. Thin chains with tiny charms are perfect for the Coquette vibe. Think little hearts, stars, or vintage-style lockets. You don’t wanna go too chunky here; the goal is to keep things soft and sweet.',
                                image: {
                                    src: '/blog-how-to-be-the-ultimate-coquette2.png',
                                    alt: 'Befettly Moon Pendant Necklace 14K Gold Fill Dainty Hammered Moon Phase Gold Choker Simple Crescent Moon Full Moon Karma Circle Choker Necklace',
                                    width: 300,
                                    height: 200
                                }
                            }
                        },
                        {
                            type: 'paragraph',
                            content: 'Pro tip: Layering is your friend! Stack a couple of delicate necklaces to add depth to your outfit without going overboar'
                        },
                    ],
                },
                {
                    type: 'header2',
                    content: '3. Bracelets and Rings to Add That Extra Sparkle',
                    text:
                    [
                        {
                            type: 'product',
                            content: {
                                name: 'Pymach Dainty Gold Pearl Crystal Beaded Bracelets Set for Women 14K Real Gold Plated Bead Pearl Crystal Beads Bracelet Stackable Paperclip Link Chain Bracelets Gold Bracelets for Women Trendy Jewelry ',
                                buttonText: 'Check on Amazon',
                                buttonLink: 'https://amzn.to/4dJUxWY',
                                description: 'Your hands deserve some love too! A slim, gold bracelet or a pearl bangle is all you need to add that subtle touch of elegance. And don’t forget your rings — dainty rings with little stones or heart-shaped designs are perfect for that feminine touch.',
                                image: {
                                    src: '/blog-how-to-be-the-ultimate-coquette3.png',
                                    alt: 'Pymach Dainty Gold Pearl Crystal Beaded Bracelets Set for Women 14K Real Gold Plated Bead Pearl Crystal Beads Bracelet Stackable Paperclip Link Chain Bracelets Gold Bracelets for Women Trendy Jewelry',
                                    width: 300,
                                    height: 200
                                }
                            }
                        },
                        {
                            type: 'paragraph',
                            content: 'Pro tip: Mix and match! Stack a few rings or layer bracelets with your watch for that chic, effortless Coquette look.'
                        },
                    ],
                },
                {
                    type: 'header2',
                    content: '4. Mini Bags that Say “I’m Fancy”',
                    text:
                    [
                        {
                            type: 'product',
                            content: {
                                name: 'GORGLITTER Women\'s Bow Purse Coquette Purse Sweet Pearl Shoulder Bag Bow Handbag ',
                                buttonText: 'Check on Amazon',
                                buttonLink: 'https://amzn.to/4f6d1C9',
                                description: 'The right handbag can totally level up your outfit. Think small, structured bags in soft colors, with gold or pearl accents. It’s not just about looking cute though — you need something that fits your essentials (phone, lip gloss, keys) while still giving off those Coquette princess vibes.',
                                image: {
                                    src: '/blog-how-to-be-the-ultimate-coquette4.png',
                                    alt: 'GORGLITTER Women\'s Bow Purse Coquette Purse Sweet Pearl Shoulder Bag Bow Handbag ',
                                    width: 300,
                                    height: 200
                                }
                            }
                        },
                        {
                            type: 'paragraph',
                            content: 'Pro tip: A vintage-style mini bag with a top handle? YES, girl. That’s the vibe. Go for soft textures like velvet or leather in pastel colors.'
                        },
                    ],
                },
                {
                    type: 'header2',
                    content: '5. Cute Earrings for That Final Touch',
                    text:
                    [
                        {
                            type: 'product',
                            content: {
                                name: 'Gold Bow Earrings Set Golden Silver Ribbon Stud Earrings for Women Gift ',
                                buttonText: 'Check on Amazon',
                                buttonLink: 'aaaaaa',
                                description: 'Earrings can make or break your look. You want something that’s delicate but still eye-catching. Pearl studs, tiny hoops, or drop earrings with little charms? Yes, please! These will give your look that extra glow without overpowering the rest of your outfit.',
                                image: {
                                    src: '/blog-how-to-be-the-ultimate-coquette5.png',
                                    alt: 'Gold Bow Earrings Set Golden Silver Ribbon Stud Earrings for Women Gift ',
                                    width: 300,
                                    height: 200
                                }
                            }
                        },
                        {
                            type: 'paragraph',
                            content: 'Pro tip: Keep it light. You don’t want heavy earrings that’ll pull down your ears — go for something dainty that moves with you, adding just the right amount of sparkle.'
                        },
                    ],
                },
            ],
        },
        {
            type: 'header1',
            content: 'There you go, babe!',
            align: 'center',
            text:
            [
                {
                    type: 'paragraph',
                    textAlign: 'center',
                    content: 'With these must-have accessories and a few key styling tips, you’ll be rocking the Coquette trend like an absolute star. So get ready to add some bows, pearls, and pastel magic to your wardrobe — and don’t forget to hit up Amazon for all your Coquette needs!'
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