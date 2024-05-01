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
    name: 'Dean Sithole',
    review: 'Munashe is a dedicated team player, consistently delivering high-quality work and driving innovation. Her positive attitude and strong communication skills make her a valuable asset to any project.'
  },
  {
    avatar: Avt2,
    name: 'Brighton Tandabantu',
    review: ' Working with Munashe is a pleasure. She is not only technically proficient but also collaborative and eager to share her knowledge. Her passion for learning and problem-solving is evident in everything she does.'
  },
  {
    avatar: Avt3,
    name: 'Kundai Clayton',
    review: ' Munashe exceeded our expectations on a recent project. Her professionalism, attention to detail, and clear communication made the process smooth and efficient. I highly recommend her for any software development needs.'
  },
  {
    avatar: Avt4,
    name: 'Denver Taylor',
    review: ' Munashe is destined for success. Her enthusiasm for learning and determination to excel set her apart. I have no doubt she will continue to thrive in her career as a software engineer.'
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