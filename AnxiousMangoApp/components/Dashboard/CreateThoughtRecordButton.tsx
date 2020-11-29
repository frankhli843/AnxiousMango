import {Button, View} from "react-native";
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

function CreateThoughtRecordButton({navigation}: {navigation: any}) {
    return <>
        <Button
            title="Create New Thought Record"
            onPress={() => navigation.navigate("Create")}
            color="#D39999"/>
            </>
}

function NewThoughtRecord() {
    return <>
        Hello, world!
    </>
}

const stack = createStackNavigator()

function NavStack(){
    return <>
        <stack.Navigator>
            <stack.Screen
                name="Home"
                component={CreateThoughtRecordButton}
            />
            <stack.Screen
                name="Create"
                component={NewThoughtRecord}
            />
        </stack.Navigator>
    </>
}

export default NavStack;