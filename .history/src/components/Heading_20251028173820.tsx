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
import { sharedLarge } from '../styles/shared/sharedLarge';
import { sharedMedium } from '../styles/shared/sharedMedium';
import { sharedSmall } from '../styles/shared/sharedSmall';

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
    const [sharedStyle, setSharedStyle] = useState<any>(sharedMedium)

    useEffect(() => {
        setBreakpoint(props.breakpoint);
        setRatio(VECTOR_IMAGE.width / VECTOR_IMAGE.height);

        if (breakpoint === Breakpoint.LARGE){ 
            setHeadingStyle(headingLarge)
            setSharedStyle(sharedLarge)
            console.log("Setting large heading style");
        } else if (breakpoint === Breakpoint.MEDIUM){
            setHeadingStyle(headingMedium)
            setSharedStyle(sharedMedium)
        } else {
          console.log("Setting small heading style ${breakpoint}");
            setHeadingStyle(headingSmall)
            setSharedStyle(sharedSmall)
        }
    }, [breakpoint]);

    return (
        <View style={headingStyle.parentView}>
            <View>
                <Text variant="displaySmall" style={[sharedStyle.title, sharedStyle.displaySmall]}>
                    Property Development
                </Text>
                <View style={headingStyle.svgView}>
                    <Svg style={{ flex: 1 }}>
                        {getSvgText(breakpoint, 'Subdivision Calculator') }
                    </Svg>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                
                <View style={{flex: 1}} />

                <View>
                    <Card style={headingStyle.card}>
                        <View style={{ width: '100%', aspectRatio: ratio }}>
                            <Card.Cover source={VECTOR_IMAGE} resizeMode={'contain'} style={{ backgroundColor: 'transparent' }} />
                        </View>
                        <View style={headingStyle.textView}>
                            <Card.Content>
                                <Text style={[sharedStyle.titleMedium, headingStyle.bodyText]}>Subdivision feasibility calculator for buyers, developers and investors</Text>
                            </Card.Content>
                        </View>
                    </Card>
                    <View style={headingStyle.buttonView}>
                        <Button style={{paddingTop: 5, paddingBottom: 5, }} labelStyle={headingStyle.buttonText} buttonColor={clayPalette.brownOrange} mode="contained" onPress={props.handleNextPage}>Let's go!</Button>
                    </View>
                </View>

                <View style={{flex: 2}} />

            </View>
        </View>
    );
};

export default Heading;


