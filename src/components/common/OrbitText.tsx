// import { useId } from "react";

// type CurvedTextProps = {
//   radius: number;
//   texts: string[];
//   duration: number; // seconds
// };

// export function CurvedText({ radius, texts, duration }: CurvedTextProps) {
//   const pathId = useId();

//   return (
//     <svg
//       width={radius * 2}
//   height={radius * 2}
//   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
//     >
//       <defs>
//         <path
//           id={pathId}
//           d={`
//             M ${radius},${radius}
//             m -${radius},0
//             a ${radius},${radius} 0 1,1 ${radius * 2},0
//             a ${radius},${radius} 0 1,1 -${radius * 2},0
//           `}
//         />
//       </defs>

//       {texts.map((text, i) => (
//         <text key={i} fill="white" fontSize="20">
//           <textPath
//             href={`#${pathId}`}
//             startOffset={`${(i / texts.length) * 100}%`}
//             style={{ animation: `circleText ${duration}s linear infinite` }}
//           >
//             {text}
//           </textPath>
//         </text>
//       ))}
//     </svg>
//   );
// }


import { useId, useEffect, useState } from "react";

type CurvedTextProps = {
  size: number; // max diameter
  texts: string[];
  duration: number;
};

export function CurvedText({ size, texts, duration }: CurvedTextProps) {
  const pathId = useId();
  const [radius, setRadius] = useState(size/2);

  // Update radius on window resize for responsiveness
  useEffect(() => {
    function updateRadius() {
      const vw = window.innerWidth;
      const responsiveRadius = Math.min(size / 2.6, Math.max(size * 0.3, vw * 0.25));
      setRadius(responsiveRadius);
    }

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, [size]);

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
    >
      <defs>
        <path
          id={pathId}
          d={`
            M ${radius},${radius}
            m -${radius},0
            a ${radius},${radius} 0 1,1 ${radius * 2},0
            a ${radius},${radius} 0 1,1 -${radius * 2},0
          `}
        />
      </defs>

      {texts.map((text, i) => (
        <text key={i} fill="white" fontSize="22px">
          <textPath
            href={`#${pathId}`}
            startOffset={`${(i / texts.length) * 100}%`}
            style={{ animation: `circleText ${duration}s linear infinite` }}
          >
            {text}
          </textPath>
        </text>
      ))}
    </svg>
  );
}


