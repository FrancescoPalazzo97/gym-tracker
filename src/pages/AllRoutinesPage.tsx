import { store } from "@/store";
import { Button, RoutineCard } from "@/components";
import { createId } from "@/lib";
import { PlusIcon } from "lucide-react";
import AddRoutineModal from "@/components/modals/AddRoutineModal";
import { useRef } from "react";

export const AllRoutinesPage = () => {

    const routines = store((s) => s.routines);
    const addRoutine = store((s) => s.addRoutine);

    return (
        <div className="mx-4">
            <div className="flex flex-col md:flex-row items-center justify-between">

                <AddRoutineModal />
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
