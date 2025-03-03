import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface UploadStatusProps {
  files: File[]
  status: { [key: string]: "success" | "error" | null }
}

export function UploadStatus({ files, status }: UploadStatusProps) {
  const successCount = Object.values(status).filter((s) => s === "success").length
  const errorCount = Object.values(status).filter((s) => s === "error").length
  const totalCount = files.length
  const progress = totalCount > 0 ? ((successCount + errorCount) / totalCount) * 100 : 0

  if (files.length === 0) return null

  return (
    <Card className="mt-3 p-4 bg-gray-100 dark:bg-gray-800">
      <CardContent>
        <h3 className="text-lg font-semibold">Upload Status</h3>
        <Progress value={progress} className="mb-2" />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
          <span>Total files: {totalCount}</span>
          <span className="text-green-600">Uploaded: {successCount}</span>
          <span className="text-red-600">Failed: {errorCount}</span>
        </div>
      </CardContent>
    </Card>
  )
}
