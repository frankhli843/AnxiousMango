import * as React from 'react';
import {Button, Image, StyleSheet, View, ScrollView} from "react-native";
import { Cell, Section, TableView } from 'react-native-tableview-simple';

const tableViewStyles = {
    backgroundColor: '#D39999',
    paddingTop: 20,
    paddingBottom: 20
};

export default function AnxiousMangoTitle()  {
    return <>
        <View style={styles.getStartedContainer}>
            Anxious Mango
            <Image
                style={{width: 100, height: 100}}
                source={require('../mascot-1.png')}/>
            <ThoughtRecords/>
            <CreateThoughtRecordButton/>
        </View>
    </>
}

function ThoughtRecords() {
    return <>
        <ScrollView contentContainerStyle={tableViewStyles}>
            <TableView>
                <Section header="Thought Records" headerTextColor="#000000">
                    <Cell cellStyle="Subtitle" backgroundColor="#EBAF83" title="Thought record goes here." detail="Dec 31, 1969 11:59PM"/>
                </Section>
            </TableView>
        </ScrollView>
    </>
}

function CreateThoughtRecordButton() {
    return <>
        <Button
            title="Create New Thought Record"
            onPress={() => {
                    alert("Create button pressed")
                }
            }
            color="#D39999"/>
   </>
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
    },
});



