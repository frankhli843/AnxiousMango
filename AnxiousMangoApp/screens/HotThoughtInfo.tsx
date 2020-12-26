import {Text} from "../components/Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {ThoughtRecord} from "../types/DashboardData";
import {TextInput, StyleSheet, Button} from "react-native";
import BalancedThoughtInfo from "./BalancedThoughtInfo";

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function HotThoughtInfo({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecord = thoughtRecords[currentThoughtRecordID];
    return(
        <>
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
                onPress={() => BalancedThoughtInfo}
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