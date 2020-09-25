import { ADD_SONG } from "../actionTypes";

let initState=[];
const songReducer=(state=initState,action)=>{
    switch (action.type) {
        case ADD_SONG:
            return [...state,action.payload];
    
        default:
            return state;
    }
}

export default songReducer;