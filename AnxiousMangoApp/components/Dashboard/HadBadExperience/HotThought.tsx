import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ThoughtRecord} from "../../../types/DashboardData";

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
    }
})

const HotThought = () => {
    const dispatch = useDispatch();
    // check if pending is empty, if it is make a new thought record
    const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
        state.thoughtRecordData.pendingThoughtRecord
    );

    return(
        <View style={styles.hotThoughtView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/hotthought.jpg')}/>
            <div>Which one of these thoughts bother you the most?</div>
            <br/>
            <View style={{flex: 1}}>
                {/*<TextInput*/}
                {/*    style={styles.textInput}*/}
                {/*    multiline={true}*/}
                {/*/>*/}
                <div>
                    {
                        pendingThoughtRecord.automaticThoughts.map((thought) => {
                            return(
                                <div>{thought}</div>
                            )
                        })
                    }
                </div>
            </View>
        </View>
    );

}

export default HotThought;