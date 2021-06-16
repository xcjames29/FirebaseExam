
//Login
import { databaseRef } from "../../firebaseconfig/firebaseConfig";
import { FETCH_DISPLAY_DATA, FETCH_DISPLAY_DATA_ERROR, FETCH_DISPLAY_DATA_SUCCESS, LOGIN_ATTEMP, LOGIN_ERROR, LOGIN_SUCCESS, SIGNUP_ATTEMP, SIGNUP_RESULT } from "./actions_types";

export let loginAttemp =()=>({type:LOGIN_ATTEMP})

export let loginError = (error)=>({
    type: LOGIN_ERROR,
    payload: error
})

export let loginSuccess = (user)=>({
    type: LOGIN_SUCCESS,
    payload: user
})


export let login = (username,password,nextPage) =>{
    return async function (dispatch, getState, args){
        try{
            dispatch(loginAttemp());
            let userData = await databaseRef.collection("userAccount").doc(username.replace(".","_")).get()
            console.log("asdasdasdasdas eto na data from db");
            if(!userData.exists){
                dispatch(loginError("No UserExist"))
            }
            else{
                let data = userData.data()
                if(password === data.password) {
                    dispatch(loginSuccess(userData.data()))
                    nextPage();
                }
                else dispatch(loginError("Incorrect Password"))
            }
        }
        catch(e){
            console.log(e);
            dispatch(loginError(e.message))
        }
    }
}

//Signup
export let signupAttemp = ()=>({type:SIGNUP_ATTEMP});
export let signupResult = (result)=>({
    type: SIGNUP_RESULT,
    payload: result
})

export let signup = (name,password, email) =>{
    return async function (dispatch, getState, args){
        try{
            dispatch(signupAttemp());
            let userData = await databaseRef.collection("userAccount").doc(email.replace(".","_")).get()
            if(!userData.exists){
                let data={
                    name:name,
                    password:password,
                    email:email
                }
                const res = await databaseRef.collection('userAccount').doc(email.replace(".","_")).set(data);
                console.log(res);
                dispatch(signupResult("Successfully added"))
            }
            else dispatch(signupResult("EMAIL ALREADY EXIST!"))
        }
        catch(e){
            console.log(e);
            dispatch(signupResult(e.message))
        }
    }
}


//Display
export let fetchDisplayData = ()=>({type:FETCH_DISPLAY_DATA});
export let fetchDisplayDataError = (error)=>({
    type: FETCH_DISPLAY_DATA_ERROR,
    payload: error
})
export let fetchDisplayDataSuccess = (data)=>({
    type: FETCH_DISPLAY_DATA_SUCCESS,
    payload: data
})

export let getDisplayData = () =>{
    return async function (dispatch, getState, args){
        try{
            dispatch(fetchDisplayData());
            let displayDatas = await databaseRef.collection("storageList").get()
            let display = []
            displayDatas.forEach((e)=>{
                display.push(e.data())
            })
            dispatch(fetchDisplayDataSuccess(display));
        }
        catch(e){
            console.log(e);
            dispatch(fetchDisplayDataError(e.message))
        }
    }
}


//ADD,EDIT, DELETE 
export let addData = (name,desc,price,image,category) =>{
    return async function (dispatch, getState, args){
        try{
            let data = {
                name:name,
                description:desc,
                price:price,
                category:category
            };
            if(image!=="") data['image'] = image;
            let res = await databaseRef.collection("storageList").add(data)
            console.log("Add new", res.id)
        }
        catch(e){
            console.log(e);
            dispatch(fetchDisplayDataError(e.message))
        }
    }
}