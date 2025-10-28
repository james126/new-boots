import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { headingStyle } from "../styles/headingStyle"
import Svg, { Text as SvgText } from 'react-native-svg';
import { useTheme } from 'react-native-paper';
import { clayPalette } from '../styles/theme';

const Heading = () => {
    const theme = useTheme();
    const [ratio, setRatio] = useState(1);
    const VECTOR_IMAGE = require('../../assets/image/female_engineer_vector5.png')

    useEffect(() => {
        setRatio(VECTOR_IMAGE.width / VECTOR_IMAGE.height);
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
                <View>
                    <Card style={headingStyle.card}>
                        <View style={{ width: '100%', aspectRatio: ratio }}>
                            <Card.Cover source={VECTOR_IMAGE} resizeMode={'contain'} style={{ backgroundColor: 'transparent' }} />
                        </View>
                        <View style={headingStyle.textView}>
                            <Card.Content >
                                <Text variant="headlineLarge" style={headingStyle.bodyText}>Subdivision feasibility calculator for buyers, developers and investors</Text>
                            </Card.Content>
                        </View>
                    </Card>
                    <View style={headingStyle.buttonView}>
                        <Button labelStyle={headingStyle.buttonText} buttonColor={clayPalette.brownOrange} mode="contained">Let's go!</Button>
                    </View>
                </View>
            </View>

        </View>
    );
};

const validateInput = (input: string | number | null) => {
    let errorState = false;

    if (input === null || input === undefined) {
        errorState = true;
    } else if (props.inputType === InputTypes.TEXT && input.toString().length < 1) {
        errorState = true;
    } else if (props.inputType === InputTypes.NUMBER && isNaN(Number(input))) {
        errorState = true;
    } else if (props.inputType === InputTypes.DATE) {
        // Handle both Date objects and string inputs
        if (input instanceof Date) {
            // Validate Date object
            errorState = isNaN(input.getTime());
        } else {
            // Validate string in DD/MM/YYYY format
            const dateStr = input.toString();
            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            
            if (!dateRegex.test(dateStr)) {
                errorState = true;
            } else {
                // Parse and validate the date
                const parts = dateStr.split('/');
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const year = parseInt(parts[2], 10);
                
                const testDate = new Date(year, month, day);
                errorState = (testDate.getDate() !== day || 
                             testDate.getMonth() !== month || 
                             testDate.getFullYear() !== year);
            }
        }
    }
    
    setHasError(errorState);
    return errorState;
};

export default Heading;


