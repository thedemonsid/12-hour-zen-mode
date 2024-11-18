import { z } from "zod";

export const registerSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .max(100, "First name cannot exceed 100 characters")
    .transform((str) => str.trim()),
  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(100, "Last name cannot exceed 100 characters")
    .transform((str) => str.trim()),
  email: z
    .string()
    .email("Please enter a valid email address")
    .transform((str) => str.toLowerCase().trim()),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password cannot exceed 100 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .transform((str) => str.toLowerCase().trim()),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password cannot exceed 100 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;
