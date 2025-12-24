export default function Ring({
  size,
  borderWidth,
  duration,
  rotate180 = false, // new prop
  children,
}: {
  size: number;
  borderWidth: number;
  duration: number;
  rotate180?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute inset-0 m-auto rounded-full border border-white"
      style={{
        width: size,
        height: size,
        borderWidth,
        transform: rotate180 ? "rotate(90deg)" : undefined, // rotate 180
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      {children}
    </div>
  );
}
