"use client";
import { Timer } from "./timer";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

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
