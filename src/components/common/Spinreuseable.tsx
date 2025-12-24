type OrbitIconProps = {
  angle: number;
  radius: number;
  icon: React.ReactNode;
};

export default function OrbitIcon({ angle, radius, icon }: OrbitIconProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `rotate(${angle}deg) translate(${radius}px)`,
      }}
    >
      {icon}
    </div>
  );
}
