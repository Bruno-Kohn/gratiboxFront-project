import {
  Container,
  TopMessage,
  BottomBox,
  PlanMessage,
  ToSignPlanButton,
} from '../styles/PlansStyle.js';
import PlanImage from '../images/plans_image.png';

export default function Plans() {
  return (
    <Container>
      <TopMessage>
        <h1>Bom te ver por aqui, @User</h1>
        <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      </TopMessage>
      <BottomBox>
        <img src={PlanImage} alt='plan' />
        <PlanMessage>
          <h1>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </h1>
          <ToSignPlanButton>Assinar</ToSignPlanButton>
        </PlanMessage>
      </BottomBox>
    </Container>
  );
}
