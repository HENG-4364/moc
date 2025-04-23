"use client";

import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagsInputProps {
  me?: any;
  setResult: (tags: string[]) => void;
  result?: string[];
  className?: string;
}

export default function TagsInput({
  me,
  setResult,
  result,
  className,
}: TagsInputProps) {
  const [tags, setTags] = useState<string[]>(result || []);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        const newTags = [...tags, inputValue.trim()];
        setTags(newTags);
        setResult(newTags);
        setInputValue("");
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);

    if (result && result.length > 0) {
      setResult(newTags);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <Label>
        សេវាកម្ម ឬទំនិញ <span className="text-destructive">*</span>
      </Label>
      <div className="flex flex-wrap items-center gap-2 p-2 border rounded-md bg-background border-gray-200 ">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1 text-sm border rounded-full bg-muted"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="p-0.5 hover:bg-destructive hover:text-destructive-foreground rounded-full transition-colors"
              aria-label={`Remove ${tag}`}
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 !border-0 !ring-0 !ring-offset-0 focus-visible:!ring-0 min-w-[120px] !p-0 !h-auto"
          // placeholder="Type and press Enter to add tags"
        />
      </div>
    </div>
  );
}
