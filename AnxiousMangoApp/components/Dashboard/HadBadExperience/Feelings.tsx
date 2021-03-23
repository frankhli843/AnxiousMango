import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";

const styles = StyleSheet.create({
    feelingsView: { display: 'flex', alignItems: 'center'},
    mainImage : {width: 200, height: 200, marginBottom: 10, marginTop: 10},
    textInput: {display: 'flex', minHeight: 50, backgroundColor: 'white', marginBottom: 10}
})



const Feelings = () => {
    return(
        <View style={styles.feelingsView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/feelings.jpg')}/>
            <div>How did you feel?</div>
            <View style={{flex: 1}}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                />
            </View>
        </View>

    );

}

export default Feelings;