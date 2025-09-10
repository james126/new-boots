import React, { useState, useEffect } from 'react';
import { Card, Text, TextInput, Button, IconButton, useTheme } from 'react-native-paper';

interface Typology {
  name: string;
  units: number;
  size: number;
  price: number;
}

interface Props {
  onChange?: (typologies: Typology[]) => void;
}

const defaultTypologies: Typology[] = [
  { name: '2 Bedroom', units: 3, size: 75, price: 485000 },
  { name: '3 Bedroom', units: 2, size: 100, price: 615000 },
];

const UnitTypologies: React.FC<Props> = ({ onChange }) => {
  const [typologies, setTypologies] = useState<Typology[]>([...defaultTypologies]);
  const theme = useTheme();

  useEffect(() => {
    if (onChange) onChange(typologies);
  }, [typologies, onChange]);

  const addTypology = () => {
    setTypologies([...typologies, { name: 'New Type', units: 1, size: 85, price: 500000 }]);
  };
  const removeTypology = (index: number) => {
    if (typologies.length > 1) {
      setTypologies(typologies.filter((_, i) => i !== index));
    }
  };
  const updateTypology = (index: number, field: keyof Typology, value: string) => {
    const updated = [...typologies];
    if (field === 'units' || field === 'size' || field === 'price') {
      updated[index][field] = parseFloat(value) || 0;
    } else {
      updated[index][field] = value;
    }
    setTypologies(updated);
  };

  const inputStyle = { marginBottom: 8 };

  return (
    <Card style={{ marginVertical: 8, backgroundColor: theme.colors.surface }}>
      <Card.Title
        title={<Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>Unit Typologies</Text>}
      />
      <Card.Content style={{ flexDirection: 'column' }}>
        <Text variant="bodyMedium" style={{ marginBottom: 8 }}>
          Configure different unit types to optimise your development mix
        </Text>
        <Button mode="contained" onPress={addTypology} style={{ marginBottom: 12 }} icon="plus" buttonColor={theme.colors.primary} textColor="#fff">
          Add Typology
        </Button>
        {typologies.map((typ, idx) => (
          <Card key={typ.name + '-' + idx} style={{ marginBottom: 12, backgroundColor: theme.colors.surface, borderColor: theme.colors.primary, borderWidth: 1 }}>
            <Card.Content style={{ flexDirection: 'column' }}>
              <TextInput
                label="Type Name"
                value={typ.name}
                onChangeText={v => updateTypology(idx, 'name', v)}
                mode="outlined"
                style={inputStyle}
              />
              <TextInput
                label="Units"
                value={typ.units.toString()}
                onChangeText={v => updateTypology(idx, 'units', v)}
                keyboardType="numeric"
                mode="outlined"
                style={inputStyle}
              />
              <TextInput
                label="Size (sqm)"
                value={typ.size.toString()}
                onChangeText={v => updateTypology(idx, 'size', v)}
                keyboardType="numeric"
                mode="outlined"
                style={inputStyle}
              />
              <TextInput
                label="Sale Price (NZD)"
                value={typ.price.toString()}
                onChangeText={v => updateTypology(idx, 'price', v)}
                keyboardType="numeric"
                mode="outlined"
                style={inputStyle}
              />
              <IconButton
                icon="delete"
                onPress={() => {
                  removeTypology(idx);
                }}
                disabled={typologies.length === 1}
                style={{ marginTop: 4, alignSelf: 'flex-end' }}
                accessibilityLabel="Remove Typology"
                iconColor={theme.colors.accent || theme.colors.secondary}
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Content>
    </Card>
  );
};

export default UnitTypologies;
