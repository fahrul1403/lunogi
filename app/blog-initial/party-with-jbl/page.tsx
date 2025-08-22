"use client";
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
                        src="/banner-jbl.jpg"
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
                            <p className="font-light text-base">Back to article list</p>
                        </Link>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-white font-semibold text-3xl lg:text-4xl w-[550px]">Party All Day with Up to 20 Hours of Non-Stop Music!</h1>
                            <div className="flex flex-col space-y-5 w-[360px]">
                                <p className="text-base font-light">
                                    Imagine a party where the music never stops, the energy remains high, and the good times keep rolling from sunrise to sunset. With up to 20 hours of uninterrupted battery life, you can now enjoy a full day of your favorite tunes without missing a beat. Here are some portable speakers that offer up to 20 hours of playtime. 
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
                    <div id="blog-details" className="flex flex-row space-x-5 lg:space-x-9 items-center">
                        <div className="flex flex-row space-x-3 items-center">
                            <TbClock className="size-5 text-neutral-600"/>
                            <p className="text-base text-neutral-600 font-normal">1 hour ago</p>
                        </div>
                        <div className="flex flex-row space-x-3 items-center">
                            <TbHourglass className="size-5 text-neutral-600"/>
                            <p className="text-base text-neutral-600 font-normal">10 Minutes for reading</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-10 pb-10 pt-20 px-[96px]">
                        <div className="flex flex-col space-y-5">
                            <h1 className="font-medium text-4xl text-center">Party All Day with Up to 20 Hours of Non-Stop Music!</h1>
                            <p className="flex flex-col space-y-5 text-justify">
                            Imagine a party where the music never stops, the energy remains high, and the good times keep rolling from sunrise to sunset. With up to 20 hours of uninterrupted battery life, you can now enjoy a full day of your favorite tunes without missing a beat. Here are some portable speakers that offer up to 20 hours of playtime. 
                            </p>
                        </div>
                        <div className="flex flex-col space-y-5 px-20">
                            <p className="font-medium text-lg">1. JBL Charge 4</p>
                            <div className="flex flex-row space-x-3">
                                <Image src={'/jbl-1.jpeg'} width={250} height={250} alt="JBL Chargr 4"/>
                                <p className="flex flex-col space-y-5 text-justify">
                                    Another top contender in the world of waterproof speakers is the JBL Charge 4. Known for its powerful sound and long-lasting battery life, the Charge 4 is a great option for those who love to take their music with them on-the-go. With a rugged design and IPX7 waterproof rating, this speaker can withstand water immersion up to 1 meter for 30 minutes, making it perfect for pool parties or beach days. The built-in power bank also allows you to charge your devices while you listen to your favorite tunes.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5 px-20">
                            <p className="font-medium text-lg">2. Bose SoundLink Micro</p>
                            <div className="flex flex-row space-x-3">
                                <Image src={'/jbl-2.jpeg'} width={250} height={250} alt="JBL Chargr 4"/>
                                <p className="flex flex-col space-y-5 text-justify">
                                    If you are looking for a compact and portable waterproof speaker, the Bose SoundLink Micro is a fantastic choice. Despite its small size, this speaker delivers surprisingly loud and clear sound with impressive bass. The rugged design is not only waterproof but also resistant to dents, cracks, and scratches, making it ideal for outdoor adventures. With a tear-resistant strap, you can easily attach the SoundLink Micro to your backpack or bike and take it wherever you go.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5 px-20">
                            <p className="font-medium text-lg">3. Sony SRS-XB33</p>
                            <div className="flex flex-row space-x-3">
                                <p className="flex flex-col space-y-5 text-justify">
                                    For those who prioritize bass in their music, the Sony SRS-XB33 is an excellent option. This speaker features Extra Bass technology that delivers deep, punchy bass that will get you moving. With an IP67 waterproof and dustproof rating, the SRS-XB33 can be submerged in water up to 1 meter for 30 minutes without any damage. The speaker also comes with customizable lighting effects that sync to the beat of your music, adding an extra element of fun to your listening experience.
                                </p>
                                <Image src={'/jbl-3.jpeg'} width={250} height={250} alt="JBL Chargr 4"/>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5 px-20">
                            <p className="font-medium text-lg">4. Altec Lansing IMW258 Mini H2O 3</p>
                            <div className="flex flex-row space-x-3">
                                <p className="flex flex-col space-y-5 text-justify">
                                    If you are looking for a budget-friendly waterproof speaker that doesnt compromise on sound quality, the Altec Lansing IMW258 Mini H2O 3 is a great choice. This compact speaker is IP67 waterproof and dustproof, making it perfect for outdoor use. With a carabiner clip and floatable design, you can easily attach the Mini H2O 3 to your bag or let it float in the pool while you relax. Despite its small size, this speaker delivers clear and crisp sound that will exceed your expectations.
                                </p>
                                <Image src={'/jbl-4.jpeg'} width={250} height={250} alt="JBL Chargr 4"/>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5 px-20">
                            <div className="flex flex-row space-x-3">
                                <p className="flex flex-col space-y-5 text-justify">
                                    <b>In conclusion,</b> having a waterproof audio speaker is a game-changer for any music lover who enjoys spending time outdoors. Whether you are lounging by the pool, camping in the woods, or hitting the beach, having a speaker that can withstand water, dust, and drops will ensure that your music never skips a beat. The speakers mentioned above are some of the best options on the market, each offering unique features and impressive sound quality. Investing in a waterproof speaker is not only practical but also guarantees that you can enjoy your favorite music in any environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>  
        </motion.div>
        </>
    )
}