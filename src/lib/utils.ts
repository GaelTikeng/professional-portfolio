import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  d?: Date,
  fallback: string = '-',
  options?: Intl.DateTimeFormatOptions
): string {
  if (d) {
    return new Intl.DateTimeFormat('de-DE', {
      ...options,
    }).format(d);
  }
  return fallback;
}

export function combineHeaders(
  ...headers: Array<ResponseInit['headers'] | null | undefined>
) {
  const combined = new Headers();
  for (const header of headers) {
    if (!header) continue;
    for (const [key, value] of new Headers(header).entries()) {
      combined.append(key, value);
    }
  }
  return combined;
}
