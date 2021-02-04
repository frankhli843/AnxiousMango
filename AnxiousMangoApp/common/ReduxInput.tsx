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
    onChangeTextFunc: (newValue: string) => void,
    removeButton?: Node
}


function ReduxInput({
    label,
    placeHolder,
    value,
    onChangeTextFunc,
    removeButton
}: modifyThoughtRecordScreenProps) {
    return(

            <Text style={style.ReduxInputContainer}>
                {label}
                <TextInput
                    multiline={true}
                    style={style.textInputStyle}
                    placeholder={placeHolder}
                    value={value}
                    onChangeText={(text) => {
                        onChangeTextFunc(text)
                    } }
                />
                {removeButton}
            </Text>
    )
}

const style = StyleSheet.create({
    ReduxInputContainer: {
        display:"flex",
        flexDirection: "row",
        width: "90%",
        minHeight: 35
    },
    textInputStyle: {
        borderWidth: 1,
        marginLeft: '10px',
        width: '100%',
        paddingLeft: '10px',
        borderColor: 'black',

    }
})

export default ReduxInput;