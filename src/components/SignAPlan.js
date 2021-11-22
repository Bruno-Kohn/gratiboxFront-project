import TopMessage from './TopMessage.js';
import PlanChoice from '../images/plan_choice.jpg';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState, useContext, useEffect } from 'react';
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
import UserContext from '../contexts/UserContext.js';
import { tryToGetInfos } from '../services/api.service.js';

export default function SignAPlan() {
  const navigate = useNavigate();
  const { setOrder } = useContext(UserContext);
  const [dropPlan, setDropPlan] = useState(true);
  const [dropDelivery, setDropDelivery] = useState(false);
  const [dropProducts, setDropProducts] = useState(false);
  const [radioPlan, setRadioPlan] = useState('Semanal');
  const [radioDay, setRadioDay] = useState(1);
  const [isCheckedCha, setIsCheckedCha] = useState(false);
  const [isCheckedIncensos, setIsCheckedIncensos] = useState(false);
  const [isCheckedProdutos, setIsCheckedProdutos] = useState(false);
  const [deliveryMonthly, setDeliveryMonthly] = useState([]);
  const [deliveryWeekly, setDeliveryWeekly] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      tryToGetInfos()
        .then((resp) => {
          setDeliveryWeekly(resp.data.days.rows.slice(0, 3));
          setDeliveryMonthly(resp.data.days.rows.slice(3, 6));
          setProducts(resp.data.products.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // eslint-disable-next-line
    []
  );

  const plan = ['Mensal', 'Semanal'];

  function toSubmitPlanInfo() {
    if (!isCheckedCha && !isCheckedIncensos && !isCheckedProdutos) {
      return alert('Você deve escolher ao menos uma opção dos produtos');
    }
    const planInfo = {
      radioDay,
      Cha: isCheckedCha,
      Incenso: isCheckedIncensos,
      Produto: isCheckedProdutos,
    };

    setOrder(planInfo);
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
                    i === 'Mensal' ? setRadioDay(4) : setRadioDay(1);
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
                    checked={radioDay === Number(i.id)}
                    value={Number(i.id)}
                    onChange={(e) => {
                      setRadioDay(Number(e.target.value));
                    }}
                  />
                  <label>{i.delivery_name}</label>
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
                    checked={radioDay === Number(i.id)}
                    value={Number(i.id)}
                    onChange={(e) => {
                      setRadioDay(Number(e.target.value));
                    }}
                  />
                  <label>{i.delivery_name}</label>
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
              <label>{products[0]?.product_name}</label>
            </Box>
            <Box>
              <input
                type='checkbox'
                checked={isCheckedIncensos}
                onChange={(e) => {
                  setIsCheckedIncensos(e.target.checked);
                }}
              />
              <label>{products[1]?.product_name}</label>
            </Box>
            <Box>
              <input
                type='checkbox'
                checked={isCheckedProdutos}
                onChange={(e) => {
                  setIsCheckedProdutos(e.target.checked);
                }}
              />
              <label>{products[2]?.product_name}</label>
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
