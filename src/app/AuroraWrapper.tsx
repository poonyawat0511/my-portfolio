"use client";
import React from "react";

export function AuroraWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden">
      {children}
    </div>
  );
}
