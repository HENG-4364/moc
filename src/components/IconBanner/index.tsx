"use client";

import React from "react";
import {
  Truck,
  Plane,
  Users,
  Building2,
  CalendarDays,
  ShoppingCart,
  FileText,
  LockKeyhole,
} from "lucide-react";
import Image from "next/image";

const NetworkDiagram = () => {
  const iconComponents = [
    { Icon: FileText, angle: 0 },
    { Icon: Building2, angle: 45 },
    { Icon: Truck, angle: 90 },
    { Icon: Plane, angle: 135 },
    { Icon: LockKeyhole, angle: 180 },
    { Icon: Users, angle: 225 },
    { Icon: ShoppingCart, angle: 270 },
    { Icon: CalendarDays, angle: 315 },
  ];

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Central Pentagon with Map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-48 bg-white border-4 border-[#2980B9] rounded-[2rem] rotate-45 flex items-center justify-center">
          <div className="-rotate-45">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Cambodia Map"
              width={150}
              height={150}
              className="opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Circular Icons */}
      {iconComponents.map(({ Icon, angle }, index) => {
        const radius = 220;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              left: "50%",
              top: "50%",
            }}
          >
            <div className="w-16 h-16 bg-white border-4 border-[#2980B9] rounded-xl rotate-45 flex items-center justify-center">
              <Icon className="w-8 h-8 text-[#2980B9] -rotate-45" />
            </div>
          </div>
        );
      })}

      {/* Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
      >
        <g className="opacity-50">
          {iconComponents.map(({ angle }, index) => {
            const innerRadius = 80;
            const outerRadius = 220;
            const x1 = Math.cos((angle * Math.PI) / 180) * innerRadius;
            const y1 = Math.sin((angle * Math.PI) / 180) * innerRadius;
            const x2 = Math.cos((angle * Math.PI) / 180) * outerRadius;
            const y2 = Math.sin((angle * Math.PI) / 180) * outerRadius;

            return (
              <path
                key={index}
                d={`M ${x1 + 300} ${y1 + 300} L ${x2 + 300} ${y2 + 300}`}
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default NetworkDiagram;
