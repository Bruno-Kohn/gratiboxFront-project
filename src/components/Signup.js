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
import { useState } from 'react';
import { trySignup } from '../services/api.service.js';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [clicked, setClicked] = useState(false);

  function toSignup(ev) {
    ev.preventDefault();
    setClicked(true);
    const user = { name, email, password, passwordConfirmation };

    if (passwordConfirmation !== password) {
      alert('Passwords do not match, please retype');
      setClicked(false);
      setPassword('');
      setPasswordConfirmation('');
    } else {
      trySignup(user)
        .then(() => {
          navigate('/login');
        })
        .catch((err) => {
          console.log(err);
          setName('');
          setEmail('');
          setPassword('');
          setPasswordConfirmation('');
          setClicked(false);
          alert('Oh no! Something went wrong. Please try again');
        });
    }
  }

  return (
    <Container>
      <Holder>
        <TopMessage>Bem vindo ao GratiBox</TopMessage>
        <ContainerForm>
          <form onSubmit={toSignup}>
            <InputForms
              type='text'
              placeholder='Nome'
              pattern='.{3,}'
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={clicked}
            />
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
              pattern='.{6,20}'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={clicked}
            />
            <InputForms
              type='password'
              placeholder='Confirmar senha'
              pattern='.{6,20}'
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              disabled={clicked}
            />
            <FormButton type='submit' disabled={clicked}>
              Cadastrar
            </FormButton>
          </form>
        </ContainerForm>
        <Link to='/login'>
          <BottomText>Já tem um cadastro? Entre agora!</BottomText>
        </Link>
      </Holder>
    </Container>
  );
}
