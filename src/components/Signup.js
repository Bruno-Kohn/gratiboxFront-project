import {
  Container,
  Holder,
  TopMessage,
  ContainerForm,
  InputLogin,
  FormButton,
  BottomText,
} from '../styles/RegistrationStyles.js';

export default function Signup() {
  return (
    <Container>
      <Holder>
        <TopMessage>Bem vindo ao GratiBox</TopMessage>
        <ContainerForm>
          <form>
            <InputLogin type='text' placeholder='Nome' />
            <InputLogin type='email' placeholder='E-mail' />
            <InputLogin type='password' placeholder='Senha' />
            <InputLogin type='password' placeholder='Confirmar senha' />
            <FormButton type='submit'>Cadastrar</FormButton>
          </form>
        </ContainerForm>

        <BottomText>Já tem um cadastro? Entre agora!</BottomText>
      </Holder>
    </Container>
  );
}
