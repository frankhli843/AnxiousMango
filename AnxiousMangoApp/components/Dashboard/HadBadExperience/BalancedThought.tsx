import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";

const styles = StyleSheet.create({
    balancedThoughtView: { display: 'flex', alignItems: 'center'},
    mainImage : {width: 200, height: 200, marginBottom: 10, marginTop: 10},
    textInput: {display: 'flex', minHeight: 50, backgroundColor: 'white', marginBottom: 10}
})



const BalancedThought = () => {
    return(
        <View style={styles.balancedThoughtView}>
            <div>Let's find a more balanced thought.</div>
            <View style={{flex: 1}}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                />
            </View>
        </View>

    );

}

export default BalancedThought