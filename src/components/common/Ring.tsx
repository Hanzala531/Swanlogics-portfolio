// export default function Ring({
//   size,
//   borderWidth,
//   duration,
//   rotate180 = false, // new prop
//   children,
// }: {
//   size: number;
//   borderWidth: number;
//   duration: number;
//   rotate180?: boolean;
//   children: React.ReactNode;
// }) {
//   return (
//     <div
//       className="absolute inset-0 m-auto rounded-full border border-white"
//       style={{
//         width: size,
//         height: size,
//         borderWidth,
//         transform: rotate180 ? "rotate(90deg)" : undefined, // rotate 180
//         animation: `spin ${duration}s linear infinite`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }


import React from "react";

export default function Ring({
  size,
  borderWidth,
  duration,
  rotate180 = false,
  children,
}: {
  size: number; // base size for desktop
  borderWidth: number;
  duration: number;
  rotate180?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute inset-0 m-auto rounded-full border border-white"
      style={{
        // Use clamp to make width & height always equal and responsive
        width: `clamp(${size * 0.8}px, 50vw, ${size}px)`,
        height: `clamp(${size * 0.8}px, 50vw, ${size}px)`,
        borderWidth,
        transform: rotate180 ? "rotate(180deg)" : undefined,
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      {children}
    </div>
  );
}


