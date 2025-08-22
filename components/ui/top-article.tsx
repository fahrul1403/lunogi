import { Clock5Icon, HourglassIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbArrowDownCircle, TbArrowLeft } from "react-icons/tb";

interface ArticleInfo {
    image: string;
    title: string;
    description: string;
    duration: string;
    created_date: string;
    link: string;
}

const TopArticle = ({ link, image, title, description, duration, created_date }: ArticleInfo) => {
    
  return (
    <Link href={link} className="font-medium text-base cursor-pointer block h-[500px]">
      <div className="flex flex-col lg:flex-row h-full bg-slate-100 rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col justify-between basis-2/5 p-5 overflow-hidden">
          <div className="flex flex-col space-y-4 overflow-hidden">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-neutral-600 line-clamp-none">
              {title}
            </h1>
            <p className="text-sm md:text-base lg:text-xl font-light line-clamp-none">
              {description}
            </p>
            <span className="font-medium text-base text-primarytext2">Read Now</span>
          </div>
          <div className="flex flex-row space-x-5 items-center mt-4">
            <div className="flex flex-row space-x-3 items-center">
              <Clock5Icon className="size-4 text-neutral-600"/>
              <p className="text-sm text-neutral-600 font-normal">{created_date} hour ago</p>
            </div>
            <div className="flex flex-row space-x-3 items-center">
              <HourglassIcon className="size-4 text-neutral-600"/>
              <p className="text-sm text-neutral-600 font-normal">{duration} for reading</p>
            </div>
          </div>
        </div>
        <div className="basis-3/5 relative">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Link>
  )
}

export default TopArticle;