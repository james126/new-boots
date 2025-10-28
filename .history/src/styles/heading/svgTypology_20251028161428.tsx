import React from "react";
import { Breakpoint } from "../breakpoints";
import { Text as SvgText } from 'react-native-svg';
import { useTheme } from "react-native-paper";

interface svgVariables {
    fontSize: number,
    yPositionWord1: number,
    yPositionWord2: number
};

export const getSvgText = (breakpoint: Breakpoint, text: string) => {
    const theme = useTheme();
    const largeSvg: svgVariables = {
        fontSize: 38,
        yPositionWord1: 35,
        yPositionWord2: 75
    };

    const mediumSvg: svgVariables = {
        fontSize: 34,
        yPositionWord1: 35,
        yPositionWord2: 71
    };

    const smallSvg: svgVariables = {
        fontSize: 26,
        yPositionWord1: 26,
        yPositionWord2: 54
    };

    let svgVars: svgVariables = breakpoint === Breakpoint.LARGE ? largeSvg :
        breakpoint === Breakpoint.MEDIUM ? mediumSvg :
            smallSvg;

    return (
        <>
            <SvgText fontFamily='Montserrat-ExtraBold' fontSize={svgVars.fontSize} fill="none" stroke='white' strokeWidth='2' x="50%" y={svgVars.yPositionWord1} textAnchor="middle">
                {text.split(' ')[0]}
            </SvgText>
            <SvgText fontFamily='Montserrat-ExtraBold' fontSize={svgVars.fontSize} fill={theme.colors.secondary} x="50%" y={svgVars.yPositionWord1} textAnchor="middle">
                {text.split(' ')[0]}
            </SvgText>
            <SvgText fontFamily='Montserrat-ExtraBold' fontSize={svgVars.fontSize} fill="none" stroke='white' strokeWidth='2' x="50%" y={svgVars.yPositionWord2} textAnchor="middle">
                {text.split(' ')[1]}
            </SvgText>
            <SvgText fontFamily='Montserrat-ExtraBold' fontSize={svgVars.fontSize} fill={theme.colors.secondary} x="50%" y={svgVars.yPositionWord2} textAnchor="middle">
                {text.split(' ')[1]}
            </SvgText>
        </>
    );

}