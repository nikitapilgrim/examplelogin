import React from 'react';
import styled from 'styled-components';
import {KeyIcon} from "../assets/Key";
import {UserIcon} from "../assets/User";


const Wrapper = styled.div`
    position: relative;
    color: #ff6000;
    font-family: Roboto;
    font-size: 21px;
    font-weight: 700;
    display: flex;
    align-items: center;
`;

const InputElem = styled.input`
  border: none;
  border-radius: 4px;
  background-color: #feedd7;
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  padding-left: 40px;
  border: 3px solid transparent;
  &:focus {
    border: 3px solid #ff6000;
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 10px;
  top: 5px;
  svg {
    width: 32px;
    height: 32px;
    fill: #ff6000;
  }
`

export const Input = ({type}) => {

    return (
        <Wrapper className="input">
            <InputElem className="input__elem" type={type}/>
            {type === "user" && <Icon className="input__icon"><UserIcon/></Icon>}
            {type === "password" && <Icon className="input__icon"><KeyIcon/></Icon>}
        </Wrapper>
    )
}