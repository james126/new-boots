import React, { useState, useEffect } from 'react';
import { Card, TextInput, useTheme, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface ProjectInfo {
  projectName: string;
  siteArea: string;
  startDate: string;
  duration: string;
}

interface Props {
  onChange?: (info: ProjectInfo) => void;
}

const styles = StyleSheet.create({
  card: { marginVertical: 8 },
  input: { marginBottom: 8 },
});

const ProjectInformation: React.FC<Props> = ({ onChange }) => {
  const [projectName, setProjectName] = useState('Rotorua');
  const [siteArea, setSiteArea] = useState('1000');
  const [startDate, setStartDate] = useState('2026-07-05');
  const [duration, setDuration] = useState('12');
  const theme = useTheme();

  useEffect(() => {
    if (onChange) {
      onChange({ projectName, siteArea, startDate, duration });
    }
  }, [projectName, siteArea, startDate, duration, onChange]);

  return (
    <Card elevation={5} style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Title
        title={<Text variant={'titleMedium'} style={{ color: theme.colors.tertiary}}>Project Information</Text>}
      />
      <Card.Content>
        <TextInput
          label="Project Name"
          value={projectName}
          onChangeText={setProjectName}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Site Area (sqm)"
          value={siteArea}
          onChangeText={setSiteArea}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Project Start Date"
          value={startDate}
          onChangeText={setStartDate}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Duration (months)"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
          mode="outlined"
        />
      </Card.Content>
    </Card>
  );
};

export default ProjectInformation;
