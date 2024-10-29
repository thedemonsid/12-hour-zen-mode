import React from "react";
import CountDownComponent from "../_components/count-down";
import prisma from "@/lib/prisma";

const CountDown = async ({ params }: { params: { zenId: string } }) => {
  const { zenId } = await params;

  // Parse `zenId` from string to number
  const id = parseInt(zenId, 10);

  // Find the Zen session
  const zen = await prisma.zen.findUnique({
    where: {
      id: id,
    },
  });
  // Optional: Check if `zen` exists before rendering the component
  if (!zen) {
    return <div>Error: Zen session not found.</div>;
  }
  const createdAt = {
    hours: zen?.createdAt.getHours(),
    minutes: zen?.createdAt.getMinutes(),
    seconds: zen?.createdAt.getSeconds(),
  };

  return <CountDownComponent createdAt={createdAt} />;
};

export default CountDown;
