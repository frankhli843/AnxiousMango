import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import Dashboard from "../components/Dashboard/Dashboard";
import {useState} from "react";
import {DashboardData, dashboardDemoData} from "../types/DashboardData";
import MainTabNavButton from "../components/Dashboard/ThoughtRecords/MainTabNavButton";
import ModifyThoughtRecordsScreen
  from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/ModifyThoughtRecordsScreen";
import { useDispatch, useSelector } from 'react-redux'

import commonStyles from "../common/CommonStyles";
import {changeDashboardModeAction, MainTabModes, setCurrentThoughtRecordID} from "../actions/thoughtRecordActions";
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
  navigationView:{
    display:'flex',
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },
});

export default function MainTab(this: any) {
  // currentMode is string, setCurrentMode (stringInput) => void
  // use redux const [currentMode, setCurrentMode] = useState(MainTabModes.Dashboard);

  const dispatch = useDispatch();
  const dashboardData: DashboardData = dashboardDemoData;

  // TODO don't use this anymore. In our store keep a currentThoughtRecordID value
  // const [currentThoughtRecordID, setCurrentThoughtRecordID] = useState(-1);
  // const goToThoughtRecord = (currentThoughtRecordID: number) => {
  //   dispatch(changeDashboardModeAction(MainTabModes.ModifyThoughtRecord)); // dispatch triggers state change
  //   setCurrentThoughtRecordID(currentThoughtRecordID);  // make action redux
  // }

  // <ModifyThoughtRecordsScreen
  //     currentThoughtRecordID={currentThoughtRecordID}  <=== remove this and in ModidfyThoughtRecords
  // use redux to get currentThoughtRecordID
  //     thoughtRecords={dashboardData.thoughtRecords}/>

  // <Dashboard
  //     thoughtRecords={dashboardData.thoughtRecords}
  //     goToThoughtRecord={goToThoughtRecord.bind(this)}/>  <== replace with
  //         (id) => {dispatch(setCurrentThoughtRecordID(id)}


  // get current mode using useSelector()
  const currentMode = useSelector(
      (state: {thoughtRecordData: DashboardData}) => state.thoughtRecordData.MainTabModes)

  return (
      <View style={{...commonStyles}}>
        {
          currentMode === MainTabModes.Dashboard &&
          <>
            <Dashboard
                thoughtRecords={dashboardData.thoughtRecords}
                goToThoughtRecord={goToThoughtRecord.bind(this)}/>
            <MainTabNavButton
                title="Add Thought Record"
                setCurrentMode={() => {
                  dispatch(setCurrentThoughtRecordID(-1))
                }}
            />
          </>
        }
        {
          currentMode === MainTabModes.ModifyThoughtRecord &&
          <>
            <Button
                title={"Back to dashboard"}
                onPress={() => {
                  dispatch(changeDashboardModeAction(MainTabModes.Dashboard))
                }}
            />
            <ModifyThoughtRecordsScreen
                currentThoughtRecordID={currentThoughtRecordID}
                thoughtRecords={dashboardData.thoughtRecords}/>
            <Button
                onPress={() => dispatch(changeDashboardModeAction(MainTabModes.HotThoughtInfo))}
                title="Go to Hot Thoughts"
                color="#D39999"
            />

          </>
        }
        {
          currentMode === MainTabModes.HotThoughtInfo &&
          <>
            <Button
                title={"Back to dashboard"}
                onPress={() => {
                  dispatch(changeDashboardModeAction(MainTabModes.Dashboard))
                }}
            />
           <HotThoughtInfo
               thoughtRecords={dashboardData.thoughtRecords}
               currentThoughtRecordID={currentThoughtRecordID}/>
               <View style={styles.navigationView}>
                <Button
                    onPress={() => dispatch(changeDashboardModeAction(MainTabModes.ModifyThoughtRecord))}
                    title="Back to Basic Info"
                    color="#D39999"
                />
                <Button
                    onPress={() => dispatch(changeDashboardModeAction(MainTabModes.BalancedThoughtInfo))}
                    title="Go to Balanced Thoughts"
                    color="#D39999"
                />
               </View>
          </>
        }
        {
          currentMode === MainTabModes.BalancedThoughtInfo &&
          <>
            <Button
                title={"Back to dashboard"}
                onPress={() => {
                  dispatch(changeDashboardModeAction(MainTabModes.Dashboard))
                }}
            />
            <BalancedThoughtInfo
                thoughtRecords={dashboardData.thoughtRecords}
                currentThoughtRecordID={currentThoughtRecordID}/>
            <Button
                onPress={() => dispatch(changeDashboardModeAction(MainTabModes.HotThoughtInfo))}
                title="Back to Hot Thoughts"
                color="#D39999"
            />
          </>
        }
      </View>
  );
}
