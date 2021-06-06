import * as React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {useState} from "react";
import {useSelector} from "react-redux";
import {ThoughtRecord} from "../types/DashboardData";


const styles = {
 selected: {color: 'green'},
 unselected: {color: 'black'},
 card: {border: '1px', borderColor:'gray'}
};

// const pendingThoughtRecord = useSelector((state: {thoughtRecordData: {pendingThoughtRecord: ThoughtRecord}}) =>
//     state.thoughtRecordData.pendingThoughtRecord
// );


type SelectionType = {
    description: string,
    id: string,
}
type MangoSelectionProps = {
    style: object,
    selectionList: SelectionType[],
    onSelection: (id: string) => void
}

const MangoSelection = ({
    style, selectionList, onSelection
}: MangoSelectionProps) => {
    const [selectedID, setSelectedID] = useState("");
    return (
        <View style={style}>
            {
                selectionList.map(selection => (
                    <div style={styles.card}
                        onClick={() => {
                            setSelectedID(selection.id);
                            onSelection(selection.id);
                        }}>
                        <Text style={selectedID === selection.id ? styles.selected: undefined}>
                            {selection.description}
                        </Text>
                    </div>
                ))
            }
        </View>
    )
}

export default MangoSelection;