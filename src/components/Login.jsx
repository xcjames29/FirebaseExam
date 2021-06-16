import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { login, signup } from "../redux/action/action";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333232;
`;

const MainContainer = styled.div`
    width: 80vw;
    height: 70vh;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 20px;
    padding: 20px 30px;
    gap: 20px;
`;

const Divider = styled.div`
    height: 100%;
    width: calc(50% - 80px) ;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 20px 30px;
`

const Heading = styled.h1`

`;

const InputField = styled.input`
    font-size: 18px;
`;

const Label = styled.label`
    font-size: 14px;
`;


const Button = styled.button`
    font-size: 20px;
    padding: 5px 10px;
`;

const ErrorMessage = styled.p`
    font-size: 16px;
    color:red;
    font-weight: bold;
`
export default function Login(){
    let loginEmailRef = useRef();
    let loginPasswordRef = useRef();

    let signupNameRef = useRef();
    let signupEmailRef = useRef();
    let signupPasswordRef = useRef();
    let signupConfirmPasswordRef = useRef();

    let loginData = useSelector(state=>state.loginState);
    let dispatch = useDispatch();
    console.log(loginData);

    let [nameError, setNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let [confirmPasswordError, setConfirmPasswordError] = useState("");
    let validateSignup = ()=>{
        let name = signupNameRef.current.value;
        let email = signupEmailRef.current.value;
        let password = signupPasswordRef.current.value;
        let confirmPassword = signupConfirmPasswordRef.current.value;
        let hasError = false;
        if(name.length ===0) {
            hasError = true;
            setNameError("Please Enter Name!");
        }
        else setNameError("");
        if(email.length ===0 ){ 
            hasError = true;
            setEmailError("Please Enter Email!");
        }
        else if(!/.+@.+\..+/.test(email)) {
            hasError = true;
            setEmailError("Please Enter Valid Email!");
        }
        else setEmailError("");

        if(password.length===0){
            hasError = true;
            setPasswordError("Please Enter Password!")
        }
        else if(password.length <6){
            hasError = true;
            setPasswordError("Password must be at least 6 characters long!")
        }
        else setPasswordError("");

        if(password!==confirmPassword){ 
            hasError = true
            setConfirmPasswordError("Password does not match!");
        }
        else setConfirmPasswordError("");

        if(!hasError){
            dispatch(signup(name,password,email));
        }
    }
    let history = useHistory();

    let gotoDisplay = ()=> history.push("/display");
    let signupData = useSelector(state=>state.signupState);
    console.log(signupData);
    return(
        <Container>
            <MainContainer>
                <Divider>
                    <Heading>Login</Heading>
                    <Label htmlFor="emailLogin"> Email: </Label>
                    <InputField ref={loginEmailRef} type="email" name="emailLogin"/>
                    <Label htmlFor="passwordLogin" > Password: </Label>
                    <InputField type="password" name="passwordLogin" ref={loginPasswordRef} />
                        <ErrorMessage>{loginData.error}</ErrorMessage>
                    <Button onClick={()=>dispatch(login(loginEmailRef.current.value,loginPasswordRef.current.value,gotoDisplay))} disabled={loginData.loading}> Login </Button>
                </Divider>
                <Divider>
                    <Heading>Signup</Heading>
                    <Label htmlFor="nameSignup"> Name: </Label>
                    <InputField type="text" name="nameSignup" ref={signupNameRef}/>
                    <ErrorMessage>{nameError}</ErrorMessage>
                    <Label htmlFor="emailSignup"> Email: </Label>
                    <InputField type="email" name="emailSignup" ref={signupEmailRef}/>
                    <ErrorMessage>{emailError}</ErrorMessage>
                    <Label htmlFor="passwordSignup"> Password: </Label>
                    <InputField type="password" name="passwordSignup" ref={signupPasswordRef}/>
                    <ErrorMessage>{passwordError}</ErrorMessage>
                    <Label htmlFor="confirmPasswordSignup"> Confirm-Password: </Label>
                    <InputField type="password" name="confirmPasswordSignup" ref={signupConfirmPasswordRef}/>
                    <ErrorMessage>{confirmPasswordError}</ErrorMessage>
                    <Button onClick={()=>validateSignup()} disabled={signupData.loading}> Signup </Button>
                </Divider>
            </MainContainer>
        </Container>
    )
}