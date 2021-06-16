import { FETCH_DISPLAY_DATA, FETCH_DISPLAY_DATA_ERROR, FETCH_DISPLAY_DATA_SUCCESS } from "../action/actions_types"


let initialState = {
    loading: false,
    error: "",
    display:[]
}

export default function displayReducer(state = initialState,action){
    switch(action.type){
        case FETCH_DISPLAY_DATA:
            return {...state, loading: true}
        case FETCH_DISPLAY_DATA_SUCCESS:
            return {...state, display:action.payload , loading:false }
        case FETCH_DISPLAY_DATA_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}