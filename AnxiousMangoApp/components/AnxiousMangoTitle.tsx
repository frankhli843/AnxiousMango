import * as React from 'react';
import {Image, StyleSheet, View} from "react-native";
export default function AnxiousMangoTitle()  {
    return <>
        <View style={styles.getStartedContainer}>Anxious Mango</View>
        {/* TODO add the anxious mango image here and make sure it scales properly */}
        <Image source={require('./mascot-1.png')}/>
    </>

}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
    },
});



