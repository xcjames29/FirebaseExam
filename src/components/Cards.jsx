import styled from "styled-components";
import defaultImage from "./default.jpg"

const Wrapper = styled.div`
    border-radius: 20px;
    border: 2px solid black;
    display: flex;
    gap: 10px;
    width: 100%;
    min-height: 100px;
    padding: 10px 20px;
`;

const Img = styled.img`
    width: 50px;
    border-radius: 20px;
`;

const TextContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const NormalText = styled.p`
    font-size: 14px;
`
const TitleSpan = styled.span`
    font-weight: bold;
`;

const Heading3 = styled.h3``;
export default function Cards(props){

    return (
        <Wrapper>
            <Img src={props.image?props.image:defaultImage}/>
            <TextContainer>
                <Heading3><TitleSpan>Name:</TitleSpan> {props.name}</Heading3>
                <NormalText><TitleSpan>Price:</TitleSpan> {props.price}</NormalText>
                <NormalText><TitleSpan>Category:</TitleSpan> {props.category}</NormalText>
                <NormalText><TitleSpan>Description:</TitleSpan> {props.desc}</NormalText>
            </TextContainer>
        </Wrapper>
    )
}