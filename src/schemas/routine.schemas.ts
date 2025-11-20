import { z } from '@/lib';

//Routine intesa anche come scheda
export const RoutineSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    workouts: z.array(z.object({
        week: z.number().min(0).max(3),
        dayOfWeek: z.number().min(0).max(6),
        workoutId: z.uuid()
    })),
    createdAt: z.date(),
    updatedAt: z.date()
})
//Implemetare anche i massimali???