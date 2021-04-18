import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {DashboardData, ThoughtRecord} from "../../../types/DashboardData";
import {makePendingThoughtRecord, ptrChangeMood} from "../../../actions/thoughtRecordActions";

const styles = StyleSheet.create({
    feelingsView: { display: 'flex', alignItems: 'center'},
    mainImage : {width: 200, height: 200, marginBottom: 10, marginTop: 10},
    textInput: {display: 'flex', minHeight: 50, backgroundColor: 'white', marginBottom: 10}
})



const Feelings = () => {
    const dispatch = useDispatch();
    // check if pending is empty, if it is make a new thought record
    const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
        state.thoughtRecordData.pendingThoughtRecord
    );
    if (!pendingThoughtRecord || Object.keys(pendingThoughtRecord).length === 0){
        dispatch(makePendingThoughtRecord());
    }
    return(
        <View style={styles.feelingsView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/feelings.jpg')}/>
            <div>How did you feel?</div>
            <View style={{flex: 1}}>
                <TextInput
                    value={pendingThoughtRecord && pendingThoughtRecord.moods.join(", ")}
                    style={styles.textInput}
                    multiline={true}
                    onChangeText={(mood) => {
                        dispatch(ptrChangeMood(mood))
                    }}
                />
            </View>
        </View>

    );

}

export default Feelings;