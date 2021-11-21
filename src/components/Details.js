import TopMessage from './TopMessage.js';
import {
  Container,
  BottomBox,
  DetailsBox,
  DetailsInfo,
  Path,
  PathButton,
} from '../styles/InfosStyle.js';
import PlanChoice from '../images/plan_choice.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';

export default function Details() {
  const { setUserData, order } = useContext(UserContext);
  const reqBack = [
    {
      info: 'Plano',
      infoback: ' Vem do back',
    },
    {
      info: 'Data da assinatura',
      infoback: ' Vem do back',
    },
    {
      info: 'Próximas entregas',
      infoback: ' Vem do back',
    },
    {
      info: 'Produtos',
      infoback: ' Vem do back',
    },
  ];
  console.log(order);

  function logout() {
    localStorage.removeItem('loginUser');
    setUserData({});
  }
  return (
    <Container>
      <TopMessage />
      <BottomBox>
        <img src={PlanChoice} alt='plan' />
        <DetailsBox>
          {reqBack.map((i) => (
            <DetailsInfo>
              <h1>{`${i.info}: `}</h1>
              <h2>{i.infoback}</h2>
            </DetailsInfo>
          ))}
        </DetailsBox>
      </BottomBox>
      <Path>
        <Link to='/' onClick={logout}>
          <PathButton>Sair</PathButton>
        </Link>
      </Path>
    </Container>
  );
}
