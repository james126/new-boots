import React, { useState} from 'react';
import { TextInput, Card } from 'react-native-paper';
import {calculatorCardStyle} from '../../styles/calculatorCardStyle'
import { DevCosts, defaultDevelopmentCosts } from '../../types/DevCosts';

const DevelopmentCosts = () => {
  const [costs, setCosts] = useState<DevCosts>(defaultDevelopmentCosts);

  const update = (info: DevCosts) => {
    setCosts(info)
  }

  return (
      <Card style={calculatorCardStyle.card}>
      <Card.Title title="Development Costs" titleStyle={calculatorCardStyle.title}/>
      <Card.Content>
        <TextInput
          label="Land Cost (NZD)"
          value={costs.landCost.toString()}
          onChangeText={v => setCosts({ ...costs, landCost: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Civil & Infrastructure (NZD)"
          value={costs.civilCost.toString()}
          onChangeText={v => setCosts({ ...costs, civilCost: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Construction Cost per sqm (NZD)"
          value={costs.constructionPerSqm.toString()}
          onChangeText={v => setCosts({ ...costs, constructionPerSqm: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Consultants & Design (NZD)"
          value={costs.consultantsCost.toString()}
          onChangeText={v => setCosts({ ...costs, consultantsCost: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Council Costs (NZD)"
          value={costs.councilCost.toString()}
          onChangeText={v => setCosts({ ...costs, councilCost: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Contingency (%)"
          value={costs.contingencyPercent.toString()}
          onChangeText={v => setCosts({ ...costs, contingencyPercent: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Marketing & Sales (NZD)"
          value={costs.marketingCost.toString()}
          onChangeText={v => setCosts({ ...costs, marketingCost: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Finance Rate (% p.a.)"
          value={costs.financeRate.toString()}
          onChangeText={v => setCosts({ ...costs, financeRate: parseFloat(v) || 0 })}
          keyboardType="numeric"
          style={calculatorCardStyle.input}
        />
      </Card.Content>
    </Card>
  );
};

export default DevelopmentCosts;
