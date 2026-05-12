import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary:
    "border-cyan-300/40 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(108,99,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]",
  secondary:
    "border-white/10 bg-white/5 text-slate-100 hover:border-cyan-300/40 hover:bg-white/10",
  ghost: "border-transparent bg-transparent text-slate-200 hover:bg-white/5",
} as const;

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
