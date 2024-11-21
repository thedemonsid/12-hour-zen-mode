"use server";
import { signIn } from "@/auth";
import { defaultLoginRedirect } from "@/routes";
import { LoginInput, loginSchema } from "@/schemas";
import { AuthError } from "next-auth";
export async function loginUser(input: LoginInput) {
  try {
    const parsedInput = loginSchema.safeParse(input);
    if (!parsedInput.success) {
      return { success: false, message: parsedInput.error.errors };
    }
    const { email, password } = parsedInput.data;
    await signIn("credentials", {
      email,
      password,
      redirectTo: defaultLoginRedirect,
    });
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { success: false, message: "Invalid credentials" };
        }
        case "AccountNotLinked": {
          return { success: false, message: "Account not linked" };
        }
        case "OAuthAccountNotLinked": {
          return { success: false, message: "OAuth Account not linked" };
        }
        default: {
          return { success: false, message: error.message };
        }
      }
    }
    return { success: false, message: "Something Went Wrong" };
  }
  return { success: true, message: "Login successful" };
}
