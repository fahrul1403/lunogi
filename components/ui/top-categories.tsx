import { BentoGrid, BentoGridItem } from "./bento-grid-categories";
import Image from "next/image";
import Link from 'next/link';

export function TopCategories(){

    const categories = [
        { 
          image: <Image src={'/electronics.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Gadgets & Electronics', 
          description: 'Latest and greatest in tech gadgets and devices.'
        },
        { 
          image: <Image src={'/arts.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Arts', 
          description: 'Discover beautiful art pieces and supplies.'
        },
        { 
          image: <Image src={'/watch.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Watch', 
          description: 'Stylish watches to complement any look.'
        },
        { 
          image: <Image src={'/jewelries.jpg'} width={1000} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Jewelry', 
          description: 'Elegant and stylish jewelry for every occasion.'
        },
        { 
          image: <Image src={'/furniture.jpg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Furniture', 
          description: 'Comfortable and modern furniture for your home.'
        },
      ];
    return (
        <>
            <div className="flex flex-col space-y-3 p-8 rounded-3xl bg-slate-100">
                <div className="flex flex-row justify-between w-full lg:pb-4 pb-2">
                    <h3 className="text-xl lg:text-2xl text-slate-700 font-semibold">Our Top Categories</h3>
                </div>
                <BentoGrid className="w-full">
                { categories.map((category, index) => (
                    <BentoGridItem
                    key={index}
                    title={category.title}
                    description={category.description}
                    header={category.image}
                    className={index % 7 === 3 || index % 7 === 6 ? "md:col-span-2" : ""}
                    />
                ))}
                </BentoGrid>
            </div>
            
        </>
    )
}





export function ListCategories(){

  const categories = [
      { 
        image: <Image src={'/category-fashion.jpeg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
        title: 'Fashion', 
        description: 'Latest and greatest in tech gadgets and devices.',
      },
      { 
        image: <Image src={'/category-outdoors.jpeg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
        title: 'Outdoors', 
        description: 'Discover beautiful art pieces and supplies.',
      },
      { 
        image: <Image src={'/category-electronics.png'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
        title: 'Electronics', 
        description: 'Stylish watches to complement any look.',
      },
      { 
        image: <Image src={'/category-supplements.jpeg'} width={1000} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
        title: 'Supplements', 
        description: 'Comfortable and modern furniture for your home.',
      },
      { 
        image: <Image src={'/category-gadgets.jpeg'} width={500} height={30} alt="Categories" className="w-full h-full object-cover rounded-2xl" />, 
        title: 'Gadgets', 
        description: 'Elegant and stylish jewelry for every occasion.',
      },
    ];

  return (
    <>
      <div className="flex flex-col space-y-3 p-8 rounded-3xl bg-slate-100 w-full">
        <div className="flex flex-row justify-between w-full lg:pb-4 pb-2">
          <h3 className="text-xl lg:text-2xl text-slate-700 font-semibold">Our Top Categories</h3>
        </div>
        <BentoGrid className="w-full">
        { categories.map((category, index) => (
          <div key={index} className={index % 7 === 3 || index % 7 === 6 ? "md:col-span-2" : ""}>
            <Link href={`/products?category=${encodeURIComponent(category.title)}`}>
              <BentoGridItem
                title={category.title}
                description={category.description}
                header={category.image}
              />
            </Link>
          </div>
        ))}
        </BentoGrid>
      </div>
    </>
  )
}

