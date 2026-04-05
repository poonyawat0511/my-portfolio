// src/components/cards/SkillCard.tsx
"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";

export type SkillItem = { label: string; icon: React.ReactNode };

export default function SkillCard({
  title,
  items,
  className = "",
}: {
  title: string;
  items: SkillItem[];
  className?: string;
}) {
  return (
    <div
      className={`
        group relative w-full rounded-2xl p-[1px] overflow-hidden ${className}
        bg-[conic-gradient(at_50%_50%,rgba(12,12,14,0.92),rgba(26,26,28,0.92),rgba(12,12,14,0.92))]
      `}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.02]" />

      <Card
        isBlurred
        shadow="sm"
        className="
          w-full h-full min-h-0 overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)]
          border border-white/[0.06]
          bg-black/40 backdrop-blur-xl
          shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_30px_-20px_rgba(0,0,0,0.6)]
        "
      >
        <CardBody className="p-6 h-fit min-h-0">
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

          {/* Icons-only grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
            {items.map((it) => (
              <div
                key={it.label}
                title={it.label}
                className="
                  aspect-square flex items-center justify-center rounded-lg
                  text-white/90 transition-transform duration-200
                  hover:scale-110
                "
                aria-label={it.label}
              >
                {it.icon}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
