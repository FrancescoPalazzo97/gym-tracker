import { z } from '@/lib';

// Esercizio di base della scheda
export const exerciseSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    sets: z.number(),
    reps: z.number(),
    weight: z.number().optional(),
    restTime: z.number().optional() // || enum???
})