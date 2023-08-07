import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Função para fazer a chamada para a API
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da API');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const displayedProducts = data.slice(0, 4);

  return (
    <>
      <Header />
      <main>
      <h2>Produtos</h2>
        <ul class="produtos">
        {displayedProducts.map((product) => (
          <li>
            <div className="image-product">
              <img src={product.image} alt="" />
              <h2>{product.title}</h2>
              <p>Rating: Classificação</p>
                {/* <p class="produto-descricao">{product.category}</p> */}
                <p class="produto-preco">R$ {product.price}</p>
            </div>
              <div className="buttons-container">
                <button className="buy-button">Comprar</button>
                <button className="add-to-cart-button"><i></i></button>
              </div>
          </li>
          ))}
        </ul>
      </main>
      <div className='form'>
        <ContactForm />
        <h3>MARKET</h3>
        {/* <h3>MAR</h3>
        <h3>KET</h3> */}
      </div>
    </>
  );
}

export default App;
