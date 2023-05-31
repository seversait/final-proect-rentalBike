import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ListGroup from 'react-bootstrap/ListGroup';
import { Pagination, Navigation } from "swiper";
import home from "./mainBike.svg";
import signup from "./BlueBicycle.svg";
import signups from "./bicycle.svg";
import "./home.css";

export const Home = () => {
  return (
    <main className="home">
        <div  className="about">
     <h1>Прокат велосипедов</h1>
     <p>Приглашаем Вас летом и зимой воспользоваться нашей сетью проката велосипедов для активного отдыха с семьей, с друзьями и близкими. Мы рады предложить вам хорошее настроение и качественный сервис!</p>
   	 </div>
	  <img className="ride" src={home} alt="велосипед" />
    
	 <h2>Что делать, если велосипед пропал?</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <p>Пропал велесипед?
            Не стоит расстраиваться, мы вам поможем</p>
             <img src={signup} alt="Велосипед" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div>
          <p>Cообщитe о проблеме на нашем сайте, заполнив форму.</p>
            <img src={signups} alt="Велосипед" />
          </div>
          </SwiperSlide>
      </Swiper>
      
    </main>
  );
};