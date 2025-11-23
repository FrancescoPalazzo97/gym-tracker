import { store } from "@/store";
import { Button } from "@/components";
import { createId } from "@/lib";
import { PlusIcon, Trash2 } from "lucide-react";
import RoutineCard from "@/components/RoutineCard";

export const AllRoutinesPage = () => {

    const routines = store((s) => s.routines);
    const addRoutine = store((s) => s.addRoutine);

    return (
        <div className="mx-4">
            <div className="flex items-center justify-between">
                <Button
                    className="my-4"
                    size="lg"
                    onClick={() => addRoutine({ id: createId(), name: "New Routine", exercisesIds: [], createdAt: new Date(), updatedAt: new Date() })}
                >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Aggiungi Routine
                </Button>
                <p>Total Routines: {routines.length}</p>
            </div>
            {routines.length === 0 && (
                <>
                    <p>Non hai ancora aggiunto nessuna routine.</p>
                </>
            )}
            {routines.length > 0 && (
                <>

                    <ul className="flex flex-col space-y-4 my-2">
                        {routines.map((routine) => (
                            <li key={routine.id}>
                                <RoutineCard routine={routine} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
