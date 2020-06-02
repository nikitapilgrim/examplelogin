import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import {WelcomeBack} from "./components/WelcomeBack";
import {NewHere} from "./components/NewHere";
import {useWindowSize} from 'react-use';
import bg from './assets/Zeichenfläche_1.png'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  perspective: 1000px;
`

const Overlay = styled.div`
position:fixed;
z-index:-1;
height:100%;
width:100%;
background-color: #4a362a;
background-color: #332e23;
opacity: 0.9;
`;

const Bg = styled.div`
  position:fixed;
z-index:-2;
height:100%;
width:100%;
background: url(${bg});
background-size: cover;
    background-position: 50% 50%;
`

const Content = styled.section`
  display: flex;
  justify-content: center;
  max-width: 578px;
  height: 384px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.35);
  ${props => props.signup && `transform: rotateY(180deg)`};
`;

const App = () => {
    const {width, height} = useWindowSize();
    const [signup, setSignup] = useState(false);

    const handleShowSignup = (e) => {
        setSignup(!signup);
    }

    useEffect(() => {
        if (width > 1200) setSignup(false)
    }, [width])


    return (
        <React.Fragment>
            <Overlay className="overlay"/>
            <Bg className="background"/>
            <Wrapper className="wrapper">
                <Content className="wrapper__container" signup={signup}>
                    <WelcomeBack onClickSignup={handleShowSignup} mobile={width <= 1200}/>
                    <NewHere onClickLogin={handleShowSignup} mobile={width <= 1200}/>
                </Content>
            </Wrapper>
        </React.Fragment>
    );
}
const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Dave"/>, mountNode);
