import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Card} from "react-native-elements";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Dashboard from "../components/Dashboard/Dashboard";
import {useState} from "react";
import MainTabNavButton from "../components/Dashboard/MainTabNavButton";
import {DashboardData, dashboardDemoData} from "../types/DashboardData";
import ModifyThoughtRecordsScreen from "./ModifyThoughtRecordsScreen";

export enum MainTabModes {
  Dashboard ="CONST_DASHBOARD",
  ThoughtRecord = "CONST_THOUGHT_RECORD"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function MainTab() {
  // currentMode is string, setCurrentMode (stringInput) => void
  const [currentMode, setCurrentMode] = useState(MainTabModes.Dashboard);

  // TODO use this data to show a thought record
  const dashboardData: DashboardData = dashboardDemoData;

  return (
    <View>
      {  // if its dashboard then show Dashborad otherwise show Thought Record
        currentMode === MainTabModes.Dashboard
            ? <>
              <Dashboard />
              <MainTabNavButton
                  setCurrentMode={() => {setCurrentMode(MainTabModes.ThoughtRecord)}}
                  title="Add Thought Record"
                />
            </>
            : <>

              <ModifyThoughtRecordsScreen thoughtRecords={dashboardData.thoughtRecords}/>
              <MainTabNavButton
                  setCurrentMode={() => {setCurrentMode(MainTabModes.Dashboard)}}
                  title="Back to dashboard"
              />
            </>
      }

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
