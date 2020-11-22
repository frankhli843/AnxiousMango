import * as React from 'react';
import {Button, Image, StyleSheet, View} from "react-native";
export default function AnxiousMangoTitle()  {
    return <>
        <View style={styles.getStartedContainer}>
            Anxious Mango
            <Image
                style={{width: 100, height: 100}}
                source={require('../mascot-1.png')}/>
                Thought records:
            <CreateThoughtRecordButton/>
        </View>
    </>
}

function CreateThoughtRecordButton() {
    return <>
        <Button
            title="Create New Thought Record"
            onPress={() => {
                alert("Create button pressed")}
            }
            color="#D39999"/>
   </>
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
    },
});



