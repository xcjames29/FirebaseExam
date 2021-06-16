import { SIGNUP_ATTEMP, SIGNUP_RESULT } from "../action/actions_types"



let initialState = {
    loading: false,
    message: ""
}


export default function signupReducer(state = initialState,action){
    switch(action.type){
        case SIGNUP_ATTEMP:
            return {...state, loading: true}
        case SIGNUP_RESULT:
            return {...state, message:action.payload , loading:false }
        default:
            return state
    }
}