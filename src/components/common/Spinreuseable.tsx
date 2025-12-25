// type OrbitIconProps = {
//   angle: number;
//   radius: number;
//   icon: React.ReactNode;
// };

// export default function OrbitIcon({ angle, radius, icon }: OrbitIconProps) {
//   return (
//     <div
//       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//       style={{
//         transform: `rotate(${angle}deg) translate(${radius}px)`,
//       }}
//     >
//       {icon}
//     </div>
//   );
// }


type OrbitIconProps = {
  angle: number;
  radius: number; // max radius for large screens
  icon: React.ReactNode;
};

export default function OrbitIcon({ angle, radius, icon }: OrbitIconProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        // responsive radius: shrinks on small screens
        transform: `rotate(${angle}deg) translate(${`clamp(${radius * 0.8}px, 20vw, ${radius}px)`})`,
      }}
    >
      {icon}
    </div>
  );
}
