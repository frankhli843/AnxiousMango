import {combineReducers} from "redux";
import {DashboardData, dashboardDemoData, ThoughtRecord} from "../types/DashboardData";

export default combineReducers({
    thoughtRecordData: thoughtRecordData,
})


export const CONST_ADD_THOUGHT_RECORD = "CONST_ADD_THOUGHT_RECORD";


export function addThoughtRecord(thoughtRecord: ThoughtRecord){
    return {
        type: CONST_ADD_THOUGHT_RECORD,
        thoughtRecord: thoughtRecord
    }
}

function thoughtRecordData(state = dashboardDemoData, action: any){
    switch (action.type){
        case "CONST_ADD_THOUGHT_RECORD":
            return {
                ...state,
                thoughtRecords: [...state.thoughtRecords, action.thoughtRecord]
            }
        default:
            return state;
    }
}