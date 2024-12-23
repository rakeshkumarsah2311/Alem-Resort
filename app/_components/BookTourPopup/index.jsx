"use client";

import BookingSystem from "@/components/BookingSystem";
import Image from "next/image";

import { useRouter, useSearchParams } from "next/navigation";
import CloseIcon from "@/assets/close-icon.svg"


const BookTourPopup = () => {

  const searchParams = useSearchParams()
  const router = useRouter()


  const goBack = () => {
    router.back() 
  }

  return (
    <section className={`${searchParams.has("book-demo") ? "flex-center" : "hidden"} fixed z-20 w-screen h-screen inset-0 bg-light/60 px-3 `}>

      
      <div className="w-full h-full h-full max-h-[80vh] lg:max-h-[580px] overflow-y-auto bg-white drop-shadow-primary max-w-2xl mx-auto p-5 rounded-md">
      <Image 
        src={CloseIcon}
        alt="close popup"
        width={40}
        height={40}
        className="absolute top-3 right-3 cursor-pointer"
        onClick={goBack}
      />
        {/* <h3 className="text-4xl text-center">Book Tour</h3> */}
        <div className="flex-center">
          <BookingSystem />
        </div>
      </div>
    </section>
  )
}

export default BookTourPopup