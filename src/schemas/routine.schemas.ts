import { z } from '@/lib';
import { idSchema, dateSchema } from './common.schemas';

//Routine settimanale
export const RoutineSchema = z.object({
    id: idSchema,
    name: z.string(),
    exercisesIds: z.array(z.string()),
    createdAt: dateSchema,
    updatedAt: dateSchema
})
//Implemetare anche i massimali???