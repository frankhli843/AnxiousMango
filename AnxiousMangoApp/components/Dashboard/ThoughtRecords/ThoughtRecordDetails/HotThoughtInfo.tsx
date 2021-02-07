import {Card} from "react-native-elements";
import * as React from "react";
import {Button, StyleSheet, TextInput} from "react-native";
import {ThoughtRecord} from "../../../../types/DashboardData";
import {Text} from "../../../Themed";
import {useDispatch} from "react-redux";
import {changeDashboardModeAction, MainTabModes} from "../../../../actions/thoughtRecordActions";

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function HotThoughtInfo({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecord = thoughtRecords[currentThoughtRecordID];
    const dispatch = useDispatch();
    return(
        <>
            <Text>Hot Thought</Text>
            { thoughtRecord.automaticThoughts.map(thought => {  // thoughts view component
                return<Card><Text>Description: <TextInput style={style.textInputStyle} placeholder={thought.description}/></Text>
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
            })}
            <Button
                onPress={() => {dispatch(changeDashboardModeAction(MainTabModes.BalancedThoughtInfo))}}
                title="Next"/>
        </>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default HotThoughtInfo;