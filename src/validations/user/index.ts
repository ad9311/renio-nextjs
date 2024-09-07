import { z } from 'zod';

export const SignInDataValidation = z.object({
  email: z
    .string()
    .min(1)
    .max(30)
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: z.string().min(1).max(25),
});
