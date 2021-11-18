import homeImage from '../images/gratibox_home.png';
import {
  Container,
  TopBox,
  BottomBox,
  ToStartButton,
  AlreadyThankfulButton,
} from '../styles/HomeStyle.js';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <img src={homeImage} alt='home' />
      <TopBox>
        <h1>Bem vindo ao GratiBox</h1>
        <h2>
          Receba em casa um box com chás, produtos organicos, incensos e muito
          mais...
        </h2>
      </TopBox>
      <BottomBox>
        <Link to='/signup'>
          <ToStartButton>Quero começar</ToStartButton>
        </Link>
        <Link to='/login'>
          <AlreadyThankfulButton>Já sou grato</AlreadyThankfulButton>
        </Link>
      </BottomBox>
    </Container>
  );
}
