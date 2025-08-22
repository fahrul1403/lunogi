import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ScrollableValues: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 550; // Adjust this value as needed
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={() => scroll('left')} className="p-2 bg-gray-200 rounded-full mr-2">
        <ChevronLeft size={24} />
      </button>
      <div className="flex flex-col">
        <div className="p-5 text-center">this ui element is still in development</div>
        <div ref={scrollContainerRef} className="flex overflow-x-auto overscroll-contain w-[550px] p-5 border-x-2 border-t-2 border-black rounded-xl">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="border-black border-4 p-5 text-xl">VALUE {index + 1}</div>
          ))}
        </div>
      </div>
      <button onClick={() => scroll('right')} className="p-2 bg-gray-200 rounded-full ml-2">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ScrollableValues;