'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

type ImageContent = {
src: string;
alt: string;
width: number;
height: number;
customWidth?: string;
};

type ContentItem = {
type: 'paragraph' | 'list' | 'image' | 'table' | 'grid' | 'button' | 'product';
content: string | string[] | TableContent | GridContent | ButtonContent | ProductContent;
backgroundColor?: string;
textAlign?: 'left' | 'right' | 'center';
image?: {
    sources: ImageContent | ImageContent[];
    position: 'left' | 'right' | 'top' | 'bottom';
};
};

type TableContent = {
title?: string;
titleAlign?: 'left' | 'center' | 'right';
headers: string[];
rows: string[][];
columnAlignments?: ('left' | 'center' | 'right')[];
columnWidths?: string[];
showXBorders?: boolean;
showYBorders?: boolean;
};

type GridContent = {
title?: string;
titleAlign?: 'left' | 'center' | 'right';
items: {
    title: string;
    description: string;
    image?: ImageContent;
    textAlign?: 'left' | 'center' | 'right';
    buttonText?: string;
    buttonLink?: string;
}[];
columns: number;
};

type ButtonContent = {
text: string;
link: string;
};

type ProductContent = {
name: string;
description: string;
image: {
    src: string;
    alt: string;
    width: number;
    height: number;
};
buttonText: string;
buttonLink: string;
};

interface ArticleProps {
article: {
    title: string;
    description: string;
    titleImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    };
    content: any[];
    date: string;
    references: {
    title: string;
    author: string;
    year: string;
    }[];
};
}

