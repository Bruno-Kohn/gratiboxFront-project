import TopMessage from './TopMessage.js';
import { Container, BottomBox, NextButton } from '../styles/InfosStyle.js';
import PlanChoice from '../images/plan_choice.jpg';
import styled from 'styled-components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function YourInfo() {
  const [drop, setDrop] = useState(false);
  const siglas = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  return (
    <Container>
      <TopMessage />
      <BottomBox>
        <img src={PlanChoice} alt='plan' />
        <form>
          <Primary placeholder='Nome completo' />
          <Primary placeholder='Endereço de entrega' />
          <Primary placeholder='CEP' />
          <SecundaryBox>
            <SecundaryCity placeholder='Cidade' />
            <StateBox>
              <SecundaryState>
                <h1>Estado</h1>
                {drop ? (
                  <BsArrowDown onClick={() => setDrop(false)} />
                ) : (
                  <BsArrowUp onClick={() => setDrop(true)} />
                )}
              </SecundaryState>
              <DropChoice visible={drop}>
                {siglas.map((i) => (
                  <State>
                    <h1>{i}</h1>
                  </State>
                ))}
              </DropChoice>
            </StateBox>
          </SecundaryBox>
        </form>
      </BottomBox>
      <Link
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        to='/details'
      >
        <NextButton>Finalizar</NextButton>
      </Link>
    </Container>
  );
}

const Primary = styled.input`
  width: 100%;
  height: 44px;
  background-color: rgba(224, 209, 237, 0.62);
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  padding-left: 10px;
  border: none;
  margin-bottom: 10px;

  ::placeholder {
    color: #4d65a8;
  }
`;

const SecundaryBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SecundaryCity = styled.input`
  width: 60%;
  height: 44px;
  background-color: green;
  border-radius: 5px;
  border: none;
  background-color: rgba(224, 209, 237, 0.62);
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  padding-left: 10px;

  ::placeholder {
    color: #4d65a8;
  }
`;

const StateBox = styled.div`
  width: 37%;
  height: auto;
  border-radius: 5px;
  background-color: rgba(224, 209, 237, 0.62);
  margin-bottom: 10px;
`;

const SecundaryState = styled.div`
  width: 100%;
  height: 44px;
  background-color: blue;
  border-radius: 5px;
  border: none;
  background-color: rgba(224, 209, 237, 0.62);
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropChoice = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  background-color: rgb(224, 209, 237);
  padding: 5px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  overflow: scroll;

  h1 {
    margin-left: 5px;
    font-size: 18px;
    color: #4d65a8;
  }
`;

const State = styled.div`
  width: 100%;
  height: auto;
  margin: 3px 0;
`;
