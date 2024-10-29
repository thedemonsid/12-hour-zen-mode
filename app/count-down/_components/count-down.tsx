"use client";
import React, { useState, useEffect } from "react";
const createdAt = { hours: 2, minutes: 55, seconds: 0 }; // Todo : Replace with real data
const pausedTime = { hours: 0, minutes: 0, seconds: 0 }; // Todo : Replace with real data
const Box = ({ number }: { number: number }) => {
  return (
    <div className="flex justify-center items-center text-7xl font-bold text-white bg-transparent">
      {number < 10 ? `0${number}` : number}
    </div>
  );
};

const Colon = () => {
  return <div className="text-7xl font-bold text-slate-300">:</div>;
};

const CountDownComponent = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // Calculate the time elapsed since the start time
      const elapsedHours = now.getHours() - createdAt.hours - pausedTime.hours;
      const elapsedMinutes =
        now.getMinutes() - createdAt.minutes - pausedTime.minutes;
      const elapsedSeconds =
        now.getSeconds() - createdAt.seconds - pausedTime.seconds;

      // Calculate total elapsed seconds
      let totalElapsedSeconds =
        elapsedHours * 3600 + elapsedMinutes * 60 + elapsedSeconds;

      // Calculate remaining seconds for 12 hours
      const totalRemainingSeconds = 12 * 3600 - totalElapsedSeconds;

      if (totalRemainingSeconds <= 0) {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval); // Stop the countdown when it reaches 0
        return;
      }

      // Convert remaining seconds back to hours, minutes, and seconds
      const hours = Math.floor(totalRemainingSeconds / 3600);
      const minutes = Math.floor((totalRemainingSeconds % 3600) / 60);
      const seconds = totalRemainingSeconds % 60;

      setTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-cream">
      <div className="flex space-x-4 p-4 text-center">
        <Box number={time.hours} />
        <Colon />
        <Box number={time.minutes} />
        <Colon />
        <Box number={time.seconds} />
      </div>
    </div>
  );
};

export default CountDownComponent;
