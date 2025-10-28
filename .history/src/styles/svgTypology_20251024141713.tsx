import React from "react";
import { Breakpoints } from "./breakpoints";
import { Text as SvgText } from 'react-native-svg';

interface svgVariables  {
    fontSize: number,
    yPositionWord1: number,
    yPositionWord2: number
};

const getSvgText = (breakpoint: Breakpoints, text: string) => {
   const largeSvg: svgVariables = {
