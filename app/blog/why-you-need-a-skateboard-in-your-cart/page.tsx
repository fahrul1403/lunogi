'use client';
import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';
const ArticlePage = () => {
const article = {
    title: "Why You Need a Skateboard in Your Cart, Like, Right Now!",
    description: "",
    titleImage: {
        src: "/blog-why-you-need-a-skateboard-in-your-cart1.jpg",
        alt: "aaaaaa",
        width: 300,
        height: 200
    },
    content:
    [
        {
            type: 'header1',
            content: 'Skateboards: Not Just a Boring Piece of Wood',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Okay, so skateboards might look like just a piece of wood with wheels, but let’s be real, they’re so much more than that! Whether you’re skating to have fun or just want to look cool, a skateboard is literally the best accessory you could have. Let me hit you with some cool facts that’ll convince you to grab one for yourself!'
                }
            ],
            
        },
        {
            type: 'header1',
            content: 'Fun Skateboard Facts That Will Blow Your Mind',
            text:
            [
            ],
            
            subsections:
            [
                {
                    type: 'header2',
                    content: '1. Skateboarding Can Improve Your Posture! ',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Yup, you heard that right. Skating makes you move your whole body, helping you stay balanced and active, which eventually improves your posture. If you wanna look and feel better while staying active, you better start adding that skateboard to your cart!'
                        }
                    ],
                },
                {
                    type: 'header2',
                    content: '2. Highest Ollie Jump is 45 Inches!',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'An ollie is basically when you jump off the ground with your board without using your hands. And the record for the highest ollie? It’s 45 inches, which is around 114 cm. Imagine jumping that high just using your feet – insane, right?'
                        }
                    ],
                },
                {
                    type: 'header2',
                    content: '3. Skaters Have Tough Minds!',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Skaters know what it feels like to fall hard, get bruised, and get back up again. It’s a lifestyle that’s about resilience. So yeah, skateboarding makes you tough both physically and mentally – no pain, no gain!'
                        }
                    ],
                },
                
            ],
        },
        {
            type: 'header1',
            content: 'Where Did Skateboarding Even Come From?',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Did you know skateboarding started because surfers were bored? Back in the 1950s in California, surfers wanted to ‘surf’ when there were no waves, so they came up with the idea of skating on land. At first, it was just wooden planks with wheels, but soon, skateboards evolved into the rad designs we have now.'
                },
                {
                    type: 'paragraph',
                    content: 'Fast forward to now, skateboarding isn’t just a hobby, it’s a cultural movement! Even though it used to be banned in some places for being ‘dangerous,’ skateboards have now become a symbol of freedom, creativity, and individuality.'
                },
            ],
        },
        {
            type: 'header1',
            content: 'Why You Need a Skateboard, Like, Right Now!',
            text:
            [
            ],
            
            subsections:
            [
                {
                    type: 'header2',
                    content: '1. It’s a Fashion Statement!',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Skateboards aren’t just for riding, they’re also a cool accessory. Carrying around a skateboard instantly adds to your style and makes you stand out in a crowd. Trust me, if you want that extra “cool factor,” a skateboard is the way to go.'
                        },
                    ],
                },
                {
                    type: 'header2',
                    content: '2. It Improves Focus and Balance',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Skating makes you focus on keeping balance while moving, which is basically like working out your mind and body at the same time. It\'s a skill that can help you in day-to-day life, making you better at multitasking!'
                        },
                    ],
                },
                {
                    type: 'header2',
                    content: '3. Meet New Friends!',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Skateboarding has a huge community. You can meet new people who are into the same hobby as you, and maybe even find mentors or friends for life. It’s like joining a worldwide club of awesome people.'
                        },
                    ],
                },
            ],
        },
        {
            type: 'header1',
            content: 'Time to Skate!',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'So, what are you waiting for? Skateboarding is more than just a sport it’s a lifestyle. With affordable and stylish boards on Amazon, now’s the time to get one for yourself and start skating! Let’s hit the streets and show off those tricks.'
                }
            ],
            
        },
        {
            type: 'header1',
            align: 'center',
            content: 'If you are a beginner please try to buy this Skateboard!',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Minecraft 31 inch Skateboard, 9-ply Maple Deck Skate Board for Cruising, Carving, Tricks and Downhill',
                    textAlign: 'center',
                    image:
                    {
                        sources:
                        [
                            { src: '/blog-why-you-need-a-skateboard-in-your-cart-product.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-1/2' },
                        ],
                        position: 'top'
                    }
                },
                {
                    type: 'button',
                    content: {
                        text: 'Check on Amazon',
                        link: 'https://amzn.to/3zRYNG9',
                    },
                    align: 'center'
                },
                {
                    type: 'grid',
                    content:
                    {
                        title: 'About this item',
                        titleAlign: 'center',
                        columns: 2,
                        items:
                        [
                            { title: 'Perfect for beginners', description: 'This 31 inch skateboard is a versatile choice for both beginners and pros that want just the right balance of convenience, safety, and stability; it\'s the perfect choice for anyone that wants to ease into skateboarding.' },
                            { title: 'Portable and lightweight', description: 'Thanks to a sturdy wooden build coupled with the lightweight, our skateboard for cruising makes the perfect companion for your outdoor trips and travels; it\'s easy to carry around making it ideal for anyone that wants to skate anywhere they want.' },
                            { title: 'Sturdy and stable build', description: 'The complete skateboard deck is made using durable and sturdy maple wood to add strength and stiffness while also gives it a stylish flair; it offers more traction for your feet and gives better control when skating.' },
                            { title: 'The skateboard is suitable for all skill levels', description: ' The skateboard provides just the right fit for Cruising, Carving, Free-Style, Downhill, and more while staying stylish the super cool graphics; it\'s designed with aluminum alloy trucks to offer more control and stability when riding.' },
                            { title: 'Thoughtful gift idea', description: 'If you\'re looking for a gift for family and friends that like to skate then our wooden cruising skateboard has you covered; it makes the perfect gift for Christmas, Birthdays, New Year\'s, Thanksgiving, and any other occasion you have in mind.' },
                        ]
                    }
                },
                
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