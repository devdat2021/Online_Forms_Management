"use client";

import { useTheme } from "@/app/providers/ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Show placeholder while mounting to prevent hydration mismatch
    if (!isMounted) {
        return (
            <button
                disabled
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border text-on-surface-variant border-transparent opacity-50"
            >
                <span className="material-symbols-outlined">dark_mode</span>
                <span>Dark Mode</span>
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border text-on-surface-variant border-transparent hover:text-primary hover:translate-x-1"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <span className="material-symbols-outlined">
                {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
    );
}
