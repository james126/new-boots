import React from "react"
import { View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { clayPalette, greyPalette } from "../styles/theme"
import { Button } from "react-native-paper"
import { formCardStyle } from "../styles/calculator/formCardStyle"

interface CustomButtonGroupProps {
    onReset?: () => void;
    onNext?: () => void;
}

export const CustomButtonGroup = ({ onReset, onNext }: CustomButtonGroupProps) => {
    return (
        <View style={formCardStyle.buttonView}>
            <View >
                <Button
                    mode="outlined"
                    compact={true}
                    icon={({ size, color }) => (
                        <MaterialCommunityIcons
                            name="delete-outline"
                            size={16}
                            color={greyPalette.grey700}
                        />
                    )}
                    contentStyle={formCardStyle.resetContentStyle}
                    labelStyle={[formCardStyle.buttonLabel, { color: greyPalette.grey700 }]}
                    onPress={onReset}  // Call the passed reset function
                    style={{ borderColor: greyPalette.grey700 }}>
                    reset
                </Button>
            </View>
            <View>
                <Button
                    mode="outlined"
                    compact={true}
                    icon={({ size, color }) => (
                        <MaterialCommunityIcons
                            name="arrow-right-thin-circle-outline"
                            size={16}
                            color={clayPalette.brownOrange}

                        />
                    )}
                    contentStyle={formCardStyle.resetContentStyle}
                    labelStyle={[formCardStyle.buttonLabel, { color: clayPalette.brownOrange }]}
                    onPress={onNext}  // Call the passed next function
                    style={{ borderColor: clayPalette.brownOrange }}>
                    next
                </Button>
            </View>
        </View>
    )
}