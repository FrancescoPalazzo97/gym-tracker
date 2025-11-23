import {
    //Button,
    Card,
    //CardAction,
    CardContent,
    //CardDescription,
    //CardFooter,
    CardHeader,
    CardTitle
} from "@/components"
import type { Routine } from "@/types";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { DropdownToggle } from "./DropdownToggle";

type Props = {
    routine: Routine
}

export const RoutineCard = ({ routine }: Props) => {

    return (
        <Link to={`/routine/${routine.id}`}>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>{routine.name}</CardTitle>
                        <DropdownToggle routine={routine} />
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
