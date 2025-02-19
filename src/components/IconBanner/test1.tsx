"use client";

import React from "react";
import {
  Monitor,
  Trophy,
  LineChart,
  Megaphone,
  PresentationIcon as PresentationChart,
  Shield,
} from "lucide-react";
import Link from "next/link";

const BusinessDiagram = () => {
  const iconComponents = [
    { Icon: Monitor, color: "#0072CE", isBlue: true, angle: -90 }, // Start from top
    { Icon: Trophy, color: "#ffffff", isBlue: false, angle: -30 },
    { Icon: LineChart, color: "#ffffff", isBlue: false, angle: 30 },
    { Icon: Megaphone, color: "#ffffff", isBlue: false, angle: 90 },
    { Icon: PresentationChart, color: "#ffffff", isBlue: false, angle: 150 },
    { Icon: Shield, color: "#ffffff", isBlue: false, angle: 210 },
  ];

  return (
    <div
      className="relative w-full mx-auto h-[600px] "
      style={{ zIndex: "999" }}
    >
      {/* Center Content */}
      <Link href={"/news"}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-48">
          <p className="text-sm text-gray-600 mb-2">INCREASE</p>
        </div>
      </Link>
      {/* Connection Circle */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
      >
        <circle
          cx="300"
          cy="300"
          r="180"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Circular Icons */}
      {iconComponents.map(({ Icon, color, isBlue, angle }, index) => {
        const radius = 180; // Same as circle radius
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className="absolute cursor-pointer"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              left: "50%",
              top: "50%",
            }}
          >
            <Link href={"/news"}>
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-xl rotate-45 transition-transform hover:scale-110  ${
                  isBlue
                    ? "bg-[#0072CE]"
                    : "bg-white border-2 border-[#0072CE] shadow-lg"
                }`}
              >
                <Icon
                  className={`w-10 h-10 -rotate-45 ${
                    isBlue ? "text-white" : "text-[#0072CE]"
                  }`}
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessDiagram;
