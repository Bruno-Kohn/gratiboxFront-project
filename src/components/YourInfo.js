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
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext.js';
import { tryToSignAPlan } from '../services/api.service.js';

export default function YourInfo() {
  const { order, setOrder } = useContext(UserContext);
  const navigate = useNavigate();
  const [drop, setDrop] = useState(false);
  const [name, setName] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('Estado');
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
  console.log(order, 'aaaaa');

  function sendDetails() {
    if (
      name === '' ||
      endereco === '' ||
      cep === '' ||
      cidade === '' ||
      estado === 'Estado'
    ) {
      return alert('Informações incompletas, favor preencher corretamente');
    }
    if (cep.length !== 8) {
      return alert('CEP preenchido incorretamente, favor verifique');
    }
    setOrder({ ...order, nome: name, endereco, cep, cidade, estado });
    console.log(order, 'bbbbb');
    tryToSignAPlan(order)
      .then((resp) => {
        navigate('/details');
      })
      .catch(() => {
        alert('Algo deu errado. Tente novamente mais tarde');
      });
  }

  return (
    <Container>
      <TopMessage />
      <BottomBox>
        <img src={PlanChoice} alt='plan' />

        <Primary
          placeholder='Nome completo'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Primary
          placeholder='Endereço de entrega'
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <Primary
          placeholder='CEP'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <SecundaryBox>
          <SecundaryCity
            placeholder='Cidade'
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <StateBox>
            <SecundaryState>
              <h1>{estado}</h1>
              {drop ? (
                <BsArrowUp onClick={() => setDrop(false)} />
              ) : (
                <BsArrowDown onClick={() => setDrop(true)} />
              )}
            </SecundaryState>
            <DropChoiceInfo visible={drop}>
              {siglas.map((i) => (
                <State
                  onClick={() => {
                    setEstado(i);
                    setDrop(false);
                  }}
                >
                  <h1>{i}</h1>
                </State>
              ))}
            </DropChoiceInfo>
          </StateBox>
        </SecundaryBox>
        <NextButton bottom='-70px' type='submit' onClick={() => sendDetails()}>
          Finalizar
        </NextButton>
      </BottomBox>
    </Container>
  );
}
