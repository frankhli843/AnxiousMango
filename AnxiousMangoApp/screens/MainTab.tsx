import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Dashboard from "../components/Dashboard/Dashboard";
import {useState} from "react";
import {DashboardData, dashboardDemoData} from "../types/DashboardData";
import MainTabNavButton from "../components/Dashboard/ThoughtRecords/MainTabNavButton";
import ModifyThoughtRecordsScreen
  from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/ModifyThoughtRecordsScreen";
import { useDispatch, useSelector } from 'react-redux'

import commonStyles from "../common/CommonStyles";
import {changeDashboardModeAction, MainTabModes} from "../actions/thoughtRecordActions";
import ThoughtRecordInfo
  from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/ThoughtRecordInfo/ThoughtRecordInfo";
import HotThoughtInfo from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/HotThoughtInfo";
import BalancedThoughtInfo from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/BalancedThoughtInfo";

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
  // use redux const [currentMode, setCurrentMode] = useState(MainTabModes.Dashboard);
  const [currentThoughtRecordID, setCurrentThoughtRecordID] = useState(-1); // -1 means no thought record selected
  // TODO use this data to show a thought record
  const dispatch = useDispatch();
  const dashboardData: DashboardData = dashboardDemoData;
  const goToThoughtRecord = (currentThoughtRecordID: number) => {
    dispatch(changeDashboardModeAction(MainTabModes.ModifyThoughtRecord)); // dispatch triggers state change
    setCurrentThoughtRecordID(currentThoughtRecordID);  // make action redux
  }

  // get current mode using useSelector()
  const currentMode = useSelector(
      (state: {thoughtRecordData: DashboardData}) => state.thoughtRecordData.MainTabModes)

  return (
      <View style={{...commonStyles}}>
        {
          currentMode === MainTabModes.Dashboard &&
          <>
            <Dashboard thoughtRecords={dashboardData.thoughtRecords} goToThoughtRecord={goToThoughtRecord.bind(this)}/>
            <MainTabNavButton
                setCurrentMode={() => {
                  setCurrentThoughtRecordID(-1); // sets current to none so we know its a new thought record
                  // setCurrentMode(MainTabModes.ModifyThoughtRecord)
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
          </>
        }
        {
          currentMode === MainTabModes.HotThoughtInfo &&
          <>
           <HotThoughtInfo
               thoughtRecords={dashboardData.thoughtRecords}
               currentThoughtRecordID={currentThoughtRecordID}/>
          </>
        }
        {
          currentMode === MainTabModes.BalancedThoughtInfo &&
          <>
            <BalancedThoughtInfo
                thoughtRecords={dashboardData.thoughtRecords}
                currentThoughtRecordID={currentThoughtRecordID}/>
          </>
        }
      </View>
  );
}
