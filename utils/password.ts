import b from "bcryptjs";

export const saltAndHashPassword = async (password: string) => {
  const salt = await b.genSalt(10);
  return await b.hash(password, salt);
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
  return await b.compare(password, hashedPassword);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};