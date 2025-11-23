import { store } from "@/store";
import type { TId } from "@/types";
import { useParams } from "react-router-dom";

const SingleRoutinePage = () => {
    const { routineId } = useParams<TId>();
    const routines = store((s) => s.routines);
    const selectedRoutine = routines.find(r => r.id === routineId);
    console.log(routineId)
    return (
        <div>
            <h1>Routine Details</h1>
            {selectedRoutine ? (
                <div>
                    <h2>{selectedRoutine.name}</h2>
                </div>
            ) : (
                <p>Routine not found.</p>
            )}
        </div>
    )
}

export default SingleRoutinePage
