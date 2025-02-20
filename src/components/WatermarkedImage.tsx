"use client";

import React, { useRef, useEffect } from "react";

interface WatermarkedImageProps {
  src: string;
  alt: string;
  watermarkText?: string;
  className?: string;
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  watermarkText = "©SafeGrow",
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image
      ctx.drawImage(img, 0, 0);

      // Configure watermark
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = `${img.width * 0.03}px Arial`;
      ctx.textBaseline = "middle";

      // Create diagonal watermarks
      const text = watermarkText;
      const textWidth = ctx.measureText(text).width;
      const spacing = textWidth * 2;

      // Add diagonal watermarks across the image
      for (let y = -img.height; y < img.height * 2; y += spacing) {
        for (let x = -img.width; x < img.width * 2; x += spacing) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-Math.PI / 4);
          ctx.fillText(text, 0, 0);
          ctx.restore();
        }
      }
    };
  }, [src, watermarkText]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      aria-label={alt}
    />
  );
}

export default WatermarkedImage;