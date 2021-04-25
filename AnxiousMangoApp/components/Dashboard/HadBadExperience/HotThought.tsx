import * as React from 'react';
import {Image, ScrollView, StyleSheet, TextInput, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ThoughtRecord} from "../../../types/DashboardData";
import MangoSelection from "../../../common/MangoSelection";

const styles = StyleSheet.create({
    hotThoughtView: {
        display: 'flex',
        alignItems: 'center'
    },
    mainImage : {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginTop: 10
    },
    textInput: {
        display: 'flex',
        minHeight: 50,
        backgroundColor: 'white',
        marginBottom: 10
    },
    card: {
        flex: 1
    },
})

const HotThought = () => {
    const dispatch = useDispatch();
    // check if pending is empty, if it is make a new thought record
    const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
        state.thoughtRecordData.pendingThoughtRecord
    );

    return(
        <ScrollView style={styles.card}>
        <View style={styles.hotThoughtView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/hotthought.jpg')}/>
            <div>Which one of these thoughts bother you the most?</div>
            <br/>
            <MangoSelection
                style={{flex: 1}}
                selectionList={pendingThoughtRecord.automaticThoughts.map(a => a.description)}/>
        </View>
        </ScrollView>
    );

}

export default HotThought;