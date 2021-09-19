import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import {View} from '../components/Themed';
import Dashboard from "../components/Dashboard/Dashboard";
import {DashboardData, dashboardDemoData, ThoughtRecord} from "../types/DashboardData";
import MainTabNavButton from "../components/Dashboard/ThoughtRecords/MainTabNavButton";
import ModifyThoughtRecordsScreen
  from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/ModifyThoughtRecordsScreen";
import {useDispatch, useSelector} from 'react-redux'

import commonStyles from "../common/CommonStyles";
import {changeDashboardModeAction, MainTabModes, setCurrentThoughtRecordID} from "../actions/thoughtRecordActions";
import HotThoughtInfo from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/HotThoughtInfo";
import BalancedThoughtInfo from "../components/Dashboard/ThoughtRecords/ThoughtRecordDetails/BalancedThoughtInfo";
import {restoreSaved} from "../actions/restoreSavedData";
import WhatHappened from "../components/Dashboard/HadBadExperience/WhatHappened";
import Feelings from "../components/Dashboard/HadBadExperience/Feelings";
import AutoThoughts from "../components/Dashboard/HadBadExperience/AutoThoughts";
import HotThought from "../components/Dashboard/HadBadExperience/HotThought";
import BalancedThought from "../components/Dashboard/HadBadExperience/BalancedThought";

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
    justifyContent: 'space-evenly',
    backgroundColor: "#E5E5E5"
  },
});

export default function MainTab(this: any) {
  // currentMode is string, setCurrentMode (stringInput) => void
  // use redux const [currentMode, setCurrentMode] = useState(MainTabModes.Dashboard);

  const dispatch = useDispatch();
  const dashboardData: DashboardData = dashboardDemoData
  restoreSaved(dispatch);

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
  const currentThoughtRecordID = useSelector(
      (state: {thoughtRecordData: DashboardData}) => state.thoughtRecordData.selectedThoughtRecordID
  )

  const automaticThoughtID = useSelector(
      (state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) => state.thoughtRecordData.pendingThoughtRecord.selectedAutoThoughtID
  )

  // const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
  //     state.thoughtRecordData.pendingThoughtRecord
  // );

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
                goToThoughtRecord={(id) => {
                  dispatch(setCurrentThoughtRecordID(id));
                  // change the mode to modify thought record
                  dispatch(changeDashboardModeAction(MainTabModes.ModifyThoughtRecord))
                }}/>

            <MainTabNavButton
                title="Add Thought Record"
                setCurrentMode={() => {
                  dispatch(setCurrentThoughtRecordID(-1))

                }}
            />
            <MainTabNavButton
                title="I just had a bad experience"
                setCurrentMode={() => {
                  dispatch(changeDashboardModeAction(MainTabModes.WhatHappened));
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
            <View style={styles.navigationView}>
            <Button
                onPress={() => dispatch(changeDashboardModeAction(MainTabModes.ModifyThoughtRecord))}
                title="Back to Basic Info"
                color="#D39999"
            />
            <Button
                onPress={() => dispatch(changeDashboardModeAction(MainTabModes.HotThoughtInfo))}
                title="Back to Hot Thoughts"
                color="#D39999"
            />
            </View>
          </>
        }
        {
          currentMode === MainTabModes.WhatHappened &&
              <>
                <WhatHappened />
                <View style={styles.navigationView}>
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.Feelings))}
                      title="Next"
                      color="#D39999"
                  />
                </View>
              </>
        }
        {
          currentMode == MainTabModes.Feelings &&
              <>
                <Feelings />
                <View style={styles.navigationView}>
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.WhatHappened))}
                      title="Back"
                      color="#D39999"
                  />
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.AutoThoughts))}
                      title="Next"
                      color="#D39999"
                  />
                </View>
              </>
        }
        {
          currentMode == MainTabModes.AutoThoughts &&
              <>
                <AutoThoughts/>
                <View style={styles.navigationView}>
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.Feelings))}
                      title="Back"
                      color="#D39999"
                  />
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.HotThought))}
                      title="Next"
                      color="#D39999"
                  />
                </View>
              </>
        }
        {
          currentMode == MainTabModes.HotThought &&
              <>
                <HotThought/>
                <View style={styles.navigationView}>
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.AutoThoughts))}
                      title="Back"
                      color="#D39999"
                  />
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.BalancedThought))}
                      // disabled={!automaticThoughtID} // !! -> first ! converts it to boolean, second ! negates it
                      title="Next"
                      color="#D39999"
                  />
                </View>
              </>
        }
        {
          currentMode == MainTabModes.BalancedThought &&
              <>
                <BalancedThought/>
                <View style={styles.navigationView}>
                  <Button
                      onPress={() => dispatch(changeDashboardModeAction(MainTabModes.HotThought))}
                      title="Back"
                      color="#D39999"
                  />
                </View>
              </>
        }
      </View>
  );
}
