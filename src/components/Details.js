import TopMessage from './TopMessage.js';
import {
  Container,
  BottomBox,
  DetailsBox,
  DetailsInfo,
  Path,
  PathButton,
  Prods,
} from '../styles/InfosStyle.js';
import PlanChoice from '../images/plan_choice.jpg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext.js';
import { tryToSendDetails } from '../services/api.service.js';

export default function Details() {
  const { setUserData, order } = useContext(UserContext);
  const [reqBack, setReqBack] = useState([]);
  /*const reqBack = [
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
  ];*/
  console.log(order, 'detailsssssssssss');

  useEffect(
    () => {
      tryToSendDetails(order)
        .then((resp) => {
          console.log(resp.data);
          setReqBack(resp.data);
        })
        .catch((error) => {
          console.log(error);
          alert('Algo deu errado. Tente novamente mais tarde');
        });
    },
    // eslint-disable-next-line
    []
  );

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
              {i.info !== 'Produtos' ? (
                <Prods>{i.infoback}</Prods>
              ) : (
                i.infoback.map((j) => <Prods>{`${j} `}</Prods>)
              )}
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
