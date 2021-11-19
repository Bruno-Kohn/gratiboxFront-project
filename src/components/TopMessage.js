import { Message } from '../styles/InfosStyle.js';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';

export default function TopMessage() {
  const { userData } = useContext(UserContext);
  const userName = userData.name?.split(' ')[0];

  return (
    <Message>
      <h1>Bom te ver por aqui, {userName}</h1>
      <h2>“Agradecer é arte de atrair coisas boas”</h2>
    </Message>
  );
}
