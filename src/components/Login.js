import {
  Container,
  Holder,
  TopMessage,
  ContainerForm,
  InputLogin,
  FormButton,
  BottomText,
} from '../styles/RegistrationStyles.js';

export default function Login() {
  return (
    <Container>
      <Holder>
        <TopMessage>Bem vindo ao GratiBox</TopMessage>
        <ContainerForm>
          <form>
            <InputLogin type='email' placeholder='E-mail' />
            <InputLogin type='password' placeholder='Senha' />
            <FormButton type='submit'>Login</FormButton>
          </form>
        </ContainerForm>
        <BottomText>Ainda não sou grato</BottomText>
      </Holder>
    </Container>
  );
}
