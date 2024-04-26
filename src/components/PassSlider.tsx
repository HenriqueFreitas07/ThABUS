import { useEffect, useState } from "react";
import { gsap } from "gsap";
import PassCard from "./PassCard";

export default function PassSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const busPasses = [
    { zone: "Zone 1", valid: "02/12" },
    { zone: "Zone 2", valid: "02/12" },
    { zone: "Zone 3", valid: "02/12" },
    { zone: "Zone 4", valid: "02/24" },
    { zone: "Zone 4", valid: "02/24" },
    { zone: "Zone 4", valid: "02/24" },
    { zone: "Zone 4", valid: "02/24" },
    { zone: "Zone 4", valid: "02/24" },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
    console.log("Clicked on pass", index);
  };

  return (
    <div className="stacked-slider overflow-auto">
      {busPasses.map((pass, index) => (
        <div
          key={index}
          className={`pass-card ${index === activeIndex ? "active" : ""}`}
          style={{
            transform: `translate(-50%, -${index * 60}px)`,
            zIndex: busPasses.length - index, // This ensures that the first card is at the top of the stack
          }}
          onClick={() => handleClick(index)}
        >
          <PassCard key={index} zone={pass.zone} valid={pass.valid} />
        </div>
      ))}
    </div>
  );
}
