"use client";

import type React from "react";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { gql, useMutation } from "@apollo/client";
type ImageCropperProps = {
  image: string;
  onCropDone: (croppedImage: string, fileName: string) => void;
  onCropCancel: () => void;
  fileName: string,
  isLogo: boolean,
  isBanner: boolean
};

const aspectRatiosLogo = [
  { label: "1:1", value: 1 / 1 },

];
const aspectRatiosBanner = [
  // { label: "1:1", value: 1 / 1 },
  // { label: "5:4", value: 5 / 4 },
  // { label: "4:3", value: 4 / 3 },
  // { label: "3:2", value: 3 / 2 },
  // { label: "5:3", value: 5 / 3 },
  { label: "16:9", value: 16 / 9 },
  { label: "3:1", value: 3 / 1 },
];
// export const UPLOAD = gql`
//   mutation singleUpload($file: Upload!) {
//     singleUpload(file: $file) {
//       filename
//       url
//       fileSize
//       mimetype
//       width
//       height
//     }
//   }
// `;

const ImageCropper: React.FC<ImageCropperProps> = ({
  image,
  fileName,
  isBanner,
  isLogo,
  onCropDone,
  onCropCancel,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);
  const [croppedImage, setCroppedImage] = useState("");
  const [newFileName, setNewFileName] = useState<string>("");
  const [showCropModal, setShowCropModal] = useState(true);
  // const [uploadMutation, { loading }] = useMutation(UPLOAD);
  const [finalURL, setFinalURL] = useState("")
  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );
  const urlToFile = (
    url: string,
    fileName: string,
    relativePath: string
  ): File & { path?: string; relativePath?: string } => {
    if (!url.startsWith("data:")) {
      throw new Error("Invalid data URL format");
    }

    const [meta, base64Data] = url.split(",");
    const mimeMatch = meta.match(/:(.*?);/);

    if (!mimeMatch) {
      throw new Error("Invalid data URL format");
    }

    const mime = mimeMatch[1];
    const binaryString = atob(base64Data); // Decode base64
    const uint8Array = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }

    const file = new File([uint8Array], fileName, { type: mime });

    return Object.assign(file, {
      path: `./${fileName}`,
      relativePath: `./${relativePath}`,
    });
  };


  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      if (croppedImage) {
        const uploadedFile = urlToFile(croppedImage, fileName, fileName)
        try {
          // const { data } = await uploadMutation({ variables: { file: uploadedFile } });
          // setFinalURL(data.singleUpload.url);

        } catch (error) {
          console.error(error);
        }

      }
      setCroppedImage(croppedImage);
      setNewFileName(fileName);
    } catch (e) {
      console.error(e);
    }
  }, [image, croppedAreaPixels]);

  const getCroppedImg = (imageSrc: string, pixelCrop: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.crossOrigin = "anonymous"
      image.src = imageSrc
      image.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          reject(new Error("Failed to get canvas context"))
          return
        }

        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height

        // Clear the canvas to ensure transparency
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        try {
          ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height,
          )

          // Use PNG instead of JPEG to preserve transparency
          const dataUrl = canvas.toDataURL("image/png")
          if (dataUrl === "data") {
            throw new Error("Canvas is empty")
          }
          resolve(dataUrl)
        } catch (error) {
          reject(new Error(`Failed to crop image`))
        }
      }
      image.onerror = (error) => {
        reject(new Error(`Failed to load image: ${error}`))
      }
    })
  }




  return (
    <div className="flex flex-col h-[80vh] bg-background">
      <div className="relative flex-1">
        <Dialog open={showCropModal}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Upload Image</DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-[500px]">
              {!croppedImage ? (
                <Cropper
                  image={image}
                  aspect={isLogo ? 1 / 1 : isBanner ? 3 / 1 : 4 / 3}
                  crop={crop}
                  zoom={zoom}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  objectFit="contain"
                  classes={{
                    containerClassName: "bg-transparent",
                    mediaClassName: "bg-transparent",
                  }}
                  style={{
                    cropAreaStyle: {
                      border: "2px solid white",
                    },
                  }}
                />
              ) : (
                <div className="text-center">
                  <img
                    src={croppedImage || "/placeholder.svg"}
                    alt="Cropped"
                    className="w-full object-contain"
                  />
                  <p className="mt-3 font-bold">Image Name: {fileName}</p>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="secondary" onClick={onCropCancel}>
                Cancel
              </Button>
              {croppedImage ? (
                <Button onClick={() => onCropDone(finalURL, fileName)}>
                  Save
                </Button>
              ) : (
                <Button onClick={showCroppedImage}>Apply</Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ImageCropper;
