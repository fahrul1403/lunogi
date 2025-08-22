import { useState } from 'react';
import Link from 'next/link';

const ToggleButton = ({ price, imageSrc, productLink }: { price: string; imageSrc: string; productLink: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const priceLength = price.length;
  const onText = "Go to Product";
  const offText = "Purchase Now?";
  const longestTextLength = Math.max(onText.length, offText.length);
  
  const circleWidth = Math.max(40, priceLength * 16);
  const textWidth = longestTextLength * 10
  const buttonWidth = Math.max(80, circleWidth + textWidth + 180);

  return (
    <div className="relative flex flex-col items-center">
      <Link href={productLink} passHref>
        <button
          className={`relative h-16 rounded-full p-2 transition-colors duration-300 ease-in-out focus:outline-none ${
            isHovered ?  'bg-purple-800' : 'bg-blue-500'
          }`}
          style={{ width: `${buttonWidth}px` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={`absolute top-2 left-2 h-12 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center text-2xl font-bold text-gray-700`}
            style={{ 
              width: `${circleWidth}px`,
              transform: isHovered ? `translateX(${buttonWidth - circleWidth - 16}px)` : 'translateX(0)'
            }}
          >
            {price}
          </span>
          <span className={`absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition-all duration-300 ease-in-out ${
            isHovered ? 'text-left pr-48' : 'text-right pl-48'
          }`}>
            {isHovered ? onText : offText}
          </span>
        </button>
      </Link>
    </div>
  );
};


export default ToggleButton;