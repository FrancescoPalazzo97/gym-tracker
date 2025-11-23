import {
    Button,
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components"
import type { Routine } from "@/types"
import { Pencil, Trash2 } from "lucide-react"
import dayjs from "dayjs";
import { store } from "@/store/store";
import { Link } from "react-router-dom";

type Props = {
    routine: Routine
}

const RoutineCard = ({ routine }: Props) => {

    const removeRoutine = store((s) => s.removeRoutine);
    const updateRoutine = store((s) => s.updateRoutine);

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        removeRoutine(routine.id);
    }

    const handleUpdate = (e: React.MouseEvent) => {
        e.preventDefault();
        updateRoutine(routine.id, { ...routine, name: routine.name + " (Edited)" });
    }

    return (
        <Link to={`/routine/${routine.id}`}>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>{routine.name}</CardTitle>
                        <div className="flex space-x-2">
                            <Button
                                variant="outline"
                                size="icon-lg"
                                onClick={handleUpdate}
                            >
                                <Pencil className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="destructive"
                                size="icon-lg"
                                onClick={handleDelete}
                            >
                                <Trash2 className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>Created At: {dayjs(routine.createdAt).format("DD/MM/YYYY")}</p>
                    <p>Updated At: {dayjs(routine.updatedAt).format("DD/MM/YYYY")}</p>
                </CardContent>
            </Card>
        </Link>
    )
}

export default RoutineCard
