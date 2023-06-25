import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export const registerUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  gender: z.string().min(2).max(100),
  password: z.string().min(6).max(100),
});
