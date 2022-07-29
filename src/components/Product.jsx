// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    // border: 1px solid black;
    margin: 4px;
    box-shadow: 5px 5px #888888;
    border-radius: 2px;

`;
const CardImg = styled.img`
object-position: 50% 50%;
object-fit: cover;


`;
const CardBody= styled.div`
color:grey;
`;
const CardTitle = styled.div`
`;
const CardText = styled.div`
padding:4px;
`;
const CardText2 = styled.span`
background-color: #4CAF50;
color:black;
`;
const Button = styled.div`
margin-top: 6px;

background-color: grey; 
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;

`;

const Product = ({ item }) => {
  return (
 
    <Card style={{ width: '18rem' }}>
    <CardImg img src={item.img} width='288px' height='180px'/>
    <CardBody>
      <CardTitle>
      <NavLink style={{ textDecoration: 'none', color: 'grey' }}  to="/product"><b>{item.title}</b></NavLink>

      </CardTitle>
      <CardText>
      ₹ {item.amount}
      </CardText>
      <CardText2>
        {item.rating}
      </CardText2><br/>
      <Button variant="primary">Add to Cart</Button>
    </CardBody>
  </Card>

  );
};

export default Product;