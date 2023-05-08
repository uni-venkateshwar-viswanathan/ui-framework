import React from "react";
import { ColorsDescription } from "../../../components/colors-description/colors-description.jsx";

const colorKeys = [
    "honeydew-color",
    "emerald-color",
    "panton-green-color",
    "grass-green-color",
    "true-green-color"
];

export const ApprovedColors = () => <ColorsDescription colorNames={colorKeys} />;