import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";
import {makePendingThoughtRecord, ptrChangeAutoThought, ptrChangeMood} from "../../../actions/thoughtRecordActions";
import {useDispatch, useSelector} from "react-redux";
import {DashboardData, ThoughtRecord} from "../../../types/DashboardData";
import {useState} from "react";

const styles = StyleSheet.create({
    autoThoughtsView: { display: 'flex', alignItems: 'center'},
    mainImage : {width: 200, height: 200, marginBottom: 10, marginTop: 10},
    textInput: {display: 'flex', minHeight: 50, backgroundColor: 'white', marginBottom: 10}
})



const AutoThoughts = () => {
    const dispatch = useDispatch();
    // check if pending is empty, if it is make a new thought record
    const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
        state.thoughtRecordData.pendingThoughtRecord
    );
    if (!pendingThoughtRecord || Object.keys(pendingThoughtRecord).length === 0){
        dispatch(makePendingThoughtRecord());
    }


    return(
        <View style={styles.autoThoughtsView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/auto.png')}/>
            <div>What automatic thoughts did you have?</div>
            <div>Separate each thought with enter</div>
            <View style={{flex: 1}}>
                <TextInput
                    value={pendingThoughtRecord && pendingThoughtRecord.automaticThoughts.join("\n")}
                    style={styles.textInput}
                    multiline={true}
                    onChangeText={(autoThought) => {
                        const thoughtArray = autoThought.split("\n") as any;
                        dispatch(ptrChangeAutoThought(thoughtArray));

                    }}
                />
            </View>
            <div>
                {pendingThoughtRecord && pendingThoughtRecord.automaticThoughts
                    .map((thought, i) => {
                            return (
                                <View>{i + 1}. {thought}</View>
                            )
                        }
                    )
                }
            </div>
        </View>
    );

}

export default AutoThoughts;