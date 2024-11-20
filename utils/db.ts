import prisma from "@/lib/prisma";

export async function getUserByEmail(email: string, pwHash?: string) {
  if (!pwHash) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  return await prisma.user.findUnique({
    where: {
      email,
      password: pwHash,
    },
  });
}
export async function getUserById(id: string, pwHash?: string) {
  if (!pwHash) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  return await prisma.user.findUnique({
    where: {
      id,
      password: pwHash,
    },
  });
}
