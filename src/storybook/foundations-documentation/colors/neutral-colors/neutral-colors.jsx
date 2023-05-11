import React from "react";
import { ColorsDescription } from "../../../components/colors-description/colors-description.jsx";

const colorKeys = [
    "white-color",
    "white-grey-color",
    "warm-grey-color",
    "frost-grey-color",
    "pale-grey-color",
    "silver-color",
    "medium-grey-color",
    "cool-grey-color",
    "sonic-grey-color",
    "onix-color",
    "jet-color"
];

export const NeutralColors = () => <ColorsDescription colorNames={colorKeys} />;