    "use client";
    import Image from "next/image";
    import { TbPlus, TbMinus, TbChevronDown, TbChevronUp } from "react-icons/tb";
    import ToggleButton from "./ToggleButton";
    import ToggleSmallButton from "./ToggleSmallButton";
    import { ContentItem } from "@/app/types";
    import { useState } from "react";
    import { Button } from "@/components/ui/button";

    type Section = {
    header: string;
    loneheader?: boolean;
    imageSrc?: string;
    price?: string;
    productLink?: string;
    paragraph: string;
    content: ContentItem[];
    };

    function isComparisonTableItem(item: any): item is { category: string; values: string[] } {
    return item && typeof item.category === 'string' && Array.isArray(item.values);
    }

    const ContentSection = ({ skinCareContent }: { skinCareContent: Section[] }) => {
    return (
        <>
        {skinCareContent.map((section, index) => (
            <div key={index} className="flex flex-col space-y-10 pb-10 pt-20 px-0 md:px-[20px] lg:px-[40px] w-full">
            <div className="flex flex-col space-y-6">
                <h2 className={`${section.loneheader ? 'md:text-5xl text-4xl font-bold text-center' : 'text-4xl font-medium'} ${/^\d+\./.test(section.header) ? 'text-left' : 'text-center'} text-neutral-700`}>
                {section.header}
                </h2>
                {section.imageSrc && !section.price && !section.productLink && (
                <div className="w-full flex justify-center">
                    <Image
                    src={section.imageSrc}
                    alt={section.header}
                    width={500}
                    height={300}
                    className="rounded-xl"
                    />
                </div>
                )}
                <p 
                className="font-light text-lg text-neutral-700"
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
                />
            </div>
            {section.content.map((item, itemIndex) => (
                <ContentItemComponent 
                key={itemIndex} 
                item={item} 
                price={section.price}
                imageSrc={section.imageSrc}
                productLink={section.productLink}
                />
            ))}
            </div>
        ))}
        </>
    );
    };


    const ContentItemComponent = ({ 
    item, 
    price, 
    imageSrc, 
    productLink, 
    }: { 
    item: ContentItem; 
    price?: string; 
    imageSrc?: string; 
    productLink?: string; 
    }) => {
    const renderProductFeature = item.showProductFeature || item.sections.some(section => section.showProductFeature);

    const getTitleAlignment = (title: string) => {
        return /^\d+\./.test(title) ? 'text-left' : 'text-center';
    };

    return (
        <div className={`${item.imageAbove ? 'flex flex-col items-center' : ''}`}>
        {renderProductFeature && price && imageSrc && productLink && (
            <div className={`flex ${item.verticalLayout ? 'flex-col items-center' : item.imageAbove ? 'flex-col items-center' : 'flex-col md:flex-row'} p-3 rounded-2xl mb-4`}>
            {(item.verticalLayout || item.imageAbove) && (
                <div className="mb-4">
                <Image src={imageSrc} alt="Product" width={700} height={700} className="rounded-2xl" />
                </div>
            )}
            {!item.verticalLayout && !item.imageAbove && (
                <div className={`basis-full md:basis-2/5 space-y-4`}>
                <div className="flex items-center justify-center h-full">
                    <Image src={imageSrc} alt="Product" width={700} height={700} className="rounded-xl" />
                </div>
                </div>
            )}
                <div className={`${item.verticalLayout ? 'text-center w-full' : item.imageAbove ? 'text-center' : 'basis-full md:basis-3/5 mt-4 md:mt-0 md:ml-4'} flex flex-col justify-center`}>
                    {item.verticalLayout && (
                        <div className="mb-5 self-center">
                            <ToggleButton price={price} imageSrc={imageSrc} productLink={productLink} />
                        </div>
                    )}
                    <h3 className="text-2xl font-semibold my-5">{item.title}</h3>
                    {!item.verticalLayout && item.description && (
                        <p className="bg-blue-100 text-xl p-5 rounded-xl w-full mb-5" dangerouslySetInnerHTML={{ __html: item.description }} />
                    )}
                    {!item.verticalLayout && (
                        <div className={`${item.imageAbove ? '' : 'self-start'}`}>
                            <ToggleButton price={price} imageSrc={imageSrc} productLink={productLink} />
                        </div>
                    )}
                </div>
                {item.verticalLayout && item.description && (
                    <div className="w-full">
                        <p className="bg-blue-100 text-xl p-5 rounded-xl w-full" dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                )}
            </div>
        )}
        {!renderProductFeature && item.title && (
            <h3 className={`text-2xl font-semibold my-5 w-full${
            item.sections.some(section => section.type === 'table') ? 'text-center' : ''
            } ${/^\d+\./.test(item.title) ? 'text-left' : 'text-center'}`}>
            {item.title}
            </h3>
        )}
        <div className={`flex flex-col ${item.alignLeft ? 'items-start' : 'items-center'}`}>
            {item.h2image && item.h2middleimage && (
            <div className="w-full flex justify-center mb-4">
                <div className="w-full md:w-1/2 h-64 relative">
                <Image 
                    src={item.h2image} 
                    alt="Section image" 
                    fill
                    className="rounded-xl object-contain" 
                />
                </div>
            </div>
            )}
            
            {item.description && !renderProductFeature && (
            <div className={`flex flex-col md:flex-row bg-blue-100 text-xl p-5 rounded-xl mb-4 ${item.h2middleimage ? 'w-full' : ''} ${item.alignLeft ? 'text-left' : ''}`}>
                {item.h2image && !item.h2middleimage && (
                <div className={`w-full md:w-1/2 mb-4 md:mb-0 ${item.imagePosition === 'right' ? 'order-2' : ''}`}>
                    <div className="w-full h-full relative aspect-square">
                    <Image 
                        src={item.h2image} 
                        alt="Section image" 
                        fill
                        className="rounded-xl object-cover" 
                    />
                    </div>
                </div>
                )}
                
                <div className={`w-full flex items-center whitespace-normal ${item.h2image && !item.h2middleimage ? 'md:w-1/2 md:px-4' : ''} ${
                item.imagePosition === 'right' ? 'order-1 text-right' : ''
                } ${item.alignLeft ? 'text-left' : ''}`}>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>

            </div>
            )}

            {!item.description && item.h2image && !item.h2middleimage && (
            <div className="w-full flex justify-center mb-4">
                <div className="w-full md:w-1/2 h-64 relative">
                <Image 
                    src={item.h2image} 
                    alt="Section image" 
                    fill
                    className="rounded-xl object-contain" 
                />
                </div>
            </div>
            )}
        </div>
        {item.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="md:px-2">
            {section.type === 'table' ? (
                <div className="flex flex-col space-y-4">
                {section.title && (
                    <h4 className={`mb-2 text-xl font-medium ${getTitleAlignment(section.title)}`}>
                    {section.title}
                    </h4>
                )}
                {Array.from({ length: Math.ceil(section.items.length / 2) }).map((_, rowIndex) => (
                <div key={rowIndex} className={`grid gap-2 ${
                    section.items.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : section.items.length === 4
                    ? 'grid-cols-1 md:grid-cols-2'
                    : section.items.length - rowIndex * 3 >= 3
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : section.items.length - rowIndex * 3 === 1
                    ? 'grid-cols-1 mx-8 md:mx-16 lg:mx-32'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mx-auto md:max-w-2xl'
                }`}>
                    {(section.items as Array<{ Feature: string; Specification: string; h4image?: string; price?: string; purchaseLink?: string }>)
                    .slice(rowIndex * (section.items.length === 4 ? 2 : 3), rowIndex * (section.items.length === 4 ? 2 : 3) + (section.items.length === 4 ? 2 : 3))
                    .map((item, index) => (
                        <TableItem key={index} item={item} />
                    ))}
                </div>
                ))}
            </div>
            ) : section.type === 'list' ? (
                <div className="flex flex-col md:flex-row items-center gap-4 my-10 text-left">
                {section.h3image && !section.h3middleimage && (
                    <div className="md:flex-shrink-0 flex-col mb-4 md:mb-0 md:w-1/5">
                    {section.title && (
                        <h4 className={`mb-2 text-xl font-medium md:hidden block ${getTitleAlignment(section.title)}`}>{section.title}</h4>
                    )}
                    <Image 
                        src={section.h3image} 
                        alt="Section image" 
                        width={240} 
                        height={240} 
                        className="rounded-xl object-cover" 
                    />
                    </div>
                )}
                <div className={`flex-1 flex flex-col justify-center md:w-4/5 ${section.h3middleimage ? 'items-center' : ''}`}>
                    {section.title && (
                    <h4 className={`mb-2 text-xl font-medium ${section.h3middleimage ? getTitleAlignment(section.title) : 'block'}`}>
                        {section.title}
                    </h4>
                    )}
                    {section.h3middleimage && (
                    section.h3images && section.h3images.length > 1 ? (
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                        {section.h3images.map((image, index) => (
                            <Image 
                            key={index}
                            src={image} 
                            alt={`Section image ${index + 1}`} 
                            width={240} 
                            height={240} 
                            className="rounded-xl object-cover" 
                            />
                        ))}
                        </div>
                    ) : section.h3image ? (
                        <div className="mb-4">
                        <Image 
                            src={section.h3image} 
                            alt="Section image" 
                            width={240} 
                            height={240} 
                            className="rounded-xl mx-auto object-cover" 
                        />
                        </div>
                    ) : null
                    )}
                    {(section.items as Array<string>).length === 1 ? (
                    <p 
                        className={`my-5 ${section.h3middleimage ? 'text-center' : ''}`}
                        dangerouslySetInnerHTML={{ __html: (section.items as Array<string>)[0] }}
                    />
                    ) : (
                    <ul className={`list-disc pl-5 mb-3 ${section.h3middleimage ? 'text-center list-none pl-0' : ''}`}>
                        {(section.items as Array<string>).map((listItem, index) => (
                        <li className="my-3" key={index} dangerouslySetInnerHTML={{ __html: listItem }} />
                        ))}
                    </ul>
                    )}
                </div>
                </div>
            ) : section.type === 'flex' ? (
                <div className="flex flex-col md:flex-row gap-8">
                {(section.items as Array<{ title: string; list: string[] }>).map((item, index) => (
                    <div key={index} className="flex-1">
                    <h4 className="mb-3 text-xl font-medium">{item.title}</h4>
                    <ul className="list-none mb-5">
                        {item.list.map((listItem, itemIndex) => (
                        <li className="my-5 flex items-start" key={itemIndex}>
                            <span className="mr-2 mt-1">
                            {item.title === "Pros" || item.title === "Advantages" ? (
                                <TbPlus className="text-green-500" />
                            ) : item.title === "Cons" || item.title === "Disadvantages" ? (
                                <TbMinus className="text-red-500" />
                            ) : null}
                            </span>
                            <span>{listItem}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            ) : section.type === 'comparison-table' ? (
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                        Category
                        </th>
                        {section.headers?.map((header, index) => (
                        <th key={index} className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                            {header}
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {section.items.map((item, index) => (
                        <tr key={index}>
                        {isComparisonTableItem(item) ? (
                            <>
                            <td className="px-4 py-2 border-b border-gray-200">{item.category}</td>
                            {item.values.map((value, valueIndex) => (
                                <td key={valueIndex} className="px-4 py-2 border-b border-gray-200" dangerouslySetInnerHTML={{ __html: value }} />
                            ))}
                            </>
                        ) : (
                            <td colSpan={section.headers?.length ?? 1}>Invalid item type</td>
                        )}
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            ) : null}
            </div>
        ))}
        </div>
    );
    };

    const SpecificationText = ({ specification }: { specification: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 400; // Increased threshold

    if (specification.length <= maxLength) {
        return <div className="text-sm text-center">{specification}</div>;
    }

    return (
        <div className="text-sm text-center">
        <div 
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-[4.5em]'
            }`}
        >
            {specification}
        </div>
        <button
            className="mt-2 flex items-center justify-center w-full text-blue-500 hover:text-blue-700 font-semibold"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {isExpanded ? (
            <>
                Read Less <TbChevronUp className="ml-1" />
            </>
            ) : (
            <>
                Read More <TbChevronDown className="ml-1" />
            </>
            )}
        </button>
        </div>
    );
    };

    function isFeatureSpecificationItem(item: any): item is { Feature: string; Specification: string; h4image?: string } {
    return item && typeof item.Feature === 'string' && typeof item.Specification === 'string';
    }

    const TableItem = ({ item }: { item: { Feature: string; Specification: string; h4image?: string; price?: string; purchaseLink?: string } }) => (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
        {item.h4image && (
        <div className="text-base w-full aspect-square relative mb-5">
            <Image 
            src={item.h4image} 
            alt="Product" 
            fill
            className="rounded-xl border-2 border-white object-cover"
            />
        </div>
        )}
        <div
        className="font-semibold mb-2 mx-auto text-center" 
        dangerouslySetInnerHTML={{ __html: item.Feature }}
        />
        <SpecificationText specification={item.Specification} />
        {item.price && item.purchaseLink && (
        <div className="mt-4 flex flex-col items-center">
            <ToggleSmallButton price={item.price} productLink={item.purchaseLink} imageSrc={""} />
        </div>
        )}
    </div>
    );

    export default ContentSection;