import * as React from 'react';
import {Image, StyleSheet, View} from "react-native";
import ThoughtRecords from "./ThoughtRecords";
import CreateThoughtRecordButton from "./CreateThoughtRecordButton";
import {DashboardData, dashboardDemoData} from "../../types/DashboardData";
// install SyncStorage
// import SyncStorage from 'sync-storage'


export const Dashboard = () =>  {
    // const dashboardData: DashboardData = JSON.parse(SyncStorage.get("CONST_Dashboard_DATA"))
    // SyncStorage.set("CONST_DASHBOARD_DATA", JSON.strinfy(dashboardData));

    const dashboardData: DashboardData = dashboardDemoData;
    return <>
        <View style={styles.getStartedContainer}>
            Anxious Mango
            <Image
                style={{width: 100, height: 100, marginBottom: 5}}
                source={require('../../mascot-1.png')}/>
            <ThoughtRecords/>
            <CreateThoughtRecordButton/>
        </View>
    </>
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
    },
});

export default Dashboard;



