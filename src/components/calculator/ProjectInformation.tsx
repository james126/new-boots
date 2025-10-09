import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import { Card, Text, TextInput, } from 'react-native-paper';
import { calculatorCardStyle } from '../../styles/calculatorCardStyle'
import { defaultProjectInfo, ProjectInfo } from '../../types/ProjectInfo';

const ProjectInformation = () => {
    const [info, setInfo] = useState<ProjectInfo>(defaultProjectInfo);

    const update = (info: ProjectInfo) => {
        setInfo(info)
    }

    return (
        <Card style={calculatorCardStyle.card}>
            <Card.Content style={{ marginTop: 0, paddingTop: 0 }}>
                <Text style={calculatorCardStyle.title}> Project Information</Text>

                <TextInput
                    label="Project Name"
                    value={info.projectName || ''}
                    onChangeText={v => update({ ...info, projectName: v })}
                    style={calculatorCardStyle.input}
                />
                <TextInput
                    label="Site Area (sqm)"
                    value={info.siteArea?.toString() || ''}
                    onChangeText={v => update({ ...info, siteArea: v === '' ? null : parseFloat(v) })}
                    keyboardType="numeric"
                    style={calculatorCardStyle.input}
                />
                <TextInput
                    label="Project Start Date"
                    value={info.startDate?.toString() || ''}
                    onChangeText={v => update({ ...info, startDate: v === '' ? null : parseFloat(v) })}
                    style={calculatorCardStyle.input}
                />
                <TextInput
                    label="Duration (months)"
                    value={info.duration?.toString() || ''}
                    onChangeText={v => update({ ...info, duration: v === '' ? null : parseFloat(v) })}
                    keyboardType="numeric"
                    style={calculatorCardStyle.input}
                />
            </Card.Content>
        </Card>);
};

export default ProjectInformation;
