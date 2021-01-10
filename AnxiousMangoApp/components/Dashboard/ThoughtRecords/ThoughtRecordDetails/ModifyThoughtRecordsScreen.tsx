import {Card} from "react-native-elements";
import * as React from "react";
import {StyleSheet, ScrollView, View} from "react-native";
import ThoughtRecordInfo from "./ThoughtRecordInfo/ThoughtRecordInfo";
import HotThoughtInfo from "./HotThoughtInfo";
import {ThoughtRecord} from "../../../../types/DashboardData";


type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function ModifyThoughtRecordsScreen({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps){
    const canEdit: boolean = false;
    return (
        <View style={styles.view}>
        <Card>
                <ScrollView style={styles.card}>
                    <ThoughtRecordInfo thoughtRecords={thoughtRecords} currentThoughtRecordID={currentThoughtRecordID}/>
                    <HotThoughtInfo thoughtRecords={thoughtRecords} currentThoughtRecordID={currentThoughtRecordID}/>
                </ScrollView>
            </Card>
        </View>

    )
}

const styles = StyleSheet.create ({
    card: {
        flex: 1
    },

    view: {
        flex: 1,
        height: '100%'
    }
})

export default ModifyThoughtRecordsScreen;