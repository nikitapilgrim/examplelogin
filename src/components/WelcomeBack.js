import React from 'react';

import styled, {css} from 'styled-components';
import {Input} from "./Input";
import {Button} from "./Button";
import {IconFacebook} from "../assets/Facebook";
import {IconTwitter} from "../assets/TwitterIcon";
import {IconGoogle} from "../assets/Google";


const mobile = css`
  width: 289px;
  position: absolute;  
  padding: 62px 20px;

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding: 62px 53px;
  background-color: #FFF;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  ${props => props.mobile && mobile};
`

const Header = styled.h1`
  color: #ff6000;
  font-family: Roboto;
  font-size: 21px;
  font-weight: 700;
  margin: 0;
`

const InputWrapper = styled.div`
  margin-top: 56px;
  & > div:not(:first-child) {
    margin-top:5px;
  }
`

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
   & > button:not(:first-child) {
    margin-left: 5px;
  }
`

const Soc = styled.div`
  margin-top: 16px;
  svg {
    width: 22px;
    height: 22px;
    fill: #ff6000;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`


export const WelcomeBack = ({mobile, onClickSignup}) => {


    return (
        <Wrapper className="welcome-back" mobile={mobile}>
            <Header className="welcome-back__title">Welcome back!</Header>
            <InputWrapper className="welcome-back__input-wrapper">
                <Input type={"user"}/>
                <Input type={"password"}/>
            </InputWrapper>
            <ButtonContainer className="welcome-back__button-container">
                <Button mobile={mobile}>Login</Button>
                {mobile && <Button onClick={onClickSignup} mobile={mobile}>Sign up</Button>}
            </ButtonContainer>
            <Soc className="welcome-back__soc">
                <IconFacebook/>
                <IconGoogle/>
                <IconTwitter/>
            </Soc>
        </Wrapper>
    )
}