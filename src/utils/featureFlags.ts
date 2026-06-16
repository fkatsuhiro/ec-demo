import type { Category } from '../types';

const FLAGS = {
  WOMEN: import.meta.env.VITE_FF_SALE_WOMEN === 'true',
  MEN: import.meta.env.VITE_FF_SALE_MEN === 'true',
  KIDS: import.meta.env.VITE_FF_SALE_KIDS === 'true',
} satisfies Record<Category, boolean>;

export function isSaleEnabled(category: Category): boolean {
  return FLAGS[category];
}