const ArticleLayout: React.FC<ArticleProps> = ({ article }) => {
const renderImages = (images: ImageContent | ImageContent[], position: string) => {
    const imageArray = Array.isArray(images) ? images : [images];
    return (
    <div className={`${position === 'top' ? 'mb-4' : 'mt-4'} flex justify-center space-x-4`}>
        {imageArray.map((img, imgIndex) => (
        <div 
            key={`image-${imgIndex}`} 
            className={img.customWidth || 'w-full'}
        >
            <Image 
            src={img.src} 
            alt={img.alt} 
            width={img.width} 
            height={img.height} 
            className="w-full h-auto object-cover aspect-square"
            layout="responsive"
            />
        </div>
        ))}
    </div>
    );
};

const renderSection = (section: { 
    type: string; 
    content: string; 
    text: ContentItem[];
    subsections?: any[];
    align?: 'left' | 'center' | 'right';
}, level = 1) => {
    const HeaderTag = `h${level + 1}` as keyof JSX.IntrinsicElements;
    const textSize = level === 1 ? 'text-xl md:text-2xl' : level === 2 ? 'text-lg md:text-xl' : level === 3 ? 'text-base md:text-lg' : 'text-sm md:text-base';
    const headerSize = level === 1 ? 'text-3xl md:text-4xl' : level === 2 ? 'text-2xl md:text-3xl' : level === 3 ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
    const headerColor = level === 1 ? 'text-blue-800' : level === 2 ? 'text-blue-700' : level === 3 ? 'text-blue-600' : 'text-blue-500';
    const fontWeight = level === 1 ? 'font-bold' : level === 2 ? 'font-semibold' : level === 3 ? 'font-medium' : 'font-normal';
    const headerMargin = level === 1 ? 'my-8' : level === 2 ? 'my-6' : level === 3 ? 'my-4' : 'my-2';
    const contentMargin = level === 1 ? 'my-8' : level === 2 ? 'my-8' : level === 3 ? 'my-8' : 'my-2';
    const headerAlignmentClass = section.align === 'center' ? 'text-center' : section.align === 'right' ? 'text-right' : 'text-left';

    return (
    <div key={`section-${section.content}`}>
        <HeaderTag 
        className={`${headerSize} ${fontWeight} ${headerColor} ${headerMargin} ${headerAlignmentClass}`}
        dangerouslySetInnerHTML={{ __html: section.content }}
        />
        {section.text.map((item, index) => {
        const bgColor = item.backgroundColor || 'transparent';
        const textAlign = item.textAlign || 'left';
        switch (item.type) {


            case 'paragraph':
                return (
                    <div key={`paragraph-${index}`} className={`${textSize} leading-relaxed ${contentMargin}`} style={{ backgroundColor: bgColor, textAlign: textAlign }}>
                        {/* Image positioned at the top */}
                        {item.image && item.image.position === 'top' && renderImages(item.image.sources, 'top')}
                        
                        <div className={`flex ${
                            // Determine flex direction based on image position (left/right)
                            item.image && (item.image.position === 'left' || item.image.position === 'right') 
                                ? `flex-row ${item.image.position === 'right' ? 'flex-row-reverse' : ''}` 
                                : 'flex-col'
                        } items-center`}>
                            {/* Image positioned on the left or right */}
                            {item.image && (item.image.position === 'left' || item.image.position === 'right') && (
                                <div className={`w-1/3 ${item.image.position === 'left' ? 'mr-4' : 'ml-4'}`}>
                                    {renderImages(item.image.sources, item.image.position)}
                                </div>
                            )}
                            
                            {/* Paragraph text content */}
                            <div 
                                className={`${
                                    // Adjust text width based on image presence and position
                                    item.image && (item.image.position === 'left' || item.image.position === 'right') 
                                        ? 'w-2/3' 
                                        : 'w-full'
                                }`}
                                dangerouslySetInnerHTML={{ __html: item.content as string }} 
                            />
                        </div>
                        
                        {/* Image positioned at the bottom */}
                        {item.image && item.image.position === 'bottom' && renderImages(item.image.sources, 'bottom')}
                    </div>
                );

                

            case 'list':
                return (
                <ul key={`list-${index}`} className={`${textSize} list-disc pl-5 ${contentMargin}`} style={{ backgroundColor: bgColor }}>
                    {(item.content as string[]).map((listItem, listIndex) => (
                    <li key={`list-item-${index}-${listIndex}`} className="mb-2">{listItem}</li>
                    ))}+
                </ul>
                );

            case 'image':
                const imgContent = item.content as unknown as ImageContent;
                return (
                    <div key={`image-${index}`} className={contentMargin} style={{ backgroundColor: bgColor }}>
                    <Image 
                        src={imgContent.src} 
                        alt={imgContent.alt} 
                        width={imgContent.width} 
                        height={imgContent.height} 
                        className="mx-auto w-full h-auto"
                        layout="responsive"
                    />
                </div>
                );





                case 'table':
                    const tableContent = item.content as TableContent;
                    const showXBorders = tableContent.showXBorders !== false; // Default to true if not specified
                    const showYBorders = tableContent.showYBorders !== false; // Default to true if not specified
                
                    // Function to convert fraction to percentage
                    const fractionToPercentage = (fraction: string): string => {
                        const [numerator, denominator] = fraction.split('/').map(Number);
                        return `${(numerator / denominator * 100).toFixed(2)}%`;
                    };
                
                    return (
                        <div key={`table-${index}`} className={contentMargin} style={{ backgroundColor: bgColor }}>
                            {tableContent.title && (
                                <h3 className={`text-xl font-semibold mb-5 ${
                                    tableContent.titleAlign === 'center' ? 'text-center' :
                                    tableContent.titleAlign === 'right' ? 'text-right' : 'text-left'
                                }`}>
                                    {tableContent.title}
                                </h3>
                            )}
                            <table className={`w-full border-collapse ${showXBorders ? 'border-x border-gray-300' : ''} ${showYBorders ? 'border-y border-gray-300' : ''}`}>
                                <thead>
                                    <tr>
                                        {tableContent.headers.map((header, headerIndex) => (
                                            <th 
                                                key={`header-${index}-${headerIndex}`} 
                                                className={`p-2 bg-gray-100
                                                    ${showXBorders ? 'border-x border-gray-300' : ''}
                                                    ${showYBorders ? 'border-y border-gray-300' : ''}
                                                `}
                                                style={{ 
                                                    textAlign: tableContent.columnAlignments?.[headerIndex] || 'left',
                                                    width: tableContent.columnWidths?.[headerIndex] 
                                                        ? fractionToPercentage(tableContent.columnWidths[headerIndex])
                                                        : 'auto'
                                                }}
                                                dangerouslySetInnerHTML={{ __html: header }}
                                            />
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableContent.rows.map((row, rowIndex) => (
                                        <tr key={`row-${index}-${rowIndex}`}>
                                            {row.map((cell, cellIndex) => (
                                                <td 
                                                    key={`cell-${index}-${rowIndex}-${cellIndex}`} 
                                                    className={`p-2 md:text-xl text-sm
                                                        ${showXBorders ? 'border-x border-gray-300' : ''}
                                                        ${showYBorders ? 'border-y border-gray-300' : ''}
                                                    `}
                                                    style={{ 
                                                        textAlign: tableContent.columnAlignments?.[cellIndex] || 'left',
                                                        width: tableContent.columnWidths?.[cellIndex]
                                                            ? fractionToPercentage(tableContent.columnWidths[cellIndex])
                                                            : 'auto'
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: cell }}
                                                />
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );



                    case 'grid':
                        const gridContent = item.content as GridContent;
                        return (
                            <div key={`grid-${index}`} className={`${contentMargin}`} style={{ backgroundColor: bgColor }}>
                                {gridContent.title && (
                                    <h3 className={`text-xl font-semibold mb-5 ${
                                        gridContent.titleAlign === 'center' ? 'text-center' :
                                        gridContent.titleAlign === 'right' ? 'text-right' : 'text-left'
                                    }`}>
                                        {gridContent.title}
                                    </h3>
                                )}
                                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridContent.columns} gap-4`}>
                                    {gridContent.items.map((gridItem, gridIndex) => (
                                    <div key={`grid-item-${index}-${gridIndex}`} className="border p-4 rounded-lg">
                                        {gridItem.image && (
                                        <Image 
                                            src={gridItem.image.src} 
                                            alt={gridItem.image.alt} 
                                            width={gridItem.image.width} 
                                            height={gridItem.image.height} 
                                            className="w-full h-auto object-cover aspect-square rounded mb-6"
                                            layout="responsive"
                                        />
                                        )}
                                        <h4 
                                            className="font-semibold mb-2 text-base md:text-xl" 
                                            style={{ textAlign: gridItem.textAlign || 'left' }}
                                            dangerouslySetInnerHTML={{ __html: gridItem.title }} 
                                        />
                                        <div 
                                            className="text-base md:text-xl mb-4"
                                            style={{ textAlign: gridItem.textAlign || 'left' }}
                                            dangerouslySetInnerHTML={{ __html: gridItem.description }} 
                                        />
                                        {gridItem.buttonText && gridItem.buttonLink && (
                                            <div className="mt-4 w-full">
                                                <Link href={gridItem.buttonLink} passHref>
                                                    <Button variant="outline" className="bg-yellow-400 hover:bg-yellow-500 text-xl text-black font-bold p-8 rounded w-full">
                                                        {gridItem.buttonText}
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        );

                

            case 'button':
                const buttonContent = item.content as ButtonContent;
                return (
                    <div key={`button-${index}`} className={contentMargin} style={{ backgroundColor: bgColor }}>
                        <Link href={buttonContent.link} passHref>
                            <Button variant="outline" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                                {buttonContent.text}
                            </Button>
                        </Link>
                    </div>
                );


            case 'product':
                const productContent = item.content as ProductContent;
                return (
                    <div key={`product-${index}`} className={`my-8 p-6 border rounded-lg shadow-md ${contentMargin}`} style={{ backgroundColor: bgColor }}>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                                <Image 
                                    src={productContent.image.src}
                                    alt={productContent.image.alt}
                                    width={productContent.image.width}
                                    height={productContent.image.height}
                                    layout="responsive"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3 flex flex-col justify-center">
                                <h3 className={`${textSize} font-bold mb-2`}>{productContent.name}</h3>
                                <p className={`${textSize} mb-4`}>{productContent.description}</p>
                                <Link href={productContent.buttonLink} passHref>
                                    <Button variant="outline" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded text-xl">
                                        {productContent.buttonText}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
        })}
        {section.subsections && section.subsections.map(subsection => {
        if (subsection.type === 'header2') {
            return renderContent(subsection, level + 1);
        } else if (subsection.type === 'header3') {
            return renderContent(subsection, level + 2);
        } else {
            return renderSection(subsection, level + 1);
        }
        })}
    </div>
    );
};

const renderContent = (item: any, index: number) => {
    if (item.type === 'image') {
    return (
        <Image
        key={`main-image-${index}`}
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="mb-8 rounded-lg w-full h-auto"
        layout="responsive"
        />
    );
    } else if (item.type === 'header1') {
    return (
        <div key={`main-section-${index}`} className="bg-gray-50 rounded-lg p-2 md:p-4 my-5">
        {renderSection(item)}
        </div>
    );
    } else if (item.type === 'header2') {
    return (
        <div key={`sub-section-${index}`} className="bg-gray-100 rounded-lg p-2 md:p-4 my-5">
        {renderSection(item, 2)}
        </div>
    );
    } else if (item.type === 'header3') {
    return (
        <div key={`sub-sub-section-${index}`} className="bg-white rounded-lg p-2 md:p-4 my-5">
        {renderSection(item, 3)}
        </div>
    );
    }
    return null;
};

return (
    <>
    <style jsx global>{`
        .prose a {
        color: #3b82f6;
        text-decoration: underline;
        }
        .prose a:hover {
        color: #2563eb;
        }
    `}</style>
    <div className="container mx-auto px-4 py-8 bg-white mt-20 rounded-xl">
        <div className="mb-8 flex items-center">
        <Link href="/blog" passHref>
            <Button variant="ghost" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
            </Button>
        </Link>
        </div>
        <article className="md:mx-4 lg:mx-8 prose max-w-none">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-0 md:w-1/2 flex flex-col md:pr-10 md:text-right">
            <h1 className="hidden md:block">{article.title}</h1>
            <div className="text-sm text-gray-500 my-5 hidden md:block">{article.date}</div>
            <div className="text-lg text-gray-500 my-5 hidden md:block">{article.description}</div>
            </div>
            {article.titleImage && (
            <div className="md:w-1/2 w-full">
                <Image
                src={article.titleImage.src}
                alt={article.titleImage.alt}
                width={article.titleImage.width}
                height={article.titleImage.height}
                className="rounded-lg w-full h-auto object-cover aspect-square"
                layout="responsive"
                />
            </div>
            )}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-0 md:w-1/2 md:hidden">{article.title}</h1>
        <div className="text-sm text-gray-500 mb-8 md:hidden">{article.date}</div>
        <div className="text-lg text-gray-500 my-5 md:hidden">{article.description}</div>
        {article.content.map((item, index) => renderContent(item, index))}
        
        {/* References section */}
        <div className="mt-12 border-t pt-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">References</h2>
            <ul className="space-y-4">
            {article.references.map((ref, index) => (
                <li key={`reference-${index}`} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{ref.title}</p>
                <p className="text-sm text-gray-600">{ref.author}, {ref.year}</p>
                </li>
            ))}
            </ul>
        </div>
        </article>
    </div>
    </>
);
};

export default ArticleLayout;
