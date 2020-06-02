import React from 'react';
import styled, {css} from 'styled-components';
import bg from '../assets/action-3195378.png'
import {Button} from "./Button";
import arrow from "../assets/arrow.png";
import {IconArrow} from "../assets/Arrow";

export const mobile = css`
  width: 289px;
  position: absolute;
    padding: 62px 20px;
  transform: rotateY(180deg);
  
`

const Wrapper = styled.div`
  width: 50%;
  background: url(${bg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 53px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  ${props => props.mobile && mobile};
  
`

const Title = styled.h1`
    text-shadow: 0 0 4px #4d2027;
    color: #fefefe;
    font-family: Roboto;
    font-size: 21px;
    font-weight: 700;
    margin: 0;
`

const P = styled.p`
  margin-top: 56px;  
  text-align: center;
  text-shadow: 0 0 4px #4d2027;
  color: #ffffff;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > button:not(:first-child) {
    margin-left: 5px;
  }
`
const GoToLogin = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Arrow = styled.div`
  margin-right: 5px;
  transform: rotate(180deg);
  svg {
    fill: #FFF;
    width: 13px;
    height: 13px;
    position: relative;
    top: 2px;
}
`

export const NewHere = ({mobile, onClickLogin}) => {
    return (
        <Wrapper className="new-here" mobile={mobile}>
            <GoToLogin  className="new-here__tologgin">
                <Button onClick={onClickLogin} size={"small"} color={"white"}>
                    Login
                    <Arrow className="new-here__arrow">
                        <IconArrow/>
                    </Arrow>
                </Button>
            </GoToLogin>

            <Title  className="new-here__title">New here?</Title>
            <P  className="new-here__paragraph">
                Apply for membership to the <br/>
                project. You must be a expert in <br/>
                your field, a good teacher and <br/>
                genuinely interested in helping <br/>
                others with you expertise.
                <br/>
                <br/>

                You can also check out the
                demo first.
            </P>
            <ButtonsContainer  className="new-here__buttons-conainer">
                <Button size={"small"} color={"white"}>
                    Apply
                </Button>
                <Button size={"small"} color={"white"}>
                    Demo
                </Button>

            </ButtonsContainer>

        </Wrapper>
    )
}