"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Get initial theme from localStorage or system preference
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
        applyTheme(initialTheme);
        setIsMounted(true);
    }, []);

    const applyTheme = (newTheme: "light" | "dark") => {
        const html = document.documentElement;
        if (newTheme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        // Return a default value for SSR compatibility
        return {
            theme: "light" as const,
            toggleTheme: () => { },
        };
    }
    return context;
}
