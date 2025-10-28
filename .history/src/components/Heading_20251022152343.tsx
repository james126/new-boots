import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { headingStyle } from "../styles/headingStyle"
import Svg, { Text as SvgText } from 'react-native-svg';
import { useTheme } from 'react-native-paper';
import { clayPalette } from '../styles/theme';

const Heading = () => {
    const theme = useTheme();
    const [ratio, setRatio] = useState(1);
    const [screenData, setScreenData] = useState(Dimensions.get('window'));
    const VECTOR_IMAGE = require('../../assets/image/female_engineer_vector5.png')

    useEffect(() => {
        setRatio(VECTOR_IMAGE.width / VECTOR_IMAGE.height);
        
        const onChange = (result) => {
            setScreenData(result.window);
        };
        
        const subscription = Dimensions.addEventListener('change', onChange);
        return () => subscription?.remove();
    }, []);

    return (
        <View style={[headingStyle.parentView, { minHeight: screenData.height * 0.8 }]}>
            <View style={{ flex: 0, maxHeight: screenData.height * 0.25 }}>
                <Text variant="displaySmall" style={headingStyle.title}>
                    Property Development
                </Text>
                <View style={[headingStyle.svgView, { height: Math.min(120, screenData.height * 0.15) }]}>
                    <Svg style={{ flex: 1 }}>
                        <SvgText 
                            fontFamily='Montserrat-ExtraBold' 
                            fontSize={Math.min(38, screenData.width * 0.09)} 
                            stroke='white' 
                            strokeWidth='1' 
                            fill={theme.colors.secondary} 
                            x="50%" 
                            y="35" 
                            textAnchor="middle"
                        >
                            Feasibility
                        </SvgText>
                        <SvgText 
                            fontFamily='Montserrat-ExtraBold' 
                            fontSize={Math.min(38, screenData.width * 0.09)} 
                            stroke='white' 
                            strokeWidth='1' 
                            fill={theme.colors.secondary} 
                            x="50%" 
                            y="75" 
                            textAnchor="middle"
                        >
                            Calculator
                        </SvgText>
                    </Svg>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 20 }}>
                <Card style={[headingStyle.card, { maxHeight: screenData.height * 0.6 }]}>
                    <View style={{ 
                        width: '100%', 
                        aspectRatio: ratio,
                        maxHeight: screenData.height * 0.4,
                        overflow: 'hidden'
                    }}>
                        <Card.Cover 
                            source={VECTOR_IMAGE} 
                            resizeMode={'contain'} 
                            style={{ 
                                backgroundColor: 'transparent',
                                height: '100%',
                                width: '100%'
                            }} 
                        />
                    </View>
                    
                    <View style={[headingStyle.textView, { 
                        maxHeight: screenData.height * 0.15,
                        overflow: 'hidden'
                    }]}>
                        <Card.Content>
                            <Text 
                                variant={screenData.height < 700 ? "headlineMedium" : "headlineLarge"} 
                                style={[headingStyle.bodyText, {
                                    fontSize: Math.min(24, screenData.width * 0.06)
                                }]}
                                numberOfLines={3}
                                ellipsizeMode="tail"
                            >
                                Subdivision feasibility calculator for buyers, developers and investors
                            </Text>
                        </Card.Content>
                    </View>
                </Card>
                
                <View style={[headingStyle.buttonView, { marginTop: 20 }]}>
                    <Button 
                        labelStyle={[headingStyle.buttonText, {
                            fontSize: Math.min(16, screenData.width * 0.04)
                        }]} 
                        buttonColor={clayPalette.brownOrange} 
                        mode="contained"
                    >
                        Let's go!
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default Heading;


