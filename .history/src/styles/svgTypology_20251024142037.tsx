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

    let svgVars: svgVariables = breakpoint === Breakpoints.LARGE ? largeSvg :
                                breakpoint === Breakpoints.MEDIUM ? mediumSvg :
                                smallSvg;

    return (
        <>
            <SvgText fontFamily='Montserrat-ExtraBold' fontSize={svgVars.fontSize} fill="none" stroke='white' strokeWidth='2' x="50%" y={svgVars.yPositionWord1} textAnchor="middle">
                {text.split(' ')[0]}
            </SvgText>
            <SvgText fontFamily='Montserrat-ExtraBold' fontSize={svgVars.fontSize} fill="none" stroke='white' strokeWidth='2' x="50%" y={svgVars.yPositionWord2} textAnchor="middle">
                {text.split(' ')[1]}
            </SvgText>
            <SvgText fontFamily='Montserrat-ExtraBold' fontSize={svgVars.fontSize} fill={'#6200ee'} x="50%" y={svgVars.yPositionWord2} textAnchor="middle">
                {text.split(' ')[1]}
            </SvgText>
        </>
    );

}