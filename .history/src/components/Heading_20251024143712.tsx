import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { headingStyle } from "../styles/headingStyle"
import Svg, { Text as SvgText } from 'react-native-svg';
import { useTheme } from 'react-native-paper';
import { clayPalette } from '../styles/theme';
import { getBreakpoint, BreakpointHeights, Breakpoints, Breakpoint } from '../styles/breakpoints';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { getSvgText } from '../styles/svgTypology';

interface HeadingProps {
    handleNextPage: () => void;
}

const Heading = (props: HeadingProps) => {
    const theme = useTheme();
    const [ratio, setRatio] = useState(1);
    const [screenData, setScreenData] = useState(Dimensions.get('window'));
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(Breakpoint.MEDIUM);
    const VECTOR_IMAGE = require('../../assets/image/female_engineer_vector5.png')

    useEffect(() => {
        setRatio(VECTOR_IMAGE.width / VECTOR_IMAGE.height);
        
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setScreenData(window);
        });

        const { height, width } = screenData;
                
        setBreakpoint(getBreakpoint(height));
        
        return () => subscription?.remove();
    }, []);

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

            <View style={{ flex: 1, flexDirection: 'column' }}>
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
            </View>
        </View>
    );
};

export default Heading;


