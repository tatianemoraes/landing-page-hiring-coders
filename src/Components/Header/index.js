import React from 'react';
import { VscSearch, VscHeart, VscAccount } from "react-icons/vsc";
import { BsBag } from "react-icons/bs";
import { 
  Container, 
  Search, 
  ButtonSearch, 
  InputSearch, 
  Title, 
  H1, 
  Actions, 
  ButtonLike, 
  ButtonAccount, 
  ButtonBag 
} from './style';

function Header() {
  return (
    <Container>
      <Search>
        <ButtonSearch>
          <VscSearch size="25" fill="#858786"/>
        </ButtonSearch>
        <InputSearch type="text" placeholder='Search'/>
      </Search>
      <Title className='main-text'>
        <H1>Kicks</H1>
      </Title>
      <Actions> 
        <ButtonLike>
          <VscHeart size="25" fill="#858786" />
        </ButtonLike>
        <ButtonAccount>
          <VscAccount size="25" fill="#858786"/>
        </ButtonAccount>
        <ButtonBag>
          <BsBag size="25" fill="#858786"/>
        </ButtonBag>
      </Actions>
    </Container>
  );
}

export default Header;
