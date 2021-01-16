import {Text} from "../../../../Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {TextInput, StyleSheet, Button} from "react-native";
import HotThoughtInfo from "../HotThoughtInfo";
import {ThoughtRecord} from "../../../../../types/DashboardData";
import TitleInput from "./TitleInput";
import {useDispatch} from "react-redux";
import {changeDashboardModeAction, MainTabModes} from "../../../../../reducers";
import SituationInput from "./SituationInput";

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ThoughtRecordInfo({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecord = thoughtRecords[currentThoughtRecordID];
    const dispatch = useDispatch();
    return(
        <>
            <Text>Thought Record</Text>
            <Card>
                <Button
                    title={"Back to dashboard"}
                    onPress={()=>{
                        dispatch(changeDashboardModeAction(MainTabModes.Dashboard))
                    }}
                />
                <Text>{`Date Created: ${thoughtRecord.dateCreated}`}</Text>
                <TitleInput currentThoughtRecordID={currentThoughtRecordID}/>
                <SituationInput currentThoughtRecordID={currentThoughtRecordID}/>
                {/*<Text>Situation: <TextInput style={style.textInputStyle} placeholder={"Add situation"}/></Text>*/}
                <Text>Moods: </Text>
                {thoughtRecord.moods.map(mood => {
                    return(
                    <Card>
                        <Text>Description: <TextInput style={style.textInputStyle} placeholder={"Add a description"}/></Text>
                        <Text>Percentage: <TextInput style={style.textInputStyle} placeholder={"Add mood percentage here"}/> </Text>
                    </Card>)
                })}
                <Text>Automatic Thoughts: </Text>
                {thoughtRecord.automaticThoughts.map(autoThought => {
                    return(
                        <TextInput style={style.textInputStyle} placeholder={"Add automatic thought"}/>
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