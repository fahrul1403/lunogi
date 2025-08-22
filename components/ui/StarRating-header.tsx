import React from 'react';
import { StarIcon, StarHalfIcon } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

const StarRatingHeader: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 justify-center h-full">
      {[1, 2, 3, 4, 5].map((star) => {
        const starClass = "w-8 h-full";
        if (rating >= 4.5) {
          return <StarIcon key={star} className={`${starClass} fill-yellow-500 text-yellow-500`} />;
        } else {
          const difference = rating - star + 1;
          if (difference >= 0.5) {
            return <StarIcon key={star} className={`${starClass} fill-yellow-500 text-yellow-500`} />;
          } else if (difference > 0 && difference < 0.5) {
            return <StarHalfIcon key={star} className={`${starClass} fill-yellow-500 text-yellow-500`} />;
          } else {
            return <StarIcon key={star} className={`${starClass} text-gray-300`} />;
          }
        }
      })}
    </div>
  );
};

export default StarRatingHeader;