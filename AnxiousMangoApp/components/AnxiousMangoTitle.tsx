import * as React from 'react';
import {StyleSheet, View} from "react-native";
export default function AnxiousMangoTitle()  {
    return <>
        <View style={styles.getStartedContainer}>Anxious Mango</View>
        {/* TODO add the anxious mango image here and make sure it scales properly */}
    </>

}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
    },
});



