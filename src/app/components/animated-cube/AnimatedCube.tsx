import React, { FC, useMemo, useRef, useState } from "react";
import Spline, { SPEObject } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";

type AnimatedCubeProps = {
  onLoad: (spline: any) => void;
};

export const AnimatedCube: FC = () => {
  const cubeRef = useRef<SPEObject | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = useMemo(
    () => (spline: Application) => {
      const obj = spline.findObjectByName("Cubes");

      if (obj) {
        cubeRef.current = obj;
        setIsLoaded(true);
      }
    },
    [],
  );

  const moveCube = useMemo(
    () => (x: number, y: number) => {
      if (cubeRef.current) {
        cubeRef.current.position.x += x;
        cubeRef.current.position.y += y;
      }
    },
    [cubeRef],
  );

  return (
    <Spline
      style={{
        scale: "1",
        border: "1px solid red",
        // pointerEvents: "none",
      }}
      scene="https://prod.spline.design/L5ihqoHiQRDAs2R0/scene.splinecode"
      onLoad={onLoad}
    />
  );
};
