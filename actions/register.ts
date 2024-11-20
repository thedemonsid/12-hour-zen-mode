"use server";
import prisma from "@/lib/prisma";
import { RegisterInput, registerSchema } from "@/schemas";
import { saltAndHashPassword } from "@/utils/password";

export async function registerUser(input: RegisterInput) {
  const parsedInput = registerSchema.safeParse(input);
  if (!parsedInput.success) {
    return { success: false, message: parsedInput.error.errors };
  }
  const { firstName, lastName, email, password } = parsedInput.data;
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    return { success: false, message: "Email already exists" };
  }
  const hashedPassword = await saltAndHashPassword(password);
  try {
    await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { success: false, message: "Register failed" };
  }
  return { success: true, message: "Register successful" };
}
