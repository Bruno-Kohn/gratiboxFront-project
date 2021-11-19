import styled from 'styled-components';
import { BsCheck2 } from 'react-icons/bs';
import { useState } from 'react';

export default function Check() {
  const [check, setCheck] = useState(false);

  function toCheck() {
    setCheck(!check);
  }

  return (
    <CheckBox>
      <MarkCheck clicked={check} onClick={() => toCheck()} />
    </CheckBox>
  );
}

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
  opacity: ${(props) => (props.clicked ? 1 : 0)};
`;
