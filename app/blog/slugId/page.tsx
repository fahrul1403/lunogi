"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface BlogDetail {
    breadcumb: string;
    title: string;
    images: string;
    description: string;
    link:string;
}

export default function BlogDetail(){
    const pathname = usePathname();
    let detail: BlogDetail;

    if(pathname === '/blog/macbook-pro-m3-powerhouse-unveiled'){
        detail = {
            breadcumb: 'MacBook Pro M3: A Powerhouse Unveiled',
            title: 'MacBook Pro M3: A Powerhouse Unveiled',
            images: '/blog-1.jpg',
            description: `Welcome to our in-depth review of the MacBook Pro M3, the latest addition to Apple's MacBook Pro lineup. Discover its cutting-edge features, stunning design, and exceptional performance.
    
            Elegant Design and Build
    
            The MacBook Pro M3 continues Apple's tradition of sleek and sophisticated design. Lightweight and durable, its aluminum construction makes it perfect for professionals and students on the go.
    
            Unmatched Performance
    
            Powered by Apple's revolutionary M3 chip, the MacBook Pro M3 delivers unparalleled performance. Handle demanding tasks, multitask seamlessly, and unleash your creativity with blazing speed.
    
            Innovative Features
    
            Experience the dynamic Touch Bar with contextual shortcuts, Wi-Fi 6 compatibility, Thunderbolt ports, and secure Touch ID. The advanced cooling system ensures quiet operation even under heavy workloads.
    
            Visual and Audio Excellence
    
            Enjoy stunning clarity with the Retina display, enhanced by True Tone technology. Immerse yourself in rich audio with wide stereo sound, perfect for multimedia consumption.
    
            Long-lasting Battery Life
    
            The M3 chip's energy efficiency provides all-day battery life. Fast charging support ensures you're always connected and productive.
    
            In summary, the MacBook Pro M3 sets a new standard in laptop excellence with its design, features, and performance. Whether you're a student, professional, or creative, the MacBook Pro M3 empowers you to achieve your goals. Explore new possibilities with the MacBook Pro M3.`,
            link: 'https://amzn.to/452ZOGz'
        };
    } else if(pathname === '/blog/nautica-voyage-eau-de-toilette-review'){
        detail = {
            breadcumb: 'Nautica Voyage Eau De Toilette Review: Sail with Confidence',
            title: 'Nautica Voyage Eau De Toilette Review: Sail with Confidence',
            images: '/blog-2.jpg',
            description: `Embrace the spirit of adventure with Nautica Voyage Eau De Toilette for Men. This invigorating scent captures the essence of a seaside getaway, perfect for the modern, confident man.
    
            Refreshing Aroma Profile
    
            Nautica Voyage opens with crisp, aquatic notes, blending juicy apple and water lotus for a sweet and lively touch. As it matures, woody cedarwood adds warmth, while a base of musk leaves a lasting, seductive finish.
    
            Perfect for Daytime Wear
    
            Ideal for any occasion, Nautica Voyage's fresh and uplifting scent suits the confident, sophisticated man. Whether at work, brunch, or a weekend getaway, this versatile fragrance leaves a lasting impression.
    
            Elegant Packaging
    
            The sleek, stylish bottle reflects Nautica's maritime heritage. Its wave-patterned glass and blue hue symbolize the vast sea, while silver accents add a touch of elegance.
    
            In conclusion, Nautica Voyage Eau De Toilette for Men is a captivating fragrance that evokes exploration and adventure. With its refreshing, romantic, and fruity notes, it's the perfect companion for the modern man who lives life with confidence and style.`,
            link: ''
        };
    } else if(pathname === '/blog/portable-air-conditioners-beat-the-heat-anywhere'){
        detail = {
            breadcumb: 'Portable Air Conditioners: Beat the Heat Anywhere',
            title: 'Portable Air Conditioners: Beat the Heat Anywhere',
            images: '/blog-3.jpg',
            description: `When the summer heat hits, staying cool and comfortable is essential, whether you are at home, the office, or camping. Enter portable air conditioners: the perfect solution for refreshing comfort wherever you are.
    
            The Need for Convenient Cooling Solutions
    
            Traditional air conditioning systems are bulky, expensive, and often impractical for small spaces or on-the-go use. Portable air conditioners offer a convenient alternative, providing efficient cooling without the need for costly installations or complex setups. Whether you're lounging in your backyard, driving in your car, or working in a stuffy office, a portable air conditioner can provide instant relief from the heat.
    
            Introducing the Small Air Conditioner with Mist, Timer, and Night Light
    
            For optimal comfort and convenience, the Small Air Conditioner with Mist, Timer, and Night Light offers a compact and versatile cooling solution. This portable air conditioner uses advanced evaporative cooling technology to lower ambient temperatures efficiently while adding moisture to the air for added comfort. Its compact design makes it ideal for small spaces such as offices, dorm rooms, and RVs, and its sleek black finish adds a touch of modern elegance to any environment.
    
            Key Features and Benefits
    
            Let's take a closer look at some of the standout features of the Small Air Conditioner with Mist, Timer, and Night Light:
    
            - 2 Mist Modes: Choose between cool mist and natural mist modes, depending on your preferences and the ambient conditions.
            - 3 Timer Settings: Set the timer for 2, 4, or 6 hours to conserve energy and enjoy peace of mind, knowing the air conditioner will shut off automatically.
            - 7 Colors Night Light: The built-in LED night light offers seven vibrant colors to suit any mood or occasion, creating a soothing ambiance.
            - 3 Fan Speeds: Adjust the fan speed to your liking with three adjustable settings (low, medium, and high) for optimal cooling performance.
    
            Versatile Uses
    
            The Small Air Conditioner with Mist, Timer, and Night Light is not limited to indoor use. Its compact size and portability make it perfect for a variety of applications, including:
    
            - Car Cooling: Keep your car cool and comfortable on hot summer trips, reducing the need for air conditioning and saving fuel.
            - Office Desk: Keep your workspace comfortable, even on the hottest days, reducing stress and boosting productivity.
            - Camping Companion: Stay cool and refreshed during outdoor activities or camping trips, ensuring a restful night's sleep under the stars.
    
            In summary, portable air conditioners provide a practical and versatile solution for staying cool and comfortable in any setting. The Small Air Conditioner with Mist, Timer, and Night Light is the perfect companion for beating the heat with its compact design, advanced features, and stylish appearance. Invest in your comfort and well-being today with this innovative cooling solution.`,
            link: ''
        };
    } else if(pathname === '/blog/jbl-flip-5-bluetooth-speaker-review'){
        detail = {
            breadcumb: 'JBL Flip 5 Waterproof Portable Bluetooth Speaker Review: Unleash the Party',
            title: 'JBL Flip 5 Waterproof Portable Bluetooth Speaker Review: Unleash the Party',
            images: '/blog-4.jpg',
            description: `The JBL Flip 5 stands out as a top portable Bluetooth speaker, ideal for both indoor and outdoor events. With vibrant sound, rugged design, and waterproof features, the Flip 5 ensures the music never stops.
    
            Build and Design
    
            The JBL Flip 5 features a sleek and portable design, making it easy to carry around. Available in a vibrant teal color, it adds a touch of personality to any setting. The durable rubber housing protects against bumps and drops, allowing you to enjoy your favorite music by the pool or at the beach without worrying about damaging the speaker.
    
            Impressive Performance
    
            Despite its compact size, the Flip 5 delivers surprisingly powerful sound. With dual passive radiators and a racetrack-shaped driver, it produces a rich audio experience with deep bass, clear mids, and crisp highs. Whether you're relaxing at home or hosting a party, the Flip 5's sound quality will not disappoint.
    
            Features and Connectivity
    
            The Flip 5 offers seamless Bluetooth connectivity, making it easy to pair with your devices. It also features PartyBoost technology, allowing you to link multiple compatible JBL speakers for an enhanced, synchronized sound experience. The built-in rechargeable battery provides up to 12 hours of playtime, ensuring the music lasts all day.
    
            Conclusion
    
            In conclusion, the JBL Flip 5 is a reliable and versatile Bluetooth speaker that ticks all the boxes. Its robust design, water resistance, and exceptional sound quality make it the perfect companion for any occasion, whether you're hosting a backyard BBQ or relaxing by the pool. If you're looking for a portable speaker that combines performance and style, the JBL Flip 5 is an excellent choice.`,
            link: ''
        };
    } else if(pathname === '/blog/adidas-womens-duramo-sl-2-running-shoe-review'){
        detail = {
            breadcumb: `Adidas Women's Duramo SL 2.0 Running Shoe: Step Into Comfort`,
            title: `Adidas Women's Duramo SL 2.0 Running Shoe: Step Into Comfort`,
            images: '/blog-5.jpg',
            description: `For women with active lifestyles, finding the perfect running shoe is essential. The adidas Women's Duramo SL 2.0 Running Shoe combines performance, comfort, and style.
    
            Style and Fit
    
            The adidas Women's Duramo SL 2.0 Running Shoe boasts a sleek and modern design, blending fashion with functionality. Available in various eye-catching colorways, it complements any workout ensemble. The breathable mesh upper ensures maximum ventilation, keeping your feet cool and comfortable even during intense runs. The padded collar and secure lace closure provide a snug, supportive fit that conforms to the contours of your foot.
    
            Support and Cushioning
    
            One of the standout features of the Duramo SL 2.0 is its responsive cushioning and reliable support. The shoe features adidas' renowned Cloudfoam midsole, offering plush cushioning that absorbs impact and reduces fatigue, allowing you to go the extra mile with ease. Additionally, the durable Adiwear outsole with a multi-surface traction pattern provides superior grip and stability on various surfaces. Whether you're tackling trails or pavement, the Duramo SL 2.0 has the support you need to perform your best.
    
            Versatility and Performance
    
            The adidas Women's Duramo SL 2.0 Running Shoe is versatile enough to handle a range of activities, from leisurely runs to intense workouts. Its lightweight construction and flexible design make it ideal for a variety of exercises, including running, walking, and cross-training. Whether you're training for a marathon or simply staying active, the Duramo SL 2.0 delivers the performance and versatility you need to stay at the top of your game.
    
            Conclusion
    
            In summary, the adidas Women's Duramo SL 2.0 Running Shoe is a stylish, comfortable, and versatile choice for women who demand the best from their footwear. With its sleek design, responsive cushioning, and reliable support, it is the perfect running companion for athletes of all levels. Whether you're hitting the streets or the gym, the Duramo SL 2.0 has you covered every step of the way.`,
            link: ''
        };
    } else if(pathname === '/blog/glam-up-facial-sheet-mask-12-combo-review'){
        detail = {
            breadcumb: 'GLAM UP Premium Facial Sheet Mask 12-Combo: Unveil Radiant Skin',
            title: 'GLAM UP Premium Facial Sheet Mask 12-Combo: Unveil Radiant Skin',
            images: '/blog-6.jpg',
            description: `The GLAM UP Premium Facial Sheet Mask 12-Combo offers a complete skincare solution for achieving hydrated, nourished, and revitalized skin. With twelve unique masks.
    
            Variety and Versatility
    
            The GLAM UP Premium Facial Sheet Mask 12 Combo is a treasure trove of skincare treats, offering twelve distinct masks, each designed to address a specific skin concern. From calming and energizing to nourishing and moisturizing, there's a mask for every need and skin type. Whether you're dealing with dryness, irritation, or simply want to indulge in a relaxing beauty treatment, this variety pack has got you covered.
    
            Hydrating and Nourishing Formulas
    
            Each mask in the GLAM UP series is infused with a potent blend of skin-loving ingredients, aimed at delivering maximum hydration and nourishment. Ingredients like collagen, vitamin C, hyaluronic acid, and botanical extracts work together to enhance elasticity, replenish moisture, and promote a radiant, healthy-looking complexion. Regular use of these masks leaves your skin feeling soft, supple, and rejuvenated.
    
            Easy-to-Use Sheet Masks
    
            One of the best features of the GLAM UP Premium Facial Sheet Mask 12 Combo is the convenience and ease of use. Each mask comes pre-soaked in essence and is ready to apply straight out of the pack, with no messy application or rinsing required. Simply unfold the mask, place it on your face, and let it work its magic while you relax. The soft, delicate material conforms to the natural contours of your face, ensuring maximum absorption of the nourishing ingredients.
    
            Suitable for All Skin Types
    
            The GLAM UP Premium Facial Sheet Mask 12 Combo is suitable for all skin types, including combination, oily, dry, and sensitive skin. The gentle, non-irritating formulas are free from harsh chemicals and artificial fragrances, making them safe and effective for even the most sensitive skin. With twelve different masks to choose from, you can customize your skincare routine to target your specific concerns and achieve the results you desire.
    
            Conclusion
    
            In summary, the GLAM UP Premium Facial Sheet Mask 12 Combo is an essential addition to any skincare routine, offering unparalleled hydration, nourishment, and revitalization for all skin types. With its diverse selection of masks, luxurious formulas, and user-friendly design, you can enjoy a spa-like experience at home, leaving your skin feeling refreshed and rejuvenated. Whether you're looking to prep your complexion for a special event or simply unwind after a long day, these masks elevate your skincare regimen to new heights of indulgence and beauty.`,
            link: ''
        };
    }else {
        detail = {
            breadcumb: '',
            title: '',
            images: '',
            description: '',
            link:''
        };
    }

    return(
        <>
            <Breadcrumb className="flex items-center px-5 lg:px-0 max-w-7xl pt-5 mx-auto justify-center">
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Blog Detail</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage className="text-primarytext2">{detail.breadcumb}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col bg-slate-100 m-5 space-y-5 items-center lg:ml-10 lg:mr-10 lg:mb-10 lg:p-5 rounded-3xl px-5 py-5">
                <h1 className="text-2xl lg:text-4xl font-semibold">{detail.title}</h1>
                <Image src={detail.images} width={500} height={300} alt="Blog: Macbook Pro M3" className="w-full max-h-[300px] object-cover rounded-4xl"/>
                <p className="text-base">
                    {detail.description}
                </p>
            </div>
        </>
    )
}