import {HotThought, ThoughtRecord} from "../types/DashboardData";

export const CONST_CURRENT_MODE = "CONST_CURRENT_MODE"
export const CONST_CHANGE_THOUGHT_RECORD_TITLE = "CONST_CHANGE_THOUGHT_RECORD_TITLE"
export const CONST_CHANGE_THOUGHT_RECORD_SITUATION = "CONST_CHANGE_THOUGHT_RECORD_SITUATION"
export const CONST_REMOVE_SITUATION_ACTION = "CONST_REMOVE_SITUATION_ACTION"
export const CONST_ADD_SITUATION_ACTION = "CONST_ADD_SITUATION_ACTION"
export const CONST_CHANGE_MOOD_ACTION = "CONST_CHANGE_MOOD_ACTION"
export const CONST_CHANGE_AUTO_THOUGHT_ACTION = "CONST_CHANGE_AUTO_THOUGHT_ACTION"
export const CONST_ADD_MOOD_ACTION = "CONST_ADD_MOOD_ACTION"
export const CONST_SET_CURRENT_THOUGHT_RECORD_ID = "CONST_SET_CURRENT_THOUGHT_RECORD_ID"
export const CONST_ADD_EVIDENCE_FOR_HT = "CONST_ADD_EVIDENCE_FOR_HT"
export const CONST_ADD_EVIDENCE_AGAINST_HT = "CONST_ADD_EVIDENCE_AGAINST_HT"
export const CONST_ADD_BALANCED_THOUGHT = "CONST_ADD_BALANCED_THOUGHT"
export const CONST_RM_EVIDENCE_FOR_HT = "CONST_RM_EVIDENCE_FOR_HT"
export const CONST_RM_EVIDENCE_AGAINST_HT = "CONST_RM_EVIDENCE_FOR_HT"
export const CONST_RM_BALANCED_THOUGHT = "CONST_RM_BALANCED_THOUGHT"

export enum MainTabModes {
    Dashboard ="CONST_DASHBOARD",
    ModifyThoughtRecord = "CONST_THOUGHT_RECORD",
    HotThoughtInfo = "CONST_HOT_THOUGHT_INFO",
    BalancedThoughtInfo = "CONST_BALANCED_THOUGHT_INFO"
}

export function changeDashboardModeAction(mode: MainTabModes) {
    return {
        type: CONST_CURRENT_MODE,
        mode: mode
    }
}

export function setCurrentThoughtRecordID(id: number) {
    return {
        id,
        type: CONST_SET_CURRENT_THOUGHT_RECORD_ID
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

export function addMoodAction(thoughtRecID: number) {
    return {
        thoughtRecID,
        type: CONST_ADD_MOOD_ACTION
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

export function addEvidenceForHTAction(thoughtRecID: number) {
    return {
        thoughtRecID,
        type: CONST_ADD_SITUATION_ACTION
    }
}

export function addEvidenceAgainstHTAction(thoughtRecID: number) {
    return {
        thoughtRecID,
        type: CONST_ADD_SITUATION_ACTION
    }
}

export function addBalancedThoughtAction(thoughtRecID: number) {
    return {
        thoughtRecID,
        type: CONST_ADD_SITUATION_ACTION
    }
}