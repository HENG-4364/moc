import { X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const UploadedFilePreview = ({ fileURL, uploadedFiles, setUploadedFiles }: { fileURL: string, uploadedFiles: any, setUploadedFiles: any }) => {
  const onHandleRemove = (file: string) => {
    const files = uploadedFiles.filter((uploadedFile: string) => uploadedFile !== file);
    setUploadedFiles(files)
  }

  return (
    <Card className="relative p-4 shadow-md border rounded-lg">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onHandleRemove(fileURL)}
        className="absolute top-2 right-2 text-red-500 hover:bg-red-100"
      >
        <X size={16} />
      </Button>
      <CardContent className="flex flex-col items-center text-center space-y-2">
        <Button variant="ghost" className="p-0 border-0">
          <img
            src={fileURL}
            alt="Uploaded file"
            className="w-20 h-20 object-cover rounded-md border"
          />
        </Button>
        <p className="text-sm text-gray-600 truncate max-w-[150px]" title={fileURL}>
          {fileURL}
        </p>
        <p className="text-xs text-gray-400">Uploaded</p>
      </CardContent>
    </Card>
  )
}

export default UploadedFilePreview