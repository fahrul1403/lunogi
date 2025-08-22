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
                        src="/banner-skincare.jpg"
                        width={1440}
                        height={400}
                        className="absolute inset-0 h-full object-cover"
                        alt="Lunogi Smart School Hero Image"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 flex flex-col space-y-6 items-start w-full px-7 lg:px-[156px] lg:py-[160px]">
                        <Link href={'/blog'} className="flex flex-row space-x-2">
                            <TbArrowLeft className="size-5 text-white" />
                            <p className="font-light text-base">Back to article list</p>
                        </Link>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Morning and Night<br></br>Skin Care Routine Tips</h1>
                            <div className="flex flex-col space-y-5 w-[360px]">
                                <p className="text-base font-light">
                                    Discover essential morning and night skin care routine tips to keep your skin glowing and healthy in the following article. 
                                </p>

                                <a href="#blog-details">
                                    <div className="flex flex-row space-x-3 items-center justify-center bg-white py-3 rounded-full">
                                        <p className="text-base font-medium text-neutral-700">Read Now</p>
                                        <TbArrowDownCircle className="size-5 text-neutral-700"/>
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
                        <h1 className="text-4xl font-medium text-neutral-700 text-center">Morning and Night Skin Care Routine Tips</h1>
                        <Image
                            src="/skincare1.webp"
                            width={1126}
                            height={564}
                            className="object-contain"
                            alt="Lunogi Smart School Hero Image"
                            loading="eager"
                        />
                        <div className="flex flex-col space-y-6">
                            <p className="font-light text-lg text-neutral-700">
                                This article will increase your knowledge of the important steps to keep your skin healthy and radiant all the time. You will find a detailed step-by-step routine for morning and evening skin care. Additionally, this article advises you to optimize your skin care routine and avoid common mistakes to help you achieve the best results. Are you new to skin care or want to improve your current skin care routine? This article will provide you with the knowledge to perfect your daily routine
                            </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h2 className="text-3xl font-medium text-neutral-700">Why a Consistent Skin Care Routine is Important</h2>
                            <p className="font-light text-lg text-neutral-700">
                                Todays ice makers go beyond standard ice cubes. Choose from a variety of ice types such as crushed, nugget, or specialty shapes to suit different beverages and occasions. This versatility allows you to cater to diverse preferences, whether its for cocktails, iced coffees, or keeping seafood fresh. Imagine the perfect ice for every drink or dish without compromise, enhancing both presentation and taste.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        </>
    )
}