"use client";

import ImageCropper from "@/components/UploadCrop1/image-cropper";
import { useState } from "react";

export default function Page() {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleCropDone = (croppedImage: string, fileName: string) => {
    setCroppedImage(croppedImage);
    setFileName(fileName);
    setImage(null);
  };

  const handleCropCancel = () => {
    setImage(null);
  };

  return (
    <div className="container">
      <div className="p-4">
        {image ? (
          <ImageCropper
            image={image}
            onCropDone={handleCropDone}
            onCropCancel={handleCropCancel}
          />
        ) : croppedImage ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Cropped Image</h2>
            <img
              src={croppedImage || "/placeholder.svg"}
              alt="Cropped"
              className="max-w-full h-auto"
            />
            <p>File name: {fileName}</p>
            <button
              onClick={() => {
                setCroppedImage(null);
                setFileName(null);
              }}
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Crop Another Image
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Upload an Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-teal-50 file:text-teal-700
              hover:file:bg-teal-100"
            />
          </div>
        )}
      </div>
    </div>
  );
}
