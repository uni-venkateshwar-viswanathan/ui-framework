import React from "react";
import { useMemo } from "react";
import { Frame } from "../frame/frame";
import { ColorDescription } from "../color-description/color-description.jsx";
import { colorsHashMap } from "../../../utils/colors";

export const ColorsDescription = ({ colorNames }) => {
  const descriptions = useMemo(
    () =>
      colorNames.map(color => (
        <ColorDescription
          key={color}
          colorName={color}
          description={colorsHashMap.get(color)}
        />
      )),
    [colorNames]
  );
  return <Frame>{descriptions}</Frame>;
};