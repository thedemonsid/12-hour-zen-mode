"use server";
import { LoginInput, loginSchema } from "@/schemas";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function loginUser(input: LoginInput) {
  const parsedInput = loginSchema.safeParse(input);
  if (!parsedInput.success) {
    return { success: false, message: parsedInput.error.errors };
  }
  await delay(3000);
  return { success: true, message: "Login successful" };
}
