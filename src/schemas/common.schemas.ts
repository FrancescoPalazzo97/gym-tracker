import { z } from '@/lib';

export const idSchema = z.uuid().brand('UUID');
export const dateSchema = z.date();
