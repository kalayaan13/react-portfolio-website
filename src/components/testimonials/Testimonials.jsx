import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Marielle Garcia',
    career: 'Reports Analyst',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corrupti dicta fugit quas ipsam, deserunt quibusdam suscipit quasi harum odio illum voluptatem nemo nihil obcaecati dolorem expedita ipsum eveniet similique."
  },
  {
    avatar: AVTR2,
    name: 'Cherrie Lynne Gangcuangco',
    career: 'PowerApp Developer',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corrupti dicta fugit quas ipsam, deserunt quibusdam suscipit quasi harum odio illum voluptatem nemo nihil obcaecati dolorem expedita ipsum eveniet similique."
  },
  {
    avatar: AVTR3,
    name: 'Camille Ann Santos',
    career: 'Content Moderator',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corrupti dicta fugit quas ipsam, deserunt quibusdam suscipit quasi harum odio illum voluptatem nemo nihil obcaecati dolorem expedita ipsum eveniet similique."
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corrupti dicta fugit quas ipsam, deserunt quibusdam suscipit quasi harum odio illum voluptatem nemo nihil obcaecati dolorem expedita ipsum eveniet similique."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, career, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <h6 className="client__career">{career}</h6>
              <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials