import {
  Container,
  TopMessage,
  BottomBox,
  PlanMessage,
  ToSignPlanButton,
} from '../styles/PlansStyle.js';
import WeekPlan from '../images/plans_week.png';
import MonthPlan from '../images/plans_month.jpg';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';
import { Link } from 'react-router-dom';

export default function Plans() {
  const { userData } = useContext(UserContext);
  const userName = userData.name?.split(' ')[0];

  return (
    <Container>
      <TopMessage>
        <h1>Bom te ver por aqui, {userName}</h1>
        <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      </TopMessage>
      <BottomBox>
        <img src={WeekPlan} alt='plan' />
        <PlanMessage>
          <h1>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </h1>
          <Link to='/sign-a-plan'>
            <ToSignPlanButton>Assinar</ToSignPlanButton>
          </Link>
        </PlanMessage>
      </BottomBox>
      <BottomBox>
        <img src={MonthPlan} alt='plan' />
        <PlanMessage>
          <h1>
            Você recebe um box por mês. Ideal para quem está começando agora.
          </h1>
          <Link to='/sign-a-plan'>
            <ToSignPlanButton>Assinar</ToSignPlanButton>
          </Link>
        </PlanMessage>
      </BottomBox>
    </Container>
  );
}
