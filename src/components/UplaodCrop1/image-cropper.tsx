"use client";

import type React from "react";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { cn } from "@/lib/utils";

type ImageCropperProps = {
  image: string;
  onCropDone: (croppedImage: string, fileName: string) => void;
  onCropCancel: () => void;
};

const aspectRatios = [
  { label: "1:1", value: 1 / 1 },
  { label: "5:4", value: 5 / 4 },
  { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "5:3", value: 5 / 3 },
  { label: "16:9", value: 16 / 9 },
  { label: "3:1", value: 3 / 1 },
];

const ImageCropper: React.FC<ImageCropperProps> = ({
  image,
  onCropDone,
  onCropCancel,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [newFileName, setNewFileName] = useState<string>("");

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImage);
      const fileName = `cropped_image_${Date.now()}.jpg`;
      setNewFileName(fileName);
    } catch (e) {
      console.error(e);
    }
  }, [image, croppedAreaPixels]);

  const getCroppedImg = (imageSrc: string, pixelCrop: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }

        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );

        resolve(canvas.toDataURL("image/jpeg"));
      };
      image.onerror = reject;
    });
  };

  return (
    <div className="flex flex-col h-[80vh] bg-background">
      <div className="relative flex-1">
        {!croppedImage ? (
          <Cropper
            image={image}
            aspect={aspectRatio}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",
                backgroundColor: "gray",
              },
              cropAreaStyle: {
                border: "2px solid white",
                color: "rgba(0, 0, 0, 0.7)",
              },
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <img
              src={croppedImage || "/placeholder.svg"}
              alt="Cropped"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-100 space-y-4">
        {!croppedImage && (
          <div className="flex flex-wrap justify-center gap-3">
            {aspectRatios.map(({ label, value }) => (
              <button
                key={label}
                onClick={() => setAspectRatio(value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm",
                  aspectRatio === value
                    ? "bg-teal-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {croppedImage && (
          <div className="text-center">
            <p className="font-semibold">New Image Name:</p>
            <p>{newFileName}</p>
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onCropCancel}
            className="px-6 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          {!croppedImage ? (
            <button
              onClick={showCroppedImage}
              className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700"
            >
              Crop & Apply
            </button>
          ) : (
            <button
              onClick={() => onCropDone(croppedImage, newFileName)}
              className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
