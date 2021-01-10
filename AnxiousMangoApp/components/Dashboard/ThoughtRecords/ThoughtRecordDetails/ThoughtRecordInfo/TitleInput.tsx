import {Text} from "../../../../Themed";
import * as React from "react";
import {TextInput, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {DashboardData, ThoughtRecord} from "../../../../../types/DashboardData";
import {changeThoughtRecordTitleAction} from "../../../../../reducers";

type modifyThoughtRecordScreenProps = {
    currentThoughtRecordID: number
}

function TitleInput({currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughRecordObject = useSelector(
        (state: {thoughtRecordData: {thoughtRecords: ThoughtRecord[]}}) => {
            return state.thoughtRecordData.thoughtRecords[currentThoughtRecordID];
        })
    const dispatch = useDispatch();
    return(
        <Text>Title:
            <TextInput
                style={style.textInputStyle}
                placeholder={"Input a title for your thought record."}
                value={thoughRecordObject ? thoughRecordObject.title: ""}
                onChangeText={(text) => {
                    dispatch(changeThoughtRecordTitleAction(text, currentThoughtRecordID))
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

export default TitleInput;