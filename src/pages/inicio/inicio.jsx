import React from 'react';
import Cabecalho from '../cabegalho/cabegalho'; 
import Sonho from '../image/7aadb69a-7915-4935-b1a6-635cd8e26193___4883223899b870a1c2244be6095659fb.webp';
import salgado from '../image/756a78c2-7f59-499d-9979-a57a09ec92b7___eb262e7e3c6ef1fb6cb02df817ca952b.webp';
import doces from '../image/tesãoi.webp';
import morango from '../image/guloseimas.webp'
import Footer from '../footer/footer';
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
          <img src={Sonho} alt="Sonho" className="swiper-image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={salgado} alt="Salgado" className="swiper-image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doces} alt="Doces Individuais" className="swiper-image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={morango} alt="Morango" className="swiper-image"/>
        </SwiperSlide>
      </Swiper>
      <h1 className='titulo-principal'>Sabores da Rua</h1>
      <h2 className='subtitulo'>
        Transformando cada doce em uma celebração de sabores, onde a tradição se encontra com a inovação em cada fatia!
      </h2>

     
      <Footer />
    </div>
  );
};

export default INICIO;