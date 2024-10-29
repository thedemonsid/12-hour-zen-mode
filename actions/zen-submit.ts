"use server";
import { ZenSchema } from "@/schemas";
import * as z from "zod";
import prisma from "@/lib/prisma";
export const zenSubmit = async (form: z.infer<typeof ZenSchema>) => {
  const validatedFields = ZenSchema.safeParse(form);
  if (!validatedFields.success) {
    return { success: false, message: "Enter Valid fields" };
  }
  const { title, description, preZenPlan } = validatedFields.data;
  try {
    // const zen = prisma.zen.findUnique({
    //   where: {title: title},
    // });
    const zen = true;
    if (!zen) {
      return { success: false, message: "Error while creatng zen",id:1 };
    }
    return { success: true, message: "Login successful" };
  } catch (error) {
    return { success: false, message: "Error in submitting" };
  }
};
