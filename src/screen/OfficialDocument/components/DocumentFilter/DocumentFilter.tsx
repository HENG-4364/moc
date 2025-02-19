'use client'

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List } from 'lucide-react'

export function DocumentFilters() {
  return (
    <div className="flex items-center gap-4">
      <Select defaultValue="newest">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="តម្រៀបតាម" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">ថ្មីបំផុត</SelectItem>
          <SelectItem value="oldest">ចាស់បំផុត</SelectItem>
          <SelectItem value="az">ក-អ</SelectItem>
          <SelectItem value="za">អ-ក</SelectItem>
        </SelectContent>
      </Select>
      
      <div className="border rounded-lg grid grid-cols-2">
        <Button variant="ghost" size="icon" className="rounded-r-none">
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-l-none">
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

