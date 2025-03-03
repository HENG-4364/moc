"use client"

import React, { useRef, useState } from 'react'
import ImageCropper from './image-cropper';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
const CropImageUpload = ({ defaultValue, image, handleCropCancel, handleCropDone, fileName, croppedImage, setCroppedImage, is_updated, setImage, setFile, isWidth, isHeight, isLogo, isBanner }: any) => {
  const [defaultImage, setDefaultImage] = useState(defaultValue || false)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFile(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {image && (
        <ImageCropper
          isLogo={isLogo}
          isBanner={isBanner}
          fileName={fileName}
          image={image}
          onCropDone={handleCropDone}
          onCropCancel={handleCropCancel}
        />
      )}

      {!image && croppedImage && (
        <div className="relative" style={{ width: isWidth, height: isHeight }}>
          <img
            src={croppedImage || "/placeholder.svg"}
            alt="Cropped"
            className="w-full h-full object-contain"
          />
          {!is_updated && (
            <Button
              onClick={() => {
                setCroppedImage(null);
                setDefaultImage(false);
              }}
              className="absolute top-1 right-1 flex items-center justify-center rounded-full bg-red-100 w-8 h-8 border-none"
            >
              <X size={18} className="text-red-500" />
            </Button>
          )}
        </div>
      )}

      {!image && !croppedImage && !defaultImage && (
        <div className="p-0">
          <input
            hidden
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="my-4 p-0" onClick={() => inputRef.current?.click()}>
            <div
              style={{ width: isWidth, height: isHeight }}
              className="relative flex flex-col items-center justify-center p-4 rounded border-2 border-dotted border-gray-400 cursor-pointer"
            >
              <p className="mb-2  text-center font-bold">Click to upload</p>
              <p className=" text-center text-sm">PNG, JPG, ...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CropImageUpload