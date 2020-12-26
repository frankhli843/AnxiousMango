import {Text} from "../components/Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {ThoughtRecord} from "../types/DashboardData";
import {TextInput, StyleSheet, Button} from "react-native";
import BalancedThoughtInfo from "./BalancedThoughtInfo";

function HotThoughtInfo() {
    return(
        <>
            <Button title="Next" onPress={BalancedThoughtInfo}/>
        </>
    )
}

export default HotThoughtInfo;