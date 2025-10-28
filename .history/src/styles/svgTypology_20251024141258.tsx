import React from "react";
import { Breakpoints } from "./breakpoints";
import { Text as SvgText } from 'react-native-svg';
import { useTheme } from "react-native-paper";

const getSvgText = (breakpoint: Breakpoints, text: string) => {
    const theme = useTheme();
    
    switch (breakpoint) {
        case Breakpoints.LARGE:
            return (
                <>
                        <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} fill="none" stroke='white' strokeWidth='2' x="50%" y="35" textAnchor="middle">
                            Feasibility
                        </SvgText>
                        <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} fill={theme.colors.secondary} x="50%" y="35" textAnchor="middle">
                            Feasibility
                        </SvgText>
                        <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} fill="none" stroke='white' strokeWidth='2' x="50%" y="75" textAnchor="middle">
                            Calculator
                        </SvgText>
                        <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} fill={theme.colors.secondary} x="50%" y="75" textAnchor="middle">
                            Calculator
                        </SvgText>
                </>
            );
        case Breakpoints.MEDIUM:
            return (
                <>
                    <SvgText fontFamily='Montserrat-ExtraBold' fontSize={35} fill="none" stroke='white' strokeWidth='2' x="50%" y="35" textAnchor="middle">
                        Feasibility
                    </SvgText>
                    <SvgText fontFamily='Montserrat-ExtraBold' fontSize={35} fill={theme.colors.secondary} x="50%" y="35" textAnchor="middle">
                        Feasibility
                    </SvgText>
                </>
            );
        case Breakpoints.SMALL:
        default:
            return (
                <>
                    <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} fill="none" stroke='white' strokeWidth='2' x="50%" y="35" textAnchor="middle">
                        Feasibility
                    </SvgText>
                    <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} fill={theme.colors.secondary} x="50%" y="35" textAnchor="middle">
                        Feasibility
                    </SvgText>
                </>
            );
    }
}