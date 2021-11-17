import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const TopBox = styled.div`
  width: 400px;
  height: 20vh;
  position: fixed;
  top: 0;
  left: calc(50vw - (400px / 2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
    color: #fff;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    color: #fff;
  }

  @media (max-width: 880px) {
    top: 20px;
  }
`;

const BottomBox = styled.div`
  width: 400px;
  height: 20vh;
  position: fixed;
  bottom: 0;
  left: calc(50vw - (400px / 2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
`;

const ToStartButton = styled.button`
  width: 202px;
  height: 45px;
  background: #8c97ea;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

const AlreadyThankfulButton = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  background-color: #4d65a8;
  cursor: pointer;
`;

export { Container, TopBox, BottomBox, ToStartButton, AlreadyThankfulButton };
