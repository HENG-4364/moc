"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { FilePreview } from "./FilePreview";
import UploadedFilePreview from "./UploadedFilePreview";
import { cn } from "@/lib/utils";
import { gql, useMutation } from "@apollo/client";

export const UPLOAD = gql`
 mutation MultipleUpload($files: [Upload]!) {
  multipleUpload(files: $files) {
    fileSize
    filename
    height
    mimetype
    url
    width
  }
}
`;
interface FileUploadProps {
  // eslint-disable-next-line no-unused-vars
  isDisabled?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  onFileUpload: (files?: File[] | undefined) => void;
  setUploadedFiles?: any;
  uploadedFiles?: any;
}

export function MultiUpload({
  isDisabled,
  onFileUpload,
  defaultValue,
  setUploadedFiles,
  uploadedFiles,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});
  const [uploadStatus, setUploadStatus] = useState<{
    [key: string]: "success" | "error" | null;
  }>({});
  const [showSummary, setShowSummary] = useState(false);
  const [multipleUpload] = useMutation(UPLOAD);
  // const [multipleUpload] = useMutation(UPLOAD);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const uploadFiles = async (Urlfiles: any) => {
    setUploading(true);
    if (Urlfiles) {
      try {
        const { data } = await multipleUpload({ variables: { files: Urlfiles } });
        const uploadedUrls = data?.multipleUpload.map((item: any) => item.url);
        onFileUpload(uploadedUrls);
      } catch (error) {
        console.error(error);
      }
    }
    setUploading(false);
    setShowSummary(true);
  };

  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
    setUploadStatus((prev) => {
      const newStatus = { ...prev };
      delete newStatus[fileName];
      return newStatus;
    });
  };

  return (
    <div>
      {!isDisabled && (
        <>
          <div
            {...getRootProps()}
            className={cn(
              "rounded p-4 text-center cursor-pointer border-2 border-dotted",
              isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-400"
            )}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto mb-2" size={40} />
            <p className="mb-0">
              {isDragActive
                ? "Drop the files here ..."
                : "Drag & drop files here, or click to select"}
            </p>
          </div>
        </>
      )}

      {(files.length > 0 || uploadedFiles?.length > 0) && (
        <>
          <h6 className="my-4">រូបភាព :</h6>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {uploadedFiles?.map((fileURL: any, idx: number) => (
              <UploadedFilePreview
                isDisabled={isDisabled}
                key={idx}
                fileURL={fileURL}
                setUploadedFiles={setUploadedFiles}
                uploadedFiles={uploadedFiles}
              />
            ))}

            {files.map((file) => (
              <FilePreview
                key={file.name}
                file={file}
                progress={uploadProgress[file.name] || 0}
                status={uploadStatus[file.name]}
                onRemove={() => removeFile(file.name)}
              />
            ))}
          </div>
          {!isDisabled && (
            <>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="destructive"
                  onClick={() => setFiles([])}
                  disabled={uploading}
                >
                  <X className="mr-2" size={16} /> លុបទាំងអស់
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => uploadFiles(files)}
                  disabled={uploading || files.length === 0}
                >
                  <Upload className="mr-2" size={16} />{" "}
                  {uploading ? "រក្សាទុក..." : "រក្សាទុក"}
                </Button>
              </div>
            </>
          )}

        </>
      )}
    </div>
  );
}
