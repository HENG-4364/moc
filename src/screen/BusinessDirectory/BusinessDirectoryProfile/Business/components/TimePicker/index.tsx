"use client"

import * as React from "react"
import { Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface TimePickerProps {
  id: string
  label?: string
  className?: string
  value?: string
  onChange?: (value: string) => void
  error?: string
  disabled?: boolean
}

export function TimePicker({disabled, id, label, className, value = "08:00", onChange, error }: TimePickerProps) {
  const [open, setOpen] = React.useState(false)

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"))
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"))

  const [hour, minute] = React.useMemo(() => {
    const parts = value.split(":")
    return [parts[0] || "00", parts[1] || "00"]
  }, [value])

  const handleTimeChange = (newHour?: string, newMinute?: string) => {
    const updatedHour = newHour || hour
    const updatedMinute = newMinute || minute

    if (onChange) {
      onChange(`${updatedHour}:${updatedMinute}`)
    }
  }

  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative w-full">
            <input
              disabled={disabled}
              id={id}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
                error ? "border-destructive" : "",
                "cursor-pointer",
              )}
              value={value}
              readOnly
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:bg-transparent"
              onClick={() => setOpen(true)}
            >
              <Clock className="h-4 w-4" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[160px] p-0" align="start">
          <div className="grid grid-cols-2 gap-0">
            <div className="flex flex-col h-[200px] overflow-y-auto border-r">
              {hours.map((h) => (
                <Button
                  key={h}
                  variant={h === hour ? "default" : "ghost"}
                  className={cn(
                    "rounded-none h-8 justify-center hover:bg-[#297fb9ab] hover:text-white ",
                    h === hour ? "bg-primary text-primary-foreground" : "",
                  )}
                  onClick={() => handleTimeChange(h)}
                >
                  {h}
                </Button>
              ))}
            </div>
            <div className="flex flex-col h-[200px] overflow-y-auto">
              {minutes.map((m) => (
                <Button
                  key={m}
                  variant={m === minute ? "default" : "ghost"}
                  className={cn(
                    "rounded-none h-8 justify-center w-full hover:bg-[#297fb9ab] hover:text-white",
                    m === minute ? "bg-primary text-primary-foreground" : "",
                  )}
                  onClick={() => handleTimeChange(undefined, m)}
                >
                  {m}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  )
}

