import * as React from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ThoughtRecord} from "../../../types/DashboardData";
import MangoSelection from "../../../common/MangoSelection";
import {useState} from "react";
import {ptrSelectAutomaticThought} from "../../../actions/thoughtRecordActions";

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
    const [selectedThoughtID, setSelectedThoughtID] = useState(""); // each thought is a string
    const dispatch = useDispatch();

    // check if pending is empty, if it is make a new thought record
    const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
        state.thoughtRecordData.pendingThoughtRecord
    );
    const thoughtDescriptions = pendingThoughtRecord.automaticThoughts.map &&
        pendingThoughtRecord.automaticThoughts.map(a => {
            return {description: a.description, id: a.id}
        });

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
                    selectionList={thoughtDescriptions}
                    onSelection={(id: string) => {
                        const selectedList = thoughtDescriptions.filter(thought => thought.id === id);
                        const selected = selectedList.length > 0 ? selectedList[0]: null;
                        if (selected){
                            setSelectedThoughtID(selected.id);
                            dispatch(ptrSelectAutomaticThought(selected.id));
                        }

                    }}
                    defaultSelectedID={thoughtDescriptions && thoughtDescriptions.length > 0
                        ? thoughtDescriptions[0].id
                        : undefined}
                />
                <Text>
                {
                    selectedThoughtID === "" ? "select your thought": "thought selected"
                }
                </Text>
            </View>
        </ScrollView>
    );

}

export default HotThought;