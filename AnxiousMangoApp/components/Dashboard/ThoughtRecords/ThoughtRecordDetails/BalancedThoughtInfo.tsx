import {Text} from "../../../Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {ScrollView, StyleSheet, TextInput, View} from "react-native";
import {ThoughtRecord} from "../../../../types/DashboardData";
import {useSelector} from "react-redux";
import {useFonts} from "@expo-google-fonts/rubik";
import {AppLoading} from "expo";

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

    if (!fontsLoaded) {
        return <AppLoading/>
    } else {
        return (
            <ScrollView style={styles.card}>
                <View style={styles.container}/>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, alignSelf: "center"}}>Balanced
                    Thoughts</Text>
                {thoughtRecord.automaticThoughts.map(hotThought => {
                    return (
                        <Card>
                            <Text>
                                Hot Thought:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={hotThought.hotThought?.description}/>
                            </Text>
                            <Text>
                                Evidence for:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={hotThought.hotThought?.for.toString()}/>
                            </Text>
                            <Text>
                                Evidence against:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={hotThought.hotThought?.against.toString()}/>
                            </Text>
                            <Text>
                                Balanced thought:
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder={hotThought.hotThought?.balancedThought}/>
                            </Text>
                        </Card>
                    )
                })
                }
                <View/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: '90%',
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