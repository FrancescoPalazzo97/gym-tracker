import { z } from '@/lib';

//Routine settimanale
export const RoutineSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    workouts: z.array(z.object({
        dayOfWeek: z.number().min(0).max(6),
        workoutId: z.uuid()
    })),
    createdAt: z.date(),
    updatedAt: z.date()
})
//Implemetare anche i massimali???