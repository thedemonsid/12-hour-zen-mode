"use server";
import prisma from "@/lib/prisma";
import { parse } from "path";

export default async function Start({ id }: { id: number }) {
  try {
    const zen = await prisma.zen.findUnique({
      where: {
        id: id,
      },
    });
    if (!zen) {
      return { success: false, message: "Error while finding zen" };
    }
    const startedAt = new Date();
    const pausedTime =
      zen.pausedTime + (startedAt.getTime() - zen.pausedAt.getTime()) / 1000;
    const parsedPausedTime = Math.floor(pausedTime);
    const response = await prisma.zen.update({
      where: { id: id },
      data: {
        startedAt: startedAt,
        pausedTime: parsedPausedTime,
      },
    });
    if (!response) {
      return {
        success: false,
        message: "Error while updating (startedAt) zen",
      };
    }
    return {
      success: true,
      message: "Started successfully",
      pausedTime: parsedPausedTime,
    };
  } catch (error) {
    return { success: false, message: "Error in Start (server 500)" };
  }
}
