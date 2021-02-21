import * as React from 'react';
import {Image, StyleSheet, View} from "react-native";
import {ThoughtRecord} from "../../types/DashboardData";
import ThoughtRecordList from "./ThoughtRecords/ThoughtRecordList";
import {Text} from "../Themed";
import {AppLoading} from "expo";
import {useFonts} from '@expo-google-fonts/rubik'
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

    let [fontsLoaded] = useFonts({
        'Rubik_400Regular': require('../../assets/fonts/Rubik-VariableFont_wght.ttf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return <>
            <View style={styles.getStartedContainer}>
                <Image
                    style={{width: 100, height: 100, marginBottom: 10, marginTop: 10}}
                    source={require('../../mascot-1.png')}/>
                {/*<Text style={{fontFamily: 'Rubik_400Regular', fontSize: 48}}>Anxious Mango</Text>*/}
                <ThoughtRecordList
                    goToThoughtRecord={goToThoughtRecord}
                    thoughtRecords ={thoughtRecords}/>
            </View>
        </>
    }

}

// why does the background colour not fill the whole screen?
const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        backgroundColor: "#E5E5E5",
    },
});

const titleStyles = StyleSheet.create({
    font: {
        fontFamily: 'Rubik',
        fontSize: 48
    }
})

export default Dashboard;



