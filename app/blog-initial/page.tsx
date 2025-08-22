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

export default function Blog(){

    // const top_articles = {
    //     title:'Benefits of Having an Ice Maker at Home',
    //     description:'Considering the addition of an ice maker to your home? Here’s why it could significantly enhance your lifestyle.',
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
            description:'Considering the addition of an ice maker to your home? Here’s why it could significantly enhance your lifestyle.',
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
            image:'/skincare.webp',
            created_date:'12 hour ago'
        },
        {
            title:'Discover the Best Video Game Consoles for an Amazing Gaming Experience',
            description:'Looking for the best video game console? Read our article to find the best choice for your gaming needs.',
            link:'/blog/best-gaming-console',
            image:'/console.jpg',
            created_date:'12 hour ago'
        },
        {
            title:'Best Earbuds 2024: Top Picks for Quality and Comfort',
            description:'Discover the best earbuds of 2024 with your top picks. Get quality earbuds and extraordinary sound comfort in this article!',
            link:'/blog/best-earbuds',
            image:'/earbuds.webp',
            created_date:'12 hour ago'
        },
        {
            title:'Top Cameras for Stunning Photography in 2024',
            description:'Find the best cameras for amazing photography in 2024. Get a photography camera to produce amazing photos in the following article!',
            link:'/blog/camera-and-photos-recommendation',
            image:'/cameras.webp',
            created_date:'12 hour ago'
        },
        {
            title:'3 Best Countertop Ice Maker that is easy to use',
            description:'Discover the 3 best countertop ice makers that are easy to use. Get quick and reliable ice production with these top-rated, user-friendly ice makers.',
            link:'/blog/best-icemaker-countertop',
            image:'/ice-maker.jpeg',
            created_date:'12 hour ago'
        }
    ]

    return(
        <>
            <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col space-y-20">
                <TopArticle
                    title={top_articles.title}
                    description={top_articles.description}
                    duration={top_articles.duration}
                    created_date={top_articles.created_date}
                    link={top_articles.link}
                    image={top_articles.image}
                />
                <div className="flex flex-col space-y-8 lg:space-y-10">
                    <h2 className="font-medium text-xl lg:text-2xl text-neutral-600">Recently Blog</h2>
                    <div className="grid grid-col-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6 px-2 lg:px-0">
                    { recent_blog.map((blog, index) => (
                        <Link href={blog.link} key={index}>
                            <div className="group hover:scale-105 hover:shadow-lg cursor-pointer rounded-lg border border-neutral-300 flex flex-col lg:flex-row shadow-md">
                                <div className=" flex flex-col space-y-1 p-4">
                                    <p className="text-slate-400 text-base group-hover:text-primarytext2">
                                        {blog.created_date}
                                    </p>
                                    <h2 className="text-md  font-medium">
                                        {blog.title}
                                    </h2>
                                    <p className="font-light text-sm">
                                        {blog.description}
                                    </p>
                                </div>
                                <div className="w-full">
                                    <Image src={blog.image} width={370} height={212} alt="Elevate Your Living Room with These Stylish Products" className="object-cover h-full"/>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
                <div className="flex items-start flex-col space-y-6 lg:space-y-8">
                    <h2 className="font-medium text-xl lg:text-2xl text-neutral-600">All Blog</h2>
                    <div className="flex flex-row space-x-5 items-center">
                        <div className="relative flex-1 md:grow-0">
                            <TbSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-full bg-white pl-8 md:w-[200px] lg:w-[336px]"
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {blog_list.map((blog, index) => (
                            <Link href={blog.link} key={index}>
                                <div key={index} className="group hover:scale-105 justify-between hover:shadow-lg min-h-full cursor-pointer rounded-lg border border-neutral-300 flex flex-col shadow-md">
                                    <div className="flex flex-col space-y-1 p-4">
                                        <p className="text-slate-400 text-base group-hover:text-primarytext2">
                                            {blog.created_date}
                                        </p>
                                        <h2 className="text-md text-neutral-600 font-medium">
                                            {blog.title}
                                        </h2>
                                        <p className="font-light text-sm">
                                            {blog.description}
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <Image src={blog.image} width={412} height={212} className="max-h-[200px]" alt="Elevate Your Living Room with These Stylish Products" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}