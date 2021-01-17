import {Text} from "../../../../Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {TextInput, StyleSheet, Button} from "react-native";
import HotThoughtInfo from "../HotThoughtInfo";
import {ThoughtRecord} from "../../../../../types/DashboardData";
import TitleInput from "./TitleInput";
import {useDispatch, useSelector} from "react-redux";
import {
    addThoughtRecordSituationAction,
    changeDashboardModeAction,
    changeThoughtRecordSituationAction,
    changeThoughtRecordTitleAction,
    MainTabModes, removeThoughtRecordSituationAction
} from "../../../../../reducers";
import SituationInput from "./SituationInput";
import ReduxInput from "../../../../../common/ReduxInput";

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ThoughtRecordInfo({currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecord = useSelector(
        (state: {thoughtRecordData: {thoughtRecords: ThoughtRecord[]}}) => {
            return state.thoughtRecordData.thoughtRecords[currentThoughtRecordID];
    })
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
                <ReduxInput
                    label={"Title"}
                    placeHolder={"Input a title for your thought record."}
                    value={thoughtRecord ? thoughtRecord.title: ""}
                    onChangeTextFunc={(text) => {
                        dispatch(changeThoughtRecordTitleAction(text, currentThoughtRecordID))
                    }}
                />
                {/*<SituationInput currentThoughtRecordID={currentThoughtRecordID}/>*/}
                {
                    thoughtRecord.situationList.map((situation, i) => {
                        return(
                            <>
                                <ReduxInput
                                    label={"Situation"}
                                    placeHolder={"Input a situation for your thought record."}
                                    value={situation}
                                    onChangeTextFunc={(text) => {
                                        dispatch(changeThoughtRecordSituationAction(text, currentThoughtRecordID))
                                    }}
                                />
                                <Button title={"X"} onPress={()=>{
                                    dispatch(removeThoughtRecordSituationAction(currentThoughtRecordID, i))
                                }}/>
                            </>
                        )
                    })
                }
                <Button title={"Add"} onPress={()=>{
                    dispatch(addThoughtRecordSituationAction(currentThoughtRecordID))
                }}/>

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