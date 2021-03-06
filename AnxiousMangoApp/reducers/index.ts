import {combineReducers} from "redux";
import {dashboardDemoData} from "../types/DashboardData";
import AsyncStorage from "@react-native-community/async-storage";
import {CONST_RESTORE_SAVED, saveData} from "../actions/restoreSavedData";

export default combineReducers({
    thoughtRecordData: thoughtRecordData,
})



function thoughtRecordData(state = {
    thoughtRecords: dashboardDemoData.thoughtRecords,
    MainTabModes: "CONST_DASHBOARD",
    selectedThoughtRecordID: -1 // nothing is selected yet
}, action: any){

    saveData(state).then(r => {console.log('saved state')});

    switch (action.type){
        case CONST_RESTORE_SAVED:
            return action.state;
        case "CONST_SET_CURRENT_THOUGHT_RECORD_ID":
            return {
                ...state,
                selectedThoughtRecordID: action.id
            }
        case "CONST_CURRENT_MODE": // change mode from Dashboard to Thought Record, i.e. user wants to view a thought rec.
            return {
                ...state,
                MainTabModes: action.mode
            }
        case "CONST_CHANGE_THOUGHT_RECORD_TITLE":
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.id]: {
                        ...state.thoughtRecords[action.id],
                        title: action.title
                    }
                }
            }
        case "CONST_CHANGE_THOUGHT_RECORD_SITUATION":
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        situationList: [
                            ...state.thoughtRecords[action.thoughtRecID].situationList.filter((situation, i) => {
                                return i < action.situationID
                            }),
                            action.situation,
                            ...state.thoughtRecords[action.thoughtRecID].situationList.filter((situation, i) => {
                                return i > action.situationID
                            }),
                        ]
                    }
                }
            }
        case "CONST_REMOVE_SITUATION_ACTION":
            const situationArray = state.thoughtRecords[action.thoughtRecID].situationList
                .filter((situation, i) => i !== action.situationID)
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        situationList: situationArray
                    }
                }
            }
        case "CONST_ADD_SITUATION_ACTION":
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        situationList: [
                            ...state.thoughtRecords[action.thoughtRecID].situationList,
                            ""
                        ]
                    }
                }
            }

        case "CONST_CHANGE_MOOD_ACTION":
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        moods: [
                            ...state.thoughtRecords[action.thoughtRecID].moods.filter(
                                (m, i) => {return i < action.moodID}
                            ),
                            { percentage: action.percentage, description: action.description},
                            ...state.thoughtRecords[action.thoughtRecID].moods.filter(
                                (m, i) => {return i > action.moodID}
                            ),
                        ]
                    }
                }
            }
        case "CONST_ADD_MOOD_ACTION":
            return {
                ...state,
                thoughtRecords: {
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        moods: [
                            ...state.thoughtRecords[action.thoughtRecID].moods,
                            ""
                        ]
                    }
                }
            }
        case "CONST_CHANGE_AUTO_THOUGHT_ACTION":
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        automaticThoughts: [
                            ...state.thoughtRecords[action.thoughtRecID].automaticThoughts.filter(
                                (t, index) => {return index < action.autoThoughtID}
                            ),
                            { description: action.description, hotThought: action.hotThought },
                            ...state.thoughtRecords[action.thoughtRecID].automaticThoughts.filter(
                                (t, index) => {return index > action.autoThoughtID}
                                )
                        ]
                    }
                }
            }
        case "CONST_ADD_EVIDENCE_FOR_HT":
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        automaticThoughts: [
                            ...state.thoughtRecords[action.thoughtRecID].automaticThoughts,
                            {
                                // how exactly do i check if a description contains a hot thought?
                            }
                        ]
                    }
                }
            }
        case "CONST_ADD_EVIDENCE_AGAINST_HT":
            return {
                ...state,
                thoughtRecords: {
                    ...state.thoughtRecords,
                    [action.thoughtRecID]: {
                        ...state.thoughtRecords[action.thoughtRecID],
                        automaticThoughts: [
                            ...state.thoughtRecords[action.thoughtRecID].automaticThoughts,
                            {
                                // how exactly do i check if a description contains a hot thought?
                            }
                        ]
                    }
                }
            }
        default:
            return state;
    }
}