import React from 'react';
import { Button } from "@/components/ui/button";

interface Option {
    colorbutton?: string;
    textbutton?: string;
    subtitle: string;
    imageset: string[];
    link: string;
}

interface ProductOptionsProps {
    options: Option[];
    currentImageSetIndex: number;
    setImageSets: React.Dispatch<React.SetStateAction<boolean[]>>;
    setCurrentLink: React.Dispatch<React.SetStateAction<string>>;
    setCurrentSubtitle: React.Dispatch<React.SetStateAction<string>>;
    setCurrentImageSetIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
    options,
    currentImageSetIndex,
    setImageSets,
    setCurrentLink,
    setCurrentSubtitle,
    setCurrentImageSetIndex
}) => {
    const renderButton = (index: number, isTextButton: boolean) => {
        const option = options[index];
        const isActive = index === currentImageSetIndex;
        const setActive = () => {
            setImageSets(prev => {
                const newSets = prev.map((_, i) => i === index);
                return newSets;
            });
            setCurrentLink(option.link);
            setCurrentSubtitle(option.subtitle);
            setCurrentImageSetIndex(index);
        };
    
        return (
            isTextButton ? (
                option.textbutton && (
                    <Button 
                        onClick={setActive} 
                        className={`${isActive ? 'border-4 border-blue-500 bg-blue-500 text-white' : 'border-2 border-black bg-white text-black'} text-sm md:text-base lg:text-lg w-full h-10 px-2 m-1`}
                    >
                        {option.textbutton}
                    </Button>
                )
            ) : (
                option.colorbutton && (
                    <Button 
                        onClick={setActive} 
                        className={`${isActive ? 'border-4 border-blue-500' : 'border-2 border-black'} ${option.colorbutton} m-1`}
                    />
                )
            )
        );
    };

    return (
        <div className="w-full flex flex-col items-center justify-center border-y-4 border-blue-300 py-4 px-5">
            {options.some(option => option.colorbutton) && (
                <div className="flex flex-wrap justify-center">
                    {options.filter(option => option.colorbutton).map((option, index) => (
                        <div key={index} className="flex-shrink-0">
                            {renderButton(index, false)}
                        </div>
                    ))}
                </div>
            )}
            {options.some(option => option.textbutton) && (
                <div className="grid grid-cols-2 gap-2 w-full max-w-md mt-4">
                    {options.filter(option => option.textbutton).map((option, index) => (
                        <div key={index} className="w-full">
                            {renderButton(index, true)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductOptions;