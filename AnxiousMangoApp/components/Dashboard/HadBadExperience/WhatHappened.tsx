import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {DashboardData} from "../../../types/DashboardData";
import {makePendingThoughtRecord, ptrChangeSituation} from "../../../actions/thoughtRecordActions";

const styles = StyleSheet.create({
    whatHappenedView: { display: 'flex', alignItems: 'center'},
    mainImage : {width: 200, height: 200, marginBottom: 10, marginTop: 10},
    textInput: {display: 'flex', minHeight: 50, backgroundColor: 'white', marginBottom: 10}
})



const WhatHappened = () => {
    const dispatch = useDispatch();
    // check if pending is empty, if it is make a new thought record
    const pendingThoughtRecord = useSelector((state:DashboardData ) => state.pendingThoughtRecord);
    if (!pendingThoughtRecord || Object.keys(pendingThoughtRecord).length === 0){
        dispatch(makePendingThoughtRecord());
    }
    return(
        <View style={styles.whatHappenedView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/whathappened.jpg')}/>
            <div>Oh no I hope your okay. What happened?</div>
            <View style={{flex: 1}}>
                <TextInput
                    value={pendingThoughtRecord && pendingThoughtRecord.situationList.join("")}
                    style={styles.textInput}
                    multiline={true}
                    onChangeText={(situation) => {
                        dispatch(ptrChangeSituation(situation))
                    }}
                />
            </View>
        </View>

    );

}
export default WhatHappened;