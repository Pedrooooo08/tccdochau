import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s1 from '../image/d2.webp';
import s2 from '../image/d3.webp';

const swiperSlides = [
    { image: s1, text: "Utensílios & Bicos de Confeitar" },
    { image: s2, text: "Outro Slide" },
    // Adicione mais slides conforme necessário
];

const products = [
    {
        name: "Kit Espátula SILVER CHEF",
        price: "R$ 14,39",
        image: "link_para_imagem_do_produto1",
        rating: 4.5,
    },
    {
        name: "Espátula de Silicone Com Cabo Inox",
        price: "R$ 10,99",
        image: "link_para_imagem_do_produto2",
        rating: 4.0,
    },
    {
        name: "Conjunto de Espátula Para Confeitar MIMO STYLE",
        price: "R$ 19,89",
        image: "link_para_imagem_do_produto3",
        rating: 4.5,
    },
    {
        name: "Espátula Para Chocolate P",
        price: "R$ 3,99",
        image: "link_para_imagem_do_produto4",
        rating: 3.5,
    },
];

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>Adicionar</button>
    </div>
);

const UtensiliosEBicosContent = () => (
    <div className="utensilios-bicos-content">
        {/* Swiper (Carrossel) */}
        <Swiper spaceBetween={10} slidesPerView={1} loop>
            {swiperSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="swiper-slide-content">
                        <img src={slide.image} alt={slide.text} />
                        <h2>{slide.text}</h2>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* Lista de Produtos */}
        <div className="product-list">
            <h2>Espátulas</h2>
            <div className="products">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    </div>
);

export default UtensiliosEBicosContent;
