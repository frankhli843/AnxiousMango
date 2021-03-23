import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";

const styles = StyleSheet.create({
    autoThoughtsView: { display: 'flex', alignItems: 'center'},
    mainImage : {width: 200, height: 200, marginBottom: 10, marginTop: 10},
    textInput: {display: 'flex', minHeight: 50, backgroundColor: 'white', marginBottom: 10}
})



const AutoThoughts = () => {
    return(
        <View style={styles.autoThoughtsView}>
            <div>What automatic thoughts did you have?</div>
            <View style={{flex: 1}}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                />
            </View>
        </View>

    );

}

export default AutoThoughts;