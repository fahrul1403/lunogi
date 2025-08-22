import Image from "next/image";
import Link from "next/link";
import { TbPinned, TbPhone, TbMail, TbBrandInstagram, TbBrandTiktok, TbBrandTwitter, TbBrandFacebook, TbBrandYoutube } from "react-icons/tb";

export default function Footer(){
    return(
        <>
            <div className="bg-secondary lg:px-[96px] px-12 py-12 lg:py-[68px] flex flex-col space-y-8 lg:space-y-12">
                <div className="flex flex-col space-y-4">
                    <Image src={'/logo-lit.png'} width={169} height={60} className="lg:block hidden" alt="Lumbung Inovasi Teknologi Footer"/>
                    <Image src={'/logo-lit.png'} width={120} height={60} className="lg:hidden block" alt="Lumbung Inovasi Teknologi Footer"/>
                    {/* <p className="font-normal lg:text-md text-neutral-700">PT. Lumbung Inovasi Teknologi</p> */}
                </div>
                <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-12 justify-between">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-4 items-start">
                            <TbPinned className="size-14 lg:size-6 text-primarytext2"/>
                            <p className="text-neutral-700 text-sm lg:text-base font-light max-w-[312px]">
                                Sedayu City, Jl. Sedayu City
                                Boulevard Utara No. 16, RT. 1 / RW.9,
                                Cakung Barat, Cakung, Jakarta
                                Timur, Jakarta, 13910
                            </p>
                        </div>
                        <div className="flex flex-row space-x-4 items-start">
                            <TbPhone className="size-5 text-primarytext2"/>
                            <p className="text-neutral-700 text-sm lg:text-base font-light">
                                0811 - 8880 - 1078
                            </p>
                        </div>
                        <div className="flex flex-row space-x-4 items-start">
                            <TbMail className="size-5 text-primarytext2"/>
                        <p className="text-neutral-700 text-sm lg:text-base font-light">
                            info@lunogi.com
                        </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-12 lg:space-x-16">
                        <div className="flex flex-col space-y-4">
                            <Link href={'/'} className="font-normal text-neutral-700 text-sm lg:text-base">Home</Link>
                            <Link href={'/blog'} className="font-normal text-neutral-700 text-sm lg:text-base">Our Blog</Link>
                            <Link href={'https://lunogi.com/'} className="hover:text-primarytext2 font-normal text-neutral-700 text-sm lg:text-base">Our Company</Link>
                            {/* <p className="font-normal text-neutral-700 text-sm lg:text-base">Our Product</p> */}
                            {/* <p className="font-normal text-neutral-700 text-sm lg:text-base">Our Team</p> */}
                        </div>
                        <div className="flex flex-col space-y-4">
                            <p className="font-normal text-neutral-700 text-sm lg:text-base">Our Social Media</p>
                            <div className="flex flex-row space-x-4 items-center">
                                <TbBrandInstagram className="size-5 text-primarytext2"/>
                                <p className="font-normal text-neutral-700 text-sm lg:text-base">Lunogi.id</p>
                            </div>
                            <div className="flex flex-row space-x-4 items-center">
                                <TbBrandTiktok className="size-5 text-primarytext2"/>
                                <p className="font-normal text-neutral-700 text-sm lg:text-base">Lunogi.id</p>
                            </div>
                            <div className="flex flex-row space-x-4 items-center">
                                <TbBrandTwitter className="size-5 text-primarytext2"/>
                                <p className="font-normal text-neutral-700 text-sm lg:text-base">@lunogi.id</p>
                            </div>
                            <div className="flex flex-row space-x-4 items-center">
                                <TbBrandFacebook className="size-5 text-primarytext2"/>
                                <p className="font-normal text-neutral-700 text-sm lg:text-base">Lumbung Inovasi Teknologi</p>
                            </div>
                            <div className="flex flex-row space-x-4 items-center">
                                <TbBrandYoutube className="size-5 text-primarytext2"/>
                                <p className="font-normal text-neutral-700 text-sm lg:text-base">Lumbung Inovasi Teknologi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="px-6 py-5 bg-gradient-to-b p-2 from-blue-500 to-blue-600 text-neutral-700 focus:ring-2 focus:ring-blue-400">
                <div className="max-w-7xl mx-auto">
                <p className="text-white text-xs lg:text-sm">&copy; 2024 All Rights Reserved | PT. Lumbung Inovasi Teknologi </p>
                </div>
            </footer>
        </>
    )
}