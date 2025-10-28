import React, { useState, useEffect } from 'react';
import { Card, Text, TextInput, Button, IconButton, useTheme } from 'react-native-paper';
import { UnitTypology, defaultUnitTypologies } from '../../types/UnitTypologies';
import {calculatorCardStyle} from '../../styles/templates/calculatorCardStyle'
import {unitTypologiesStyle} from '../../styles/templates/unitTypologiesStyle'

const UnitTypologies
    = () => {
  const [typologies, setTypologies] = useState<UnitTypology[]>(defaultUnitTypologies);
  const theme = useTheme();

  const addTypology = () => {
    let usedIds = new Set(typologies.map(t => t.id))
    let candidate = 0;
    while (usedIds.has(candidate)){
      candidate++;
    }

    setTypologies([...typologies, {id: candidate, name: 'New Type', units: 0, size: 0, price: 0 }]);
  };

  const removeTypology = (id: number) => {
    if (typologies.length > 1) {
      setTypologies(typologies.filter((typ, index) => typ.id !== id));
    }
  };

  const updateTypology = (id: number, field: keyof UnitTypology, value: string) => {
    const updated = [...typologies];
    const typ = updated.find((value, index) => value.id === id)
    if (typ) {
      if (field === 'units' || field === 'size' || field === 'price') {
        typ[field] = Number(value);
      } else if (field === 'name') {
        typ[field] = value
      }
      setTypologies(updated);
    }
  };

  return (
    <Card style={calculatorCardStyle.card}>
      <Card.Title title="Unit Typologies" titleStyle={calculatorCardStyle.title}/>
      <Card.Content>
        <Text variant="bodyMedium" style={{ marginBottom: 8}}>
          Configure different unit types to optimise your development mix
        </Text>
        <Button mode="contained" onPress={addTypology} style={{ marginBottom: 12 }} icon="plus" buttonColor={theme.colors.primary} textColor="#fff">
          Add Typology
        </Button>
        {typologies.map((typ, idx) => (
          <Card key={typ.id} style={ unitTypologiesStyle.card }>
            <Card.Content style={{ flexDirection: 'column' }}>
              <TextInput
                label="Type Name"
                value={typ.name}
                onChangeText={v => updateTypology(typ.id, 'name', v)}
                style={calculatorCardStyle.input}
              />
              <TextInput
                label="Units"
                value={typ.units.toString()}
                onChangeText={v => updateTypology(typ.id, 'units', v)}
                keyboardType="numeric"
                style={calculatorCardStyle.input}
              />
              <TextInput
                label="Size (sqm)"
                value={typ.size.toString()}
                onChangeText={v => updateTypology(typ.id, 'size', v)}
                keyboardType="numeric"
                style={calculatorCardStyle.input}
              />
              <TextInput
                label="Sale Price (NZD)"
                value={typ.price.toString()}
                onChangeText={v => updateTypology(typ.id, 'price', v)}
                keyboardType="numeric"
                style={calculatorCardStyle.input}
              />
              <IconButton
                icon="delete"
                onPress={() => {
                  removeTypology(idx);
                }}
                disabled={typologies.length === 1}
                style={{ marginTop: 4, alignSelf: 'flex-end' }}
                accessibilityLabel="Remove Typology"
                iconColor={theme.colors.secondary}
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Content>
    </Card>
  );
};

export default UnitTypologies;
