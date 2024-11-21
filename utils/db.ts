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
export async function updateUserEmailVerification(email: string) {
  const isUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!isUser) {
    throw new Error("User not found.");
  }
  if (isUser.emailVerified) {
    throw new Error("Email already verified.");
  }
  return await prisma.user.update({
    where: {
      email,
    },
    data: {
      emailVerified: new Date(),
    },
  });
}
