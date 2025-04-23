import { X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UploadedFilePreview = ({ fileURL, uploadedFiles, setUploadedFiles, isDisabled }: { isDisabled: any, fileURL: string, uploadedFiles: any, setUploadedFiles: any }) => {
  const onHandleRemove = (file: string) => {
    const files = uploadedFiles.filter((uploadedFile: string) => uploadedFile !== file);
    setUploadedFiles(files)
  }

  return (
    <Card className="p-3 shadow-sm relative">
      {!isDisabled && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onHandleRemove(fileURL)}
          className="absolute top-2 right-2 text-red-500 hover:bg-red-100 hover:text-red-500"
        >
          <X size={16} />
        </Button>
      )}

      <CardContent className="text-center">
        <div className="flex justify-center my-5 cursor-pointer ">
          <img
            src={fileURL}
            alt="Uploaded file"
            className="w-20 h-20 object-cover rounded-md border"
          />

        </div >
        <p className="text-sm text-gray-600 truncate" title={fileURL}>
          {fileURL}
        </p>
        <p className="text-xs text-gray-400">Uploaded</p>

      </CardContent>
    </Card>
  )
}

export default UploadedFilePreview