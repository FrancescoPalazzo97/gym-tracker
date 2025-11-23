import type { StateCreator } from "zustand";
import type { TStore } from "@/types";

export type Theme = "dark" | "light" | "system";

export interface ThemeSlice {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    _initTheme: () => void;
}

const getSystemTheme = (): "dark" | "light" => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const applyTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
        const systemTheme = getSystemTheme();
        root.classList.add(systemTheme);
    } else {
        root.classList.add(theme);
    }
};

export const createThemeSlice: StateCreator<
    TStore,
    [["zustand/immer", never]],
    [],
    ThemeSlice
> = (set) => ({
    theme: "system",

    setTheme: (theme: Theme) => {
        applyTheme(theme);
        set((state) => {
            state.theme = theme;
        });
    },

    _initTheme: () => {
        set((state) => {
            applyTheme(state.theme);
        });
    },
});
