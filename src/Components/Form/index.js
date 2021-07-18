import React, { useState } from 'react';
import { saveInDb } from '../../constants/saveInDb';
import { 
  Container, 
  FormContainer,
  Sentences,
  InputEmail,
  ActionButton
} from './style';

function Form() {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <FormContainer>
        <Sentences>Deseja receber nossas Promoções?</Sentences>
        <Sentences>Cadastre seu e-mail</Sentences>
        <InputEmail 
          type="email" 
          placeholder='email@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <ActionButton onClick={() => saveInDb()}>
          Inscrever
        </ActionButton>
      </FormContainer>
    </Container>
  );
}

export default Form;