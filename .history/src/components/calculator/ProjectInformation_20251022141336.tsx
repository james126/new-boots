import React, { useRef, useState } from 'react';
import { View } from 'react-native'
import { Card, Text, TextInput, HelperText } from 'react-native-paper';
import { formCardStyle } from '../../styles/calculator/formCardStyle';
import { defaultProjectError, defaultProjectInfo, InputTypes, ProjectError, ProjectInfo } from '../../types/ProjectInfo';
import CustomInput, { CustomInputRef } from '../../util/CustomTextInput';
import { DatePickerModal } from 'react-native-paper-dates';
import { enGB, registerTranslation } from 'react-native-paper-dates';
import { CustomButtonGroup } from '../../util/customButtonGroup';

// Register the locale
registerTranslation('en-GB', enGB);

interface ProjectInformationProps {
    handleNextPage: () => void;
}

const ProjectInformation = (props: ProjectInformationProps) => {
    const [info, setInfo] = useState<ProjectInfo>(defaultProjectInfo);
    const [error, setError] = useState<ProjectError>(defaultProjectError);
    const [displayError, setDisplayError] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined); // Add this

    // Array of refs for all CustomInput components
    const inputRefs = useRef<(CustomInputRef | null)[]>([]);

    const update = (info: ProjectInfo, err: ProjectError) => {
        setInfo(info)
        setError(err);
    }

    const resetInput = () => {
        setDisplayError(false);
        setInfo(defaultProjectInfo);
        setError(defaultProjectError);
        inputRefs.current.forEach(ref => ref?.reset());
    };

    const nextPage = () => {
        // Call validation on all inputs
        inputRefs.current.forEach(ref => ref?.nextPage());

        // Set display error for UI feedback
        setDisplayError(true);


        // Update error state with date validation
        setError(prev => {
            const newError = { ...prev };

            // Check all errors after state update
            setTimeout(() => {
                if (!Object.values(newError).includes(true)) {
                    props.handleNextPage();
                }
            }, 100);

            return newError;
        });
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
                                viewStyle={formCardStyle.CustomTextInputViewFirstInstance}
                            />
                            <CustomInput
                                ref={el => { inputRefs.current[1] = el; }}
                                label="Site Area (m²)"
                                updateParent={((v, u) => update({ ...info, siteArea: v }, { ...error, siteArea: u }))}
                                errorText={'required'}
                                inputType={InputTypes.NUMBER}
                                error={displayError}
                                viewStyle={formCardStyle.CustomTextInputViewRemainingInstances}
                            />
                            <CustomInput
                                ref={el => { inputRefs.current[2] = el; }}
                                label="Duration (months)"
                                updateParent={((v, u) => update({ ...info, duration: v }, { ...error, duration: u }))}
                                errorText={'required'}
                                inputType={InputTypes.NUMBER}
                                error={displayError}
                                viewStyle={formCardStyle.CustomTextInputViewRemainingInstances}
                            />

                            {/* Date Input - Using regular TextInput for better date picker integration */}
                            <View style={formCardStyle.CustomTextInputViewRemainingInstances}>
                                <CustomInput
                                    ref={el => { inputRefs.current[3] = el; }}
                                    label="Start Date"
                                    value={date}
                                    updateParent={((v, u) => update({ ...info, startDate: v }, { ...error, startDate: u }))}
                                    onFocus={() => setOpen(true)}
                                    right={<TextInput.Icon icon="calendar" onPress={() => setOpen(true)} />}
                                    editable={false}
                                    inputType={InputTypes.DATE}
                                    errorText={'required'}
                                    error={displayError}
                                    viewStyle={formCardStyle.CustomTextInputViewRemainingInstances}
                                />
                            </View>

                            <DatePickerModal
                                locale="en-GB"
                                mode="single"
                                visible={open}
                                date={date}
                                onDismiss={() => setOpen(false)}
                                onConfirm={(params) => {
                                    setOpen(false);
                                    setDate(params.date);
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
