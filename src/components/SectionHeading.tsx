type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-4xl ${alignClass}`}>
      <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase" data-reveal>
        {label}
      </p>
      <h2
        data-split
        className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]"
      >
        {title}
      </h2>
      {description ? (
        <p data-reveal className="mt-4 text-lg leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
