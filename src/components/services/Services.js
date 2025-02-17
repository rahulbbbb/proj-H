import React, { useState } from 'react';
import './testimonials.css';
import { Data } from './Dataa';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='services section' id="services">
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What we offer</span>

      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className='testimonial__container'
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt="Testimonial" className='testimonial__img' />
              <h3 className='testimonial__name'>{title}</h3>
              <div className='card__button' onClick={() => toggleTab(id)}>
                Service Details
                <BsFillArrowRightCircleFill className='card__button-icon' />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {toggleState !== 0 && (
  <div className='services__modal active__modal'>
    <div className='services__modal-content'>
      <GrClose className='services__modal-close' onClick={() => toggleTab(0)} />
      {Data.map(({ id, title, description }) => {
        if (id === toggleState) {
          return (
            <div key={id}>
              <h3 className='services__modal-title'>{title}</h3>
              <p className='services__modal-description'>{description}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  </div>
)}
    </section>
  );
};

export default Services;
