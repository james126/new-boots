import React from "react";
import { Breakpoints } from "./breakpoints";
import { SvgText } from 'react-native-svg';

const getSvgText = (breakpoint: Breakpoints, text: string) => {
    switch (breakpoint) {
        case Breakpoints.SMALL:
            return (
                <SvgText fontFamily='Montserrat-ExtraBold' fontSize={28} fill="none" stroke='white' strokeWidth='2' x="50%" y="50%" textAnchor="middle">
                    {text}
                </SvgText>
            );
        case Breakpoints.MEDIUM:
            return (
                <SvgText fontFamily='Montserrat-ExtraBold' fontSize={34} fill="none" stroke='white' strokeWidth='2' x="50%" y="40%" textAnchor="middle">
                    {text}
                </SvgText>
            );
        case Breakpoints.LARGE:
        default:
            return (
                <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} fill="none" stroke='white' strokeWidth='2' x="50%" y="35" textAnchor="middle">
                    {text}
                </SvgText>
            );
    }
}