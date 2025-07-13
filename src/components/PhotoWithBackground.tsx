import React from "react";

interface PhotoWithBackgroundProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const PhotoWithBackground: React.FC<PhotoWithBackgroundProps> = ({
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <div
      className={`w-full aspect-square flex justify-center items-center relative ${className}`}
    >
      <div
        className="absolute w-[80%] h-[90%] bg-pink-400/80 z-0 shadow-xl"
        style={{
          borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
          transform: "rotate(-4deg) skewY(4deg)",
        }}
        aria-hidden="true"
      ></div>
      {/* Abstract background shape */}
      <div
        className="absolute w-[75%] h-[80%] bg-pink-200/80 z-0 shadow-xl"
        style={{
          borderRadius: "60% 40% 60% 45% / 45% 60% 40% 55%",
          transform: "rotate(-8deg) skewY(-3deg)",
        }}
        aria-hidden="true"
      ></div>

      {/* Profile image (on top, bigger, thin border) */}
      <div
        className="relative w-[65%] h-[70%] rounded-full overflow-hidden shadow-2xl border-2 border-white z-10 flex items-center justify-center"
        style={{
          borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
          transform: "rotate(4deg) skewY(2deg)",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default PhotoWithBackground;
