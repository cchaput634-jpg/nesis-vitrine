export function FanSvg({
  className,
  paths,
  gradientId = "fg",
}: {
  className?: string;
  paths?: string[];
  gradientId?: string;
}) {
  const lines = paths ?? [
    "M 0 0 Q 200 130 800 130",
    "M 0 0 Q 200 190 800 260",
    "M 0 0 Q 200 250 800 390",
    "M 0 0 Q 200 310 800 520",
    "M 0 0 Q 200 370 800 650",
    "M 0 0 Q 200 430 800 780",
    "M 0 0 Q 180 490 720 900",
    "M 0 0 Q 130 550 540 900",
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 800 900"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2CB4B8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2CB4B8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeWidth="1" fill="none">
        {lines.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
