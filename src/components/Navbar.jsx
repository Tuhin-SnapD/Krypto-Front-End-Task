import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

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
  margin-left: 30px;
  color:white;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>ShopKart.</Logo>
        </Left>
        
        <Right>
          <MenuItem>Products</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;