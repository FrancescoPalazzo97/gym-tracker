import { store } from "@/store";
import { Button } from "@/components";
import { createId } from "@/lib";

export const AllRoutinesPage = () => {

    const routines = store((s) => s.routines);
    const addRoutine = store((s) => s.addRoutine);
    const removeRoutine = store((s) => s.removeRoutine);
    const updateRoutine = store((s) => s.updateRoutine);

    return (
        <div className="mx-4">
            <h1>My Gym Tracker</h1>
            <Button
                onClick={() => addRoutine({ id: createId(), name: "New Routine", exercisesIds: [], createdAt: new Date(), updatedAt: new Date() })}
            >
                Add Routine
            </Button>
            {routines.length === 0 && <p>No routines available.</p>}
            {routines.length > 0 && (
                <>
                    <p>Total Routines: {routines.length}</p>
                    <ul>
                        {routines.map((routine) => (
                            <li key={routine.id}>
                                <h2>{routine.name}</h2>
                                <Button onClick={() => removeRoutine(routine.id)}>Delete</Button>
                                <Button onClick={() => updateRoutine(routine.id, { ...routine, name: "New Name" })}>Update</Button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
