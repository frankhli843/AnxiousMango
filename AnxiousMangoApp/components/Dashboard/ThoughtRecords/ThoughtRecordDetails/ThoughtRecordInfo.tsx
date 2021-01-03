import {Text} from "../../../Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {TextInput, StyleSheet, Button} from "react-native";
import HotThoughtInfo from "./HotThoughtInfo";
import {ThoughtRecord} from "../../../../types/DashboardData";

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
                <Text>Moods: </Text>
                {thoughtRecord.moods.map(mood => {
                    return(
                    <Card>
                        <Text>Description: <TextInput style={style.textInputStyle} placeholder={mood.description}/></Text>
                        <Text>Percentage: <TextInput style={style.textInputStyle} placeholder={mood.percentage.toString()}/> </Text>
                    </Card>)
                })}
                <Text>Automatic Thoughts: </Text>
                {thoughtRecord.automaticThoughts.map(autoThought => {
                    return(
                        <TextInput style={style.textInputStyle} placeholder={autoThought.description}/>
                    )
                })}
            </Card>
    <Button
        onPress={() => HotThoughtInfo}
        title="Next"
        color="#D39999"
    />
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