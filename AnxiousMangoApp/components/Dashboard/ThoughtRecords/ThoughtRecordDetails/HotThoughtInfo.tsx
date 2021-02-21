import {Card} from "react-native-elements";
import * as React from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {ThoughtRecord} from "../../../../types/DashboardData";
import {Text} from "../../../Themed";
import {useDispatch, useSelector} from "react-redux";
import {changeDashboardModeAction, MainTabModes} from "../../../../actions/thoughtRecordActions";
import {useFonts} from "@expo-google-fonts/rubik";
import {AppLoading} from "expo";
import App from "../../../../App";

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
            <View>
                <Text style={{fontFamily: 'Rubik_400Regular', fontSize: 36, alignSelf: "center"}}>Hot Thought</Text>
                { thoughtRecord.automaticThoughts.map(thought => {  // thoughts view component
                    return(
                        <Card><Text>Description: <TextInput style={style.textInputStyle} placeholder={thought.description}/></Text>
                            <Text>Evidence for Hot Thought:
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={thought.hotThought && thought.hotThought.for.toString()}/>
                            </Text>
                            <Text>Evidence against Hot Thought:
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={thought.hotThought && thought.hotThought.against.toString()}/></Text>
                        </Card>
                    )
                })}
                <Button
                    onPress={() =>
                        dispatch(changeDashboardModeAction(MainTabModes.BalancedThoughtInfo))}
                    title="Next"/>
            </View>
        )
    }


}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default HotThoughtInfo;