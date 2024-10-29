"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

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

interface CountDownProps {
  createdAt: { hours: number; minutes: number; seconds: number };
  pausedAt: { hours: number; minutes: number; seconds: number };
  startedAt: { hours: number; minutes: number; seconds: number };
}

const CountDownComponent = ({
  createdAt,
  pausedAt,
  startedAt,
}: CountDownProps) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isPaused) return; // Skip if paused

    const interval = setInterval(() => {
      const now = new Date();

      // Calculate the time elapsed since the start time, considering paused time
      const elapsedHours =
        now.getHours() - createdAt.hours - (startedAt.hours - pausedAt.hours);
      const elapsedMinutes =
        now.getMinutes() -
        createdAt.minutes -
        (startedAt.minutes - pausedAt.minutes);
      const elapsedSeconds =
        now.getSeconds() -
        createdAt.seconds -
        (startedAt.seconds - pausedAt.seconds);

      // Calculate total elapsed seconds
      const totalElapsedSeconds =
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
  }, [isPaused, createdAt, pausedAt]);

  const handleStart = () => {
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-cream space-y-8">
      <div className="flex space-x-4 p-4 text-center">
        <Box number={time.hours} />
        <Colon />
        <Box number={time.minutes} />
        <Colon />
        <Box number={time.seconds} />
      </div>
      <div className="flex space-x-4">
        <Button
          onClick={handleStart}
          disabled={!isPaused}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
        >
          Start
        </Button>
        <Button
          onClick={handlePause}
          disabled={isPaused}
          className="bg-red-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-700 transition duration-300"
        >
          Pause
        </Button>
      </div>
    </div>
  );
};

export default CountDownComponent;