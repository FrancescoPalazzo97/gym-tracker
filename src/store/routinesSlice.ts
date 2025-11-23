import type { StateCreator } from "zustand";
import type { Routine, TStore } from "@/types";

type TRoutinesState = {
    routines: Routine[],
}

type TRoutinesActions = {
    addRoutine: (routine: Routine) => void,
    removeRoutine: (id: string) => void,
    updateRoutine: (id: string, routine: Routine) => void,
}

export type TRoutinesSlice = TRoutinesState & TRoutinesActions;

const initialState: TRoutinesState = {
    routines: [],
}

export const createRoutinesSlice: StateCreator<
    TStore,
    [["zustand/immer", never]],
    [],
    TRoutinesSlice
> = (set) => ({
    ...initialState,
    addRoutine: (routine: Routine) =>
        set((s) => {
            s.routines.push(routine);
        }),
    removeRoutine: (id) =>
        set((s) => {
            s.routines = s.routines.filter((routine) => routine.id !== id);
        }),
    updateRoutine: (id, routine) =>
        set((s) => {
            const index = s.routines.findIndex((r) => r.id === id);
            if (index !== -1) {
                s.routines[index] = routine;
            }
        }),
});