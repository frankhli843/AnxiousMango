import {Text} from "../../../Themed";
import {Card} from "react-native-elements";
import * as React from "react";
import {TextInput, StyleSheet} from "react-native";
import {ThoughtRecord} from "../../../../types/DashboardData";

type modifyThoughtRecordScreenProps = {
    thoughtRecords: ThoughtRecord[],
    currentThoughtRecordID: number
}

function BalancedThoughtInfo({thoughtRecords, currentThoughtRecordID}: modifyThoughtRecordScreenProps) {
    const thoughtRecord = thoughtRecords[currentThoughtRecordID];
    return(
        <>
            <Text>Balanced Thought</Text>
            <Card>
                <Text>Hot Thought:
                    {thoughtRecord.automaticThoughts.map(hotThought => {
                        return(
                        <Card>
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={hotThought.hotThought?.description}/>
                            <Text>
                                Evidence for:
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={hotThought.hotThought?.for.toString()}/>
                            </Text>
                            <Text>
                                Evidence against:
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={hotThought.hotThought?.against.toString()}/>
                            </Text>
                            <Text>
                                Balanced thought:
                                <TextInput
                                    style={style.textInputStyle}
                                    placeholder={hotThought.hotThought?.balancedThought}/>
                            </Text>
                        </Card>
                        )
                    })}
                </Text>
            </Card>
            </>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default BalancedThoughtInfo;