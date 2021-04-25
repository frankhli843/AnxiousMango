import * as React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {useState} from "react";


const styles = StyleSheet.create({
 selected: {color: 'green'},
 unselected: {color: 'black'},
 card: {border: '1px', borderColor:'gray'}
})

type MangoSelectionProps = {
    style: object,
    selectionList: string[],
    onSelection: (index: number) => {} // TODO: given the index of what was selected, do something with that index. so here set it as a hotThought
}

const MangoSelection = ({
    style, selectionList, onSelection
}: MangoSelectionProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <View style={style}>
            {
                selectionList.map((a, i) => (
                    <div style={styles.card}
                        onClick={() => {
                        setSelectedIndex(i);
                        onSelection(i);
                    }}>
                        <Text style={selectedIndex === i ? styles.selected: undefined}>
                            {a}
                        </Text>
                    </div>
                ))
            }
        </View>
    )
}

export default MangoSelection;