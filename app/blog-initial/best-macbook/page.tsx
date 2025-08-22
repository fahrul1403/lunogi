"use client"
import Image from "next/image";
import Link from "next/link";
import { TbArrowDownCircle, TbArrowLeft, TbClock, TbHourglass } from "react-icons/tb";
import { motion, Variants } from "framer-motion";


// Define variants for the parent container
const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1 // Delay in seconds for each child
      }
    }
  };
  
  // Define variants for the children
  const childrenVariant: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  };

export default function Detail(){

    return(
        <> 
        <motion.div initial="initial" animate="animate" variants={parentVariant}>
            <motion.div className="child" variants={childrenVariant}>
                <div className="relative bg-cover bg-center h-[200px] lg:h-[400px] flex items-center justify-center text-white">
                    <Image
                        src="/banner-macbook.jpg"
                        width={1440}
                        height={400}
                        className="absolute inset-0 h-full object-cover"
                        alt="Lunogi Smart School Hero Image"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 flex flex-col space-y-6 items-start w-full px-7 lg:px-[156px] lg:py-[160px]">
                        <Link href={'/blog'} className="flex flex-row space-x-2">
                            <TbArrowLeft className="size-5 text-white" />
                            <p className="font-light text-base">Back to article list </p>
                        </Link>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">The best MacBook <br></br> in 2024 that you should buy</h1>
                            <div className="flex flex-col space-y-5 w-[360px]">
                                <p className="text-base font-light">
                                    Apple laptops are very expensive, but most people choose them. Check out the following article to make it easier for you to choose an Apple laptop
                                </p>

                                <a href="#blog-details">
                                    <div className="flex flex-row space-x-3 items-center justify-center bg-white py-3 rounded-full">
                                        <p className="text-base font-medium text-primarytext2">Read Now</p>
                                        <TbArrowDownCircle className="size-5 text-primarytext2"/>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>  
            </motion.div>
            <motion.div className="child" variants={childrenVariant}>
                <div className="py-10 flex flex-col items-center px-[156px]">
                    <div className="flex flex-row space-x-5 lg:space-x-9 items-center">
                        <div id="blog-details" className="flex flex-row space-x-3 items-center">
                            <TbClock className="size-5 text-neutral-600"/>
                            <p className="text-base text-neutral-600 font-normal">18 hour ago</p>
                        </div>
                        <div className="flex flex-row space-x-3 items-center">
                            <TbHourglass className="size-5 text-neutral-600"/>
                            <p className="text-base text-neutral-600 font-normal">5 Minutes for reading</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-10 pb-10 pt-20 px-[96px]">
                        <h1 className="text-4xl font-medium text-neutral-700 text-center">The best MacBook in 2024 that you should buy</h1>
                        <Image
                            src="/macbook-1.jpeg"
                            width={1126}
                            height={564}
                            className="object-contain"
                            alt="Lunogi Smart School Hero Image"
                            loading="eager"
                        />
                        <div className="flex flex-col space-y-6">
                            <h2 className="text-2xl font-medium text-neutral-700">Introduction</h2>
                            <p className="font-light text-lg text-neutral-700">
                                Choosing the right MacBook can be a very difficult decision, especially with so many models available on the market. In 2024, Apple continues to innovate by releasing several increasingly good MacBook models, each equipped with the latest technology and improved features.
                            </p>
                            <p className="font-light text-lg text-neutral-700">
                                In this article, we will cover the various MacBook models released in 2024. Whether you a   re looking for a high-performance MacBook for video editing or a lightweight, portable model for everyday use. This article will give you all the information you need to choose the best MacBook in 2024.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h2 className="text-2xl font-medium text-neutral-700"> Criteria for Choosing the Best MacBook</h2>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h3 className="text-2xl font-medium text-neutral-700"> Performance (CPU, GPU, RAM).</h3>
                            <div className="flex flex-col space-y-5 px-5">
                                <div className="flex flex-row space-x-4">
                                    <p className="font-light text-lg text-neutral-700"> - </p>
                                    <p className="font-light text-lg text-neutral-700">
                                        CPU (Central Processing Unit): The CPU is the brain of your MacBook. The more powerful the CPU, the faster and more efficient the MacBook will be at handling complex tasks. For heavy tasks like video editing or programming, a faster processor like the M1 Pro or M1 Max will provide better performance.
                                    </p>
                                </div>
                                <div className="flex flex-row space-x-4">
                                    <p className="font-light text-lg text-neutral-700"> - </p>
                                    <p className="font-light text-lg text-neutral-700">
                                        GPU (Graphics Processing Unit): GPU are essential for graphics-intensive tasks such as graphic design, video editing, and gaming. A MacBook with a more powerful GPU will provide better and smoother graphics performance.
                                    </p>
                                </div>
                                <div className="flex flex-row space-x-4">
                                    <p className="font-light text-lg text-neutral-700"> - </p>
                                    <p className="font-light text-lg text-neutral-700">
                                        RAM (Random Access Memory): RAM affects a MacBook ability to run multiple applications at once. The more RAM, the smoother the MacBook will run heavy applications and multitask. For most users, 8GB RAM is sufficient, but for heavy tasks, 16GB or more is recommended.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h3 className="text-2xl font-medium text-neutral-700">  Storage (SSD capacity and speed).</h3>
                            <div className="flex flex-col space-y-5 px-5">
                                <div className="flex flex-row space-x-4">
                                    <p className="font-light text-lg text-neutral-700"> - </p>
                                    <p className="font-light text-lg text-neutral-700">
                                        Kapasitas SSD Storage capacity determines how much data and applications you can store on your MacBook. The latest MacBook models typically offer options ranging from 256GB to 2TB or more. Choose the capacity that suits your needs.
                                    </p>
                                </div>
                                <div className="flex flex-row space-x-4">
                                    <p className="font-light text-lg text-neutral-700"> - </p>
                                    <p className="font-light text-lg text-neutral-700">
                                        Kecepatan SSD SSD speed affects how quickly your MacBook can access and store data. A faster SSD will speed up boot times, application launches, and file transfers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h3 className="text-2xl font-medium text-neutral-700">  Battery life.</h3>
                            <p className="font-light text-lg text-neutral-700">
                                Battery life is very important, especially if you often work outdoors or on the go. The latest MacBooks typically offer impressive battery life, with some models lasting up to 18-20 hours of normal use. Make sure to choose a MacBook with battery life that suits your lifestyle.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h3 className="text-2xl font-medium text-neutral-700"> Portability (weight, size)</h3>
                            <p className="font-light text-lg text-neutral-700">
                                Portability is an important factor if you travel frequently or take your MacBook to various places. The MacBook Air is a highly portable option with a thin and light design, while the MacBook Pro may be slightly heavier but offers more powerful performance. Consider the weight and size of the MacBook when making your decision.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h3 className="text-2xl font-medium text-neutral-700"> Price</h3>
                            <p className="font-light text-lg text-neutral-700">
                                Price is an inevitable factor in choosing a MacBook. More sophisticated models with high specifications will of course be more expensive. Set your budget and look for a MacBook that offers the best value for your needs and budget. Dont forget to consider additional costs such as accessories and warranties.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        </>
    )
}