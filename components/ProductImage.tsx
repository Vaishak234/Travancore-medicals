"use client";

import Image from "next/image";
import { useState } from "react";
import { FiPackage } from "react-icons/fi";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  showFallback?: boolean;
  fallbackText?: string;
}

export default function ProductImage({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  showFallback = true,
  fallbackText,
}: ProductImageProps) {
  const [error, setError] = useState(false);

  if (error && showFallback) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center ${className}`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 bg-primary-200 rounded-full mb-4 flex items-center justify-center">
            <FiPackage className="text-6xl text-primary-600" />
          </div>
          <p className="text-gray-500 font-medium">{fallbackText || alt}</p>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  );
}
