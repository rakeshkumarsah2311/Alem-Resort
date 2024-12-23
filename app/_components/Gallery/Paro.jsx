
import ImageOne from "@/assets/paro/one.jpeg"
import ImageTwo from "@/assets/paro/two.jpeg"
import ImageThree from "@/assets/paro/three.jpeg"
import ImageFour from "@/assets/paro/four.jpeg"
import SliderWrapper from "./SliderWrapper";

const Paro = () => {
  return (
    <div>
      <SliderWrapper
        placeName={"Paro"}
        images={[ImageOne, ImageTwo, ImageThree, ImageFour]}
      />

      
    </div>
  )
}

export default Paro