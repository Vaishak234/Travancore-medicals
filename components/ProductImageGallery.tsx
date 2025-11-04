"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set());

  const handleError = (idx: number) => {
    setErrorImages((prev) => new Set(prev).add(idx));
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg border border-gray-200 cursor-pointer hover:border-primary-400 transition-colors overflow-hidden"
        >
          {!errorImages.has(idx) ? (
            <Image
              src={img}
              alt={`${productName} - Image ${idx + 1}`}
              fill
              className="object-cover"
              onError={() => handleError(idx)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                Img {idx + 1}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
