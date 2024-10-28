import React, { useState } from 'react';
import './sobre.scss';
import Cabegalho from '../cabegalho/cabegalho'

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cardDetails = [
    {
      title: 'Ingredientes Frescos',
      description: 'Usamos apenas ingredientes selecionados para garantir a qualidade dos nossos produtos.',
    },
    {
      title: 'Receitas Artesanais',
      description: 'Cada receita é preparada manualmente, respeitando a tradição e o sabor.',
    },
    {
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe está sempre pronta para atender você da melhor forma possível.',
    },
    {
      title: 'Entrega Rápida',
      description: 'Receba seus pedidos fresquinhos e no conforto da sua casa.',
    },
  ];

  return (
    <div className="about-container">
      <Cabegalho />
      <header className="about-header">
        <div className='texto'>  <h1>Sobre Nós</h1>
          <p>Na nossa confeitaria, cada doce é uma obra de arte feita com amor e dedicação.</p>
        </div>
      </header>

      <section className="about-differentials">
        <h2>Nossos Diferenciais</h2>
        <div className="differentials-grid">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className={`differential ${activeCard === index ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <h3>{card.title}</h3>
              {activeCard === index && <p>{card.description}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
