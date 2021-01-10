import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {dashboardDemoData, ThoughtRecord} from "../types/DashboardData";

export default combineReducers({
    thoughtRecordData: thoughtRecordData,
})


export const CONST_ADD_THOUGHT_RECORD = "CONST_ADD_THOUGHT_RECORD";
export const CONST_CURRENT_MODE = "CONST_CURRENT_MODE"

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
        default:
            return state;
    }
}