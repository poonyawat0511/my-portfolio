"use client";
import React from "react";

export function AuroraWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      {children}
    </div>
  );
}
