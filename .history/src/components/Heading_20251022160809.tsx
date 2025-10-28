import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { headingStyle } from "../styles/headingStyle"
import Svg, { Text as SvgText } from 'react-native-svg';
import { useTheme } from 'react-native-paper';
import { clayPalette } from '../styles/theme';
import { Breakpoints } from '../styles/breakpoints';

const Heading = () => {
    const theme = useTheme();
    const [ratio, setRatio] = useState(1);
    const [screenData, setScreenData] = useState(Dimensions.get('window'));
    const [breakpoint, setBreakpoint] = useState<Breakpoints>(Breakpoints);
    const VECTOR_IMAGE = require('../../assets/image/female_engineer_vector5.png')

    useEffect(() => {
        setRatio(VECTOR_IMAGE.width / VECTOR_IMAGE.height);
        
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setScreenData(window);
        });

        const { height, width } = screenData;
                
        if (height <= 667) {
            // Small phones (iPhone SE, iPhone 6/7/8, older Android phones)
            setBreakpoint('small')
        } else if (height <= 844) {
            // Medium phones (iPhone 12/13/14, most Android phones)
            setBreakpoint('medium')
        } else {
            // Large phones (iPhone Pro Max, Samsung Galaxy Ultra, etc.)
            setBreakpoint('large')
        }
        
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
                        <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} stroke='white' strokeWidth='1' fill={theme.colors.secondary} x="50%" y="35" textAnchor="middle">
                            Feasibility
                        </SvgText>
                        <SvgText fontFamily='Montserrat-ExtraBold' fontSize={38} stroke='white' strokeWidth='1' fill={theme.colors.secondary} x="50%" y="75" textAnchor="middle">
                            Calculator
                        </SvgText>
                    </Svg>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1 }} />
                <View>
                    <Card style={headingStyle.card}>
                        <View style={{ width: '100%', aspectRatio: ratio }}>
                            <Card.Cover source={VECTOR_IMAGE} resizeMode={'contain'} style={{ backgroundColor: 'transparent' }} />
                        </View>
                        <View style={headingStyle.textView}>
                            <Card.Content>
                                {/* <Text 
                                    variant={textConfig.variant} 
                                    style={textConfig.style}
                                    numberOfLines={3}
                                    ellipsizeMode="tail"
                                > */}
                                <Text variant="headlineLarge" style={headingStyle.bodyText}>Subdivision feasibility calculator for buyers, developers and investors</Text>
                            
                            </Card.Content>
                        </View>
                    </Card>
                    <View style={headingStyle.buttonView}>
                        <Button labelStyle={headingStyle.buttonText} buttonColor={clayPalette.brownOrange} mode="contained">Let's go!</Button>
                    </View>
                </View>
                <View style={{ flex: 2 }} />
            </View>
        </View>
    );
};

export default Heading;


