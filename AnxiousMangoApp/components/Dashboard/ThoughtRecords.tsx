import {Button, ScrollView} from "react-native";
import {Cell, Section, TableView} from "react-native-tableview-simple";
import {DashboardData, dashboardDemoData, ThoughtRecord} from "../../types/DashboardData";
import * as React from "react";

const tableViewStyles = {
    backgroundColor: '#D39999',
    marginBottom: 20
};

type thoughtRecordProps = {
    thoughtRecords: ThoughtRecord[],
    goToThoughtRecord: (id: number) => void,
}

function ThoughtRecords({thoughtRecords, goToThoughtRecord}: thoughtRecordProps) {
    return <>
        <ScrollView contentContainerStyle={tableViewStyles}>
            <TableView>
                <Section header="Thought Records" headerTextColor="#000000">
                    {
                        thoughtRecords.map(
                            function(thoughtRecord, i){  // component
                                return(
                                    <Cell
                                        onPress={() => {goToThoughtRecord(i)}}
                                        cellStyle="Subtitle"
                                        backgroundColor="#EBAF83"
                                        title={thoughtRecord.title}
                                        detail={thoughtRecord.dateCreated}/>
                                )
                            }
                        )
                    }
                </Section>
            </TableView>
        </ScrollView>
    </>
}

export default ThoughtRecords;