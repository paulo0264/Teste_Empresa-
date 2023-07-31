import { Container } from "./styles";

const Card = ({ title, price }) => {
  return (
    <Container>
      <div className="product-card">
        <h2>{title}</h2>
        <p>Price: ${price}</p>
      </div>
    </Container>
  );
};
  
  export default Card;