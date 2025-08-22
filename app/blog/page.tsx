'use client'
import Image from "next/image";
import { Clock5Icon, HourglassIcon } from "lucide-react";
import { TbSearch } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import TopArticle from "@/components/ui/top-article";
import Link from "next/link";
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Blog(){

    const [searchTerm, setSearchTerm] = useState('');

    // const top_articles = {
    //     title:'Benefits of Having an Ice Maker at Home',
    //     description:'Considering the addition of an ice maker to your home? Here\'s why it could significantly enhance your lifestyle.',
    //     duration:'5 Minutes',
    //     created_date:'10 hour ago',
    //     link:'/blog/best-ice-maker-countertop',
    //     image:'/ice-1.png'
    // }

    const top_articles = {
        title:'Party All Day with Up to 20 Hours of Non-Stop Music!',
        description:'Imagine a party where the music never stops, the energy remains high, and the good times keep rolling from sunrise to sunset. With up to 20 hours of uninterrupted battery life, you can now enjoy a full day of your favorite tunes without missing a beat. Here are some portable speakers that offer up to 20 hours of playtime.',
        duration:'10 Minutes',
        created_date:'1 hour ago',
        link:'/blog/party-with-jbl',
        image:'/jbl-1.jpeg'
    }

    const recent_blog = [
        {
            title:'Benefits of Having an Ice Maker at Home',
            description:'Considering the addition of an ice maker to your home? Heres why it could significantly enhance your lifestyle.',
            link:'/blog/best-ice-maker-countertop',
            image:'/ice-1.png',
            created_date:'12 hour ago'
        },
        {
            title:' The best MacBook in 2024 that you should buy',
            description:'Choosing the right MacBook can be a very difficult decision, especially with so many models available on the market. ',
            link:'/blog/best-macbook',
            image:'/macbook-1.webp',
            created_date:'16 hour ago'
        },
    ]



    
    const blog_list =[
        {
            title:'Morning and Night Skin Care Routine Tips',
            description:'Discover essential morning and night skin care routine tips to keep your skin glowing and healthy in the following article. ',
            link:'/blog/skin-care-routine',
            image: "/blog-skin-care-routine-nightday.webp",
            created_date:'12 hour ago'
        },
        {
            title:'Discover the Best Video Game Consoles for an Amazing Gaming Experience',
            description:'Looking for the best video game console? Read our article to find the best choice for your gaming needs.',
            link:'/blog/best-gaming-console',
            image:"/console.jpg",
            created_date:'12 hour ago'
        },
        {
            title:'Best Earbuds 2024: Top Picks for Quality and Comfort',
            description:'Discover the best earbuds of 2024 with your top picks. Get quality earbuds and extraordinary sound comfort in this article!',
            link:'/blog/best-earbuds',
            image:"/earbuds-blog.webp",
            created_date:'12 hour ago'
        },
        {
            title:'Top Cameras for Stunning Photography in 2024',
            description:'Find the best cameras for amazing photography in 2024. Get a photography camera to produce amazing photos in the following article!',
            link:'/blog/camera-and-photos-recommendation',
            image:'/camera-blog.avif',
            created_date:'12 hour ago'
        },
        {
            title:'3 Best Countertop Ice Maker that is easy to use',
            description:'Discover the 3 best countertop ice makers that are easy to use. Get quick and reliable ice production with these top-rated, user-friendly ice makers.',
            link:'/blog/best-ice-maker-countertop',
            image:'/ice-maker.jpeg',
            created_date:'12 hour ago'
        },
        {
            title:'5 Best in Ear Headphones to buy for all budgets',
            description:'',
            link:'/blog/best-in-ear-headphones',
            image:"/blog-best-inear-headphones-cover.jpeg",
            created_date:'12 hour ago'
        },
        {
            title:'5 Best Bluetooth Trackers To Help Find Your equipment',
            description:'',
            link:'/blog/best-bluetooth-tracker',
            image:"/blog-best-tracker-cover.jpeg",
            created_date:'12 hour ago'
        },
        {
            title:'5 Best smartwatch 2024: Top picks for every budget and Activity',
            description:'',
            link:'/blog/best-smartwatch',
            image:"/blog-best-smartwatch-cover2.webp",
            created_date:'12 hour ago'
        },
        {
            title:"5 Best kids headphones 2024: Top picks for Protect Your Child's Hearing",
            description:'',
            link:'/blog/best-kids-headphones',
            image:'/blog-best-kids-headphones-intro.jpeg',
            created_date:'12 hour ago'
        },
        {
            title:'6 Best mascara 2024 For long, and must have!',
            description:'',
            link:'/blog/best-mascara',
            image:'/blog-best-mascara-cover.jpeg',
            created_date:'12 hour ago'
        },
        {
            title:'What is the best electric toothbrush dentist recommend and best clean?',
            description:'See sample page',
            link:'/blog/best-electric-toothbrush',
            image:'/blog-best-electric-toothbrush-cover.webp',
            created_date:'12 hour ago'
        },
        {
            title:'Nintendo Switch: The Best Family-Friendly Game Console',
            description:'Discover essential products that will modernize your living room effortlessly. ',
            link:'/blog/best-family-friendly-game-console',
            image:'/blog-best-family-friendly-game-console-title.jpeg',
            created_date:'12 hour ago'
        },
        {
            title:'10 Best JBL Speakers for Parties and Outdoor Activities',
            description:'',
            link:'/blog/best-jbl-speaker',
            image:'/jbl-1.jpeg',
            created_date:'12 hour ago'
        },
        {
            title:'Why You Need a Skateboard in Your Cart, Like, Right Now!',
            description:'',
            link:'/blog/why-you-need-a-skateboard-in-your-cart',
            image:'/blog-why-you-need-a-skateboard-in-your-cart1.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Skateboarding Legends, Board Evolution, and Amazon’s Best Skate Picks',
            description:'',
            link:'/blog/skateboarding-legends-and-amazons-best-skate-picks',
            image:'/blog-skateboarding-legends-and-amazons-best-skate-picks-cover.webp',
            created_date:'12 hour ago'
        },
        {
            title:'The Coquette Fashion Trend',
            description:'How to Rock That Sweet and Elegant Look in 2024',
            link:'/blog/coquette-fashion-trend',
            image:'/blog-coquette-fashion-trend-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'How to Be the Ultimate Coquette',
            description:'Accessorize Like a Pro and Slay the Look',
            link:'/blog/how-to-be-the-ultimate-coquette',
            image:'/blog-how-to-be-the-ultimate-coquette-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Meet Labubu',
            description:'The Quirky Little Adventurer You’ll Be Obsessed With! Check Out the Hottest Picks on Amazon!',
            link:'/blog/meet-labubu',
            image:'/blog-meet-labubu-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Trending Cameras: Capture Every Moment in Style!',
            description:'',
            link:'/blog/trending-cameras-capture-every-moment-in-style',
            image:'/blog-trending-cameras-capture-every-moment-in-style-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Why Scooters Are Cool AF',
            description:'Fun Facts, Perks, and Must-Have Picks on Amazon!',
            link:'/blog/why-scooters-are-cool-af',
            image:'/blog-why-scooters-are-cool-af-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Vacuum Cleaners That Slay the Mess',
            description:'Why You NEED One & The Dopest Picks on Amazon!',
            link:'/blog/vacuum-cleaners-that-slay-the-mess',
            image:'/blog-vacuum-cleaners-that-slay-the-mess-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Crispy Without the Guilt',
            description:'The Secret to Healthy Living with an Air Fryer!',
            link:'/blog/crispy-without-the-guilt',
            image:'/blog-crispy-without-the-guilt-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Ditch the Cables, Ditch the Stress: The Key to Crisp Audio for Your Content!',
            description:'',
            link:'/blog/the-key-to-crisp-audio-for-your-content',
            image:'/blog-the-key-to-crisp-audio-for-your-content-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Unlock the Secret to Better Sleep',
            description:'Grounding Sheets, Pillowcases, and Blankets',
            link:'/blog/unlock-the-secret-to-better-sleep',
            image:'/blog-unlock-the-secret-to-better-sleep-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Stay Charged and Ready',
            description:'The Hottest Portable EV Chargers You Need Right Now',
            link:'/blog/the-hottest-portable-ev-chargers',
            image:'/blog-the-hottest-portable-ev-chargers-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Stay Glowing and Protected: Sunscreens You Can’t Miss!',
            description:'',
            link:'/blog/sunscreens-you-cant-miss',
            image:'/blog-sunscreens-you-cant-miss-cover.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Your Hair, Your Crown: Let’s Get Stylish and Shine!',
            description:'',
            link:'/blog/your-hair-your-crown',
            image:'/blog-your-hair-your-crown-cover.jpg',
            created_date:'12 hour ago'
        },
        

        {
            title:'sample blog',
            description:'',
            link:'/blog/sample-blog',
            image:'/',
            created_date:'12 hour ago'
        },
        
    ]

    const filteredBlogList = blog_list.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [overflowStates, setOverflowStates] = useState<{[key: number]: boolean}>({});

    useLayoutEffect(() => {
        const checkOverflow = () => {
            const newOverflowStates: {[key: number]: boolean} = {};
            filteredBlogList.forEach((_, index) => {
                const element = document.getElementById(`description-${index}`);
                if (element) {
                    newOverflowStates[index] = element.scrollHeight > element.clientHeight;
                }
            });
            setOverflowStates(prevStates => {
                if (JSON.stringify(prevStates) !== JSON.stringify(newOverflowStates)) {
                    return newOverflowStates;
                }
                return prevStates;
            });
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [filteredBlogList]);

    const [currentTopArticleIndex, setCurrentTopArticleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTopArticleIndex((prevIndex) => (prevIndex + 1) % blog_list.length);
        }, 5000); // Change article every 5 seconds

        return () => clearInterval(interval);
    }, [blog_list.length]); // Add blog_list.length to the dependency array

    const currentTopArticle = blog_list[currentTopArticleIndex];

    const slideVariants = {
        enter: { x: "100%", opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
    };

    return(
        <div className="relative">
            {/* Left background */}
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[url('/lunogi-blog-wallpaper1.jpeg')] bg-contain bg-no-repeat bg-top">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            </div>
            
            {/* Right background */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('/lunogi-blog-wallpaper1.jpeg')] bg-contain bg-no-repeat bg-top">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            </div>

            <div className="relative max-w-7xl z-10 py-10 mx-auto flex flex-col space-y-20 bg-white">
                <div className="max-w-7xl mx-auto px-8 flex flex-col space-y-10">
                    <div className="relative overflow-hidden">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={currentTopArticleIndex}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <TopArticle
                                    title={currentTopArticle.title}
                                    description={currentTopArticle.description}
                                    duration="5 Minutes"
                                    created_date={currentTopArticle.created_date}
                                    link={currentTopArticle.link}
                                    image={currentTopArticle.image}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="flex flex-col lg:space-y-10 bg-slate-100 rounded-xl shadow-lg border-l-8 border-slate-200">
                        <h2 className="font-bold text-2xl lg:text-4xl bg-slate-200 w-fit p-5 rounded-br-xl text-neutral-600 md:mb-0 mb-7">Recent Blogs</h2>
                        <div className="grid grid-col-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6 px-2 lg:px-0 mx-5 pb-5">
                        { recent_blog.map((blog, index) => (
                            <Link href={blog.link} key={index}>
                                <div className="group hover:scale-105 hover:shadow-lg cursor-pointer rounded-lg border border-neutral-300 flex flex-col lg:flex-row shadow-md h-full bg-white">
                                    <div className="flex flex-col p-4 flex-grow">
                                        <p className="text-slate-400 text-base group-hover:text-primarytext2 mb-1">
                                            {blog.created_date}
                                        </p>
                                        <div className={`flex flex-col ${!blog.description ? 'justify-center flex-grow' : ''}`}>
                                            <h2 className={`text-md text-neutral-600 font-medium ${!blog.description ? 'text-center' : ''}`}>
                                                {blog.title}
                                            </h2>
                                            {blog.description && (
                                                <p className="font-light text-sm mt-1">
                                                    {blog.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 h-48 lg:h-auto">
                                        <Image src={blog.image} width={370} height={212} alt={blog.title} className="object-cover w-full h-full"/>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                    {/* add wallpaper here */}
                    <div className="flex items-start flex-col space-y-6 lg:space-y-8 max-w-7xl mx-auto pb-20 bg-slate-100 rounded-xl shadow-lg border-l-8 border-slate-200">
                        <h2 className="font-bold text-2xl lg:text-4xl bg-slate-200 w-fit p-5 rounded-br-xl text-neutral-600">All Blog</h2>
                        <div className="flex flex-row space-x-5 items-center mx-5">
                            <div className="relative flex-1 md:grow-0">
                                <TbSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-full rounded-full bg-white pl-8 md:w-[200px] lg:w-[336px]"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Select>
                                <SelectTrigger className="w-[180px] bg-white rounded-full">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sort By</SelectLabel>
                                        <SelectItem value="recent">Recently Added</SelectItem>
                                        <SelectItem value="reading_time">Reading Time</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-5">
                            {filteredBlogList.map((blog, index) => (
                                <Link href={blog.link} key={index} className="h-full">
                                    <div className="group hover:scale-105 hover:shadow-lg cursor-pointer rounded-2xl flex flex-col shadow-md h-[400px] bg-white">
                                        <div className="flex flex-col p-4 flex-grow overflow-hidden">
                                            <p className="text-slate-400 text-base group-hover:text-primarytext2 mb-1">
                                                {blog.created_date}
                                            </p>
                                            <div className={`flex flex-col h-full ${!blog.description ? 'justify-center' : ''}`}>
                                                <h2 className={`text-md text-neutral-600 font-medium line-clamp-2 ${!blog.description ? 'text-center' : ''}`}>
                                                    {blog.title}
                                                </h2>
                                                {blog.description && (
                                                    <p 
                                                        id={`description-${index}`}
                                                        className="font-light text-sm mt-1 line-clamp-3"
                                                    >
                                                        {blog.description}
                                                    </p>
                                                )}
                                                {blog.description && overflowStates[index] && (
                                                    <div className="mt-auto">
                                                        <span className="text-blue-600 hover:underline text-sm">Read More</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full h-48">
                                            <Image src={blog.image} width={365} height={212} alt={blog.title} className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
