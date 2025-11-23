import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "@/components"
import { store } from "@/store/store";
import type { Routine } from "@/types";
import { MoreHorizontalIcon, Pencil, Trash2 } from "lucide-react";

type Props = {
  routine: Routine
}

export const DropdownToggle = ({ routine }: Props) => {

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
    <div onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="More Options">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuItem onClick={handleUpdate}>
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleDelete}
            variant="destructive">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
