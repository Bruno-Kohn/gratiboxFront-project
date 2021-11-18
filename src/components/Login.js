import {
  Container,
  Holder,
  TopMessage,
  ContainerForm,
  InputForms,
  FormButton,
  BottomText,
} from '../styles/RegistrationStyles.js';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext.js';
import { tryLogin } from '../services/api.service.js';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const { setUserData } = useContext(UserContext);

  function toLogin(ev) {
    ev.preventDefault();
    setClicked(true);
    const user = { email, password };

    tryLogin(user)
      .then((resp) => {
        setUserData(resp.data);
        localStorage.setItem('loginUser', JSON.stringify(resp.data));
        navigate('/plans');
      })
      .catch(() => {
        setEmail('');
        setPassword('');
        setClicked(false);
        alert('Oh no! Something went wrong. Please try again');
      });
  }

  return (
    <Container>
      <Holder>
        <TopMessage>Bem vindo ao GratiBox</TopMessage>
        <ContainerForm>
          <form onSubmit={toLogin}>
            <InputForms
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={clicked}
            />
            <InputForms
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={clicked}
            />
            <FormButton type='submit' disabled={clicked}>
              Login
            </FormButton>
          </form>
        </ContainerForm>
        <Link to='/plans'>
          <BottomText>Ainda não sou grato</BottomText>
        </Link>
      </Holder>
    </Container>
  );
}
