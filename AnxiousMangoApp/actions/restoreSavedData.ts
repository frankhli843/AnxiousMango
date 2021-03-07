import AsyncStorage from "@react-native-community/async-storage";

export const CONST_RESTORE_SAVED = 'CONST_RESTORE_SAVED' ;
export const saveData =  async (state: any) => {
    try {
        await AsyncStorage.setItem(
            '@MySuperStore:key',
            JSON.stringify(state)
        );
    } catch (error) {
        // Error saving data
    }

}
export const retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('@MySuperStore:key');
        if (value !== null) {
            // We have data!!
            console.log(`retrievedValue`, JSON.parse(value));
        }
    } catch (error) {
        // Error retrieving data
    }
};
function actionRestoreSaved(value: any){
    return {
        type: CONST_RESTORE_SAVED,
        store: value
    }
}

export function restoreSaved(dispatch: any){
    retrieveData().then(value => {
        dispatch(actionRestoreSaved(JSON.parse(value)));
    })
}