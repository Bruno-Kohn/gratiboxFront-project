import TopMessage from './TopMessage.js';
import PlanChoice from '../images/plan_choice.jpg';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Check from './Check.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  NextButton,
  DropChoice,
  Choice,
  ChoiceBox,
  BottomBox,
} from '../styles/InfosStyle.js';

export default function SignAPlan() {
  const [dropPlan, setDropPlan] = useState(true);
  const [dropDelivery, setDropDelivery] = useState(false);
  const [dropProducts, setDropProducts] = useState(false);
  const [radioPlan, setRadioPlan] = useState('Semanal');
  const [radioDay, setRadioDay] = useState('Segunda');
  const [isCheckedCha, setIsCheckedCha] = useState(false);
  const [isCheckedIncensos, setIsCheckedIncensos] = useState(false);
  const [isCheckedProdutos, setIsCheckedProdutos] = useState(false);
  const choice = [
    {
      title: 'Plano',
      option: ['Mensal', 'Semanal'],
      drop: dropPlan,
    },
    {
      title: 'Entrega',
      option: ['Segunda', 'Quarta', 'Sexta', 'Dia 01', 'Dia 10', 'Dia 20'],
      drop: dropDelivery,
    },
    {
      title: 'Quero Receber',
      option: ['Chás', 'Incensos', 'Produtos orgânicos'],
      drop: dropProducts,
    },
  ];

  console.log(radioPlan);
  console.log(radioDay);
  console.log({
    Cha: isCheckedCha,
    Incenso: isCheckedIncensos,
    Produto: isCheckedProdutos,
  });

  return (
    <Container>
      <TopMessage />
      <BottomBox>
        <img src={PlanChoice} alt='plan' />
        {choice.map((i, key) => (
          <ChoiceBox key={key}>
            <Choice>
              <h1>{i.title}</h1>{' '}
              {i.drop ? (
                <BsArrowUp
                  onClick={() =>
                    i.title === 'Plano'
                      ? setDropPlan(!dropPlan)
                      : i.title === 'Entrega'
                      ? setDropDelivery(!dropDelivery)
                      : setDropProducts(!dropProducts)
                  }
                />
              ) : (
                <BsArrowDown
                  onClick={() =>
                    i.title === 'Plano'
                      ? setDropPlan(!dropPlan)
                      : i.title === 'Entrega'
                      ? setDropDelivery(!dropDelivery)
                      : setDropProducts(!dropProducts)
                  }
                />
              )}
            </Choice>
            <DropChoice visible={i.drop}>
              {i.title !== 'Quero Receber' ? (
                i.option.map((j, key) => (
                  <Box key={key}>
                    <input
                      type='radio'
                      checked={
                        i.title === 'Plano' ? radioPlan === j : radioDay === j
                      }
                      value={j}
                      onChange={(e) => {
                        i.title === 'Plano'
                          ? setRadioPlan(e.target.value)
                          : setRadioDay(e.target.value);
                      }}
                    />
                    <label>{j} </label>
                    <br />
                  </Box>
                ))
              ) : (
                <>
                  <Box>
                    <input
                      type='checkbox'
                      checked={isCheckedCha}
                      onChange={(e) => {
                        setIsCheckedCha(e.target.checked);
                      }}
                    />
                    <label>Chas</label>
                    <br />
                  </Box>
                  <Box>
                    <input
                      type='checkbox'
                      checked={isCheckedIncensos}
                      onChange={(e) => {
                        setIsCheckedIncensos(e.target.checked);
                      }}
                    />
                    <label>Incensos</label>
                    <br />
                  </Box>
                  <Box>
                    <input
                      type='checkbox'
                      checked={isCheckedProdutos}
                      onChange={(e) => {
                        setIsCheckedProdutos(e.target.checked);
                      }}
                    />
                    <label>Produtos Organicos</label>
                    <br />
                  </Box>
                </>
              )}
            </DropChoice>
          </ChoiceBox>
        ))}

        <Link
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          to='/your-info'
        >
          <NextButton bottom='-70px'>Próximo</NextButton>
        </Link>
      </BottomBox>
    </Container>
  );
}
