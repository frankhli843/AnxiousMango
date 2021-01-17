import * as React from "react";
import {TextInput, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {ThoughtRecord} from "../types/DashboardData";
import {changeThoughtRecordTitleAction} from "../reducers";
import {Text} from '../components/Themed'

type modifyThoughtRecordScreenProps = {
    label: string,
    placeHolder: string,
    value: string,
    onChangeTextFunc: (newValue: string) => void
}


function ReduxInput({
    label,
    placeHolder,
    value,
    onChangeTextFunc
}: modifyThoughtRecordScreenProps) {
    return(
        <Text>{label}
            <TextInput
                style={style.textInputStyle}
                placeholder={placeHolder}
                value={value}
                onChangeText={(text) => {
                    onChangeTextFunc(text)
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

export default ReduxInput;