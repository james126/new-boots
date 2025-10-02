import React, {useState, useEffect } from 'react';
import { Image, View} from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import {headingStyle} from "../styles/heading"

const Heading = () => {
   const [ratio, setRatio] = useState(1);

  useEffect(() => {
    const img = Image.resolveAssetSource(require('../../assets/image/underconstruction.jpg'));
    setRatio(img.width / img.height);
  }, []);

  return (
        <View style={headingStyle.view} >
          <Text variant="titleMedium" style={headingStyle.heading}>
            Property Development
          </Text>
            <Text variant="titleMedium" style={headingStyle.title}>
            Feasibility Calculator
            </Text>
            
            <View style={{display: 'flex', backgroundColor: 'blue'}}>
            <Card>

              <View style={{ width: '100%', aspectRatio: ratio }}>
              <Card.Cover source={require('../../assets/image/underconstruction.jpg')} resizeMode={'contain'} style={{width: '100%', height: '100%'}}/>
              </View>  
                <Card.Content>
                    <Text variant="titleLarge">Subdivision Feasibility Calculator for Buyers, Developers and Investors</Text>
                </Card.Content>
                <Card.Actions>
                    <Button>Let's go!</Button>
                </Card.Actions>
            </Card>
            </View>
            
        </View>
  );
};

export default Heading;


