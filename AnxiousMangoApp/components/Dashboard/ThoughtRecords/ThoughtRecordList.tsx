import {ScrollView} from "react-native";
import {Cell, Section, TableView} from "react-native-tableview-simple";
import * as React from "react";
import {ThoughtRecord} from "../../../types/DashboardData";
import {useFonts} from "@expo-google-fonts/rubik";
import {AppLoading} from "expo";

const tableViewStyles = {
    backgroundColor: '#D39999',
    marginTop: 20,
    flex: 1
};

type thoughtRecordProps = {
    thoughtRecords: ThoughtRecord[],
    goToThoughtRecord: (id: number) => void,
}

function ThoughtRecordList({thoughtRecords, goToThoughtRecord}: thoughtRecordProps) {


    let [fontsLoaded] = useFonts({
        'Rubik_400Regular': require('../../../assets/fonts/Rubik-VariableFont_wght.ttf')
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return <>
            <ScrollView contentContainerStyle={tableViewStyles}>
                <TableView>
                    <Section
                        header="Thought Records"
                        headerTextColor="#000000"
                        headerTextStyle={{fontFamily: 'Rubik_400Regular', fontSize: 39}}>
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
}

export default ThoughtRecordList;