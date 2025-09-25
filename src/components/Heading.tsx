import React, {useState } from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import {HeadingImage} from "./HeadingImage";
import {headingStyle} from "../styles/heading"

interface HeadingProps {
  title: string
}

const Heading: React.FC<HeadingProps> = ({ title}) => {
  const [viewWidth, setViewWidth] = useState<number>(0);

  return (
        <View style={headingStyle.view} onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setViewWidth(width); }}>
          <Text variant="titleMedium" style={headingStyle.text}>
            {title}
          </Text>
        <HeadingImage parentWidth={viewWidth}></HeadingImage>
        </View>
  );
};

export default Heading;
