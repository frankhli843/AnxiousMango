import {Text} from "../../../../Themed";
import * as React from "react";
import {TextInput, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {DashboardData, ThoughtRecord} from "../../../../../types/DashboardData";
import {changeThoughtRecordTitleAction} from "../../../../../reducers";
import ReduxInput from "../../../../../common/ReduxInput";

type modifyThoughtRecordScreenProps = {
    currentThoughtRecordID: number
}

function TitleInput({currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecordObject = useSelector(
        (state: {thoughtRecordData: {thoughtRecords: ThoughtRecord[]}}) => {
            return state.thoughtRecordData.thoughtRecords[currentThoughtRecordID];
        })
    const dispatch = useDispatch();

    return (
        <ReduxInput
            label={"Title"}
            placeHolder={"Input a title for your thought record."}
            value={thoughtRecordObject ? thoughtRecordObject.title: ""}
            onChangeTextFunc={(text) => {
                dispatch(changeThoughtRecordTitleAction(text, currentThoughtRecordID))
            }}
        />
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default TitleInput;