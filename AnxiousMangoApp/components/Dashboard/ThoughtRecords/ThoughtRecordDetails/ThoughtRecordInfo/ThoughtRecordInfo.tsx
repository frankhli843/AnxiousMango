import {Text} from "../../../../Themed";
import {Button, StyleSheet, View} from "react-native";
import * as React from "react";
import {ThoughtRecord} from "../../../../../types/DashboardData";
import {useDispatch, useSelector} from "react-redux";
import ReduxInput from "../../../../../common/ReduxInput";
import {useFonts} from "@expo-google-fonts/rubik";
import {AppLoading} from "expo";
import {
    addAutoThoughtAction,
    addMoodAction,
    addThoughtRecordSituationAction,
    changeAutoThoughtAction,
    changeDashboardModeAction,
    changeMoodAction,
    changeThoughtRecordSituationAction,
    changeThoughtRecordTitleAction, MainTabModes, removeAutoThoughtAction, removeMoodAction,
    removeThoughtRecordSituationAction
} from "../../../../../actions/thoughtRecordActions";
import { Card } from "react-native-elements";

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
                <Card>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, alignSelf: "center"}}>{thoughtRecord.title}</Text>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 24, alignSelf: "center"}}>{thoughtRecord.dateCreated}</Text>
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

                <Text style={{fontSize: 20}}>Moods </Text>
                {
                    thoughtRecord.moods.map((mood, moodIndex) => {
                        return (
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
                                // @ts-ignore
                                removeButton={
                                    <Button title={"X"} onPress={() => {
                                        dispatch(removeMoodAction(currentThoughtRecordID, moodIndex))
                                    }}/>
                                }
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

                <Text style={{fontSize: 20}}>Automatic Thoughts </Text>
                {thoughtRecord.automaticThoughts.map((autoThought, autoThoughtIndex) => {
                    return (
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
                            // @ts-ignore
                            removeButton={
                                <Button title={"X"} onPress={() => {
                                    dispatch(removeAutoThoughtAction(currentThoughtRecordID, autoThoughtIndex))
                                }}/>
                            }
                        />
                    )
                })}
                    <Button
                        title={"Add"}
                        onPress={() =>
                            dispatch(addAutoThoughtAction(currentThoughtRecordID))}>
                    </Button>
                </Card>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5"
    },
    card: {
        alignItems: "center"
    }
})

export default ThoughtRecordInfo;