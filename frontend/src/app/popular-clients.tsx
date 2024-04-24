'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import config from '@/config';
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import {useGetPopularClientsQuery} from "@/services/popular-clients";

export function PopularClients() {
  const { data, isLoading } = useGetPopularClientsQuery();

  return (
    <div>
      <Typography variant="h1" color="blue-gray" className="mb-20 text-center">
        {data?.data[0]?.attributes?.title}
      </Typography>
      <Swiper
        style={{ height: '400px', maxWidth: '1100px' }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="container">
          {!isLoading &&
            data?.data[0]?.attributes?.worker_cards?.data?.map((employee: any) => (
              <SwiperSlide key={employee.id}>
                <div>
                  <div
                    style={{
                      width: '200px',
                      height: '270px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      marginBottom: '20px'
                    }}
                  >
                    <Image
                      width={200}
                      height={200}
                      src={`${config.api}${employee.attributes.workerImage.data[0].attributes.url}`}
                      alt={employee.attributes.workerName}
                      className="employee-image"
                    />
                  </div>
                  <div>
                    <h3 className="employee-name font-bold">{employee.attributes.workerName}</h3>
                    <p className="employee-position">{employee.attributes.workerPosition}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
}

export default PopularClients;
