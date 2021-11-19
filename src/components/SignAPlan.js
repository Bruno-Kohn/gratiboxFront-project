import styled from 'styled-components';
import PlanChoice from '../images/plan_choice.jpg';
import { BsArrowDown, BsCheck2 } from 'react-icons/bs';

export default function SignAPlan() {
  return (
    <Container>
      <TopMessage>
        <h1>Bom te ver por aqui, nome</h1>
        <h2>“Agradecer é arte de atrair coisas boas”</h2>
      </TopMessage>
      <BottomBox>
        <img src={PlanChoice} alt='plan' />
        <ChoiceBox>
          <Choice>
            <h1>Plano</h1>
            <BsArrowDown />
          </Choice>
          <DropChoice>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Semanal</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Mensal</h1>
            </Box>
          </DropChoice>
        </ChoiceBox>
        <ChoiceBox>
          <Choice>
            <h1>Entrega</h1>
            <BsArrowDown />
          </Choice>
          <DropChoice>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Segunda</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Quarta</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Sexta</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Dia 01</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Dia 10</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Dia 20</h1>
            </Box>
          </DropChoice>
        </ChoiceBox>
        <ChoiceBox>
          <Choice>
            <h1>Quero receber</h1>
            <BsArrowDown />
          </Choice>
          <DropChoice>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Chás</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Incensos</h1>
            </Box>
            <Box>
              <CheckBox>
                <MarkCheck />
              </CheckBox>
              <h1>Produtos orgânicos</h1>
            </Box>
          </DropChoice>
        </ChoiceBox>
      </BottomBox>
      <NextButton>Próximo</NextButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: #6d7ce4;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

const TopMessage = styled.div`
  width: 100vw;
  height: auto;
  padding: 10px;
  margin-bottom: 20px;

  h1 {
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 25px;
  }

  h2 {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
`;

const BottomBox = styled.div`
  width: 95vw;
  height: auto;
  background-color: #fff;
  margin: 0px 10px 0 10px;
  border-radius: 25px;
  padding: 0 20px 10px 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 28%;
  }

  @media (max-width: 1200px) {
    img {
      width: 35%;
    }
  }

  @media (max-width: 1000px) {
    img {
      width: 42%;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 50%;
    }
  }

  @media (max-width: 700px) {
    display: inherit;
    height: auto;
    img {
      width: 100%;
    }
  }
`;

const ChoiceBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #e0d1ed;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Choice = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 5px;
  background-color: #e0d1ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-weight: bold;
  font-size: 18px;
  color: #4d65a8;
`;

const DropChoice = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #e0d1ed;
  //background-color: green;
  padding: 5px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-left: 5px;
    font-size: 18px;
    color: #4d65a8;
  }
`;

const Box = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`;

const CheckBox = styled.div`
  background-color: #fff;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarkCheck = styled(BsCheck2)`
  opacity: 0;
`;

const NextButton = styled.button`
  width: 202px;
  height: 39px;
  border-radius: 10px;
  background-color: #8c97ea;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 25px;
  margin: 20px auto 0 auto;
`;
