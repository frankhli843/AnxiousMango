import {Text} from "../../../../Themed";
import * as React from "react";
import {TextInput, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {DashboardData, ThoughtRecord} from "../../../../../types/DashboardData";
// @ts-ignore
import {changeThoughtRecordSituationAction, changeThoughtRecordTitleAction} from "../../../../../reducers";

type modifyThoughtRecordScreenProps = {
    currentThoughtRecordID: number
}

function SituationInput({currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecordObject = useSelector(
        (state: {thoughtRecordData: {thoughtRecords: ThoughtRecord[]}}) => {
            return state.thoughtRecordData.thoughtRecords[currentThoughtRecordID];
        })
    const dispatch = useDispatch();
    return(
        <Text>Situation:
            <TextInput
                style={style.textInputStyle}
                placeholder={"Input a situation for your thought record."}
                value={thoughtRecordObject ? thoughtRecordObject.situationList.toString() : ""}
                onChangeText={(text) => {
                    dispatch(changeThoughtRecordSituationAction(text, currentThoughtRecordID))
                } }
            />
        </Text>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default SituationInput;