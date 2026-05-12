"use client";

import { Button } from "@/components/ui/button";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client is hydrated
  if (!mounted) {
    return (
      <Button
        variant="secondary"
        className="h-11 px-4"
        disabled
        aria-label="Toggle color theme"
      >
        <MoonStar className="h-4 w-4" />
        <span className="hidden sm:inline">Dark</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="secondary"
      className="h-11 px-4"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}
