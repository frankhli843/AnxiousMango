import * as React from 'react';
import {Image, StyleSheet, View} from "react-native";
import ThoughtRecords from "./ThoughtRecords";
import CreateThoughtRecordButton from "./MainTabNavButton";
import {DashboardData, dashboardDemoData, ThoughtRecord} from "../../types/DashboardData";
// install SyncStorage
// import SyncStorage from 'sync-storage'

type DashboardProps = {
    thoughtRecords: ThoughtRecord[],
    goToThoughtRecord: (id: number) => void,
}

export const Dashboard = ({ thoughtRecords, goToThoughtRecord }: DashboardProps) =>  {
    // TODO make it so that you can save a string and retrieve it once the app is refreshed
    // const dashboardData: DashboardData = JSON.parse(SyncStorage.get("CONST_Dashboard_DATA"))
    // SyncStorage.set("CONST_DASHBOARD_DATA", JSON.stringify(dashboardData));

    // TODO use this data to show a thought record


    return <>
        <View style={styles.getStartedContainer}>
            Anxious Mango
            <Image
                style={{width: 100, height: 100, marginBottom: 5}}
                source={require('../../mascot-1.png')}/>
            <ThoughtRecords
                goToThoughtRecord={goToThoughtRecord}
                thoughtRecords ={thoughtRecords}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
    },
});

export default Dashboard;



