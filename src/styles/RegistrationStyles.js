import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #6d7ce4;
`;

const Holder = styled.div`
  height: auto;
  padding-top: calc(100vh / 5);
`;

const TopMessage = styled.h1`
  color: #ffffff;
  font-size: 28px;
  line-height: 32.81px;
  text-align: center;
  margin-bottom: 25px;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  text-align: center;
`;

const InputLogin = styled.input`
  width: 326px;
  height: 64px;
  border-radius: 10px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-size: 24px;
  ::placeholder {
    font-size: 20px;
    color: rgba(96, 72, 72, 0.4);
  }
`;

const FormButton = styled.button`
  width: 237px;
  height: 56px;
  border-radius: 10px;
  background-color: #8c97ea;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 30px;
`;

const BottomText = styled.h2`
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
`;

export {
  Container,
  Holder,
  TopMessage,
  ContainerForm,
  InputLogin,
  FormButton,
  BottomText,
};
