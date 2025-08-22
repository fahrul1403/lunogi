import Image from "next/image";

interface CategoryProps {
    image: string;
    title: string;
  }

  const CategoryItem: React.FC<CategoryProps> = ({ image, title }) => (
    <div className="flex flex-col space-y-3 items-center cursor-pointer hover:scale-110 transition duration-100">
      <div className="bg-white shadow-lg rounded-full p-5">
        <Image src={image} width={46} height={46} alt={title}/>
      </div>
      <p className="text-slate-700 text-sm">{title}</p>
    </div>
  );

  export default CategoryItem;