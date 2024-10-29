"use server";
import prisma from "@/lib/prisma";
export const Pause = async ({ id }: { id: number }) => {
  try {
    const zen = await prisma.zen.findUnique({
      where: {
        id: id,
      },
    });
    if (!zen) {
      return { success: false, message: "Error while finding zen" };
    }
    const pausedAt = new Date();
    const response = await prisma.zen.update({
      where: { id: id },
      data: {
        pausedAt: pausedAt,
      },
    });
    if (!response) {
      return { success: false, message: "Error while updating (pausedAt) zen" };
    }
    return { success: true, message: "Paused successfully" };
  } catch (error) {
    return { success: false, message: "Error in Pause (server 500)" };
  }
};
