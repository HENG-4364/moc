"use client";

import * as React from "react";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

export function TimePicker() {
  const [time, setTime] = React.useState<Date>();
  const [isOpen, setIsOpen] = React.useState(false);
  const minuteRef = React.useRef<HTMLDivElement>(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string
  ) => {
    const newTime = new Date();
    if (!time) {
      newTime.setHours(0, 0, 0, 0);
    } else {
      newTime.setTime(time.getTime());
    }

    if (type === "hour") {
      newTime.setHours(
        (Number.parseInt(value) % 12) + (newTime.getHours() >= 12 ? 12 : 0)
      );
    } else if (type === "minute") {
      newTime.setMinutes(Number.parseInt(value));
    } else if (type === "ampm") {
      const currentHours = newTime.getHours();
      const isPM = value === "PM";
      if (isPM && currentHours < 12) {
        newTime.setHours(currentHours + 12);
      } else if (!isPM && currentHours >= 12) {
        newTime.setHours(currentHours - 12);
      }
    }

    setTime(newTime);

    // Scroll to selected minute
    if (type === "minute" && minuteRef.current) {
      const selectedButton = minuteRef.current.querySelector(
        `[data-minute="${value}"]`
      );
      if (selectedButton) {
        selectedButton.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-4">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[100%] justify-start text-left font-normal",
              !time && "text-muted-foreground"
            )}
          >
            <Clock className="mr-2 h-4 w-4" />
            {time ? formatTime(time) : <span>Pick a time</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex divide-x justify-center">
            <div className="w-[60px]">
              <div className="h-[300px] overflow-y-auto scrollbar-hide">
                <div className="flex flex-col justify-center items-center p-2 ">
                  {hours.map((hour) => (
                    <Button
                      key={hour}
                      variant={
                        time && time.getHours() % 12 === hour % 12
                          ? "default"
                          : "ghost"
                      }
                      className="w-full hover:bg-[#297fb9e0] hover:text-white"
                      onClick={() => handleTimeChange("hour", hour.toString())}
                    >
                      {hour}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[60px]" ref={minuteRef}>
              <div className="h-[300px] overflow-y-auto scrollbar-hide">
                <div className="flex flex-col justify-center items-center p-2 ">
                  {minutes.map((minute) => (
                    <Button
                      key={minute}
                      data-minute={minute}
                      variant={
                        time && time.getMinutes() === minute
                          ? "default"
                          : "ghost"
                      }
                      className="w-full hover:bg-[#297fb9e0] hover:text-white"
                      onClick={() =>
                        handleTimeChange(
                          "minute",
                          minute.toString().padStart(2, "0")
                        )
                      }
                    >
                      {minute.toString().padStart(2, "0")}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col gap-2">
                {["AM", "PM"].map((ampm) => (
                  <Button
                    key={ampm}
                    variant={
                      time &&
                      ((ampm === "AM" && time.getHours() < 12) ||
                        (ampm === "PM" && time.getHours() >= 12))
                        ? "default"
                        : "ghost"
                    }
                    className="w-[50px] hover:bg-[#297fb9e0] hover:text-white"
                    onClick={() => handleTimeChange("ampm", ampm)}
                  >
                    {ampm}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* {time && (
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Formatted Time:</span>
                <span>{formatTime(time)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">24-hour Format:</span>
                <span>{`${time.getHours().toString().padStart(2, "0")}:${time
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">ISO String:</span>
                <span>{time.toISOString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )} */}
    </div>
  );
}
