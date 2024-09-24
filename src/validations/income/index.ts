import { z } from 'zod';

export const incomeDataValidation = z.object({
  transactionTypeId: z.number().min(1).positive(),
  description: z.string().min(1).max(150),
  amount: z.number().min(1).positive(),
});
