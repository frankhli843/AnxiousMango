import {ScrollView} from "react-native";
import {Cell, Section, TableView} from "react-native-tableview-simple";
import {DashboardData, dashboardDemoData} from "../../types/DashboardData";
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
                    <Cell cellStyle="Subtitle" backgroundColor="#EBAF83" title={dashboardDemoData.thoughtRecords[0].title} detail={dashboardDemoData.thoughtRecords[0].dateCreated}/>
                    <Cell cellStyle="Subtitle" backgroundColor="#EBAF83" title={dashboardDemoData.thoughtRecords[1].title} detail={dashboardDemoData.thoughtRecords[1].dateCreated}/>
                </Section>
            </TableView>
        </ScrollView>
    </>
}

export default ThoughtRecords;