import {ADD_SONG,DELETE_SONG} from "../actionTypes";

export const addProduct=(params)=>{
    return {
        type:ADD_SONG,
        payload:params,
    };
}