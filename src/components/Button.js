import React from 'react';
import styled, {css} from 'styled-components';

const Small = css`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #ffffff;
  &:hover {
    background-color: #fff;
    color: #32101F;
    svg {
      fill: #32101F;
    }
  }
`
const mobile = css`
border-radius: 10px;
border: 3px solid #ff6000;
  padding: 10px 20px;

`

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border: none;
  background: none;
  color:  ${props => props.color};
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  border: 3px solid ${props => props.color};
  padding: 9px 43px;
  border-radius: 5px;
  transition-duration: 0.25s;
  cursor: pointer;
   &:hover {
    background-color: #ff6000;
    color: white;
  }
  ${props => props.size === 'small' && Small};
  ${props => props.mobile && mobile};
 
`;

export const Button = ({children, color, size, onClick, mobile}) => {
    const colors = {
        white: '#FFF',
        default: '#ff6000'
    }

    return (
        <Wrapper className="button" mobile={mobile} size={size} color={colors[color] || colors['default']} onClick={onClick}>
            {children}
        </Wrapper>
    )
}
