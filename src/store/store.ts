import { create } from "zustand";
import { createRoutinesSlice } from "./routinesSlice";
import { createThemeSlice } from "./themeSlice";
import type { TStore } from "@/types";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const store = create<TStore>()(
    persist(
        immer((...args) => ({
            ...createRoutinesSlice(...args),
            ...createThemeSlice(...args),
        })),
        {
            name: "store",
            partialize: (s) => ({
                routines: s.routines,
                theme: s.theme,
            }),
        },
    ));