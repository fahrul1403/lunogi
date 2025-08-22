'use client';
import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';

const ArticlePage = () => {
const article = {
    title: "10 Best JBL Speakers for Parties and Outdoor Activities",
    description: "This article will enhance your understanding of why the best-selling JBL speakers are the perfect gateway into high-quality audio experiences for parties and outdoor activities. You will find a detailed guide covering the top features and functionalities of these speakers that make them essential for any music enthusiast. Additionally, this article offers tips to optimize your experience and avoid common pitfalls to help you get the most out of your JBL speakers. Whether you're new to JBL or looking to expand your collection, this article will provide you with the knowledge to make the most of your audio equipment.",
    titleImage: {
    src: "/images/jbl-speakers.jpg",
    alt: "JBL Speakers",
    width: 300,
    height: 200
    },
    content: [
    {
        type: 'header1',
        content: 'A. The Origins of JBL Speakers',
        text:
        [
        { type: 'paragraph', content: 'JBL, one of the most renowned speaker brands in the world, has a rich and innovative history. Here is the long journey of JBL from its beginnings to becoming a leader in the audio industry:'},
        ],
        
        subsections:
        [
        {
            type: 'header2',
            content: '1. Early Beginnings (1946-1950)',
            text:
            [
            {
                type: 'paragraph',
                content: 'JBL was founded in 1946 by James Bullough Lansing, a renowned audio engineer. Lansing had previously worked at Altec Lansing Corporation, which he co-founded with Peter F. Lansing. However, in 1946, he decided to start a new company focused on creating high-quality speakers.',
                textAlign: 'center',
                image:
                {
                sources:
                [
                    { src: '/images/example1.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-1/2' },
                ],
                position: 'top'
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '2. Early Development (1950-1960)',
            text:
            [
            {
                type: 'paragraph',
                content: 'In 1954, JBL introduced the 375 compression engine, the first 4-inch diameter compression driver with a frequency response up to 9 kHz. This was a pivotal moment in JBL\'s history, marking the company\'s commitment to audio technology innovation.',
                image:
                {
                sources:
                [
                    { src: '/images/example1.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-1/2' },
                    { src: '/images/example1.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-1/2' },
                    { src: '/images/example1.jpg', alt: 'Example Image 1', width: 400, height: 300, customWidth: 'w-1/2' },
                ],
                position: 'left'
                }
            },
            { type: 'paragraph', content: 'In the same year, Bart N. Locanthi introduced the acoustic lens developed by JBL, which significantly improved sound quality and distribution.' }
            ],
        },
        {
            type: 'header2',
            content: '3. Entry into Professional Music (1955-1960)',
            text:
            [
            { type: 'paragraph', content: 'In 1955, Leo Fender incorporated the D-130 model into his amplifiers, marking the beginning of JBL\'s collaboration with the professional music industry. This opened the door for JBL to become a major player in the professional audio market.' }
            ],
        },
        {
            type: 'header2',
            content: '4. Innovation and Expansion (1960-1970)',
            text:
            [
            { type: 'paragraph', content: 'In 1958, JBL introduced the Paragon stereo speaker system, one of the first stereo speaker systems in the world. This system offered exceptional sound quality and became an icon in the audio world.' },
            { type: 'paragraph', content: 'In 1962, JBL created the first two-way studio monitor using a high-frequency motor and lens. This marked a significant step in the development of studio monitor technology.' },
            { type: 'paragraph', content: 'In 1967, JBL introduced its iconic red box logo with an exclamation mark (!) and white letters, designed by Arnold Wolfe, the president of JBL. This logo became widely recognized and identified the JBL brand globally.' }
            ],
        },
        {
            type: 'header2',
            content: '5. Growth and Acquisition (1970-1980)',
            text:
            [
            { type: 'paragraph', content: 'In 1968, JBL launched the 4310 three-way speaker, which set a new standard in speaker technology. In 1969, Sidney Harman acquired JBL, which helped the company expand its reach and resources.' },
            { type: 'paragraph', content: 'In 1969, JBL also introduced the L-100, a consumer version of the 4311, which sold over 125,000 pairs in the 1970s. Additionally, JBL components were used to provide sound at Woodstock and various other rock festivals.' }
            ],
        },
        {
            type: 'header2',
            content: '6. Modern Era (1980-2000)',
            text:
            [
            { type: 'paragraph', content: 'In 1973, JBL introduced the 4300 series, which included the first four-way speaker. In 1975, JBL launched the 4682 Line Array Strongbox, one of the most advanced sound reinforcement systems of its time.' }
            ],
        },
        {
            type: 'header2',
            content: '7. Recent Developments (2000-Present)',
            text:
            [
            { type: 'paragraph', content: 'JBL continues to innovate and expand its reach. The company has introduced a wide range of products, including portable speakers, smart speakers, and home audio systems. JBL remains committed to delivering the best sound quality and exceptional audio experiences to users worldwide.' }
            ],
        }
        ],
    },
    {
        type: 'header1',
        content: 'B. Best JBL Speakers for Parties and Outdoor Activities',
        text:
        [
        { type: 'paragraph', content: 'If you\'re looking for speakers that can deliver exceptional sound quality for parties or outdoor activities, JBL offers a wide range of options to suit your needs. Here are 10 of the best JBL speakers recommended for parties and outdoor activities:'},
        ],

        subsections:
        [
        {
            type: 'header2',
            content: '1. JBL PartyBox 310',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { 
                    title: 'Features', 
                    description: 'Portable speaker with powerful sound, RGB lights, and a long-lasting battery up to 18 hours.', 
                    image: { /* ... */ },
                    textAlign: 'center' // You can change this to 'center' or 'right'
                    },
                    { 
                    title: 'Use', 
                    description: 'Ideal for home parties, BBQs, and outdoor activities.', 
                    image: { /* ... */ },
                    textAlign: 'center' // You can change this to 'left' or 'center'
                    },
                ]
                }
            },
            { 
                type: 'table', 
                content:
                {
                    headers: [],
                    rows:
                    [
                    ['<b>Power Output</b>', '200W'],
                    ['<b>Battery Life</b>', 'Up to 18 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Weight</b>', '21.6 pounds'],
                    ['<b>Water Resistance</b>', 'IPX4'],
                    ['<b>Additional Features</b>', 'RGB lighting, karaoke function, built-in microphone'],
                    ],
                    columnAlignments: ['right', 'left'],
                    columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                    showXBorders: false, // Disable horizontal borders
                    showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '2. JBL Xtreme 4',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Waterproof design, deep bass, and a long-lasting battery up to 21 hours..', image: { /* ... */ } },
                    { title: 'Use', description: 'Perfect for various outdoor activities, including swimming and adventures.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table', 
                content:
                {
                    headers: [],
                    rows:
                    [
                    ['<b>Power Output</b>', '120W'],
                    ['<b>Battery Life</b>', 'Up to 21 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Dimensions</b>', '10.2 x 7.5 x 7.5 inches'],
                    ['<b>Weight</b>', '6.6 pounds'],
                    ['<b>Water Resistance</b>', 'IPX7'],
                    ['<b>Additional Features</b>', 'Deep bass, built-in power bank, rugged design'],
                    ],
                    columnAlignments: ['right', 'left'],
                    columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                    showXBorders: false, // Disable horizontal borders
                    showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '3. JBL Flip 6',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Compact design, clear sound, and a long-lasting battery up to 12 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Great for carrying around, such as picnics or short trips.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table', 
                content: 
                {
                    headers: [],
                    rows:
                    [
                    ['<b>Power Output</b>', '20W'],
                    ['<b>Battery Life</b>', 'Up to 12 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Dimensions</b>', '7.5 x 2.8 x 2.8 inches'],
                    ['<b>Weight</b>', '1.1 pounds'],
                    ['<b>Water Resistance</b>', 'IPX7'],
                    ['<b>Additional Features</b>', 'Clear sound, compact and portable design'],
                    ],
                    columnAlignments: ['right', 'left'],
                    columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                    showXBorders: false, // Disable horizontal borders
                    showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '4. JBL Charge 5',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Waterproof speaker with strong bass and a long-lasting battery up to 20 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Suitable for outdoor activities that require a water-resistant speaker.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table', 
                content:
                {
                    headers: [],
                    rows:
                    [
                    ['<b>Power Output</b>', '30W'],
                    ['<b>Battery Life</b>', ' Up to 20 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Dimensions</b>', '9.5 x 3.5 x 3.5 inches'],
                    ['<b>Weight</b>', '2.6 pounds'],
                    ['<b>Water Resistance</b>', 'IPX7'],
                    ['<b>Additional Features</b>', 'Built-in power bank, strong bass, rugged design'],
                    ],
                    columnAlignments: ['right', 'left'],
                    columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                    showXBorders: false, // Disable horizontal borders
                    showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '5. JBL PartyBox 710',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Portable speaker with extremely powerful sound, RGB lights, and a long-lasting battery up to 18 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Ideal for large parties and outdoor events that require exceptional sound quality.', image: { /* ... */ } },
                ]
                }
            },
            {
                type: 'table',
                content: {
                headers: [],
                rows: [
                    ['<b>Power Output</b>', '300W'],
                    ['<b>Battery Life</b>', 'Up to 18 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Dimensions</b>', '27.6 x 16.5 x 16.5 inches'],
                    ['<b>Weight</b>', '33.5 pounds'],
                    ['<b>Water Resistance</b>', 'IPX4'],
                    ['<b>Additional Features</b>', 'RGB lighting, karaoke function, built-in microphone'],
                ],
                columnAlignments: ['right', 'left'],
                columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                showXBorders: false, // Disable horizontal borders
                showYBorders: true,  // Enable vertical borders
                }
            }
            ],
        },
        {
            type: 'header2',
            content: '6. JBL Boombox 3',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Waterproof speaker with deep bass and a long-lasting battery up to 24 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Perfect for outdoor activities that require a durable and long-lasting speaker.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table', 
                content:
                {
                headers: [],
                rows:
                [
                    ['<b>Power Output</b>', '200W'],
                    ['<b>Battery Life</b>', 'Up to 24 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Dimensions</b>', '13.8 x 8.3 x 8.3 inches'],
                    ['<b>Weight</b>', '8.8 pounds'],
                    ['<b>Water Resistance</b>', 'IPX7'],
                    ['<b>Additional Features</b>', 'Deep bass, rugged design, built-in power bank'],
                ],
                columnAlignments: ['right', 'left'],
                columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                showXBorders: false, // Disable horizontal borders
                showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '<a href="#">7. JBL PartyBox Encore Essential</a>',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Compact design, powerful sound, and a long-lasting battery up to 18 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Ideal for small parties and more intimate outdoor activities.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table',
                content:
                {
                headers: [],
                rows:
                [
                    ['<b>Power Output</b>', '100W'],
                    ['<b>Battery Life</b>', 'Up to 18 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Dimensions</b>', '17.3 x 9.8 x 9.8 inches'],
                    ['<b>Weight</b>', '13.4 pounds'],
                    ['<b>Water Resistance</b>', 'IPX4'],
                    ['<b>Additional Features</b>', 'RGB lighting, karaoke function, built-in microphone'],
                ],
                columnAlignments: ['right', 'left'],
                columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                showXBorders: false, // Disable horizontal borders
                showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '8. JBL Link 20',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Speaker with Google Assistant, clear sound, and a long-lasting battery up to 12 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Suitable for outdoor activities that require voice control and virtual assistant features.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table', 
                content:
                {
                headers: [],
                rows:
                [
                    ['<b>Power Output</b>', '20W'],
                    ['<b>Battery Life</b>', 'Up to 12 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, Wi-Fi, AUX'],
                    ['<b>Dimensions</b>', '5.9 x 5.9 x 5.9 inches'],
                    ['<b>Weight</b>', '3.3 pounds'],
                    ['<b>Water Resistance</b>', 'IPX4'],
                    ['<b>Additional Features</b>', 'Google Assistant, clear sound, smart home integration'],
                ],
                columnAlignments: ['right', 'left'],
                columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                showXBorders: false, // Disable horizontal borders
                showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '9. JBL Go 3',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Portable design, clear sound, and a long-lasting battery up to 5 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Perfect for carrying around, such as walks or bike rides.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table', 
                content:
                {
                headers: [],
                rows:
                [
                    ['<b>Power Output</b>', '5W'],
                    ['<b>Battery Life</b>', 'Up to 5 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, AUX'],
                    ['<b>Dimensions</b>', '3.1 x 1.3 x 1.3 inches'],
                    ['<b>Weight</b>', '0.3 pounds'],
                    ['<b>Water Resistance</b>', 'IPX7'],
                    ['<b>Additional Features</b>', 'Clear sound, compact and lightweight design'],
                ],
                columnAlignments: ['right', 'left'],
                columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                showXBorders: false, // Disable horizontal borders
                showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        {
            type: 'header2',
            content: '10. JBL PartyBox Club 120',
            text:
            [
            {
                type: 'grid',
                content:
                {
                columns: 2,
                items:
                [
                    { title: 'Features', description: 'Speaker with powerful sound, RGB lights, and a long-lasting battery up to 18 hours.', image: { /* ... */ } },
                    { title: 'Use', description: 'Ideal for large parties and outdoor events that require exceptional sound quality.', image: { /* ... */ } },
                ]
                }
            },
            { 
                type: 'table', 
                content:
                {
                headers: [],
                title: 'JBL PartyBox Club 120 Features',
                rows:
                [
                    ['<b>Power Output</b>', '120W'],
                    ['<b>Battery Life</b>', 'Up to 18 hours'],
                    ['<b>Connectivity</b>', 'Bluetooth, USB, AUX'],
                    ['<b>Dimensions</b>', '19.7 x 11.8 x 11.8 inches'],
                    ['<b>Weight</b>', '18.7 pounds'],
                    ['<b>Water Resistance</b>', 'IPX4'],
                    ['<b>Additional Features</b>', 'RGB lighting, karaoke function, built-in microphone'],
                ],
                columnAlignments: ['right', 'left'],
                columnWidths: ['1/2', '1/2'], // This sets a 1/3 2/3 distribution
                showXBorders: false, // Disable horizontal borders
                showYBorders: true,  // Enable vertical borders
                }
            },
            ],
        },
        ]
    },
    {
        type: 'header1',
        content: 'Conclusion',
        align: 'center',
        text:
        [
        { type: 'paragraph', textAlign: 'center', content: 'JBL offers a wide range of speakers suitable for parties and outdoor activities. With advanced features and exceptional sound quality, JBL speakers ensure that your music experience is always enjoyable and impressive. Choose the speaker that best fits your needs and enjoy music anywhere, anytime!'},
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