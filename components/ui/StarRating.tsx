import React from 'react';
import { StarIcon, StarHalfIcon } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="p-5 mx-10">
      <div className="flex items-center gap-1 justify-center">
        {[1, 2, 3, 4, 5].map((star) => {
          if (rating >= 4.5) {
            return <StarIcon key={star} className="w-10 h-10 fill-yellow-500 text-yellow-500" />;
          } else {
            const difference = rating - star + 1;
            if (difference >= 0.5) {
              return <StarIcon key={star} className="w-10 h-10 fill-yellow-500 text-yellow-500" />;
            } else if (difference > 0 && difference < 0.5) {
              return <StarHalfIcon key={star} className="w-10 h-10 fill-yellow-500 text-yellow-500" />;
            } else {
              return <StarIcon key={star} className="w-10 h-10 text-gray-300" />;
            }
          }
        })}
      </div>
    </div>
  );
};

export default StarRating;