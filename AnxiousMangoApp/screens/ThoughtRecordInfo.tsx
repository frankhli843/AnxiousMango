import {Text} from "../components/Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {ThoughtRecord} from "../types/DashboardData";
import {TextInput, StyleSheet, Button} from "react-native";
import HotThoughtInfo from "./HotThoughtInfo"

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ThoughtRecordInfo({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecord = thoughtRecords[currentThoughtRecordID];
    return(
        <>
            <Text>Thought Record</Text>
            <Card>
                <Text>{`Date Created: ${thoughtRecord.dateCreated}`}</Text>
                <Text>Title: <TextInput style={style.textInputStyle} placeholder={thoughtRecord.title}/></Text>
                <Text>Situation: <TextInput style={style.textInputStyle} placeholder={thoughtRecord.situation.toString()}/></Text>
                <Text>Moods: <TextInput style={style.textInputStyle} placeholder={thoughtRecord.moods.toString()}/></Text>
                <Text>Automatic Thoughts: <TextInput style={style.textInputStyle} placeholder={thoughtRecord.automaticThoughts.toString()}/></Text>
                <Button
                    title="Next"
                    onPress={HotThoughtInfo}/>
            </Card>
        </>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default ThoughtRecordInfo;