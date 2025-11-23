import type { StateCreator } from "zustand";
import type { Routine, TId, TStore } from "@/types";

type TRoutinesState = {
    routines: Routine[],
}

type TRoutinesActions = {
    addRoutine: (routine: Routine) => void,
    removeRoutine: (id: TId) => void,
    updateRoutine: (id: TId, routine: Routine) => void,
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
    removeRoutine: (id: TId) =>
        set((s) => {
            s.routines = s.routines.filter((routine) => routine.id !== id);
        }),
    updateRoutine: (id: TId, routine: Routine) =>
        set((s) => {
            const index = s.routines.findIndex((r) => r.id === id);
            if (index !== -1) {
                s.routines[index] = routine;
            }
        }),
});