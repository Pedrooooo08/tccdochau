import React from 'react';
import Cabecalho from '../cabegalho/cabegalho';
import Sonho from '../image/7aadb69a-7915-4935-b1a6-635cd8e26193___4883223899b870a1c2244be6095659fb.webp';
import novo from '../image/36397263-115b-4fad-90a2-84ac9298b8ce___b303a223a4d89ad5368c99dbe464ee52.webp';
import novin from '../image/d2.webp';
import novao from '../image/d3.webp';

import mel from '../image/podemel.webp';
import brow from '../image/brownie.webp';
import van from '../image/brisadeiro.webp';
import bolo from '../image/trufas.webp';
import './inicio.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const INICIO = () => {
  return (
    <div className='inicio-container'>
      <Cabecalho />
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={novao} alt="Sonho" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sonho} alt="Salgado" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={novin} alt="Doces Individuais" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={novo} alt="Morango" className="swiper-image" />
        </SwiperSlide>
      </Swiper>

      <h1 className='titulo-principal'>Sabores da Rua</h1>
      <h2 className='subtitulo'>
        Transformando cada doce em uma celebração de sabores, onde a tradição se encontra com a inovação em cada fatia!
      </h2>

      <div className="produtos">
        <h2>Nossos Produtos</h2>
        <div className="produtos-container">
          <div className="produto-item">
            <img src={van} alt="Produto 1" />
            <p>Brigadeiro - 3,00 R$</p>
          </div>
          <div className="produto-item">
            <img src={mel} alt="Produto 2" />
            <p>Pão de mel - 6,00 R$</p>
          </div>
          <div className="produto-item">
            <img src={bolo} alt="Produto 3" />
            <p>Trufa - 4,50 R$</p>
          </div>
          <div className="produto-item">
            <img src={brow} alt="Produto 4" />
            <p>Brownie - 8,00 R$</p>
          </div>
        </div>
      </div>

    
    
    </div>
  );
};

export default INICIO;
