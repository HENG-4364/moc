import type React from "react"
import { useState } from "react"
import { X, File, Image, FileText, Film, Music, Archive, Code } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Dialog, DialogContent } from "../ui/dialog"
import { Progress } from "../ui/progress"

interface FilePreviewProps {
  file: File
  defaultValue?: []
  progress: number
  status: "success" | "error" | null
  onRemove: () => void
}

const fileTypeIcons: { [key: string]: React.ReactNode } = {
  image: <Image className="text-primary" size={32} />,
  video: <Film className="text-secondary" size={32} />,
  audio: <Music className="text-success" size={32} />,
  application: <Archive className="text-warning" size={32} />,
  text: <FileText className="text-muted" size={32} />,
  code: <Code className="text-danger" size={32} />,
}

export function FilePreview({ file, progress, status, onRemove }: FilePreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const getFileTypeIcon = (file: File) => {
    const fileType = file.type.split("/")[0]
    return fileTypeIcons[fileType] || <File className="text-secondary" size={32} />
  }

  const handlePreview = () => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => setPreviewUrl(e.target?.result as string)
      reader.readAsDataURL(file)
      setShowModal(true)
    }
  }

  return (
    <Card className="p-3 shadow-sm relative">
      <Button
        variant="ghost"
        onClick={onRemove}
        className="absolute top-2 right-2 text-red-500 hover:bg-red-100 hover:text-red-500"
      >
        <X size={16} />
      </Button>
      <CardContent className="text-center">
        {file.type.startsWith("image/") ? (
          <>
            <div onClick={handlePreview} className="flex justify-center my-5 cursor-pointer ">
              <img
                src={previewUrl || URL.createObjectURL(file)}
                alt={file.name}
                className="rounded-md object-cover w-20 h-20"
              />
            </div>
            <Dialog open={showModal} onOpenChange={setShowModal} >
              <DialogContent className="flex justify-center rounded-md"  >
                {/* <Button
                  variant="ghost"
                  onClick={() => setShowModal(false)}
                  className="absolute top-5 right-5 bg-red-100 text-red-600 rounded-full p-1"
                >
                  <X size={18} />
                </Button> */}
                <img src={previewUrl || URL.createObjectURL(file)} alt={file.name} className="max-w-full max-h-screen" />
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <div className="mb-2">{getFileTypeIcon(file)}</div>
        )}
        <p className="text-sm truncate" title={file.name}>{file.name}</p>
        <p className="text-xs text-gray-500">({(file.size / 1024).toFixed(2)} KB)</p>
        {status === "success" && <span className="text-green-500">✓</span>}
        {status === "error" && <span className="text-red-500">✗</span>}
        {progress > 0 && progress < 100 && <Progress value={progress} className="mt-2" />}
      </CardContent>
    </Card >
  )
}
