import React, { useState } from 'react';
import './produtos.scss';
import bolo from '../image/bolo.jpeg';
import chocolate from '../image/bolo da vo do break.jpg';
import individuais from '../image/Doces Individuais.jpg';
import combo from '../image/Combo de Festas.jpg';
import Cabegalho from '../cabegalho/cabegalho';


const products = [
  {
    id: 1,
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com recheio cremoso.',
    price: 25.00,
    image: chocolate,
    type: 'bolo',
  },
  {
    id: 2,
    name: 'Bolo de Baunilha',
    description: 'Bolo leve de baunilha com cobertura de chantilly.',
    price: 20.00,
    image: bolo,
    type: 'bolo',
  },
  {
    id: 3,
    name: 'Doces Individuais',
    description: 'Uma seleção de doces variados para você saborear.',
    price: 3.00,
    image: individuais,
    type: 'doce',
  },
  {
    id: 4,
    name: 'Combo de Festas',
    description: 'Bolo + 12 doces individuais a um preço especial.',
    price: 70.00,
    image: combo,
    type: 'combo',
  },
];

const Products = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    console.log(`Adicionado ao carrinho: ${product.name}, Quantidade: ${quantity}`);
  };

  return (
    <div className="products-container">
      <Cabegalho />
      <h1>Nosso Cardápio de Produtos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">R$ {product.price.toFixed(2)}</p>
            <label>
              Quantidade:
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />
            </label>
            {product.type === 'bolo' && (
              <>
                <label>
                  Peso (kg):
                  <input type="number" min="1" placeholder="Peso" />
                </label>
                <label>
                  Cor do Bolo:
                  <input type="text" placeholder="Ex: Vermelho" />
                </label>
              </>
            )}
            {product.type === 'doce' && (
              <label>
                Tipo de Doce:
                <input type="text" placeholder="Ex: Brigadeiro" />
              </label>
            )}
            <div className="button-container">
              <button className="view-button">Ver Produto</button>
              <button className="add-button" onClick={() => handleAddToCart(product)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;