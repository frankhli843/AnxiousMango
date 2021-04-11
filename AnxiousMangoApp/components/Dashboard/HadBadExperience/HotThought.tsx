import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";

const styles = StyleSheet.create({
    hotThoughtView: {
        display: 'flex',
        alignItems: 'center'
    },
    mainImage : {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginTop: 10
    },
    textInput: {
        display: 'flex',
        minHeight: 50,
        backgroundColor: 'white',
        marginBottom: 10
    }
})

const hotThoughtList = [
    {
        label: 'data 1'
    },
    {
        label: 'data 2'
    }
];

const HotThought = () => {
    return(
        <View style={styles.hotThoughtView}>
            <Image
                style={styles.mainImage}
                source={require('../../../../images/hotthought.jpg')}/>
            <div>Which one of these thoughts bother you the most?</div>
            <View style={{flex: 1}}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                />
            </View>
        </View>

    );

}

export default HotThought;