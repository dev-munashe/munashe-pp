import React from 'react'
import './testimonial.css'
import Avt1 from '../../assets/avatar1.webp'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.avif'

// Import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'


const data = [
  {
    avatar: Avt1,
    name: 'Madrena Taylor',
    review: ' The service provides authentication for apps hosted in the cloud and on-premises. Authentication types include individual accounts, social network accounts, and federated enterprise accounts.'
  },
  {
    avatar: Avt2,
    name: 'Brighton Taylor',
    review: ' The service provides authentication for apps hosted in the cloud and on-premises. Authentication types include individual accounts, social network accounts, and federated enterprise accounts.'
  },
  {
    avatar: Avt3,
    name: 'Tanaka Taylor',
    review: ' The service provides authentication for apps hosted in the cloud and on-premises. Authentication types include individual accounts, social network accounts, and federated enterprise accounts.'
  },
  {
    avatar: Avt4,
    name: 'Ciara Taylor',
    review: ' The service provides authentication for apps hosted in the cloud and on-premises. Authentication types include individual accounts, social network accounts, and federated enterprise accounts.'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slideperview={1}
        pagination={{ clickable: true }}>
        {
        data.map(({avatar, name, review}, index) => {
          return (
           <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="clientImg" />
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonial