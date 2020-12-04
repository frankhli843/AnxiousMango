import {Button, StyleSheet, View} from "react-native";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import  {MainTabModes} from "../../screens/MainTab";

type CreateThoughtRecordButtonProps = {
    setCurrentMode: any // TODO define this properly, it is a hook setter,
    title: string,
}

function MainTabNavButton({setCurrentMode, title}: CreateThoughtRecordButtonProps) {
    return <View style={style.buttonStyle}>
            <Button
                title={title}
                onPress={() => {setCurrentMode()}}
                color="#D39999"/>
        </View>

}

function NewThoughtRecord() {
    return <>
        <View>
            Hello, world!
        </View>
    </>
}
// stick button to bottom of screen
const style = StyleSheet.create({
    buttonStyle: {
        alignItems: "center",
        position: "relative",
        bottom:0,
        left:0,
    }
})

export default MainTabNavButton;