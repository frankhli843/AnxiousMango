import {Card} from "react-native-elements";
import * as React from "react";
import {StyleSheet, ScrollView, View} from "react-native";
import ThoughtRecordInfo from "./ThoughtRecordInfo/ThoughtRecordInfo";
import HotThoughtInfo from "./HotThoughtInfo";
import {ThoughtRecord} from "../../../../types/DashboardData";
import {autofill} from "redux-form";
import BalancedThoughtInfo from "./BalancedThoughtInfo";


type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ModifyThoughtRecordsScreen({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps){
    const canEdit: boolean = false;
    return (
        <View style={styles.view}>
                <ScrollView style={styles.card}>
                    <ThoughtRecordInfo thoughtRecords={thoughtRecords} currentThoughtRecordID={currentThoughtRecordID}/>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    card: {
        flex: 1
    },

    view: {
        flex: 1,
        aspectRatio: 1.5,
        height: 500
    }
})

export default ModifyThoughtRecordsScreen;