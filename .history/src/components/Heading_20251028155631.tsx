import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { headingLarge } from "../styles/heading/headingLarge"
import Svg, { Text as SvgText } from 'react-native-svg';
import { useTheme } from 'react-native-paper';
import { clayPalette } from '../styles/theme';
import { getBreakpoint, Breakpoint } from '../styles/breakpoints';
import { getSvgText } from '../styles/heading/svgTypology';
import { headingMedium } from '../styles/heading/headingMedium';
import { headingSmall } from '../styles/heading/headingSmall';

interface HeadingProps {
    handleNextPage: () => void;
    breakpoint: Breakpoint
}

const Heading = (props: HeadingProps) => {
    const theme = useTheme();
    const [ratio, setRatio] = useState(1);
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(Breakpoint.MEDIUM);
    const VECTOR_IMAGE = require('../../assets/image/female_engineer_vector5.png')
    const [headingStyle, setHeadingStyle] = useState<any>(headingLarge)
    const [headingStyle, setHeadingStyle] = useState<any>(headingLarge)

    useEffect(() => {
        setBreakpoint(props.breakpoint);
        setRatio(VECTOR_IMAGE.width / VECTOR_IMAGE.height);

        if (breakpoint === Breakpoint.LARGE){ 
            setHeadingStyle(headingLarge)
            console.log("Setting large heading style");
        } else if (breakpoint === Breakpoint.MEDIUM){
            setHeadingStyle(headingMedium)
        } else {
            setHeadingStyle(headingSmall)
        }
    }, [breakpoint]);

    return (
        <View style={headingStyle.parentView}>
            <View>
                <Text variant="displaySmall" style={headingStyle.title}>
                    Property Development
                </Text>
                <View style={headingStyle.svgView}>
                    <Svg style={{ flex: 1 }}>
                        {getSvgText(breakpoint, 'Subdivision Calculator') }
                    </Svg>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                
                <View style={{flex: 1}} />

                <View>
                    <Card style={headingStyle.card}>
                        <View style={{ width: '100%', aspectRatio: ratio }}>
                            <Card.Cover source={VECTOR_IMAGE} resizeMode={'contain'} style={{ backgroundColor: 'transparent' }} />
                        </View>
                        <View style={headingStyle.textView}>
                            <Card.Content>
                                <Text variant={breakpoint === Breakpoint.LARGE ? "headlineLarge" : breakpoint === Breakpoint.MEDIUM ? "headlineMedium" : "headlineSmall" } style={headingStyle.bodyText}>Subdivision feasibility calculator for buyers, developers and investors</Text>
                            </Card.Content>
                        </View>
                    </Card>
                    <View style={headingStyle.buttonView}>
                        <Button labelStyle={headingStyle.buttonText} buttonColor={clayPalette.brownOrange} mode="contained" onPress={props.handleNextPage}>Let's go!</Button>
                    </View>
                </View>

                <View style={{flex: 1}} />

            </View>
        </View>
    );
};

export default Heading;


