import type { TId } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createId(): TId {
  const newId = crypto.randomUUID();
  return newId as TId;
}
