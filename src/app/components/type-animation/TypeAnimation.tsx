import React, { FC, useMemo } from "react";
import { TypeAnimation as TA } from "react-type-animation";

export const TypeAnimation: FC = () =>
  useMemo(
    () => (
      <TA
        sequence={[
          "",
          1300,
          "Fullstack Developer",
          2800,
          "Specialised in IOS & Android Apps,",
          2000,
          "Websites & Backend Systems.",
          800,
        ]}
        wrapper="div"
        speed={15}
        deletionSpeed={40}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    ),
    [],
  );
