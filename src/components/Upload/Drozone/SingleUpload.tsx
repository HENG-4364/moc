"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import styles from "./single-upload-file.module.scss";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@/components/ui/button";
interface FileUploadProps {
  // eslint-disable-next-line no-unused-vars
  disabled?: boolean;
  defaultValue?: string;
  onFileUpload: (file?: string | undefined) => void;
  acceptedFileTypes?: string[];
  maxFileSize?: number;
  buttonText?: string;
  dropzoneText?: string;
}

export const UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
      url
      fileSize
      mimetype
      width
      height
    }
  }
`;


const SingleUpload: React.FC<FileUploadProps> = ({
  disabled,
  defaultValue,
  onFileUpload,
  acceptedFileTypes = ["image/*"],
  maxFileSize,
  buttonText = "Select File",
  dropzoneText = "Drag & drop your file here, or click to select",
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultValue ? defaultValue : null);
  const [uploadMutation, { loading }] = useMutation(UPLOAD);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);

      if (uploadedFile.type.startsWith("image/")) {
        const url = URL.createObjectURL(uploadedFile);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
      try {
        const { data } = await uploadMutation({ variables: { file: uploadedFile } });
        const uploadedUrl = data.singleUpload.url;

        onFileUpload(uploadedUrl);
      } catch (error) {
        console.error(error);
      }

      // Create preview URL for images
      if (uploadedFile.type.startsWith("image/")) {
        const url = URL.createObjectURL(uploadedFile);
        setPreviewUrl(url);

      } else {
        setPreviewUrl(null);
      }

      // Simulating upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 101) {
          clearInterval(interval);
        }
      }, 200);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.reduce(
      (acc, curr) => ({ ...acc, [curr]: [] }),
      {}
    ),
    maxSize: maxFileSize,
    // multiple: false,
  });

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    setUploadProgress(0);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };


  return (
    <div className={styles.fileUploadContainer}>
      <div
        {...getRootProps()}
        className={`${styles.dropzone} ${isDragActive ? styles.active : ""} ${file ? styles.hasFile : ""
          }`}
      >
        <input {...getInputProps()} disabled={disabled} />
        {(!file && defaultValue) && (
          <>
            {(!previewUrl) && (
              <>
                <Upload size={48} className="w-full flex justify-center" />
                <p style={{ fontSize: "15px" }}>{dropzoneText}</p>
                {/* <Button className={styles.selectButton}>{buttonText}</Button> */}
              </>
            )}
          </>
        )}
        {(!file && !defaultValue) && (
          <>
            <Upload size={12} className="w-full flex justify-center" />
            <p style={{ fontSize: "15px" }}>{dropzoneText}</p>
            {/* <Button className={styles.selectButton}>{buttonText}</Button> */}
          </>
        )}

        <div style={{ position: "relative" }}>
          {file && (
            <div className="">
              {/* <p>{file.name}</p> */}
              <Button
                onClick={removeFile}
                className="absolute flex items-center justify-center rounded-full "
                style={{ width: "30px", height: "30px", background: "#fad7d7", border: "none", top: '5px', right: "5px" }}
              >
                <X size={18} className="text-red-500" />
              </Button>
            </div>
          )}
          {previewUrl && (
            <div className={styles.imagePreview}>
              <Image
                src={previewUrl}
                alt="File preview"
                width={1000}
                height={1000}
                objectFit="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleUpload;
