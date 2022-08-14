import React, { useState, useEffect } from "react";

export default function Dimensions() {
  const [{ innerWidth, innerHeight }, setDimensions] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });
  useEffect(() => {
    const resizeHandler = (event) => {
      const { innerWidth, innerHeight } = event.target;
      setDimensions({ innerWidth, innerHeight });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className="dimensions">{`${innerWidth}px - ${innerHeight}px`}</div>
  );
}
