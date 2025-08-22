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
                        src="/banner-ice.png"
                        width={1440}
                        height={400}
                        className="absolute inset-0 h-full object-contain"
                        alt="Lunogi Smart School Hero Image"
                        loading="eager"
                    />

                    <div className="relative z-10 flex flex-col space-y-6 items-start w-full px-7 lg:px-[156px] lg:py-[160px]">
                        <Link href={'/blog'} className="flex flex-row space-x-2">
                            <TbArrowLeft className="size-5 text-white" />
                            <p className="font-light text-base">Back to article list</p>
                        </Link>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Top Cameras for Stunning<br></br>Photography in 2024</h1>
                            <div className="flex flex-col space-y-5 w-[360px]">
                                <p className="text-base font-light">
                                    Find the best cameras for amazing photography in 2024. Get a photography camera to produce amazing photos in the following article!
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
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-4xl font-medium text-neutral-700">1. Convenience Redefined</h1>
                            <p className="font-light text-lg text-neutral-700">
                                Say goodbye to the hassle of filling and refilling ice trays. With a home ice maker, youll always have a ready supply of ice at your fingertips. Whether you are hosting a gathering, mixing cocktails, or simply enjoying a cold drink on a hot day, convenience is just a button press away. No more running to the store for bags of ice or waiting hours for trays to freeze. With an ice maker, you can focus on entertaining and enjoying your time with friends and family.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-4xl font-medium text-neutral-700">2. Versatility in Ice Options</h1>
                            <p className="font-light text-lg text-neutral-700">
                                Todays ice makers go beyond standard ice cubes. Choose from a variety of ice types such as crushed, nugget, or specialty shapes to suit different beverages and occasions. This versatility allows you to cater to diverse preferences, whether its for cocktails, iced coffees, or keeping seafood fresh. Imagine the perfect ice for every drink or dish without compromise, enhancing both presentation and taste.
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/ice-1.png"
                        width={1126}
                        height={564}
                        className="object-contain"
                        alt="Lunogi Smart School Hero Image"
                        loading="eager"
                    />
                    <div className="flex flex-col space-y-10 pb-10 pt-10 px-[96px]">
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-4xl font-medium text-neutral-700">3. Space-Saving Design</h1>
                            <p className="font-light text-lg text-neutral-700">
                                Designed to seamlessly integrate into your kitchen or bar area, ice makers come in compact sizes that optimize space usage. They can be installed under the counter, on the countertop, or even as portable units, offering flexibility without compromising valuable kitchen real estate. This compact design ensures that you can enjoy the benefits of an ice maker without sacrificing storage or prep space in your kitchen.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-4xl font-medium text-neutral-700">4. Energy Efficiency</h1>
                            <p className="font-light text-lg text-neutral-700">
                                Many modern ice makers are equipped with energy-efficient features, helping you save on electricity bills while reducing environmental impact. They operate efficiently to produce ice quickly and maintain consistent performance over time. With advanced technologies, such as energy-saving modes and insulated storage bins, you can enjoy the convenience of ice production without worrying about excessive energy consumption.
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/ice-2.png"
                        width={1126}
                        height={564}
                        className="object-contain"
                        alt="Lunogi Smart School Hero Image"
                        loading="eager"
                    />
                    <div className="flex flex-col space-y-10 pb-10 pt-10 px-[96px]">
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-4xl font-medium text-neutral-700">5. Easy Maintenance</h1>
                            <p className="font-light text-lg text-neutral-700">
                                Maintaining an ice maker is a breeze with features like self-cleaning mechanisms and easy-to-access parts for regular upkeep. This ensures that your ice maker remains hygienic and operates at peak efficiency with minimal effort on your part. By following simple maintenance routines, such as regular cleaning and filter replacement, you can extend the lifespan of your ice maker and ensure continued reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        </>
    )
}