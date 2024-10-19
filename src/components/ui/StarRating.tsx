import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  small?: boolean;
  rating: number;
  maxStars?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  small = false,
  rating,
  maxStars = 5,
}) => {
  const starSize = small ? "w-3 h-3" : "w-5 h-5";

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: maxStars }).map((_, index) => {
        const fillPercentage = Math.min(
          Math.max((rating - index) * 100, 0),
          100
        );

        return (
          <div key={index} className={`relative ${starSize}`}>
            <Star className={`absolute text-gray-400 ${starSize}`} />

            <div
              className="absolute overflow-hidden"
              style={{
                width: `${fillPercentage}%`,
              }}
            >
              <Star className={`text-yellow-500 fill-current ${starSize}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
