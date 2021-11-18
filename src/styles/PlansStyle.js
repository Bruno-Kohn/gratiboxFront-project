import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #6d7ce4;
  padding-top: 20px;
`;

const TopMessage = styled.div`
  width: 100vw;
  height: 130px;
  margin-bottom: 20px;
  padding: 10px;

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
  height: 400px;
  background-color: #e5cdb3;
  margin: 0 10px;
  border-radius: 25px;
  padding: 30px;
  display: flex;

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

const PlanMessage = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;

  @media (max-width: 700px) {
    margin-left: 0px;
    h1 {
      margin: 30px 0;
    }
  }
`;

const ToSignPlanButton = styled.button`
  background: #8c97ea;
  border-radius: 10px;
  width: 168px;
  height: 39px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;

export { Container, TopMessage, BottomBox, PlanMessage, ToSignPlanButton };
