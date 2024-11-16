"use client";
import { cn } from "@/lib/utils";
import { chakra_petch } from "@/app/fonts";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

function Box({ num }: { num: number }) {
  return (
    <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 dark:bg-gray-800 dark:text-white  rounded-lg shadow-lg">
      <span className="text-5xl md:text-6xl lg:text-7xl font-bold">
        {String(num).padStart(2, "0")}
      </span>
    </div>
  );
}
function Timer({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center justify-center gap-4 p-4 rounded-lg shadow-lg",
        `${chakra_petch.className}`
      )}
    >
      <Box num={hours} />
      <span className="text-5xl md:text-6xl lg:text-7xl text-white">:</span>
      <Box num={minutes} />
      <span className="text-5xl md:text-6xl lg:text-7xl text-white">:</span>
      <Box num={seconds} />
    </div>
  );
}
interface StateProps {
  onboardingComplete: Boolean;
  timerIsRunning: Boolean;
}
let TargetTime = new Date(2024, 10, 16, 22, 0, 0);

export default function Counter() {
  if (!localStorage.getItem("TargetTime")) {
    localStorage.setItem("TargetTime", TargetTime.toString());
  } else {
    TargetTime = new Date(localStorage.getItem("TargetTime") as string);
  }
  const [timeLeft, setTimeLeft] = useState<number>(
    TargetTime.getTime() - Date.now()
  );
  const flag = localStorage.getItem("isTimerRunning");
  const [isTimerRunning, setIsTimerRunning] = useState(flag === "true");
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isTimerRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        const newTimeLeft = TargetTime.getTime() - Date.now();
        if (newTimeLeft <= 0) {
          clearInterval(intervalId);
          setTimeLeft(0);
        } else {
          setTimeLeft(newTimeLeft);
        }
      }, 1000);
    }
    if (timeLeft <= 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTimerRunning, TargetTime, timeLeft]);

  const hours = timeLeft > 0 ? Math.floor(timeLeft / (1000 * 60 * 60)) : 0;
  const minutes =
    timeLeft > 0 ? Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) : 0;
  const seconds =
    timeLeft > 0 ? Math.floor((timeLeft % (1000 * 60)) / 1000) : 0;

  function handleStart() {
    localStorage.setItem("isTimerRunning", "true");
    if (localStorage.getItem("pausedAt")) {
      const pausedAt = parseInt(localStorage.getItem("pausedAt") as string);
      const pausedFor = Date.now() - pausedAt;
      TargetTime = new Date(TargetTime.getTime() + pausedFor + 2000); //! 3 seconds for the delay , will optimise later
      localStorage.setItem("TargetTime", TargetTime.toString());
      localStorage.removeItem("pausedAt");
    }
    setIsTimerRunning(true);
  }
  function handleStop() {
    localStorage.setItem("isTimerRunning", "false");
    localStorage.setItem("pausedAt", Date.now().toString());
    setIsTimerRunning(false);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Timer hours={hours} minutes={minutes} seconds={seconds} />
      <div className="flex gap-10">
        <Button disabled={isTimerRunning} onClick={handleStart}>
          Start
        </Button>
        <Button disabled={!isTimerRunning} onClick={handleStop}>
          Stop
        </Button>
      </div>
    </div>
  );
}
