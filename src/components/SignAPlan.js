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

  return (
    <Container>
      <TopMessage />
      <BottomBox>
        <img src={PlanChoice} alt='plan' />
        {choice.map((i, key) => (
          <ChoiceBox key={key}>
            <Choice>
              <h1>{i.title}</h1>
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
              {i.option.map((i, key) => (
                <Box key={key}>
                  <Check />
                  <h1>{i}</h1>
                </Box>
              ))}
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
