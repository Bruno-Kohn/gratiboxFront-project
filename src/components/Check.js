import { CheckBox, MarkCheck } from '../styles/InfosStyle.js';
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
