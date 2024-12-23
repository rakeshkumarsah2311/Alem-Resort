

import ImageOne from "@/assets/dochula/one.jpeg"
import ImageTwo from "@/assets/dochula/two.jpeg"
import ImageThree from "@/assets/dochula/three.jpeg"
import ImageFour from "@/assets/dochula/four.jpeg"
import ImageFive from "@/assets/dochula/five.jpeg"
import SliderWrapper from "./SliderWrapper";


const Dochula = () => {
  return (
    <div>
      <SliderWrapper
        placeName={"Dochula"}
        images={[ImageFour, ImageFive, ImageOne, ImageTwo, ImageThree]}
      />
      
    </div>
  )
}

export default Dochula