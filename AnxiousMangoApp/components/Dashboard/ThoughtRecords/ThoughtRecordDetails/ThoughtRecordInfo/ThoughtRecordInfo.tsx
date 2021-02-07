import {Text} from "../../../../Themed";
import {Button, StyleSheet, View} from "react-native";
import * as React from "react";
import {ThoughtRecord} from "../../../../../types/DashboardData";
import {useDispatch, useSelector} from "react-redux";
import ReduxInput from "../../../../../common/ReduxInput";
import {useFonts} from "@expo-google-fonts/rubik";
import {AppLoading} from "expo";
import {
    addMoodAction,
    addThoughtRecordSituationAction,
    changeAutoThoughtAction,
    changeDashboardModeAction,
    changeMoodAction,
    changeThoughtRecordSituationAction,
    changeThoughtRecordTitleAction, MainTabModes,
    removeThoughtRecordSituationAction
} from "../../../../../actions/thoughtRecordActions";

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ThoughtRecordInfo({currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecord = useSelector(
        (state: {thoughtRecordData: {thoughtRecords: ThoughtRecord[]}}) => {
            return state.thoughtRecordData.thoughtRecords[currentThoughtRecordID];
    })
    let [fontsLoaded] = useFonts({
        'Rubik_400Regular': require('../../../../../assets/fonts/Rubik-VariableFont_wght.ttf')
    })
    const dispatch = useDispatch();

    if (!fontsLoaded) {
        return <AppLoading/>
    } else {
        return (
            <View style={styles.container}>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, alignSelf: "center"}}>{thoughtRecord.title}</Text>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 24, alignSelf: "center"}}>{thoughtRecord.dateCreated}</Text>
                <Button
                    title={"Back to dashboard"}
                    onPress={() => {
                        dispatch(changeDashboardModeAction(MainTabModes.Dashboard))
                    }}
                />
                <Text>{`Date Created: ${thoughtRecord.dateCreated}`}</Text>
                <ReduxInput
                    label={"Title"}
                    placeHolder={"Input a title for your thought record."}
                    value={thoughtRecord ? thoughtRecord.title : ""}
                    onChangeTextFunc={(text) => {
                        dispatch(changeThoughtRecordTitleAction(text, currentThoughtRecordID))
                    }}
                />
                {/*<SituationInput currentThoughtRecordID={currentThoughtRecordID}/>*/}
                {
                    thoughtRecord.situationList.map((situation, i) => {

                        return (
                            <>
                                <ReduxInput
                                    label={"Situation"}
                                    placeHolder={"Input a situation for your thought record."}
                                    value={situation}
                                    onChangeTextFunc={(text) => {
                                        dispatch(changeThoughtRecordSituationAction(text, currentThoughtRecordID, i))
                                    }}
                                    // @ts-ignore
                                    removeButton={
                                        <Button title={"X"} onPress={() => {
                                            dispatch(removeThoughtRecordSituationAction(currentThoughtRecordID, i))
                                        }}/>
                                    }
                                />

                            </>
                        )
                    })
                }
                <Button title={"Add"} onPress={() => {
                    dispatch(addThoughtRecordSituationAction(currentThoughtRecordID))
                }}/>

                {/*<Text>Situation: <TextInput style={style.textInputStyle} placeholder={"Add situation"}/></Text>*/}
                <Text>Moods: </Text>
                {
                    thoughtRecord.moods.map((mood, moodIndex) => {
                        return (
                            // <Text>Description: <TextInput style={style.textInputStyle} placeholder={"Add a description"}/></Text>
                            // <Text>Percentage: <TextInput style={style.textInputStyle} placeholder={"Add mood percentage here"}/> </Text>
                            <ReduxInput
                                // separates diff't elements so when something is deleted, react knows which is which
                                key={`Mood-input-${currentThoughtRecordID}-${moodIndex}`}
                                label={`Mood ${moodIndex + 1}`}
                                placeHolder={"Input a mood"}
                                value={mood.description}
                                onChangeTextFunc={(textInput) => {
                                    dispatch(changeMoodAction(
                                        currentThoughtRecordID,
                                        moodIndex,
                                        textInput,
                                        mood.percentage
                                    ))
                                }}
                            />
                        )
                    }
                    )
                }
                <Button
                    title={"Add"}
                    onPress={() =>
                        dispatch(addMoodAction(currentThoughtRecordID))}>
                </Button>

                <Text>Automatic Thoughts: </Text>
                {thoughtRecord.automaticThoughts.map((autoThought, autoThoughtIndex) => {
                    return (
                        // <TextInput style={style.textInputStyle} placeholder={"Add automatic thought"}/>
                        <ReduxInput
                            key={`Auto-thought-${currentThoughtRecordID}-${autoThoughtIndex}`}
                            label={"Automatic Thought"}
                            placeHolder={"Input an automatic thought"}
                            value={autoThought.description}
                            onChangeTextFunc={(textInput) => {
                                dispatch(changeAutoThoughtAction(
                                    currentThoughtRecordID,
                                    autoThoughtIndex,
                                    textInput,
                                autoThought.hotThought
                                ))
                            }}
                        />
                    )
                })}
                <Button
                    onPress={() => dispatch(changeDashboardModeAction(MainTabModes.HotThoughtInfo))}
                    title="Next"
                    color="#D39999"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#E5E5E5",
    }
})

export default ThoughtRecordInfo;