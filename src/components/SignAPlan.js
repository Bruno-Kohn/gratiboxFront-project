import TopMessage from './TopMessage.js';
import PlanChoice from '../images/plan_choice.jpg';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [dropPlan, setDropPlan] = useState(true);
  const [dropDelivery, setDropDelivery] = useState(false);
  const [dropProducts, setDropProducts] = useState(false);
  const [radioPlan, setRadioPlan] = useState('Semanal');
  const [radioDay, setRadioDay] = useState('Segunda');
  const [isCheckedCha, setIsCheckedCha] = useState(false);
  const [isCheckedIncensos, setIsCheckedIncensos] = useState(false);
  const [isCheckedProdutos, setIsCheckedProdutos] = useState(false);

  const plan = ['Mensal', 'Semanal'];
  const deliveryMonthly = ['Dia 01', 'Dia 10', 'Dia 20'];
  const deliveryWeekly = ['Segunda', 'Quarta', 'Sexta'];

  console.log(radioPlan);
  console.log(radioDay);
  console.log({
    Cha: isCheckedCha,
    Incenso: isCheckedIncensos,
    Produto: isCheckedProdutos,
  });

  function toSubmitPlanInfo() {
    if (!isCheckedCha && !isCheckedIncensos && !isCheckedProdutos) {
      return alert('Você deve escolher ao menos uma opção dos produtos');
    }
    navigate('/your-info');
  }

  return (
    <Container>
      <TopMessage />
      <BottomBox>
        <img src={PlanChoice} alt='plan' />
        <ChoiceBox>
          <Choice>
            <h1>Plano</h1>
            {dropPlan ? (
              <BsArrowUp onClick={() => setDropPlan(!dropPlan)} />
            ) : (
              <BsArrowDown onClick={() => setDropPlan(!dropPlan)} />
            )}
          </Choice>
          <DropChoice visible={dropPlan}>
            {plan.map((i) => (
              <Box>
                <input
                  type='radio'
                  checked={radioPlan === i}
                  value={i}
                  onChange={(e) => {
                    setRadioPlan(e.target.value);
                    i === 'Mensal'
                      ? setRadioDay('Dia 01')
                      : setRadioDay('Segunda');
                  }}
                />
                <label>{i}</label>
              </Box>
            ))}
          </DropChoice>
        </ChoiceBox>
        {radioPlan === 'Mensal' ? (
          <ChoiceBox>
            <Choice>
              <h1>Entrega</h1>
              {dropDelivery ? (
                <BsArrowUp onClick={() => setDropDelivery(!dropDelivery)} />
              ) : (
                <BsArrowDown onClick={() => setDropDelivery(!dropDelivery)} />
              )}
            </Choice>
            <DropChoice visible={dropDelivery}>
              {deliveryMonthly.map((i) => (
                <Box>
                  <input
                    type='radio'
                    checked={radioDay === i}
                    value={i}
                    onChange={(e) => {
                      setRadioDay(e.target.value);
                    }}
                  />
                  <label>{i}</label>
                </Box>
              ))}
            </DropChoice>
          </ChoiceBox>
        ) : (
          <ChoiceBox>
            <Choice>
              <h1>Entrega</h1>
              {dropDelivery ? (
                <BsArrowUp onClick={() => setDropDelivery(!dropDelivery)} />
              ) : (
                <BsArrowDown onClick={() => setDropDelivery(!dropDelivery)} />
              )}
            </Choice>
            <DropChoice visible={dropDelivery}>
              {deliveryWeekly.map((i) => (
                <Box>
                  <input
                    type='radio'
                    checked={radioDay === i}
                    value={i}
                    onChange={(e) => {
                      setRadioDay(e.target.value);
                    }}
                  />
                  <label>{i}</label>
                </Box>
              ))}
            </DropChoice>
          </ChoiceBox>
        )}
        <ChoiceBox>
          <Choice>
            <h1>Quero Receber</h1>
            {dropProducts ? (
              <BsArrowUp onClick={() => setDropProducts(!dropProducts)} />
            ) : (
              <BsArrowDown onClick={() => setDropProducts(!dropProducts)} />
            )}
          </Choice>
          <DropChoice visible={dropProducts}>
            <Box>
              <input
                type='checkbox'
                checked={isCheckedCha}
                onChange={(e) => {
                  setIsCheckedCha(e.target.checked);
                }}
              />
              <label>Chás</label>
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
            </Box>
            <Box>
              <input
                type='checkbox'
                checked={isCheckedProdutos}
                onChange={(e) => {
                  setIsCheckedProdutos(e.target.checked);
                }}
              />
              <label>Produtos orgânicos</label>
            </Box>
          </DropChoice>
        </ChoiceBox>
        <NextButton bottom='-70px' onClick={() => toSubmitPlanInfo()}>
          Próximo
        </NextButton>
      </BottomBox>
    </Container>
  );
}
