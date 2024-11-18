"use server"
import { RegisterInput, registerSchema } from "@/schemas";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function registerUser(input: RegisterInput) {
  const parsedInput = registerSchema.safeParse(input);
  if (!parsedInput.success) {
    return { success: false, message: parsedInput.error.errors };
  }
  await delay(3000);
  return { success: true, message: "Register successful" };
}
