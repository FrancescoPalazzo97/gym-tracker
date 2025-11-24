import { store } from "@/store";
import { RoutineCard } from "@/components";
import AddRoutineModal from "@/components/modals/AddRoutineModal";

export const AllRoutinesPage = () => {

    const routines = store((s) => s.routines);

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
