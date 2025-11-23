import type { FC } from "react";
import { store } from "@/store";
import type { TId } from "@/types";
import { Button } from "@/components";
import { ThemeToggle } from "@/components";

export const AllRoutinesPage: FC = () => {

    const routines = store((s) => s.routines);
    const addRoutine = store((s) => s.addRoutine);
    const removeRoutine = store((s) => s.removeRoutine);
    const updateRoutine = store((s) => s.updateRoutine);

    const newId = (): TId => {
        const newUUID = crypto.randomUUID();
        return newUUID as TId;
    }

    return (
        <div>
            <ThemeToggle />
            <Button>Ciaone</Button>
            <h1>My Gym Tracker</h1>
            <button onClick={() => addRoutine({ id: newId(), name: "New Routine", exercisesIds: [], createdAt: new Date(), updatedAt: new Date() })}>Add Routine</button>
            <ul>
                {routines.map((routine) => (
                    <li key={routine.id}>
                        <h2>{routine.name}</h2>
                        <button onClick={() => removeRoutine(routine.id)}>Delete</button>
                        <button onClick={() => updateRoutine(routine.id, { ...routine, name: "New Name" })}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
