import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  name: z.string().min(2, "Name must be at least 2 characters long"),
});

export const ZenSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z
    .string()
    .min(4, "Description must be at least 4 characters long"),
  preZenPlan: z
    .string()
    .min(4, "Pre-Zen Plan must be at least 4 characters long"),
  tasks: z.array(z.string().min(3, "Task must be at least 3 characters long")),
});
