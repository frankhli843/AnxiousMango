import {Text} from "../components/Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {ThoughtRecord} from "../types/DashboardData";
import {TextInput} from "react-native";


type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ModifyThoughtRecordsScreen({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps){
    const canEdit: boolean = false;
    const thoughtRecord = thoughtRecords[currentThoughtRecordID];
    return (
        <>
            <Text>Thought Record</Text>
            <Card>
                <Text>{`Date Created: ${thoughtRecord.dateCreated}`}</Text>
                <Text>Title: <TextInput placeholder={thoughtRecord.title}/></Text>
                { thoughtRecord.automaticThoughts.map(thought => {  // thoughts view component
                    return<Card><Text>Description: <TextInput placeholder={thought.description}/></Text>
                        <Text>Evidence for Hot Thought: <TextInput placeholder={thought.hotThought.for}/></Text>
                        <Text>Evidence against Hot Thought: <TextInput placeholder={thought.hotThought.against}/></Text></Card>
                })}
            </Card>


        </>
    )

}

export default ModifyThoughtRecordsScreen;