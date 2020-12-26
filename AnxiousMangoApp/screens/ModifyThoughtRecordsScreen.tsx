import {Text} from "../components/Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {ThoughtRecord} from "../types/DashboardData";
import {TextInput, StyleSheet} from "react-native";
import ThoughtRecordInfo from "./ThoughtRecordInfo";


type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ModifyThoughtRecordsScreen({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps){
    const canEdit: boolean = false;
    const thoughtRecord = thoughtRecords[currentThoughtRecordID];
    return (
        <>
            <Card>
                <ThoughtRecordInfo thoughtRecords={thoughtRecords} currentThoughtRecordID={currentThoughtRecordID}/>
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

export default ModifyThoughtRecordsScreen;