export function Box({ num }: { num: number }) {
  return (
    <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 dark:bg-gray-800 dark:text-white  rounded-lg shadow-lg">
      <span className="text-5xl md:text-6xl lg:text-7xl font-bold">
        {String(num).padStart(2, "0")}
      </span>
    </div>
  );
}
