import {
  Container,
  Holder,
  TopMessage,
  ContainerForm,
  InputForms,
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
            <InputForms type='email' placeholder='E-mail' />
            <InputForms type='password' placeholder='Senha' />
            <FormButton type='submit'>Login</FormButton>
          </form>
        </ContainerForm>
        <BottomText>Ainda não sou grato</BottomText>
      </Holder>
    </Container>
  );
}
