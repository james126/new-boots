import React, {useState} from 'react';
import {Card, TextInput} from 'react-native-paper';
import {ProjectInfo, defaultProjectInfo} from '../../types/ProjectInfo';
import {calculatorCardStyle} from '../../styles/calculatorCardStyle'

const ProjectInformation = () => {
  const [info, setInfo] = useState<ProjectInfo>(defaultProjectInfo);

  const update = (info: ProjectInfo) => {
      setInfo(info)
  }

  return (
      <Card style={calculatorCardStyle.card}>
      <Card.Title title="Project Information" titleStyle={calculatorCardStyle.title}/>
      <Card.Content>
        <TextInput
          label="Project Name"
          value={info.projectName || ''}
          onChangeText={v => update({...info, projectName: v})}
          mode="outlined"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Site Area (sqm)"
          value={info.siteArea?.toString() || ''}
          onChangeText={v => update({...info, siteArea: v === '' ? null : parseFloat(v)})}
          keyboardType="numeric"
          mode="outlined"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Project Start Date"
          value={info.startDate?.toString() || ''}
          onChangeText={v => update({...info, startDate: v === '' ? null : parseFloat(v)})}
          mode="outlined"
          style={calculatorCardStyle.input}
        />
        <TextInput
          label="Duration (months)"
          value={info.duration?.toString() || ''}
          onChangeText={v => update({...info, duration: v === '' ? null : parseFloat(v)})}
          keyboardType="numeric"
          mode="outlined"
          style={calculatorCardStyle.input}
        />
      </Card.Content>
    </Card>);
};

export default ProjectInformation;
