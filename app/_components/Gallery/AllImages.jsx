
import ImageOne from "@/assets/gallery/one.webp"
import ImageTwo from "@/assets/gallery/two.webp"
import ImageThree from "@/assets/gallery/three.webp"
import ImageFour from "@/assets/gallery/four.webp"
import ImageFive from "@/assets/gallery/five.webp"

import ImageSix from "@/assets/gallery/six.webp"
import ImageSeven from "@/assets/gallery/seven.webp"
import ImageEight from "@/assets/gallery/eight.webp"
import ImageNine from "@/assets/gallery/nine.webp"
import ImageTen from "@/assets/gallery/ten.webp"
import ImageEleven from "@/assets/gallery/eleven.webp"
import ImageTwelve from "@/assets/gallery/twelve.webp"
import ImageThirteen from "@/assets/gallery/thirteen.webp"
import ImageFourteen from "@/assets/gallery/fourteen.webp"



import SliderWrapper from "./SliderWrapper";



export default function AllImages() {
  return (
    <div>
      <SliderWrapper
        placeName={""}
        images={[
          ImageOne,
          ImageTwo,
          ImageThree,
          ImageFour,
          ImageFive,
          ImageSix,
          ImageSeven,
          ImageEight,
          ImageNine,
          ImageTen,
          ImageEleven,
          ImageTwelve,
          ImageThirteen,
          ImageFourteen
        ]}
      />
    </div>
  )
}