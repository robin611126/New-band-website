import { useState, useEffect } from "react";

export const useImagePreloader = (
  frameCount: number,
  pathPrefix: string,
  padLength: number = 3,
  extension: string = "jpg"
) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    const updateProgress = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / frameCount) * 100));
      if (loadedCount === frameCount) {
        setLoaded(true);
      }
    };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(padLength, "0");
      img.src = `${pathPrefix}${paddedIndex}.${extension}`;
      
      img.onload = updateProgress;
      // In case of error loading an image, we still count it so we don't block forever
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
        updateProgress();
      };
      
      imgArray.push(img);
    }
    setImages(imgArray);
  }, [frameCount, pathPrefix, padLength, extension]);

  return { images, loaded, progress };
};
