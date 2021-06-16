import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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

    let signUpAttemp = () =>{
        console.log(signupNameRef.current.value);
        console.log(signupPasswordRef.current.value);
        console.log(signupConfirmPasswordRef.current.value);
        console.log(signupEmailRef.current.value);
    }

    let loginData = useSelector(state=>state.loginState);
    let dispatch = useDispatch();
    console.log(loginData);
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
                    <Button onClick={()=>dispatch(login(loginEmailRef.current.value,loginPasswordRef.current.value))} disabled={loginData.loading}> Login </Button>
                </Divider>
                <Divider>
                    <Heading>Signup</Heading>
                    <Label htmlFor="nameSignup"> Name: </Label>
                    <InputField type="text" name="nameSignup" ref={signupNameRef}/>
                    <Label htmlFor="emailSignup"> Email: </Label>
                    <InputField type="email" name="emailSignup" ref={signupEmailRef}/>
                    <Label htmlFor="passwordSignup"> Password: </Label>
                    <InputField type="password" name="passwordSignup" ref={signupPasswordRef}/>
                    <Label htmlFor="confirmPasswordSignup"> Confirm-Password: </Label>
                    <InputField type="password" name="confirmPasswordSignup" ref={signupConfirmPasswordRef}/>
                    <Button onClick={()=>dispatch(signup(signupNameRef.current.value,signup))}> Login </Button>
                </Divider>
            </MainContainer>
        </Container>
    )
}