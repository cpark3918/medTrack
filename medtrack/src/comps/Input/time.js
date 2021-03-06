import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  // padding: 10px;
  min-width: 100%;
  // background-color: #e5e5e5;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  // h1 {
  //   margin-bottom: 0px;
  //   margin-left: 15px;
  // }
`;

const TimeContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
`;
const ButtonContainer = styled.div`
  background-color: #094d69;
  border-radius: 26px;
  display: inline-flex;
  margin: 10px;
`;
const TimeButton = styled.button`
  min-height: 54px;
  min-width: 100px;
  margin: 4px;
  padding: 10px;
  border-radius: 26px;
  border: none;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#094d69")};
  color: #fff;
  font-size: 28px;
`;
const Time = styled.input.attrs({
  type: "time",
  max: "12:59",
})`
  color: #000000;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  max-width: 100%;
  border-radius: 5px;
  height: 40px;
  border: 1px #06719d solid;
  padding: 10px;
  box-shadow: 0px;
  outline: none;
  text-align: left;
  font-size: 2em;
  background-color: #fff;
`;

// const Text = styled.h6`
//   text-align: left;
// `;

const Input = ({ onChange }) => {
  const [clickedForm, setClickedForm] = useState("AM");
  const HandleContainerSelect = (name) => {
    // alert("clicked container "+name);
    setClickedForm(name);
  };
  return (
    <Container>
      <TimeContainer>
        {/* <Text>TIME</Text> */}
        <ButtonContainer>
          {/* <TimeButton
            onContainerSelect={HandleContainerSelect}
            name="AM"
            bgcolor={clickedForm === "AM" ? "#63AAC8" : "#094D69"}
          >
            AM
          </TimeButton>
          <TimeButton
            onContainerSelect={HandleContainerSelect}
            name="PM"
            bgcolor={clickedForm === "PM" ? "#63AAC8" : "#094D69"}
          >
            PM
          </TimeButton> */}
        </ButtonContainer>
        <Time onChange={onChange} />
      </TimeContainer>
    </Container>
  );
};

Input.defaultProps = {};
export default Input;
