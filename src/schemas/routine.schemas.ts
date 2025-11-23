import { z } from '@/lib';

//Routine settimanale
export const RoutineSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    exercisesIds: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date()
})
//Implemetare anche i massimali???