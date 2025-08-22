'use client';
import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';

const ArticlePage = () => {
const article = {
    title: "Meet Labubu: The Quirky Little Adventurer You’ll Be Obsessed With!",
    description: "",
    titleImage: {
        src: "/blog-meet-labubu-cover.jpg",
        alt: "aaaaaa",
        width: 300,
        height: 200
    },
    content:
    [
        {
            type: 'header1',
            content: 'Labubu: The Cutest Trend You Never Saw Coming!',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'If you haven\' t heard about Labubu yet, you’re seriously missing out! This adorable, quirky little creature has taken the world by storm, becoming one of the most popular designer toys out there. Born from the genius mind of Hong Kong artist Kasing Lung, Labubu is more than just a toy it’s a piece of art. With its big ears, mischievous grin, and playful vibes, Labubu is every bit as cool as it is cute.'
                },
            ],
        },
        {
            type: 'header1',
            content: 'What’s the Deal with Labubu?',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Labubu originally came out as part of The Monsters series by Pop Mart, but it quickly became a global sensation, especially among collectors. Why? Well, Labubu’s design hits the sweet spot between adorable and eccentric. Each limited edition figure is crafted with crazy attention to detail, making it a must-have for anyone who loves artsy collectibles.'
                },
            ],
        },
        {
            type: 'header1',
            content: 'Fun Facts About Labubu',
            text:
            [
            ],
            
            subsections:
            [
                {
                    type: 'header2',
                    content: '1. Not Just a Toy—It’s Art',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Labubu isn’t your average cute figure. Nope! Each one is like a mini masterpiece. From the colors to the poses, everything about Labubu screams creativity. It’s like having a slice of modern pop art right on your shelf!'
                        }
                    ],
                },
                {
                    type: 'header2',
                    content: '2. Limited Editions = High Demand',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Labubu has tons of special editions, from spooky Halloween looks to adventurous jungle vibes. And here’s the kicker some of these editions are super limited. So if you manage to snag one, you’re basically sitting on a goldmine for collectors!'
                        }
                    ],
                },
                {
                    type: 'header2',
                    content: '3. A Character with Personality',
                    text:
                    [
                        {
                            type: 'paragraph',
                            content: 'Labubu is known for its expressive faces. One moment it’s grinning, the next it’s looking all grumpy or surprised. It’s like this little character has its own mood swings, making it relatable in the most hilarious way!'
                        }
                    ],
                },
            ],
        },
        {
            type: 'header1',
            content: 'The Hottest Labubu Picks on Amazon Right Now',
            text:
            [
                {
                    type: 'paragraph',
                    content: 'Okay, now that you’re in love with Labubu, where do you start? Here are some of the top Labubu picks you can grab on Amazon:'
                },
                {
                    type: 'grid',
                    content:
                    {
                        title: '',
                        titleAlign: 'center',
                        columns: 2,
                        items:
                        [
                            {
                                title: ' LABUBU THE MONSTERS Plush Toy',
                                description: '',
                                textAlign: 'center',
                                image:
                                {
                                    src: '/blog-meet-labubu1.png',
                                    alt: 'Image for Item 1',
                                    width: 300,
                                    height: 200
                                },
                                buttonText: 'Check it out on Amazon!',
                                buttonLink: 'https://amzn.to/3BGyZgv'
                                
                            },
                            {
                                title: 'Popmart Labubu THE MONSTERS FALL IN WILD',
                                description: '',
                                textAlign: 'center',
                                image:
                                {
                                    src: '/blog-meet-labubu2.png',
                                    alt: 'Image for Item 1',
                                    width: 300,
                                    height: 200
                                },
                                buttonText: 'Check it out on Amazon!',
                                buttonLink: 'https://amzn.to/3BJtH3Q'
                                
                            },
                            {
                                title: 'The Monsters Lazy Yoga Series Figures, The Monsters Blind Box Figures',
                                description: '',
                                textAlign: 'center',
                                image:
                                {
                                    src: '/blog-meet-labubu3.png',
                                    alt: 'Image for Item 1',
                                    width: 300,
                                    height: 200
                                },
                                buttonText: 'Check it out on Amazon!',
                                buttonLink: 'https://amzn.to/4eY2toC'
                                
                            },
                            {
                                title: 'The Monsters x Kow Yokoyama Ma.K. Blind Box Figures',
                                description: '',
                                textAlign: 'center',
                                image:
                                {
                                    src: '/blog-meet-labubu4.png',
                                    alt: 'Image for Item 1',
                                    width: 300,
                                    height: 200
                                },
                                buttonText: 'Check it out on Amazon!',
                                buttonLink: 'https://amzn.to/4f9hCDp'
                                
                            },
                        ]
                    }
                },
            ],
        },
        {
            type: 'header1',
            content: 'Don’t sleep on this trend!',
            align: 'center',
            text:
            [
                {
                    type: 'paragraph',
                    textAlign: 'center',
                    content: 'Labubu is the kind of character that’ll keep you smiling (and collecting) for days. Head over to Amazon now and score your very own Labubu before they’re all gone! Get ready to join the coolest collector’s club around!'
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