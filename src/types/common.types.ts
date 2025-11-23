import { z } from "@/lib";
import { idSchema, dateSchema } from "@/schemas";

export type TId = z.infer<typeof idSchema>;
export type TDate = z.infer<typeof dateSchema>;