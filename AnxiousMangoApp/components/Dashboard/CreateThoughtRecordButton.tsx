import {Button} from "react-native";
import * as React from "react";

function CreateThoughtRecordButton() {
    return <>
        <Button
            title="Create New Thought Record"
            onPress={() => {
                alert("Create button pressed")
            }
            }
            color="#D39999"/>
    </>
}

export default CreateThoughtRecordButton;