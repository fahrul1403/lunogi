"use client";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const pulseVariant: Variants = {
    pulse: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5
        }
    }
};

export default function Detail(){
    const [visibleElements, setVisibleElements] = useState(0);
    const [activeHeading, setActiveHeading] = useState(0);

    useEffect(() => {
        const showNextElement = setTimeout(() => {
            if (visibleElements < 3) {
                setVisibleElements(prev => prev + 1);
            }
        }, 1000);

        return () => clearTimeout(showNextElement);
    }, [visibleElements]);

    useEffect(() => {
        if (visibleElements >= 2) {
            const interval = setInterval(() => {
                setActiveHeading((prev) => (prev === 0 ? 1 : 0));
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [visibleElements]);

    return(
        <div className="h-screen flex items-center justify-center">
            <div className="text-center px-10">
                <motion.h1 
                    className="text-4xl font-bold"
                    initial="hidden"
                    animate={visibleElements > 0 ? (activeHeading === 0 ? ["visible", "pulse"] : "visible") : "hidden"}
                    variants={{...fadeInVariant, ...pulseVariant}}
                    transition={{ duration: 0.5 }}
                >
                    Good luck with your exam, Astrid!
                </motion.h1>
                <motion.h1 
                    className="text-4xl font-bold mt-10"
                    initial="hidden"
                    animate={visibleElements > 1 ? (activeHeading === 1 ? ["visible", "pulse"] : "visible") : "hidden"}
                    variants={{...fadeInVariant, ...pulseVariant}}
                    transition={{ duration: 0.5 }}
                >
                    Chongqing is basically Cyberpunk 2077.
                </motion.h1>
                <motion.p 
                    className="text-xl mt-10"
                    initial="hidden"
                    animate={visibleElements > 2 ? "visible" : "hidden"}
                    variants={fadeInVariant}
                    transition={{ duration: 0.5 }}
                >
                    Don&apos;t worry, this is a hidden page, no one knows I made it (brought to you by <Link href="https://www.youtube.com/watch?v=q-1rnv3lkhM" target="_blank" className="text-blue-500">The Weezer Snuggie</Link>).
                </motion.p>
            </div>
        </div>
    )
}