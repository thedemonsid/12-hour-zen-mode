import { Box } from "./box";
import { cn } from "@/lib/utils";
import { chakra_petch } from "@/app/fonts";
export function Timer({
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
