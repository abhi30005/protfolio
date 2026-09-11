import React, { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const ImageCollage = React.forwardRef(
  (
    { images, className, containerClassName, imageClassName, ...props },
    ref
  ) => {
    const [isOrganized, setIsOrganized] = useState(false);

    const toggleLayout = () => {
      setIsOrganized((prev) => !prev);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-4 select-none w-full min-h-[300px] cursor-pointer",
          className
        )}
        onClick={toggleLayout}
        {...props}
      >
        <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mt-2 opacity-70">
          Click to organize
        </div>
        
        <motion.div className={cn("h-48 flex items-center justify-center relative", containerClassName)}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={cn(
                "w-32 sm:w-40 shrink-0 aspect-[4/5] rounded-xl overflow-hidden border-4 border-white/10 bg-brand-surface",
                !isOrganized && "shadow-2xl shadow-black/50",
                isOrganized ? "relative mx-[-10px]" : "absolute",
                imageClassName
              )}
              initial={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "spring", bounce: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: isOrganized ? 0 : img.x,
                y: isOrganized ? 0 : img.y,
                rotate: isOrganized ? (i % 2 === 0 ? 2 : -2) : img.rotate,
                zIndex: isOrganized ? i : img.zIndex || i,
              }}
            >
              <img
                src={img.src}
                alt={img.alt || `Collage image ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

ImageCollage.displayName = "ImageCollage";

export default ImageCollage;
