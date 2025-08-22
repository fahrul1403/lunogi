import { useState } from 'react';
import Link from 'next/link';

const ToggleSmallButton = ({ price, imageSrc, productLink }: { price: string; imageSrc: string; productLink: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const priceLength = price.length;
  const onText = "Go to Product";
  const offText = "Purchase Now?";
  const longestTextLength = Math.max(onText.length, offText.length);
  
  const circleWidth = Math.max(20, 
    priceLength < 3 
      ? priceLength * 20 
      : priceLength <= 4
        ? priceLength * 14
        : priceLength * 12
  );
  const textWidth = longestTextLength * 2
  const buttonWidth = Math.max(80, circleWidth + textWidth + 180);

  const getPadding = (priceLength: number) => {
    if (priceLength >= 7) return 100;
    if (priceLength > 4) return 60;
    if (priceLength > 2) return 40;
    return 40; // Default padding for shorter prices
  };

  const padding = getPadding(priceLength);

  return (
    <div className="relative flex flex-col items-center">
      <Link href={productLink} passHref>
        <button
          className={`relative h-14 rounded-full p-2 transition-colors duration-300 ease-in-out focus:outline-none ${
            isHovered ?  'bg-purple-800' : 'bg-red-500'
          }`}
          style={{ width: `${buttonWidth}px` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={`absolute top-2 left-2 h-10 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center text-lg font-bold text-gray-700`}
            style={{ 
              width: `${circleWidth}px`,
              transform: isHovered ? `translateX(${buttonWidth - circleWidth - 16}px)` : 'translateX(0)'
            }}
          >
            {price}
          </span>
          <span 
            className={`absolute inset-0 flex items-center justify-center text-base font-medium text-white transition-all duration-300 ease-in-out`}
            style={{
              textAlign: isHovered ? 'left' : 'right',
              paddingRight: isHovered ? `${padding}px` : '0',
              paddingLeft: isHovered ? '0' : `${padding}px`,
            }}
          >
            {isHovered ? onText : offText}
          </span>
        </button>
      </Link>
    </div>
  );
};


export default ToggleSmallButton;