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
        fontSize: 38,
        yPositionWord1: 35,
        yPositionWord2: 75
    };
    
    const mediumSvg: svgVariables = {
        fontSize: 32,
        yPositionWord1: 30,
        yPositionWord2: 65
    };

    const smallSvg: svgVariables = {
        fontSize: 28,
        yPositionWord1: 25,
        yPositionWord2: 55
    };

    let svgVars: svgVariables = 

}