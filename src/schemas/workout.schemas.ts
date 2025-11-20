import { z } from '@/lib';

//Warmup, Normal, DropSet, Failure
const setTypes = ['W', 'N', 'D', 'F'];

//Esercizio effettivo che fai durante allenamento
const workoutExerciseSchema = z.object({
    exerciseId: z.uuid(),
    sets: z.array(z.object({
        type: z.enum(setTypes),
        reps: z.number(),
        weight: z.number(),
        completed: z.boolean()
    }))
})

//Workout del giorno
export const workoutSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    exercises: z.array(workoutExerciseSchema),
    createdAt: z.date(),
    updatedAt: z.date(),
    completedAt: z.date().optional(),
    notes: z.string().max(100).optional()
})