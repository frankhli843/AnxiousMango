import * as React from 'react';
import {Image, StyleSheet, View} from "react-native";
export default function AnxiousMangoTitle()  {
    return <>
        <View style={styles.getStartedContainer}>
            Anxious Mango
            <Image
                style={{width: 100, height: 100}}
                source={require('../mascot-1.png')}/>
        </View>
        {/* TODO add the anxious mango image here and make sure it scales properly */}
    </>

}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
    },
});



