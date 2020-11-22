import {ScrollView} from "react-native";
import {Cell, Section, TableView} from "react-native-tableview-simple";
import * as React from "react";

const tableViewStyles = {
    backgroundColor: '#D39999',
    marginBottom: 20
};

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

export default ThoughtRecords;