import { z } from '@/lib';
import { SET_TYPES, UNIT_NAMES } from '@/constants';

const SetSchema = z.array(z.object({
    type: z.enum(SET_TYPES),
    reps: z.number(),
    weight: z.number().optional(),
    time: z.number().optional()
}))

// Esercizio di base della scheda
export const exerciseSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    restTime: z.number().optional(),
    useUnit: z.boolean(),
    unitName: z.enum(UNIT_NAMES),
    useTime: z.boolean(),
    sets: SetSchema,
    createdAt: z.date(),
    updatedAt: z.date()
})