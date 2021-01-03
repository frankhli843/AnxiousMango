import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Dashboard from "../components/Dashboard/Dashboard";
import {useState} from "react";
import {DashboardData, dashboardDemoData} from "../types/DashboardData";
import MainTabNavButton from "../components/Dashboard/ThoughtRecords/MainTabNavButton";
import ModifyThoughtRecordsScreen
  from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/ModifyThoughtRecordsScreen";
import { useDispatch } from 'react-redux'
import {addThoughtRecord} from '../reducers';
export enum MainTabModes {
  Dashboard ="CONST_DASHBOARD",
  ModifyThoughtRecord = "CONST_THOUGHT_RECORD"
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

export default function MainTab(this: any) {
  // currentMode is string, setCurrentMode (stringInput) => void
  const [currentMode, setCurrentMode] = useState(MainTabModes.Dashboard);
  const [currentThoughtRecordID, setCurrentThoughtRecordID] = useState(-1); // -1 means no thought record selected
  // TODO use this data to show a thought record
  const dashboardData: DashboardData = dashboardDemoData;
  const goToThoughtRecord = (currentThoughtRecordID: number) => {
    setCurrentMode(MainTabModes.ModifyThoughtRecord);
    setCurrentThoughtRecordID(currentThoughtRecordID);
  }

  const dispatch = useDispatch();
  dispatch(addThoughtRecord(
      { badThoughtRecordData: 'hi Monica'}
  ))
  return (
    <View>
      {
        currentMode === MainTabModes.Dashboard &&
        <>
          <Dashboard thoughtRecords={dashboardData.thoughtRecords} goToThoughtRecord={goToThoughtRecord.bind(this)}/>
          <MainTabNavButton
              setCurrentMode={() => {
                setCurrentThoughtRecordID(-1); // sets current to none so we know its a new thought record
                setCurrentMode(MainTabModes.ModifyThoughtRecord)
              }}
              title="Add Thought Record"
          />
        </>
      }
      {
        currentMode === MainTabModes.ModifyThoughtRecord &&
            <>
              <ModifyThoughtRecordsScreen
                  currentThoughtRecordID={currentThoughtRecordID}
                  thoughtRecords={dashboardData.thoughtRecords}/>
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
