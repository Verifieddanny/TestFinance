import { z } from "zod";

export const EditUserSchema = z.object({
  user: z.number(),
  balance: z.number(),
});
