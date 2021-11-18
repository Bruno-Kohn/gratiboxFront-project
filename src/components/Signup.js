import {
  Container,
  Holder,
  TopMessage,
  ContainerForm,
  InputForms,
  FormButton,
  BottomText,
} from '../styles/RegistrationStyles.js';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <Container>
      <Holder>
        <TopMessage>Bem vindo ao GratiBox</TopMessage>
        <ContainerForm>
          <form>
            <InputForms type='text' placeholder='Nome' />
            <InputForms type='email' placeholder='E-mail' />
            <InputForms type='password' placeholder='Senha' />
            <InputForms type='password' placeholder='Confirmar senha' />
            <FormButton type='submit'>Cadastrar</FormButton>
          </form>
        </ContainerForm>
        <Link to='/login'>
          <BottomText>Já tem um cadastro? Entre agora!</BottomText>
        </Link>
      </Holder>
    </Container>
  );
}
