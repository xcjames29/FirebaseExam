import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { addData } from "../redux/action/action";



const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const BlackDiv = styled.div`
    z-index: 1;
    background-color: black;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`;

const DialogContainer = styled.div`
    height: 80vh;
    width: 50vw;
    background-color: white;
    border-radius: 20px;
    box-shadow: 2px 2px 2px gray;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 2;
    gap: 10px;
    padding: 50px;
`;

const SelectCategory = styled.select`
    font-size: 20px;
    height: fit-content;
`;
const OptionsCategory = styled.option``;

const InputField = styled.input`
    font-size: 18px;
`;

const Label = styled.label`
    font-size: 14px;
`;

const Title = styled.h1`
`;

const AddButton = styled.button`
    padding: 5px 20px; 
`;
export default function AddDialog(props){
    let [category, setCategory] = useState("");
    let dispatch = useDispatch();
    let nameRef = useRef();
    let priceRef = useRef();
    let descRef = useRef();
    let imageRef = useRef();
    let validateAdd = ()=>{
        let hasError = false;
        let name = nameRef.current.value;
        let price = priceRef.current.value;
        let desc = descRef.current.value;
        let image = imageRef.current.value;
        if(name.length ===0) hasError =true;
        if(price.length ===0) hasError =true
        if(desc.length===0) hasError = true
        if(!hasError){
            dispatch(addData(name,desc,price,image))
        }
    }
    return(
        <MainContainer>
            <BlackDiv onClick={()=>props.dialog(false)}/>
            <DialogContainer>
                <Title>{props.edit?"Edit Item":"Add Item"}</Title>
                <Label htmlFor="name">Name:</Label>
                <InputField name="name" type="text" ref={nameRef}/>
                <Label htmlFor="price">Price:</Label>
                <InputField name="price" type="number" ref={priceRef}/>
                <Label htmlFor="desc">Description:</Label>
                <InputField name="desc" type="text" ref={descRef}/>
                <Label htmlFor="image">Image Link:</Label>
                <InputField name="image" type="text" ref={imageRef}/>
                <Label htmlFor="category">Category:</Label>
                <SelectCategory name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <OptionsCategory value="mobile">Mobile</OptionsCategory>
                    <OptionsCategory value="laptop">Laptop</OptionsCategory>
                    <OptionsCategory value="appliance"> Appliance </OptionsCategory>
                </SelectCategory>
                <AddButton onClick={validateAdd}>Add new</AddButton>
            </DialogContainer>
        </MainContainer>

    )
}