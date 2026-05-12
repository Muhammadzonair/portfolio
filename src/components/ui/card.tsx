import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
