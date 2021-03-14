import {Card} from "react-native-elements";
import * as React from "react";
import {Button, ScrollView, StyleSheet, TextInput, View} from "react-native";
import {ThoughtRecord} from "../../../../types/DashboardData";
import {Text} from "../../../Themed";
import {useDispatch, useSelector} from "react-redux";
import {
    addMoodAction,
    changeDashboardModeAction,
    MainTabModes,
    removeThoughtRecordSituationAction
} from "../../../../actions/thoughtRecordActions";
import {useFonts} from "@expo-google-fonts/rubik";
import {AppLoading} from "expo";
import App from "../../../../App";
import ReduxInput from "../../../../common/ReduxInput";

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function HotThoughtInfo({currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    let [fontsLoaded] = useFonts({
        'Rubik_400Regular': require('../../../../assets/fonts/Rubik-VariableFont_wght.ttf')
    })
    const thoughtRecord =  useSelector(
        (state: {thoughtRecordData: {thoughtRecords: ThoughtRecord[]}}) => {
            return state.thoughtRecordData.thoughtRecords[currentThoughtRecordID];
        });
    const dispatch = useDispatch();

    if (!fontsLoaded) {
        return <AppLoading/>
    } else {
        return(
            <ScrollView style={style.scroll}>
            <View>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, alignSelf: "center"}}>Hot Thought</Text>
                { thoughtRecord.automaticThoughts.map(thought => {  // thoughts view component
                    return(
                        <Card><Text>Description: <TextInput style={style.textInputStyle} placeholder={thought.description}/></Text>
                            <Text>Evidence for Hot Thought:
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={thought.hotThought && thought.hotThought.for.toString()}/>
                                    <Button title={"X"} onPress={() => {
                                        console.log("remove button pressed")
                                    }}/>
                            </Text>
                            <Button
                                title={"Add"}
                                onPress={() =>
                                    console.log("Add hot thought pressed")}>
                            </Button>
                            <Text>Evidence against Hot Thought:
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={thought.hotThought && thought.hotThought.against.toString()}/>
                                <Button title={"X"} onPress={() => {
                                    console.log("remove button pressed")
                                }}/>
                            </Text>
                            <Button
                                title={"Add"}
                                onPress={() =>
                                    console.log("Add hot thought pressed")}>
                            </Button>
                        </Card>
                    )
                })}
            </View>

            </ScrollView>
        )
    }


}

const style = StyleSheet.create({
    textInputStyle: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black'
    },
    scroll: {
        flex: 1
    }
})

export default HotThoughtInfo;