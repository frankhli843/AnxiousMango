import * as React from "react";
import {Button, StyleSheet, View} from "react-native";
import set = Reflect.set;

type ThoughtRecordNavProps = { // navigate multi step process
    setCurrentMode: any
    title: string,
}

function ThoughtRecordNavButton({setCurrentMode, title}: ThoughtRecordNavProps) {
    return
    <View style={style.buttonStyle}>
        <Button
            title={title}
            onPress={() => setCurrentMode}
            color="#D39999"/>
    </View>
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

export default ThoughtRecordNavButton;

