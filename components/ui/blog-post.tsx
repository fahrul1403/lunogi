
import Image from "next/image";
import { BentoGridBlog,BentoGridItem } from "./bento-grid-blog";

export default function BlogPost(){

    const blogs = [
        { 
          image: <Image src={'/blog-1.jpg'} width={500} height={30} alt="Blog" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'MacBook Pro M3: A Powerhouse Unveiled', 
          description: 'Welcome to our in-depth review of the MacBook Pro M3, the latest addition to Apple’s MacBook Pro lineup. Discover its cutting-edge features, stunning design, and exceptional performance.',
          slug: 'blog/macbook-pro-m3-powerhouse-unveiled'
        },
        { 
          image: <Image src={'/blog-2.jpg'} width={500} height={30} alt="Blog" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Nautica Voyage Eau De Toilette Review: Sail with Confidence', 
          description: 'Embrace the spirit of adventure with Nautica Voyage Eau De Toilette for Men. This invigorating scent captures the essence of a seaside getaway.',
          slug: 'blog/nautica-voyage-eau-de-toilette-review'
        },
        { 
          image: <Image src={'/blog-3.jpg'} width={500} height={30} alt="Blog" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'Portable Air Conditioners: Beat the Heat Anywhere', 
          description: 'When the summer heat hits, staying cool and comfortable is essential, whether you are at home, the office, or camping. Enter portable air conditioners.',
          slug: 'blog/portable-air-conditioners-beat-the-heat-anywhere'
        },
        { 
          image: <Image src={'/blog-4.jpg'} width={1000} height={30} alt="Blog" className="w-full h-full object-cover rounded-2xl" />, 
          title: 'JBL Flip 5 Waterproof Portable Bluetooth Speaker Review: Unleash the Party', 
          description: 'The JBL Flip 5 stands out as a top portable Bluetooth speaker, ideal for both indoor and outdoor events. With vibrant sound, rugged design, and waterproof features, the Flip 5 ensures the music never stops.',
          slug: 'blog/jbl-flip-5-bluetooth-speaker-review'
        },
        { 
          image: <Image src={'/blog-5.jpg'} width={500} height={30} alt="Blog" className="w-full h-full object-cover rounded-2xl" />, 
          title: `Adidas Women's Duramo SL 2.0 Running Shoe: Step Into Comfort`, 
          description: `For women with active lifestyles, finding the perfect running shoe is essential. The adidas Women's Duramo SL 2.0 Running Shoe combines performance, comfort, and style.`,
          slug: 'blog/adidas-womens-duramo-sl-2-running-shoe-review'
        },
        { 
            image: <Image src={'/blog-6.jpg'} width={500} height={30} alt="Blog" className="w-full h-full object-cover rounded-2xl" />, 
            title: `GLAM UP Premium Facial Sheet Mask 12-Combo: Unveil Radiant Skin`, 
            description: `The GLAM UP Premium Facial Sheet Mask 12-Combo offers a complete skincare solution for achieving hydrated, nourished, and revitalized skin. With twelve unique masks.`,
            slug: 'blog/glam-up-facial-sheet-mask-12-combo-review'
        },
    ];

    return (
        <>
            <div className="flex flex-col space-y-3 p-8 rounded-3xl bg-white">
                <BentoGridBlog className="w-full">
                { blogs.map((blog, index) => (
                    <BentoGridItem
                    key={index}
                    link={blog.slug}
                    title={blog.title}
                    description={blog.description}
                    header={blog.image}
                    />
                ))}
                </BentoGridBlog>
            </div>
            
        </>
    )
}