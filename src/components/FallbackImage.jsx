import React, { useState } from "react";

const FallbackImage = ({ src, alt, className, style, size = 100 }) => {
  const [error, setError] = useState(false);
  return error ? (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      Image not found
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={size}
      height={size}
      onError={() => setError(true)}
    />
  );
};

export default FallbackImage;
