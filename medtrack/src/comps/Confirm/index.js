import React from 'react';
import styled from 'styled-components';
import Button from 'comps/Button';

const Container = styled.div`
    min-width: 352px;
    min-height: 241px;
    background-color: #fff;
    border-radius: 10px;
    z-index: 20;
    // display: ${props=>props.display ? "inline-flex" : "none"};
    display: inline-flex;
    flex-direction: column;
    position: relative;
    top:${props=>props.top ? props.top : "-35vh"};
    // top: -35vh;
    right: -7vw;
`;

const TopCont = styled.div`
    min-height: 77px;
    max-height: 100px;
    background: #06719D;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    color: #fff;
    display flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const ConfirmTitle = styled.h4`
    text-transform: capitalize;
`;

const ConfirmSubtitle = styled.p``;

const BottomCont = styled.div`
    display: inline-flex;
    flex-direction: column;   
    align-items: center;
    justify-content: center; 
    padding: 20px;

    & > * {
        margin: 10px 0px;
    }
`;

const ConfirmImage = styled.img`
    min-width: 115px;
    height: auto;
`;

const Confirm = ({top, display, title, subtitle, imgurl, text1, text2, onTop, onBottom}) => {

    return <Container display={display} top={top}
    >
        <TopCont>
            <ConfirmTitle>{title}</ConfirmTitle>
            <ConfirmSubtitle>{subtitle}</ConfirmSubtitle>
        </TopCont>
        <BottomCont>
            <ConfirmImage src={imgurl}/>
            <Button text={text1} onClick={onTop}/>
            <Button text={text2} bgcolor="#63AAC8" onClick={onBottom}/>
        </BottomCont>
    </Container> 
};

Confirm.defaultProps = {
    display: null,
    onTop:()=>{},
    onBottom:()=>{},
    title:"donepezil",
    subtitle:"was deleted successfully",
    imgurl: "/check-one.svg",
    text1: "Go to Home",
    text2: "Back to Meds",
    top:null
};

export default Confirm;