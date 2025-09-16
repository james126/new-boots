import React, { useState, useEffect } from 'react';
import { TextInput, useTheme, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import ContentCard from '../../styles/ContentCard';

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
  input: { marginBottom: 8},
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
    <ContentCard title="Project Information">
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
    </ContentCard>
  );
};

export default ProjectInformation;
