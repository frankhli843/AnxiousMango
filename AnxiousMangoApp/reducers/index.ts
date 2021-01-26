import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {HotThought} from "../types/DashboardData";
import {dashboardDemoData, ThoughtRecord} from "../types/DashboardData";

export default combineReducers({
    thoughtRecordData: thoughtRecordData,
})


export const CONST_ADD_THOUGHT_RECORD = "CONST_ADD_THOUGHT_RECORD";
export const CONST_CURRENT_MODE = "CONST_CURRENT_MODE"
export const CONST_CHANGE_THOUGHT_RECORD_TITLE = "CONST_CHANGE_THOUGHT_RECORD_TITLE"
export const CONST_CHANGE_THOUGHT_RECORD_SITUATION = "CONST_CHANGE_THOUGHT_RECORD_SITUATION"
export const CONST_REMOVE_SITUATION_ACTION = "CONST_REMOVE_SITUATION_ACTION"
export const CONST_ADD_SITUATION_ACTION = "CONST_ADD_SITUATION_ACTION"
export const CONST_CHANGE_MOOD_ACTION = "CONST_CHANGE_MOOD_ACTION"
export const CONST_CHANGE_AUTO_THOUGHT_ACTION = "CONST_CHANGE_AUTO_THOUGHT_ACTION"

export enum MainTabModes {
    Dashboard ="CONST_DASHBOARD",
    ModifyThoughtRecord = "CONST_THOUGHT_RECORD"
}

export function changeDashboardModeAction(mode: MainTabModes) {
    return {
        type: CONST_CURRENT_MODE,
        mode: mode
    }
}

export function addThoughtRecordAction(thoughtRecord: ThoughtRecord){
    return {
        type: CONST_ADD_THOUGHT_RECORD,
        thoughtRecord: thoughtRecord
    }
}

export function changeThoughtRecordTitleAction(title: string, id: number) {
    return {
        title,
        id,
        type: CONST_CHANGE_THOUGHT_RECORD_TITLE
    }
}

export function changeThoughtRecordSituationAction(situation: string, thoughtRecID: number, situationID: number) {
    return { // TODO here is where thoughtRecordID is coming undefined
        situation,
        thoughtRecID,
        situationID,
        type: CONST_CHANGE_THOUGHT_RECORD_SITUATION
    }
}

export function removeThoughtRecordSituationAction(thoughtRecID: number, situationID: number) {
    return {
        thoughtRecID,
        situationID,
        type: CONST_REMOVE_SITUATION_ACTION
    }
}

export function addThoughtRecordSituationAction(thoughtRecID: number) {
    return {
        thoughtRecID,
        type: CONST_ADD_SITUATION_ACTION
    }
}

export function changeMoodAction(thoughtRecID: number, moodID: number, description: string, percentage: number) {
    return {
        thoughtRecID,
        moodID,
        description,
        percentage,
        type: CONST_CHANGE_MOOD_ACTION
    }
}

export function changeAutoThoughtAction(thoughtRecID: number, autoThoughtID: number, description: string, hotThought?: HotThought) {
    return {
        thoughtRecID,
        autoThoughtID,
        description,
        hotThought,
        type: CONST_CHANGE_AUTO_THOUGHT_ACTION
    }
}

function thoughtRecordData(state = {
    thoughtRecords: dashboardDemoData.thoughtRecords,
    MainTabModes: "CONST_DASHBOARD"
}, action: any){
    switch (action.type){
        case "CONST_ADD_THOUGHT_RECORD": // user wants to add thought record
            return {
                ...state,
                thoughtRecords: [...state.thoughtRecords, action.thoughtRecord]
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

            // why does this delete the other mood when you want to change one?
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
        default:
            return state;
    }
}