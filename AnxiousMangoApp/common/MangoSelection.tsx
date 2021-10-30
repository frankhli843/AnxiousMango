import * as React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {useEffect, useState} from "react";
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
    onSelection: (id: string) => void,
    defaultSelectedID?: string // index to be selected in the beginning by default
}

const MangoSelection = ({
    style, selectionList, onSelection, defaultSelectedID
}: MangoSelectionProps) => {
    const [selectedID, setSelectedID] = useState("");
    // useEffect gets called whenever a specific parameter gets changed
    useEffect(() => {
        if (defaultSelectedID !== undefined && selectedID === '') { // do this only if default selection defined
            setSelectedID(defaultSelectedID)
            onSelection(defaultSelectedID)
        }
    }, []) // this only runs when something in dependency array changes
    return (
        <View style={style}>
            {
                selectionList.map(selection => (
                    <div style={styles.card}
                        onClick={() => {
                            setSelectedID(selection.id);
                            onSelection(selection.id);
                        }}>
                        { selectedID === selection.id
                            ? <Text style={styles.selected}>
                                {`Selected: ${selection.description}`}
                            </Text>
                            : <Text>
                                {selection.description}
                            </Text>

                        }

                    </div>
                ))
            }
        </View>
    )
}

export default MangoSelection;