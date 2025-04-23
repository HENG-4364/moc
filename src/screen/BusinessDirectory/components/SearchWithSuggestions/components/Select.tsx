"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type OptionType = {
  value: string
  label: string
}

interface CustomeSelectProps {
  id?: string
  options: OptionType[]
  onChange: (selectedOption: OptionType | undefined) => void
  value?: OptionType
  placeholder?: string
  className?: string
}

export function CustomeSelect({
  id,
  options,
  onChange,
  value,
  placeholder = "Select....",
  className,
}: CustomeSelectProps) {
  const handleValueChange = (newValue: string) => {
    const selectedOption = options.find((option) => option.value === newValue)
    onChange(selectedOption)
  }

  return (
    <Select value={value?.value} onValueChange={handleValueChange}>
      <SelectTrigger id={id} className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem key={option?.value} value={option?.value}>
              {option?.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

