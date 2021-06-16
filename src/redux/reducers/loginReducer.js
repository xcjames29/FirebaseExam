import { LOGIN_ATTEMP, LOGIN_ERROR, LOGIN_SUCCESS } from "../action/actions_types"


let initialState = {
    loading: false,
    error: "",
    user:{}
}


export default function loginReducer(state = initialState,action){
    switch(action.type){
        case LOGIN_ATTEMP:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, user:action.payload , loading:false }
        case LOGIN_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}