import Image from "next/image";
import BackgroundImage from "@/assets/gallery/twelve.jpeg";
import GroupLogo from "@/assets/group-logo.png"
import Pricing from "./Pricing";
import Container from "@/components/ui/Container";


export default function ItenaryCost() {
  return (
    <section className={`relative w-full mt-20 py-10`}>

      <Image src={BackgroundImage} alt="itenary cost background image" layout='fill' className={`object-cover -z-10`} />
      <Container className="grid lg:grid-cols-[1fr_1.5fr] space-y-10">

        <figure className={`relative w-full h-48 lg:h-72 lg:translate-x-10 lg:mt-8`}>
          <Image
            src={GroupLogo} alt="Alem travel itenary cost"
            layout="fill"
            style={{ objectFit: "contain" }}
          />
        </figure>

        <Pricing />
      </Container>
    </section>
  )
}