import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ item }) => {
  return (
 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.img} width='50%' height='90px'/>
    <Card.Body>
      <Card.Title>
        {item.title}
      </Card.Title>
      <Card.Text>
      ₹ {item.amount}
      </Card.Text>
      <Card.Text>
        {item.rating}
      </Card.Text>
      <Button variant="primary">Buy Now</Button>
    </Card.Body>
  </Card>

  );
};

export default Product;