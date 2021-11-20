import TopMessage from './TopMessage.js';
import {
  Container,
  BottomBox,
  NextButton,
  Primary,
  SecundaryBox,
  SecundaryCity,
  StateBox,
  SecundaryState,
  DropChoiceInfo,
  State,
} from '../styles/InfosStyle.js';
import PlanChoice from '../images/plan_choice.jpg';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom'; //useNavigate

export default function YourInfo() {
  //const navigate = useNavigate();
  const [drop, setDrop] = useState(false);
  //const [name, setName] = useState('');
  //const [endereco, setEndereco] = useState('');
  //const [cep, setCep] = useState('');
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

  /*function toSendInfo(ev) {
    ev.preventDefault();
    const body = { name, endereco, cep };

    tryToSendInfo(body).then(() => {
      navigate('/details');
    });
  }*/

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
                  <BsArrowUp onClick={() => setDrop(false)} />
                ) : (
                  <BsArrowDown onClick={() => setDrop(true)} />
                )}
              </SecundaryState>
              <DropChoiceInfo visible={drop}>
                {siglas.map((i) => (
                  <State>
                    <h1>{i}</h1>
                  </State>
                ))}
              </DropChoiceInfo>
            </StateBox>
          </SecundaryBox>
          <Link
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            to='/details'
          >
            <NextButton bottom='-70px' type='submit'>
              Finalizar
            </NextButton>
          </Link>
        </form>
      </BottomBox>
    </Container>
  );
}
