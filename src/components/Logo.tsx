type LogoProps = {
  variant?: "horizontal" | "square";
  /** Teal ASMAT (matches site accent) */
  accent?: boolean;
  className?: string;
};

export function Logo({
  variant = "horizontal",
  accent = false,
  className = "",
}: LogoProps) {
  const asmatColor = accent ? "text-teal-400" : "text-white";

  if (variant === "square") {
    return (
      <span
        className={`inline-flex flex-col items-center text-center font-sans leading-none select-none ${className}`.trim()}
        aria-label="Marketing with ASMAT"
      >
        <span className="text-sm font-semibold tracking-wide text-zinc-400">
          Marketing{" "}
          <span className="font-normal text-zinc-500">with</span>
        </span>
        <span
          className={`mt-1 text-2xl font-bold tracking-[0.16em] uppercase ${asmatColor}`}
        >
          ASMAT
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-baseline gap-2 font-sans leading-none select-none ${className}`.trim()}
      aria-label="Marketing with ASMAT"
    >
      <span className="text-[13px] font-semibold tracking-wide text-zinc-400 sm:text-sm">
        Marketing{" "}
        <span className="font-normal text-zinc-500">with</span>
      </span>
      <span
        className={`text-base font-bold tracking-[0.14em] uppercase sm:text-lg ${asmatColor}`}
      >
        ASMAT
      </span>
    </span>
  );
}
