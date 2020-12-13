import {Text} from "../components/Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {ThoughtRecord} from "../types/DashboardData";


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
                <Text>{`Title:${thoughtRecord.title}` }</Text>
                { thoughtRecord.automaticThoughts.map(thought => {  // thoughts view component
                    return<Card><Text>{JSON.stringify(thought)}</Text></Card>
                })}
            </Card>


        </>
    )

}

export default ModifyThoughtRecordsScreen;