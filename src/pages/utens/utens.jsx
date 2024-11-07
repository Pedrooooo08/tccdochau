import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './utens.scss';

import s1 from '../image/8c73a2af-91e0-4828-b6b9-9ced67807093___5fe5931756ee3916a0d24bf7061ae26e.webp';
import s2 from '../image/7fba2b2d-8940-4a3e-a918-53491a9bfa06___4af97d7985220205208a6c8373723c4c.webp';
import i1 from '../image/colher.png';
import i2 from '../image/silicone.webp';
import i3 from '../image/kit.webp';
import i4 from '../image/espatula.jpeg';
import i5 from '../image/fouet.png';
import i6 from '../image/batadeira.jpeg';






const swiperSlides = [
    { image: s1, text: "Utensílios & Bicos de Confeitar" },
    { image: s2, text: "itens" },
];

const produtos = [
    {
        id: 1,
        name: "kit de confeitaria ",
        price: 70.00,
        image: i3,
        type: "colher",
    },
    {
        id: 1,
        name: "Colhe de Silicone",
        price: 10.39,
        image: i1,
        type: "colher",
    },
    {
        id: 3,
        name: "forma de silicone para trufa ",
        price: 19.89,
        image: i2,
    },
    {
        id: 1,
        name: " Espátula ",
        price: 14.39,
        image: i4,
        type: "colher",
    },
    {
        id: 1,
        name: "Fouet",
        price: 14.39,
        image: i5,
        type: "colher",
    },
    {
        id: 1,
        name: "Batedeira",
        price: 210.0 ,
        image: i6,
        type: "colher",
    },
];

const CartaoProduto = ({ produto, onAddToCart, quantidade, onQuantidadeChange }) => (
    <div className="cartao-produto">
        <div className="imagem-produto">
            <img src={produto.image} alt={produto.name} />
        </div>
        <h3>{produto.name}</h3>
        <p className="preco">R$ {produto.price.toFixed(2)}</p>
        <label>
            Quantidade:
            <input
                type="number"
                min="1"
                value={quantidade || 1}
                onChange={(e) => onQuantidadeChange(produto.id, e.target.value)}
            />
        </label>
        <button className="botao-adicionar" onClick={() => onAddToCart(produto)}>
            Adicionar ao Carrinho
        </button>
    </div>
);

const UtensiliosEBicosContent = () => {
    const [quantidades, setQuantidades] = useState({});
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);

    const handleQuantidadeChange = (id, value) => {
        setQuantidades({ ...quantidades, [id]: parseInt(value) });
    };

    const handleAddToCart = (produto) => {
        const quantidade = quantidades[produto.id] || 1;
        const novoItem = { ...produto, quantidade };

        setCarrinho((prevCarrinho) => {
            const produtoExistente = prevCarrinho.find((item) => item.id === produto.id);
            let carrinhoAtualizado;

            if (produtoExistente) {
                carrinhoAtualizado = prevCarrinho.map((item) =>
                    item.id === produto.id ? { ...item, quantidade: item.quantidade + quantidade } : item
                );
            } else {
                carrinhoAtualizado = [...prevCarrinho, novoItem];
            }

            const novoTotal = carrinhoAtualizado.reduce((acc, item) => acc + item.price * item.quantidade, 0);
            setTotal(novoTotal);

            return carrinhoAtualizado;
        });
    };

    const handleCheckout = () => {
        if (carrinho.length === 0) {
            alert("O carrinho está vazio.");
            return;
        }

        alert(`Compra concluída! Total: R$ ${total.toFixed(2)}`);
        setCarrinho([]);
        setTotal(0);
    };

    return (
        <div className="conteudo-utensilios-bicos">
            <Swiper spaceBetween={10} slidesPerView={1} loop>
                {swiperSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="conteudo-swiper">
                            <img src={slide.image} alt={slide.text} />
                            <h2>{slide.text}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="lista-produtos">
                <h2>Espátulas</h2>
                <div className="grid-produtos">
                    {produtos.map((produto) => (
                        <CartaoProduto
                            key={produto.id}
                            produto={produto}
                            quantidade={quantidades[produto.id]}
                            onQuantidadeChange={handleQuantidadeChange}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>

            <div className="carrinho-compras">
                <h2>Carrinho</h2>
                {carrinho.length === 0 ? (
                    <p>O carrinho está vazio.</p>
                ) : (
                    <ul>
                        {carrinho.map((item) => (
                            <li key={item.id}>
                                {item.name} - Quantidade: {item.quantidade} - Preço: R$ {(item.price * item.quantidade).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Total: R$ {total.toFixed(2)}</h3>
                <button onClick={handleCheckout} disabled={carrinho.length === 0}>
                    Concluir Compra
                </button>
            </div>
        </div>
    );
};

export default UtensiliosEBicosContent;
