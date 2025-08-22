import Link from "next/link";
import GradualSpacing from "./gradual-spacing";
import { usePathname } from "next/navigation";

export default function Hero(){

    const pathname = usePathname();
    return (
        <>
            <div className="flex flex-col items-center mb-10">
                <GradualSpacing
                    className="font-display text-center text-2xl hidden lg:block font-bold tracking-[-0.1em]  text-slate-700 dark:text-white md:text-6xl md:leading-[5rem]"
                    text="Discover the Best Products in One Place"
                />
                <h1 className="text-3xl block lg:hidden text-slate-700 font-bold text-center">Discover the Best Products in One Place</h1>
                <h2 className="lg:text-lg text-slate-700 text-center text-base mt-3 lg:mt-0">Explore a curated selection of top products from Amazon and enjoy an easy and delightful shopping experience.</h2>
                <button className="px-8 mt-5 py-2 shadow-md rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                        <Link href="/products"
                            className={`${pathname === '/products' ? 'text-blue3' : 'hover:text-blue3'} cursor-pointer`}
                        >
                            Browse our Products
                        </Link>
                </button>
            </div>
        </>
    )
}