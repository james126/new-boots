import React, { useState } from 'react';
import { View } from 'react-native'
import { Card, Text, TextInput } from 'react-native-paper';
import { formCardStyle } from '../../styles/calculator/formCardStyle';
import { defaultProjectError, defaultProjectInfo, InputTypes, ProjectError, ProjectInfo } from '../../types/ProjectInfo';
import CustomInput from '../../util/CustomTextInput';
import { DatePickerModal } from 'react-native-paper-dates';
import { CustomButtonGroup } from '../../util/customButtonGroup';

const ProjectInformation = () => {
    const [info, setInfo] = useState<ProjectInfo>(defaultProjectInfo);
    const [error, setError] = useState<ProjectError>(defaultProjectError);
    const [displayError, setDisplayError] = useState<boolean>(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);

    const update = (info: ProjectInfo, err: ProjectError) => {
        setInfo(info)
        setError(err);
    }

    const dateHandler = (date: Date) => {
        setDate(date)
        return date;
    }

    return (
        <View style={formCardStyle.parentView}>
            <View>
                <Text variant="displaySmall" style={formCardStyle.title}>
                    Project Information
                </Text>
            </View>

            <View style={{ width: '100%', paddingLeft: 24, paddingRight: 24 }}>
                <View />
                <View>
                    <Card style={formCardStyle.card}>
                        <Card.Content style={{ marginTop: 0, paddingTop: 0 }}>
                            <CustomInput
                                label="Project name"
                                updateParent={((v, u) => update({ ...info, projectName: v }, { ...error, projectName: u }))}
                                errorText={'Project name required'}
                                inputType={InputTypes.TEXT}
                                displayError={displayError}
                            />
                            <CustomInput
                                label="Site Area (m²)"
                                updateParent={((v, u) => update({ ...info, siteArea: v }, { ...error, siteArea: u }))}
                                errorText={'Site area required'}
                                inputType={InputTypes.NUMBER}
                                displayError={displayError}
                            />
                            <CustomInput
                                label="Start Date"
                                updateParent={((v, u) => update({ ...info, startDate: v }, { ...error, startDate: u }))}
                                errorText={'Site date required'}
                                inputType={InputTypes.DATE}
                                displayError={displayError}
                            />
                            <CustomInput
                                label="Duration (months)"
                                updateParent={((v, u) => update({ ...info, duration: v }, { ...error, duration: u }))}
                                errorText={'Duration required'}
                                inputType={InputTypes.TEXT}
                                displayError={displayError}
                            />
                            <CustomInput
                                label="Start Date"
                                value={date ? date.toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                }) : ''}
                                mode="outlined"
                                onFocus={() => setOpen(true)} // Open picker when focused
                                right={<TextInput.Icon icon="calendar" onPress={() => setOpen(true)} />}
                                editable={false} // prevent manual typing
                            />
                            <DatePickerModal
                                locale="en"
                                mode="single"
                                visible={open}
                                date={date}
                                onDismiss={() => setOpen(false)}
                                onConfirm={(params) => {
                                    setOpen(false);
                                    setDate(dateHandler(params.date));
                                }}
                            />
                            <CustomButtonGroup />
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ flex: 2 }} />
            </View>
        </View>
    );
};

export default ProjectInformation;
