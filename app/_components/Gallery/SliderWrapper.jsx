"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import OpenPopupButton from "@/components/ui/OpenPopupButton";

const SliderWrapper = ({
  placeName,
  images
}) => {
  return (
    <div>
      <h3 className="text-center text-2xl lg:text-4xl mb-2 lg:mb-5">{placeName}</h3>
      <Swiper
        grabCursor={true}
        navigation={true}
        breakpoints={{
          250: {
            slidesPerView: 1.2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30
          }
        }}
        modules={[Navigation]}
      >

        {
          images.map((image, index) => (
            <SwiperSlide key={`${placeName}-${index}`} className="overflow-hidden rounded-lg">
              <Image
                // layout="fill"
                width={"auto"}
                height={"auto"}
                src={image}
                alt={placeName}
                className="transition duration-500 hover:scale-105"
              />
            </SwiperSlide>

          ))
        }

      </Swiper>

      <div className="mt-10 flex-center">
        <OpenPopupButton />
      </div>
    </div>
  )
}

export default SliderWrapper