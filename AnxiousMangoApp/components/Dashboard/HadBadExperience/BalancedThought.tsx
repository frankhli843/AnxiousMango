import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";
import {useSelector} from "react-redux";
import {AutomaticThought, ThoughtRecord} from "../../../types/DashboardData";

const styles = StyleSheet.create({
    balancedThoughtView: { display: 'flex', alignItems: 'center'},
    mainImage : {width: 200, height: 200, marginBottom: 10, marginTop: 10},
    textInput: {display: 'flex', minHeight: 50, backgroundColor: 'white', marginBottom: 10}
})


const BalancedThought = () => {
    const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
        state.thoughtRecordData.pendingThoughtRecord
    );
    const { selectedAutoThoughtID, automaticThoughts } = pendingThoughtRecord;
    let selectedAutoThought: AutomaticThought | null = null;
    // automaticThoughts.forEach(thought => {
    //     if (thought.id === selectedAutoThoughtID)
    //         selectedAutoThought = thought;
    // })

    for (let i = 0, l = automaticThoughts.length; i < l; i++) {
        if (automaticThoughts[i].id === selectedAutoThoughtID) {
            selectedAutoThought = automaticThoughts[i];
            break;
        }
    }
    return(
        <View style={styles.balancedThoughtView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/balancedthought.jpg')}/>
            <div>Let's find a more balanced thought.</div>
            { selectedAutoThought && <div>Your hot thought: {selectedAutoThought.description}</div> }

            <View style={{flex: 1}}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                />
            </View>
        </View>

    );

}

export default BalancedThought