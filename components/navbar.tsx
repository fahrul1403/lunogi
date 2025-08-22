"use client"

import Link from "next/link";
import Image from "next/image";
import { ConsentManager } from "./ConsentManager";
import { useEffect } from "react";
import { initializeGTM } from "@/lib/gtm";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        initializeGTM();
      }, []);

    const pathname = usePathname();

    return(
        <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
            <ConsentManager />
            <div className="pt-2 pb-3 lg:pb-4 flex flex-row justify-between items-center px-5 lg:px-12 w-full">
                <Link href={'/'} className="cursor-pointer">
                    <Image src={'/logo-lit.png'} width={126} height={36} alt="Lubkita Logo" className="block lg:hidden" />
                    <Image src={'/logo-lit.png'} width={156} height={36} alt="Lubkita Logo" className="hidden lg:block" />
                </Link>
                <div className="hidden lg:flex flex-row space-x-5 items-center">
                    <Link href="/"
                        className={`${pathname === '/' ? 'text-blue3' : 'hover:text-blue3'} cursor-pointer`}
                    >
                        Home
                    </Link>
                    <Link href="/products"
                        className={`${pathname === '/products' ? 'text-blue3' : 'hover:text-blue3'} cursor-pointer`}
                    >
                        Our Products
                    </Link>
                    <Link href="/blog"
                        className={`${pathname === '/blog' ? 'text-blue3' : 'hover:text-blue3'} cursor-pointer`}
                    >
                        Read our Blog
                    </Link>
                </div>
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Close" : "Menu"}
                </button>
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden flex flex-col space-y-4 bg-slate-200"
                    >
                        <Link href="/"
                            className={`${pathname === '/' ? 'text-blue3' : 'hover:text-blue3'} cursor-pointer px-5 py-2 border-b mt-4 border-gray-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link href="/products"
                            className={`${pathname === '/products' ? 'text-blue3' : 'hover:text-blue3'} cursor-pointer px-5 py-2 border-b border-gray-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Our Products
                        </Link>
                        <Link href="/blog"
                            className={`${pathname === '/blog' ? 'text-blue3' : 'hover:text-blue3'} cursor-pointer px-5 py-2 border-b border-gray-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Read our Blog
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}