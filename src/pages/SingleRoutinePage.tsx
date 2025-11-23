import { idSchema } from "@/schemas";
import { store } from "@/store";
import { useParams, Navigate } from "react-router-dom";

const SingleRoutinePage = () => {
    const { routineId } = useParams<string>();
    const idIsValid = idSchema.safeParse(routineId);
    if (!idIsValid.success) return <Navigate to="/" />;

    const routines = store((s) => s.routines);
    const selectedRoutine = routines.find(r => r.id === routineId);

    if (!selectedRoutine) {
        return <p>404 | Routine non trovata.</p>;
    }

    return (
        <div>
            <h1>Routine Details</h1>
            <div>
                <h2>{selectedRoutine.name}</h2>
            </div>

        </div>
    )
}

export default SingleRoutinePage
