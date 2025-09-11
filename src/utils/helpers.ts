import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const SentenseCase = (word: string | undefined) => {
  if (word) return word.charAt(0).toUpperCase() + word.slice(1);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
