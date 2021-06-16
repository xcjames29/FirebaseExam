import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { getDisplayData } from "../redux/action/action";
import Cards from "./Cards";
import AddDialog from "./AddDialog";


const Wrapper = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100vw;
`;
const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #494949;

`;

const MainContent = styled.div`
    background-color: white;
    height: 90vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
`;

const Header = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    gap: 20px;
   
`;

const Title = styled.h1``;

const SelectCategory = styled.select`
    font-size: 20px;
    height: fit-content;
`;
const OptionsCategory = styled.option``;

const AddItemButton = styled.button`
    padding: 5px 20px;
    font-size: 20px;
`;
const WrapperCategory= styled.div``;

export default function Display() {
    let dispatch = useDispatch();

    let displayData = useSelector(state => state.displayState);
    let [showDialog,setShowDialog]= useState(false);
    useEffect(() => {
        dispatch(getDisplayData());
        // eslint-disable-next-line
    }, [])

    let [categoryFilter, setCategoryFilter] = useState("All");
    console.log("display", displayData);
    return (
        <Wrapper>
        {showDialog&& <AddDialog dialog={setShowDialog} />}
        <MainContainer>
            <MainContent>
                <Header>
                    <Title>Storage Items</Title>
                    <WrapperCategory>
                        Filter Category: 
                    <SelectCategory value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        <OptionsCategory value="All">All</OptionsCategory>
                        <OptionsCategory value="Mobile">Mobile</OptionsCategory>
                        <OptionsCategory value="Laptop">Laptop</OptionsCategory>
                        <OptionsCategory value="Appliance">Appliance</OptionsCategory>
                    </SelectCategory>
                    </WrapperCategory>
                    <AddItemButton onClick={()=>setShowDialog(true)}>Add new</AddItemButton>
                </Header>
                <CardContainer>
                    {displayData.display.map(e => {
                        console.log(e);
                        if (categoryFilter === "All") return <Cards key={Date.now() + "-" + e.name} name={e.name} desc={e.description} category={e.category} price={e.price} image={e.image} />
                        else {
                            if(e.category === categoryFilter.toLocaleLowerCase()){
                                return <Cards key={Date.now() + "-" + e.name} name={e.name} desc={e.description} category={e.category} price={e.price} image={e.image} />
                            }
                            else return <> </>
                        }
                    })}
                </CardContainer>
            </MainContent>
            
        </MainContainer>
       
        </Wrapper>
    )
}