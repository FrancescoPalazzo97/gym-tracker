import { RoutineSchema } from "@/schemas";
import { z } from "@/lib"

export type Routine = z.infer<typeof RoutineSchema>;
