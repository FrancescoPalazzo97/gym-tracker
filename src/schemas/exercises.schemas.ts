import { z } from '@/lib';

const SetSchema = z.array(z.object({
    reps: z.number(),
    weight: z.number().optional(),
    restTime: z.number().optional() // || enum???
}))

// Esercizio di base della scheda
export const exerciseSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    sets: SetSchema
})