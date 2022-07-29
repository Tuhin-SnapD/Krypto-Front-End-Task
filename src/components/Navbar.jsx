import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { NavLink} from 'react-router-dom';

const Container = styled.div`
  height: 90px;
  background-color: #2596be;
`;

const Wrapper = styled.div`
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 0px 10px;
  color:white;
  textDecoration: none;

`;

const Navbar = () => {
  return (
   
    <Container>
      <Wrapper>
        <Left>
        <Logo><NavLink style={{ textDecoration: 'none', color: 'white' }}  to="/">ShopKart.</NavLink></Logo>
        </Left>
        
        <Right>
            
          <MenuItem><NavLink style={{ textDecoration: 'none', color: 'white' }}  to="/home">Products</NavLink></MenuItem>
          <MenuItem><NavLink style={{ textDecoration: 'none', color: 'white'  }} to="/register">Register</NavLink></MenuItem>
          <MenuItem><NavLink style={{ textDecoration: 'none' , color: 'white' }} to="/">Login</NavLink></MenuItem>
          <MenuItem><NavLink style={{ textDecoration: 'none' , color: 'white' }} to="/cart">
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </NavLink>
          </MenuItem>
          
            

        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;