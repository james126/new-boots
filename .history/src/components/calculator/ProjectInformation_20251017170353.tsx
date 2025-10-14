import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native'
import { Card, Text, TextInput } from 'react-native-paper';
import { formCardStyle } from '../../styles/calculator/formCardStyle';
import { defaultProjectError, defaultProjectInfo, InputTypes, ProjectError, ProjectInfo } from '../../types/ProjectInfo';
import CustomInput, { CustomInputRef } from '../../util/CustomTextInput';
import { DatePickerModal } from 'react-native-paper-dates';
import { CustomButtonGroup } from '../../util/customButtonGroup';
import { enGB, registerTranslation } from 'react-native-paper-dates'

// Register the locale
registerTranslation('en-GB', enGB);

interface ProjectInformationProps {
    handleNextPage: () => void;
}

const ProjectInformation = (props: ProjectInformationProps) => {
    const [info, setInfo] = useState<ProjectInfo>(defaultProjectInfo);
    const [error, setError] = useState<ProjectError>(defaultProjectError);
    const [displayError, setDisplayError] = useState<boolean>(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);

    // Array of refs for all CustomInput components
    const inputRefs = useRef<(CustomInputRef | null)[]>([]);

    useEffect(() => {
        if (displayError) {
            // Force a re-render by updating a dummy state or using forceUpdate
        }
        }, [displayError, error]);

    const update = (info: ProjectInfo, err: ProjectError) => {
        console.log('Updating Project Information:', info, err);
        setInfo(info)
        setError(err);
    }

    const dateHandler = (date: Date) => {
        setDate(date)
        return date;
    }

    const resetInput = () => {
        setDisplayError(false);
        setInfo(defaultProjectInfo)
        inputRefs.current.forEach(ref => ref?.reset());
    };

const nextPage = () => {
    // Call validation on all inputs
    inputRefs.current.forEach(ref => ref?.nextPage());
    
    // Set display error
    setDisplayError(true);
    
    // Check errors after a short delay to allow state updates
    setTimeout(() => {
        if (!Object.values(error).includes(true)) {
            props.handleNextPage();
        }
    }, 10); // Small delay to ensure state updates have processed
};

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
                                ref={el => { inputRefs.current[0] = el; }}
                                label="Project name"
                                updateParent={((v, u) => update({ ...info, projectName: v }, { ...error, projectName: u }))}
                                errorText={'required'}
                                inputType={InputTypes.TEXT}
                                error={displayError}
                            />
                            <CustomInput
                                ref={el => { inputRefs.current[1] = el; }}
                                label="Site Area (m²)"
                                updateParent={((v, u) => update({ ...info, siteArea: v }, { ...error, siteArea: u }))}
                                errorText={'required'}
                                inputType={InputTypes.NUMBER}
                                error={displayError}
                            />
                            <CustomInput
                                ref={el => { inputRefs.current[2] = el; }}
                                label="Duration (months)"
                                updateParent={((v, u) => update({ ...info, duration: v }, { ...error, duration: u }))}
                                errorText={'required'}
                                inputType={InputTypes.TEXT}
                                error={displayError}
                            />
                            <CustomInput
                                ref={el => { inputRefs.current[3] = el; }}
                                label="Start Date"
                                value={date ? date.toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                }) : ''}
                                mode="outlined"
                                onFocus={() => setOpen(true)}
                                right={<TextInput.Icon icon="calendar" onPress={() => setOpen(true)} />}
                                editable={false}  // Make it non-editable since date should only be set via picker
                                
                                errorText={'required'}
                                error={displayError}
                            />
                            <DatePickerModal
                                locale="en-GB"
                                mode="single"
                                visible={open}
                                date={date}
                                onDismiss={() => setOpen(false)}
                                onConfirm={(params) => {
                                    setOpen(false);
                                    setDate(dateHandler(params.date));
                                }}
                            />
                            <CustomButtonGroup
                                onReset={resetInput}
                                onNext={nextPage}
                            />
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ flex: 2 }} />
            </View>
        </View>
    );
};

export default ProjectInformation;
