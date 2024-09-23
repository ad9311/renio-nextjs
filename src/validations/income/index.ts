import { z } from 'zod';

export const incomeDataValidation = z.object({
  description: z.string().min(1).max(150),
  amount: z.number().min(1).positive(),
});
