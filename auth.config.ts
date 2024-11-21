import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "./schemas";
import { ZodError } from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail, updateUserEmailVerification } from "./utils/db";
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    GitHub,
    Google,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      // TODO: Handle user linking multiple login options
      async authorize(credentials) {
        try {
          let user = null;

          const parsedCredentials = loginSchema.safeParse(credentials);
          if (!parsedCredentials.success) {
            throw new Error("Invalid credentials.");
          }
          const { email, password } = parsedCredentials.data;

          // logic to verify if the user exists
          user = await getUserByEmail(email);
          if (!user || !user.password) {
            throw new Error("Invalid credentials.");
          }
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid credentials.");
          }
          // return JSON object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token) session.user.id = token.id as string;
      return session;
    },
  },
  events: {
    async signIn(message) {
      // console.log("Sign in event: ", message);
      if (message.account?.provider === "github") {
        updateUserEmailVerification(message.user.email as string);
      }
      if (message.account?.provider === "google") {
        updateUserEmailVerification(message.user.email as string);
      }
    },
  },
  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig;
