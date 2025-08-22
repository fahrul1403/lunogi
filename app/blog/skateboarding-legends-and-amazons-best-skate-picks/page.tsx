'use client';
import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';

const ArticlePage = () => {
const article = {
    title: "Skateboarding Legends, Board Evolution, and Amazon’s Best Skate Picks",
    description: "",
    titleImage: {
        src: "/blog-skateboarding-legends-and-amazons-best-skate-picks-cover.webp",
        alt: "aaaaaa",
        width: 900,
        height: 600
    },
    content:
    [
        {
            type: 'header1',
            content: 'Skaters Who Made Skateboarding Legendary',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Let’s dive into the icons of skateboarding, the ones who didn’t just ride but redefined the sport. Whether you’re new to skateboarding or a longtime fan, you’ve gotta know these names.'
                },
                {
                    type: 'grid',
                    content:
                    {
                        title: '',
                        titleAlign: 'center',
                        columns: 3,
                        items:
                        [
                            {
                                title: 'Tony Hawk',
                                description: 'The King of Vert Tony Hawk is the name in skateboarding. If you’ve heard of skateboarding, you’ve probably heard of Tony. He’s the first guy to land the famous “900” (two and a half spins in the air) back in ‘99, and he’s been killing it ever since. He’s a legend both on and off the board, with games, gear, and some of the best tricks in the world.',
                                textAlign: 'center',
                                image:
                                {
                                    src: '/blog-skateboarding-legends-and-amazons-best-skate-picks-tonyhawk.jpg',
                                    alt: 'Image for Item 1',
                                    width: 300,
                                    height: 200
                                }
                            },
                            {
                                title: 'Rodney Mullen',
                                textAlign: 'center',
                                description: 'The Trick Master Rodney Mullen is the godfather of street skating. He invented tricks like the kickflip, heelflip, and the ollie all moves that are now the basics of skateboarding. Without Rodney, the sport wouldn’t look like it does today. He’s super creative and always finding new ways to push what’s possible on a skateboard.',
                                image:
                                {
                                    src: '/blog-skateboarding-legends-and-amazons-best-skate-picks-rodneymullen.jpg',
                                    alt: 'Image for Item 1',
                                    width: 300,
                                    height: 200
                                }
                            },
                            { 
                                title: 'Nyjah Huston', 
                                textAlign: 'blog-skateboarding-legends-and-amazons-best-skate-picks-rodneymullen.jpg',
                                description: 'The Modern Champion Nyjah Huston is the guy dominating the skate scene today. He’s been skating professionally since he was a kid and has won just about every competition you can think of, from the X Games to Street League. If you’re looking for someone to follow in the skate world right now, Nyjah’s your guy.', 
                                image:
                                {
                                    src: '/aaaa',
                                    alt: 'Image for Item 1',
                                    width: 300,
                                    height: 200
                                }
                            },
                        ]
                    }
                },
            ],
            
        },
        {
            type: 'header1',
            content: 'How Skateboards Have Evolved Over Time',
            align: 'center',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Skateboards have come a long way from the wooden planks they started out as. Let’s take a quick look at how these boards have changed and gotten better over the years.',
                    textAlign: 'center',
                }
            ],
            
            subsections:
            [
                {
                    type: 'header2',
                    content: 'The 1950s: Basic Beginnings',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'In the ‘50s, people started skating on what were basically mini surfboards with metal or clay wheels. Yeah, clay! Not exactly smooth riding. But this was the beginning of it all.',
                            image:
                            {
                                sources:
                                [
                                    { src: '/blog-skateboarding-legends-and-amazons-best-skate-picks-1950s.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-2/3' },
                                ],
                                position: 'left'
                            }
                        }
                    ],
                },
                {
                    type: 'header2',
                    content: 'The 1970s: Urethane Wheels Change Everything',
                    align: 'right',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Then came urethane wheels, which were a total game-changer. They made skating smoother and easier, so people could start doing more tricks and go faster without wiping out. Around this time, boards also started to get new shapes to help skaters perform better.',
                            textAlign: 'right',
                            image:
                            {
                                sources:
                                [
                                    { src: '/blog-skateboarding-legends-and-amazons-best-skate-picks-1970s.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-2/3' },
                                ],
                                position: 'right'
                            }
                        }
                    ],
                },
                {
                    type: 'header2',
                    content: 'The 1980s: Bigger and Better',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'In the ‘80s, boards got wider, and vert skating (those big ramps you see Tony Hawk on) was huge. The bigger boards helped with balance and made it easier for skaters to try out crazy aerial tricks.',
                            image:
                            {
                                sources:
                                [
                                    { src: '/blog-skateboarding-legends-and-amazons-best-skate-picks-1980s.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-1/2' },
                                ],
                                position: 'left'
                            }
                        }
                    ],
                },
                {
                    type: 'header2',
                    content: '2000s to Now: High-Tech Boards',
                    align: 'right',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Today’s boards are top-notch. We’ve got lightweight materials like carbon fiber, super responsive trucks, and wheels that can handle almost anything. Whether you’re cruising the streets or trying out new tricks at the park, modern skateboards are designed for serious performance.',
                            textAlign: 'right',
                            image:
                            {
                                sources:
                                [
                                    { src: '/blog-skateboarding-legends-and-amazons-best-skate-picks-2000s.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-1/2' },
                                ],
                                position: 'right'
                            }
                        }
                    ],
                },
            ],
        },
        {
            type: 'header1',
            content: 'How Skateboarding Shapes Young Minds',
            align: 'center',
            text:
            [
                {
                    type: 'grid',
                    content:
                    {
                        title: '',
                        titleAlign: 'center',
                        columns: 3,
                        items:
                        [
                            { 
                                title: 'Skating Sparks Creativity', 
                                textAlign: 'center',
                                description: 'Skateboarding is all about self-expression. There are no rules telling you how to skate. You do you, come up with your own style, and experiment with tricks. This freedom helps young skaters build their creativity and confidence.',
                            },
                            { 
                                title: 'It Builds Mental Strength', 
                                textAlign: 'center',
                                description: 'Skating teaches you to keep going, even when you fall – and trust me, you\'re gonna fall a lot. But every time you get up and try again, you\'re building mental toughness. This mindset of pushing through challenges is something that sticks with skaters for life.',
                            },
                            { 
                                title: 'Community and Connection', 
                                textAlign: 'center',
                                description: 'Skateboarding isn\'t just a solo sport. There\'s a whole community behind it, full of people who support and cheer each other on. Whether you\'re learning from older skaters or skating with friends, there\'s a sense of connection that helps build strong friendships.',
                            },
                        ]
                    }
                }
            ],
            
        },
        {
            type: 'header1',
            content: 'Top Skateboards on Amazon – Time to Gear Up!',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Ready to get your hands on a board? Here are some of the best skateboards you can snag on Amazon. Whether you’re a beginner or a pro, these boards will help you hit the streets in style.'
                },
                {
                    type: 'product',
                    content: {
                        name: '1. Powell Peralta Complete Skateboard',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/4dJUdaI',
                        description: 'Powell Peralta boards are classic and built to last. If you’re looking for something durable and smooth, this is the board for you. Perfect for anyone who’s serious about skating.',
                        image: {
                            src: '/blog-skateboarding-legends-and-amazons-best-skate-picks1.jpg',
                            alt: 'Powell Peralta Complete Skateboard',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: '2. Element Skateboard Complete',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/3A13LQR',
                        description: 'Known for their sleek designs and tough builds, Element boards are a favorite for street skaters. If you’re into tricks and flips, you’ll love this one.',
                        image: {
                            src: '/blog-skateboarding-legends-and-amazons-best-skate-picks2.jpg',
                            alt: 'Element Skateboard Complete',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: '3. Minority 32-inch Maple Skateboard',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/4f6cLDb',
                        description: 'Looking for something that’s budget-friendly but still high quality? This board is great for beginners. It’s sturdy, reliable, and will help you master the basics without breaking the bank.',
                        image: {
                            src: '/blog-skateboarding-legends-and-amazons-best-skate-picks3.jpg',
                            alt: 'Minority 32-inch Maple Skateboard',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: '4. Skatro Mini Cruiser',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/3zPjB12',
                        description: 'If you’re all about cruising, this compact board is perfect. It’s easy to carry, smooth to ride, and comes in super cool designs.',
                        image: {
                            src: '/blog-skateboarding-legends-and-amazons-best-skate-picks4.jpg',
                            alt: 'Skatro Mini Cruiser',
                            width: 300,
                            height: 200
                        }
                    }
                },
                {
                    type: 'product',
                    content: {
                        name: '5. Enjoi Whitey Panda Complete',
                        buttonText: 'Check on Amazon',
                        buttonLink: 'https://amzn.to/4f4riiI',
                        description: 'Enjoi is known for their fun designs and reliable performance. This board not only looks good but rides smoothly, too. It’s a great choice for anyone looking to make their skate sessions more stylish.',
                        image: {
                            src: '/blog-skateboarding-legends-and-amazons-best-skate-picks5.jpg',
                            alt: 'Enjoi Whitey Panda Complete',
                            width: 300,
                            height: 200
                        }
                    }
                },
            ],
            
        },
        {
            type: 'header1',
            content: 'Conclusion',
            align: 'center',
            text:
            [
                {
                    type: 'paragraph',
                    textAlign: 'center',
                    content: 'So there you have it from skateboarding legends to how skateboards have evolved and shaped today’s youth, plus some killer board recommendations from Amazon. Whether you’re just starting out or looking to add another board to your collection, now’s the time to get rolling!'
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