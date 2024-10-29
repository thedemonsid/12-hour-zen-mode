import React from "react";
import CountDownComponent from "../_components/count-down";

const CountDown = async ({ params }: { params: { zenId: number } }) => {
  const { zenId } = await params;
  return <CountDownComponent></CountDownComponent>;
};

export default CountDown;
