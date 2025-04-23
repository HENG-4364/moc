import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UploadSummaryProps {
  files: File[]
  status: { [key: string]: "success" | "error" | null }
  onClose: () => void
}

export function UploadSummary({ files, status, onClose }: UploadSummaryProps) {
  const successCount = Object.values(status).filter((s) => s === "success").length
  const errorCount = Object.values(status).filter((s) => s === "error").length

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Summary</DialogTitle>
          <DialogDescription>Review the results of your file upload.</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <p>Total files: {files.length}</p>
          <p className="text-green-600">Successfully uploaded: {successCount}</p>
          <p className="text-red-600">Failed to upload: {errorCount}</p>
          {errorCount > 0 && (
            <div className="mt-3">
              <h5 className="font-semibold">Failed uploads:</h5>
              <ul className="list-disc pl-5 text-red-500">
                {Object.entries(status).map(
                  ([fileName, fileStatus]) =>
                    fileStatus === "error" && <li key={fileName}>{fileName}</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
