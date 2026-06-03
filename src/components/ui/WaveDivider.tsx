import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fill?: string;
  className?: string;
  flip?: boolean;
}

export function WaveDivider({
  fill = "#efe9dd",
  className,
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={cn("wave-divider", flip && "rotate-180", className)}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function WaveDividerDouble({
  topFill = "#f6f3ec",
  bottomFill = "#efe9dd",
  className,
}: {
  topFill?: string;
  bottomFill?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-20 md:h-28"
      >
        <path
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,60 1440,50 L1440,100 L0,100 Z"
          fill={bottomFill}
        />
        <path
          d="M0,0 C360,50 720,-20 1080,30 C1260,55 1350,40 1440,30 L1440,0 Z"
          fill={topFill}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
