import {Text} from "../../../Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {Button, ScrollView, StyleSheet, TextInput, View} from "react-native";
import {ThoughtRecord} from "../../../../types/DashboardData";
import {useSelector} from "react-redux";
import {useFonts} from "@expo-google-fonts/rubik";
// @ts-ignore

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function BalancedThoughtInfo({currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    let [fontsLoaded] = useFonts({
        'Rubik_400Regular': require('../../../../assets/fonts/Rubik-VariableFont_wght.ttf')
    })
    const thoughtRecord = useSelector(
        (state: { thoughtRecordData: { thoughtRecords: ThoughtRecord[] } }) => {
            return state.thoughtRecordData.thoughtRecords[currentThoughtRecordID];
        })
        return (
            <ScrollView style={styles.card}>
                <View style={styles.container}/>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, alignSelf: "center"}}>Balanced
                    Thoughts</Text>
                {thoughtRecord.automaticThoughts.map((hotThought, i) => {
                    return (
                        <Card>
                            <Text>
                                Hot Thought:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={thoughtRecord.automaticThoughts[i].description}/>
                            </Text>
                            <Text>
                                Evidence for:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={hotThought.hotThought?.for.toString()}/>
                                <Button title={"X"} onPress={() => {
                                    console.log("remove button pressed")
                                }}/>
                            </Text>
                            <Text>
                                Evidence against:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={hotThought.hotThought?.against.toString()}/>
                                <Button title={"X"} onPress={() => {
                                    console.log("remove button pressed")
                                }}/>
                            </Text>
                            <Text>
                                Balanced thought:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={hotThought.hotThought?.balancedThought.toString()}/>
                                <Button title={"X"} onPress={() => {
                                    console.log("remove button pressed")
                                }}/>
                            </Text>
                            <Button
                                title={"Add"}
                                onPress={() =>
                                    console.log("Add balanced thought pressed")}>
                            </Button>
                        </Card>
                    )
                })
                }
                <View/>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: '88%',
        borderWidth: 1,
        borderColor: 'black'
    },
    container: {
        alignItems: "center",
        backgroundColor: "#E5E5E5",
    },
    card: {
        flex: 1
    },
})



export default BalancedThoughtInfo;